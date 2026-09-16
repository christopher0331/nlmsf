import Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";
import { fulfillMerchOrder } from "@/lib/merch/fulfill";

export function shippingFromSession(session: Stripe.Checkout.Session) {
  const raw = session as Stripe.Checkout.Session & {
    shipping_details?: { name?: string | null; address?: Stripe.Address | null };
    collected_information?: {
      shipping_details?: { name?: string | null; address?: Stripe.Address | null };
    };
  };
  const details = raw.collected_information?.shipping_details ?? raw.shipping_details;
  const customer = session.customer_details;
  return {
    name: details?.name || customer?.name || "",
    phone: customer?.phone ?? null,
    address: details?.address || customer?.address || null,
  };
}

export async function handlePaidMerchSession(session: Stripe.Checkout.Session) {
  if (session.metadata?.kind !== "merch") return;
  if (session.payment_status !== "paid") return;

  const orderId = session.metadata?.orderId;
  if (!orderId) return;

  const prisma = await getPrisma();
  const order = await prisma.merchOrder.findUnique({ where: { id: orderId } });
  if (!order) return;

  const origin = session.success_url ? new URL(session.success_url).origin : undefined;

  if (order.status === "submitted_to_print") return;
  if (order.status === "paid" || order.status === "print_failed") {
    try {
      await fulfillMerchOrder(orderId, origin);
    } catch (err) {
      console.error("Merch fulfill retry failed:", err);
    }
    return;
  }

  const paidAmount = session.amount_total ?? 0;
  if (paidAmount !== order.totalCents) {
    console.error(`Merch webhook amount mismatch for ${orderId}: expected ${order.totalCents}, got ${paidAmount}`);
    return;
  }

  await prisma.merchOrder.update({
    where: { id: orderId },
    data: {
      status: "paid",
      stripePaymentIntent: typeof session.payment_intent === "string" ? session.payment_intent : null,
      shippingJson: JSON.stringify(shippingFromSession(session)),
    },
  });

  try {
    await fulfillMerchOrder(orderId, origin);
  } catch (err) {
    console.error("Printify fulfillment failed (order still paid):", err);
  }
}
