import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributeById,
  getTributes as getWordPressTributes,
  updateTribute as updateWordPressTribute,
  deleteTribute as deleteWordPressTribute,
  toTributeJson,
} from "@/lib/wordpress-db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  let body: {
    name?: string;
    slug?: string;
    biography?: string;
    image_url?: string;
    is_published?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (isWordPressDbConfigured()) {
    try {
      const numId = parseInt(id, 10);
      if (Number.isNaN(numId)) return NextResponse.json({ error: "Not found" }, { status: 404 });
      const existing = await getTributeById(numId);
      if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
      const slugRaw = (body.slug ?? existing.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const slug = slugRaw || existing.slug;
      const all = await getWordPressTributes(false);
      if (all.some((t) => t.slug === slug && t.id !== numId)) {
        return NextResponse.json({ error: "Slug already in use" }, { status: 400 });
      }
      const tribute = await updateWordPressTribute(numId, {
        name: body.name,
        slug: body.slug,
        biography: body.biography,
        image_url: body.image_url,
        is_published: body.is_published,
      });
      if (!tribute) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json(toTributeJson(tribute));
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const existing = await prisma.tribute.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const slugRaw = (body.slug ?? existing.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const slug = slugRaw || existing.slug;
  const slugConflict = await prisma.tribute.findFirst({
    where: { slug, id: { not: id } },
  });
  if (slugConflict) {
    return NextResponse.json({ error: "Slug already in use" }, { status: 400 });
  }

  const tribute = await prisma.tribute.update({
    where: { id },
    data: {
      ...(body.name !== undefined && { name: body.name.trim() }),
      ...(body.slug !== undefined && { slug }),
      ...(body.biography !== undefined && { biography: body.biography.trim() }),
      ...(body.image_url !== undefined && { imageUrl: body.image_url.trim() || null }),
      ...(body.is_published !== undefined && { isPublished: !!body.is_published }),
    },
  });

  return NextResponse.json({
    id: tribute.id,
    name: tribute.name,
    slug: tribute.slug,
    biography: tribute.biography,
    image_url: tribute.imageUrl,
    is_published: tribute.isPublished,
    updated_at: tribute.updatedAt.toISOString(),
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  if (isWordPressDbConfigured()) {
    try {
      const numId = parseInt(id, 10);
      if (Number.isNaN(numId)) return NextResponse.json({ ok: true });
      await deleteWordPressTribute(numId);
      return NextResponse.json({ ok: true });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  await prisma.tribute.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
