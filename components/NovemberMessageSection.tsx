import Image from "next/image";

/**
 * November 2026 homepage message and Dec 3 Save the Date, from Annie Achee
 * (Nov 14, 2026: "We can adjust this webpage tomorrow Chris"). Her text, with
 * typos fixed. Hidden automatically after the dates pass.
 */
const NOVEMBER_MESSAGE_UNTIL = new Date("2026-12-01T07:00:00Z"); // end of Nov 30 PT
const SAVE_THE_DATE_UNTIL = new Date("2026-12-03T23:30:00Z"); // Dec 3, 6:30 PM ET
const REGISTER_URL = "https://us02web.zoom.us/meeting/register/VoucDD7cTEuVARgjrqOBTg";

const MESSAGE = [
  {
    lead: null,
    text: "As we move through the month of November, we are reminded that gratitude takes many forms. For those living with sarcoma / leiomyosarcoma, gratitude does not mean that every day is easy, that every scan brings good news, or that the uncertainty of tomorrow disappears. It means recognizing the strength it takes to keep moving forward, even when the road is difficult.",
  },
  {
    lead: "To our patients:",
    text: "Your courage is not measured by how strong you appear, how many treatments you endure, or how positively you face each day. You are allowed to have difficult days. You are allowed to ask questions, seek answers, express your fears, and lean on others. Your voice matters. Your life matters. And you deserve knowledgeable care, compassion, and hope grounded in continued research and progress.",
  },
  {
    lead: "To our caregivers:",
    text: "We see you, too. Your presence, advocacy, encouragement, and unwavering commitment often become the steady foundation beneath someone else's difficult journey. Please remember that your well-being matters, too. You cannot pour endlessly from an empty cup.",
  },
  {
    lead: "To everyone in our LMS community:",
    text: "Remember that none of us should have to navigate this journey alone. This November, let us be intentional about reaching out, listening, sharing knowledge, supporting one another, and recognizing the people who make a difference in our lives. Hope is strengthened when we stand together. Knowledge empowers us. Compassion connects us. And community reminds us that we are never alone.",
  },
];

const DISCUSSION_POINTS = [
  "Hear real experiences from patients who have completed a clinical trial — what they learned and how they prepared for participation — sharing tips and offering support to patients who are contemplating participation in a trial and have questions.",
  "Learn from patients currently in a trial — what they are experiencing and what they are learning as they go — practical tips and guidance for patients and caregivers.",
  "What can the NLMSF do to help support quality of life during treatment/clinical trial participation?",
];

export default function NovemberMessageSection() {
  const now = new Date();
  const showMessage = now < NOVEMBER_MESSAGE_UNTIL;
  const showSaveTheDate = now < SAVE_THE_DATE_UNTIL;
  if (!showMessage && !showSaveTheDate) return null;

  return (
    <section
      className="mx-auto w-full max-w-[1600px] px-8 py-8"
      aria-label="November message and upcoming program"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        {showMessage ? (
          <article className="overflow-hidden rounded-xl border border-[#fde68a] bg-white shadow-[0_6px_22px_rgba(180,83,9,0.12)] lg:col-span-2">
            <div className="relative h-44 w-full sm:h-56">
              <Image
                src="/images/home/november-2026/autumn-gratitude-banner.jpg"
                alt="Autumn harvest scene with pumpkins and fall leaves"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </div>
            <div className="px-6 py-6 md:px-8">
              <h2 className="m-0 text-2xl font-bold leading-tight text-[#7c2d12] md:text-[1.75rem]">
                November: A Time to Reflect, Recognize, and Reconnect
              </h2>
              <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-gray-700">
                {MESSAGE.map((m, i) => (
                  <p key={i} className="m-0">
                    {m.lead ? <strong className="text-[#4c1d95]">{m.lead} </strong> : null}
                    {m.text}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <p className="m-0 text-[0.98rem] italic text-gray-700">
                  With gratitude and continued commitment,
                  <br />
                  <span className="font-semibold not-italic text-[#4c1d95]">— Your NLMSF Support Team</span>
                </p>
                <Image
                  src="/images/home/november-2026/family-caregivers-month.png"
                  alt="Family Caregivers Month"
                  width={420}
                  height={296}
                  className="h-auto w-40 shrink-0"
                />
              </div>
            </div>
          </article>
        ) : null}

        {showSaveTheDate ? (
          <aside
            className={`overflow-hidden rounded-xl bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] text-white shadow-[0_4px_20px_rgba(107,70,193,0.25)] ${showMessage ? "" : "lg:col-span-3"}`}
          >
            <div className="px-6 py-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                Save the Date
              </p>
              <p className="m-0 mt-2 text-xl font-bold text-white">
                Thursday, December 3 · 4:30 PM ET
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/images/home/november-2026/clinical-trials-patient-caregiver-perspectives-network.jpg"
                  alt="Clinical Trials Patient-Caregiver Perspectives Network logo"
                  width={208}
                  height={208}
                  className="h-20 w-20 shrink-0 rounded-full bg-white p-1"
                />
                <h3 className="m-0 text-base font-bold uppercase leading-snug text-white">
                  NLMSF Clinical Trial Perspectives — Patient/Family/Caregiver Discussion Series
                </h3>
              </div>
              <p className="m-0 mt-4 text-[0.95rem] leading-relaxed text-white/90">
                This is where we all come together to reflect on Clinical Trials and ask questions:
              </p>
              <ul className="m-0 mt-3 list-none space-y-2.5 p-0">
                {DISCUSSION_POINTS.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#4c1d95] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <i className="fas fa-video" aria-hidden />
                Register here
                <span className="sr-only"> (opens Zoom registration in a new tab)</span>
              </a>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
