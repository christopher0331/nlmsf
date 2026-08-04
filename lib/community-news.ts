import { getPrisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

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

/** Code-shipped newsletter issues (merged with DB; deduped by URL). */
const STATIC_NEWS_TRACKER_ENTRIES: Array<{
  id: string;
  title: string;
  summary: string;
  url: string;
  manualDate: string;
}> = [
  {
    id: "static-news-2026-07-25",
    title: "NLMSF/Sarcoma Community Connection - July 25, 2026",
    summary:
      "Circle of Hope Community Roundtable, patient and caregiver clinical trial perspectives, navigating the NLMSF website, insurance barriers webinar, research highlights, and LMS support tips.",
    url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6766394",
    manualDate: "2026-07-25",
  },
];

function mergeNewsTracker(dbEntries: FeedEntry[]): FeedEntry[] {
  const urls = new Set(dbEntries.map((entry) => entry.url));
  const staticEntries = STATIC_NEWS_TRACKER_ENTRIES.filter((entry) => !urls.has(entry.url)).map(
    (entry) => ({
      id: entry.id,
      title: entry.title,
      summary: entry.summary,
      url: entry.url,
      display_date: formatDisplayDate(entry.manualDate),
      year: getYear(entry.manualDate),
    })
  );

  return [...staticEntries, ...dbEntries].sort((a, b) => {
    const dateA = a.display_date ? new Date(a.display_date).getTime() : 0;
    const dateB = b.display_date ? new Date(b.display_date).getTime() : 0;
    return dateB - dateA;
  });
}

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
const getFullFeedCached = unstable_cache(async (): Promise<{
  snapshots: FeedEntry[];
  newsTracker: FeedEntry[];
}> => {
  try {
    const prisma = await getPrisma();
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
      newsTracker: mergeNewsTracker(newsTracker.map(toFeedEntry)),
    };
  } catch (error) {
    const prismaError =
      error && typeof error === "object" && "code" in error
        ? (error as { code?: string }).code
        : undefined;
    if (prismaError === "P2021") {
      return { snapshots: [], newsTracker: mergeNewsTracker([]) };
    }
    throw error;
  }
}, ["community-news-full-feed"], { revalidate: 900 });

export async function getFullFeed(): Promise<{
  snapshots: FeedEntry[];
  newsTracker: FeedEntry[];
}> {
  return getFullFeedCached();
}
