import Link from "next/link";

const CLINICAL_TRIALS_URL =
  "https://clinicaltrials.gov/search?term=leiomyosarcoma";

const gradientText =
  "bg-gradient-to-br from-[#6b46c1] to-[#9333ea] bg-clip-text text-transparent";

const UTERINE_TRIALS = [
  {
    href: "https://ichgcp.net/clinical-trials-registry/research/list?cond=Uterus%2BLeiomyosarcoma",
    label: "ICHGCP Registry",
    hint: "Recruiting & completed studies",
  },
  {
    href: "https://www.cancer.gov/research/participate/clinical-trials/disease/uterine-sarcoma?pn=1",
    label: "NCI Trial Listings",
    hint: "Uterine sarcoma focus",
  },
] as const;

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path d="M3.5 3a.5.5 0 0 0 0 1H7.29L2.15 9.15a.5.5 0 1 0 .71.7L8 4.71V8.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5z" />
    </svg>
  );
}

export default function ClinicalTrialsCard() {
  return (
    <div className="mt-4">
      <div className="rounded-xl border border-gray-200 bg-white py-4 px-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:px-[18px]">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
            <i className="fas fa-flask text-base" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className={`m-0 text-lg font-bold leading-tight ${gradientText}`}>
              Clinical Trials
            </h3>
            <p className="m-0 mt-0.5 text-xs leading-snug text-gray-500">
              Search open leiomyosarcoma studies
            </p>
          </div>
          <a
            href={CLINICAL_TRIALS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold text-[#6b46c1] no-underline hover:text-[#553c9a] pt-1"
          >
            ClinicalTrials.gov
            <ExternalIcon />
          </a>
        </div>

        <a
          href={CLINICAL_TRIALS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6b46c1] to-[#9333ea] px-3.5 py-3 no-underline shadow-[0_6px_16px_rgba(88,28,135,0.28)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(88,28,135,0.35)]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
            <i className="fas fa-search text-sm" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-white leading-tight">
              Search LMS Trials
            </span>
            <span className="block text-[11px] text-white/85 mt-0.5">
              All leiomyosarcoma listings
            </span>
          </span>
          <ExternalIcon className="text-white/90 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="m-0 mb-2 text-[10px] font-bold uppercase tracking-wider text-violet-600/90">
            Uterine sarcoma
          </p>
          <div className="flex flex-col gap-1.5">
            {UTERINE_TRIALS.map((trial) => (
              <a
                key={trial.href}
                href={trial.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-violet-100 bg-violet-50/50 px-2.5 py-2 no-underline transition-all hover:border-violet-200 hover:bg-violet-50 hover:shadow-sm"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-semibold leading-tight text-[#4c1d95] group-hover:text-[#5b21b6]">
                    {trial.label}
                  </span>
                  <span className="block text-[10px] text-gray-500 leading-tight mt-0.5">
                    {trial.hint}
                  </span>
                </span>
                <ExternalIcon className="text-violet-400 group-hover:text-violet-600" />
              </a>
            ))}
          </div>
        </div>

        <Link
          href="/clinical-trials-research-information"
          className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#6b46c1] no-underline hover:text-[#553c9a]"
        >
          NLMSF clinical trial resources
          <span aria-hidden>&#8594;</span>
        </Link>
      </div>
    </div>
  );
}
