import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const prisma = await getPrisma();
  const entries = await prisma.communityEntry.findMany({
    orderBy: { manualDate: "desc" },
  });
  return NextResponse.json(entries);
}

export async function POST(request: Request) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: { type: string; title: string; summary: string; url: string; manualDate: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { type, title, summary, url, manualDate } = body;
  if (
    !type ||
    type !== "snapshot" && type !== "news_tracker" ||
    !title?.trim() ||
    !summary?.trim() ||
    !url?.trim() ||
    !manualDate?.trim()
  ) {
    return NextResponse.json(
      { error: "Missing or invalid fields: type (snapshot|news_tracker), title, summary, url, manualDate" },
      { status: 400 }
    );
  }

  const prisma = await getPrisma();
  const entry = await prisma.communityEntry.create({
    data: {
      type,
      title: title.trim(),
      summary: summary.trim(),
      url: url.trim(),
      manualDate: manualDate.trim(),
    },
  });
  return NextResponse.json(entry);
}
