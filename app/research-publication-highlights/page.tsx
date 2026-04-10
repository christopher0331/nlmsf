import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { YEARS, TYPE_STYLES, type Publication, type PubType } from "./data";
import AISummaryButton from "@/components/AISummaryButton";

function isAISummaryUrl(url: string) {
  return (
    url.includes("pubmed.ncbi.nlm.nih.gov") ||
    url.includes("ncbi.nlm.nih.gov") ||
    url.includes("clinicaltrials.gov")
  );
}

export const metadata: Metadata = {
  title: "Research Publication Highlights | NLMSF",
  description:
    "A curated collection of key leiomyosarcoma research publications, clinical trials, and scientific updates organized by year.",
};

function PubCard({ pub }: { pub: Publication }) {
  const showAI = isAISummaryUrl(pub.url);
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-1 p-5"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_STYLES[pub.type as PubType]}`}
          >
            {pub.type}
          </span>
          {pub.date && (
            <span className="text-xs text-slate-400 whitespace-nowrap">{pub.date}</span>
          )}
        </div>

        <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-indigo-700 transition-colors flex-1">
          {pub.title}
        </p>

        {pub.authors && (
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">{pub.authors}</p>
        )}
        {pub.journal && (
          <p className="text-xs text-slate-400 italic mt-1">{pub.journal}</p>
        )}
        {pub.note && (
          <div className="mt-3 flex items-start gap-1.5">
            <span className="shrink-0 text-[10px] bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold px-2 py-0.5 rounded-full">
              NOTE
            </span>
            <span className="text-[11px] text-slate-500 leading-relaxed">{pub.note}</span>
          </div>
        )}

        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:gap-2 transition-all">
          <span>View Publication</span>
          <i className="fas fa-arrow-right text-[10px]" aria-hidden />
        </div>
      </a>

      {showAI && (
        <div className="px-5 pb-4 pt-0 border-t border-slate-50">
          <AISummaryButton url={pub.url} title={pub.title} />
        </div>
      )}
    </div>
  );
}

export default function ResearchPublicationHighlightsPage() {
  const years = YEARS.map((y) => y.year);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e1b4b] to-[#4338ca] text-white py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/nlmsf_logo_no_background-removebg-preview.png"
              alt="National Leiomyosarcoma Foundation Logo"
              width={200}
              height={72}
              className="brightness-0 invert"
              priority
            />
          </div>
          <div className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Research Publication Updates
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            Research Publication Highlights
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed">
            A curated collection of key LMS research publications, clinical trials, reviews, and scientific
            updates — organized by year for easy reference.
          </p>
        </div>
      </section>

      {/* Featured */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-start gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 hover:shadow-md transition"
        >
          <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <i className="fas fa-star text-white text-sm" aria-hidden />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Featured Publication</p>
            <p className="font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
              NLMSF-SPAEN Publication on Evidence-Based Unmet Needs in LMS Research and Treatment
            </p>
            <p className="text-xs text-slate-500 mt-1 italic">PMC Article — PMC7924026</p>
          </div>
          <span className="text-xs font-semibold text-indigo-600 whitespace-nowrap flex items-center gap-1 group-hover:gap-2 transition-all mt-1">
            View <i className="fas fa-arrow-right text-[10px]" aria-hidden />
          </span>
        </a>
      </div>

      {/* Year Nav */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm mt-8">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Jump to:</span>
          {years.map((yr) => (
            <a
              key={yr}
              href={`#year-${yr}`}
              className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition"
            >
              {yr}
            </a>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-2">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Legend:</span>
          {(Object.keys(TYPE_STYLES) as PubType[]).map((t) => (
            <span key={t} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_STYLES[t]}`}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Year Sections */}
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-14">
        {YEARS.map(({ year, pubs }) => (
          <section key={year} id={`year-${year}`} className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-extrabold text-[#1e1b4b]">{year}</h2>
              <div className="flex-1 h-px bg-indigo-100" />
              <span className="text-xs font-semibold text-slate-400 bg-slate-100 rounded-full px-3 py-1">
                {pubs.length} publication{pubs.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pubs.map((pub, i) => (
                <PubCard key={i} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 pb-12 text-center">
        <Link
          href="/general-sarcoma"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline text-sm"
        >
          <i className="fas fa-arrow-left text-xs" aria-hidden /> Back to General Sarcoma
        </Link>
      </div>
    </main>
  );
}
