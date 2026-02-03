/**
 * Import WordPress Community News (snapshots + news_tracker) from qlr_posts.csv.
 * Optionally pass qlr_postmeta.csv to use nlmsf_external_url (Mailchimp/real links) instead of WordPress permalinks.
 *
 * Usage:
 *   node scripts/seed-community-news-from-wp-csv.js
 *   node scripts/seed-community-news-from-wp-csv.js /path/to/qlr_posts.csv
 *   node scripts/seed-community-news-from-wp-csv.js /path/to/qlr_posts.csv /path/to/qlr_postmeta.csv
 *
 * Default posts path: ~/Downloads/qlr_posts.csv
 * Only imports rows with post_type nlmsf_snapshot or nlmsf_news_tracker and post_status publish.
 * If postmeta CSV is provided, rows with meta_key nlmsf_external_url are used for the link URL (post_id -> meta_value).
 */
const path = require("path");
const fs = require("fs");
const { parse } = require("csv-parse/sync");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const projectRoot = process.cwd();
const dbPath = process.env.DATABASE_URL || "file:" + path.join(projectRoot, "prisma", "dev.db");
const defaultCsvPath = path.join(
  process.env.HOME || process.env.USERPROFILE || "",
  "Downloads",
  "qlr_posts.csv"
);
const defaultPostmetaPath = path.join(
  process.env.HOME || process.env.USERPROFILE || "",
  "Downloads",
  "qlr_postmeta.csv"
);

const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

const SUMMARY_MAX_LEN = 800;

function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&#\d+;/g, " ")
    .trim();
}

function toSummary(content, excerpt) {
  const raw = (excerpt && String(excerpt).trim()) || content || "";
  const text = stripHtml(raw);
  if (text.length <= SUMMARY_MAX_LEN) return text;
  return text.slice(0, SUMMARY_MAX_LEN - 3) + "...";
}

function toManualDate(postDate) {
  if (!postDate || typeof postDate !== "string") return "";
  const s = String(postDate).trim();
  return s.slice(0, 10);
}

function toUrl(guid) {
  if (!guid || typeof guid !== "string") return "";
  let u = String(guid).trim();
  if (u.startsWith("http://nlmsf.org")) u = "https://nlmsf.org" + u.slice(16);
  return u;
}

/** Build map post_id -> external URL from qlr_postmeta rows where meta_key = nlmsf_external_url */
function buildExternalUrlMap(postmetaRows) {
  const map = {};
  for (const row of postmetaRows) {
    const key = (row.meta_key || "").trim();
    if (key !== "nlmsf_external_url") continue;
    const postId = String(row.post_id ?? "").trim();
    const value = String(row.meta_value ?? "").trim();
    if (postId && value) map[postId] = value;
  }
  return map;
}

function parseCsv(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return parse(raw, {
    columns: true,
    relax_column_count: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  });
}

async function main() {
  const csvPath = process.argv[2] || defaultCsvPath;
  const postmetaPath = process.argv[3] || null;

  if (!fs.existsSync(csvPath)) {
    console.error("CSV not found:", csvPath);
    console.error("Usage: node scripts/seed-community-news-from-wp-csv.js [qlr_posts.csv] [qlr_postmeta.csv]");
    process.exit(1);
  }

  let externalUrlByPostId = {};
  if (postmetaPath && fs.existsSync(postmetaPath)) {
    console.log("Parsing postmeta", postmetaPath, "...");
    const postmetaRows = parseCsv(postmetaPath);
    externalUrlByPostId = buildExternalUrlMap(postmetaRows);
    console.log("Found", Object.keys(externalUrlByPostId).length, "nlmsf_external_url entries — will use these for links when present.");
  } else if (postmetaPath) {
    console.warn("Postmeta file not found:", postmetaPath, "— using WordPress permalinks (guid) for URLs.");
  }

  console.log("Parsing", csvPath, "...");
  const rows = parseCsv(csvPath);

  const community = rows.filter(
    (r) =>
      (r.post_type === "nlmsf_snapshot" || r.post_type === "nlmsf_news_tracker") &&
      String(r.post_status).toLowerCase() === "publish"
  );

  console.log("Found", community.length, "published community entries (snapshots + news_tracker).");

  console.log("Clearing existing CommunityEntry rows...");
  await prisma.communityEntry.deleteMany({});

  const typeMap = {
    nlmsf_snapshot: "snapshot",
    nlmsf_news_tracker: "news_tracker",
  };

  let created = 0;
  for (const row of community) {
    const type = typeMap[row.post_type];
    if (!type) continue;

    const title = String(row.post_title ?? "").trim();
    if (!title) continue;

    const manualDate = toManualDate(row.post_date);
    if (!manualDate) continue;

    const postId = String(row.ID ?? "").trim();
    const externalUrl = externalUrlByPostId[postId];
    const url = (externalUrl && externalUrl.startsWith("http") ? externalUrl.trim() : null) || toUrl(row.guid);
    if (!url) continue;

    const summary = toSummary(row.post_content, row.post_excerpt) || title;

    await prisma.communityEntry.create({
      data: {
        type,
        title,
        summary,
        url,
        manualDate,
        featured: false,
      },
    });
    created++;
  }

  console.log("Created", created, "community entries. Community snapshot news and news tracker pages will now show this data.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
