import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import {
  isWordPressDbConfigured,
  isWordPressConnectionError,
  getDonors,
  setDonorDisplayOrder,
} from "@/lib/wordpress-db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  let body: { direction?: string; tribute_id?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (isWordPressDbConfigured()) {
    try {
      const donorId = parseInt(id, 10);
      if (Number.isNaN(donorId)) return NextResponse.json({ error: "Donor not found" }, { status: 404 });
      const tributeId = body.tribute_id ? parseInt(body.tribute_id, 10) : null;
      if (tributeId == null || Number.isNaN(tributeId)) return NextResponse.json({ error: "tribute_id required for WordPress" }, { status: 400 });
      const all = await getDonors(tributeId);
      const idx = all.findIndex((d) => d.id === donorId);
      if (idx < 0) return NextResponse.json({ error: "Donor not in list" }, { status: 400 });
      const direction = (body.direction ?? "up").toLowerCase();
      const newIdx = direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= all.length) {
        return NextResponse.json({ ok: true, message: "Already at boundary" });
      }
      const reordered = [...all];
      const [removed] = reordered.splice(idx, 1);
      reordered.splice(newIdx, 0, removed);
      for (let i = 0; i < reordered.length; i++) {
        await setDonorDisplayOrder(reordered[i].id, i);
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  const donor = await prisma.tributeDonor.findUnique({ where: { id } });
  if (!donor) return NextResponse.json({ error: "Donor not found" }, { status: 404 });

  const tributeId = body.tribute_id ?? donor.tributeId;
  type TributeDonorRecord = { id: string };
  const all = (await prisma.tributeDonor.findMany({
    where: { tributeId },
    orderBy: [{ displayOrder: "asc" }, { id: "asc" }],
  })) as TributeDonorRecord[];
  const idx = all.findIndex((d) => d.id === id);
  if (idx < 0) return NextResponse.json({ error: "Donor not in list" }, { status: 400 });

  const direction = (body.direction ?? "up").toLowerCase();
  const newIdx = direction === "up" ? idx - 1 : idx + 1;
  if (newIdx < 0 || newIdx >= all.length) {
    return NextResponse.json({ ok: true, message: "Already at boundary" });
  }

  const reordered = [...all];
  const [removed] = reordered.splice(idx, 1);
  reordered.splice(newIdx, 0, removed);

  await prisma.$transaction(
    reordered.map((d, i) =>
      prisma.tributeDonor.update({
        where: { id: d.id },
        data: { displayOrder: i },
      })
    )
  );

  return NextResponse.json({ ok: true });
}
