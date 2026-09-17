import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toShopListing } from "@/lib/merch/dto";
import CustomMerchGrid from "./CustomMerchGrid";

export default async function CustomMerchSection() {
  try {
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
