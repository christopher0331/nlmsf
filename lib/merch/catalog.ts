export type MerchMediumId = "short_tee" | "long_tee" | "hoodie" | "hat";

export type MerchColor = {
  id: string;
  name: string;
  hex: string;
  hatOnly?: boolean;
};

export type MerchMedium = {
  id: MerchMediumId;
  name: string;
  shortName: string;
  description: string;
  priceCents: number;
  sizes: string[];
  printArea: "front";
  /** Printify catalog blueprint. Override with PRINTIFY_BLUEPRINT_* env vars. */
  blueprintId: number;
  printProviderId: number;
};

export const MERCH_COLORS: MerchColor[] = [
  { id: "purple", name: "Champion Purple", hex: "#6D28D9" },
  { id: "black", name: "Black", hex: "#111827" },
  { id: "white", name: "White", hex: "#F8F7F4" },
  { id: "heather", name: "Heather Grey", hex: "#9CA3AF" },
  { id: "navy", name: "Navy", hex: "#1E3A5F" },
  { id: "pink", name: "Soft Pink", hex: "#F1B6C0", hatOnly: true },
];

export const MERCH_MEDIUMS: MerchMedium[] = [
  {
    id: "short_tee",
    name: "Unisex Short Sleeve Tee",
    shortName: "Short Sleeve Tee",
    description: "Soft unisex short sleeve shirt — the same everyday style we already sell.",
    priceCents: 2800,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    printArea: "front",
    blueprintId: Number(process.env.PRINTIFY_BLUEPRINT_SHORT_TEE ?? 12),
    printProviderId: Number(process.env.PRINTIFY_PROVIDER_SHORT_TEE ?? 99),
  },
  {
    id: "long_tee",
    name: "Unisex Long Sleeve Tee",
    shortName: "Long Sleeve Tee",
    description: "Long sleeve tee for cooler days, printed with the approved NLMSF design.",
    priceCents: 3400,
    sizes: ["S", "M", "L", "XL", "2XL"],
    printArea: "front",
    blueprintId: Number(process.env.PRINTIFY_BLUEPRINT_LONG_TEE ?? 41),
    printProviderId: Number(process.env.PRINTIFY_PROVIDER_LONG_TEE ?? 99),
  },
  {
    id: "hoodie",
    name: "Unisex Hoodie",
    shortName: "Hoodie",
    description: "Heavy-blend hoodie — a core Champions of Hope merch medium.",
    priceCents: 4600,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    printArea: "front",
    blueprintId: Number(process.env.PRINTIFY_BLUEPRINT_HOODIE ?? 77),
    printProviderId: Number(process.env.PRINTIFY_PROVIDER_HOODIE ?? 99),
  },
  {
    id: "hat",
    name: "Classic Baseball Cap",
    shortName: "Hat",
    description: "Printed classic baseball cap, matching the hats already in the gift shop.",
    priceCents: 2499,
    sizes: ["One Size"],
    printArea: "front",
    blueprintId: Number(process.env.PRINTIFY_BLUEPRINT_HAT ?? 1447),
    printProviderId: Number(process.env.PRINTIFY_PROVIDER_HAT ?? 99),
  },
];

export const STANDARD_SHIPPING_CENTS = 699;

export function getMedium(id: string): MerchMedium | undefined {
  return MERCH_MEDIUMS.find((m) => m.id === id);
}

export function getColor(id: string): MerchColor | undefined {
  return MERCH_COLORS.find((c) => c.id === id);
}

export function colorsForMedium(mediumId: MerchMediumId): MerchColor[] {
  if (mediumId === "hat") {
    return MERCH_COLORS.filter((c) => ["black", "white", "pink", "navy"].includes(c.id));
  }
  if (mediumId === "long_tee") {
    return MERCH_COLORS.filter((c) => ["black", "white", "heather", "navy"].includes(c.id));
  }
  return MERCH_COLORS.filter((c) => !c.hatOnly);
}

export function isValidSize(mediumId: string, size: string): boolean {
  const medium = getMedium(mediumId);
  return !!medium && medium.sizes.includes(size);
}

export function formatUsd(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function parseColorIds(colorsJson: string): string[] {
  try {
    const parsed = JSON.parse(colorsJson) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return [];
  }
}

export type MerchCartItem = {
  listingId: string;
  mediumId: MerchMediumId;
  colorId: string;
  size: string;
  quantity: number;
};

export function normalizeQuantity(quantity: unknown): number {
  const n = Number(quantity);
  if (!Number.isInteger(n) || n < 1) return 1;
  return Math.min(n, 10);
}
