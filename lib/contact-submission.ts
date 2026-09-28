import { assessBotSignals } from "@/lib/bot-filter";
import { HONEYPOT_FIELD } from "@/lib/form-guard";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  newsletter: boolean;
};

export type ContactPostResult = {
  status: number;
  body: { ok?: true; error?: string };
  sent: boolean;
  dropReason?: string;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function handleContactPost(
  raw: Record<string, unknown>,
  options: {
    now?: number;
    send: (data: ContactEmailPayload) => Promise<void>;
    turnstileSecret?: string | null;
    verifyTurnstile?: (token: string, secret: string) => Promise<boolean>;
  }
): Promise<ContactPostResult> {
  const name = asString(raw.name);
  const email = asString(raw.email);
  const phone = asString(raw.phone);
  const subject = asString(raw.subject);
  const message = asString(raw.message);

  if (!name || !email || !subject || !message) {
    return {
      status: 400,
      body: { error: "Name, email, subject, and message are required" },
      sent: false,
    };
  }

  const decision = assessBotSignals({
    honeypot: raw[HONEYPOT_FIELD],
    formToken: raw.formToken,
    name,
    now: options.now,
  });

  if (decision.action === "drop") {
    console.info(`[contact] dropped submission (${decision.reason})`);
    return { status: 200, body: { ok: true }, sent: false, dropReason: decision.reason };
  }

  if (decision.action === "expired") {
    return {
      status: 400,
      body: { error: "This page has been open a while. Please refresh and send your message again." },
      sent: false,
      dropReason: "expired",
    };
  }

  const secret = options.turnstileSecret;
  if (secret) {
    const verify = options.verifyTurnstile;
    const passed = verify ? await verify(asString(raw.turnstileToken), secret) : false;
    if (!passed) {
      return {
        status: 400,
        body: { error: "Security check failed. Please try again." },
        sent: false,
      };
    }
  }

  await options.send({
    name,
    email,
    phone: phone || undefined,
    subject,
    message,
    newsletter: !!raw.newsletter,
  });

  return { status: 200, body: { ok: true }, sent: true };
}
