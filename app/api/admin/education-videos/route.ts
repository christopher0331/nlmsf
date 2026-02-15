import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

const CATEGORIES = ["patient-education", "medical-research", "caregiver-support", "webinars"];

export async function GET() {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const prisma = await getPrisma();
  const videos = await prisma.educationVideo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: {
    title?: string;
    category?: string;
    youtubeUrl?: string;
    duration?: string;
    description?: string;
    featured?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { title, category, youtubeUrl, duration, description, featured } = body;
  if (!title?.trim() || !category || !CATEGORIES.includes(category) || !youtubeUrl?.trim()) {
    return NextResponse.json(
      { error: "Missing or invalid: title, category (patient-education|medical-research|caregiver-support|webinars), youtubeUrl" },
      { status: 400 }
    );
  }

  const prisma = await getPrisma();
  const video = await prisma.educationVideo.create({
    data: {
      title: title.trim(),
      category,
      youtubeUrl: youtubeUrl.trim(),
      duration: (duration ?? "").trim() || "0:00",
      description: (description ?? "").trim(),
      featured: !!featured,
    },
  });
  return NextResponse.json(video);
}
