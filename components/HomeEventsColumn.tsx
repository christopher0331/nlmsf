"use client";

import { useState, useEffect } from "react";

type EventItem = {
  id: string;
  title: string;
  eventDate: string;
  eventTime: string;
  baseTimezone: string;
  zoomLink: string | null;
  description: string;
  recordingUrl: string | null;
  eventAt: string;
};

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function formatDay(dateStr: string): { month: string; day: string } {
  const [y, m, d] = dateStr.split("-").map(Number);
  return {
    month: MONTHS[(m ?? 1) - 1] ?? "JAN",
    day: String(d ?? 1),
  };
}

function formatDateTime(dateStr: string, timeStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  const dayNum = date.getDate();
  const year = date.getFullYear();
  let [h, min] = (timeStr || "17:00").split(":").map(Number);
  const am = h < 12;
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  const time = `${h}:${String(min ?? 0).padStart(2, "0")} ${am ? "AM" : "PM"} ET`;
  return `${day}, ${month} ${dayNum}, ${year} · ${time}`;
}

export default function HomeEventsColumn() {
  const [upcoming, setUpcoming] = useState<EventItem[]>([]);
  const [past, setPast] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: { upcoming: EventItem[]; past: EventItem[] }) => {
        setUpcoming(data.upcoming ?? []);
        setPast(data.past ?? []);
      })
      .catch(() => {
        setUpcoming([]);
        setPast([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-6">
        <div className="p-4 text-center text-gray-500 text-sm">Loading events…</div>
      </div>
    );
  }

  const sectionTitle =
    "text-xl font-bold text-violet-700 m-0 mb-3 flex items-center gap-2 pb-2 border-b-2 border-violet-700";
  const dateBlock =
    "shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-violet-700 to-violet-600 text-white flex flex-col items-center justify-center font-bold";
  const cardBase =
    "flex gap-4 bg-white rounded-[10px] border border-gray-200 p-4 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border-l-4 border-l-violet-700";
  const btnBase =
    "inline-flex items-center gap-1.5 py-1.5 px-3 bg-gradient-to-br from-violet-700 to-violet-600 text-white text-[0.8rem] font-semibold no-underline rounded-full mt-1 transition-opacity duration-200 hover:opacity-90";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className={sectionTitle}>
          <span className="text-lg" aria-hidden>📅</span>
          Upcoming Events
        </h2>
        <div className="bg-[#f8f5fb] rounded-xl border border-gray-200 p-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
          {upcoming.length === 0 ? (
            <div className="text-center py-8 px-4 text-gray-500 text-[0.95rem]">
              <div className="text-4xl mb-3 opacity-60" aria-hidden>📅</div>
              <p className="my-1">No upcoming events at this time.</p>
              <p className="my-1">Check back soon for new events and opportunities!</p>
            </div>
          ) : (
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
              {upcoming.map((ev) => (
                <li key={ev.id} className={cardBase}>
                  <div className={dateBlock}>
                    <span className="text-[0.65rem] uppercase tracking-wider leading-tight">
                      {formatDay(ev.eventDate).month}
                    </span>
                    <span className="text-[1.35rem] leading-tight">{formatDay(ev.eventDate).day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[0.95rem] font-bold text-gray-800 m-0 mb-1.5 uppercase tracking-wide leading-snug">
                      {ev.title}
                    </h3>
                    <p className="text-[0.8rem] text-gray-500 m-0 mb-2 flex items-center gap-1.5">
                      <span className="text-xs" aria-hidden>🕐</span>
                      {formatDateTime(ev.eventDate, ev.eventTime)}
                    </p>
                    <p className="text-[0.85rem] text-gray-600 m-0 mb-2 leading-snug">{ev.description}</p>
                    {ev.zoomLink && (
                      <a href={ev.zoomLink} target="_blank" rel="noopener noreferrer" className={btnBase}>
                        Register
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        <h2 className={`${sectionTitle} mt-2`}>
          <span className="text-lg" aria-hidden>↩</span>
          Recent Recordings
        </h2>
        {past.length === 0 ? (
          <p className="p-4 text-gray-500 text-sm m-0">No recordings yet.</p>
        ) : (
          <ul className="list-none m-0 p-0 flex flex-col gap-4 bg-[#f8f5fb] rounded-xl border border-gray-200 p-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
            {past.slice(0, 5).map((ev) => (
              <li key={ev.id} className={cardBase}>
                <div className={dateBlock}>
                  <span className="text-[0.65rem] uppercase tracking-wider leading-tight">
                    {formatDay(ev.eventDate).month}
                  </span>
                  <span className="text-[1.35rem] leading-tight">{formatDay(ev.eventDate).day}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.95rem] font-bold text-gray-800 m-0 mb-1.5 uppercase tracking-wide leading-snug">
                    {ev.title}
                  </h4>
                  <p className="text-[0.8rem] text-gray-500 m-0 mb-2 flex items-center gap-1.5">
                    <span className="text-xs" aria-hidden>🕐</span>
                    {formatDateTime(ev.eventDate, ev.eventTime)}
                  </p>
                  <p className="text-[0.85rem] text-gray-600 m-0 mb-2 leading-snug">{ev.description}</p>
                  {ev.recordingUrl ? (
                    <a href={ev.recordingUrl} target="_blank" rel="noopener noreferrer" className={btnBase}>
                      <span className="text-[0.7rem]" aria-hidden>▶</span>
                      Watch recording
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-gradient-to-br from-violet-700 to-violet-600 text-white text-[0.8rem] font-semibold rounded-full mt-1">
                      Video coming soon
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
