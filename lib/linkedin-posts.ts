import postsFile from "@/data/linkedin-posts.json";

/**
 * Homepage "Latest from LinkedIn" posts.
 *
 * Edit only `data/linkedin-posts.json`. Append to the `posts` array; this
 * module sorts and renders the newest three. Schema (also in that file's
 * `_schema` field and in README):
 *
 * - id (required): stable unique slug, e.g. `2026-11-14-to-our-caregivers`.
 * - date (required): ISO `YYYY-MM-DD` or datetime. Newer first. Equal dates
 *   keep earlier array order.
 * - text (required): post copy.
 * - url (optional): "Read on LinkedIn" href. Omitted posts use the company page.
 * - image (optional): root-relative path or http(s) image URL.
 */
export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/national-leiomyosarcoma-foundation-nlmsf/";

export const LATEST_LINKEDIN_COUNT = 3;

export type LinkedInPost = {
  id: string;
  date: string;
  text: string;
  url?: string;
  image?: string;
};

const DATE_RE =
  /^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)?/;

/** Calendar-date millis in UTC so `YYYY-MM-DD` does not shift across timezones. */
export function linkedInPostTime(date: string): number {
  const match = DATE_RE.exec(date.trim());
  if (!match) return Number.NaN;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4] ?? 0);
  const minute = Number(match[5] ?? 0);
  const second = Number(match[6] ?? 0);
  if (month < 1 || month > 12 || day < 1 || day > 31) return Number.NaN;
  const utc = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  if (
    utc.getUTCFullYear() !== year ||
    utc.getUTCMonth() !== month - 1 ||
    utc.getUTCDate() !== day
  ) {
    return Number.NaN;
  }
  return utc.getTime();
}

export function formatLinkedInPostDate(date: string): string {
  const time = linkedInPostTime(date);
  if (Number.isNaN(time)) return date.trim();
  const match = DATE_RE.exec(date.trim());
  if (!match) return date.trim();
  const utc = new Date(
    Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])),
  );
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(utc);
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function optionalHttpOrPath(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return trimmed;
  if (isHttpUrl(trimmed)) return trimmed;
  return undefined;
}

function asPost(value: unknown): LinkedInPost | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  if (typeof record.id !== "string" || !record.id.trim()) return null;
  if (typeof record.date !== "string" || !record.date.trim()) return null;
  if (typeof record.text !== "string" || !record.text.trim()) return null;
  if (Number.isNaN(linkedInPostTime(record.date))) return null;
  const post: LinkedInPost = {
    id: record.id.trim(),
    date: record.date.trim(),
    text: record.text.trim(),
  };
  const url = optionalHttpOrPath(record.url);
  if (url && isHttpUrl(url)) post.url = url;
  const image = optionalHttpOrPath(record.image);
  if (image) post.image = image;
  return post;
}

function postsFromFile(file: unknown): LinkedInPost[] {
  const list = Array.isArray(file)
    ? file
    : file && typeof file === "object" && "posts" in file
      ? (file as { posts?: unknown }).posts
      : null;
  if (!Array.isArray(list)) return [];
  const seen = new Set<string>();
  const posts: LinkedInPost[] = [];
  for (const entry of list) {
    const post = asPost(entry);
    if (!post || seen.has(post.id)) continue;
    seen.add(post.id);
    posts.push(post);
  }
  return posts;
}

export function selectLatestLinkedInPosts(
  posts: readonly LinkedInPost[],
  count = LATEST_LINKEDIN_COUNT,
): LinkedInPost[] {
  return posts
    .map((post, index) => ({ post, index }))
    .sort((a, b) => {
      const byDate = linkedInPostTime(b.post.date) - linkedInPostTime(a.post.date);
      if (byDate !== 0) return byDate;
      return a.index - b.index;
    })
    .slice(0, Math.max(0, count))
    .map(({ post }) => post);
}

export function linkedInPostHref(post: LinkedInPost): string {
  return post.url && isHttpUrl(post.url) ? post.url : LINKEDIN_COMPANY_URL;
}

export function getLatestLinkedInPosts(
  count = LATEST_LINKEDIN_COUNT,
): LinkedInPost[] {
  return selectLatestLinkedInPosts(postsFromFile(postsFile), count);
}
