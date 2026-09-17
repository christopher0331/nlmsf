import { after } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toShopListing } from "@/lib/merch/dto";
import { unpublishTestMerchListings, preparePublicMerchCatalog } from "@/lib/merch/printify-publish";
import { refreshPrintifyListingMockups } from "@/lib/merch/printify-sync";
import CustomMerchGrid from "./CustomMerchGrid";

export default async function CustomMerchSection() {
  try {
    await unpublishTestMerchListings().catch((err) => {
      console.error("Could not hide test merch listings:", err);
    });
    after(() =>
      preparePublicMerchCatalog({ waitForMockupsMs: 0 }).catch((err) => {
        console.error("Printify catalog prepare failed:", err);
      }),
    );
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
