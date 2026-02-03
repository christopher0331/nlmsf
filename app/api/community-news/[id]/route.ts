import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  let body: Partial<{ type: string; title: string; summary: string; url: string; manualDate: string; featured: boolean }>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const update: Parameters<typeof prisma.communityEntry.update>[0]["data"] = {};
  if (body.type !== undefined) update.type = body.type;
  if (body.title !== undefined) update.title = body.title;
  if (body.summary !== undefined) update.summary = body.summary;
  if (body.url !== undefined) update.url = body.url;
  if (body.manualDate !== undefined) update.manualDate = body.manualDate;
  if (body.featured !== undefined) update.featured = !!body.featured;

  if (Object.keys(update).length === 0) {
    const entry = await prisma.communityEntry.findUniqueOrThrow({ where: { id } });
    return NextResponse.json(entry);
  }
  const entry = await prisma.communityEntry.update({ where: { id }, data: update });
  return NextResponse.json(entry);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  await prisma.communityEntry.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
