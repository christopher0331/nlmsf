import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";
import { PACKAGES, isValidPackageKey } from "@/lib/fundraiser-packages";
import { sendFundraiserConfirmation } from "@/lib/email";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing signature or webhook secret" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const orderId = session.metadata?.orderId;
    if (!orderId) {
      console.error("Webhook: no orderId in session metadata");
      return NextResponse.json({ received: true });
    }

    try {
      const prisma = await getPrisma();
      const order = await prisma.fundraiserOrder.findUnique({
        where: { id: orderId },
      });

      if (!order) {
        console.error("Webhook: order not found:", orderId);
        return NextResponse.json({ received: true });
      }

      if (order.status === "confirmed") {
        return NextResponse.json({ received: true });
      }

      const paidAmount = session.amount_total ?? 0;
      if (paidAmount !== order.amount) {
        console.error(
          `Webhook: amount mismatch. Expected ${order.amount}, got ${paidAmount} for order ${orderId}`
        );
        return NextResponse.json({ received: true });
      }

      await prisma.fundraiserOrder.update({
        where: { id: orderId },
        data: {
          status: "confirmed",
          stripePaymentIntent:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : null,
        },
      });

      const pkgLabel = isValidPackageKey(order.packageType)
        ? PACKAGES[order.packageType].label
        : order.packageType;

      try {
        await sendFundraiserConfirmation({
          name: order.name,
          email: order.email,
          packageLabel: pkgLabel,
          amount: order.amount,
          eventTickets: order.eventTickets,
          raffleTickets: order.raffleTickets,
          sponsorRaffleTickets: order.sponsorRaffleTickets,
          bestDressedVotes: order.bestDressedVotes,
        });
      } catch (emailErr) {
        console.error("Confirmation email failed (order still confirmed):", emailErr);
      }
    } catch (err) {
      console.error("Webhook DB error:", err);
      return NextResponse.json({ error: "DB error" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
