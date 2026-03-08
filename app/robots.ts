import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/wp-login.php"],
    },
    sitemap: "https://nlmsf.org/sitemap.xml",
  };
}
