/**
 * Server-side email checks for newsletter signup.
 * Disposable matches are well-known throwaway inboxes only.
 * Privacy relays (Apple Hide My Email, Firefox Relay, DuckDuckGo) are left alone.
 */

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "mailinator.net",
  "mailinator.org",
  "mailinator2.com",
  "mailinater.com",
  "sogetthis.com",
  "binkmail.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamail.info",
  "guerrillamailblock.com",
  "sharklasers.com",
  "grr.la",
  "spam4.me",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "yopmail.org",
  "cool.fr.nf",
  "jetable.fr.nf",
  "nospam.ze.tc",
  "nomail.xl.cx",
  "mega.zik.dj",
  "speed.1s.fr",
  "courriel.fr.nf",
  "moncourrier.fr.nf",
  "monemail.fr.nf",
  "monmail.fr.nf",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "tempemail.com",
  "tempemail.net",
  "tempinbox.com",
  "tempmailaddress.com",
  "tempmailo.com",
  "10minutemail.com",
  "10minutemail.net",
  "10minutemail.org",
  "trashmail.com",
  "trashmail.de",
  "trashmail.net",
  "trashmail.org",
  "trash-mail.com",
  "trash-mail.de",
  "trashymail.com",
  "getnada.com",
  "nada.email",
  "dispostable.com",
  "maildrop.cc",
  "mailnesia.com",
  "mintemail.com",
  "throwawaymail.com",
  "throwawayemail.com",
  "mohmal.com",
  "emailondeck.com",
  "fakeinbox.com",
  "mailcatch.com",
  "mytemp.email",
  "tmpmail.org",
  "tmpmail.net",
  "discard.email",
  "discardmail.com",
  "discardmail.de",
  "getairmail.com",
  "burnermail.io",
  "mailpoof.com",
  "inboxkitten.com",
  "crazymailing.com",
  "spamgourmet.com",
  "mailnull.com",
  "tempr.email",
  "safetymail.info",
  "spamspot.com",
  "spamthis.co.uk",
  "spamthisplease.com",
  "mailmetrash.com",
  "filzmail.com",
  "spambox.us",
  "emailfake.com",
  "generator.email",
]);

export type EmailCheck =
  | { ok: true; email: string }
  | { ok: false; reason: "malformed" | "disposable" };

const LOCAL_PART = /^[\p{L}\p{N}!#$%&'*+/=?^_`{|}~.-]+$/u;
const DOMAIN_LABEL = /^[\p{L}\p{N}](?:[\p{L}\p{N}-]{0,61}[\p{L}\p{N}])?$/u;

export function checkSignupEmail(raw: string): EmailCheck {
  const email = raw.trim();
  if (!email || email.length > 254) return { ok: false, reason: "malformed" };

  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@")) return { ok: false, reason: "malformed" };

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (local.length > 64) return { ok: false, reason: "malformed" };
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return { ok: false, reason: "malformed" };
  }
  if (!LOCAL_PART.test(local)) return { ok: false, reason: "malformed" };

  if (
    domain.length > 253 ||
    domain.includes("..") ||
    domain.startsWith(".") ||
    domain.endsWith(".") ||
    domain.startsWith("-") ||
    domain.endsWith("-")
  ) {
    return { ok: false, reason: "malformed" };
  }

  const labels = domain.split(".");
  if (labels.length < 2) return { ok: false, reason: "malformed" };
  if (!labels.every((label) => DOMAIN_LABEL.test(label))) return { ok: false, reason: "malformed" };

  const tld = labels[labels.length - 1];
  if (tld.length < 2 || /^\p{N}+$/u.test(tld)) return { ok: false, reason: "malformed" };

  const lowerLabels = labels.map((label) => label.toLowerCase());
  for (let i = 0; i < lowerLabels.length; i++) {
    if (DISPOSABLE_DOMAINS.has(lowerLabels.slice(i).join("."))) {
      return { ok: false, reason: "disposable" };
    }
  }

  return { ok: true, email };
}
