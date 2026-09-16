import { getMedium, type MerchMediumId } from "@/lib/merch/catalog";

export type PrintifyAddress = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
};

export type PrintifyLineItem = {
  mediumId: MerchMediumId;
  colorName: string;
  size: string;
  quantity: number;
  imageUrl: string;
  title: string;
};

export type PrintifySubmitResult = {
  mode: "printify" | "mock";
  orderId: string | null;
  status: string;
  raw?: unknown;
};

const PRINTIFY_API = "https://api.printify.com/v1";
const FALLBACK_SHOP_ID = "26344889";

export function getPrintifyToken(): string | undefined {
  const token =
    process.env.PRINTIFY_API_TOKEN ||
    process.env.printify ||
    process.env.PRINTIFY ||
    process.env.PRINTIFY_TOKEN;
  return token?.trim() || undefined;
}

function getExplicitShopId(): string | undefined {
  const shopId =
    process.env.PRINTIFY_SHOP_ID ||
    process.env.printify_shop_id ||
    process.env.PRINTIFY_SHOP;
  return shopId?.trim() || undefined;
}

export function isPrintifyConfigured(): boolean {
  return Boolean(getPrintifyToken());
}

function printifyHeaders(): HeadersInit {
  const token = getPrintifyToken();
  if (!token) throw new Error("Printify token is not configured.");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "User-Agent": "NLMSF-Gift-Shop/1.0 (nlmsf.org)",
  };
}

function splitName(name: string): { first: string; last: string } {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "NLMSF" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

export function addressFromStripeShipping(input: {
  name: string;
  email: string;
  phone?: string | null;
  address: {
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  };
}): PrintifyAddress {
  const { first, last } = splitName(input.name);
  return {
    first_name: first,
    last_name: last,
    email: input.email,
    phone: input.phone || "",
    country: input.address.country || "US",
    region: input.address.state || "",
    address1: input.address.line1 || "",
    address2: input.address.line2 || "",
    city: input.address.city || "",
    zip: input.address.postal_code || "",
  };
}

type PrintifyVariant = {
  id: number;
  title?: string;
  options?: { color?: string; size?: string };
};

const variantCache = new Map<string, PrintifyVariant[]>();

function normalizeOption(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function colorAliases(colorName: string): string[] {
  const n = normalizeOption(colorName);
  const aliases: Record<string, string[]> = {
    championpurple: ["purple", "violet", "royalpurple", "heatherpurple", "teampurple"],
    purple: ["purple", "violet", "heatherpurple", "teampurple", "heatherteampurple"],
    black: ["black"],
    white: ["white"],
    heathergrey: ["sportsgrey", "heather", "grey", "gray", "athleticheather", "darkgreyheather", "graphiteheather"],
    navy: ["navy", "navyblue", "darknavy", "heathernavy"],
    softpink: ["pink", "lightpink", "hotpink", "cranberry"],
  };
  return aliases[n] ?? [n];
}

async function listVariants(blueprintId: number, printProviderId: number): Promise<PrintifyVariant[]> {
  const key = `${blueprintId}:${printProviderId}`;
  const cached = variantCache.get(key);
  if (cached) return cached;
  const json = await printifyFetch(
    `/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/variants.json`,
    { method: "GET" },
  ) as { variants?: PrintifyVariant[] } | PrintifyVariant[];
  const variants = Array.isArray(json) ? json : json.variants ?? [];
  variantCache.set(key, variants);
  return variants;
}

async function resolveVariantId(
  blueprintId: number,
  printProviderId: number,
  colorName: string,
  size: string,
): Promise<number> {
  const variants = await listVariants(blueprintId, printProviderId);
  const colorNeedles = colorAliases(colorName).map(normalizeOption);
  const sizeNeedle = normalizeOption(size === "One Size" || size === "One size" ? "onesize" : size);
  const match = variants.find((variant) => {
    const color = normalizeOption(variant.options?.color ?? variant.title?.split("/")[0] ?? "");
    const variantSize = normalizeOption(variant.options?.size ?? variant.title?.split("/")[1] ?? "");
    const colorOk = colorNeedles.some((needle) => color.includes(needle) || needle.includes(color));
    const sizeOk =
      variantSize === sizeNeedle ||
      variantSize.includes(sizeNeedle) ||
      (sizeNeedle === "onesize" && (variantSize === "osfa" || variantSize === "onesize" || variantSize === ""));
    return colorOk && sizeOk;
  });
  if (!match) {
    throw new Error(
      `No Printify variant for ${colorName} / ${size} on blueprint ${blueprintId}. Check PRINTIFY_BLUEPRINT_* env values.`,
    );
  }
  return match.id;
}

async function printifyFetch(path: string, init: RequestInit) {
  const res = await fetch(`${PRINTIFY_API}${path}`, {
    ...init,
    headers: { ...printifyHeaders(), ...(init.headers ?? {}) },
  });
  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const message = typeof json === "object" && json && "message" in json
      ? String((json as { message: string }).message)
      : `Printify ${res.status}`;
    const error = new Error(message) as Error & { status: number; body: unknown };
    error.status = res.status;
    error.body = json;
    throw error;
  }
  return json;
}

async function lineItemsPayload(items: PrintifyLineItem[]) {
  const lines = [];
  for (const item of items) {
    const medium = getMedium(item.mediumId);
    if (!medium) throw new Error(`Unknown medium ${item.mediumId}`);
    const variantId = await resolveVariantId(
      medium.blueprintId,
      medium.printProviderId,
      item.colorName,
      item.size,
    );
    lines.push({
      print_provider_id: medium.printProviderId,
      blueprint_id: medium.blueprintId,
      variant_id: variantId,
      print_areas: {
        [medium.printArea]: item.imageUrl,
      },
      quantity: item.quantity,
    });
  }
  return lines;
}

async function resolvePrintifyShopId(): Promise<string> {
  const explicit = getExplicitShopId();
  if (explicit) return explicit;
  const json = await printifyFetch("/shops.json", { method: "GET" }) as Array<{ id: number; title?: string }>;
  const shops = Array.isArray(json) ? json : [];
  const preferred = shops.find((shop) => /nlmsf/i.test(shop.title ?? "")) ?? shops[0];
  if (preferred?.id != null) return String(preferred.id);
  return FALLBACK_SHOP_ID;
}

export async function submitPrintifyOrder(input: {
  externalId: string;
  label: string;
  address: PrintifyAddress;
  items: PrintifyLineItem[];
}): Promise<PrintifySubmitResult> {
  if (!isPrintifyConfigured()) {
    return {
      mode: "mock",
      orderId: `mock_${input.externalId}`,
      status: "queued_mock",
      raw: {
        note: "Printify token not set. Order stored locally for fulfillment later.",
        items: input.items,
        address: input.address,
      },
    };
  }

  const shopId = await resolvePrintifyShopId();
  const body = {
    external_id: input.externalId,
    label: input.label,
    line_items: await lineItemsPayload(input.items),
    shipping_method: 1,
    send_shipping_notification: true,
    address_to: input.address,
  };

  const created = await printifyFetch(`/shops/${shopId}/orders/express.json`, {
    method: "POST",
    body: JSON.stringify(body),
  }) as { id?: string | number; status?: string };

  const printifyId = created?.id != null ? String(created.id) : null;
  if (printifyId) {
    try {
      await printifyFetch(`/shops/${shopId}/orders/${printifyId}/send_to_production.json`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Printify send_to_production failed:", err);
    }
  }

  return {
    mode: "printify",
    orderId: printifyId,
    status: created?.status ?? "submitted",
    raw: created,
  };
}
