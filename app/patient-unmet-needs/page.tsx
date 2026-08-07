import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Addressing Patients' Common Challenges | NLMSF",
  description:
    "Join the NLMSF Circle of Hope—the LMS/All Sarcoma Patient-Family and Patient Advocacy Foundations Community Roundtable—a Think Tank Network identifying common challenges and unmet needs in care and treatment.",
};

const circleOfHopeSummary = {
  title: "Circle of Hope Community Roundtable: A Collective Purpose",
  intro:
    "The Circle of Hope Community Roundtable is a collaborative forum where patients, caregivers, and patient advocacy organizations come together to learn, share, and inspire meaningful progress.",
  points: [
    "A collaborative forum that encourages open dialogue among patients, caregivers, and advocacy groups.",
    "A trusted, supportive space to share personal experiences, ask questions, and learn from one another.",
    "A community built on respect, connection, and shared understanding, where every voice is valued.",
    "A focus on collaboration and innovation, generating constructive ideas and actionable solutions that improve the lives of those affected by sarcoma and leiomyosarcoma.",
    "A commitment to advancing patient-centered care, ensuring that the experiences and perspectives of patients and caregivers help shape research, education, and advocacy efforts.",
  ],
  closing:
    "Together, we are stronger. Together, we can create positive change for the entire sarcoma community. One conversation, one idea, and one shared voice at a time.",
  image: "/images/circle-of-hope.png",
  imageAlt:
    "LMS/Sarcoma Community Roundtable — The Circle of Hope — Patients and Caregivers",
};

const clinicalTrialPerspectivesSummary = {
  title: "Patient & Caregiver Clinical Trial Perspectives",
  intro:
    "Join fellow patients and caregivers for an open discussion about the clinical trial experience, with insights from those who have participated firsthand.",
  points: [
    "Hear firsthand experiences from patients who have completed a clinical trial — what they learned, what they wish they had known, and how they prepared.",
    "Learn from participants currently enrolled in clinical trials as they share common challenges, unmet needs, and encouraging experiences.",
    "Gain practical guidance for patients and caregivers considering a clinical trial, including questions to ask, how to prepare, and what to expect throughout the process.",
    "Share your own questions and experiences in a supportive, patient-centered community where every perspective helps others navigate their journey.",
  ],
  closing:
    "Together, we can learn from one another, empower informed decision-making, and help improve the clinical trial experience for future patients.",
  image: "/images/clincal-trials-logo.png",
  imageAlt:
    "Clinical Trials Patient-Caregiver Perspectives Network — Virtual Discussions",
};

const whyInputMatters = [
  "Clinicians and researchers value patient perspectives",
  "Your experiences inform treatment approaches and clinical trial design",
  "Patient voices help move care farther and faster",
];

const learningGoals = [
  "Better understand what it is really like to participate in a clinical trial from the patient and caregiver perspective.",
  "Learn how patients prepared before entering a trial and what they wish they had known earlier.",
  "Recognize common challenges that may arise during participation, including travel, scheduling, side effects, communication issues, financial stressors, and emotional impact.",
  "Hear positive insights and opportunities that trials may provide, including access to emerging therapies, expert care teams, closer monitoring, and contributing to future progress for other patients.",
  "Understand the importance of asking informed questions before enrolling in a study.",
  "Learn practical strategies for organization, advocacy, communication, and self-care throughout the trial experience.",
  "Gain perspective on how caregivers and family members can prepare for the responsibilities and stressors that often accompany participation.",
];

const takeaways = [
  {
    title: "A Better Understanding of Clinical Trials",
    points: [
      'Clinical trials are not only "last resort" options.',
      "They are essential for advancing treatments and creating future standards of care.",
    ],
  },
  {
    title: "Confidence to Ask Questions",
    points: [
      "Trial goals and what participation involves",
      "Potential risks and benefits",
      "Logistical requirements such as visits, travel, and time commitment",
      "How the trial may affect quality of life",
      "What support resources are available",
    ],
  },
  {
    title: "Realistic Expectations",
    points: [
      "What day-to-day life can look like during a trial",
      "Which challenges are common and often manageable",
      "What issues may arise unexpectedly",
      "How to prepare emotionally as well as logistically",
    ],
  },
  {
    title: "The Importance of Support Systems",
    points: [
      "Trials affect the entire family unit—not only the patient.",
      "Strong communication, organization, and emotional support matter throughout the experience.",
    ],
  },
  {
    title: "Patients Are Partners in Research",
    points: [
      "Patients and caregivers are active partners whose lived experience helps improve future trial design, patient support, and research priorities.",
    ],
  },
];

