import type { MerchListing, PrismaClient } from "@prisma/client";
import {
  getMedium,
  parseColorIds,
  type MerchMedium,
  type MerchMediumId,
} from "@/lib/merch/catalog";
import { toListingDto } from "@/lib/merch/dto";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import {
  NLMSF_PRINTIFY_TEST_PRODUCT_IDS,
  isPrintifyTestProductId,
  mapPrintifyProduct,
  merchColorFromPrintify,
  parsePrintifyMockups,
  serializePrintifyVariants,
  type PrintifyShopProduct,
} from "@/lib/merch/printify-map";
import {
  createPrintifyShopProduct,
  getPrintifyProduct,
  isPrintifyConfigured,
  listPrintifyCatalogVariants,
  listPrintifyProducts,
  markPrintifyProductPublished,
  type PrintifyCatalogVariant,
  uploadPrintifyImage,
  waitForPrintifyProductMockups,
} from "@/lib/merch/printify";
import { slugify } from "@/lib/merch/slug";

export type PrintifyPublishItem = {
  listingId: string;
  title: string;
  slug: string;
  productId: string;
  hasPrintifyMockup: boolean;
  action: "created" | "linked" | "refreshed";
};

export type PrintifyPublishSkip = {
  listingId: string;
  title: string;
  reason: string;
};

export type PrintifyPublishResult = {
  created: PrintifyPublishItem[];
  linked: PrintifyPublishItem[];
  refreshed: PrintifyPublishItem[];
  skipped: PrintifyPublishSkip[];
  hiddenTestListings: number;
};

export type PrintifyPublishDeps = {
  uploadImage?: typeof uploadPrintifyImage;
  createProduct?: typeof createPrintifyShopProduct;
  getProduct?: typeof getPrintifyProduct;
  listVariants?: typeof listPrintifyCatalogVariants;
  listProducts?: typeof listPrintifyProducts;
  waitForMockups?: typeof waitForPrintifyProductMockups;
  markPublished?: typeof markPrintifyProductPublished;
};

function siteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://nlmsf.org"
  ).replace(/\/$/, "");
}

function normalizeSize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function printPlacement(mediumId: MerchMediumId): {
  position: string;
  x: number;
  y: number;
  scale: number;
  angle: number;
} {
  if (mediumId === "hat") {
    return { position: "front_dtf", x: 0.5, y: 0.5, scale: 0.72, angle: 0 };
  }
  return { position: "front", x: 0.5, y: 0.38, scale: 0.52, angle: 0 };
}

export function catalogVariantColorId(variant: PrintifyCatalogVariant): string {
  const colorTitle = variant.options?.color ?? String(variant.title ?? "").split("/")[0] ?? "";
  return merchColorFromPrintify(colorTitle).id;
}

export function catalogVariantSize(variant: PrintifyCatalogVariant): string {
  return variant.options?.size ?? String(variant.title ?? "").split("/")[1]?.trim() ?? "One Size";
}

export function selectCatalogVariantsForListing(
  variants: PrintifyCatalogVariant[],
  medium: MerchMedium,
  colorIds: string[],
): PrintifyCatalogVariant[] {
  const wantedColors = new Set(colorIds);
  const wantedSizes = new Set(medium.sizes.map(normalizeSize));
  const matched = variants.filter((variant) => {
    const colorId = catalogVariantColorId(variant);
    const size = normalizeSize(catalogVariantSize(variant));
    return wantedColors.has(colorId) && wantedSizes.has(size);
  });
  if (matched.length) return matched;

  const anyColor = variants.filter((variant) => wantedSizes.has(normalizeSize(catalogVariantSize(variant))));
  return anyColor.slice(0, Math.max(medium.sizes.length, 1));
}

function placementForVariant(mediumId: MerchMediumId, variant: PrintifyCatalogVariant) {
  const preferred = printPlacement(mediumId);
  const positions = new Set((variant.placeholders ?? []).map((placeholder) => placeholder.position).filter(Boolean));
  if (positions.has(preferred.position) || !positions.size) return preferred;
  if (positions.has("front")) return { ...preferred, position: "front" };
  const first = [...positions][0];
  return first ? { ...preferred, position: first } : preferred;
}

function isTestListing(listing: Pick<MerchListing, "title" | "printifyProductId">): boolean {
  return (
    isPrintifyTestProductId(listing.printifyProductId) ||
    /nlmsf test tee/i.test(listing.title)
  );
}

