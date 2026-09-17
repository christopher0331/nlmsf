import assert from "node:assert/strict";
import { listingVariantForCart, toShopListing } from "../lib/merch/dto";
import { getMerchPrisma } from "../lib/merch/ensure-schema";
import type { PrintifyCatalogVariant, PrintifyCreateProductInput } from "../lib/merch/printify";
import {
  attachPrintifyProductToListing,
  hidePrintifyTestListings,
  listingNeedsPrintifyProduct,
  printPlacement,
  selectCatalogVariantsForListing,
} from "../lib/merch/printify-publish";
import { getMedium } from "../lib/merch/catalog";
import type { PrintifyShopProduct } from "../lib/merch/printify-map";

const PIXEL_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);

function hoodieCatalog(): PrintifyCatalogVariant[] {
  const colors = [
    { color: "Purple", colorId: 1 },
    { color: "Black", colorId: 2 },
    { color: "White", colorId: 3 },
    { color: "Sport Grey", colorId: 4 },
  ];
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const variants: PrintifyCatalogVariant[] = [];
  let id = 40000;
  for (const color of colors) {
    for (const size of sizes) {
      variants.push({
        id: id++,
        title: `${color.color} / ${size}`,
        options: { color: color.color, size },
        placeholders: [{ position: "front", decoration_method: "dtg" }],
      });
    }
  }
  return variants;
}

function createdProduct(input: PrintifyCreateProductInput): PrintifyShopProduct {
  const colorByVariant = new Map(
    hoodieCatalog().map((variant) => [variant.id, variant]),
  );
  return {
    id: "created-hoodie-1",
    title: input.title,
    description: input.description,
    blueprint_id: input.blueprintId,
    print_provider_id: input.printProviderId,
    visible: true,
    options: [
      {
        name: "Colors",
        type: "color",
        values: [
          { id: 1, title: "Purple", colors: ["#6D28D9"] },
          { id: 2, title: "Black", colors: ["#111111"] },
          { id: 3, title: "White", colors: ["#ffffff"] },
        ],
      },
      {
        name: "Sizes",
        type: "size",
        values: [
          { id: 10, title: "S" },
          { id: 11, title: "M" },
        ],
      },
    ],
    variants: input.variants.map((variant, index) => {
      const catalog = colorByVariant.get(variant.id);
      return {
        id: variant.id,
        title: catalog?.title ?? `Variant ${variant.id}`,
        price: variant.price,
        is_enabled: variant.is_enabled !== false,
        is_default: index === 0,
        options: catalog
          ? undefined
          : undefined,
      };
    }).map((variant) => {
      const catalog = colorByVariant.get(variant.id);
      const colorId = catalog?.options?.color === "Black" ? 2 : catalog?.options?.color === "White" ? 3 : 1;
      const sizeId = catalog?.options?.size === "M" ? 11 : 10;
      return { ...variant, options: [colorId, sizeId] };
    }),
    images: [
      {
        src: "https://images.printify.com/mockup/hope-courage-hoodie-front.jpg",
        position: "front",
        is_default: true,
        variant_ids: input.variants.map((variant) => variant.id),
      },
    ],
    print_areas: [
      {
        variant_ids: input.variants.map((variant) => variant.id),
        placeholders: [
          {
            position: "front",
            images: [{ id: "upload-1", src: "https://images.printify.com/art.png", type: "image/png", width: 2000, height: 2000 }],
          },
        ],
      },
    ],
  };
}

