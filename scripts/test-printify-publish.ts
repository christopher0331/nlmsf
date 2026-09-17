import assert from "node:assert/strict";
import {
  isTestMerchListing,
  isTestMerchTitle,
  isTestPrintifyProductId,
  printifyListingTag,
} from "../lib/merch/printify-map";
import { catalogVariantMatches } from "../lib/merch/printify";
import {
  buildPrintifyProductPayload,
  enabledCatalogVariants,
  unpublishTestMerchListings,
} from "../lib/merch/printify-publish";
import { getMerchPrisma } from "../lib/merch/ensure-schema";
import { listingVariantForCart } from "../lib/merch/dto";
import { serializePrintifyVariants, type MappedPrintifyProduct } from "../lib/merch/printify-map";

async function main() {
  assert.equal(isTestPrintifyProductId("6aaaf7a0d6dccab5fb0d9ccc"), true);
  assert.equal(isTestPrintifyProductId("not-a-test"), false);
  assert.equal(isTestMerchTitle("NLMSF Test Tee nlmsf.org"), true);
  assert.equal(isTestMerchTitle("NLMSF Test Tee — nlmsf.org"), true);
  assert.equal(isTestMerchTitle("Champion of Hope Short Sleeve Tee"), false);
  assert.equal(
    isTestMerchListing({ title: "Champion of Hope Hat", printifyProductId: "6aaaf795b04bce66250449a5" }),
    true,
  );

  const catalog = [
    { id: 1, title: "Black / S", options: { color: "Black", size: "S" } },
    { id: 2, title: "Black / M", options: { color: "Black", size: "M" } },
    { id: 3, title: "White / M", options: { color: "White", size: "M" } },
    { id: 4, title: "Heather Team Purple / L", options: { color: "Heather Team Purple", size: "L" } },
    { id: 5, title: "Navy / XL", options: { color: "Navy", size: "XL" } },
    { id: 6, title: "Black / One Size", options: { color: "Black", size: "OSFA" } },
  ];
  assert.equal(catalogVariantMatches(catalog[0], "Black", "S"), true);
  assert.equal(catalogVariantMatches(catalog[3], "Champion Purple", "L"), true);
  assert.equal(catalogVariantMatches(catalog[5], "Black", "One Size"), true);

  const enabled = enabledCatalogVariants({
    catalog,
    colorNames: ["Black", "White", "Champion Purple"],
    sizes: ["S", "M", "L"],
    priceCents: 2800,
  });
  assert.deepEqual(
    enabled.map((variant) => variant.id).sort((a, b) => a - b),
    [1, 2, 3, 4],
  );
  assert.ok(enabled.every((variant) => variant.price === 2800 && variant.is_enabled));

  const payload = buildPrintifyProductPayload({
    listingId: "listing-1",
    title: "Champion of Hope Short Sleeve Tee",
    description: "Staff-approved NLMSF artwork.",
    blueprintId: 12,
    printProviderId: 99,
    imageId: "img-123",
    position: "front",
    scale: 0.45,
    variants: enabled,
  });
  assert.equal(payload.blueprint_id, 12);
  assert.equal(payload.print_provider_id, 99);
  assert.ok(payload.tags?.includes(printifyListingTag("listing-1")));
  assert.equal(payload.print_areas[0].placeholders[0].position, "front");
  assert.equal(payload.print_areas[0].placeholders[0].images[0].id, "img-123");
  assert.equal(payload.print_areas[0].placeholders[0].images[0].scale, 0.45);
  assert.deepEqual(payload.print_areas[0].variant_ids, enabled.map((variant) => variant.id));

  const mapped: MappedPrintifyProduct = {
    productId: "prod-champ-tee",
    title: "Champion of Hope Short Sleeve Tee",
    description: "Proceeds support LMS research.",
    mediumId: "short_tee",
    priceCents: 2800,
    colorIds: ["black", "white"],
    sizes: ["S", "M"],
    variants: [
      { id: 101, colorId: "black", colorName: "Black", colorHex: "#111827", size: "M", priceCents: 2800 },
    ],
    artworkUrl: null,
    mockupUrl: null,
    mockupsByColor: {},
  };
  const cart = listingVariantForCart(
    { printifyProductId: "prod-champ-tee", printifyVariantsJson: serializePrintifyVariants(mapped) },
    "black",
    "M",
  );
  assert.ok(cart);
  assert.equal(cart.productId, "prod-champ-tee");
  assert.equal(cart.variant.id, 101);

  const prisma = await getMerchPrisma();
  const design = await prisma.merchDesign.create({
    data: {
      title: "Champion of Hope",
      prompt: "test",
      themeId: "champion-hope",
      imageMime: "image/png",
      imageData: new Uint8Array([1, 2, 3]),
      source: "studio",
      status: "approved",
    },
  });
  const champion = await prisma.merchListing.create({
    data: {
      designId: design.id,
      mediumId: "short_tee",
      slug: `champion-hope-test-${Date.now()}`,
      title: "Champion of Hope Short Sleeve Tee",
      description: "Keep this published.",
      priceCents: 2800,
      colorsJson: JSON.stringify(["black", "white"]),
      published: true,
    },
  });
  const testTee = await prisma.merchListing.create({
    data: {
      designId: design.id,
      mediumId: "short_tee",
      slug: `nlmsf-test-tee-hide-${Date.now()}`,
      title: "NLMSF Test Tee nlmsf.org",
      description: "QA only.",
      priceCents: 2499,
      colorsJson: JSON.stringify(["black"]),
      published: true,
      printifyProductId: `test-local-${Date.now()}`,
    },
  });

  const unpublished = await unpublishTestMerchListings({ prisma });
  assert.ok(unpublished >= 1);
  const championAfter = await prisma.merchListing.findUnique({ where: { id: champion.id } });
  const testAfter = await prisma.merchListing.findUnique({ where: { id: testTee.id } });
  assert.equal(championAfter?.published, true);
  assert.equal(testAfter?.published, false);

  await prisma.merchListing.deleteMany({ where: { id: { in: [champion.id, testTee.id] } } });
  await prisma.merchDesign.delete({ where: { id: design.id } });

  console.log(JSON.stringify({ ok: true, unpublished, payloadTitle: payload.title }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
