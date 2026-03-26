import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = await getPrisma();
    const orders = await prisma.fundraiserOrder.findMany({
      where: { status: "confirmed" },
      orderBy: { createdAt: "desc" },
    });

    const totals = orders.reduce(
      (acc, o) => ({
        raised: acc.raised + o.amount,
        eventTickets: acc.eventTickets + o.eventTickets,
        raffleTickets: acc.raffleTickets + o.raffleTickets,
        sponsorRaffleTickets:
          acc.sponsorRaffleTickets + o.sponsorRaffleTickets,
        bestDressedVotes: acc.bestDressedVotes + o.bestDressedVotes,
        orderCount: acc.orderCount + 1,
      }),
      {
        raised: 0,
        eventTickets: 0,
        raffleTickets: 0,
        sponsorRaffleTickets: 0,
        bestDressedVotes: 0,
        orderCount: 0,
      }
    );

    return NextResponse.json({ totals, orders });
  } catch (err) {
    console.error("GET /api/pillars-fundraiser/orders error:", err);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
