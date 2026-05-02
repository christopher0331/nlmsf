import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/adapter-libsql", "@prisma/adapter-better-sqlite3"],
  trailingSlash: true,
  async redirects() {
    return [
      // Specific tribute overrides (must be before generic pattern)
      { source: "/pennee-morris-tribute-fund", destination: "/tributes-directory", permanent: true },
      { source: "/snyderstrong-tribute-fund", destination: "/tributes-directory", permanent: true },
      { source: "/cynthia-diane-katafiasz-2", destination: "/tributes-directory", permanent: true },

      // Generic: tribute fund → tribute page
      {
        source: "/:slug-tribute-fund",
        destination: "/:slug-tribute-page",
        permanent: true,
      },

      // ============================================================
      // Phase 1: Old WordPress alias → current page (301)
      // ============================================================
      { source: "/about", destination: "/mission", permanent: true },
      { source: "/about-us", destination: "/mission", permanent: true },
      { source: "/advocacy", destination: "/patient-caregiver-advocacy", permanent: true },
      { source: "/annual-reports", destination: "/accountability-reports", permanent: true },
      { source: "/board-members", destination: "/our-board", permanent: true },
      { source: "/buddy-program", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/care-planning", destination: "/survivorship-care-planning-2", permanent: true },
      { source: "/caregiver-buddy-program", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/caregiver-workshops", destination: "/caregivers-corner", permanent: true },
      { source: "/caregivers-corner-staged-2", destination: "/caregivers-corner", permanent: true },
      { source: "/caregiving-counts", destination: "/caregiver-traits-2", permanent: true },
      { source: "/circle-of-hope", destination: "/donate", permanent: true },
      { source: "/clinical-trials", destination: "/clinical-trials-research-information", permanent: true },
      { source: "/clinical-trials-perspective", destination: "/clinical-trials-research-information", permanent: true },
      { source: "/closer-look-at-leiomoysarcoma", destination: "/closer-look-at-leiomyosarcoma", permanent: true },
      { source: "/co-survivors-tips", destination: "/co-survivor-tips", permanent: true },
      { source: "/community-events", destination: "/events", permanent: true },
      { source: "/connect-with-clinician", destination: "/find-a-sarcoma-specialist", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/denver-resources", destination: "/resources", permanent: true },
      { source: "/denver-support", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/donate-leiomyosarcoma-research", destination: "/donate", permanent: true },
      { source: "/donate-online", destination: "/donate", permanent: true },
      { source: "/donate-staged", destination: "/donate", permanent: true },
      { source: "/education-forums", destination: "/events", permanent: true },
      { source: "/educational-programs", destination: "/events", permanent: true },
      { source: "/event-registration-form", destination: "/events", permanent: true },
      { source: "/events-admin", destination: "/admin/events", permanent: true },
      { source: "/financial-statements", destination: "/accountability-reports", permanent: true },
      { source: "/funded-projects", destination: "/research-funding-2", permanent: true },
      { source: "/gift-shop-old", destination: "/gift-shop", permanent: true },
      { source: "/history", destination: "/mission", permanent: true },
      { source: "/light-a-candle", destination: "/in-memoriam", permanent: true },
      { source: "/lms-abcs", destination: "/abcs-of-new-diagnosis", permanent: true },
      { source: "/lms-interactive-news-tracker", destination: "/news-tracker", permanent: true },
      { source: "/lms-live", destination: "/events", permanent: true },
      { source: "/lms-research", destination: "/research-initiatives", permanent: true },
      { source: "/lms-roundtable", destination: "/international-research-roundtable", permanent: true },
      { source: "/lms-surgical-guide", destination: "/treatment-options", permanent: true },
      { source: "/medical-advisors", destination: "/medical-advisory-board", permanent: true },
      { source: "/molecular-tumor-testing-staged", destination: "/molecular-tumor-testing", permanent: true },
      { source: "/more-testimonials", destination: "/testimonials", permanent: true },
      { source: "/navigating-leiomyosarcoma-treatment-after-treatment", destination: "/after-treatment", permanent: true },
      { source: "/navigating-support-staged-2", destination: "/navigating-support", permanent: true },
      { source: "/new-diagnosis-2-staged", destination: "/new-diagnosis", permanent: true },
      { source: "/newly-diagnosed", destination: "/new-diagnosis", permanent: true },
      { source: "/newly-diagnosed-and-treatment-staged2", destination: "/newly-diagnosed-and-treatment", permanent: true },
      { source: "/newsletter", destination: "/news-tracker", permanent: true },
      { source: "/newsletter-archives", destination: "/news-tracker", permanent: true },
      { source: "/newsletter-signup", destination: "/contact", permanent: true },
      { source: "/pathology-report", destination: "/pathology-report-accuracy", permanent: true },
      { source: "/patient-advocacy-peer-group-roundtable", destination: "/patient-caregiver-advocacy", permanent: true },
      { source: "/patient-education", destination: "/events", permanent: true },
      { source: "/patient-perspectives-staged", destination: "/patient-perspectives", permanent: true },
      { source: "/patient-stories", destination: "/patient-perspectives", permanent: true },
      { source: "/patients", destination: "/", permanent: true },
      { source: "/podcast", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/podcast-2", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/podcasts-wellbeing", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/research", destination: "/research-initiatives", permanent: true },
      { source: "/research-breakthroughs", destination: "/research-initiatives", permanent: true },
      { source: "/research-funding", destination: "/research-funding-2", permanent: true },
      { source: "/research-initiaves", destination: "/research-initiatives", permanent: true },
      { source: "/research-projects", destination: "/research-funding-2", permanent: true },
      { source: "/research-recordings", destination: "/events", permanent: true },
      { source: "/research-roundtable", destination: "/international-research-roundtable", permanent: true },
      { source: "/resources-staged", destination: "/resources", permanent: true },
      { source: "/sound-bytes-hub", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/subscribe", destination: "/contact", permanent: true },
      { source: "/support-groups", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/survivorship", destination: "/survivorship-care-planning-2", permanent: true },
      { source: "/survivorship-2", destination: "/survivorship-care-planning-2", permanent: true },
      { source: "/survivorship-care", destination: "/survivorship-care-planning-2", permanent: true },
      { source: "/survivorship-resources", destination: "/survivorship-resources-2", permanent: true },
      { source: "/symposia", destination: "/events", permanent: true },
      { source: "/terms", destination: "/privacy-policy", permanent: true },
      { source: "/transparency", destination: "/accountability-reports", permanent: true },
      { source: "/tribute-admin", destination: "/admin/tributes", permanent: true },
      { source: "/what-is-lms", destination: "/what-is-leiomyosarcoma", permanent: true },
      { source: "/what-is-lms-staged", destination: "/what-is-leiomyosarcoma", permanent: true },
      { source: "/who-we-are", destination: "/mission", permanent: true },
      { source: "/workshops", destination: "/events", permanent: true },
      { source: "/your-voice-matters", destination: "/patient-perspectives", permanent: true },
      { source: "/your-voice-matters-2", destination: "/patient-perspectives", permanent: true },
      { source: "/live-the-life-you-deserve", destination: "/patient-perspectives", permanent: true },
      { source: "/repurposing", destination: "/", permanent: true },
      { source: "/rocky-mountain", destination: "/", permanent: true },
      { source: "/sarcoma-coalition", destination: "/", permanent: true },
      { source: "/testing-form", destination: "/", permanent: true },
      { source: "/LINK_PLACEHOLDER", destination: "/", permanent: true },

      // Remaining missing pages from updated audit
      { source: "/anna-marmo-memorial-fund", destination: "/anna-marmo-tribute-page", permanent: true },
      { source: "/cynthia-diane-katafiasz", destination: "/tributes-directory", permanent: true },
      { source: "/herbert-lee-perry-jr", destination: "/herbert-lee-perry-tribute-page", permanent: true },
      { source: "/irene-abrahamian-2", destination: "/irene-abrahamian-tribute-page", permanent: true },
      { source: "/julie-neuhaus-tribute-page-3", destination: "/julie-neuhaus-tribute-page", permanent: true },
      { source: "/june-25th-sound-byte", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/june-9th-sound-byte", destination: "/sarcoma-sound-bytes", permanent: true },
      { source: "/laura-ann-trimble", destination: "/laura-anne-trimble-tribute-page", permanent: true },
      { source: "/michele-k-winslow", destination: "/michele-winslow-tribute-page", permanent: true },
      { source: "/norma-jarrett", destination: "/norma-jarret-tribute-page", permanent: true },
      { source: "/penne-m-morris", destination: "/pennee-m-morris-tribute-page", permanent: true },
      { source: "/first-last-tribute-page", destination: "/tributes-directory", permanent: true },
      { source: "/chris-hancock-tribute-page", destination: "/tributes-directory", permanent: true },
      { source: "/author/admin/page/2", destination: "/", permanent: true },

      // ============================================================
      // Phase 2: Nested path redirects
      // ============================================================
      { source: "/newly-diagnosed/abcs", destination: "/abcs-of-new-diagnosis", permanent: true },
      { source: "/newly-diagnosed/care-team", destination: "/oncology-care-team", permanent: true },
      { source: "/newly-diagnosed/find-a-specialist", destination: "/find-a-sarcoma-specialist", permanent: true },
      { source: "/newly-diagnosed/find-specialist", destination: "/find-a-sarcoma-specialist", permanent: true },
      { source: "/newly-diagnosed/managing-lms", destination: "/what-is-leiomyosarcoma", permanent: true },
      { source: "/newly-diagnosed/patient-perspectives", destination: "/patient-perspectives", permanent: true },
      { source: "/newly-diagnosed/treatment-options", destination: "/treatment-options", permanent: true },
      { source: "/patient/patient-perspectives", destination: "/patient-perspectives", permanent: true },
      { source: "/resources/clinical-trials", destination: "/clinical-trials-research-information", permanent: true },
      { source: "/resources/community-support", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/resources/events", destination: "/events", permanent: true },
      { source: "/resources/patient-resources", destination: "/resources", permanent: true },
      { source: "/support/groups", destination: "/leiomyosarcoma-support-group", permanent: true },
      { source: "/support/resources", destination: "/resources", permanent: true },
      { source: "/contact/newsletter", destination: "/contact", permanent: true },
      { source: "/donations/donation-form", destination: "/donate", permanent: true },
      { source: "/donations/donations-tribute-funds", destination: "/tributes-directory", permanent: true },
      { source: "/events/summit-registration", destination: "/events", permanent: true },
      { source: "/get-involved/donate", destination: "/donate", permanent: true },
      { source: "/get-involved/fundraise", destination: "/donate", permanent: true },
      { source: "/get-involved/volunteer", destination: "/volunteer", permanent: true },
      { source: "/what-is-lms/faq", destination: "/what-is-leiomyosarcoma", permanent: true },
      { source: "/accountability-reports/2023", destination: "/2023-accountability-report", permanent: true },
      { source: "/accountability-reports/2024", destination: "/accountability-reports", permanent: true },

      // ============================================================
      // Phase 3: Sound bytes date routes → single page
      // ============================================================
      { source: "/sound-bytes/:date", destination: "/sarcoma-sound-bytes", permanent: true },

      // ============================================================
      // Phase 4: /uncategorized/* blog posts
      // ============================================================
      { source: "/uncategorized/:slug", destination: "/patient-perspectives", permanent: true },

      // ============================================================
      // Phase 6: WordPress admin/author/category junk
      // ============================================================
      { source: "/author/:slug", destination: "/", permanent: true },
      { source: "/category/uncategorized", destination: "/", permanent: true },
      { source: "/category/uncategorized/page/:num", destination: "/", permanent: true },
      { source: "/page/:num", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      // ============================================================
      // Phase 5: /wp-content/uploads/* → media.nlmsf.org
      // ============================================================
      {
        source: "/wp-content/uploads/:path*",
        destination: "https://media.nlmsf.org/wp-content/uploads/:path*",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlmsf.org",
      },
      {
        protocol: "http",
        hostname: "nlmsf.org",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "media.nlmsf.org",
      },
      {
        protocol: "http",
        hostname: "media.nlmsf.org",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "ars.els-cdn.com",
      },
      {
        protocol: "https",
        hostname: "leiomyosarcoma.info",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "www.cancer.net",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "old.nlmsf.org",
      },
      {
        protocol: "https",
        hostname: "staging5.nlmsf.org",
      },
    ],
  },
  webpack: (config) => {
    // Ignore markdown and LICENSE files to prevent webpack from trying to parse them
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\.md$/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /LICENSE$/,
      })
    );
    return config;
  },
};

export default nextConfig;
