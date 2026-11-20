/**
 * Month-by-month copy for the top awareness banner.
 *
 * Edit this file to change a month's message, link, or source. Months are 1–12.
 * The banner picks the row for the visitor's local date in the browser, so a
 * static/ISR build does not need a redeploy when the month changes.
 *
 * `{date}` is replaced with a long date (for example "February 28, 2026")
 * computed from `dateRule` and the visitor's year:
 * - `last-day-of-february` — Rare Disease Day (Feb 28, or Feb 29 in a leap year)
 * - `first-sunday-of-june` — National Cancer Survivors Day
 *
 * Leave `source` unset when the month uses a general NLMSF message because no
 * observance that month clearly fits leiomyosarcoma, sarcoma, cancer,
 * rare disease, or caregivers. `editorNote` is for editors only and is never
 * shown on the site.
 *
 * Preview another date locally or on a deploy preview by adding
 * `?awareness=YYYY-MM-DD` (client-side only; ignored when the value is not a
 * real calendar date).
 */

export type AwarenessDateRule = "last-day-of-february" | "first-sunday-of-june";

export type AwarenessSource = {
  name: string;
  url: string;
};

export type AwarenessMonth = {
  month: number;
  /** Short name for the banner's accessible label. */
  label: string;
  /** Sentence shown in the banner. May include the `{date}` token. */
  text: string;
  /** Internal NLMSF path the banner links to. */
  href: string;
  dateRule?: AwarenessDateRule;
  source?: AwarenessSource;
  editorNote: string;
};

export type ResolvedAwareness = {
  month: number | null;
  label: string;
  text: string;
  href: string;
};

export const AWARENESS_FALLBACK: ResolvedAwareness = {
  month: null,
  label: "National Leiomyosarcoma Foundation",
  text: "The National Leiomyosarcoma Foundation supports LMS patients, caregivers, and research.",
  href: "/donate",
};

