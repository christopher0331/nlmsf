/**
 * Resolve a tribute slug (short or long) to the actual slug stored in the DB.
 * Used for redirects: non-tribute-page slugs → -tribute-page slugs.
 */
import { getPrisma } from "@/lib/prisma";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributeBySlug,
} from "@/lib/wordpress-db";

export async function getResolvedTributeSlug(slug: string): Promise<string | null> {
  if (isWordPressDbConfigured()) {
    try {
      let tribute = await getTributeBySlug(slug);
      if (!tribute && !slug.endsWith("-tribute-page")) {
        tribute = await getTributeBySlug(slug + "-tribute-page");
      }
      return tribute ? tribute.slug : null;
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const prisma = await getPrisma();
  let tribute = await prisma.tribute.findFirst({
    where: { slug, isPublished: true },
    select: { slug: true },
  });
  if (!tribute && !slug.endsWith("-tribute-page")) {
    tribute = await prisma.tribute.findFirst({
      where: { slug: slug + "-tribute-page", isPublished: true },
      select: { slug: true },
    });
  }
  return tribute?.slug ?? null;
}
