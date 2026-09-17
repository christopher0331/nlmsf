import { NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const prisma = await getMerchPrisma();
  const design = await prisma.merchDesign.findUnique({
    where: { id },
    select: { imageData: true, imageMime: true, status: true, listings: { select: { published: true } } },
  });
  if (!design) return new NextResponse("Not found", { status: 404 });

  return new NextResponse(Buffer.from(design.imageData), {
    headers: {
      "Content-Type": design.imageMime || "image/png",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
