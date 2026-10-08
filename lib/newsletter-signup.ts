import { assessBotSignals } from "@/lib/bot-filter";
import { HONEYPOT_FIELD } from "@/lib/form-guard";
import {
  consumeRateLimit,
  NEWSLETTER_RATE_LIMIT,
  NEWSLETTER_RATE_WINDOW_MS,
  newsletterRateStore,
} from "@/lib/rate-limit";
import { checkSignupEmail } from "@/lib/signup-email";

export type NewsletterSignupInput = {
  email: string;
  name?: string;
  source?: string;
  page?: string;
};

export type NewsletterPostResult = {
  status: number;
  body: { ok?: true; error?: string };
  subscribed: boolean;
  dropReason?: string;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function signupName(raw: Record<string, unknown>): string {
  const direct = asString(raw.name) || asString(raw.NAME);
  if (direct) return direct;
  const first = asString(raw.FNAME) || asString(raw.fname) || asString(raw.MERGE1);
  const last = asString(raw.LNAME) || asString(raw.lname) || asString(raw.MERGE2);
  return [first, last].filter(Boolean).join(" ");
}

export function signupEmail(raw: Record<string, unknown>): string {
  return asString(raw.email) || asString(raw.EMAIL) || asString(raw.MERGE0);
}

export function safeReturnPath(value: unknown): string {
  if (typeof value !== "string") return "/";
  const path = value.trim();
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\") || path.includes("://")) {
    return "/";
  }
  return path.slice(0, 200);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderNewsletterResultPage(opts: {
  ok: boolean;
  message: string;
  backPath: string;
}): string {
  const title = opts.ok ? "Subscribed" : "Newsletter signup";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | NLMSF</title>
</head>
<body style="font-family: Georgia, sans-serif; background:#f8fafc; color:#1e293b; margin:0;">
<main style="max-width:32rem; margin:4rem auto; padding:2rem; background:#fff; border-radius:12px; box-shadow:0 8px 24px rgba(15,23,42,.08);">
<h1 style="font-size:1.5rem; margin:0 0 1rem;">${opts.ok ? "Success!" : "Please try again"}</h1>
<p style="line-height:1.5; margin:0 0 1.5rem;">${escapeHtml(opts.message)}</p>
<p style="margin:0;"><a href="${escapeHtml(opts.backPath)}">Back</a></p>
</main>
</body>
</html>`;
}

export const NEWSLETTER_SUCCESS_MESSAGE =
  "Thank you for subscribing to our newsletter. You'll receive updates soon!";

export async function handleNewsletterSignup(
  raw: Record<string, unknown>,
  options: {
    now?: number;
    ip?: string | null;
    subscribe: (input: NewsletterSignupInput) => Promise<{ ok: boolean; already?: boolean }>;
    notify?: (input: NewsletterSignupInput) => Promise<void>;
    rateLimit?: {
      limit: number;
      windowMs: number;
      store: Map<string, number[]>;
    };
  }
): Promise<NewsletterPostResult> {
  const emailRaw = signupEmail(raw);
  const name = signupName(raw);
  const source = asString(raw.source) || asString(raw.SOURCE);
  const page = asString(raw.page);

  const decision = assessBotSignals({
    honeypot: raw[HONEYPOT_FIELD],
    formToken: raw.formToken,
    name,
    now: options.now,
  });

  if (decision.action === "drop") {
    console.info(`[newsletter] dropped signup (${decision.reason})`);
    return { status: 200, body: { ok: true }, subscribed: false, dropReason: decision.reason };
  }

  if (decision.action === "expired") {
    return {
      status: 400,
      body: { error: "This page has been open a while. Please refresh and subscribe again." },
      subscribed: false,
      dropReason: "expired",
    };
  }

  if (asString(raw.requireName) === "1" && !name) {
    return { status: 400, body: { error: "Name is required" }, subscribed: false };
  }

  if (!emailRaw) {
    return { status: 400, body: { error: "Email is required" }, subscribed: false };
  }

  const emailCheck = checkSignupEmail(emailRaw);
  if (!emailCheck.ok) {
    const error =
      emailCheck.reason === "disposable"
        ? "Please use a personal email address. Temporary inboxes cannot subscribe."
        : "Please enter a valid email address.";
    return { status: 400, body: { error }, subscribed: false, dropReason: emailCheck.reason };
  }

  const now = options.now ?? Date.now();
  const rate = options.rateLimit ?? {
    limit: NEWSLETTER_RATE_LIMIT,
    windowMs: NEWSLETTER_RATE_WINDOW_MS,
    store: newsletterRateStore,
  };
  const slot =
    options.ip
      ? consumeRateLimit(rate.store, options.ip, now, rate.limit, rate.windowMs)
      : { ok: true as const, undo() {} };

  if (!slot.ok) {
    return {
      status: 429,
      body: { error: "Too many signup attempts from this network. Please wait a bit and try again." },
      subscribed: false,
      dropReason: "rate_limit",
    };
  }

  const input: NewsletterSignupInput = {
    email: emailCheck.email,
    name: name || undefined,
    source: source || undefined,
    page: page || undefined,
  };

  let subscribed: { ok: boolean; already?: boolean };
  try {
    subscribed = await options.subscribe(input);
  } catch (err) {
    slot.undo();
    console.error("[newsletter] list subscribe failed", err);
    return {
      status: 502,
      body: { error: "We could not complete the signup. Please try again in a moment." },
      subscribed: false,
      dropReason: "list_error",
    };
  }

  if (!subscribed.ok) {
    slot.undo();
    return {
      status: 502,
      body: { error: "We could not complete the signup. Please try again in a moment." },
      subscribed: false,
      dropReason: "list_rejected",
    };
  }

  if (options.notify) {
    try {
      await options.notify(input);
    } catch (err) {
      console.error("[newsletter] attribution email failed", err);
    }
  }

  return { status: 200, body: { ok: true }, subscribed: true };
}
