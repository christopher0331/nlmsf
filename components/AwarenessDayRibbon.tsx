"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AwarenessDayRibbon() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div
      className="relative z-[210] w-full overflow-hidden border-b-2 border-[#fbbf24]/60 bg-gradient-to-r from-[#312e81] via-[#6a3ea1] to-[#047857] text-white shadow-[0_4px_14px_rgba(67,56,202,0.35)]"
      role="region"
      aria-label="National LMS Awareness Day"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.06) 8px, rgba(255,255,255,0.06) 16px)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:flex-row sm:gap-4 sm:py-3.5">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 ring-2 ring-[#fbbf24]/70 shadow-sm">
            <i className="fas fa-ribbon text-base text-[#fde68a]" aria-hidden />
          </span>
          <p className="m-0 text-sm font-medium leading-snug sm:text-base">
            <span className="mr-1.5 inline-flex items-center rounded-full bg-[#fbbf24] px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide text-[#312e81] shadow-sm sm:text-sm">
              July 15
            </span>
            National LMS Awareness Day
          </p>
        </div>
        <Link
          href="/get-involved"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#4338ca] shadow-md transition hover:-translate-y-0.5 hover:bg-[#fef3c7] hover:text-[#312e81] hover:shadow-lg"
        >
          Get involved throughout the year
          <i className="fas fa-arrow-right text-xs" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
