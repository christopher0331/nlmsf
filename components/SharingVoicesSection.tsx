import Image from "next/image";

const PATIENTS_URL = "https://patients.nlmsf.org";
const CAREGIVERS_URL = "https://caregivers.nlmsf.org";

const PATIENT_SHARE_INVITATIONS = [
  "A sentence that carried you through the day",
  "A reflection on what this journey has taught you",
  "A note of encouragement for someone you've never met",
  "A memory you want to honor",
  "A moment of light in the midst of uncertainty",
];

const CAREGIVER_SHARE_INVITATIONS = [
  "A sentence that helped you show up for someone you love",
  "A reflection on what caregiving has taught you",
  "A note of encouragement for another caregiver",
  "A memory you want to honor",
  "A moment of strength when the path felt uncertain",
];

const PLATFORMS = [
  {
    id: "patients",
    label: "Patients Platform",
    audience: "For patients walking the leiomyosarcoma journey.",
    inviteLead:
      "Here, patients, survivors, and family members are invited to share:",
    shareItems: PATIENT_SHARE_INVITATIONS,
    closingNote:
      "Every post becomes part of a living circle of hope—words that others may read at 2\u00a0a.m. when sleep will not come, or on a day when courage feels thin.",
    url: PATIENTS_URL,
    ctaText: "Go to the Patients Platform",
    icon: "fa-user",
    accent: "from-[#6b46c1] to-[#9333ea]",
    border: "border-violet-200",
    bg: "from-[#faf5ff] to-white",
  },
  {
    id: "caregivers",
    label: "Caregivers Platform",
    audience: "For caregivers supporting someone on the leiomyosarcoma journey.",
    inviteLead: "Here, caregivers and family advocates are invited to share:",
    shareItems: CAREGIVER_SHARE_INVITATIONS,
    closingNote:
      "Every post becomes part of a living circle of hope—words that other caregivers may read at 2\u00a0a.m. when sleep will not come, or on a day when courage feels thin.",
    url: CAREGIVERS_URL,
    ctaText: "Go to the Caregivers Platform",
    icon: "fa-hands-helping",
    accent: "from-[#7c3aed] to-[#a855f7]",
    border: "border-purple-200",
    bg: "from-[#f5f3ff] to-white",
  },
] as const;

export default function SharingVoicesSection() {
  return (
    <section
      className="w-full bg-white border-y border-slate-100 py-8 px-4"
      aria-label="Shared Voices community platforms"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl border-2 border-violet-200 bg-gradient-to-r from-[#faf5ff] via-white to-[#f5f3ff] shadow-md overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#6b46c1] via-[#9333ea] to-[#a855f7]" />

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="shrink-0 flex justify-center md:justify-start">
                <Image
                  src="/images/sharing-voices.png"
                  alt="Shared Voices"
                  width={280}
                  height={200}
                  className="w-[220px] md:w-[260px] h-auto object-contain"
                  sizes="(min-width: 768px) 260px, 220px"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#6b46c1] to-[#9333ea] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    <i className="fas fa-feather-alt text-[10px]" aria-hidden />
                    New Community Platforms
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Shared Voices
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug mb-3">
                  A Quiet Space for Words, Hope, and Connection
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl m-0">
                  Welcome to <strong>Shared Voices</strong>, a quiet, protected space created for
                  reflection, encouragement, and connection. This is not a medical forum. It is a
                  place for words—simple words, honest words, hopeful words—shared by people who
                  understand the leiomyosarcoma journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className={`rounded-xl border ${platform.border} bg-gradient-to-br ${platform.bg} p-5 md:p-6 flex flex-col`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${platform.accent} text-white shadow-sm`}
                    >
                      <i className={`fas ${platform.icon} text-sm`} aria-hidden />
                    </span>
                    <h3 className="text-base font-extrabold text-[#4c1d95] m-0 uppercase tracking-wide">
                      {platform.label}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-violet-800 m-0 mb-3">
                    {platform.audience}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed m-0 mb-3">
                    {platform.inviteLead}
                  </p>

                  <ul className="list-none m-0 mb-4 p-0 flex flex-col gap-2">
                    {platform.shareItems.map((item) => (
                      <li
                        key={`${platform.id}-${item}`}
                        className="flex items-start gap-2 text-sm text-slate-600 leading-snug"
                      >
                        <i
                          className="fas fa-quote-left text-violet-400 text-xs mt-1 shrink-0"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-slate-600 text-sm leading-relaxed m-0 mb-2">
                    You do not need to be a &ldquo;writer.&rdquo; You do not need to have the right
                    words. <strong>One sentence is enough.</strong>
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed italic m-0 mb-5">
                    {platform.closingNote}
                  </p>

                  <div className="mt-auto pt-1">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r ${platform.accent} px-5 py-3.5 text-sm font-bold text-white no-underline shadow-[0_4px_14px_rgba(107,70,193,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(107,70,193,0.38)] active:translate-y-0`}
                    >
                      {platform.ctaText}
                      <i className="fas fa-arrow-right text-xs opacity-90" aria-hidden />
                    </a>
                    <p className="m-0 mt-2 text-center text-[11px] text-slate-400">
                      Opens in a new tab
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
