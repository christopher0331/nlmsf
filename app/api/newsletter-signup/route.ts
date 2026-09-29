import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { subscribeToMailchimp } from "@/lib/mailchimp-subscribe";
import {
  handleNewsletterSignup,
  NEWSLETTER_SUCCESS_MESSAGE,
  renderNewsletterResultPage,
  safeReturnPath,
} from "@/lib/newsletter-signup";
import { clientIpFromHeaders } from "@/lib/rate-limit";

function wantsHtml(req: NextRequest): boolean {
  const contentType = req.headers.get("content-type") ?? "";
  return (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  );
}

async function readRaw(req: NextRequest): Promise<Record<string, unknown>> {
  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = await req.json();
    if (body && typeof body === "object" && !Array.isArray(body)) {
      return body as Record<string, unknown>;
    }
    return {};
  }

  const form = await req.formData();
  const raw: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string" && raw[key] === undefined) raw[key] = value;
  }
  return raw;
}

function htmlResponse(status: number, ok: boolean, message: string, backPath: string) {
  return new NextResponse(renderNewsletterResultPage({ ok, message, backPath }), {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/**
 * Every newsletter form posts here. Bot signals are dropped with the same
 * success response a person sees. A passing signup is added to Mailchimp
 * from the server, then Annie gets the attribution email.
 */
export async function POST(req: NextRequest) {
  const html = wantsHtml(req);
  try {
    const raw = await readRaw(req);
    const result = await handleNewsletterSignup(raw, {
      ip: clientIpFromHeaders(req.headers),
      subscribe: (input) => subscribeToMailchimp(input),
      notify: async (data) => {
        await sendContactEmail({
          name: data.name || "Newsletter signup",
          email: data.email,
          subject: "Newsletter signup — how they found NLMSF",
          message: [
            "A visitor subscribed to the newsletter.",
            "",
            `Email: ${data.email}`,
            data.name ? `Name: ${data.name}` : null,
            `How they heard about us: ${data.source || "(not provided)"}`,
            data.page ? `Signup page: ${data.page}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          newsletter: true,
        });
      },
    });

    if (html) {
      const back = safeReturnPath(raw.page);
      const ok = result.status === 200;
      return htmlResponse(
        result.status,
        ok,
        ok ? NEWSLETTER_SUCCESS_MESSAGE : result.body.error || "Something went wrong. Please try again.",
        back
      );
    }

    return NextResponse.json(result.body, {
      status: result.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    if (html) {
      return htmlResponse(500, false, "Something went wrong. Please try again.", "/");
    }
    return NextResponse.json({ error: "Failed to record signup" }, { status: 500 });
  }
}
