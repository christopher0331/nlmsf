import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { etToUtc, normalizeEventDateString } from "@/lib/event-datetime";

export async function GET() {
  const prisma = await getPrisma();
  const now = new Date();
  type EventRecord = { eventAt: Date };
  const all = (await prisma.event.findMany({
    where: { showOnHomepage: true },
    orderBy: { eventAt: "desc" },
  })) as EventRecord[];
  const upcoming = all
    .filter((e) => e.eventAt >= now)
    .sort((a, b) => a.eventAt.getTime() - b.eventAt.getTime())
    .map((e) => ({ ...e, eventDate: normalizeEventDateString(e.eventDate) }));
  const past = all
    .filter((e) => e.eventAt < now)
    .map((e) => ({ ...e, eventDate: normalizeEventDateString(e.eventDate) }));
  return NextResponse.json({ upcoming, past });
}

export async function POST(request: NextRequest) {
  const ok = await isAuthenticated();
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const {
    title,
    eventDate,
    eventTime,
    baseTimezone,
    zoomLink,
    description,
    showOnHomepage = true,
    showTimezones = "[\"ET\"]",
  } = body;
  if (!title || !eventDate || !eventTime) {
    return NextResponse.json({ error: "Missing title, eventDate, or eventTime" }, { status: 400 });
  }

  const normalizedDate = normalizeEventDateString(eventDate);
  const eventAt = etToUtc(normalizedDate, eventTime);

  const prisma = await getPrisma();
  const event = await prisma.event.create({
    data: {
      title,
      eventDate: normalizedDate,
      eventTime,
      baseTimezone: baseTimezone ?? "Eastern (ET)",
      eventAt,
      zoomLink: zoomLink ?? null,
      description: description ?? "",
      showOnHomepage: !!showOnHomepage,
      showTimezones: typeof showTimezones === "string" ? showTimezones : JSON.stringify(showTimezones ?? ["ET"]),
    },
  });
  return NextResponse.json(event);
}
