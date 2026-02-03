"use client";

import { useMemo, useState } from "react";
import type { FeedEntry } from "@/lib/community-news";

const INITIAL_PER_YEAR = 8;
const NLMSF_PURPLE = "#7e22ce";
const NLMSF_INDIGO = "#4338ca";
const NLMSF_TEAL = "#0d9488";
const NLMSF_PINK = "#ec4899";

function groupByYear(entries: FeedEntry[]): Record<string, FeedEntry[]> {
  const out: Record<string, FeedEntry[]> = {};
  for (const e of entries) {
    if (!out[e.year]) out[e.year] = [];
    out[e.year].push(e);
  }
  const years = Object.keys(out).sort((a, b) => Number(b) - Number(a));
  const result: Record<string, FeedEntry[]> = {};
  for (const y of years) result[y] = out[y];
  return result;
}

function yearColorClass(year: string): string {
  const currentYear = new Date().getFullYear().toString();
  const lastYear = (new Date().getFullYear() - 1).toString();
  if (year >= currentYear) return "border-t-[#7e22ce]"; // purple
  if (year === lastYear) return "border-t-[#0d9488]"; // teal
  return "border-t-[#ec4899]"; // pink
}

type Props = {
  newsTracker: FeedEntry[];
};

export default function NewsTrackerFeed({ newsTracker }: Props) {
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({});
  const newsTrackerByYear = useMemo(() => groupByYear(newsTracker), [newsTracker]);
  const hasNewsTracker = newsTracker.length > 0;

  const toggleViewMore = (year: string) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  if (!hasNewsTracker) {
    return (
      <div
        className="nlmsf-empty-state rounded-2xl border-2 border-dashed border-indigo-200 bg-slate-50 px-8 py-8 text-center text-slate-600"
        role="status"
      >
        News Tracker issues will appear here once published.
      </div>
    );
  }

  return (
    <div className="nlmsf-news-tracker font-[Inter,sans-serif] text-slate-900">
      {Object.entries(newsTrackerByYear).map(([year, items]) => {
        const initial = items.slice(0, INITIAL_PER_YEAR);
        const hidden = items.slice(INITIAL_PER_YEAR);
        const isExpanded = expandedYears[year];
        const showViewMore = hidden.length > 0;

        return (
          <section key={year} id={`year-${year}`} className="year-section mb-12 border-b border-slate-200 pb-8 last:border-b-0">
            <h3 className="mb-6 text-2xl font-bold text-indigo-950">{year} NLMSF Newsletters</h3>
            <div
              className="newsletter-grid grid gap-4 sm:grid-cols-2"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
            >
              {initial.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`newsletter-card flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 no-underline text-inherit shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(67,56,202,0.15)] ${yearColorClass(
                    year
                  )} border-t-4`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="newsletter-header flex items-center justify-between gap-4">
                    <h4 className="newsletter-title text-base font-bold">{item.title}</h4>
                    <span className="newsletter-date text-sm font-semibold text-slate-600">{item.display_date}</span>
                  </div>
                  <p className="newsletter-description m-0 text-slate-600 leading-relaxed">{item.summary}</p>
                </a>
              ))}
              {isExpanded &&
                hidden.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={`newsletter-card flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 no-underline text-inherit shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(67,56,202,0.15)] ${yearColorClass(
                      year
                    )} border-t-4`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="newsletter-header flex items-center justify-between gap-4">
                      <h4 className="newsletter-title text-base font-bold">{item.title}</h4>
                      <span className="newsletter-date text-sm font-semibold text-slate-600">{item.display_date}</span>
                    </div>
                    <p className="newsletter-description m-0 text-slate-600 leading-relaxed">{item.summary}</p>
                  </a>
                ))}
            </div>
            {showViewMore && (
              <div className="view-more-container mt-4 text-center">
                <button
                  type="button"
                  onClick={() => toggleViewMore(year)}
                  className="view-more-button rounded-full border-0 px-6 py-2.5 font-semibold text-white transition-shadow hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${NLMSF_INDIGO}, ${NLMSF_PURPLE})`,
                    boxShadow: isExpanded ? "none" : "0 10px 24px rgba(67, 56, 202, 0.35)",
                  }}
                >
                  {isExpanded ? "Show Less" : "View More"}
                </button>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
