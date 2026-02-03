import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getTributeById,
  getDonors as getWordPressDonors,
  addDonor as addWordPressDonor,
  toDonorJson,
} from "@/lib/wordpress-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  if (isWordPressDbConfigured()) {
    try {
      const numId = parseInt(id, 10);
      if (Number.isNaN(numId)) return NextResponse.json({ error: "Tribute not found" }, { status: 404 });
      const tribute = await getTributeById(numId);
      if (!tribute) return NextResponse.json({ error: "Tribute not found" }, { status: 404 });
      const donors = await getWordPressDonors(numId);
      return NextResponse.json(donors.map(toDonorJson));
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const donors = await prisma.tributeDonor.findMany({
    where: { tributeId: id },
    orderBy: [{ displayOrder: "asc" }, { id: "asc" }],
  });
  return NextResponse.json(
    donors.map((d) => ({
      id: d.id,
      donor_name: d.donorName,
      donation_amount: d.donationAmount,
      donation_date: d.donationDate,
      is_anonymous: d.isAnonymous,
      message: d.message,
      display_order: d.displayOrder,
      created_at: d.createdAt.toISOString(),
    }))
  );
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id: tributeIdParam } = await params;

  let body: {
    donor_name?: string;
    donation_amount?: number;
    donation_date?: string;
    is_anonymous?: boolean;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const donorName = (body.donor_name ?? "").trim();
  if (!donorName) {
    return NextResponse.json({ error: "donor_name is required" }, { status: 400 });
  }

  if (isWordPressDbConfigured()) {
    try {
      const tributeId = parseInt(tributeIdParam, 10);
      if (Number.isNaN(tributeId)) return NextResponse.json({ error: "Tribute not found" }, { status: 404 });
      const tribute = await getTributeById(tributeId);
      if (!tribute) return NextResponse.json({ error: "Tribute not found" }, { status: 404 });
      const donationDate =
        body.donation_date && /^\d{4}-\d{2}-\d{2}$/.test(body.donation_date) ? body.donation_date : null;
      const donor = await addWordPressDonor({
        tribute_id: tributeId,
        donor_name: donorName,
        donation_amount: body.donation_amount != null ? Number(body.donation_amount) : null,
        donation_date: donationDate,
        is_anonymous: !!body.is_anonymous,
        message: (body.message ?? "").trim() || null,
      });
      if (!donor) return NextResponse.json({ error: "Failed to add donor" }, { status: 500 });
      return NextResponse.json(toDonorJson(donor));
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const tribute = await prisma.tribute.findUnique({ where: { id: tributeIdParam } });
  if (!tribute) return NextResponse.json({ error: "Tribute not found" }, { status: 404 });

  const donationDate =
    body.donation_date && /^\d{4}-\d{2}-\d{2}$/.test(body.donation_date)
      ? body.donation_date
      : null;

  const donor = await prisma.tributeDonor.create({
    data: {
      tributeId: tributeIdParam,
      donorName,
      donationAmount: body.donation_amount != null ? Number(body.donation_amount) : null,
      donationDate,
      isAnonymous: !!body.is_anonymous,
      message: (body.message ?? "").trim() || null,
    },
  });

  return NextResponse.json({
    id: donor.id,
    donor_name: donor.donorName,
    donation_amount: donor.donationAmount,
    donation_date: donor.donationDate,
    is_anonymous: donor.isAnonymous,
    message: donor.message,
    display_order: donor.displayOrder,
    created_at: donor.createdAt.toISOString(),
  });
}
