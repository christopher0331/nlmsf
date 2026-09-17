import { after } from "next/server";
import { NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toShopListing } from "@/lib/merch/dto";
import { preparePublicMerchCatalog } from "@/lib/merch/printify-publish";
import { refreshPrintifyListingMockups } from "@/lib/merch/printify-sync";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prepared = await preparePublicMerchCatalog({ waitForMockupsMs: 0 }).catch((err) => {
      console.error("Printify catalog prepare failed:", err);
      return null;
    });
    await refreshPrintifyListingMockups().catch((err) => {
      console.error("Printify mockup refresh failed:", err);
    });
    if (prepared && prepared.items.some((item) => item.linked && !item.hasMockup)) {
      after(() =>
        refreshPrintifyListingMockups().catch((err) => {
          console.error("Printify delayed mockup refresh failed:", err);
        }),
      );
    }
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
