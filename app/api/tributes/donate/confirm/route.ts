import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const { tributeId, donorName, message, isAnonymous } = session.metadata ?? {};
    const amountCents = session.amount_total ?? 0;

    if (!tributeId || !donorName) {
      return NextResponse.json({ error: "Missing session metadata" }, { status: 400 });
    }

    const prisma = await getPrisma();

    // Idempotency: check if already created for this Stripe session
    const existing = await prisma.tributeDonor.findFirst({
      where: {
        tributeId,
        donorName,
        donationDate: new Date().toISOString().split("T")[0],
        donationAmount: amountCents / 100,
      },
    });
    if (existing) {
      return NextResponse.json({ donor: existing, alreadyConfirmed: true });
    }

    const donor = await prisma.tributeDonor.create({
      data: {
        tributeId,
        donorName,
        donationAmount: amountCents / 100,
        donationDate: new Date().toISOString().split("T")[0],
        isAnonymous: isAnonymous === "true",
        message: message?.trim() || null,
        displayOrder: 0,
      },
    });

    return NextResponse.json({ donor });
  } catch (err) {
    console.error("Tribute donation confirm error:", err);
    return NextResponse.json({ error: "Failed to confirm donation" }, { status: 500 });
  }
}
