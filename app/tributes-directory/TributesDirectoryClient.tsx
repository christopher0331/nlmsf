"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

type Tribute = {
  id: string;
  name: string;
  slug: string;
  biography: string;
  image_url: string | null;
  created_at: string;
};

const BANNER_IMAGE = "https://media.nlmsf.org/wp-content/uploads/2025/10/people-scaled.jpg";

function stripHtml(html: string): string {
  if (typeof document === "undefined") {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent ?? div.innerText ?? "").trim();
}

function truncate(text: string, len: number): string {
  const s = stripHtml(text);
  if (s.length <= len) return s;
  return s.slice(0, len) + "...";
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return "";
  }
}

export default function TributesDirectoryClient() {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name-asc" | "name-desc" | "date-desc" | "date-asc">("name-asc");
  const [page, setPage] = useState(1);
  const perPage = 12;

  async function loadTributes() {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch("/api/tributes?published_only=1");
      const data = await res.json();
      if (!res.ok) {
        setLoadError(data?.error ?? "Unable to load tribute pages.");
        setTributes([]);
        return;
      }
      setTributes(Array.isArray(data) ? data : []);
    } catch (e) {
      setLoadError("Unable to load tribute pages. Please try again.");
      setTributes([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTributes();
  }, []);

  const filtered = [...tributes].filter((t) => {
    const term = search.toLowerCase().trim();
    if (!term) return true;
    return (
      t.name.toLowerCase().includes(term) ||
      stripHtml(t.biography).toLowerCase().includes(term)
    );
  });

  if (sort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
  else if (sort === "date-desc") filtered.sort((a, b) => (b.created_at > a.created_at ? 1 : -1));
  else filtered.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
      <header className="mb-10 text-center">
        <h1 className="mb-3 flex flex-col items-center gap-2 text-3xl font-bold text-gray-900 sm:flex-row sm:justify-center sm:gap-3 md:text-4xl">
          <i className="fas fa-heart text-[#7e22ce]" aria-hidden />
          Tribute Pages
        </h1>
        <p className="mx-auto max-w-[600px] text-lg text-gray-600">
          Honor and remember loved ones through our community tribute pages
        </p>
      </header>

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px] sm:min-w-[300px]">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden />
          <input
            type="text"
            placeholder="Search tribute pages..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full rounded-xl border-2 border-gray-200 bg-white py-3 pl-11 pr-4 text-base transition-[border-color,box-shadow] focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
          />
        </div>
        <div className="min-w-[200px]">
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value as typeof sort); setPage(1); }}
            className="w-full rounded-xl border-2 border-gray-200 bg-white py-3 px-4 text-base focus:border-[#7e22ce] focus:outline-none"
          >
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="date-desc">Most recent</option>
            <option value="date-asc">Oldest first</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-500">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-[#7e22ce]" />
          <p className="mt-4">Loading tribute pages...</p>
        </div>
      ) : loadError ? (
        <div className="rounded-xl border-2 border-red-200 bg-red-50 py-12 text-center text-red-800">
          <p className="font-medium">{loadError}</p>
          <button
            type="button"
            onClick={loadTributes}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      ) : pageItems.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white py-16 text-center text-gray-500">
          {filtered.length === 0 && tributes.length === 0 ? (
            <>
              <i className="fas fa-heart mb-4 text-5xl text-gray-300" aria-hidden />
              <h2 className="text-xl font-semibold text-gray-700">No tribute pages yet</h2>
              <p className="mt-2 max-w-md mx-auto">
                Tribute pages are added by staff in Admin. Once published, they will appear here.
              </p>
            </>
          ) : (
            <>
              <i className="fas fa-search mb-4 text-5xl text-gray-300" aria-hidden />
              <h2 className="text-xl font-semibold text-gray-700">No tribute pages found</h2>
              <p className="mt-1">Try adjusting your search or check back later.</p>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((t) => (
              <Link
                key={t.id}
                href={`/${t.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(126,34,206,0.15)] focus:outline-none focus:ring-2 focus:ring-[#7e22ce] focus:ring-offset-2"
              >
                <div className="relative h-[200px] overflow-hidden bg-[#f8fafc] sm:h-[250px]">
                  {t.image_url ? (
                    <Image
                      src={t.image_url}
                      alt={t.name}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      width={640}
                      height={360}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#7e22ce] to-[#4338ca] text-white">
                      <i className="fas fa-user-circle text-6xl opacity-80" aria-hidden />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-4 py-2 text-[#111827] font-semibold shadow-lg">
                      View Tribute <i className="fas fa-arrow-right text-sm" aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">{t.name}</h2>
                  <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-3">
                    {truncate(t.biography, 150)}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <i className="fas fa-calendar" aria-hidden />
                    {formatDate(t.created_at)}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-2 rounded-lg bg-[#7e22ce] px-4 py-2.5 font-semibold text-white transition hover:bg-[#6b21a8] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <i className="fas fa-chevron-left" aria-hidden /> Previous
              </button>
              <span className="text-sm font-medium text-gray-600">
                Page {page} of {totalPages} ({start + 1}–{Math.min(start + perPage, filtered.length)} of {filtered.length})
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="inline-flex items-center gap-2 rounded-lg bg-[#7e22ce] px-4 py-2.5 font-semibold text-white transition hover:bg-[#6b21a8] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Next <i className="fas fa-chevron-right" aria-hidden />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
