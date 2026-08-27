import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

/**
 * Records newsletter signup attribution for Annie (how they heard about NLMSF).
 * Runs alongside the Mailchimp subscribe POST from the client.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim();
    const source = String(body?.source ?? "").trim();
    const page = String(body?.page ?? "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    await sendContactEmail({
      name: "Newsletter signup",
      email,
      subject: "Newsletter signup — how they found NLMSF",
      message: [
        "A visitor subscribed to the newsletter.",
        "",
        `Email: ${email}`,
        `How they heard about us: ${source || "(not provided)"}`,
        page ? `Signup page: ${page}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      newsletter: true,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup attribution error:", err);
    return NextResponse.json({ error: "Failed to record signup" }, { status: 500 });
  }
}
