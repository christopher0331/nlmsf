import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { getColor, getMedium, type MerchMediumId } from "@/lib/merch/catalog";
import { designImagePath } from "@/lib/merch/dto";
import {
  addressFromStripeShipping,
  submitPrintifyCatalogOrder,
  submitPrintifyOrder,
  type PrintifyLineItem,
} from "@/lib/merch/printify";

export type StoredOrderItem = {
  listingId: string;
  designId: string;
  title: string;
  mediumId: MerchMediumId;
  colorId: string;
  size: string;
  quantity: number;
  priceCents: number;
  printifyProductId?: string | null;
  printifyVariantId?: number | null;
};

function siteOrigin(fallback?: string): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    fallback ||
    "https://nlmsf.org"
  ).replace(/\/$/, "");
}

export async function fulfillMerchOrder(orderId: string, origin?: string) {
  const prisma = await getMerchPrisma();
  const order = await prisma.merchOrder.findUnique({ where: { id: orderId } });
  if (!order) throw new Error("Order not found");
  if (order.status !== "paid" && order.status !== "print_failed") {
    return order;
  }

  const items = JSON.parse(order.itemsJson) as StoredOrderItem[];
  const shipping = order.shippingJson ? JSON.parse(order.shippingJson) as {
    name?: string;
    phone?: string | null;
    address?: {
      line1?: string | null;
      line2?: string | null;
      city?: string | null;
      state?: string | null;
      postal_code?: string | null;
      country?: string | null;
    };
  } : null;

  if (!shipping?.address) {
    await prisma.merchOrder.update({
      where: { id: orderId },
      data: {
        status: "print_failed",
        fulfillError: "Missing shipping address from Stripe Checkout.",
      },
    });
    throw new Error("Missing shipping address");
  }

  const address = addressFromStripeShipping({
    name: shipping.name || order.name,
    email: order.email,
    phone: shipping.phone || order.phone,
    address: shipping.address,
  });

  const catalogItems = items.filter((item) => item.printifyProductId && item.printifyVariantId);
  const expressItems = items.filter((item) => !(item.printifyProductId && item.printifyVariantId));
  const printItems: PrintifyLineItem[] = expressItems.map((item) => {
    const color = getColor(item.colorId);
    const medium = getMedium(item.mediumId);
    return {
      mediumId: item.mediumId,
      colorName: color?.name ?? item.colorId,
      size: item.size,
      quantity: item.quantity,
      imageUrl: `${siteOrigin(origin)}${designImagePath(item.designId)}`,
      title: `${item.title} (${medium?.shortName ?? item.mediumId})`,
    };
  });

  try {
    const results = [];
    if (catalogItems.length) {
      results.push(
        await submitPrintifyCatalogOrder({
          externalId: expressItems.length ? `${order.id}-cat` : order.id,
          label: `NLMSF ${order.id.slice(-8).toUpperCase()}`,
          address,
          items: catalogItems.map((item) => ({
            productId: item.printifyProductId as string,
            variantId: item.printifyVariantId as number,
            quantity: item.quantity,
          })),
        }),
      );
    }
    if (printItems.length) {
      results.push(
        await submitPrintifyOrder({
          externalId: catalogItems.length ? `${order.id}-exp` : order.id,
          label: `NLMSF ${order.id.slice(-8).toUpperCase()}`,
          address,
          items: printItems,
        }),
      );
    }

    const primary = results[0];
    if (!primary) throw new Error("No merch items to send to Printify.");

    return prisma.merchOrder.update({
      where: { id: orderId },
      data: {
        status: "submitted_to_print",
        printifyOrderId: results.map((result) => result.orderId).filter(Boolean).join(",") || primary.orderId,
        printifyStatus: results.map((result) => `${result.mode}:${result.status}`).join(" | "),
        fulfillError: null,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await prisma.merchOrder.update({
      where: { id: orderId },
      data: {
        status: "print_failed",
        fulfillError: message.slice(0, 500),
      },
    });
    throw err;
  }
}
