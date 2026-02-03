import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributeBySlug,
  getDonors,
  getComments,
  toTributeJson,
  toDonorJson,
  toCommentJson,
} from "@/lib/wordpress-db";

/** Resolve slug: try exact match, then slug + '-tribute-page' so both /barbara-esther-olson and /barbara-esther-olson-tribute-page work. */
async function resolveTributeBySlug(slug: string) {
  let tribute = await getTributeBySlug(slug);
  if (!tribute && !slug.endsWith("-tribute-page")) {
    tribute = await getTributeBySlug(slug + "-tribute-page");
  }
  return tribute;
}

/** Public: get one tribute by slug with donors and comments (published only). WordPress DB if configured, else Prisma. Falls back to Prisma if WordPress DB is unreachable. Both /name and /name-tribute-page resolve to the same tribute. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (isWordPressDbConfigured()) {
    try {
      const tribute = await resolveTributeBySlug(slug);
      if (!tribute) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      const [donors, comments] = await Promise.all([
        getDonors(tribute.id),
        getComments(tribute.id),
      ]);
      return NextResponse.json({
        ...toTributeJson(tribute),
        donors: donors.map(toDonorJson),
        comments: comments.map(toCommentJson),
      });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
      // Fall through to Prisma when MySQL is unreachable
    }
  }

  let tribute = await prisma.tribute.findFirst({
    where: { slug, isPublished: true },
    include: {
      donors: { orderBy: [{ displayOrder: "asc" }, { id: "asc" }] },
      comments: {
        where: { isApproved: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!tribute && !slug.endsWith("-tribute-page")) {
    tribute = await prisma.tribute.findFirst({
      where: { slug: slug + "-tribute-page", isPublished: true },
      include: {
        donors: { orderBy: [{ displayOrder: "asc" }, { id: "asc" }] },
        comments: {
          where: { isApproved: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });
  }

  if (!tribute) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: tribute.id,
    name: tribute.name,
    slug: tribute.slug,
    biography: tribute.biography,
    image_url: tribute.imageUrl,
    created_at: tribute.createdAt.toISOString(),
    donors: tribute.donors.map((d) => ({
      id: d.id,
      donor_name: d.donorName,
      donation_amount: d.donationAmount,
      donation_date: d.donationDate,
      is_anonymous: d.isAnonymous,
      message: d.message,
      display_order: d.displayOrder,
      created_at: d.createdAt.toISOString(),
    })),
    comments: tribute.comments.map((c) => ({
      id: c.id,
      commenter_name: c.commenterName,
      comment_text: c.commentText,
      created_at: c.createdAt.toISOString(),
    })),
  });
}
