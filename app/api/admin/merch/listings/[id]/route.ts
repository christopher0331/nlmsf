import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toListingDto } from "@/lib/merch/dto";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;
  const body = await req.json();
  const data: { published?: boolean; title?: string } = {};
  if (typeof body?.published === "boolean") data.published = body.published;
  if (typeof body?.title === "string" && body.title.trim()) data.title = body.title.trim();
  const prisma = await getMerchPrisma();
  const listing = await prisma.merchListing.update({
    where: { id },
    data,
    include: { design: true },
  });
  return NextResponse.json(toListingDto(listing));
}
