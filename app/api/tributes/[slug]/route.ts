import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
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

const SHAWN_BORINI_SLUGS = new Set(["shawn-borini", "shawn-borini-tribute-page"]);
const SHAWN_BORINI_DONORS = [
  "Cara Borini",
  "Chris Borini",
  "Mary Criswell",
  "Terri and Jerry Mills",
  "Carly Esquivel",
  "Sandy Witter",
  "Conners Family",
  "James Knowlton",
  "Dani Larsen",
  "Danielle Garlin",
  "Pinnacle Real Estate Advisors, LLC",
  "Paul LeNeveu",
  "Collin Fitzgerald",
  "Roberta Bolton",
  "Wes Jordan",
  "Chase Grimes",
  "Zack Panariso",
  "Andrea Gladstone Radis",
  "Scott Garlin",
  "Seth Fritz",
  "Paul Nora",
  "John LeNeveu",
  "Jason McNett",
  "Connor Knutson",
  "Stephanie Connell",
  "Catherine Winkelmann",
  "Peter Sengelmann",
  "Cindy Petitjean",
  "Dana Mena",
  "Greg Titus",
  "Nancy Grimes",
  "Rachel and Anna Edson",
  "The Knowlton's",
  "Georgia Newman",
  "Jaimy Criswell",
  "Grant Kraus",
  "The Team Newell",
  "Richard Witter",
  "Annie and Mitch Achee",
  "Chris Knowlton",
];

function getShawnBoriniDonorJson() {
  const now = new Date().toISOString();
  return SHAWN_BORINI_DONORS.map((name, index) => ({
    id: `shawn-borini-${index + 1}`,
    donor_name: name,
    donation_amount: null,
    donation_date: null,
    is_anonymous: false,
    message: null,
    display_order: index + 1,
    created_at: now,
  }));
}

function shouldUseShawnDonors(slug: string, tributeSlug?: string, donorsCount?: number) {
  if (donorsCount && donorsCount > 0) return false;
  return SHAWN_BORINI_SLUGS.has(slug) || (tributeSlug ? SHAWN_BORINI_SLUGS.has(tributeSlug) : false);
}

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
      const donorsJson = shouldUseShawnDonors(slug, tribute.slug, donors.length)
        ? getShawnBoriniDonorJson()
        : donors.map(toDonorJson);
      return NextResponse.json({
        ...toTributeJson(tribute),
        donors: donorsJson,
        comments: comments.map(toCommentJson),
      });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
      // Fall through to Prisma when MySQL is unreachable
    }
  }

  const prisma = await getPrisma();
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

  const donorsJson = shouldUseShawnDonors(slug, tribute.slug, tribute.donors.length)
    ? getShawnBoriniDonorJson()
    : tribute.donors.map((d) => ({
        id: d.id,
        donor_name: d.donorName,
        donation_amount: d.donationAmount,
        donation_date: d.donationDate,
        is_anonymous: d.isAnonymous,
        message: d.message,
        display_order: d.displayOrder,
        created_at: d.createdAt.toISOString(),
      }));

  return NextResponse.json({
    id: tribute.id,
    name: tribute.name,
    slug: tribute.slug,
    biography: tribute.biography,
    image_url: tribute.imageUrl,
    created_at: tribute.createdAt.toISOString(),
    donors: donorsJson,
    comments: tribute.comments.map((c) => ({
      id: c.id,
      commenter_name: c.commenterName,
      comment_text: c.commentText,
      created_at: c.createdAt.toISOString(),
    })),
  });
}
