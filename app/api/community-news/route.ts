import { NextResponse } from "next/server";
import { getFullFeed } from "@/lib/community-news";

function toLatestEntry(
  entry: {
    id: string;
    title: string;
    summary: string;
    url: string;
    display_date: string;
  },
  type: "snapshot" | "news_tracker"
) {
  return {
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    url: entry.url,
    display_date: entry.display_date,
    type,
  };
}

/** Public: latest only (no query) or full feed (?feed=full) for community news page */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const feed = searchParams.get("feed");
  const data = await getFullFeed();

  if (feed === "full") {
    return NextResponse.json(data);
  }

  return NextResponse.json({
    latestSnapshot: data.snapshots[0] ? toLatestEntry(data.snapshots[0], "snapshot") : null,
    latestNewsletter: data.newsTracker[0]
      ? toLatestEntry(data.newsTracker[0], "news_tracker")
      : null,
  });
}