export function listingNeedsPrintifyProduct(listing: MerchListing): boolean {
  if (isTestListing(listing)) return false;
  if (!listing.printifyProductId) return true;
  const mockups = parsePrintifyMockups(listing.printifyVariantsJson);
  return !mockups.mockupUrl && !Object.keys(mockups.mockupsByColor).length;
}

async function persistMappedProduct(
  prisma: PrismaClient,
  listing: MerchListing,
  product: PrintifyShopProduct,
  options?: { markPublished?: boolean; markPublishedFn?: typeof markPrintifyProductPublished },
) {
  const mapped = mapPrintifyProduct(product);
  if (!mapped) {
    throw new Error("Printify created the product but no enabled variants were returned.");
  }
  const updated = await prisma.merchListing.update({
    where: { id: listing.id },
    data: {
      printifyProductId: mapped.productId,
      printifyVariantsJson: serializePrintifyVariants(mapped),
      colorsJson: JSON.stringify(mapped.colorIds.length ? mapped.colorIds : parseColorIds(listing.colorsJson)),
    },
    include: { design: true },
  });
  if (options?.markPublished !== false) {
    const markPublished = options?.markPublishedFn ?? markPrintifyProductPublished;
    await markPublished(mapped.productId, {
      id: updated.id,
      handle: `${siteOrigin()}/gift-shop/${updated.slug}`,
    }).catch((err) => {
      console.warn("Printify publishing handshake skipped:", err);
    });
  }
  return { listing: updated, mapped };
}

export async function hidePrintifyTestListings(prisma?: PrismaClient): Promise<{ unpublished: number }> {
  const db = prisma ?? (await getMerchPrisma());
  const result = await db.merchListing.updateMany({
    where: {
      published: true,
      OR: [
        { printifyProductId: { in: [...NLMSF_PRINTIFY_TEST_PRODUCT_IDS] } },
        { title: { contains: "NLMSF Test Tee" } },
      ],
    },
    data: { published: false },
  });
  return { unpublished: result.count };
}

