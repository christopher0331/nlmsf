import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const MAX_BYTES = 3 * 1024 * 1024; // 3 MB

export async function POST(request: Request) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Expected multipart/form-data" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const type = (file.type || "").toLowerCase();
  if (!ALLOWED_TYPES.has(type)) {
    return NextResponse.json(
      { error: "Only JPG, PNG, WebP, or GIF images are supported." },
      { status: 400 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `Image is too large. Max size is ${Math.round(MAX_BYTES / (1024 * 1024))} MB.` },
      { status: 413 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const dataUrl = `data:${type};base64,${buffer.toString("base64")}`;

  return NextResponse.json({
    url: dataUrl,
    size: file.size,
    type,
    name: file.name,
  });
}
