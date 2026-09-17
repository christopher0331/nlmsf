import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { artworkFromUpload } from "@/lib/merch/generate";
import { toDesignDto } from "@/lib/merch/dto";

export async function POST(req: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const title = String(body?.title ?? "").trim();
  const prompt = String(body?.prompt ?? "Uploaded branded artwork");
  const dataUrl = String(body?.imageDataUrl ?? "");
  if (!title || !dataUrl) {
    return NextResponse.json({ error: "Title and image are required." }, { status: 400 });
  }
  const art = artworkFromUpload(dataUrl);
  if (!art) {
    return NextResponse.json({ error: "Could not read the uploaded image." }, { status: 400 });
  }

  const prisma = await getMerchPrisma();
  const design = await prisma.merchDesign.create({
    data: {
      title,
      prompt,
      themeId: "upload",
      imageMime: art.mimeType,
      imageData: new Uint8Array(art.bytes),
      source: "upload",
      status: "pending",
    },
  });
  return NextResponse.json(toDesignDto(design));
}
