import { createHmac, timingSafeEqual } from "crypto";

/** Reject submissions that arrive sooner than this after the form was rendered. */
export const MIN_SUBMIT_MS = 3_000;

/** A signed token older than this asks the person to refresh instead of failing silently. */
export const MAX_TOKEN_AGE_MS = 14 * 24 * 60 * 60 * 1000;

const FUTURE_SKEW_MS = 60_000;

function getSecret(): string | null {
  return (
    process.env.BOT_FILTER_SECRET ||
    process.env.ADMIN_SECRET ||
    process.env.ADMIN_PASSWORD ||
    process.env.TURNSTILE_SECRET_KEY ||
    null
  );
}

function signingKey(): string {
  const secret = getSecret();
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Bot filter signing secret is not set (BOT_FILTER_SECRET, ADMIN_SECRET, ADMIN_PASSWORD, or TURNSTILE_SECRET_KEY)"
    );
  }
  return "nlmsf-bot-filter-dev";
}

/** Signed render timestamp: `<ms>.<hmac>`. Mint this on the server when the form is rendered. */
export function issueFormToken(now = Date.now()): string {
  const payload = String(now);
  const sig = createHmac("sha256", signingKey()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export type TokenCheck =
  | { ok: true; ageMs: number }
  | { ok: false; reason: "invalid" | "too_fast" | "expired" };

export function checkFormToken(token: unknown, now = Date.now()): TokenCheck {
  if (typeof token !== "string" || !token) return { ok: false, reason: "invalid" };
  const dot = token.indexOf(".");
  if (dot <= 0) return { ok: false, reason: "invalid" };
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^\d+$/.test(payload) || !/^[0-9a-f]+$/i.test(sig)) {
    return { ok: false, reason: "invalid" };
  }

  const expected = createHmac("sha256", signingKey()).update(payload).digest("hex");
  const sigBuf = Buffer.from(sig, "hex");
  const expectedBuf = Buffer.from(expected, "hex");
  if (sigBuf.length !== expectedBuf.length) return { ok: false, reason: "invalid" };
  if (!timingSafeEqual(sigBuf, expectedBuf)) return { ok: false, reason: "invalid" };

  const issuedAt = Number(payload);
  const ageMs = now - issuedAt;
  if (ageMs < -FUTURE_SKEW_MS) return { ok: false, reason: "invalid" };
  if (ageMs > MAX_TOKEN_AGE_MS) return { ok: false, reason: "expired" };
  if (ageMs < MIN_SUBMIT_MS) return { ok: false, reason: "too_fast" };
  return { ok: true, ageMs };
}

export function honeypotFilled(value: unknown): boolean {
  if (typeof value !== "string") return value != null && value !== false;
  return value.trim().length > 0;
}

function foldLetters(value: string): string {
  return value.normalize("NFD").replace(/\p{M}/gu, "");
}

function longestVowelGap(lower: string): number {
  let max = 0;
  let current = 0;
  for (const ch of lower) {
    if (/[aeiouy]/.test(ch)) {
      current = 0;
    } else if (/[a-z]/.test(ch)) {
      current += 1;
      if (current > max) max = current;
    }
  }
  return max;
}

/**
 * A single letter-token with no plausible vowel pattern.
 * Short parts, initials, apostrophes, and non-Latin scripts are never flagged.
 * Hyphenated tokens are flagged only when every part is flagged.
 */
function partIsRandomLetters(part: string): boolean {
  const folded = foldLetters(part);
  if (!/^[A-Za-z]+$/.test(folded)) return false;
  if (folded.length < 6) return false;

  const lower = folded.toLowerCase();
  const aeiou = lower.match(/[aeiou]/g)?.length ?? 0;
  const yCount = lower.match(/y/g)?.length ?? 0;
  const vowelish = aeiou + yCount;
  const gap = longestVowelGap(lower);

  // "Gnqhftrh" — no vowel at all, including y.
  if (vowelish === 0) return true;

  // "Iqtqcv" — one vowel-like letter and a 5-consonant streak.
  // Leaves Schmidt, Schwarz, Wright, and Krzysztof alone (their gaps are shorter, or y counts).
  if (vowelish <= 1 && gap >= 5) return true;

  // "Qxehpn" — q followed by a consonant. Does not match Qasim, Qiu, Qiang, or Tariq.
  if (aeiou <= 1 && /q(?![aeiouy])[a-z]/.test(lower)) return true;

  // "Pyuwhy" — repeated y, at most one a/e/i/o/u, y glued to that vowel, plus a consonant cluster.
  // Kyrylo and Mykyta keep their y's separated by consonants, so they stay allowed.
  if (
    aeiou <= 1 &&
    yCount >= 2 &&
    gap >= 2 &&
    /[aeiou]y|y[aeiou]/.test(lower)
  ) {
    return true;
  }

  return false;
}

function tokenIsRandomLetters(token: string): boolean {
  const folded = foldLetters(token);
  if (/['’]/.test(folded)) return false;
  const parts = folded.split(/[-‐‑‒–—]/).filter((part) => part.length > 0);
  if (parts.length === 0) return false;
  if (parts.length > 1) return parts.every(partIsRandomLetters);
  return partIsRandomLetters(folded);
}

/**
 * True only when every whitespace-separated token looks like random letters.
 * "Ann Iqtqcv" stays allowed: one real token is enough.
 */
export function isImplausibleRandomName(name: string): boolean {
  const tokens = name.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return false;
  return tokens.every(tokenIsRandomLetters);
}

export type BotDecision =
  | { action: "allow" }
  | { action: "drop"; reason: "honeypot" | "too_fast" | "invalid_token" | "name" }
  | { action: "expired" };

export function assessBotSignals(input: {
  honeypot?: unknown;
  formToken?: unknown;
  name?: unknown;
  now?: number;
}): BotDecision {
  if (honeypotFilled(input.honeypot)) return { action: "drop", reason: "honeypot" };

  const token = checkFormToken(input.formToken, input.now);
  if (!token.ok && token.reason === "expired") return { action: "expired" };
  if (!token.ok && token.reason === "too_fast") return { action: "drop", reason: "too_fast" };
  if (!token.ok) return { action: "drop", reason: "invalid_token" };

  const name = typeof input.name === "string" ? input.name : "";
  if (name && isImplausibleRandomName(name)) return { action: "drop", reason: "name" };

  return { action: "allow" };
}
