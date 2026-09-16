import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import {
  colorsForMedium,
  getMedium,
  type MerchMediumId,
} from "@/lib/merch/catalog";
import { slugify } from "@/lib/merch/slug";
import { toListingDto } from "@/lib/merch/dto";

async function uniqueSlug(base: string) {
  const prisma = await getMerchPrisma();
  let slug = slugify(base);
  let i = 2;
  while (await prisma.merchListing.findUnique({ where: { slug } })) {
    slug = `${slugify(base)}-${i}`;
    i += 1;
  }
  return slug;
}

export async function POST(req: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const designId = String(body?.designId ?? "");
  const mediumIds = Array.isArray(body?.mediumIds) ? body.mediumIds.map(String) : [];
  const colorIds = Array.isArray(body?.colorIds) ? body.colorIds.map(String) : [];
  const publish = body?.publish !== false;

  if (!designId || !mediumIds.length) {
    return NextResponse.json({ error: "Pick a design and at least one merch type." }, { status: 400 });
  }

  const prisma = await getMerchPrisma();
  const design = await prisma.merchDesign.findUnique({ where: { id: designId } });
  if (!design) return NextResponse.json({ error: "Design not found." }, { status: 404 });
  if (design.status !== "approved") {
    return NextResponse.json({ error: "Approve the design before applying it to merch." }, { status: 400 });
  }

  const listings = [];
  for (const mediumId of mediumIds) {
    const medium = getMedium(mediumId);
    if (!medium) continue;
    const allowed = colorsForMedium(medium.id as MerchMediumId);
    const chosen = (colorIds.length ? colorIds : allowed.map((c) => c.id)).filter((colorId: string) =>
      allowed.some((color) => color.id === colorId),
    );
    if (!chosen.length) continue;
    const title = `${design.title} ${medium.shortName}`;
    const slug = await uniqueSlug(`${design.title}-${medium.shortName}`);
    const listing = await prisma.merchListing.create({
      data: {
        designId: design.id,
        mediumId: medium.id,
        slug,
        title,
        description: `${medium.description} Staff-approved NLMSF artwork. After printing and shipping costs, proceeds support LMS research.`,
        priceCents: medium.priceCents,
        colorsJson: JSON.stringify(chosen),
        published: publish,
      },
      include: { design: true },
    });
    listings.push(toListingDto(listing));
  }

  if (!listings.length) {
    return NextResponse.json({ error: "No valid merch types or colors were selected." }, { status: 400 });
  }

  return NextResponse.json({ listings });
}
