import type { MerchListing, MerchOrder } from "@prisma/client";
import {
  colorsForMedium,
  formatUsd,
  getMedium,
  parseColorIds,
  type MerchMediumId,
} from "@/lib/merch/catalog";
import {
  findMappedVariant,
  parsePrintifyMockups,
  parsePrintifyVariantsJson,
  uniqueColorsFromVariants,
} from "@/lib/merch/printify-map";

export function designImagePath(id: string): string {
  return `/api/merch/designs/${id}/image`;
}

export function toDesignDto(design: {
  id: string;
  title: string;
  prompt: string;
  themeId: string;
  source: string;
  status: string;
  reviewNote: string | null;
  createdAt: Date | string;
}) {
  const createdAt = design.createdAt instanceof Date ? design.createdAt.toISOString() : String(design.createdAt);
  return {
    id: design.id,
    title: design.title,
    prompt: design.prompt,
    themeId: design.themeId,
    source: design.source,
    status: design.status,
    reviewNote: design.reviewNote,
    imageUrl: designImagePath(design.id),
    createdAt,
  };
}

export function toListingDto(listing: MerchListing & { design?: { id: string; title?: string } | null }) {
  const medium = getMedium(listing.mediumId);
  const mockups = parsePrintifyMockups(listing.printifyVariantsJson);
  const designImageUrl = designImagePath(listing.designId);
  const mockupUrl = mockups.mockupUrl || Object.values(mockups.mockupsByColor)[0] || null;
  return {
    id: listing.id,
    designId: listing.designId,
    mediumId: listing.mediumId,
    mediumName: medium?.shortName ?? listing.mediumId,
    slug: listing.slug,
    title: listing.title,
    description: listing.description,
    priceCents: listing.priceCents,
    priceLabel: formatUsd(listing.priceCents),
    colors: parseColorIds(listing.colorsJson),
    published: listing.published,
    printifyProductId: listing.printifyProductId ?? null,
    imageUrl: mockupUrl || designImageUrl,
    designImageUrl,
    mockupUrl,
    mockupsByColor: mockups.mockupsByColor,
    hasPrintifyMockup: Boolean(mockupUrl),
    designTitle: listing.design?.title,
    createdAt: listing.createdAt instanceof Date ? listing.createdAt.toISOString() : String(listing.createdAt),
  };
}

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "One Size", "One size"];

function sortShopSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const ai = SIZE_ORDER.findIndex((size) => size.toLowerCase() === a.toLowerCase());
    const bi = SIZE_ORDER.findIndex((size) => size.toLowerCase() === b.toLowerCase());
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi) || a.localeCompare(b);
  });
}

export function shopOptionsFromListing(listing: Pick<MerchListing, "mediumId" | "colorsJson" | "printifyVariantsJson">) {
  const variants = parsePrintifyVariantsJson(listing.printifyVariantsJson);
  if (variants.length) {
    return {
      sizes: sortShopSizes([...new Set(variants.map((variant) => variant.size))]),
      colorOptions: uniqueColorsFromVariants(variants),
    };
  }
  const mediumId = listing.mediumId as MerchMediumId;
  const selected = parseColorIds(listing.colorsJson);
  return {
    sizes: getMedium(mediumId)?.sizes ?? ["M"],
    colorOptions: colorsForMedium(mediumId).filter((color) => selected.includes(color.id)),
  };
}

export function toShopListing(listing: MerchListing & { design?: { id: string; title?: string } | null }) {
  return {
    ...toListingDto(listing),
    ...shopOptionsFromListing(listing),
  };
}

export function listingVariantForCart(
  listing: Pick<MerchListing, "printifyProductId" | "printifyVariantsJson">,
  colorId: string,
  size: string,
) {
  const variants = parsePrintifyVariantsJson(listing.printifyVariantsJson);
  if (!listing.printifyProductId && !variants.length) return null;
  const match = findMappedVariant(variants, colorId, size);
  if (!match || !listing.printifyProductId) return null;
  return {
    productId: listing.printifyProductId,
    variant: match,
  };
}

export function toOrderDto(order: MerchOrder) {
  let items: unknown[] = [];
  try {
    items = JSON.parse(order.itemsJson) as unknown[];
  } catch {
    items = [];
  }
  let shipping: unknown = null;
  try {
    shipping = order.shippingJson ? JSON.parse(order.shippingJson) : null;
  } catch {
    shipping = null;
  }
  return {
    id: order.id,
    email: order.email,
    name: order.name,
    phone: order.phone,
    status: order.status,
    items,
    amountCents: order.amountCents,
    shippingCents: order.shippingCents,
    totalCents: order.totalCents,
    totalLabel: formatUsd(order.totalCents),
    printifyOrderId: order.printifyOrderId,
    printifyStatus: order.printifyStatus,
    fulfillError: order.fulfillError,
    shipping,
    createdAt: order.createdAt instanceof Date ? order.createdAt.toISOString() : String(order.createdAt),
  };
}