export async function attachPrintifyProductToListing(
  listingId: string,
  options?: {
    prisma?: PrismaClient;
    waitForMockups?: boolean;
    deps?: PrintifyPublishDeps;
  },
): Promise<PrintifyPublishItem> {
  if (!isPrintifyConfigured() && !options?.deps?.createProduct) {
    throw new Error("Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host.");
  }

  const prisma = options?.prisma ?? (await getMerchPrisma());
  const listing = await prisma.merchListing.findUnique({
    where: { id: listingId },
    include: { design: true },
  });
  if (!listing?.design) throw new Error("Listing not found.");

  const uploadImage = options?.deps?.uploadImage ?? uploadPrintifyImage;
  const createProduct = options?.deps?.createProduct ?? createPrintifyShopProduct;
  const getProduct = options?.deps?.getProduct ?? getPrintifyProduct;
  const listVariants = options?.deps?.listVariants ?? listPrintifyCatalogVariants;
  const listProducts = options?.deps?.listProducts ?? listPrintifyProducts;
  const waitForMockups = options?.deps?.waitForMockups ?? waitForPrintifyProductMockups;
  const markPublished = options?.deps?.markPublished ?? markPrintifyProductPublished;

  if (listing.printifyProductId) {
    const product = options?.waitForMockups
      ? await waitForMockups(listing.printifyProductId, { attempts: 5, delayMs: 1500 })
      : await getProduct(listing.printifyProductId);
    const persisted = await persistMappedProduct(prisma, listing, product, {
      markPublished: false,
      markPublishedFn: markPublished,
    });
    await markPublished(persisted.mapped.productId, {
      id: persisted.listing.id,
      handle: `${siteOrigin()}/gift-shop/${persisted.listing.slug}`,
    }).catch(() => undefined);
    const dto = toListingDto(persisted.listing);
    return {
      listingId: persisted.listing.id,
      title: persisted.listing.title,
      slug: persisted.listing.slug,
      productId: persisted.mapped.productId,
      hasPrintifyMockup: dto.hasPrintifyMockup,
      action: "refreshed",
    };
  }

  const medium = getMedium(listing.mediumId);
  if (!medium) throw new Error(`Unknown merch type ${listing.mediumId}.`);

  const shopProducts = await listProducts().catch(() => [] as PrintifyShopProduct[]);
  const existing = shopProducts.find((product) => {
    const title = String(product.title ?? "").trim().toLowerCase();
    return title === listing.title.trim().toLowerCase() && Number(product.blueprint_id) === medium.blueprintId;
  });
  if (existing) {
    const product = options?.waitForMockups
      ? await waitForMockups(String(existing.id), { attempts: 5, delayMs: 1500 })
      : existing.images?.length
        ? existing
        : await getProduct(String(existing.id));
    const persisted = await persistMappedProduct(prisma, listing, product, { markPublishedFn: markPublished });
    const dto = toListingDto(persisted.listing);
    return {
      listingId: persisted.listing.id,
      title: persisted.listing.title,
      slug: persisted.listing.slug,
      productId: persisted.mapped.productId,
      hasPrintifyMockup: dto.hasPrintifyMockup,
      action: "linked",
    };
  }

  const variants = await listVariants(medium.blueprintId, medium.printProviderId);
  const colorIds = parseColorIds(listing.colorsJson);
  const selected = selectCatalogVariantsForListing(variants, medium, colorIds);
  if (!selected.length) {
    throw new Error(`No Printify variants match ${medium.shortName} colors/sizes.`);
  }

  const upload = await uploadImage({
    fileName: `${slugify(listing.title) || "nlmsf-design"}.png`,
    contents: listing.design.imageData,
  });

  const placement = placementForVariant(medium.id, selected[0]);
  const variantIds = selected.map((variant) => variant.id);
  const created = await createProduct({
    title: listing.title,
    description: listing.description,
    blueprintId: medium.blueprintId,
    printProviderId: medium.printProviderId,
    variants: selected.map((variant) => ({
      id: variant.id,
      price: listing.priceCents,
      is_enabled: true,
    })),
    printAreas: [
      {
        variant_ids: variantIds,
        placeholders: [
          {
            position: placement.position,
            images: [
              {
                id: upload.id,
                x: placement.x,
                y: placement.y,
                scale: placement.scale,
                angle: placement.angle,
              },
            ],
          },
        ],
      },
    ],
  });

  const productId = String(created.id ?? "").trim();
  if (!productId) throw new Error("Printify did not return a product id.");

  const product = options?.waitForMockups !== false
    ? await waitForMockups(productId, { attempts: options?.waitForMockups === true ? 6 : 2, delayMs: 1500 })
    : created.images?.length
      ? created
      : await getProduct(productId);

  const persisted = await persistMappedProduct(
    prisma,
    listing,
    {
      ...created,
      ...product,
      id: productId,
    },
    { markPublishedFn: markPublished },
  );
  const dto = toListingDto(persisted.listing);
  return {
    listingId: persisted.listing.id,
    title: persisted.listing.title,
    slug: persisted.listing.slug,
    productId: persisted.mapped.productId,
    hasPrintifyMockup: dto.hasPrintifyMockup,
    action: "created",
  };
}

export async function publishListingsToPrintify(options?: {
  listingIds?: string[];
  waitForMockups?: boolean;
  prisma?: PrismaClient;
  deps?: PrintifyPublishDeps;
}): Promise<PrintifyPublishResult> {
  const prisma = options?.prisma ?? (await getMerchPrisma());
  const hidden = await hidePrintifyTestListings(prisma);
  const wanted = (options?.listingIds ?? []).map((id) => id.trim()).filter(Boolean);

  const listings = wanted.length
    ? await prisma.merchListing.findMany({ where: { id: { in: wanted } } })
    : await prisma.merchListing.findMany({
        where: { published: true, printifyProductId: null },
      });

  const targets = listings.filter(listingNeedsPrintifyProduct);
  const created: PrintifyPublishItem[] = [];
  const linked: PrintifyPublishItem[] = [];
  const refreshed: PrintifyPublishItem[] = [];
  const skipped: PrintifyPublishSkip[] = [];

  for (const listing of targets) {
    try {
      const item = await attachPrintifyProductToListing(listing.id, {
        prisma,
        waitForMockups: options?.waitForMockups,
        deps: options?.deps,
      });
      if (item.action === "created") created.push(item);
      else if (item.action === "linked") linked.push(item);
      else refreshed.push(item);
    } catch (err) {
      skipped.push({
        listingId: listing.id,
        title: listing.title,
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return { created, linked, refreshed, skipped, hiddenTestListings: hidden.unpublished };
}
