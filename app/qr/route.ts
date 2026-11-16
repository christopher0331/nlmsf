import { NextResponse, type NextRequest } from "next/server";
import { QR_SCAN_NOTIFY_EMAILS, sendQrScanEmail } from "@/lib/email";
import { clientIpFromHeaders } from "@/lib/rate-limit";

/**
 * Printed QR code target (https://nlmsf.org/qr).
 * Emails Annie and admin@reactivlabs.com that someone scanned it, then redirects to the homepage.
 * The redirect never fails because of the email: errors are swallowed and the
 * send is capped by a short timeout.
 */

export const dynamic = "force-dynamic";

const DESTINATION = "https://nlmsf.org/?utm_source=qr&utm_medium=print";
const PRODUCTION_HOSTS = new Set(["nlmsf.org", "www.nlmsf.org"]);
const SEND_TIMEOUT_MS = 1500;
const DEDUPE_WINDOW_MS = 2 * 60 * 1000;

const BOT_UA =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|embedly|whatsapp|telegram|slack|discord|skype|linkedin|pinterest|vkshare|quora|curl|wget|python|httpclient|okhttp|axios|node-fetch|go-http|java\/|headless|lighthouse|pagespeed|monitor|uptime|scanner|validator/i;

/** Per-instance dedupe so repeat hits from one connection don't spam the inbox. */
const recentScans = new Map<string, number>();

function redirect() {
  const res = NextResponse.redirect(DESTINATION, 302);
  res.headers.set("Cache-Control", "no-store, max-age=0");
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}

function isPrefetch(h: Headers) {
  const purpose = `${h.get("purpose") ?? ""} ${h.get("sec-purpose") ?? ""} ${h.get("x-purpose") ?? ""} ${h.get("x-moz") ?? ""}`;
  return /prefetch|prerender|preview/i.test(purpose) || h.has("next-router-prefetch");
}

function geoFromHeaders(h: Headers): string | null {
  const raw = h.get("x-nf-geo");
  if (raw) {
    try {
      const json = raw.trim().startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
      const g = JSON.parse(json) as {
        city?: string;
        subdivision?: { name?: string; code?: string };
        country?: { name?: string; code?: string };
      };
      const parts = [g.city, g.subdivision?.name || g.subdivision?.code, g.country?.name || g.country?.code].filter(Boolean);
      if (parts.length) return parts.join(", ");
    } catch {
      /* ignore malformed geo */
    }
  }
  const country = h.get("x-country");
  return country || null;
}

function describeDevice(ua: string): string {
  const os = /iPhone/i.test(ua)
    ? "iPhone"
    : /iPad/i.test(ua)
      ? "iPad"
      : /Android/i.test(ua)
        ? "Android"
        : /Macintosh|Mac OS X/i.test(ua)
          ? "Mac"
          : /Windows/i.test(ua)
            ? "Windows"
            : null;
  return os ? `${os} — ${ua}` : ua;
}

function shouldNotify(key: string, now: number) {
  for (const [k, t] of recentScans) {
    if (now - t > DEDUPE_WINDOW_MS) recentScans.delete(k);
  }
  const last = recentScans.get(key);
  if (last && now - last < DEDUPE_WINDOW_MS) return false;
  recentScans.set(key, now);
  return true;
}

export async function GET(request: NextRequest) {
  try {
    const h = request.headers;
    const ua = h.get("user-agent")?.trim() ?? "";
    const host = (h.get("x-forwarded-host") || h.get("host") || request.nextUrl.hostname).split(":")[0].toLowerCase();

    // Production emails Annie + admin@reactivlabs.com. Deploy previews / local only email if QR_SCAN_TEST_TO is set.
    const testTo = process.env.QR_SCAN_TEST_TO?.trim();
    const to = PRODUCTION_HOSTS.has(host) ? QR_SCAN_NOTIFY_EMAILS : testTo ? [testTo] : null;

    if (to && ua && !BOT_UA.test(ua) && !isPrefetch(h)) {
      const now = Date.now();
      const key = `${clientIpFromHeaders(h) ?? "unknown"}|${ua}`;
      if (shouldNotify(key, now)) {
        const scannedAt = `${new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Denver",
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date(now))} (Mountain Time)`;

        const send = sendQrScanEmail({
          to,
          scannedAt,
          location: geoFromHeaders(h),
          device: describeDevice(ua.slice(0, 300)),
        }).catch((err) => {
          console.error("[qr] scan notification failed", err);
        });
        await Promise.race([send, new Promise((resolve) => setTimeout(resolve, SEND_TIMEOUT_MS))]);
      }
    }
  } catch (err) {
    console.error("[qr] scan handler error", err);
  }
  return redirect();
}

export function HEAD() {
  return redirect();
}
