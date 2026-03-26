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
  try {
    const { orderId } = await req.json();
    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    const prisma = await getPrisma();
    const order = await prisma.fundraiserOrder.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.status === "confirmed") {
      return NextResponse.json({ status: "confirmed", alreadyConfirmed: true });
    }

    if (!order.stripeSessionId) {
      return NextResponse.json({ error: "No Stripe session" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(order.stripeSessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ status: "unpaid" });
    }

    if (session.amount_total !== order.amount) {
      return NextResponse.json({ error: "Amount mismatch" }, { status: 400 });
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

    return NextResponse.json({ status: "confirmed" });
  } catch (err) {
    console.error("Verify order error:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
