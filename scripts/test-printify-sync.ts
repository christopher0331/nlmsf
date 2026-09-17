import assert from "node:assert/strict";
import { mapPrintifyProduct, type PrintifyShopProduct } from "../lib/merch/printify-map";
import { getMerchPrisma } from "../lib/merch/ensure-schema";
import { ensurePublishedPrintifyListings, syncPrintifyProductsToListings } from "../lib/merch/printify-sync";
import { toShopListing } from "../lib/merch/dto";

const PIXEL_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);

function teeProduct(id: string, title: string, extraColorTitle = "Heather Purple"): PrintifyShopProduct {
  return {
    id,
    title,
    description: `<p>${title}</p><p>Printed for the National Leiomyosarcoma Foundation.</p>`,
    blueprint_id: 12,
    print_provider_id: 99,
    visible: true,
    tags: ["Apparel", "Unisex", "T-Shirt"],
    options: [
      {
        name: "Colors",
        type: "color",
        values: [
          { id: 1, title: "Black", colors: ["#111111"] },
          { id: 2, title: "White", colors: ["#ffffff"] },
          { id: 3, title: extraColorTitle, colors: ["#6D28D9"] },
        ],
      },
      {
        name: "Sizes",
        type: "size",
        values: [
          { id: 10, title: "S" },
          { id: 11, title: "M" },
          { id: 12, title: "L" },
          { id: 13, title: "XL" },
          { id: 14, title: "2XL" },
          { id: 15, title: "3XL" },
        ],
      },
    ],
    variants: [
      { id: 101, title: "Black / M", price: 2499, is_enabled: true, is_default: true, options: [1, 11] },
      { id: 102, title: "White / L", price: 2499, is_enabled: true, options: [2, 12] },
      { id: 103, title: `${extraColorTitle} / S`, price: 2499, is_enabled: true, options: [3, 10] },
      { id: 104, title: "Black / XL", price: 2499, is_enabled: false, options: [1, 13] },
    ],
    images: [
      {
        src: "https://images.printify.com/mockup/example-front.jpg",
        position: "front",
        is_default: true,
        variant_ids: [101],
      },
    ],
    print_areas: [
      {
        variant_ids: [101, 102, 103],
        placeholders: [
          {
            position: "front",
            images: [
              {
                id: "art-1",
                src: "https://images.printify.com/artwork-nlmsf.png",
                type: "image/png",
                width: 4500,
                height: 5400,
              },
            ],
          },
        ],
      },
    ],
  };
}

async function main() {
  const first = teeProduct("6aaaf7a0d6dccab5fb0d9ccc", "NLMSF Test Tee nlmsf.org");
  const second = teeProduct("6aaaf795b04bce66250449a5", "NLMSF Test Tee — nlmsf.org", "Navy");

  const mappedFirst = mapPrintifyProduct(first);
  const mappedSecond = mapPrintifyProduct(second);
  assert.ok(mappedFirst, "first test tee should map");
  assert.ok(mappedSecond, "second test tee should map");
  assert.equal(mappedFirst.mediumId, "short_tee");
  assert.equal(mappedSecond.mediumId, "short_tee");
  assert.equal(mappedFirst.title, "NLMSF Test Tee nlmsf.org");
  assert.ok(mappedFirst.colorIds.includes("black"));
  assert.ok(mappedFirst.colorIds.includes("white"));
  assert.ok(mappedFirst.colorIds.includes("purple"));
  assert.ok(mappedSecond.colorIds.includes("navy"));
  assert.deepEqual(mappedFirst.sizes, ["S", "M", "L"]);
  assert.equal(mappedFirst.artworkUrl, "https://images.printify.com/artwork-nlmsf.png");
  assert.equal(mappedFirst.mockupUrl, "https://images.printify.com/mockup/example-front.jpg");
  assert.equal(mappedFirst.mockupsByColor.black, "https://images.printify.com/mockup/example-front.jpg");
  assert.equal(mappedFirst.priceCents, 2499);
  assert.equal(mappedFirst.variants.length, 3, "disabled variants are omitted");

  const prisma = await getMerchPrisma();
  await prisma.merchListing.deleteMany({
    where: { printifyProductId: { in: [first.id, second.id] } },
  });
  await prisma.merchDesign.deleteMany({
    where: { source: "printify", title: { in: [first.title ?? "", second.title ?? ""] } },
  });

  const result = await syncPrintifyProductsToListings([first, second], {
    prisma,
    publish: true,
    markPublished: false,
    origin: "http://localhost:3000",
    downloadImage: async () => ({ bytes: PIXEL_PNG, mimeType: "image/png" }),
  });

  assert.equal(result.created.length, 2, `expected 2 created, got ${JSON.stringify(result)}`);
  assert.equal(result.skipped.length, 0, JSON.stringify(result.skipped));
  assert.ok(result.created.every((item) => item.published));

  const again = await syncPrintifyProductsToListings([first, second], {
    prisma,
    publish: true,
    markPublished: false,
    origin: "http://localhost:3000",
    downloadImage: async () => ({ bytes: PIXEL_PNG, mimeType: "image/png" }),
  });
  assert.equal(again.created.length, 0);
  assert.equal(again.updated.length, 2);

  const listings = await prisma.merchListing.findMany({
    where: { published: true },
    include: { design: { select: { id: true, title: true } } },
    orderBy: { createdAt: "desc" },
  });
  const shop = listings.map(toShopListing);
  const titles = shop.map((listing) => listing.title);
  assert.ok(titles.includes("NLMSF Test Tee nlmsf.org"));
  assert.ok(titles.includes("NLMSF Test Tee — nlmsf.org"));
  assert.ok(shop.every((listing) => listing.published));
  assert.ok(shop.every((listing) => listing.printifyProductId));
  const firstShop = shop.find((listing) => listing.printifyProductId === "6aaaf7a0d6dccab5fb0d9ccc");
  assert.ok(firstShop);
  assert.ok(firstShop.colorOptions.some((color) => color.id === "purple"));
  assert.ok(firstShop.sizes.includes("M"));
  assert.equal(firstShop.mockupUrl, "https://images.printify.com/mockup/example-front.jpg");
  assert.equal(firstShop.hasPrintifyMockup, true);

  const g = globalThis as unknown as { printifyEnsureDone: unknown; printifyEnsureInflight: unknown };
  g.printifyEnsureDone = null;
  g.printifyEnsureInflight = null;
  const ensured = await ensurePublishedPrintifyListings();
  assert.equal(ensured.complete, true);
  assert.deepEqual(ensured.missing, []);

  await prisma.merchListing.updateMany({
    where: { printifyProductId: first.id },
    data: { published: false },
  });
  g.printifyEnsureDone = null;
  const republished = await ensurePublishedPrintifyListings();
  assert.equal(republished.complete, true);
  assert.ok(republished.publishedExisting >= 1);
  const after = await prisma.merchListing.findFirst({ where: { printifyProductId: first.id } });
  assert.equal(after?.published, true);

  console.log(
    JSON.stringify(
      {
        ok: true,
        created: result.created.map((item) => ({ title: item.title, slug: item.slug, published: item.published })),
        listings: shop.map((listing) => ({
          title: listing.title,
          slug: listing.slug,
          published: listing.published,
          printifyProductId: listing.printifyProductId,
          mediumId: listing.mediumId,
          sizes: listing.sizes,
          colors: listing.colorOptions.map((color) => color.id),
        })),
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
