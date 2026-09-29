/** In-process sliding window. Each server instance keeps its own counts. */

export const NEWSLETTER_RATE_LIMIT = 20;
export const NEWSLETTER_RATE_WINDOW_MS = 60 * 60 * 1000;

const MAX_KEYS = 5_000;

export function consumeRateLimit(
  store: Map<string, number[]>,
  key: string,
  now: number,
  limit: number,
  windowMs: number
): { ok: boolean; undo: () => void } {
  const hits = (store.get(key) ?? []).filter((stamp) => now - stamp < windowMs);
  if (hits.length >= limit) {
    store.set(key, hits);
    return { ok: false, undo() {} };
  }

  hits.push(now);
  store.set(key, hits);
  if (store.size > MAX_KEYS) {
    const oldest = store.keys().next().value;
    if (oldest && oldest !== key) store.delete(oldest);
  }

  return {
    ok: true,
    undo() {
      const current = store.get(key);
      if (!current) return;
      const idx = current.lastIndexOf(now);
      if (idx >= 0) current.splice(idx, 1);
    },
  };
}

export const newsletterRateStore = new Map<string, number[]>();

/** Prefer the platform client IP. The first X-Forwarded-For hop can be spoofed. */
export function clientIpFromHeaders(headers: Headers): string | null {
  const netlify = headers.get("x-nf-client-connection-ip")?.trim();
  if (netlify) return netlify;
  const real = headers.get("x-real-ip")?.trim();
  if (real) return real;
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return null;
}
