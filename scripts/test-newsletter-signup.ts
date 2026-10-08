/**
 * Newsletter signup guard.
 * Real names and ordinary emails must be accepted.
 * Bot-style names, bad emails, honeypots, and instant posts must not be subscribed.
 */
process.env.BOT_FILTER_SECRET = "test-newsletter-secret";

import assert from "node:assert/strict";
import { HONEYPOT_FIELD } from "../lib/form-guard";
import {
  issueFormToken,
  isImplausibleRandomName,
  MAX_TOKEN_AGE_MS,
  MIN_SUBMIT_MS,
} from "../lib/bot-filter";
import { interpretMailchimpPayload } from "../lib/mailchimp-subscribe";
import { handleNewsletterSignup, safeReturnPath, type NewsletterSignupInput } from "../lib/newsletter-signup";
import { checkSignupEmail } from "../lib/signup-email";

const NOW = 1_700_000_000_000;

function tokenAge(ageMs: number): string {
  return issueFormToken(NOW - ageMs);
}

function humanBody(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    email: "ann.li@example.com",
    name: "Ann Li",
    source: "Friend or family",
    page: "/",
    formToken: tokenAge(10_000),
    [HONEYPOT_FIELD]: "",
    ...overrides,
  };
}

async function run(
  body: Record<string, unknown>,
  extra: {
    ip?: string | null;
    limit?: number;
    store?: Map<string, number[]>;
    subscribe?: (input: NewsletterSignupInput) => Promise<{ ok: boolean; already?: boolean }>;
    notify?: (input: NewsletterSignupInput) => Promise<void>;
    now?: number;
  } = {}
) {
  const store = extra.store ?? new Map<string, number[]>();
  const subscribed: NewsletterSignupInput[] = [];
  const notified: NewsletterSignupInput[] = [];
  const result = await handleNewsletterSignup(body, {
    now: extra.now ?? NOW,
    ip: extra.ip === undefined ? "203.0.113.10" : extra.ip,
    rateLimit: { limit: extra.limit ?? 20, windowMs: 60 * 60 * 1000, store },
    subscribe: extra.subscribe ?? (async (input) => {
      subscribed.push(input);
      return { ok: true };
    }),
    notify: extra.notify ?? (async (input) => {
      notified.push(input);
    }),
  });
  return { result, subscribed, notified, store };
}

