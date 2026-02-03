import { NextRequest, NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = body?.password ?? "";
  const expected = process.env.ADMIN_PASSWORD ?? process.env.ADMIN_SECRET ?? "";
  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  await setAuthCookie();
  return NextResponse.json({ ok: true });
}
