import Link from "next/link";

const JAMA_URL =
  "https://jamanetwork.com/journals/jamaoncology/article-abstract/2853976";

export default function JamaConsensusSpotlight() {
  return (
    <section
      className="bg-gradient-to-r from-[#1e1b4b] via-[#4c1d95] to-[#6b46c1] text-white"
      aria-label="Publication spotlight"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white ring-1 ring-white/25">
                <i className="fas fa-star text-[10px]" aria-hidden />
                Spotlight
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-violet-100">
                JAMA Oncology · September 10, 2026
              </span>
            </div>
            <h2 className="m-0 text-2xl font-extrabold leading-tight md:text-[1.75rem]">
              First international consensus on leiomyosarcoma care
            </h2>
            <p className="m-0 mt-2 text-base font-semibold text-violet-100">
              Management of Soft Tissue and Visceral Leiomyosarcomas
            </p>
            <p className="m-0 mt-3 text-sm leading-relaxed text-white/90 md:text-[0.95rem]">
              The Leiomyosarcoma Global Consensus Group — clinicians, researchers,
              and patient advocates, including the National Leiomyosarcoma
              Foundation — published the first international consensus on the
              diagnosis and management of soft tissue and visceral
              leiomyosarcoma. It sits alongside the 2021 NLMSF consensus paper
              in <em>Cancers</em>.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
            <a
              href={JAMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#4c1d95] no-underline shadow-md transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Read in JAMA Oncology
              <i className="fas fa-external-link-alt text-xs" aria-hidden />
            </a>
            <Link
              href="/international-research-roundtable#roundtable-publications"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/20"
            >
              Roundtable publications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