async function main() {
  console.log("— emails —");
  const emails: Array<{ value: string; ok: boolean; reason?: "malformed" | "disposable" }> = [
    { value: "ann.li@example.com", ok: true },
    { value: "  Ann.Li+news@example.com  ", ok: true },
    { value: "mary-kate.oneil+nlmsf@example.co.uk", ok: true },
    { value: "José@example.com", ok: true },
    { value: "user@sub.example.org", ok: true },
    { value: "person@privaterelay.appleid.com", ok: true },
    { value: "reader@duck.com", ok: true },
    { value: "not-an-email", ok: false, reason: "malformed" },
    { value: "a@b", ok: false, reason: "malformed" },
    { value: "a@b.c", ok: false, reason: "malformed" },
    { value: "user name@example.com", ok: false, reason: "malformed" },
    { value: "user@@example.com", ok: false, reason: "malformed" },
    { value: "user@.example.com", ok: false, reason: "malformed" },
    { value: "user@example..com", ok: false, reason: "malformed" },
    { value: "@example.com", ok: false, reason: "malformed" },
    { value: "bot@mailinator.com", ok: false, reason: "disposable" },
    { value: "Bot@YOPMAIL.COM", ok: false, reason: "disposable" },
    { value: "bot@sub.mailinator.com", ok: false, reason: "disposable" },
    { value: "x@guerrillamail.info", ok: false, reason: "disposable" },
    { value: "x@10minutemail.com", ok: false, reason: "disposable" },
  ];
  for (const row of emails) {
    const actual = checkSignupEmail(row.value);
    console.log(`  ${actual.ok === row.ok ? "ok" : "FAIL"}  ${JSON.stringify(row.value)}`);
    assert.equal(actual.ok, row.ok, row.value);
    if (!row.ok) {
      assert.equal(actual.ok, false);
      if (!actual.ok) assert.equal(actual.reason, row.reason, row.value);
    }
  }

  console.log("\n— names —");
  const names: Array<{ name: string; drop: boolean }> = [
    { name: "Ann Li", drop: false },
    { name: "Jo", drop: false },
    { name: "Ng", drop: false },
    { name: "Bo", drop: false },
    { name: "José García", drop: false },
    { name: "François Müller", drop: false },
    { name: "Søren", drop: false },
    { name: "Mary-Kate O'Neil", drop: false },
    { name: "Mary-Kate O’Neil", drop: false },
    { name: "Anne-Marie", drop: false },
    { name: "Jean-Luc Picard", drop: false },
    { name: "O'Brien", drop: false },
    { name: "Łukasz Wiśniewski", drop: false },
    { name: "Nguyễn", drop: false },
    { name: "李明", drop: false },
    { name: "李", drop: false },
    { name: "Krzysztof", drop: false },
    { name: "Schmidt", drop: false },
    { name: "Qasim", drop: false },
    { name: "Kyrylo", drop: false },
    { name: "Ann Iqtqcv", drop: false },
    { name: "Iqtqcv Gnqhftrh", drop: true },
    { name: "Qxehpn Pyuwhy", drop: true },
    { name: "Bcdfgh", drop: true },
    { name: "Xzqwpv-Lmnrts", drop: true },
    { name: "Gnqhftrh", drop: true },
  ];
  for (const { name, drop } of names) {
    const actual = isImplausibleRandomName(name);
    console.log(`  ${actual === drop ? "ok" : "FAIL"}  ${drop ? "drop" : "allow"}  ${JSON.stringify(name)}`);
    assert.equal(actual, drop, name);
  }

  console.log("\n— signup path —");
  const human = await run(humanBody());
  assert.equal(human.result.status, 200);
  assert.deepEqual(human.result.body, { ok: true });
  assert.equal(human.result.subscribed, true);
  assert.equal(human.subscribed.length, 1);
  assert.equal(human.subscribed[0].email, "ann.li@example.com");
  assert.equal(human.subscribed[0].name, "Ann Li");
  assert.equal(human.notified.length, 1);

  const realNames = ["Jo", "José García", "Mary-Kate O'Neil", "李明", "Anne-Marie Dubois", "Søren Kierkegaard"];
  for (const name of realNames) {
    const result = await run(humanBody({ name, email: "reader@example.org" }));
    assert.equal(result.result.subscribed, true, name);
    assert.equal(result.subscribed[0]?.name, name);
  }

  const missingRequiredName = await run(humanBody({ name: "", requireName: "1" }));
  assert.equal(missingRequiredName.result.status, 400);
  assert.equal(missingRequiredName.result.subscribed, false);
  assert.match(missingRequiredName.result.body.error ?? "", /Name is required/);

  const noName = await run(humanBody({ name: undefined, EMAIL: "reader@example.org", email: undefined }));
  assert.equal(noName.result.subscribed, true);
  assert.equal(noName.subscribed[0].email, "reader@example.org");
  assert.equal(noName.subscribed[0].name, undefined);

  const honeypot = await run(humanBody({ [HONEYPOT_FIELD]: "https://spam.example" }));
  assert.equal(honeypot.result.status, 200);
  assert.deepEqual(honeypot.result.body, { ok: true });
  assert.equal(honeypot.result.subscribed, false);
  assert.equal(honeypot.result.dropReason, "honeypot");
  assert.equal(honeypot.subscribed.length, 0);

  const tooFast = await run(humanBody({ formToken: tokenAge(MIN_SUBMIT_MS - 1) }));
  assert.equal(tooFast.result.status, 200);
  assert.equal(tooFast.result.subscribed, false);
  assert.equal(tooFast.result.dropReason, "too_fast");
  assert.equal(tooFast.subscribed.length, 0);

  const boundary = await run(humanBody({ name: "José García", formToken: tokenAge(MIN_SUBMIT_MS) }));
  assert.equal(boundary.result.subscribed, true);

  const spamName = await run(humanBody({ name: "Iqtqcv Gnqhftrh" }));
  assert.equal(spamName.result.status, 200);
  assert.equal(spamName.result.subscribed, false);
  assert.equal(spamName.result.dropReason, "name");

  const splitSpam = await run(humanBody({ name: undefined, FNAME: "Qxehpn", LNAME: "Pyuwhy" }));
  assert.equal(splitSpam.result.subscribed, false);
  assert.equal(splitSpam.result.dropReason, "name");

  const missingToken = await run(humanBody({ formToken: undefined }));
  assert.equal(missingToken.result.status, 200);
  assert.equal(missingToken.result.subscribed, false);
  assert.equal(missingToken.result.dropReason, "invalid_token");

  const expired = await run(humanBody({ formToken: tokenAge(MAX_TOKEN_AGE_MS + 1_000) }));
  assert.equal(expired.result.status, 400);
  assert.equal(expired.result.subscribed, false);
  assert.equal(expired.result.dropReason, "expired");
  assert.match(expired.result.body.error ?? "", /refresh/i);

  const badEmail = await run(humanBody({ email: "not-an-email" }));
  assert.equal(badEmail.result.status, 400);
  assert.equal(badEmail.result.subscribed, false);
  assert.match(badEmail.result.body.error ?? "", /valid email/i);

  const disposable = await run(humanBody({ email: "bot@mailinator.com" }));
  assert.equal(disposable.result.status, 400);
  assert.equal(disposable.result.subscribed, false);
  assert.match(disposable.result.body.error ?? "", /personal email/i);

  const blankHoneypot = await run(humanBody({ [HONEYPOT_FIELD]: "   " }));
  assert.equal(blankHoneypot.result.subscribed, true);

  console.log("\n— rate limit —");
  const store = new Map<string, number[]>();
  const first = await run(humanBody({ email: "one@example.com" }), { ip: "198.51.100.8", limit: 2, store });
  const second = await run(humanBody({ email: "two@example.com" }), { ip: "198.51.100.8", limit: 2, store });
  const third = await run(humanBody({ email: "three@example.com" }), { ip: "198.51.100.8", limit: 2, store });
  assert.equal(first.result.subscribed, true);
  assert.equal(second.result.subscribed, true);
  assert.equal(third.result.status, 429);
  assert.equal(third.result.subscribed, false);
  assert.equal(third.result.dropReason, "rate_limit");

  const otherIp = await run(humanBody({ email: "four@example.com" }), { ip: "198.51.100.9", limit: 2, store });
  assert.equal(otherIp.result.subscribed, true);

  let calls = 0;
  for (let i = 0; i < 5; i++) {
    const open = await run(humanBody({ email: `open${i}@example.com` }), { ip: null, limit: 1 });
    assert.equal(open.result.subscribed, true);
    calls += 1;
  }
  assert.equal(calls, 5);

  const failingStore = new Map<string, number[]>();
  const failed = await run(humanBody({ email: "retry@example.com" }), {
    ip: "198.51.100.20",
    limit: 1,
    store: failingStore,
    subscribe: async () => ({ ok: false }),
  });
  assert.equal(failed.result.status, 502);
  assert.equal(failed.result.subscribed, false);
  const retried = await run(humanBody({ email: "retry@example.com" }), {
    ip: "198.51.100.20",
    limit: 1,
    store: failingStore,
  });
  assert.equal(retried.result.subscribed, true, "a list failure must not use up the person's attempt");

  let notifyThrew = false;
  const notifyFail = await run(humanBody({ email: "still-on-list@example.com" }), {
    notify: async () => {
      notifyThrew = true;
      throw new Error("resend down");
    },
  });
  assert.equal(notifyThrew, true);
  assert.equal(notifyFail.result.status, 200);
  assert.equal(notifyFail.result.subscribed, true);

  console.log("\n— mailchimp payload —");
  assert.deepEqual(interpretMailchimpPayload('cb({"result":"success","msg":"Thank you for subscribing!"})'), {
    ok: true,
  });
  const already = interpretMailchimpPayload(
    'cb({"result":"error","msg":"ann.li@example.com is already subscribed to list NLMSF."})'
  );
  assert.equal(already.ok, true);
  if (already.ok) assert.equal(already.already, true);
  const rejected = interpretMailchimpPayload('cb({"result":"error","msg":"0 - An email address must contain a single @."})');
  assert.equal(rejected.ok, false);
  assert.equal(interpretMailchimpPayload("<html>no json</html>").ok, false);

  assert.equal(safeReturnPath("/what-is-leiomyosarcoma"), "/what-is-leiomyosarcoma");
  assert.equal(safeReturnPath("https://evil.example/phish"), "/");
  assert.equal(safeReturnPath("//evil.example"), "/");

  console.log("\nAll newsletter signup checks passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
