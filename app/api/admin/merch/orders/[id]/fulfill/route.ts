import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { fulfillMerchOrder } from "@/lib/merch/fulfill";
import { toOrderDto } from "@/lib/merch/dto";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";

export async function POST(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;
  const prisma = await getMerchPrisma();
  const order = await prisma.merchOrder.findUnique({ where: { id } });
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });
  if (order.status === "pending") {
    return NextResponse.json({ error: "Order is not paid yet." }, { status: 400 });
  }
  try {
    const updated = await fulfillMerchOrder(id);
    return NextResponse.json(toOrderDto(updated));
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
