import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

const CATEGORIES = ["patient-education", "medical-research", "caregiver-support", "webinars"];

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  let body: Partial<{
    title: string;
    category: string;
    youtubeUrl: string;
    duration: string;
    description: string;
    featured: boolean;
  }>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const prisma = await getPrisma();
  const update: Record<string, unknown> = {};
  if (body.title !== undefined) update.title = body.title;
  if (body.category !== undefined) {
    if (!CATEGORIES.includes(body.category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }
    update.category = body.category;
  }
  if (body.youtubeUrl !== undefined) update.youtubeUrl = body.youtubeUrl;
  if (body.duration !== undefined) update.duration = body.duration;
  if (body.description !== undefined) update.description = body.description;
  if (body.featured !== undefined) update.featured = !!body.featured;

  if (Object.keys(update).length === 0) {
    const video = await prisma.educationVideo.findUniqueOrThrow({ where: { id } });
    return NextResponse.json(video);
  }
  const video = await prisma.educationVideo.update({ where: { id }, data: update });
  return NextResponse.json(video);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  const prisma = await getPrisma();
  await prisma.educationVideo.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
