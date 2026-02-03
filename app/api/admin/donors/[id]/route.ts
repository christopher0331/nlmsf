import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { isWordPressDbConfigured, isWordPressConnectionError, deleteDonor as deleteWordPressDonor } from "@/lib/wordpress-db";

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
      if (!Number.isNaN(numId)) await deleteWordPressDonor(numId);
      return NextResponse.json({ ok: true });
    } catch (err) {
      if (!isWordPressConnectionError(err)) throw err;
    }
  }

  await prisma.tributeDonor.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
