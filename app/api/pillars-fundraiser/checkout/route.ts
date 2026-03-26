import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";
import { PACKAGES, isValidPackageKey } from "@/lib/fundraiser-packages";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  try {
    const { packageType, name, email, phone } = await req.json();

    if (!packageType || !isValidPackageKey(packageType)) {
      return NextResponse.json({ error: "Invalid package type" }, { status: 400 });
    }
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const pkg = PACKAGES[packageType];
    const prisma = await getPrisma();

    const order = await prisma.fundraiserOrder.create({
      data: {
        name,
        email,
        phone: phone || null,
        packageType,
        amount: pkg.price,
        eventTickets: pkg.eventTickets,
        raffleTickets: pkg.raffleTickets,
        sponsorRaffleTickets: pkg.sponsorRaffleTickets,
        bestDressedVotes: pkg.bestDressedVotes,
        podcast: pkg.podcast,
        logoOnHomepage: pkg.logoOnHomepage,
        recognition: pkg.recognition,
        status: "pending",
      },
    });

    const stripe = getStripe();
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const returnPath = "/pillars-of-purpose-fundraiser";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: pkg.price,
            product_data: {
              name: pkg.label,
              description: pkg.description,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        orderId: order.id,
        packageType,
      },
      success_url: `${origin}${returnPath}?success=1&order=${order.id}`,
      cancel_url: `${origin}${returnPath}?cancelled=1`,
    });

    await prisma.fundraiserOrder.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
