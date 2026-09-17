import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toDesignDto, toListingDto, toOrderDto } from "@/lib/merch/dto";
import { isPrintifyConfigured } from "@/lib/merch/printify";
import { MERCH_COLORS, MERCH_MEDIUMS } from "@/lib/merch/catalog";
import { MERCH_THEMES } from "@/lib/merch/prompts";

const DESIGN_LIST_SELECT = {
  id: true,
  title: true,
  prompt: true,
  themeId: true,
  source: true,
  status: true,
  reviewNote: true,
  createdAt: true,
} as const;

export async function GET() {
  try {
    const ok = await isAuthenticated();
    if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const prisma = await getMerchPrisma();
    const [designs, listings, orders] = await Promise.all([
      prisma.merchDesign.findMany({
        orderBy: { createdAt: "desc" },
        select: DESIGN_LIST_SELECT,
      }),
      prisma.merchListing.findMany({
        include: { design: { select: { id: true, title: true } } },
        orderBy: { createdAt: "desc" },
      }),
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
  } catch (err) {
    console.error("Admin merch load failed:", err);
    const message = err instanceof Error ? err.message : "Failed to load merch studio";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
