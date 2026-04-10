import Link from "next/link";
import AISummaryButton from "@/components/AISummaryButton";

const TRIAL_URL = "https://clinicaltrials.gov/study/NCT06975293";
const TRIAL_TITLE =
  "STC-15 Phase 2 Study in Leiomyosarcoma and Liposarcoma (NCT06975293) — Storm Therapeutics METTL3 Inhibitor";

export default function StormTrialAlert() {
  return (
    <section className="w-full bg-white border-y border-slate-100 py-8 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-md overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow">
                <i className="fas fa-flask text-white text-xl" aria-hidden />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Badge + title */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Now Recruiting
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Clinical Trial Alert
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-slate-900 leading-snug mb-2">
                  Storm Therapeutics STC-15 — Phase 2 Clinical Trial
                </h2>
                <p className="text-xs font-semibold text-green-700 mb-3">
                  NCT06975293 &nbsp;·&nbsp; Leiomyosarcoma &amp; Liposarcoma
                </p>

                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  Storm Therapeutics is <strong>actively enrolling patients</strong> with leiomyosarcoma
                  (uterine &amp; non-uterine) and liposarcoma into this Phase 2 study of{" "}
                  <strong>STC-15</strong>, a first-in-class oral METTL3 inhibitor. STC-15 targets the
                  biological process that drives cancer cell formation — a completely new mechanism for
                  treating LMS. Trial sites are now open across the United States.
                </p>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={TRIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition"
                  >
                    <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    View Trial on ClinicalTrials.gov
                  </a>
                  <Link
                    href="/storm-therapeutics-stc15"
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-green-300 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition"
                  >
                    <i className="fas fa-info-circle text-green-600 text-xs" aria-hidden />
                    Learn More About This Trial
                  </Link>
                  <AISummaryButton url={TRIAL_URL} title={TRIAL_TITLE} variant="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
