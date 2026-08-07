import { getPrisma } from "@/lib/prisma";
import { revalidateTag, unstable_cache } from "next/cache";

export const COMMUNITY_NEWS_CACHE_TAG = "community-news-full-feed";

export function revalidateCommunityNewsCache() {
  revalidateTag(COMMUNITY_NEWS_CACHE_TAG);
}

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

/** Code-shipped Snapshot News issues (merged with DB; deduped by URL). */
const STATIC_SNAPSHOT_ENTRIES: Array<{
  id: string;
  title: string;
  summary: string;
  url: string;
  manualDate: string;
}> = [
  {
    id: "static-snapshot-2026-07-15",
    title: "NLMSF Sarcoma Snapshot News - July 15, 2026",
    summary:
      "National Leiomyosarcoma Awareness Day Snapshot News for archives posting.",
    url: "https://mailchi.mp/nlmsf.org/sarcoma-snapshot-news-august-11-6766074",
    manualDate: "2026-07-15",
  },
];

function mergeByUrl(
  dbEntries: FeedEntry[],
  staticEntries: Array<{
    id: string;
    title: string;
    summary: string;
    url: string;
    manualDate: string;
  }>
): FeedEntry[] {
  const urls = new Set(dbEntries.map((entry) => entry.url));
  const extras = staticEntries
    .filter((entry) => !urls.has(entry.url))
    .map((entry) => ({
      id: entry.id,
      title: entry.title,
      summary: entry.summary,
      url: entry.url,
      display_date: formatDisplayDate(entry.manualDate),
      year: getYear(entry.manualDate),
    }));

  return [...extras, ...dbEntries].sort((a, b) => {
    const dateA = a.display_date ? new Date(a.display_date).getTime() : 0;
    const dateB = b.display_date ? new Date(b.display_date).getTime() : 0;
    return dateB - dateA;
  });
}

function mergeNewsTracker(dbEntries: FeedEntry[]): FeedEntry[] {
  return mergeByUrl(dbEntries, STATIC_NEWS_TRACKER_ENTRIES);
}

function mergeSnapshots(dbEntries: FeedEntry[]): FeedEntry[] {
  return mergeByUrl(dbEntries, STATIC_SNAPSHOT_ENTRIES);
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
      snapshots: mergeSnapshots(snapshots.map(toFeedEntry)),
      newsTracker: mergeNewsTracker(newsTracker.map(toFeedEntry)),
    };
  } catch (error) {
    const prismaError =
      error && typeof error === "object" && "code" in error
        ? (error as { code?: string }).code
        : undefined;
    if (prismaError === "P2021") {
      return { snapshots: mergeSnapshots([]), newsTracker: mergeNewsTracker([]) };
    }
    throw error;
  }
}, [COMMUNITY_NEWS_CACHE_TAG], { revalidate: 900, tags: [COMMUNITY_NEWS_CACHE_TAG] });

export async function getFullFeed(): Promise<{
  snapshots: FeedEntry[];
  newsTracker: FeedEntry[];
}> {
  return getFullFeedCached();
}
