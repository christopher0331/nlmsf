import { NextRequest, NextResponse } from "next/server";
import { handleContactPost } from "@/lib/contact-submission";
import { sendContactEmail } from "@/lib/email";

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  });
  const result = (await verify.json()) as { success: boolean };
  return !!result.success;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const result = await handleContactPost(body, {
      send: sendContactEmail,
      turnstileSecret: process.env.TURNSTILE_SECRET_KEY ?? null,
      verifyTurnstile,
    });
    return NextResponse.json(result.body, { status: result.status });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
