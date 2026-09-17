import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toShopListing } from "@/lib/merch/dto";
import { ensurePublishedPrintifyListings, refreshPrintifyListingMockups } from "@/lib/merch/printify-sync";
import CustomMerchGrid from "./CustomMerchGrid";

export default async function CustomMerchSection() {
  try {
    await ensurePublishedPrintifyListings().catch((err) => {
      console.error("Printify auto-import failed:", err);
    });
    await refreshPrintifyListingMockups().catch((err) => {
      console.error("Printify mockup refresh failed:", err);
    });
    const prisma = await getMerchPrisma();
    const listings = await prisma.merchListing.findMany({
      where: { published: true },
      include: { design: true },
      orderBy: { createdAt: "desc" },
    });
    return <CustomMerchGrid listings={listings.map(toShopListing)} />;
  } catch (err) {
    console.error("Custom merch section failed:", err);
    return null;
  }
}
