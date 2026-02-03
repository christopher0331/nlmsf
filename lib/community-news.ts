import { prisma } from "@/lib/prisma";

function formatDisplayDate(manualDate: string): string {
  const [y, m, d] = manualDate.split("-").map(Number);
  const date = new Date(y ?? 0, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getYear(manualDate: string): string {
  const y = manualDate.slice(0, 4);
  return y || new Date().getFullYear().toString();
}

export type FeedEntry = {
  id: string;
  title: string;
  summary: string;
  url: string;
  display_date: string;
  year: string;
};

function toFeedEntry(entry: {
  id: string;
  title: string;
  summary: string;
  url: string;
  manualDate: string;
}): FeedEntry {
  return {
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    url: entry.url,
    display_date: formatDisplayDate(entry.manualDate),
    year: getYear(entry.manualDate),
  };
}

/** All snapshots and news_tracker entries for the community news page. */
export async function getFullFeed(): Promise<{
  snapshots: FeedEntry[];
  newsTracker: FeedEntry[];
}> {
  try {
    const [snapshots, newsTracker] = await Promise.all([
      prisma.communityEntry.findMany({
        where: { type: "snapshot" },
        orderBy: { manualDate: "desc" },
      }),
      prisma.communityEntry.findMany({
        where: { type: "news_tracker" },
        orderBy: { manualDate: "desc" },
      }),
    ]);
    return {
      snapshots: snapshots.map(toFeedEntry),
      newsTracker: newsTracker.map(toFeedEntry),
    };
  } catch (error) {
    const prismaError =
      error && typeof error === "object" && "code" in error
        ? (error as { code?: string }).code
        : undefined;
    if (prismaError === "P2021") {
      return { snapshots: [], newsTracker: [] };
    }
    throw error;
  }
}
