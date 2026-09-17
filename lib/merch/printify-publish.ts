import type { MerchDesign, MerchListing, PrismaClient } from "@prisma/client";
import { getColor, getMedium, parseColorIds, type MerchMediumId } from "@/lib/merch/catalog";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { slugify } from "@/lib/merch/slug";
import {
  isTestMerchListing,
  mapPrintifyProduct,
  parsePrintifyMockups,
  printifyListingTag,
  serializePrintifyVariants,
  type PrintifyShopProduct,
} from "@/lib/merch/printify-map";
import {
  catalogVariantMatches,
  createPrintifyProduct,
  getPrintifyProduct,
  isPrintifyConfigured,
  listPrintifyCatalogVariants,
  listPrintifyProducts,
  markPrintifyProductPublished,
  uploadPrintifyImage,
  waitForPrintifyProductImages,
  type PrintifyCatalogVariant,
  type PrintifyProductCreatePayload,
} from "@/lib/merch/printify";

export type PrintifyPublishItem = {
  listingId: string;
  title: string;
  printifyProductId: string | null;
  created: boolean;
  linked: boolean;
  hasMockup: boolean;
  error?: string;
};

export type PreparePublicCatalogResult = {
  complete: boolean;
  unpublishedTests: number;
  created: number;
  linked: number;
  mockupsUpdated: number;
  missing: string[];
  items: PrintifyPublishItem[];
  error?: string;
};

type ListingWithDesign = MerchListing & { design: MerchDesign };

const listingLocks = new Map<string, Promise<PrintifyPublishItem>>();
const designUploadCache = new Map<string, string>();

const globalForShopProducts = globalThis as unknown as {
  printifyShopProductsCache: { at: number; products: PrintifyShopProduct[] } | null;
};

function siteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://nlmsf.org"
  ).replace(/\/$/, "");
}

function mimeExtension(mime: string): string {
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  return "png";
}

function printScale(mediumId: MerchMediumId): number {
  if (mediumId === "hat") return 0.72;
  if (mediumId === "hoodie") return 0.5;
  return 0.45;
}

function placeholderPositions(mediumId: MerchMediumId): string[] {
  if (mediumId === "hat") return ["front", "embroidery_front"];
  return ["front"];
}

export function enabledCatalogVariants(input: {
  catalog: PrintifyCatalogVariant[];
  colorNames: string[];
  sizes: string[];
  priceCents: number;
}): Array<{ id: number; price: number; is_enabled: true }> {
  const seen = new Set<number>();
  const enabled: Array<{ id: number; price: number; is_enabled: true }> = [];
  for (const colorName of input.colorNames) {
    for (const size of input.sizes) {
      const match = input.catalog.find(
        (variant) => !seen.has(variant.id) && catalogVariantMatches(variant, colorName, size),
      );
      if (!match) continue;
      seen.add(match.id);
      enabled.push({ id: match.id, price: input.priceCents, is_enabled: true });
    }
  }
  return enabled;
}

export function buildPrintifyProductPayload(input: {
  listingId: string;
  title: string;
  description: string;
  blueprintId: number;
  printProviderId: number;
  imageId: string;
  position: string;
  scale: number;
  variants: Array<{ id: number; price: number; is_enabled: boolean }>;
}): PrintifyProductCreatePayload {
  const variantIds = input.variants.filter((variant) => variant.is_enabled).map((variant) => variant.id);
  return {
    title: input.title,
    description: input.description,
    blueprint_id: input.blueprintId,
    print_provider_id: input.printProviderId,
    tags: ["nlmsf", "nlmsf-custom", printifyListingTag(input.listingId)],
    variants: input.variants,
    print_areas: [
      {
        variant_ids: variantIds,
        placeholders: [
          {
            position: input.position,
            images: [
              {
                id: input.imageId,
                x: 0.5,
                y: 0.5,
                scale: input.scale,
                angle: 0,
              },
            ],
          },
        ],
      },
    ],
  };
}

export async function unpublishTestMerchListings(options?: { prisma?: PrismaClient }): Promise<number> {
  const prisma = options?.prisma ?? (await getMerchPrisma());
  const published = await prisma.merchListing.findMany({
    where: { published: true },
    include: { design: { select: { title: true } } },
  });
  const tests = published.filter(isTestMerchListing);
  if (!tests.length) return 0;
  await prisma.merchListing.updateMany({
    where: { id: { in: tests.map((listing) => listing.id) } },
    data: { published: false },
  });
  return tests.length;
}

async function cachedShopProducts(force = false): Promise<PrintifyShopProduct[]> {
  const cached = globalForShopProducts.printifyShopProductsCache;
  if (!force && cached && Date.now() - cached.at < 20_000) return cached.products;
  const products = await listPrintifyProducts();
  globalForShopProducts.printifyShopProductsCache = { at: Date.now(), products };
  return products;
}

