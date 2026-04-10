import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://nlmsf.org";

function discoverAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];

  function walk(dir: string, urlPath: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    const hasPage = entries.some(
      (e) => e.isFile() && /^page\.(tsx?|jsx?)$/.test(e.name),
    );
    if (hasPage) {
      routes.push(urlPath === "" ? "/" : urlPath);
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      // Skip API routes, private folders, and dynamic segments
      if (name === "api" || name.startsWith("_") || name.startsWith("[")) continue;
      // Route groups like (marketing) — transparent in URL, recurse without adding to path
      if (name.startsWith("(")) {
        walk(path.join(dir, name), urlPath);
      } else {
        walk(path.join(dir, name), `${urlPath}/${name}`);
      }
    }
  }

  walk(appDir, "");
  return [...new Set(routes)].sort();
}

const tributePages: string[] = [
  "/andria-barnes-ruth-tribute-page",
  "/andria-barnes-ruth",
  "/anna-marmo-tribute-page",
  "/anna-marmo",
  "/barbara-esther-olson-tribute-page",
  "/barbara-esther-olson",
  "/barbara-lynn-davis-tribute-page",
  "/barbara-lynn-davis",
  "/caitlin-anne-kuhlman-tribute-page",
  "/caitlin-anne-kuhlman",
  "/cheryl-phyllis-scharp-tribute-page",
  "/cheryl-phyllis-scharp",
  "/christian-snyder-tribute-page",
  "/denise-f-montano-tribute-fund",
  "/denise-f-montano-tribute-page",
  "/denise-janowiak-tribute-page",
  "/denise-janowiak",
  "/donald-robert-anderson-tribute-page",
  "/donald-robert-anderson",
  "/donna-stieger-tribute-page",
  "/donna-stieger",
  "/florence-benoit-tribute-page",
  "/florence-benoit",
  "/gerri-rubino-tribute-page",
  "/gerri-rubino",
  "/gladys-ann-maxim-baker-tribute-page",
  "/gladys-ann-maxim-baker",
  "/gwendolyn-kay-mcdaniel-tribute-fund",
  "/gwendolyn-kay-mcdaniel-tribute-page",
  "/herbert-lee-perry-tribute-page",
  "/irene-abrahamian-tribute-page",
  "/james-alan-grimm-jr-tribute-page",
  "/james-alan-grimm-jr",
  "/julie-marie-florentino-tribute-fund",
  "/julie-marie-florentino",
  "/julie-neuhaus-tribute-fund",
  "/julie-neuhaus-tribute-page",
  "/kathleen-curl-tribute-fund",
  "/kathleen-curl-tribute-page",
  "/kelley-jude-hoellrich-tribute-page",
  "/kelley-jude-hoellrich",
  "/kimberly-marie-simpson-matthews-tribute-page",
  "/kimberly-marie-simpson-matthews",
  "/laura-anne-trimble-tribute-page",
  "/laura-anne-trimble",
  "/laura-lavezzo-carrico-tribute-page",
  "/laura-lavezzo-carrico",
  "/laurel-ann-ing-minagawa-tribute-page",
  "/laurel-ann-ing-minagawa",
  "/neal-jacobs-tribute-page",
  "/neal-jacobs",
  "/norma-jarret-tribute-page",
  "/norma-jarret",
  "/paul-hoying-tribute-page",
  "/paul-hoying",
  "/pennee-m-morris-tribute-page",
  "/pennee-m-morris",
  "/randi-mitchell-tribute-page",
  "/randi-mitchell",
  "/ruth-canter-cohen-tribute-fund",
  "/ruth-canter-cohen-tribute-page",
  "/shawn-borini-tribute-page",
  "/shawn-borini",
  "/ted-cimafranca-tribute-page",
  "/ted-cimafranca",
  "/terri-obos-danahey-tribute-fund",
  "/terri-obos-danahey-tribute-page",
  "/tim-hile-tribute-page",
  "/tim-hile",
  "/victoria-marrin-tribute-page",
  "/victoria-marrin",
];

