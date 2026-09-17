import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { isPrintifyConfigured } from "@/lib/merch/printify";
import { publishListingsToPrintify } from "@/lib/merch/printify-publish";

export async function POST(req: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isPrintifyConfigured()) {
    return NextResponse.json(
      { error: "Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host." },
      { status: 400 },
    );
  }

  let listingIds: string[] | undefined;
  let waitForMockups = true;
  try {
    const body = await req.json();
    if (Array.isArray(body?.listingIds)) listingIds = body.listingIds.map(String);
    if (body?.waitForMockups === false) waitForMockups = false;
  } catch {
    listingIds = undefined;
  }

  try {
    const result = await publishListingsToPrintify({ listingIds, waitForMockups });
    return NextResponse.json(result);
  } catch (err) {
    console.error("Printify merch publish failed:", err);
    const message = err instanceof Error ? err.message : "Printify publish failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
