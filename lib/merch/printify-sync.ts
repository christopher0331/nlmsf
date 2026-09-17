import type { PrismaClient } from "@prisma/client";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { uniqueListingSlug } from "@/lib/merch/slug";
import {
  NLMSF_PRINTIFY_TEST_PRODUCT_IDS,
  isTestMerchListing,
  mapPrintifyProduct,
  parsePrintifyMockups,
  serializePrintifyVariants,
  type MappedPrintifyProduct,
  type PrintifyShopProduct,
} from "@/lib/merch/printify-map";
import {
  getPrintifyProduct,
  isPrintifyConfigured,
  listPrintifyProducts,
  markPrintifyProductPublished,
  resolvePrintifyShopId,
} from "@/lib/merch/printify";
import { preparePublicMerchCatalog, type PreparePublicCatalogResult } from "@/lib/merch/printify-publish";

export type PrintifySyncItem = {
  productId: string;
  listingId: string;
  title: string;
  slug: string;
  published: boolean;
};

export type PrintifySyncSkip = {
  productId: string;
  title: string;
  reason: string;
};

export type PrintifySyncResult = {
  shopId: string;
  created: PrintifySyncItem[];
  updated: PrintifySyncItem[];
  skipped: PrintifySyncSkip[];
};

export type PrintifyImageDownload = (url: string) => Promise<{ bytes: Buffer; mimeType: string }>;

const PIXEL_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);

function siteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://nlmsf.org"
  ).replace(/\/$/, "");
}

function fallbackProductIds(): string[] {
  const fromEnv = process.env.PRINTIFY_SYNC_PRODUCT_IDS?.split(",").map((id) => id.trim()).filter(Boolean);
  if (fromEnv?.length) return fromEnv;
  return [...NLMSF_PRINTIFY_TEST_PRODUCT_IDS];
}

export async function downloadPrintifyImage(url: string): Promise<{ bytes: Buffer; mimeType: string }> {
  const res = await fetch(url, {
    headers: { "User-Agent": "NLMSF-Gift-Shop/1.0 (nlmsf.org)" },
  });
  if (!res.ok) throw new Error(`Could not download Printify image (${res.status})`);
  const mimeType = (res.headers.get("content-type") || "image/png").split(";")[0].trim() || "image/png";
  const bytes = Buffer.from(await res.arrayBuffer());
  if (!bytes.length) throw new Error("Printify image was empty");
  return { bytes, mimeType };
}

async function resolveImage(
  mapped: MappedPrintifyProduct,
  downloadImage: PrintifyImageDownload,
): Promise<{ bytes: Buffer; mimeType: string }> {
  const urls = [mapped.artworkUrl, mapped.mockupUrl].filter((url): url is string => Boolean(url));
  for (const url of urls) {
    try {
      return await downloadImage(url);
    } catch (err) {
      console.warn("Printify image download failed:", url, err);
    }
  }
  return { bytes: PIXEL_PNG, mimeType: "image/png" };
}

async function loadPrintifyProductsById(ids: Iterable<string>): Promise<PrintifyShopProduct[]> {
  const products: PrintifyShopProduct[] = [];
  for (const id of ids) {
    try {
      products.push(await getPrintifyProduct(id));
    } catch (err) {
      console.warn(`Printify product ${id} could not be loaded:`, err);
    }
  }
  return products;
}

export async function collectPrintifyProducts(productIds?: string[]): Promise<{
  shopId: string;
  products: PrintifyShopProduct[];
}> {
  const shopId = await resolvePrintifyShopId();
  const wanted = [...new Set((productIds ?? []).map((id) => id.trim()).filter(Boolean))];

  if (wanted.length) {
    return { shopId, products: await loadPrintifyProductsById(wanted) };
  }

  let products: PrintifyShopProduct[] = [];
  try {
    products = await listPrintifyProducts();
  } catch (err) {
    console.warn("Printify product list failed, falling back to specific IDs:", err);
  }

  if (!products.length) {
    products = await loadPrintifyProductsById(fallbackProductIds());
  }

  return { shopId, products };
}

const globalForMockups = globalThis as unknown as {
  printifyMockupRefresh: Promise<{ updated: number }> | null;
};

