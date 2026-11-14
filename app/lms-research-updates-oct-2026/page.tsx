import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  RESEARCH_UPDATES_OCT_2026_BLOCKS,
  RESEARCH_UPDATES_OCT_2026_HEADING,
  RESEARCH_UPDATES_OCT_2026_LABEL,
  RESEARCH_UPDATES_OCT_2026_PATH,
  type ResearchUpdateBlock,
} from "@/lib/research-updates-oct-2026";

const PAGE_TITLE = "LMS Research Updates - Oct 2026 | NLMSF";
const PAGE_DESCRIPTION =
  "2025–2026 leiomyosarcoma (LMS) research and clinical trial updates: immunotherapy, combination therapies, biomarkers, and future research priorities.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `https://nlmsf.org${RESEARCH_UPDATES_OCT_2026_PATH}` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `https://nlmsf.org${RESEARCH_UPDATES_OCT_2026_PATH}`,
    type: "article",
  },
};

function ListItemText({ text }: { text: string }) {
  const idx = text.indexOf(":");
  if (idx > 0 && idx < 45) {
    return (
      <>
        <strong className="text-[#1e1b4b]">{text.slice(0, idx + 1)}</strong>
        {text.slice(idx + 1)}
      </>
    );
  }
  return <>{text}</>;
}

function renderBlocks(blocks: ResearchUpdateBlock[]) {
  const out: ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: number) => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${key}`} className="mb-6 list-disc space-y-2 pl-6 marker:text-indigo-500">
        {list.map((t, i) => (
          <li key={i}>
            <ListItemText text={t} />
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  blocks.forEach((b, i) => {
    if (b.type === "li") {
      list.push(b.text);
      return;
    }
    flush(i);
    switch (b.type) {
      case "h2":
        out.push(
          <h2 key={i} className="mb-4 mt-12 text-2xl font-extrabold text-[#1e1b4b] first:mt-0">
            {b.text}
          </h2>,
        );
        break;
      case "h3":
        out.push(
          <h3 key={i} className="mb-3 mt-8 text-lg font-bold text-indigo-800">
            {b.text}
          </h3>,
        );
        break;
      case "h4":
        out.push(
          <h4 key={i} className="mb-2 mt-6 text-base font-semibold text-slate-800">
            {b.text}
          </h4>,
        );
        break;
      case "note":
        out.push(
          <p
            key={i}
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
          >
            {b.text}
          </p>,
        );
        break;
      case "link":
        out.push(
          <p key={i} className="mb-6">
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-700 underline decoration-indigo-200 underline-offset-[3px] hover:decoration-indigo-700"
            >
              {b.text}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>,
        );
        break;
      default:
        out.push(
          <p key={i} className="mb-5">
            {b.text}
          </p>,
        );
    }
  });
  flush(blocks.length);
  return out;
}

export default function ResearchUpdatesOct2026Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      <section className="bg-gradient-to-r from-[#1e1b4b] to-[#4338ca] px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            {RESEARCH_UPDATES_OCT_2026_LABEL}
          </div>
          <h1 className="mb-0 text-3xl font-extrabold leading-tight md:text-4xl">
            {RESEARCH_UPDATES_OCT_2026_HEADING}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-12 text-[1.0625rem] leading-[1.8] text-slate-700">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
          {renderBlocks(RESEARCH_UPDATES_OCT_2026_BLOCKS)}
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-6 pb-12 text-center">
        <Link
          href="/research-publication-highlights/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" aria-hidden /> Research Publication Highlights
        </Link>
      </div>
    </main>
  );
}
