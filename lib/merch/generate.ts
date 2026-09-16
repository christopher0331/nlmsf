import { renderStudioArtwork } from "@/lib/merch/brand-art";
import { buildGeminiPrompt, getTheme, type MerchTheme } from "@/lib/merch/prompts";

export type GeneratedArtwork = {
  bytes: Buffer;
  mimeType: string;
  source: "gemini" | "studio" | "upload";
};

const GEMINI_IMAGE_MODELS = [
  "gemini-2.5-flash-image",
  "gemini-2.5-flash-image-preview",
];

function parseDataUrl(dataUrl: string): { mimeType: string; bytes: Buffer } | null {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return null;
  return { mimeType: match[1], bytes: Buffer.from(match[2], "base64") };
}

async function generateWithGemini(prompt: string): Promise<GeneratedArtwork | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.startsWith("PASTE_")) return null;

  for (const model of GEMINI_IMAGE_MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseModalities: ["TEXT", "IMAGE"],
              temperature: 0.8,
            },
          }),
        },
      );
      if (!res.ok) continue;
      const data = await res.json();
      const parts = data?.candidates?.[0]?.content?.parts as Array<{
        inlineData?: { mimeType?: string; data?: string };
        inline_data?: { mime_type?: string; data?: string };
      }> | undefined;
      const part = parts?.find((p) => p.inlineData?.data || p.inline_data?.data);
      const b64 = part?.inlineData?.data ?? part?.inline_data?.data;
      const mime = part?.inlineData?.mimeType ?? part?.inline_data?.mime_type ?? "image/png";
      if (!b64) continue;
      return { bytes: Buffer.from(b64, "base64"), mimeType: mime, source: "gemini" };
    } catch (err) {
      console.error(`Gemini image model ${model} failed:`, err);
    }
  }
  return null;
}

export async function generateMerchArtwork(input: {
  theme: MerchTheme;
  extraPrompt: string;
  title: string;
  seed: string;
}): Promise<GeneratedArtwork> {
  const prompt = buildGeminiPrompt(input.theme, input.extraPrompt);
  const ai = await generateWithGemini(prompt);
  if (ai) return ai;
  const bytes = await renderStudioArtwork({
    title: input.title,
    prompt: input.extraPrompt || input.theme.prompt,
    themeId: input.theme.id,
    seed: input.seed,
  });
  return { bytes, mimeType: "image/png", source: "studio" };
}

export function themeFromId(themeId: string): MerchTheme {
  return getTheme(themeId) ?? getTheme("champion-hope")!;
}

export function artworkFromUpload(dataUrl: string): GeneratedArtwork | null {
  const parsed = parseDataUrl(dataUrl);
  if (!parsed) return null;
  return { ...parsed, source: "upload" };
}
