const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const MONTH_ABBREV = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"] as const;

/** Normalize stored/display dates to YYYY-MM-DD (calendar date, no timezone shift). */
export function normalizeEventDateString(dateStr: string): string {
  if (!dateStr) return "";
  const trimmed = dateStr.trim();

  const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

  const slash = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slash) {
    const [, mm, dd, yyyy] = slash;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  }

  return trimmed;
}

/** Parse YYYY-MM-DD as a local calendar date (noon avoids DST edge cases). */
export function parseEventLocalDate(dateStr: string): Date | null {
  const normalized = normalizeEventDateString(dateStr);
  const [y, m, d] = normalized.split("-").map(Number);
  if (!y || !m || !d || m < 1 || m > 12 || d < 1 || d > 31) return null;
  return new Date(y, m - 1, d, 12, 0, 0);
}

export function formatEventDayBadge(dateStr: string): { month: string; day: string } {
  const normalized = normalizeEventDateString(dateStr);
  const [y, m, d] = normalized.split("-").map(Number);
  return {
    month: MONTH_ABBREV[(m ?? 1) - 1] ?? "JAN",
    day: String(d ?? 1),
  };
}

export const US_EVENT_TIMEZONES = [
  { code: "ET", tz: "America/New_York", label: "Eastern" },
  { code: "CT", tz: "America/Chicago", label: "Central" },
  { code: "MT", tz: "America/Denver", label: "Mountain" },
  { code: "PT", tz: "America/Los_Angeles", label: "Pacific" },
] as const;

export type UsTimezoneCode = (typeof US_EVENT_TIMEZONES)[number]["code"];

function parseEventTimeParts(timeStr: string): { hour: number; minute: number } {
  const match = (timeStr || "17:00").trim().match(/^(\d{1,2}):(\d{2})/);
  return {
    hour: match ? Number(match[1]) : 17,
    minute: match ? Number(match[2]) : 0,
  };
}

/** Match a wall-clock time in America/New_York to a UTC instant (DST-aware). */
export function easternLocalToUtc(dateStr: string, timeStr: string): Date {
  const normalized = normalizeEventDateString(dateStr);
  const [y, m, d] = normalized.split("-").map(Number);
  const { hour, minute } = parseEventTimeParts(timeStr);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const matchesEastern = (utcMs: number) => {
    const parts = formatter.formatToParts(new Date(utcMs));
    const get = (type: Intl.DateTimeFormatPartTypes) =>
      Number(parts.find((p) => p.type === type)?.value);
    return (
      get("year") === y &&
      get("month") === m &&
      get("day") === d &&
      get("hour") === hour &&
      get("minute") === minute
    );
  };

  const candidates = [
    Date.UTC(y, m - 1, d, hour + 5, minute),
    Date.UTC(y, m - 1, d, hour + 4, minute),
  ];

  for (const candidate of candidates) {
    if (matchesEastern(candidate)) return new Date(candidate);
  }

  const base = Date.UTC(y, m - 1, d, hour + 5, minute);
  for (let deltaMin = -180; deltaMin <= 180; deltaMin += 15) {
    const candidate = base - deltaMin * 60_000;
    if (matchesEastern(candidate)) return new Date(candidate);
  }

  return new Date(base);
}

function formatTime12hInZone(utcMs: number, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(utcMs));
}

export function formatEventDateLine(dateStr: string): string {
  const date = parseEventLocalDate(dateStr);
  if (!date) return dateStr;

  const day = DAY_NAMES[date.getDay()];
  const month = MONTH_NAMES[date.getMonth()];
  const dayNum = date.getDate();
  const year = date.getFullYear();
  return `${day}, ${month} ${dayNum}, ${year}`;
}

export function formatEventTimezoneTimes(dateStr: string, timeStr: string): string[] {
  const utcMs = easternLocalToUtc(dateStr, timeStr).getTime();
  return US_EVENT_TIMEZONES.map(({ code, tz }) => `${formatTime12hInZone(utcMs, tz)} ${code}`);
}

export function parseShowTimezones(showTimezones: string | null | undefined): UsTimezoneCode[] {
  try {
    const parsed = JSON.parse(showTimezones ?? '["ET","CT","MT","PT"]');
    if (!Array.isArray(parsed)) return ["ET", "CT", "MT", "PT"];
    const allowed = new Set(US_EVENT_TIMEZONES.map((z) => z.code));
    const codes = parsed.filter((c): c is UsTimezoneCode => typeof c === "string" && allowed.has(c as UsTimezoneCode));
    return codes.length > 0 ? codes : ["ET", "CT", "MT", "PT"];
  } catch {
    return ["ET", "CT", "MT", "PT"];
  }
}

/** All US zones for homepage display so users can match Zoom to their local time. */
export function formatEventTimezoneTimesForDisplay(
  dateStr: string,
  timeStr: string,
  _showTimezones?: string | null
): { dateLine: string; times: { code: string; label: string; time: string }[] } {
  const utcMs = easternLocalToUtc(dateStr, timeStr).getTime();
  const times = US_EVENT_TIMEZONES.map(({ code, tz, label }) => ({
    code,
    label,
    time: formatTime12hInZone(utcMs, tz),
  }));
  return { dateLine: formatEventDateLine(dateStr), times };
}

export function formatEventDateTime(dateStr: string, timeStr: string): string {
  const { dateLine, times } = formatEventTimezoneTimesForDisplay(dateStr, timeStr);
  return `${dateLine} · ${times.map((t) => `${t.time} ${t.code}`).join(" · ")}`;
}

export function formatEventDateTimeAdmin(dateStr: string, timeStr: string): string {
  const { dateLine, times } = formatEventTimezoneTimesForDisplay(dateStr, timeStr);
  return `${dateLine} at ${times.map((t) => `${t.time} ${t.code}`).join(", ")}`;
}

/** Convert ET date + 24h time to UTC for sorting (DST-aware). */
export function etToUtc(dateStr: string, timeStr: string): Date {
  return easternLocalToUtc(dateStr, timeStr);
}

export function timeToInputValue(timeStr: string): string {
  if (!timeStr) return "17:00";
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})/);
  if (!match) return "17:00";
  return `${String(Number(match[1])).padStart(2, "0")}:${match[2]}`;
}
