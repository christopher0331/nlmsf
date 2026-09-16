import { NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toListingDto } from "@/lib/merch/dto";
import { colorsForMedium, getMedium, parseColorIds, type MerchMediumId } from "@/lib/merch/catalog";

export async function GET() {
  try {
    const prisma = await getMerchPrisma();
    const listings = await prisma.merchListing.findMany({
      where: { published: true },
      include: { design: { select: { id: true, title: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      listings: listings.map((listing) => ({
        ...toListingDto(listing),
        sizes: getMedium(listing.mediumId)?.sizes ?? ["M"],
        colorOptions: colorsForMedium((listing.mediumId as MerchMediumId) || "short_tee").filter((color) =>
          parseColorIds(listing.colorsJson).includes(color.id),
        ),
      })),
    });
  } catch (err) {
    console.error("Merch listings failed:", err);
    const message = err instanceof Error ? err.message : "Failed to load merch";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