function rememberShopProduct(product: PrintifyShopProduct) {
  const cached = globalForShopProducts.printifyShopProductsCache;
  if (!cached) {
    globalForShopProducts.printifyShopProductsCache = { at: Date.now(), products: [product] };
    return;
  }
  cached.products = [product, ...cached.products.filter((row) => row.id !== product.id)];
}

async function uploadDesignImage(design: MerchDesign): Promise<string> {
  const cached = designUploadCache.get(design.id);
  if (cached) return cached;
  const ext = mimeExtension(design.imageMime || "image/png");
  const uploaded = await uploadPrintifyImage({
    fileName: `${slugify(design.title)}-${design.id.slice(-6)}.${ext}`,
    contents: Buffer.from(design.imageData).toString("base64"),
  });
  designUploadCache.set(design.id, uploaded.id);
  return uploaded.id;
}

function productMatchesListing(
  product: PrintifyShopProduct,
  listing: ListingWithDesign,
  blueprintId: number,
): boolean {
  if (listing.printifyProductId && product.id === listing.printifyProductId) return true;
  const tags = product.tags ?? [];
  if (tags.includes(printifyListingTag(listing.id))) return true;
  if (Number(product.blueprint_id) !== blueprintId) return false;
  const productTitle = slugify(product.title ?? "");
  const listingTitle = slugify(listing.title);
  return Boolean(productTitle) && productTitle === listingTitle;
}

async function findExistingProduct(
  listing: ListingWithDesign,
  blueprintId: number,
): Promise<PrintifyShopProduct | null> {
  const products = await cachedShopProducts();
  const claimed = new Set(
    (
      await (await getMerchPrisma()).merchListing.findMany({
        where: { printifyProductId: { not: null }, id: { not: listing.id } },
        select: { printifyProductId: true },
      })
    )
      .map((row) => row.printifyProductId)
      .filter((id): id is string => Boolean(id)),
  );
  return (
    products.find((product) => productMatchesListing(product, listing, blueprintId) && !claimed.has(product.id)) ??
    null
  );
}

async function attachProductToListing(
  prisma: PrismaClient,
  listing: ListingWithDesign,
  product: PrintifyShopProduct,
): Promise<{ mockupUrl: string | null }> {
  const mapped = mapPrintifyProduct(product);
  const variantsJson = mapped
    ? serializePrintifyVariants(mapped)
    : listing.printifyVariantsJson;
  await prisma.merchListing.update({
    where: { id: listing.id },
    data: {
      printifyProductId: product.id,
      printifyVariantsJson: variantsJson,
    },
  });
  await markPrintifyProductPublished(product.id, {
    id: listing.id,
    handle: `${siteOrigin()}/gift-shop/${listing.slug}`,
  }).catch((err) => {
    console.warn("Printify publishing_succeeded skipped:", err);
  });
  const mockups = parsePrintifyMockups(variantsJson);
  return { mockupUrl: mockups.mockupUrl ?? Object.values(mockups.mockupsByColor)[0] ?? null };
}

async function createProductForListing(
  listing: ListingWithDesign,
  imageId: string,
): Promise<PrintifyShopProduct> {
  const medium = getMedium(listing.mediumId);
  if (!medium) throw new Error(`Unknown merch type ${listing.mediumId}`);
  const colorIds = parseColorIds(listing.colorsJson);
  const colorNames = colorIds.map((id) => getColor(id)?.name ?? id);
  const catalog = await listPrintifyCatalogVariants(medium.blueprintId, medium.printProviderId);
  const variants = enabledCatalogVariants({
    catalog,
    colorNames,
    sizes: medium.sizes,
    priceCents: listing.priceCents,
  });
  if (!variants.length) {
    throw new Error(`No Printify catalog variants matched ${listing.title} colors/sizes.`);
  }

  const positions = placeholderPositions(medium.id as MerchMediumId);
  let lastError: unknown;
  for (const position of positions) {
    try {
      const payload = buildPrintifyProductPayload({
        listingId: listing.id,
        title: listing.title,
        description: listing.description,
        blueprintId: medium.blueprintId,
        printProviderId: medium.printProviderId,
        imageId,
        position,
        scale: printScale(medium.id as MerchMediumId),
        variants,
      });
      const created = await createPrintifyProduct(payload);
      rememberShopProduct(created);
      return created;
    } catch (err) {
      lastError = err;
      console.warn(`Printify create failed for ${listing.title} at ${position}:`, err);
    }
  }
  throw lastError instanceof Error ? lastError : new Error(`Could not create Printify product for ${listing.title}`);
}

