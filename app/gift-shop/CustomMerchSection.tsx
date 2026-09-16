import { getPrisma } from "@/lib/prisma";
import { toListingDto } from "@/lib/merch/dto";
import { colorsForMedium, getMedium, parseColorIds, type MerchMediumId } from "@/lib/merch/catalog";
import CustomMerchGrid from "./CustomMerchGrid";

export default async function CustomMerchSection() {
  try {
    const prisma = await getPrisma();
    const listings = await prisma.merchListing.findMany({
      where: { published: true },
      include: { design: true },
      orderBy: { createdAt: "desc" },
    });
    const items = listings.map((listing) => {
      const mediumId = listing.mediumId as MerchMediumId;
      const selected = parseColorIds(listing.colorsJson);
      return {
        ...toListingDto(listing),
        sizes: getMedium(mediumId)?.sizes ?? ["M"],
        colorOptions: colorsForMedium(mediumId).filter((color) => selected.includes(color.id)),
      };
    });
    return <CustomMerchGrid listings={items} />;
  } catch (err) {
    console.error("Custom merch section failed:", err);
    return null;
  }
}
