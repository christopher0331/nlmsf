import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { etToUtc, normalizeEventDateString } from "@/lib/event-datetime";

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
  const prisma = await getPrisma();
  const existing = await prisma.event.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (title !== undefined) update.title = title;
  if (eventDate !== undefined) update.eventDate = normalizeEventDateString(eventDate);
  if (eventTime !== undefined) update.eventTime = eventTime;
  if (baseTimezone !== undefined) update.baseTimezone = baseTimezone;
  if (zoomLink !== undefined) update.zoomLink = zoomLink;
  if (description !== undefined) update.description = description;
  if (showOnHomepage !== undefined) update.showOnHomepage = !!showOnHomepage;
  if (showTimezones !== undefined) update.showTimezones = typeof showTimezones === "string" ? showTimezones : JSON.stringify(showTimezones ?? ["ET"]);
  if (recordingUrl !== undefined) update.recordingUrl = recordingUrl;

  if (eventDate !== undefined || eventTime !== undefined) {
    const finalDate = update.eventDate ?? existing.eventDate;
    const finalTime = update.eventTime ?? existing.eventTime;
    update.eventAt = etToUtc(finalDate, finalTime);
  }

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