export default function PatientUnmetNeedsPage() {
  return (
    <main>
      <section
        className="text-center py-12 px-6 md:px-8 rounded-xl shadow-md border border-emerald-200 mb-8 max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, #ecfdf5, #fefce8)",
        }}
      >
        <div className="inline-flex items-center bg-white rounded-full py-2 px-4 shadow-sm mb-6">
          <i className="fas fa-circle-notch text-emerald-700 mr-2" aria-hidden />
          <span className="text-gray-700 font-medium">Circle of Hope</span>
        </div>

        <h1
          className="text-2xl md:text-4xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(to right, #047857, #a16207)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Addressing Patients&apos; Common Challenges
        </h1>

        <div
          className="h-1 w-16 mx-auto my-6 rounded"
          style={{ background: "linear-gradient(to right, #047857, #a16207)" }}
          aria-hidden
        />

        <p className="text-lg md:text-xl text-gray-600 max-w-[800px] mx-auto mb-8">
          The National Leiomyosarcoma Foundation&apos;s Circle of Hope — the LMS /
          All Sarcoma Patient-Family / Patient Advocacy Foundations Community
          Roundtable
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          <Image
            src="/images/nlmsf-logo.png"
            alt="National Leiomyosarcoma Foundation"
            width={220}
            height={220}
            className="h-40 md:h-48 w-auto object-contain"
          />
          <Image
            src="/images/circle-of-hope.png"
            alt="LMS/Sarcoma Community Roundtable — The Circle of Hope — Patients and Caregivers"
            width={280}
            height={280}
            className="h-48 md:h-56 w-auto object-contain"
          />
          <Image
            src="/images/clincal-trials-logo.png"
            alt="Clinical Trials Patient-Caregiver Perspectives Network — Virtual Discussions"
            width={240}
            height={240}
            className="h-40 md:h-52 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
            <i className="fas fa-users mr-2 text-sm" aria-hidden /> Patients &amp;
            Caregivers
          </span>
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-amber-50 text-amber-800 border border-amber-200">
            <i className="fas fa-lightbulb mr-2 text-sm" aria-hidden /> Common Challenges
          </span>
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-lime-50 text-lime-800 border border-lime-200">
            <i className="fas fa-comments mr-2 text-sm" aria-hidden /> Think Tank
            Network
          </span>
        </div>
      </section>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 py-6 px-6 mb-8 max-w-3xl mx-auto">
        <p className="text-gray-700 mb-4">
          This is a Think Tank Network of patients and caregivers coming together
          to discuss experiences from initial diagnosis to the end of various
          treatments / clinical trials and beyond. Patient Advocacy foundations
          are also invited to participate.
        </p>
        <p className="text-gray-700 mb-0">
          We will collectively discuss what we have learned so far — identify and
          address the <strong>common challenges (unmet needs)</strong> in care and
          treatment from A to Z.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <nav
            className="bg-white rounded-xl shadow-sm p-5 border border-gray-200"
            aria-label="Page contents"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-100">
              Page Contents
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href="#circle-of-hope"
                className="block py-2 pl-4 border-l-4 border-emerald-600 text-gray-600 no-underline font-medium text-sm hover:text-emerald-800 hover:border-emerald-800 transition-colors"
              >
                Circle of Hope
              </a>
              <a
                href="#initiative-summaries"
                className="block py-2 pl-4 border-l-4 border-teal-600 text-gray-600 no-underline font-medium text-sm hover:text-teal-800 hover:border-teal-800 transition-colors"
              >
                Initiative Summaries
              </a>
              <a
                href="#why-input-matters"
                className="block py-2 pl-4 border-l-4 border-violet-500 text-gray-600 no-underline font-medium text-sm hover:text-violet-700 hover:border-violet-700 transition-colors"
              >
                Why Your Input Matters
              </a>
              <a
                href="#learning-goals"
                className="block py-2 pl-4 border-l-4 border-emerald-500 text-gray-600 no-underline font-medium text-sm hover:text-emerald-700 hover:border-emerald-700 transition-colors"
              >
                Key Learning Goals
              </a>
              <a
                href="#takeaways"
                className="block py-2 pl-4 border-l-4 border-amber-500 text-gray-600 no-underline font-medium text-sm hover:text-amber-700 hover:border-amber-700 transition-colors"
              >
                What You Take Away
              </a>
              <a
                href="#related-resources"
                className="block py-2 pl-4 border-l-4 border-lime-600 text-gray-600 no-underline font-medium text-sm hover:text-lime-700 hover:border-lime-700 transition-colors"
              >
                Related Resources
              </a>
              <a
                href="#get-involved"
                className="block py-2 pl-4 border-l-4 border-teal-500 text-gray-600 no-underline font-medium text-sm hover:text-teal-700 hover:border-teal-700 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </nav>
        </aside>

        <div className="min-w-0 space-y-12">
          <section
            id="circle-of-hope"
            className="scroll-mt-24 rounded-xl border border-emerald-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 mb-2">
              Announcing a New NLMSF Initiative for 2026
            </p>
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">
              Circle of Hope
            </h2>
            <p className="text-lg text-emerald-800 font-medium mb-4">
              Community Roundtable / Clinical Trial Patient Perspectives
            </p>
            <p className="text-gray-700 mb-4">
              The National Leiomyosarcoma Foundation&apos;s{" "}
              <strong>Circle of Hope</strong> — the LMS / All Sarcoma
              Patient-Family / Patient Advocacy Foundations Community Roundtable.
            </p>
            <p className="text-gray-700 mb-4">
              This is a Think Tank Network of patients and caregivers coming
              together to discuss experiences from initial diagnosis to the end of
              various treatments / clinical trials and beyond. Patient Advocacy
              foundations are also invited to participate.
            </p>
            <p className="text-gray-700 mb-4">
              We will collectively discuss what we have learned so far — identify
              and address the{" "}
              <strong>common challenges (unmet needs)</strong> in care and
              treatment from A to Z.
            </p>
            <p className="text-gray-700 mb-0">
              Meetings are held{" "}
              <strong>quarterly throughout the year</strong>. Upcoming meeting
              announcements are posted on the{" "}
              <Link
                href="/"
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                NLMSF homepage
              </Link>
              .
            </p>
          </section>

          <section
            id="initiative-summaries"
            className="scroll-mt-24 space-y-8"
          >
            <h2 className="text-2xl font-bold text-emerald-900 m-0">
              Initiative Summaries
            </h2>
            <p className="text-gray-600 m-0 -mt-4">
              Tight summaries of each Circle of Hope initiative.
            </p>

            {[circleOfHopeSummary, clinicalTrialPerspectivesSummary].map(
              (summary) => (
                <article
                  key={summary.title}
                  className="rounded-xl border border-emerald-200 bg-white p-6 md:p-8 shadow-sm"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <Image
                      src={summary.image}
                      alt={summary.imageAlt}
                      width={175}
                      height={175}
                      className="h-36 w-36 shrink-0 object-contain mx-auto md:mx-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-emerald-900 mb-3">
                        {summary.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{summary.intro}</p>
                      <ul className="space-y-3 mb-4">
                        {summary.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-gray-700 leading-relaxed"
                          >
                            <span
                              className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600"
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 mb-0 font-medium">
                        {summary.closing}
                      </p>
                    </div>
                  </div>
                </article>
              )
            )}
          </section>

          <section id="why-input-matters" className="scroll-mt-24 text-center">
            <Image
              src="/images/circle-of-hope.png"
              alt="LMS/Sarcoma Community Roundtable — The Circle of Hope — Patients and Caregivers"
              width={280}
              height={280}
              className="h-48 md:h-56 w-auto object-contain mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">
              Why Your Input Matters
            </h2>
            <ul className="max-w-2xl mx-auto space-y-4 text-left">
              {whyInputMatters.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 bg-violet-50/60 border border-violet-100 rounded-lg p-4"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-violet-600"
                    aria-hidden
                  />
                  <span className="text-gray-800 leading-relaxed font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="learning-goals" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">
              Key Learning Goals for the Clinical Trial Perspectives Roundtable
              Discussion
            </h2>
            <p className="text-gray-600 mb-6">
              Participants should be able to:
            </p>
            <ul className="space-y-4">
              {learningGoals.map((goal) => (
                <li
                  key={goal}
                  className="flex gap-3 bg-emerald-50/60 border border-emerald-100 rounded-lg p-4"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-600"
                    aria-hidden
                  />
                  <span className="text-gray-700 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="takeaways" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              What Patients &amp; Caregivers Take Away
            </h2>
            <ol className="space-y-6">
              {takeaways.map((item, index) => (
                <li
                  key={item.title}
                  className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="text-gray-700 leading-relaxed pl-4 border-l-2 border-amber-200"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="related-resources" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-lime-900 mb-6">
              Related Resources
            </h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              <Link
                href="/clinical-trials-research-information"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all no-underline"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Clinical Trials &amp; Research Information
                </h3>
                <p className="text-sm text-gray-600 mb-0">
                  Learn what clinical trials are, how phases work, and how to
                  find LMS-focused opportunities.
                </p>
              </Link>
              <Link
                href="/patient-perspectives"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all no-underline"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Patient Perspectives
                </h3>
                <p className="text-sm text-gray-600 mb-0">
                  Real stories from patients and caregivers living with LMS.
                </p>
              </Link>
              <Link
                href="/patient-driven-research"
                className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all no-underline"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Patient Power: Patients Drive Research
                </h3>
                <p className="text-sm text-gray-600 mb-0">
                  See how patient participation and advocacy accelerate research
                  and treatment options.
                </p>
              </Link>
            </div>
          </section>

          <section
            id="get-involved"
            className="scroll-mt-24 rounded-xl border border-teal-200 bg-teal-50/50 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-teal-900 mb-3">
              Join the Conversation
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Questions about Circle of Hope, the Clinical Trials Patient-Caregiver
              Perspectives Network, or sharing unmet needs from your LMS journey?
              Reach out to the Foundation—your voice helps strengthen support and
              research for others.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 no-underline transition-colors"
              >
                <i className="fas fa-home" aria-hidden />
                View Meeting Announcements
              </Link>
              <a
                href="mailto:annieachee@aol.com"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-700 text-teal-900 hover:bg-teal-100 font-medium px-6 py-3 no-underline transition-colors"
              >
                <i className="fas fa-envelope" aria-hidden />
                Contact NLMSF
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
