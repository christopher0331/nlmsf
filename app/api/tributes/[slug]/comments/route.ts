import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributeBySlug,
  addComment as addWordPressComment,
} from "@/lib/wordpress-db";

/** Public: add a comment to a tribute (by slug). Writes to WordPress DB if configured, else Prisma. */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let body: { commenter_name?: string; commenter_email?: string; comment_text?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const commenterName = (body.commenter_name ?? "").trim();
  const commentText = (body.comment_text ?? "").trim();
  if (!commenterName || !commentText) {
    return NextResponse.json(
      { error: "commenter_name and comment_text are required" },
      { status: 400 }
    );
  }
  if (commentText.length > 1000) {
    return NextResponse.json(
      { error: "Comment must be under 1000 characters" },
      { status: 400 }
    );
  }

  if (isWordPressDbConfigured()) {
    try {
      let tribute = await getTributeBySlug(slug);
      if (!tribute && !slug.endsWith("-tribute-page")) {
        tribute = await getTributeBySlug(slug + "-tribute-page");
      }
      if (!tribute) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      const comment = await addWordPressComment(
        tribute.id,
        commenterName,
        (body.commenter_email ?? "").trim() || null,
        commentText
      );
      if (!comment) {
        return NextResponse.json(
          { error: "Failed to save comment" },
          { status: 500 }
        );
      }
      return NextResponse.json({
        id: String(comment.id),
        commenter_name: comment.commenter_name,
        comment_text: comment.comment_text,
        created_at: comment.created_at instanceof Date ? comment.created_at.toISOString() : String(comment.created_at),
      });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
      // Fall through to Prisma when MySQL is unreachable
    }
  }

  let tribute = await prisma.tribute.findFirst({
    where: { slug, isPublished: true },
  });
  if (!tribute && !slug.endsWith("-tribute-page")) {
    tribute = await prisma.tribute.findFirst({
      where: { slug: slug + "-tribute-page", isPublished: true },
    });
  }
  if (!tribute) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const comment = await prisma.tributeComment.create({
    data: {
      tributeId: tribute.id,
      commenterName,
      commenterEmail: (body.commenter_email ?? "").trim() || null,
      commentText,
      isApproved: true,
    },
  });

  return NextResponse.json({
    id: comment.id,
    commenter_name: comment.commenterName,
    comment_text: comment.commentText,
    created_at: comment.createdAt.toISOString(),
  });
}
