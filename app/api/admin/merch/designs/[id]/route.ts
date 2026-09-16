import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { toDesignDto } from "@/lib/merch/dto";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const body = await req.json();
  const data: { status?: string; title?: string; reviewNote?: string | null } = {};
  if (typeof body?.title === "string" && body.title.trim()) data.title = body.title.trim();
  if (typeof body?.reviewNote === "string") data.reviewNote = body.reviewNote;
  if (body?.status === "approved" || body?.status === "rejected" || body?.status === "pending") {
    data.status = body.status;
  }

  const prisma = await getPrisma();
  const design = await prisma.merchDesign.update({ where: { id }, data });
  return NextResponse.json(toDesignDto(design));
}
