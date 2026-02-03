"use client";

import { useState, useEffect } from "react";

type Entry = {
  id: string;
  title: string;
  summary: string;
  url: string;
  display_date: string;
  type: string;
};

type Data = {
  latestSnapshot: Entry | null;
  latestNewsletter: Entry | null;
};

const TITLE = "Recent Update";

export default function RecentUpdates() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/community-news")
      .then((res) => res.json())
      .then((d: Data) => setData(d))
      .catch(() => setData({ latestSnapshot: null, latestNewsletter: null }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section
        className="max-w-[1200px] mx-auto px-8 pb-8"
        aria-label="Recent updates"
      >
        <div className="mt-6 py-5 px-6 rounded-2xl bg-gray-50 border border-gray-200">
          <p className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl py-6 px-6 text-center text-slate-600 m-0 text-[0.95rem]">
            Loading recent updates…
          </p>
        </div>
      </section>
    );
  }

  const hasNewsletter = data?.latestNewsletter != null;
  const hasSnapshot = data?.latestSnapshot != null;
  if (!hasNewsletter && !hasSnapshot) {
    return (
      <section
        className="max-w-[1200px] mx-auto px-8 pb-8"
        aria-label="Recent updates"
      >
        <div className="mt-6 py-5 px-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="m-0 mb-3 text-base font-bold uppercase tracking-[0.06em] text-gray-600">
            {TITLE}
          </h3>
          <p className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl py-6 px-6 text-center text-slate-600 m-0 text-[0.95rem]">
            Recent updates will appear here once published.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="max-w-[1200px] mx-auto px-8 pb-8"
      aria-label="Recent updates"
    >
      <div className="mt-6 py-5 px-6 rounded-2xl bg-gray-50 border border-gray-200">
        <h3 className="m-0 mb-3 text-base font-bold uppercase tracking-[0.06em] text-gray-600">
          {TITLE}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hasNewsletter && (
            <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#7e22ce] pt-0.5">
                Newsletter
              </div>
              <div className="flex flex-col gap-0.5">
                <a
                  href={data!.latestNewsletter!.url}
                  className="no-underline text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[0.95rem] font-semibold hover:underline">
                    {data!.latestNewsletter!.title}
                  </span>
                </a>
                <span className="text-[0.8rem] text-gray-500">
                  {data!.latestNewsletter!.display_date}
                </span>
                <p className="m-0 text-[0.8rem] text-gray-600">
                  {data!.latestNewsletter!.summary}
                </p>
                <a
                  href={data!.latestNewsletter!.url}
                  className="text-[0.85rem] font-semibold text-[#7e22ce] no-underline mt-1 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full newsletter →
                </a>
              </div>
            </div>
          )}
          {hasSnapshot && (
            <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#7e22ce] pt-0.5">
                Snapshot
              </div>
              <div className="flex flex-col gap-0.5">
                <a
                  href={data!.latestSnapshot!.url}
                  className="no-underline text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[0.95rem] font-semibold hover:underline">
                    {data!.latestSnapshot!.title}
                  </span>
                </a>
                <span className="text-[0.8rem] text-gray-500">
                  {data!.latestSnapshot!.display_date}
                </span>
                <p className="m-0 text-[0.8rem] text-gray-600">
                  {data!.latestSnapshot!.summary}
                </p>
                <a
                  href={data!.latestSnapshot!.url}
                  className="text-[0.85rem] font-semibold text-[#7e22ce] no-underline mt-1 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full snapshot →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
