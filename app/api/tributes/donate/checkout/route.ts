import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tributeSlug, tributeName, tributeId, donorName, email, amountCents, message, isAnonymous } = body;

    if (!tributeSlug || !tributeName || !tributeId || !donorName || !email || !amountCents) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!Number.isInteger(amountCents) || amountCents < 100 || amountCents > 10_000_000) {
      return NextResponse.json({ error: "Amount must be between $1.00 and $100,000.00" }, { status: 400 });
    }

    const stripe = getStripe();
    const origin = req.headers.get("origin") || "https://nlmsf.org";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amountCents,
            product_data: {
              name: `Donation in Memory of ${tributeName}`,
              description: `In loving memory of ${tributeName} — National Leiomyosarcoma Foundation`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        tributeSlug,
        tributeName,
        tributeId,
        donorName,
        email,
        message: (message || "").slice(0, 500),
        isAnonymous: isAnonymous ? "true" : "false",
      },
      success_url: `${origin}/${tributeSlug}?tribute_donated=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${tributeSlug}?tribute_cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Tribute donation checkout error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? message : "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
