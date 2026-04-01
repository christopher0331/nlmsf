import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPrisma } from "@/lib/prisma";
import {
  PACKAGES,
  computeDayOfDonationPerks,
  isValidPackageKey,
} from "@/lib/fundraiser-packages";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { packageType, name, email, phone, amountCents: rawAmountCents, miscNote: rawMiscNote } = body;

    if (!packageType || !isValidPackageKey(packageType)) {
      return NextResponse.json({ error: "Invalid package type" }, { status: 400 });
    }
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const pkg = PACKAGES[packageType];
    const prisma = await getPrisma();

    let amount: number;
    let eventTickets: number;
    let raffleTickets: number;
    let sponsorRaffleTickets: number;
    let bestDressedVotes: number;
    let podcast: boolean;
    let logoOnHomepage: boolean;
    let recognition: string | null;
    let stripeDescription: string;

    let miscNote: string | null = null;

    if (pkg.variableAmount) {
      const min = pkg.minAmountCents ?? 100;
      const max = pkg.maxAmountCents ?? 10_000_000;
      const amountCents = Number(rawAmountCents);
      if (
        !Number.isInteger(amountCents) ||
        amountCents < min ||
        amountCents > max
      ) {
        return NextResponse.json(
          { error: `Amount must be between $${(min / 100).toFixed(2)} and $${(max / 100).toFixed(2)}` },
          { status: 400 },
        );
      }

      if (packageType === "misc") {
        miscNote = typeof rawMiscNote === "string" && rawMiscNote.trim() ? rawMiscNote.trim().slice(0, 500) : null;
        amount = amountCents;
        eventTickets = 0;
        raffleTickets = 0;
        sponsorRaffleTickets = 0;
        bestDressedVotes = 0;
        podcast = false;
        logoOnHomepage = false;
        recognition = null;
        stripeDescription = miscNote ? `Misc donation: ${miscNote}` : "Miscellaneous donation";
        stripeDescription = stripeDescription.slice(0, 450);
      } else {
        const perks = computeDayOfDonationPerks(amountCents);
        amount = amountCents;
        eventTickets = perks.eventTickets;
        raffleTickets = perks.raffleTickets;
        sponsorRaffleTickets = perks.sponsorRaffleTickets;
        bestDressedVotes = perks.bestDressedVotes;
        podcast = perks.podcast;
        logoOnHomepage = perks.logoOnHomepage;
        recognition = perks.recognition;
        const desc = perks.remainderCents > 0
          ? `${perks.summaryLine} ${perks.recognition ?? ""}`.trim()
          : perks.summaryLine;
        stripeDescription = desc.slice(0, 450);
      }
    } else {
      amount = pkg.price;
      eventTickets = pkg.eventTickets;
      raffleTickets = pkg.raffleTickets;
      sponsorRaffleTickets = pkg.sponsorRaffleTickets;
      bestDressedVotes = pkg.bestDressedVotes;
      podcast = pkg.podcast;
      logoOnHomepage = pkg.logoOnHomepage;
      recognition = pkg.recognition;
      stripeDescription = pkg.description;
    }

    const order = await prisma.fundraiserOrder.create({
      data: {
        name,
        email,
        phone: phone || null,
        packageType,
        amount,
        eventTickets,
        raffleTickets,
        sponsorRaffleTickets,
        bestDressedVotes,
        podcast,
        logoOnHomepage,
        recognition,
        miscNote,
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
            unit_amount: amount,
            product_data: {
              name: pkg.label,
              description: stripeDescription,
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
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? message : "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
