/**
 * Contact-form bot filter checks.
 * (a) a normal human-style submission still sends
 * (b) a filled honeypot is dropped but gets a success response
 * (c) a submission that's too fast is dropped
 * (d) name heuristic on the observed spam and on real names
 */
process.env.BOT_FILTER_SECRET = "test-bot-filter-secret";

import assert from "node:assert/strict";
import { issueFormToken, isImplausibleRandomName, MIN_SUBMIT_MS } from "../lib/bot-filter";
import { handleContactPost, type ContactEmailPayload } from "../lib/contact-submission";

const NOW = 1_700_000_000_000;

function tokenAge(ageMs: number): string {
  return issueFormToken(NOW - ageMs);
}

const humanBody = {
  name: "Ann Li",
  email: "ann.li@example.com",
  phone: "303-555-0100",
  subject: "general",
  message: "Hello, I would like information about patient support.",
  newsletter: false,
  nlmsf_extra: "",
  formToken: tokenAge(10_000),
};

async function runCase(
  label: string,
  body: Record<string, unknown>
): Promise<{ status: number; body: { ok?: true; error?: string }; sent: ContactEmailPayload | null; dropReason?: string }> {
  let sent: ContactEmailPayload | null = null;
  const result = await handleContactPost(body, {
    now: NOW,
    turnstileSecret: null,
    send: async (data) => {
      sent = data;
    },
  });
  console.log(
    `${label}: status=${result.status} sent=${sent ? "yes" : "no"}` +
      `${result.dropReason ? ` reason=${result.dropReason}` : ""}` +
      ` body=${JSON.stringify(result.body)}`
  );
  return { ...result, sent };
}

async function main() {
  console.log("— submission path —");

  const human = await runCase("(a) human-style", humanBody);
  assert.equal(human.status, 200);
  assert.deepEqual(human.body, { ok: true });
  assert.ok(human.sent, "human submission should send email");
  assert.equal(human.sent.name, "Ann Li");
  assert.equal(human.sent.email, "ann.li@example.com");
  assert.equal(human.sent.subject, "general");
  assert.equal(human.sent.message, humanBody.message);

  const honeypot = await runCase("(b) honeypot filled", {
    ...humanBody,
    nlmsf_extra: "http://spam.example",
  });
  assert.equal(honeypot.status, 200);
  assert.deepEqual(honeypot.body, { ok: true });
  assert.equal(honeypot.sent, null);
  assert.equal(honeypot.dropReason, "honeypot");

  const tooFast = await runCase("(c) too fast", {
    ...humanBody,
    formToken: tokenAge(MIN_SUBMIT_MS - 1),
  });
  assert.equal(tooFast.status, 200);
  assert.deepEqual(tooFast.body, { ok: true });
  assert.equal(tooFast.sent, null);
  assert.equal(tooFast.dropReason, "too_fast");

  const justSlowEnough = await runCase(`(c) boundary ${MIN_SUBMIT_MS}ms still sends`, {
    ...humanBody,
    name: "José García",
    formToken: tokenAge(MIN_SUBMIT_MS),
  });
  assert.equal(justSlowEnough.status, 200);
  assert.ok(justSlowEnough.sent, "a submission at exactly 3 seconds should send");

  const spamName = await runCase("(d) spam name through the form path", {
    ...humanBody,
    name: "Iqtqcv Gnqhftrh",
  });
  assert.equal(spamName.status, 200);
  assert.deepEqual(spamName.body, { ok: true });
  assert.equal(spamName.sent, null);
  assert.equal(spamName.dropReason, "name");

  const missingToken = await runCase("direct post with no token", {
    ...humanBody,
    formToken: undefined,
  });
  assert.equal(missingToken.status, 200);
  assert.equal(missingToken.sent, null);
  assert.equal(missingToken.dropReason, "invalid_token");

  const blankHoneypot = await runCase("whitespace honeypot still sends", {
    ...humanBody,
    nlmsf_extra: "   ",
  });
  assert.ok(blankHoneypot.sent);

  console.log("\n— name heuristic —");
  const names: Array<{ name: string; drop: boolean }> = [
    { name: "Iqtqcv Gnqhftrh", drop: true },
    { name: "Qxehpn Pyuwhy", drop: true },
    { name: "Iqtqcv", drop: true },
    { name: "Gnqhftrh", drop: true },
    { name: "Qxehpn", drop: true },
    { name: "Pyuwhy", drop: true },
    { name: "Ann Li", drop: false },
    { name: "Jo", drop: false },
    { name: "José García", drop: false },
    { name: "Mary-Kate O'Neil", drop: false },
    { name: "Mary-Kate O’Neil", drop: false },
    { name: "Schmidt", drop: false },
    { name: "Schwarz", drop: false },
    { name: "Schmitt", drop: false },
    { name: "Krzysztof", drop: false },
    { name: "Wright", drop: false },
    { name: "Gwyneth", drop: false },
    { name: "Blythe", drop: false },
    { name: "Nguyen", drop: false },
    { name: "Zhang", drop: false },
    { name: "Qasim", drop: false },
    { name: "Tariq", drop: false },
    { name: "Qiu", drop: false },
    { name: "François Müller", drop: false },
    { name: "Søren", drop: false },
    { name: "Jean-Luc", drop: false },
    { name: "J.R. Smith", drop: false },
    { name: "Ng", drop: false },
    { name: "李明", drop: false },
    { name: "Kyrylo", drop: false },
    { name: "Mykyta", drop: false },
    { name: "Whitney", drop: false },
    { name: "Hlynur", drop: false },
    { name: "Anne-Marie", drop: false },
    { name: "John Schmidt", drop: false },
    { name: "Ann Iqtqcv", drop: false },
  ];

  let failed = 0;
  for (const { name, drop } of names) {
    const actual = isImplausibleRandomName(name);
    const ok = actual === drop;
    if (!ok) failed += 1;
    console.log(`  ${ok ? "ok" : "FAIL"}  ${drop ? "drop" : "allow"}  ${JSON.stringify(name)}  got ${actual ? "drop" : "allow"}`);
    assert.equal(actual, drop, name);
  }

  assert.equal(failed, 0);
  console.log("\nAll bot-filter checks passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