async function main() {
  const hoodie = getMedium("hoodie");
  assert.ok(hoodie);
  const selected = selectCatalogVariantsForListing(hoodieCatalog(), hoodie, ["purple", "black", "white"]);
  assert.ok(selected.length >= 12, `expected purple/black/white hoodie sizes, got ${selected.length}`);
  assert.ok(selected.every((variant) => ["Purple", "Black", "White"].includes(variant.options?.color ?? "")));
  assert.equal(printPlacement("hoodie").position, "front");
  assert.equal(printPlacement("hat").position, "front_dtf");

  const prisma = await getMerchPrisma();
  await prisma.merchListing.deleteMany({
    where: {
      OR: [
        { slug: { in: ["hope-courage-strength-2-hoodie", "nlmsf-test-tee-hide-check"] } },
        { printifyProductId: { in: ["created-hoodie-1", "6aaaf7a0d6dccab5fb0d9ccc-hide"] } },
      ],
    },
  });
  await prisma.merchDesign.deleteMany({ where: { title: "Hope Courage Strength 2" } });

  const design = await prisma.merchDesign.create({
    data: {
      title: "Hope Courage Strength 2",
      prompt: "test",
      themeId: "champion-hope",
      imageMime: "image/png",
      imageData: new Uint8Array(PIXEL_PNG),
      source: "studio",
      status: "approved",
    },
  });
  const listing = await prisma.merchListing.create({
    data: {
      designId: design.id,
      mediumId: "hoodie",
      slug: "hope-courage-strength-2-hoodie",
      title: "Hope Courage Strength 2 Hoodie",
      description: "Heavy-blend hoodie",
      priceCents: 4600,
      colorsJson: JSON.stringify(["purple", "black", "white"]),
      published: true,
    },
  });

  const created = await attachPrintifyProductToListing(listing.id, {
    prisma,
    waitForMockups: false,
    deps: {
      uploadImage: async () => ({ id: "upload-1", file_name: "art.png" }),
      createProduct: async (input) => createdProduct(input),
      getProduct: async () => createdProduct({
        title: listing.title,
        description: listing.description,
        blueprintId: hoodie.blueprintId,
        printProviderId: hoodie.printProviderId,
        variants: selected.slice(0, 3).map((variant) => ({ id: variant.id, price: 4600, is_enabled: true })),
        printAreas: [],
      }),
      listVariants: async () => hoodieCatalog(),
      listProducts: async () => [],
      waitForMockups: async (id) => createdProduct({
        title: listing.title,
        description: listing.description,
        blueprintId: hoodie.blueprintId,
        printProviderId: hoodie.printProviderId,
        variants: [{ id: selected[0].id, price: 4600, is_enabled: true }],
        printAreas: [],
      }),
      markPublished: async () => undefined,
    },
  });

  assert.equal(created.action, "created");
  assert.equal(created.productId, "created-hoodie-1");
  assert.equal(created.hasPrintifyMockup, true);

  const saved = await prisma.merchListing.findUnique({
    where: { id: listing.id },
    include: { design: { select: { id: true, title: true } } },
  });
  assert.ok(saved?.printifyProductId);
  const shop = toShopListing(saved!);
  assert.equal(shop.hasPrintifyMockup, true);
  assert.equal(shop.mockupUrl, "https://images.printify.com/mockup/hope-courage-hoodie-front.jpg");
  const cartMatch = listingVariantForCart(saved!, shop.colorOptions[0]?.id ?? "purple", shop.sizes[0] ?? "S");
  assert.ok(cartMatch?.productId);
  assert.equal(typeof cartMatch?.variant.id, "number");

  const testListing = await prisma.merchListing.create({
    data: {
      designId: design.id,
      mediumId: "short_tee",
      slug: "nlmsf-test-tee-hide-check",
      title: "NLMSF Test Tee hide check",
      description: "test",
      priceCents: 2800,
      colorsJson: JSON.stringify(["black"]),
      published: true,
      printifyProductId: "6aaaf7a0d6dccab5fb0d9ccc-hide",
    },
  });
  assert.equal(listingNeedsPrintifyProduct(saved!), false, "listing with mockup should not need another push");
  assert.equal(listingNeedsPrintifyProduct(testListing), false, "test tees are left alone");
  assert.equal(
    listingNeedsPrintifyProduct({ ...saved!, printifyProductId: null, printifyVariantsJson: null }),
    true,
    "published studio listings without a Printify id need a push",
  );

  const hidden = await hidePrintifyTestListings(prisma);
  assert.ok(hidden.unpublished >= 1);
  const afterHide = await prisma.merchListing.findUnique({ where: { id: testListing.id } });
  assert.equal(afterHide?.published, false);

  await prisma.merchListing.deleteMany({
    where: { id: { in: [listing.id, testListing.id] } },
  });
  await prisma.merchDesign.deleteMany({ where: { id: design.id } });

  console.log(JSON.stringify({
    ok: true,
    created: { productId: created.productId, hasPrintifyMockup: created.hasPrintifyMockup },
    shop: { mockupUrl: shop.mockupUrl, printifyProductId: shop.printifyProductId },
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
