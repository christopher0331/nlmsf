import Link from "next/link";

/**
 * Homepage welcome statement, from Annie Achee (Oct 25, 2026): "For possible
 * posting in place of the purple microscope imagery". Her text, with typos fixed.
 */
const POINTS = [
  "Every LMS diagnosis deserves to be understood individually. Every patient deserves access to knowledgeable specialists. And every patient deserves hope grounded in good information.",
  "The NLMSF wants to make the science understandable, the resources accessible, and the patient voice stronger and at center stage!",
  "When patients are newly diagnosed with leiomyosarcoma, they can feel frightened, overwhelmed, and unsure where to turn.",
  "You are here on this website now for clear, understandable information to help a patient ask better questions, advocate for themselves, and feel totally supported — and know that . . .",
];

const LINKS = [
  { href: "/new-diagnosis/", label: "Newly Diagnosed Patient Resources", icon: "fa-compass" },
  { href: "/quick-tips/", label: "Sarcoma Pathways Quick Tips", icon: "fa-lightbulb" },
  { href: "/navigating-support/", label: "Patient and Caregiver Support", icon: "fa-hands-helping" },
];

export default function WelcomeStatementCard() {
  return (
    <section
      aria-labelledby="welcome-statement-title"
      className="mt-6 overflow-hidden rounded-xl border border-[#ddd6fe] bg-white shadow-[0_6px_22px_rgba(107,70,193,0.13)]"
    >
      <div className="bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] px-5 py-4">
        <h2
          id="welcome-statement-title"
          className="m-0 text-base font-bold uppercase leading-snug tracking-wide text-white"
        >
          At the Heart of This Foundation
        </h2>
      </div>
      <div className="px-5 py-5">
        <ul className="m-0 list-none space-y-3 p-0">
          {POINTS.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-gray-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="m-0 mt-4 text-lg font-bold text-[#4c1d95]">
          You will not have to face this journey alone.
        </p>
        <p className="m-0 mt-2 text-[0.9375rem] leading-relaxed text-gray-700">
          The National Leiomyosarcoma Foundation (NLMSF) is here to help you find information,
          resources, and full comprehensive support along the entire cancer journey and long term
          to enhance quality of life in long-term survivorship.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#ddd6fe] bg-[#f5f3ff] px-4 py-2.5 text-sm font-semibold text-[#5b21b6] no-underline transition-colors hover:bg-[#ede9fe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce]"
            >
              <span className="flex items-center gap-2.5">
                <i className={`fas ${l.icon} w-4 text-center`} aria-hidden />
                {l.label}
              </span>
              <span aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
