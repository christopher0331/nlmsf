import { NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toShopListing } from "@/lib/merch/dto";

export async function GET() {
  try {
    const prisma = await getMerchPrisma();
    const listings = await prisma.merchListing.findMany({
      where: { published: true },
      include: { design: { select: { id: true, title: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      listings: listings.map(toShopListing),
    });
  } catch (err) {
    console.error("Merch listings failed:", err);
    const message = err instanceof Error ? err.message : "Failed to load merch";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
