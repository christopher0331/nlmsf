"use client";

import { useState, useEffect, useRef } from "react";

function GeminiStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        d="M14 2C14 2 15.5 9.5 20 14C15.5 18.5 14 26 14 26C14 26 12.5 18.5 8 14C12.5 9.5 14 2 14 2Z"
        fill="url(#gemini-grad)"
      />
      <path
        d="M2 14C2 14 9.5 12.5 14 8C18.5 12.5 26 14 26 14C26 14 18.5 15.5 14 20C9.5 15.5 2 14 2 14Z"
        fill="url(#gemini-grad)"
        opacity="0.85"
      />
    </svg>
  );
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

interface Props {
  url: string;
  title: string;
}

export default function AISummaryButton({ url, title }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  async function handleOpen() {
    setOpen(true);
    if (summary) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, title }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Unknown error");
      setSummary(data.summary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleOpen(); }}
        className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-all"
        title="Get a plain-language AI summary of this publication"
      >
        <GeminiStar className="w-3.5 h-3.5 shrink-0" />
        Get AI Summary
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Modal header */}
            <div className="flex items-start gap-3 px-6 pt-5 pb-4 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
              <div className="shrink-0 w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <GeminiStar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-0.5">
                  AI Plain-Language Summary
                </p>
                <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">{title}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 text-slate-400 hover:text-slate-600 transition mt-0.5"
                aria-label="Close"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {loading && (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-violet-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-violet-500 border-t-transparent animate-spin" />
                    <div className="absolute inset-2">
                      <GeminiStar className="w-full h-full" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-slate-700">Generating summary…</p>
                    <p className="text-xs text-slate-400 mt-1">Reading the research and translating it for you</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                  <strong>Error:</strong> {error}
                </div>
              )}

              {summary && !loading && (
                <div className="prose prose-sm prose-slate max-w-none">
                  <div
                    className="text-slate-700 leading-relaxed space-y-4 [&_strong]:text-slate-900 [&_strong]:font-bold"
                    dangerouslySetInnerHTML={{
                      __html: `<p>${parseMarkdown(summary)}</p>`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
              <p className="text-[10px] text-slate-400 leading-snug max-w-xs">
                Generated by Gemini AI. This is a plain-language interpretation, not medical advice. Always consult your care team.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
              >
                Read Full Paper
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                  <path d="M6.22 8.72a.75.75 0 001.06 1.06l5.22-5.22v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69L6.22 8.72z" />
                  <path d="M3.5 6.75a.75.75 0 00-1.5 0v6a.75.75 0 00.75.75h6a.75.75 0 000-1.5H3.5v-5.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
