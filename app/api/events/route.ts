import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

// ET offset: UTC = ET + 5 (no DST for simplicity)
function etToUtc(dateStr: string, timeStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [h, min] = timeStr.split(":").map(Number);
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1, (h ?? 0) + 5, min ?? 0, 0));
}

export async function GET() {
  const now = new Date();
  type EventRecord = { eventAt: Date };
  const all = (await prisma.event.findMany({
    where: { showOnHomepage: true },
    orderBy: { eventAt: "desc" },
  })) as EventRecord[];
  const upcoming = all.filter((e) => e.eventAt >= now).sort((a, b) => a.eventAt.getTime() - b.eventAt.getTime());
  const past = all.filter((e) => e.eventAt < now);
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

  const eventAt = etToUtc(eventDate, eventTime);

  const event = await prisma.event.create({
    data: {
      title,
      eventDate,
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
