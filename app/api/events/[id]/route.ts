import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

function etToUtc(dateStr: string, timeStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [h, min] = timeStr.split(":").map(Number);
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1, (h ?? 0) + 5, min ?? 0, 0));
}

export async function PATCH(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  const body = await _request.json();
  const { title, eventDate, eventTime, baseTimezone, zoomLink, description, showOnHomepage, showTimezones, recordingUrl } = body;

  const update: {
    title?: string;
    eventDate?: string;
    eventTime?: string;
    baseTimezone?: string;
    eventAt?: Date;
    zoomLink?: string | null;
    description?: string;
    showOnHomepage?: boolean;
    showTimezones?: string;
    recordingUrl?: string | null;
  } = {};
  if (title !== undefined) update.title = title;
  if (eventDate !== undefined) update.eventDate = eventDate;
  if (eventTime !== undefined) update.eventTime = eventTime;
  if (baseTimezone !== undefined) update.baseTimezone = baseTimezone;
  if (zoomLink !== undefined) update.zoomLink = zoomLink;
  if (description !== undefined) update.description = description;
  if (showOnHomepage !== undefined) update.showOnHomepage = !!showOnHomepage;
  if (showTimezones !== undefined) update.showTimezones = typeof showTimezones === "string" ? showTimezones : JSON.stringify(showTimezones ?? ["ET"]);
  if (recordingUrl !== undefined) update.recordingUrl = recordingUrl;
  if (eventDate && eventTime) update.eventAt = etToUtc(eventDate, eventTime);

  const prisma = await getPrisma();
  const event = await prisma.event.update({ where: { id }, data: update });
  return NextResponse.json(event);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = (await params).id;
  const prisma = await getPrisma();
  await prisma.event.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
