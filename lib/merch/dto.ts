import type { MerchDesign, MerchListing, MerchOrder } from "@prisma/client";
import { formatUsd, getMedium, parseColorIds } from "@/lib/merch/catalog";

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

export function toListingDto(listing: MerchListing & { design?: MerchDesign }) {
  const medium = getMedium(listing.mediumId);
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
    imageUrl: designImagePath(listing.designId),
    designTitle: listing.design?.title,
    createdAt: listing.createdAt instanceof Date ? listing.createdAt.toISOString() : String(listing.createdAt),
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
