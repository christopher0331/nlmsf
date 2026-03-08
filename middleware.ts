import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WP_SITEMAP_PATHS = new Set([
  "/sitemap_index.xml",
  "/post-sitemap.xml",
  "/page-sitemap.xml",
  "/give_forms-sitemap.xml",
  "/nlmsf_snapshot-sitemap.xml",
  "/nlmsf_news_tracker-sitemap.xml",
  "/category-sitemap.xml",
  "/author-sitemap.xml",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/wp-login.php" || pathname.startsWith("/wp-login.php")) {
    return new NextResponse(null, { status: 410 });
  }

  if (WP_SITEMAP_PATHS.has(pathname)) {
    return NextResponse.redirect(new URL("/sitemap.xml", request.url), 301);
  }

  if (pathname === "/CRI_Patients-Guide-25.pdf") {
    return NextResponse.redirect(
      "https://media.nlmsf.org/wp-content/uploads/2023/01/Leiomyosarcoma-NLF-Flyer-1.pdf",
      301,
    );
  }

  if (pathname.startsWith("/accountability-reports/") && pathname.endsWith("/summary.pdf")) {
    return NextResponse.redirect(
      new URL("/accountability-reports/", request.url),
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/wp-login.php",
    "/wp-login.php:path*",
    "/CRI_Patients-Guide-25.pdf",
    "/accountability-reports/:path*",
    "/sitemap_index.xml",
    "/post-sitemap.xml",
    "/page-sitemap.xml",
    "/give_forms-sitemap.xml",
    "/nlmsf_snapshot-sitemap.xml",
    "/nlmsf_news_tracker-sitemap.xml",
    "/category-sitemap.xml",
    "/author-sitemap.xml",
  ],
};
