/**
 * Server-side subscribe to the public NLMSF Mailchimp audience.
 * The list id is the same one the embedded forms already posted to.
 * Callers must run bot checks before this so rejected signups never reach Mailchimp.
 */

const LIST_U = "7882c1010a69171493a3bed4b";
const LIST_ID = "7958b212a8";
const FORM_ID = "00a19fedf0";

export type MailchimpSubscribeResult = { ok: true; already?: boolean } | { ok: false; detail?: string };

export function interpretMailchimpPayload(text: string): MailchimpSubscribeResult {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return { ok: false, detail: "Unexpected response from the mailing list" };

  let data: { result?: string; msg?: string };
  try {
    data = JSON.parse(match[0]) as { result?: string; msg?: string };
  } catch {
    return { ok: false, detail: "Unexpected response from the mailing list" };
  }

  const msg = (data.msg ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (data.result === "success") return { ok: true };
  if (/already subscribed/i.test(msg)) return { ok: true, already: true };
  return { ok: false, detail: msg || "The mailing list did not accept this signup" };
}

export async function subscribeToMailchimp(
  input: { email: string; name?: string; source?: string },
  fetchImpl: typeof fetch = fetch
): Promise<MailchimpSubscribeResult> {
  const params = new URLSearchParams();
  params.set("u", LIST_U);
  params.set("id", LIST_ID);
  params.set("f_id", FORM_ID);
  params.set("c", "cb");
  params.set("EMAIL", input.email);
  params.set("b_7882c1010a69171493a3bed4b_7958b212a8", "");

  const source = input.source?.trim();
  if (source) params.set("SOURCE", source.slice(0, 255));

  const name = input.name?.trim();
  if (name) {
    const parts = name.split(/\s+/);
    const first = parts[0] ?? "";
    const last = parts.slice(1).join(" ");
    params.set("FNAME", first);
    params.set("MERGE1", first);
    if (last) {
      params.set("LNAME", last);
      params.set("MERGE2", last);
    }
  }

  const url = `https://nlmsf.us13.list-manage.com/subscribe/post-json?${params.toString()}`;
  const res = await fetchImpl(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/javascript, */*",
      Origin: "https://nlmsf.org",
      Referer: "https://nlmsf.org/",
    },
    signal: AbortSignal.timeout(12_000),
  });
  const text = await res.text();
  return interpretMailchimpPayload(text);
}
