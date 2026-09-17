import { MERCH_COLORS, MERCH_MEDIUMS, getColor, getMedium, type MerchMediumId } from "@/lib/merch/catalog";
import { slugify } from "@/lib/merch/slug";

export const NLMSF_PRINTIFY_TEST_PRODUCT_IDS = [
  "6aaaf7a0d6dccab5fb0d9ccc",
  "6aaaf795b04bce66250449a5",
] as const;

export function isTestPrintifyProductId(id: string | null | undefined): boolean {
  if (!id) return false;
  return (NLMSF_PRINTIFY_TEST_PRODUCT_IDS as readonly string[]).includes(id);
}

export function isTestMerchTitle(title: string | null | undefined): boolean {
  const value = String(title ?? "").trim();
  if (!value) return false;
  return /nlmsf\s*test\s*tee/i.test(value) || /\btest tees?\b/i.test(value);
}

export function isTestMerchListing(listing: {
  title?: string | null;
  printifyProductId?: string | null;
  design?: { title?: string | null } | null;
}): boolean {
  return (
    isTestPrintifyProductId(listing.printifyProductId) ||
    isTestMerchTitle(listing.title) ||
    isTestMerchTitle(listing.design?.title)
  );
}

export function printifyListingTag(listingId: string): string {
  return `nlmsf-listing:${listingId}`;
}

export type PrintifyOptionValue = {
  id: number;
  title: string;
  colors?: string[];
};

export type PrintifyShopProduct = {
  id: string;
  title?: string;
  description?: string;
  blueprint_id?: number;
  print_provider_id?: number;
  visible?: boolean;
  is_locked?: boolean;
  tags?: string[];
  options?: Array<{
    name?: string;
    type?: string;
    values?: PrintifyOptionValue[];
  }>;
  variants?: Array<{
    id: number;
    title?: string;
    price?: number;
    is_enabled?: boolean;
    is_default?: boolean;
    is_available?: boolean;
    options?: number[] | { color?: string; size?: string };
  }>;
  images?: Array<{
    src?: string;
    variant_ids?: number[];
    position?: string;
    is_default?: boolean;
  }>;
  print_areas?: Array<{
    variant_ids?: number[];
    placeholders?: Array<{
      position?: string;
      images?: Array<{
        id?: string;
        src?: string;
        name?: string;
        type?: string;
        height?: number;
        width?: number;
      }>;
    }>;
  }>;
};

export type MappedPrintifyVariant = {
  id: number;
  colorId: string;
  colorName: string;
  colorHex: string;
  size: string;
  priceCents: number;
};

export type MappedPrintifyProduct = {
  productId: string;
  title: string;
  description: string;
  mediumId: MerchMediumId;
  priceCents: number;
  colorIds: string[];
  sizes: string[];
  variants: MappedPrintifyVariant[];
  artworkUrl: string | null;
  mockupUrl: string | null;
  mockupsByColor: Record<string, string>;
};

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "One Size", "One size"];

const PRINTIFY_COLOR_TO_MERCH: Record<string, string> = {
  purple: "purple",
  championpurple: "purple",
  violet: "purple",
  royalpurple: "purple",
  heatherpurple: "purple",
  teampurple: "purple",
  heatherteampurple: "purple",
  black: "black",
  solidblack: "black",
  white: "white",
  solidwhite: "white",
  heathergrey: "heather",
  heathergray: "heather",
  sportsgrey: "heather",
  athleticheather: "heather",
  darkgreyheather: "heather",
  graphiteheather: "heather",
  grey: "heather",
  gray: "heather",
  heather: "heather",
  navy: "navy",
  navyblue: "navy",
  darknavy: "navy",
  heathernavy: "navy",
  pink: "pink",
  softpink: "pink",
  lightpink: "pink",
  hotpink: "pink",
  cranberry: "pink",
};

