import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { generateMerchArtwork, themeFromId } from "@/lib/merch/generate";
import { toDesignDto } from "@/lib/merch/dto";
import { randomBytes } from "crypto";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const themeId = String(body?.themeId ?? "champion-hope");
  const extraPrompt = String(body?.prompt ?? "");
  const titleOverride = String(body?.title ?? "").trim();
  const count = Math.min(4, Math.max(1, Number(body?.count) || 1));
  const theme = themeFromId(themeId);

  const prisma = await getPrisma();
  const created = [];

  for (let i = 0; i < count; i += 1) {
    const seed = randomBytes(6).toString("hex");
    const title = titleOverride || (count > 1 ? `${theme.title} ${i + 1}` : theme.title);
    const art = await generateMerchArtwork({
      theme,
      extraPrompt,
      title,
      seed,
    });
    const design = await prisma.merchDesign.create({
      data: {
        title,
        prompt: extraPrompt || theme.prompt,
        themeId: theme.id,
        imageMime: art.mimeType,
        imageData: new Uint8Array(art.bytes),
        source: art.source,
        status: "pending",
      },
    });
    created.push(toDesignDto(design));
  }

  return NextResponse.json({ designs: created });
}
