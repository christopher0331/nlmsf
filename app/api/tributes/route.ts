import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributes as getWordPressTributes,
  toTributeJson,
} from "@/lib/wordpress-db";

/** Public: list published tributes for directory (WordPress DB if configured, else Prisma). Falls back to Prisma if WordPress DB is unreachable. */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get("published_only") !== "0";

  if (isWordPressDbConfigured()) {
    try {
      const tributes = await getWordPressTributes(publishedOnly);
      return NextResponse.json(tributes.map(toTributeJson));
    } catch (err) {
      if (isWordPressConnectionError(err)) {
        // Fall through to Prisma when MySQL is not running (e.g. local dev)
      } else {
        throw err;
      }
    }
  }

  const prisma = await getPrisma();
  const tributes = await prisma.tribute.findMany({
    where: publishedOnly ? { isPublished: true } : undefined,
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

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
    }))
  );
}