function norm(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function plainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function enabledVariants(product: PrintifyShopProduct) {
  return (product.variants ?? []).filter((variant) => variant.is_enabled !== false);
}

export function mediumFromPrintifyProduct(product: PrintifyShopProduct): MerchMediumId {
  const blueprintId = Number(product.blueprint_id);
  const byBlueprint = MERCH_MEDIUMS.find((medium) => medium.blueprintId === blueprintId);
  if (byBlueprint) return byBlueprint.id;

  const hay = `${product.title ?? ""} ${(product.tags ?? []).join(" ")}`.toLowerCase();
  if (/hoodie|sweatshirt/.test(hay)) return "hoodie";
  if (/\b(hat|cap|beanie)\b/.test(hay)) return "hat";
  if (/long[\s-]?sleeve/.test(hay)) return "long_tee";
  return "short_tee";
}

function normalizeHex(hex: string | undefined): string | undefined {
  if (!hex) return undefined;
  const value = hex.trim();
  if (/^#[0-9a-f]{6}$/i.test(value)) return value;
  if (/^[0-9a-f]{6}$/i.test(value)) return `#${value}`;
  return undefined;
}

export function merchColorFromPrintify(title: string, hex?: string): { id: string; name: string; hex: string } {
  const n = norm(title);
  const mappedId = PRINTIFY_COLOR_TO_MERCH[n];
  if (mappedId) {
    const color = getColor(mappedId);
    if (color) return { id: color.id, name: color.name, hex: color.hex };
  }
  for (const color of MERCH_COLORS) {
    if (n.includes(norm(color.name)) || n.includes(color.id)) {
      return { id: color.id, name: color.name, hex: color.hex };
    }
  }
  return {
    id: slugify(title).slice(0, 24) || "color",
    name: title.trim() || "Color",
    hex: normalizeHex(hex) ?? "#6B7280",
  };
}

function optionMaps(product: PrintifyShopProduct) {
  const colors = new Map<number, { title: string; hex?: string }>();
  const sizes = new Map<number, string>();
  for (const option of product.options ?? []) {
    const type = `${option.type ?? ""} ${option.name ?? ""}`.toLowerCase();
    for (const value of option.values ?? []) {
      if (type.includes("color") || type.includes("colour")) {
        colors.set(value.id, { title: value.title, hex: value.colors?.[0] });
      } else if (type.includes("size")) {
        sizes.set(value.id, value.title);
      }
    }
  }
  return { colors, sizes };
}

function variantColorSize(
  variant: NonNullable<PrintifyShopProduct["variants"]>[number],
  maps: ReturnType<typeof optionMaps>,
): { colorTitle: string; colorHex?: string; size: string } {
  const ids = Array.isArray(variant.options) ? variant.options.filter((id): id is number => typeof id === "number") : [];
  let colorTitle: string | undefined;
  let colorHex: string | undefined;
  let size: string | undefined;

  for (const id of ids) {
    const color = maps.colors.get(id);
    if (color) {
      colorTitle = color.title;
      colorHex = color.hex;
    }
    const mappedSize = maps.sizes.get(id);
    if (mappedSize) size = mappedSize;
  }

  if (variant.options && !Array.isArray(variant.options)) {
    colorTitle = colorTitle || variant.options.color;
    size = size || variant.options.size;
  }

  if (!colorTitle || !size) {
    const parts = String(variant.title ?? "")
      .split("/")
      .map((part) => part.trim())
      .filter(Boolean);
    if (parts.length >= 2) {
      colorTitle = colorTitle || parts[0];
      size = size || parts.slice(1).join(" / ");
    } else if (parts.length === 1) {
      size = size || parts[0];
      colorTitle = colorTitle || "Default";
    }
  }

  return {
    colorTitle: colorTitle || "Default",
    colorHex,
    size: size || "One Size",
  };
}

export function pickArtworkUrl(product: PrintifyShopProduct): string | null {
  for (const area of product.print_areas ?? []) {
    for (const placeholder of area.placeholders ?? []) {
      const position = (placeholder.position ?? "front").toLowerCase();
      if (position && position !== "front" && !position.includes("front")) continue;
      for (const image of placeholder.images ?? []) {
        if (!image.src) continue;
        if ((image.type ?? "").startsWith("text")) continue;
        if ((image.width ?? 100) < 8 || (image.height ?? 100) < 8) continue;
        return image.src;
      }
    }
  }
  return pickMockupUrl(product);
}

export function pickMockupUrl(product: PrintifyShopProduct): string | null {
  const images = product.images ?? [];
  const preferred =
    images.find((image) => image.is_default && image.src) ||
    images.find((image) => (image.position ?? "").toLowerCase() === "front" && image.src) ||
    images.find((image) => image.src);
  return preferred?.src ?? null;
}

const FRONT_POSITIONS = ["front", "front_cropped", "other", "embroidery_front"];

function mockupImageScore(
  image: NonNullable<PrintifyShopProduct["images"]>[number],
  variantIds: Set<number>,
): number {
  const covers = (image.variant_ids ?? []).some((id) => variantIds.has(id));
  if (!covers && variantIds.size) return -1;
  const position = (image.position ?? "").toLowerCase();
  let score = 1;
  if (image.is_default) score += 10;
  const frontIndex = FRONT_POSITIONS.indexOf(position);
  if (frontIndex >= 0) score += 8 - frontIndex;
  if (position === "back") score -= 4;
  return score;
}

export function mockupsByColorFromProduct(
  product: PrintifyShopProduct,
  variants: MappedPrintifyVariant[],
): Record<string, string> {
  const images = (product.images ?? []).filter((image) => Boolean(image.src));
  const byColor: Record<string, string> = {};
  const idsByColor = new Map<string, Set<number>>();
  for (const variant of variants) {
    const ids = idsByColor.get(variant.colorId) ?? new Set<number>();
    ids.add(variant.id);
    idsByColor.set(variant.colorId, ids);
  }
  for (const [colorId, variantIds] of idsByColor) {
    let bestSrc: string | undefined;
    let bestScore = -1;
    for (const image of images) {
      const score = mockupImageScore(image, variantIds);
      if (score > bestScore && image.src) {
        bestSrc = image.src;
        bestScore = score;
      }
    }
    if (bestSrc) byColor[colorId] = bestSrc;
  }
  return byColor;
}

function sortSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const ai = SIZE_ORDER.findIndex((size) => size.toLowerCase() === a.toLowerCase());
    const bi = SIZE_ORDER.findIndex((size) => size.toLowerCase() === b.toLowerCase());
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi) || a.localeCompare(b);
  });
}

