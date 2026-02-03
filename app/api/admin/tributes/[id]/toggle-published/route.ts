import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  togglePublished as toggleWordPressPublished,
} from "@/lib/wordpress-db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  let body: { is_published?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const isPublished = body.is_published !== false;

  if (isWordPressDbConfigured()) {
    try {
      const numId = parseInt(id, 10);
      if (Number.isNaN(numId)) return NextResponse.json({ error: "Not found" }, { status: 404 });
      const tribute = await toggleWordPressPublished(numId, isPublished);
      if (!tribute) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json({ is_published: tribute.is_published === 1 });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const tribute = await prisma.tribute.update({
    where: { id },
    data: { isPublished },
  });
  return NextResponse.json({ is_published: tribute.isPublished });
}
