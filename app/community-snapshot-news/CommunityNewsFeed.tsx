"use client";

import { useState, useMemo } from "react";

const INITIAL_PER_YEAR = 8;
const NLMSF_PURPLE = "#7e22ce";
const NLMSF_INDIGO = "#4338ca";
const NLMSF_TEAL = "#0d9488";
const NLMSF_PINK = "#ec4899";

export type FeedEntry = {
  id: string;
  title: string;
  summary: string;
  url: string;
  display_date: string;
  year: string;
};

type Props = {
  snapshots: FeedEntry[];
  newsTracker: FeedEntry[];
};

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

export default function CommunityNewsFeed({ snapshots, newsTracker }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({});

  const snapshotsByYear = useMemo(() => groupByYear(snapshots), [snapshots]);
  const newsTrackerByYear = useMemo(() => groupByYear(newsTracker), [newsTracker]);
  const snapshotYears = Object.keys(snapshotsByYear).sort((a, b) => Number(b) - Number(a));

  const toggleViewMore = (year: string) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const hasSnapshots = snapshots.length > 0;
  const hasNewsTracker = newsTracker.length > 0;

  return (
    <div className="font-[Inter,sans-serif] text-slate-900">
      {/* Snapshot Feed */}
      <div className="nlmsf-snapshot-feed mb-12">
        {!hasSnapshots ? (
          <div
            className="nlmsf-empty-state rounded-2xl border-2 border-dashed border-indigo-200 bg-slate-50 px-8 py-8 text-center text-slate-600"
            role="status"
          >
            Community Snapshots will appear here once published.
          </div>
        ) : (
          <>
            <div className="snapshot-filter mb-10 flex flex-wrap items-center justify-center gap-4">
              <span className="snapshot-filter-label font-semibold text-gray-700">
                Filter by Year:
              </span>
              <button
                type="button"
                onClick={() => setSelectedYear("all")}
                className={`snapshot-filter-btn rounded-full px-6 py-2 font-semibold transition-all duration-200 ${
                  selectedYear === "all"
                    ? "border-[#7e22ce] text-white shadow-lg"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#7e22ce] hover:text-white"
                }`}
                style={
                  selectedYear === "all"
                    ? {
                        background: `linear-gradient(135deg, ${NLMSF_PURPLE}, ${NLMSF_INDIGO})`,
                        borderWidth: 2,
                        boxShadow: "0 8px 24px rgba(67, 56, 202, 0.25)",
                      }
                    : { borderWidth: 2 }
                }
              >
                All
              </button>
              {snapshotYears.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setSelectedYear(y)}
                  className={`snapshot-filter-btn rounded-full px-6 py-2 font-semibold transition-all duration-200 ${
                    selectedYear === y
                      ? "border-[#7e22ce] text-white shadow-lg"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#7e22ce] hover:text-white"
                  }`}
                  style={
                    selectedYear === y
                      ? {
                          background: `linear-gradient(135deg, ${NLMSF_PURPLE}, ${NLMSF_INDIGO})`,
                          borderWidth: 2,
                          boxShadow: "0 8px 24px rgba(67, 56, 202, 0.25)",
                        }
                      : { borderWidth: 2 }
                  }
                >
                  {y}
                </button>
              ))}
            </div>

            {(selectedYear === "all" ? snapshotYears : [selectedYear]).map((year) => {
              const items = snapshotsByYear[year];
              if (!items?.length) return null;
              return (
                <div
                  key={year}
                  id={year}
                  className="snapshot-year mb-12 scroll-mt-24"
                  data-year-section={year}
                >
                  <h3
                    className="snapshot-year-title mb-6 text-center text-2xl font-bold"
                    style={{
                      background: "linear-gradient(to right, #059669, #0891b2)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {year}
                  </h3>
                  <div className="snapshots-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {items.map((item) => (
                      <article
                        key={item.id}
                        className="snapshot-card relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.15)]"
                        data-year={year}
                      >
                        <div
                          className="absolute left-0 right-0 top-0 h-1"
                          style={{
                            background: "linear-gradient(90deg, #7e22ce, #4338ca, #0891b2)",
                          }}
                          aria-hidden
                        />
                        <span
                          className="snapshot-date mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
                          style={{
                            background: "linear-gradient(135deg, #7e22ce, #a855f7)",
                          }}
                        >
                          {item.display_date}
                        </span>
                        <h3 className="snapshot-title mb-4 text-lg font-bold leading-snug text-slate-900">
                          {item.title}
                        </h3>
                        <div className="snapshot-preview mb-6 text-slate-600 leading-relaxed">
                          <p className="m-0">{item.summary}</p>
                        </div>
                        <a
                          href={item.url}
                          className="snapshot-link inline-flex items-center gap-2 font-semibold text-[#7e22ce] no-underline transition-all hover:gap-3 hover:text-[#4338ca]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Update
                          <i className="fas fa-chevron-right text-xs" aria-hidden />
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* News Tracker */}
      <div className="nlmsf-news-tracker">
        {!hasNewsTracker ? (
          <div
            className="nlmsf-empty-state rounded-2xl border-2 border-dashed border-indigo-200 bg-slate-50 px-8 py-8 text-center text-slate-600"
            role="status"
          >
            News Tracker issues will appear here once published.
          </div>
        ) : (
          Object.entries(newsTrackerByYear).map(([year, items]) => {
            const initial = items.slice(0, INITIAL_PER_YEAR);
            const hidden = items.slice(INITIAL_PER_YEAR);
            const isExpanded = expandedYears[year];
            const showViewMore = hidden.length > 0;
            return (
              <section
                key={year}
                id={`year-${year}`}
                className="year-section mb-12 border-b border-slate-200 pb-8 last:border-b-0"
              >
                <h3 className="mb-6 text-2xl font-bold text-indigo-950">
                  {year} NLMSF Newsletters
                </h3>
                <div className="newsletter-grid grid gap-4 sm:grid-cols-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                  {initial.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      className={`newsletter-card flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 no-underline text-inherit shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(67,56,202,0.15)] ${yearColorClass(year)} border-t-4`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="newsletter-header flex items-center justify-between gap-4">
                        <h4 className="newsletter-title text-base font-bold">{item.title}</h4>
                        <span className="newsletter-date text-sm font-semibold text-slate-600">
                          {item.display_date}
                        </span>
                      </div>
                      <p className="newsletter-description m-0 text-slate-600 leading-relaxed">
                        {item.summary}
                      </p>
                    </a>
                  ))}
                  {isExpanded &&
                    hidden.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        className={`newsletter-card flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 no-underline text-inherit shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(67,56,202,0.15)] ${yearColorClass(year)} border-t-4`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="newsletter-header flex items-center justify-between gap-4">
                          <h4 className="newsletter-title text-base font-bold">{item.title}</h4>
                          <span className="newsletter-date text-sm font-semibold text-slate-600">
                            {item.display_date}
                          </span>
                        </div>
                        <p className="newsletter-description m-0 text-slate-600 leading-relaxed">
                          {item.summary}
                        </p>
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
          })
        )}
      </div>
    </div>
  );
}