export function mapPrintifyProduct(product: PrintifyShopProduct): MappedPrintifyProduct | null {
  const productId = String(product.id ?? "").trim();
  const title = String(product.title ?? "").trim();
  if (!productId || !title) return null;

  const variants = enabledVariants(product);
  if (!variants.length) return null;

  const mediumId = mediumFromPrintifyProduct(product);
  const medium = getMedium(mediumId);
  const maps = optionMaps(product);
  const mappedVariants: MappedPrintifyVariant[] = [];

  for (const variant of variants) {
    const { colorTitle, colorHex, size } = variantColorSize(variant, maps);
    const color = merchColorFromPrintify(colorTitle, colorHex);
    mappedVariants.push({
      id: variant.id,
      colorId: color.id,
      colorName: color.name,
      colorHex: color.hex,
      size,
      priceCents: Number.isFinite(variant.price) ? Number(variant.price) : medium?.priceCents ?? 2800,
    });
  }

  if (!mappedVariants.length) return null;

  const defaultVariant = variants.find((variant) => variant.is_default) ?? variants[0];
  const defaultMapped = mappedVariants.find((variant) => variant.id === defaultVariant.id) ?? mappedVariants[0];
  const colorIds = [...new Set(mappedVariants.map((variant) => variant.colorId))];
  const sizes = sortSizes([...new Set(mappedVariants.map((variant) => variant.size))]);

  const rawDescription = plainText(product.description ?? "");
  const description =
    rawDescription.slice(0, 600) ||
    `${medium?.description ?? "NLMSF merch."} After printing and shipping costs, proceeds support LMS research.`;

  return {
    productId,
    title,
    description,
    mediumId,
    priceCents: defaultMapped.priceCents || medium?.priceCents || 2800,
    colorIds,
    sizes,
    variants: mappedVariants,
    artworkUrl: pickArtworkUrl(product),
    mockupUrl: pickMockupUrl(product),
    mockupsByColor: mockupsByColorFromProduct(product, mappedVariants),
  };
}

export function parsePrintifyVariantsJson(raw: string | null | undefined): MappedPrintifyVariant[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as { variants?: MappedPrintifyVariant[] } | MappedPrintifyVariant[];
    const variants = Array.isArray(parsed) ? parsed : parsed.variants ?? [];
    return variants.filter((variant) => variant && typeof variant.id === "number");
  } catch {
    return [];
  }
}

export function serializePrintifyVariants(mapped: MappedPrintifyProduct): string {
  return JSON.stringify({
    productId: mapped.productId,
    mediumId: mapped.mediumId,
    variants: mapped.variants,
    mockupUrl: mapped.mockupUrl,
    mockupsByColor: mapped.mockupsByColor,
  });
}

export function parsePrintifyMockups(raw: string | null | undefined): {
  mockupUrl?: string;
  mockupsByColor: Record<string, string>;
} {
  if (!raw) return { mockupsByColor: {} };
  try {
    const parsed = JSON.parse(raw) as {
      mockupUrl?: unknown;
      mockupsByColor?: unknown;
    };
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { mockupsByColor: {} };
    }
    const byColor: Record<string, string> = {};
    if (parsed.mockupsByColor && typeof parsed.mockupsByColor === "object") {
      for (const [key, value] of Object.entries(parsed.mockupsByColor as Record<string, unknown>)) {
        if (typeof value === "string" && value.trim()) byColor[key] = value.trim();
      }
    }
    const mockupUrl = typeof parsed.mockupUrl === "string" && parsed.mockupUrl.trim() ? parsed.mockupUrl.trim() : undefined;
    return { mockupUrl, mockupsByColor: byColor };
  } catch {
    return { mockupsByColor: {} };
  }
}

export function findMappedVariant(
  variants: MappedPrintifyVariant[],
  colorId: string,
  size: string,
): MappedPrintifyVariant | undefined {
  return variants.find((variant) => variant.colorId === colorId && variant.size === size);
}

export function uniqueColorsFromVariants(variants: MappedPrintifyVariant[]): Array<{ id: string; name: string; hex: string }> {
  const seen = new Set<string>();
  const colors: Array<{ id: string; name: string; hex: string }> = [];
  for (const variant of variants) {
    if (seen.has(variant.colorId)) continue;
    seen.add(variant.colorId);
    colors.push({ id: variant.colorId, name: variant.colorName, hex: variant.colorHex });
  }
  return colors;
}
