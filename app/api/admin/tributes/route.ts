import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributes as getWordPressTributes,
  addTribute as addWordPressTribute,
  toTributeJson,
} from "@/lib/wordpress-db";

export async function GET() {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (isWordPressDbConfigured()) {
    try {
      const tributes = await getWordPressTributes(false);
      return NextResponse.json(tributes.map(toTributeJson));
    } catch (err) {
      if (isWordPressConnectionError(err)) {
        // Fall through to Prisma when MySQL is unreachable
      } else {
        throw err;
      }
    }
  }

  const prisma = await getPrisma();
  type TributeRecord = {
    id: string;
    name: string;
    slug: string;
    biography: string;
    imageUrl: string | null;
    displayOrder: number;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  const tributes = (await prisma.tribute.findMany({
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  })) as TributeRecord[];
  return NextResponse.json(
    tributes.map((t) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      biography: t.biography,
      image_url: t.imageUrl,
      display_order: t.displayOrder,
      is_published: t.isPublished,
      created_at: t.createdAt.toISOString(),
      updated_at: t.updatedAt.toISOString(),
    }))
  );
}

export async function POST(request: Request) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

  const name = (body.name ?? "").trim();
  const biography = (body.biography ?? "").trim();
  if (!name || !biography) {
    return NextResponse.json(
      { error: "name and biography are required" },
      { status: 400 }
    );
  }

  let slug = (body.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  if (!slug) slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  if (isWordPressDbConfigured()) {
    try {
      const allWp = await getWordPressTributes(false);
      let finalSlug = slug;
      if (allWp.some((t) => t.slug === slug)) {
        let suffix = 1;
        while (allWp.some((t) => t.slug === `${slug}-${suffix}`)) suffix++;
        finalSlug = `${slug}-${suffix}`;
      }
      const tribute = await addWordPressTribute({
        name,
        slug: finalSlug,
        biography,
        image_url: (body.image_url ?? "").trim() || null,
        is_published: body.is_published !== false,
      });
      if (!tribute) return NextResponse.json({ error: "Failed to create tribute" }, { status: 500 });
      return NextResponse.json(toTributeJson(tribute));
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
      // Fall through to Prisma when MySQL is unreachable
    }
  }

  const prisma = await getPrisma();
  const existing = await prisma.tribute.findUnique({ where: { slug } });
  if (existing) {
    let suffix = 1;
    while (await prisma.tribute.findUnique({ where: { slug: `${slug}-${suffix}` } })) suffix++;
    slug = `${slug}-${suffix}`;
  }

  const tribute = await prisma.tribute.create({
    data: {
      name,
      slug,
      biography,
      imageUrl: (body.image_url ?? "").trim() || null,
      isPublished: body.is_published !== false,
    },
  });

  return NextResponse.json({
    id: tribute.id,
    name: tribute.name,
    slug: tribute.slug,
    biography: tribute.biography,
    image_url: tribute.imageUrl,
    display_order: tribute.displayOrder,
    is_published: tribute.isPublished,
    created_at: tribute.createdAt.toISOString(),
  });
}
