import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { getFullFeed } from "@/lib/community-news";

function formatDisplayDate(manualDate: string): string {
  const [y, m, d] = manualDate.split("-").map(Number);
  const date = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function toPublicEntry(entry: {
  id: string;
  type: string;
  title: string;
  summary: string;
  url: string;
  manualDate: string;
}) {
  return {
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    url: entry.url,
    display_date: formatDisplayDate(entry.manualDate),
    type: entry.type,
  };
}

/** Public: latest only (no query) or full feed (?feed=full) for community news page */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const feed = searchParams.get("feed");

  if (feed === "full") {
    const data = await getFullFeed();
    return NextResponse.json(data);
  }

  const prisma = await getPrisma();
  const [latestSnapshot, latestNewsletter] = await Promise.all([
    prisma.communityEntry.findFirst({
      where: { type: "snapshot" },
      orderBy: { manualDate: "desc" },
    }),
    prisma.communityEntry.findFirst({
      where: { type: "news_tracker" },
      orderBy: { manualDate: "desc" },
    }),
  ]);

  return NextResponse.json({
    latestSnapshot: latestSnapshot ? toPublicEntry(latestSnapshot) : null,
    latestNewsletter: latestNewsletter ? toPublicEntry(latestNewsletter) : null,
  });
}
