import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { previewPrintifyShop, syncConnectedPrintifyShop } from "@/lib/merch/printify-sync";
import { isPrintifyConfigured } from "@/lib/merch/printify";

export async function GET() {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isPrintifyConfigured()) {
    return NextResponse.json({
      configured: false,
      shopId: null,
      products: [],
      error: "Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host.",
    });
  }
  try {
    const preview = await previewPrintifyShop();
    return NextResponse.json({ configured: true, ...preview });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to list Printify products";
    return NextResponse.json({ error: message, configured: true }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isPrintifyConfigured()) {
    return NextResponse.json(
      { error: "Printify is not configured. Set PRINTIFY_API_TOKEN (or printify) on the host." },
      { status: 400 },
    );
  }

  let productIds: string[] | undefined;
  let publish = true;
  try {
    const body = await req.json();
    if (Array.isArray(body?.productIds)) productIds = body.productIds.map(String);
    if (body?.publish === false) publish = false;
  } catch {
    productIds = undefined;
  }

  try {
    const result = await syncConnectedPrintifyShop({ productIds, publish });
    return NextResponse.json(result);
  } catch (err) {
    console.error("Printify merch sync failed:", err);
    const message = err instanceof Error ? err.message : "Printify sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