export const AWARENESS_MONTHS: AwarenessMonth[] = [
  {
    month: 1,
    label: "National Leiomyosarcoma Foundation",
    text: "The NLMSF supports leiomyosarcoma patients, families, and research every month. Donate to keep that work going.",
    href: "/donate",
    editorNote:
      "General NLMSF message. AACR's January observance is Cervical Cancer Awareness Month, which is not an LMS, sarcoma, rare-disease, or caregiver fit.",
  },
  {
    month: 2,
    label: "Rare Disease Day",
    text: "Rare Disease Day is {date}. Leiomyosarcoma is a rare cancer. Learn what LMS is and how research helps.",
    href: "/what-is-leiomyosarcoma",
    dateRule: "last-day-of-february",
    source: {
      name: "National Organization for Rare Disorders (NORD), official U.S. partner for Rare Disease Day",
      url: "https://rarediseases.org/rare-disease-day/",
    },
    editorNote:
      "Rare Disease Day is the last day of February (Feb 28, or Feb 29 in a leap year). AACR also lists National Cancer Prevention Month in February; this banner follows the rare-disease anchor because LMS is a rare cancer.",
  },
  {
    month: 3,
    label: "National Leiomyosarcoma Foundation",
    text: "NLMSF helps people with leiomyosarcoma find treatment information, clinical trials, and a community that understands.",
    href: "/treatment-options",
    editorNote:
      "General NLMSF message. AACR's March observances are Colorectal Cancer, Kidney Cancer, and Multiple Myeloma Awareness Months, which are not an LMS fit.",
  },
  {
    month: 4,
    label: "National Cancer Control Month",
    text: "April is National Cancer Control Month, a national call to support cancer education, care, and research.",
    href: "/mission",
    source: {
      name: "36 U.S.C. § 103 (Cancer Control Month); White House presidential message, April 7, 2026",
      url: "https://uscode.house.gov/us/usc/t36/s103/",
    },
    editorNote:
      "Federal observance requesting a presidential proclamation each April. AACR's site-specific April months (esophageal, head and neck, testicular) are not an LMS fit, so the banner uses Cancer Control Month.",
  },
  {
    month: 5,
    label: "National Cancer Research Month",
    text: "May is National Cancer Research Month. See the leiomyosarcoma research NLMSF has funded.",
    href: "/research-projects-funded",
    source: {
      name: "American Association for Cancer Research (AACR)",
      url: "https://www.aacr.org/patients-caregivers/awareness-months/national-cancer-research-month/",
    },
    editorNote:
      "AACR initiated National Cancer Research Month. Other May observances (bladder, brain, melanoma) are not an LMS fit.",
  },
  {
    month: 6,
    label: "National Cancer Survivor Month",
    text: "June is National Cancer Survivor Month. National Cancer Survivors Day is {date}. Explore survivorship care planning.",
    href: "/survivorship-care-planning-2",
    dateRule: "first-sunday-of-june",
    source: {
      name: "AACR (National Cancer Survivor Month); National Cancer Survivors Day Foundation (first Sunday in June)",
      url: "https://www.aacr.org/patients-caregivers/awareness-months/national-cancer-survivor-month/",
    },
    editorNote:
      "The month is AACR's National Cancer Survivor Month. The dated observance is National Cancer Survivors Day, the first Sunday in June (ncsd.org).",
  },
  {
    month: 7,
    label: "Sarcoma and Bone Cancer Awareness Month",
    text: "July is Sarcoma and Bone Cancer Awareness Month. Leiomyosarcoma is a soft-tissue sarcoma. Learn about sarcoma and LMS.",
    href: "/general-sarcoma",
    source: {
      name: "AACR (Sarcoma and Bone Cancer Awareness Month); Sarcoma Foundation of America (Sarcoma Awareness Month)",
      url: "https://www.aacr.org/patients-caregivers/awareness-months/sarcoma-and-bone-cancer-awareness-month/",
    },
    editorNote:
      "AACR names July Sarcoma and Bone Cancer Awareness Month. The Sarcoma Foundation of America runs Sarcoma Awareness Month in July (curesarcoma.org/get-involved/sarcoma-awareness-month/).",
  },
  {
    month: 8,
    label: "National Leiomyosarcoma Foundation",
    text: "Find a sarcoma specialist, caregiver guidance, and education from the National Leiomyosarcoma Foundation.",
    href: "/find-a-sarcoma-specialist",
    editorNote:
      "General NLMSF message. The AACR cancer awareness calendar has no August observance.",
  },
  {
    month: 9,
    label: "Gynecologic Cancer Awareness Month",
    text: "September is Gynecologic Cancer Awareness Month. Uterine leiomyosarcoma is a rare gynecologic sarcoma. Read the NLMSF guide.",
    href: "/uterine-leiomyosarcoma-guide",
    source: {
      name: "Foundation for Women's Cancer (Gynecologic Cancer Awareness Month), official foundation of the Society of Gynecologic Oncology",
      url: "https://foundationforwomenscancer.org/gcam/about/",
    },
    editorNote:
      "FWC established Gynecologic Cancer Awareness Month and publishes a uterine leiomyosarcoma fact sheet. September also includes Childhood Cancer Awareness Month; gynecologic cancer is the closer fit because uterine LMS is a core NLMSF topic.",
  },
  {
    month: 10,
    label: "National Leiomyosarcoma Foundation",
    text: "Your gift supports leiomyosarcoma patients and the research NLMSF funds. Donate today.",
    href: "/donate",
    editorNote:
      "General NLMSF message. AACR's October observances are Breast Cancer Awareness Month and Liver Cancer Awareness Month, which are not an LMS fit.",
  },
  {
    month: 11,
    label: "National Family Caregivers Month",
    text: "November is National Family Caregivers Month. Caregivers are essential to LMS care. Find guidance and support.",
    href: "/caregivers-corner",
    source: {
      name: "Administration for Community Living (ACL), U.S. Department of Health and Human Services",
      url: "https://acl.gov/news-and-events/events-and-observances/nfcm",
    },
    editorNote:
      "National Family Caregivers Month is November, led nationally with ACL recognition. It is a month-long observance, not a single day.",
  },
  {
    month: 12,
    label: "National Leiomyosarcoma Foundation",
    text: "Stand with leiomyosarcoma patients and families. A gift to NLMSF supports research and programs of care.",
    href: "/donate",
    editorNote:
      "General NLMSF message. The AACR cancer awareness calendar lists no December observance.",
  },
];

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

export function observanceDate(rule: AwarenessDateRule, year: number): Date {
  if (rule === "last-day-of-february") {
    // Day 0 of March is the last calendar day of February, including leap day.
    return new Date(year, 2, 0);
  }
  const juneFirst = new Date(year, 5, 1);
  const weekday = juneFirst.getDay();
  const day = weekday === 0 ? 1 : 1 + (7 - weekday);
  return new Date(year, 5, day);
}

export function formatLongDate(date: Date): string {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function resolveAwareness(date: Date): ResolvedAwareness {
  const month = date.getMonth() + 1;
  const entry = AWARENESS_MONTHS.find((item) => item.month === month);
  if (!entry) return AWARENESS_FALLBACK;
  let text = entry.text;
  if (entry.dateRule) {
    text = text.replaceAll("{date}", formatLongDate(observanceDate(entry.dateRule, date.getFullYear())));
  }
  return {
    month: entry.month,
    label: entry.label,
    text,
    href: entry.href,
  };
}

/** Parse `?awareness=YYYY-MM-DD`. Returns null when the param is absent or invalid. */
export function readAwarenessPreviewDate(search: string): Date | null {
  const param = new URLSearchParams(search).get("awareness");
  if (!param || !/^\d{4}-\d{2}-\d{2}$/.test(param)) return null;
  const [year, month, day] = param.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}
