import { NextRequest, NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { getStripe } from "@/lib/stripe";
import { fulfillMerchOrder } from "@/lib/merch/fulfill";
import { shippingFromSession } from "@/lib/merch/stripe-webhook";
import { toOrderDto } from "@/lib/merch/dto";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  const orderId = req.nextUrl.searchParams.get("order");
  if (!sessionId && !orderId) {
    return NextResponse.json({ error: "Missing session" }, { status: 400 });
  }

  const prisma = await getMerchPrisma();
  const order = sessionId
    ? await prisma.merchOrder.findUnique({ where: { stripeSessionId: sessionId } })
    : await prisma.merchOrder.findUnique({ where: { id: orderId! } });

  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

  if (order.status === "pending" && order.stripeSessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(order.stripeSessionId);
      if (session.payment_status === "paid") {
        const details = shippingFromSession(session);
        await prisma.merchOrder.update({
          where: { id: order.id },
          data: {
            status: "paid",
            stripePaymentIntent: typeof session.payment_intent === "string" ? session.payment_intent : null,
            shippingJson: JSON.stringify(details),
          },
        });
        try {
          await fulfillMerchOrder(order.id);
        } catch (err) {
          console.error("Fulfill after verify failed:", err);
        }
      }
    } catch (err) {
      console.error("Merch verify error:", err);
    }
  }

  const fresh = await prisma.merchOrder.findUnique({ where: { id: order.id } });
  return NextResponse.json(toOrderDto(fresh!));
}