async function runEnsureForListing(listing: ListingWithDesign, waitForMockupsMs: number): Promise<PrintifyPublishItem> {
  const prisma = await getMerchPrisma();
  const medium = getMedium(listing.mediumId);
  if (!medium) {
    return {
      listingId: listing.id,
      title: listing.title,
      printifyProductId: listing.printifyProductId,
      created: false,
      linked: false,
      hasMockup: Boolean(parsePrintifyMockups(listing.printifyVariantsJson).mockupUrl),
      error: `Unknown merch type ${listing.mediumId}`,
    };
  }

  let product: PrintifyShopProduct | null = null;
  let created = false;
  if (listing.printifyProductId) {
    product = (await cachedShopProducts()).find((row) => row.id === listing.printifyProductId) ?? null;
    if (!product) {
      try {
        product = await getPrintifyProduct(listing.printifyProductId);
        rememberShopProduct(product);
      } catch (err) {
        console.warn(`Stored Printify product ${listing.printifyProductId} could not be loaded:`, err);
      }
    }
  }
  if (!product) {
    product = await findExistingProduct(listing, medium.blueprintId);
  }
  if (!product) {
    const imageId = await uploadDesignImage(listing.design);
    product = await createProductForListing(listing, imageId);
    created = true;
  }
  if (!product.variants?.length || !product.options?.length) {
    try {
      product = await getPrintifyProduct(product.id);
      rememberShopProduct(product);
    } catch (err) {
      console.warn(`Printify product ${product.id} reload skipped:`, err);
    }
  }

  if (waitForMockupsMs > 0 && !(product.images ?? []).some((image) => image.src)) {
    product = await waitForPrintifyProductImages(product.id, { timeoutMs: waitForMockupsMs, intervalMs: 2000 });
    rememberShopProduct(product);
  }

  const attached = await attachProductToListing(prisma, listing, product);
  return {
    listingId: listing.id,
    title: listing.title,
    printifyProductId: product.id,
    created,
    linked: true,
    hasMockup: Boolean(attached.mockupUrl),
  };
}

export async function ensurePrintifyProductForListing(
  listing: ListingWithDesign,
  options?: { waitForMockupsMs?: number },
): Promise<PrintifyPublishItem> {
  const waitForMockupsMs = options?.waitForMockupsMs ?? 0;
  const inflight = listingLocks.get(listing.id);
  if (inflight) return inflight;
  const run = (async () => {
    try {
      return await runEnsureForListing(listing, waitForMockupsMs);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Printify publish failed for ${listing.title}:`, err);
      return {
        listingId: listing.id,
        title: listing.title,
        printifyProductId: listing.printifyProductId,
        created: false,
        linked: false,
        hasMockup: Boolean(parsePrintifyMockups(listing.printifyVariantsJson).mockupUrl),
        error: message,
      };
    }
  })().finally(() => {
    listingLocks.delete(listing.id);
  });
  listingLocks.set(listing.id, run);
  return run;
}

export async function ensurePrintifyProductsForListings(
  listingIds?: string[],
  options?: { waitForMockupsMs?: number; publishedOnly?: boolean },
): Promise<PreparePublicCatalogResult> {
  const prisma = await getMerchPrisma();
  const unpublishedTests = await unpublishTestMerchListings({ prisma });
  if (!isPrintifyConfigured()) {
    return {
      complete: false,
      unpublishedTests,
      created: 0,
      linked: 0,
      mockupsUpdated: 0,
      missing: listingIds ?? [],
      items: [],
      error: "Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host.",
    };
  }

  const where = listingIds?.length
    ? { id: { in: listingIds } }
    : options?.publishedOnly === false
      ? {}
      : { published: true };

  const listings = await prisma.merchListing.findMany({
    where,
    include: { design: true },
    orderBy: { createdAt: "asc" },
  });
  const targets = listings.filter((listing) => !isTestMerchListing(listing));
  const items = await Promise.all(
    targets.map((listing) => ensurePrintifyProductForListing(listing, { waitForMockupsMs: options?.waitForMockupsMs ?? 0 })),
  );

  const missing = items.filter((item) => !item.printifyProductId).map((item) => item.listingId);
  const errors = items.map((item) => item.error).filter(Boolean);
  return {
    complete: missing.length === 0,
    unpublishedTests,
    created: items.filter((item) => item.created).length,
    linked: items.filter((item) => item.linked).length,
    mockupsUpdated: items.filter((item) => item.hasMockup).length,
    missing,
    items,
    error: errors.length ? errors.join("; ") : undefined,
  };
}

const globalForPrepare = globalThis as unknown as {
  printifyPrepareInflight: Promise<PreparePublicCatalogResult> | null;
};

export async function preparePublicMerchCatalog(options?: {
  waitForMockupsMs?: number;
}): Promise<PreparePublicCatalogResult> {
  if (globalForPrepare.printifyPrepareInflight) return globalForPrepare.printifyPrepareInflight;
  const run = ensurePrintifyProductsForListings(undefined, {
    waitForMockupsMs: options?.waitForMockupsMs ?? 0,
    publishedOnly: true,
  });
  globalForPrepare.printifyPrepareInflight = run;
  try {
    return await run;
  } finally {
    globalForPrepare.printifyPrepareInflight = null;
  }
}
