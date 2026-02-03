import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/** Public: list all education videos for the Education Videos page */
export async function GET() {
  type EducationVideoRecord = {
    id: string;
    title: string;
    category: string;
    youtubeUrl: string;
    duration: string | null;
    description: string;
    featured: boolean;
    createdAt: Date;
  };
  const videos = (await prisma.educationVideo.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  })) as EducationVideoRecord[];
  return NextResponse.json(
    videos.map((v) => ({
      id: v.id,
      title: v.title,
      category: v.category,
      youtube_url: v.youtubeUrl,
      duration: v.duration,
      description: v.description,
      featured: v.featured,
      created_at: v.createdAt.toISOString().slice(0, 10),
    }))
  );
}
