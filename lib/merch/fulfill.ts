import { getPrisma } from "@/lib/prisma";
import { getColor, getMedium, type MerchMediumId } from "@/lib/merch/catalog";
import { designImagePath } from "@/lib/merch/dto";
import {
  addressFromStripeShipping,
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
  const prisma = await getPrisma();
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

  const printItems: PrintifyLineItem[] = items.map((item) => {
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
    const result = await submitPrintifyOrder({
      externalId: order.id,
      label: `NLMSF ${order.id.slice(-8).toUpperCase()}`,
      address: addressFromStripeShipping({
        name: shipping.name || order.name,
        email: order.email,
        phone: shipping.phone || order.phone,
        address: shipping.address,
      }),
      items: printItems,
    });

    return prisma.merchOrder.update({
      where: { id: orderId },
      data: {
        status: "submitted_to_print",
        printifyOrderId: result.orderId,
        printifyStatus: `${result.mode}:${result.status}`,
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
