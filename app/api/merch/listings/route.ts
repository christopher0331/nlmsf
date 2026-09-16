import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { toListingDto } from "@/lib/merch/dto";
import { colorsForMedium, getMedium, parseColorIds, type MerchMediumId } from "@/lib/merch/catalog";

export async function GET() {
  const prisma = await getPrisma();
  const listings = await prisma.merchListing.findMany({
    where: { published: true },
    include: { design: true },
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
}
