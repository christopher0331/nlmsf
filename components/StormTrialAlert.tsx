import Link from "next/link";
import AISummaryButton from "@/components/AISummaryButton";

const TRIAL_URL = "https://clinicaltrials.gov/study/NCT06975293";
const TRIAL_TITLE =
  "STC-15 Phase 2 Study in Leiomyosarcoma and Liposarcoma (NCT06975293) — Storm Therapeutics METTL3 Inhibitor";

type StormTrialAlertProps = {
  variant?: "full" | "compact";
};

export default function StormTrialAlert({ variant = "full" }: StormTrialAlertProps) {
  if (variant === "compact") {
    return (
      <div className="mb-4">
        <div className="overflow-hidden rounded-xl border border-emerald-200 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500" />

          <div className="bg-gradient-to-br from-emerald-50/90 via-white to-white p-4 sm:px-[18px]">
            <div className="mb-3 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-md">
                <i className="fas fa-flask text-lg" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Now Recruiting
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Trial Alert
                  </span>
                </div>
                <h2 className="m-0 text-base font-extrabold leading-snug text-slate-900">
                  Storm Therapeutics STC-15
                </h2>
                <p className="m-0 mt-0.5 text-xs font-semibold text-emerald-700">
                  Phase 2 · NCT06975293 · LMS &amp; Liposarcoma
                </p>
              </div>
            </div>

            <p className="m-0 mb-3.5 text-[13px] leading-relaxed text-slate-600">
              <strong className="text-slate-800">STC-15</strong> is enrolling patients with
              leiomyosarcoma and liposarcoma — a first-in-class oral METTL3 inhibitor with trial
              sites open across the U.S.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-3.5 py-3 no-underline shadow-[0_6px_16px_rgba(22,163,74,0.28)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(22,163,74,0.35)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
                  <i className="fas fa-external-link-alt text-sm" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm font-bold leading-tight text-white">
                    View on ClinicalTrials.gov
                  </span>
                  <span className="mt-0.5 block text-[11px] text-white/85">
                    Full trial details &amp; locations
                  </span>
                </span>
              </a>

              <Link
                href="/storm-therapeutics-stc15"
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 no-underline transition-all hover:border-emerald-300 hover:bg-emerald-50/80 hover:shadow-sm"
              >
                <i className="fas fa-info-circle text-sm text-emerald-600" aria-hidden />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-800">
                  Learn more about this trial
                </span>
              </Link>

              <AISummaryButton url={TRIAL_URL} title={TRIAL_TITLE} variant="block" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-white border-y border-slate-100 py-8 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-md overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow">
                <i className="fas fa-flask text-white text-xl" aria-hidden />
              </div>

              <div className="flex-1">
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