const newsTrackerEntries: string[] = [
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-2",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-3",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-4",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-5",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-6",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-7",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-8",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-9",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-10",
  "?nlmsf_news_tracker=lms-sarcoma-news-tracker-11",
  "?nlmsf_news_tracker=nlmsf-news-tracker",
  "?nlmsf_news_tracker=nlmsf-news-tracker-2",
  "?nlmsf_news_tracker=nlmsf-news-tracker-3",
  "?nlmsf_news_tracker=nlmsf-news-tracker-4",
  "?nlmsf_news_tracker=nlmsf-news-tracker-5",
  "?nlmsf_news_tracker=nlmsf-news-tracker-6",
  "?nlmsf_news_tracker=nlmsf-news-tracker-7",
  "?nlmsf_news_tracker=nlmsf-news-tracker-8",
  "?nlmsf_news_tracker=nlmsf-news-tracker-9",
  "?nlmsf_news_tracker=nlmsf-news-tracker-10",
  "?nlmsf_news_tracker=nlmsf-news-tracker-11",
  "?nlmsf_news_tracker=nlmsf-news-tracker-12",
  "?nlmsf_news_tracker=nlmsf-news-tracker-13",
  "?nlmsf_news_tracker=nlmsf-news-tracker-14",
  "?nlmsf_news_tracker=nlmsf-news-tracker-15",
  "?nlmsf_news_tracker=nlmsf-news-tracker-16",
  "?nlmsf_news_tracker=nlmsf-news-tracker-17",
  "?nlmsf_news_tracker=nlmsf-news-tracker-18",
  "?nlmsf_news_tracker=nlmsf-news-tracker-19",
  "?nlmsf_news_tracker=nlmsf-news-tracker-20",
  "?nlmsf_news_tracker=nlmsf-news-tracker-21",
  "?nlmsf_news_tracker=nlmsf-news-tracker-22",
  "?nlmsf_news_tracker=nlmsf-news-tracker-23",
  "?nlmsf_news_tracker=nlmsf-news-tracker-24",
  "?nlmsf_news_tracker=nlmsf-news-tracker-25",
  "?nlmsf_news_tracker=nlmsf-sarcoma-community-connection",
];

const snapshotEntries: string[] = [
  "?nlmsf_snapshot=nlmsf-lms-sarcoma-snapshot-news",
  "?nlmsf_snapshot=nlmsf-lms-sarcoma-snapshot-news-december-13-2025",
  "?nlmsf_snapshot=nlmsf-sarcoma-snapshot-news",
  "?nlmsf_snapshot=nlmsf-updates-patient-support-highlights",
  "?nlmsf_snapshot=patient-resources-community-support",
  "?nlmsf_snapshot=sarcoma-coalition-community-events-research-updates",
  "?nlmsf_snapshot=special-edition-in-memory-of-dr-brian-van-tine",
];

const blogPosts: string[] = [
  "/uncategorized/can-psychotherapy-help-people-live-longer",
  "/uncategorized/does-positive-attitude-affect-cancer",
  "/uncategorized/emotional-well-being",
  "/uncategorized/in-appreciation-of-a-caregiver",
  "/uncategorized/increase-your-productivity-as-a-working-parent",
  "/uncategorized/living-with-cancer-whats-important-now",
  "/uncategorized/mental-health-treatment-and-emotional-support",
  "/uncategorized/personality-traits-and-cancer",
  "/uncategorized/the-secret-method-to-creating-the-perfect-amount-of-simple",
  "/uncategorized/understanding-the-benefits-of-good-nutrition",
  "/uncategorized/unplug-and-connect-with-your-soul",
  "/uncategorized/why-space-and-tranquillity-matter-in-your-minimal-lifestyle",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = discoverAppRoutes();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const withSlash = route === "/" ? "/" : `${route}/`;
    return {
      url: `${BASE_URL}${withSlash}`,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1.0 : 0.7,
    };
  });

  const tributes: MetadataRoute.Sitemap = tributePages.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const trackers: MetadataRoute.Sitemap = newsTrackerEntries.map((qs) => ({
    url: `${BASE_URL}/${qs}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const snapshots: MetadataRoute.Sitemap = snapshotEntries.map((qs) => ({
    url: `${BASE_URL}/${qs}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...pages, ...tributes, ...trackers, ...snapshots, ...posts];
}