export async function refreshPrintifyListingMockups(options?: {
  prisma?: PrismaClient;
}): Promise<{ updated: number }> {
  if (globalForMockups.printifyMockupRefresh) return globalForMockups.printifyMockupRefresh;

  const run = (async () => {
    const prisma = options?.prisma ?? (await getMerchPrisma());
    const listings = await prisma.merchListing.findMany({
      where: { printifyProductId: { not: null } },
    });
    const stale = listings.filter((listing) => !parsePrintifyMockups(listing.printifyVariantsJson).mockupUrl);
    if (!stale.length) return { updated: 0 };

    const ids = [...new Set(stale.map((listing) => listing.printifyProductId).filter((id): id is string => Boolean(id)))];
    if (!ids.length || !isPrintifyConfigured()) return { updated: 0 };

    const { products } = await collectPrintifyProducts(ids);
    const byId = new Map(products.map((product) => [String(product.id), product]));
    let updated = 0;
    for (const listing of stale) {
      const product = listing.printifyProductId ? byId.get(listing.printifyProductId) : undefined;
      if (!product) continue;
      const mapped = mapPrintifyProduct(product);
      if (!mapped?.mockupUrl) continue;
      await prisma.merchListing.update({
        where: { id: listing.id },
        data: { printifyVariantsJson: serializePrintifyVariants(mapped) },
      });
      updated += 1;
    }
    return { updated };
  })();

  globalForMockups.printifyMockupRefresh = run;
  try {
    return await run;
  } finally {
    globalForMockups.printifyMockupRefresh = null;
  }
}

export async function upsertMappedPrintifyProduct(
  prisma: PrismaClient,
  mapped: MappedPrintifyProduct,
  image: { bytes: Buffer; mimeType: string },
  options?: { publish?: boolean; origin?: string; markPublished?: boolean },
): Promise<{ action: "created" | "updated"; item: PrintifySyncItem }> {
  const publish = options?.publish !== false;
  const origin = options?.origin ?? siteOrigin();
  const existing = await prisma.merchListing.findFirst({
    where: { printifyProductId: mapped.productId },
    include: { design: true },
  });

  const variantsJson = serializePrintifyVariants(mapped);
  const colorsJson = JSON.stringify(mapped.colorIds);
  const hideTest = isTestMerchListing({ title: mapped.title, printifyProductId: mapped.productId });

  if (existing) {
    await prisma.merchDesign.update({
      where: { id: existing.designId },
      data: {
        title: mapped.title,
        imageMime: image.mimeType,
        imageData: new Uint8Array(image.bytes),
        source: "printify",
        status: "approved",
      },
    });
    const listing = await prisma.merchListing.update({
      where: { id: existing.id },
      data: {
        mediumId: mapped.mediumId,
        title: mapped.title,
        description: mapped.description,
        priceCents: mapped.priceCents,
        colorsJson,
        printifyVariantsJson: variantsJson,
      },
    });
    if (options?.markPublished !== false) {
      await markPrintifyProductPublished(mapped.productId, {
        id: listing.id,
        handle: `${origin}/gift-shop/${listing.slug}`,
      });
    }
    return {
      action: "updated",
      item: {
        productId: mapped.productId,
        listingId: listing.id,
        title: listing.title,
        slug: listing.slug,
        published: listing.published,
      },
    };
  }

  const slug = await uniqueListingSlug(prisma, mapped.title);
  const design = await prisma.merchDesign.create({
    data: {
      title: mapped.title,
      prompt: `Imported from Printify product ${mapped.productId}`,
      themeId: "printify",
      imageMime: image.mimeType,
      imageData: new Uint8Array(image.bytes),
      source: "printify",
      status: "approved",
    },
  });
  const listing = await prisma.merchListing.create({
    data: {
      designId: design.id,
      mediumId: mapped.mediumId,
      slug,
      title: mapped.title,
      description: mapped.description,
      priceCents: mapped.priceCents,
      colorsJson,
      published: hideTest ? false : publish,
      printifyProductId: mapped.productId,
      printifyVariantsJson: variantsJson,
    },
  });
  if (options?.markPublished !== false) {
    await markPrintifyProductPublished(mapped.productId, {
      id: listing.id,
      handle: `${origin}/gift-shop/${listing.slug}`,
    });
  }
  return {
    action: "created",
    item: {
      productId: mapped.productId,
      listingId: listing.id,
      title: listing.title,
      slug: listing.slug,
      published: listing.published,
    },
  };
}

