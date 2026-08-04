"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { FeedEntry } from "@/lib/community-news";

/** Homepage shows only the latest issue; older newsletters stay on /news-tracker. */
const PREVIEW_LIMIT = 1;

export default function HomeNewsTracker() {
  const [items, setItems] = useState<FeedEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/community-news?feed=full")
      .then((res) => res.json())
      .then((data: { newsTracker?: FeedEntry[] }) => {
        setItems((data.newsTracker ?? []).slice(0, PREVIEW_LIMIT));
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className="mt-6 rounded-xl border border-indigo-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
      aria-label="NLMSF News Tracker"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-[#7e22ce]">
            Newsletter Archive
          </p>
          <h2 className="m-0 mt-1 text-xl font-bold text-indigo-950">NLMSF News Tracker</h2>
          <p className="m-0 mt-1 text-sm text-slate-600">
            Latest issues from the LMS community
          </p>
        </div>
        <Link
          href="/news-tracker"
          className="shrink-0 text-sm font-semibold text-[#7e22ce] no-underline hover:underline"
        >
          View all
        </Link>
      </div>

      {loading ? (
        <p className="m-0 rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm text-slate-600">
          Loading newsletters…
        </p>
      ) : items.length === 0 ? (
        <p className="m-0 rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm text-slate-600">
          News Tracker issues will appear here once published.
        </p>
      ) : (
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-slate-200 border-t-4 border-t-[#7e22ce] bg-slate-50 p-4 no-underline text-inherit transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(67,56,202,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="m-0 text-[0.95rem] font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold text-slate-500">
                    {item.display_date}
                  </span>
                </div>
                <p className="m-0 mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {item.summary}
                </p>
                <span className="mt-2 inline-block text-sm font-semibold text-[#7e22ce]">
                  Read issue →
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
