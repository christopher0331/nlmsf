import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { toDesignDto, toListingDto, toOrderDto } from "@/lib/merch/dto";
import { isPrintifyConfigured } from "@/lib/merch/printify";
import { MERCH_COLORS, MERCH_MEDIUMS } from "@/lib/merch/catalog";
import { MERCH_THEMES } from "@/lib/merch/prompts";

export async function GET() {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const prisma = await getPrisma();
  const [designs, listings, orders] = await Promise.all([
    prisma.merchDesign.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.merchListing.findMany({ include: { design: true }, orderBy: { createdAt: "desc" } }),
    prisma.merchOrder.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
  ]);

  const geminiKey = process.env.GEMINI_API_KEY;
  return NextResponse.json({
    designs: designs.map(toDesignDto),
    listings: listings.map(toListingDto),
    orders: orders.map(toOrderDto),
    catalog: { mediums: MERCH_MEDIUMS, colors: MERCH_COLORS, themes: MERCH_THEMES },
    printifyConfigured: isPrintifyConfigured(),
    geminiConfigured: Boolean(geminiKey && !geminiKey.startsWith("PASTE_")),
    stripeConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
  });
}