export async function syncPrintifyProductsToListings(
  products: PrintifyShopProduct[],
  options?: {
    prisma?: PrismaClient;
    publish?: boolean;
    downloadImage?: PrintifyImageDownload;
    origin?: string;
    markPublished?: boolean;
  },
): Promise<PrintifySyncResult> {
  const prisma = options?.prisma ?? (await getMerchPrisma());
  const downloadImage = options?.downloadImage ?? downloadPrintifyImage;
  const created: PrintifySyncItem[] = [];
  const updated: PrintifySyncItem[] = [];
  const skipped: PrintifySyncSkip[] = [];
  const shopId = await (isPrintifyConfigured() ? resolvePrintifyShopId().catch(() => "26344889") : Promise.resolve("26344889"));

  for (const product of products) {
    const mapped = mapPrintifyProduct(product);
    if (!mapped) {
      skipped.push({
        productId: String(product.id ?? ""),
        title: String(product.title ?? "Untitled"),
        reason: "No enabled variants or missing title.",
      });
      continue;
    }
    try {
      const image = await resolveImage(mapped, downloadImage);
      const result = await upsertMappedPrintifyProduct(prisma, mapped, image, {
        publish: options?.publish,
        origin: options?.origin,
        markPublished: options?.markPublished,
      });
      if (result.action === "created") created.push(result.item);
      else updated.push(result.item);
    } catch (err) {
      skipped.push({
        productId: mapped.productId,
        title: mapped.title,
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return { shopId, created, updated, skipped };
}

export async function syncConnectedPrintifyShop(options?: {
  productIds?: string[];
  publish?: boolean;
}): Promise<PrintifySyncResult> {
  if (!isPrintifyConfigured()) {
    throw new Error("Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host.");
  }
  const { shopId, products } = await collectPrintifyProducts(options?.productIds);
  const result = await syncPrintifyProductsToListings(products, { publish: options?.publish !== false });
  return { ...result, shopId };
}

export async function previewPrintifyShop() {
  if (!isPrintifyConfigured()) {
    throw new Error("Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host.");
  }
  const prisma = await getMerchPrisma();
  const { shopId, products } = await collectPrintifyProducts();
  const listings = await prisma.merchListing.findMany({
    where: { printifyProductId: { not: null } },
    select: { id: true, slug: true, title: true, published: true, printifyProductId: true },
  });
  const listingByProduct = new Map(listings.map((listing) => [listing.printifyProductId, listing]));
  return {
    shopId,
    products: products.map((product) => {
      const mapped = mapPrintifyProduct(product);
      const listing = listingByProduct.get(product.id);
      return {
        id: product.id,
        title: product.title ?? "Untitled",
        blueprintId: product.blueprint_id ?? null,
        visible: product.visible !== false,
        enabledVariantCount: mapped?.variants.length ?? 0,
        mediumId: mapped?.mediumId ?? null,
        importedListingId: listing?.id ?? null,
        importedSlug: listing?.slug ?? null,
        published: listing?.published ?? false,
      };
    }),
  };
}

type EnsurePrintifyResult = PreparePublicCatalogResult;

const globalForEnsure = globalThis as unknown as {
  printifyEnsureInflight: Promise<EnsurePrintifyResult> | null;
};

/** Public catalog prep: hide test tees and create/link Printify products for published listings. */
export async function ensurePublishedPrintifyListings(): Promise<EnsurePrintifyResult> {
  if (globalForEnsure.printifyEnsureInflight) return globalForEnsure.printifyEnsureInflight;
  const run = preparePublicMerchCatalog({ waitForMockupsMs: 0 });
  globalForEnsure.printifyEnsureInflight = run;
  try {
    return await run;
  } finally {
    globalForEnsure.printifyEnsureInflight = null;
  }
}
