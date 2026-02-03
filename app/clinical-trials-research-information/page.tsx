import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Trials & Research Information | NLMSF",
  description:
    "Understanding clinical trials, their phases, and how to find opportunities for Leiomyosarcoma research.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function ClinicalTrialsResearchInformationPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="text-center py-12 px-6 md:px-8 rounded-xl shadow-md border border-blue-200 mb-8 max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, #eff6ff, #eef2ff)",
        }}
      >
        <div className="inline-flex items-center bg-white rounded-full py-2 px-4 shadow-sm mb-6">
          <i className="fas fa-flask text-[#7e22ce] mr-2" aria-hidden />
          <span className="text-gray-700 font-medium">Research & Trials</span>
        </div>
        <h1
          className="text-2xl md:text-4xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(to right, #7e22ce, #4338ca)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Clinical Trials & Research Information
        </h1>
        <div
          className="h-1 w-16 mx-auto my-6 rounded"
          style={{ background: "linear-gradient(to right, #7e22ce, #4338ca)" }}
          aria-hidden
        />
        <p className="text-xl text-gray-600 max-w-[700px] mx-auto mb-8">
          Understanding clinical trials, their phases, and how to find opportunities for Leiomyosarcoma research
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <i className="fas fa-vial mr-2 text-sm" aria-hidden /> Clinical Trials
          </span>
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
            <i className="fas fa-search mr-2 text-sm" aria-hidden /> Research
          </span>
          <span className="inline-flex items-center py-2 px-4 rounded-full font-medium bg-teal-50 text-teal-700 border border-teal-200">
            <i className="fas fa-hospital-user mr-2 text-sm" aria-hidden /> Patient Resources
          </span>
        </div>
      </section>

      {/* Intro panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 py-6 px-6 mb-8 max-w-3xl mx-auto">
        <p className="text-gray-700 mb-4">
          <strong>What are Clinical Trials?</strong>
          <br />
          Clinical trials are research studies designed to evaluate new cutting-edge therapies using cancer patients. They provide an important opportunity for patients to be part of research efforts evaluating new chemotherapy and immunotherapy drugs/agents, new radiation therapy techniques, new surgical techniques, and creative new ways to use different cancer treatments in combination.
        </p>
        <p className="text-gray-700 mb-4">
          It is most important to discuss with your oncologist the possibility of participating in a clinical trial, especially if you did not initially respond or are no longer responding to existing conventional therapies.
        </p>
        <p className="text-gray-700 mb-0">
          This page provides essential information about clinical trials, their phases, how to find trials specific to Leiomyosarcoma, and important questions to ask when considering participation.
        </p>
      </div>

      {/* Sidebar + Main */}
      <div className="max-w-[1400px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <nav className="bg-white rounded-xl shadow-sm p-5 border border-gray-200" aria-label="Page contents">
            <h3 className="text-lg font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-100">
              Page Contents
            </h3>
            <div className="flex flex-col gap-1">
              <a href="#clinical-trials" className="block py-2 pl-4 border-l-4 border-blue-500 text-gray-600 no-underline font-medium text-sm hover:text-blue-600 hover:border-blue-600 transition-colors">
                Clinical Trials Basics
              </a>
              <a href="#trial-phases" className="block py-2 pl-4 border-l-4 border-indigo-500 text-gray-600 no-underline font-medium text-sm hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                Clinical Trial Phases
              </a>
              <a href="#questions" className="block py-2 pl-4 border-l-4 border-teal-500 text-gray-600 no-underline font-medium text-sm hover:text-teal-600 hover:border-teal-600 transition-colors">
                Questions to Ask
              </a>
              <a href="#resources" className="block py-2 pl-4 border-l-4 border-purple-500 text-gray-600 no-underline font-medium text-sm hover:text-purple-600 hover:border-purple-600 transition-colors">
                Find LMS Trials
              </a>
              <a href="#videos" className="block py-2 pl-4 border-l-4 border-rose-500 text-gray-600 no-underline font-medium text-sm hover:text-rose-600 hover:border-rose-600 transition-colors">
                Videos & Booklets
              </a>
            </div>
          </nav>
        </aside>

        <div className="min-w-0">
          {/* Clinical Trials Basics */}
          <section id="clinical-trials" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-200 text-blue-700">
              Clinical Trials Guidelines
            </h2>
            <div
              className="rounded-xl p-6 shadow-md border border-blue-200 mb-8"
              style={{
                background: "linear-gradient(to right, #eff6ff, #dbeafe)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <i className="fas fa-flask text-white text-sm" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold m-0">What is a Clinical Trial?</h3>
                  <p className="text-sm m-0 mt-1 text-gray-600">Research studies designed to evaluate new therapies</p>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  A clinical trial is a research study designed to evaluate new cutting-edge therapies using cancer patients. Trials provide an important opportunity for patients to be part of research efforts evaluating:
                </p>
                <ul className="list-none p-0 m-0 space-y-2">
                  {[
                    "New chemotherapy and immunotherapy drugs/agents",
                    "New radiation therapy techniques",
                    "New surgical techniques",
                    "Creative new ways to use different cancer treatments in combination",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
              <i className="fas fa-exclamation-circle text-amber-600 text-xl shrink-0 mt-0.5" aria-hidden />
              <div>
                <h4 className="text-amber-900 font-semibold m-0 mb-1 text-base">IMPORTANT NOTE</h4>
                <p className="text-amber-900 m-0 text-sm leading-relaxed">
                  Before considering whether to participate in a clinical trial, learn as much as possible about the clinical trial, do as much investigation of the clinical trial as you can on your own. Then ask as many questions as you need to thoroughly understand the pros and cons of participating in the clinical trial.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-gray-600 mb-2">Clinical Trials 101</p>
              <p className="my-1">
                <a href="https://powerfulpatients.org/clinical-trials-101/#basics" className="text-violet-600 font-medium hover:underline" {...ext}>
                  The Basics: Understanding Clinical Trial Research
                </a>
              </p>
              <p className="my-1">
                <a href="https://powerfulpatients.org/clinical-trials-101/#misconceptions" className="text-violet-600 font-medium hover:underline" {...ext}>
                  Understanding Common Misconceptions
                </a>
              </p>
              <p className="my-1">
                <a href="https://powerfulpatients.org/clinical-trials-101/#safety" className="text-violet-600 font-medium hover:underline" {...ext}>
                  Clinical Trial Safety
                </a>
              </p>
              <p className="my-1">
                <a href="https://powerfulpatients.org/clinical-trials-101/#guides" className="text-violet-600 font-medium hover:underline" {...ext}>
                  Clinical Trials 101 Resource Guides
                </a>
              </p>
            </div>

            {/* Why Consider / Resources */}
            <div
              className="rounded-xl p-6 mb-8 border border-violet-200"
              style={{
                background: "linear-gradient(135deg, rgba(126,34,206,0.02), rgba(67,56,202,0.03))",
              }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-6 text-center"
                style={{
                  background: "linear-gradient(to right, #7e22ce, #4338ca)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Why Should I Consider a Clinical Trial?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow border border-gray-200 border-t-4 border-t-cyan-500 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4)" }}>
                      <i className="fas fa-download text-white" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 m-0 text-sm">NCCN Clinical Trial Handout</h4>
                      <p className="text-gray-500 text-xs m-0">Printable guide to understanding clinical trials</p>
                    </div>
                  </div>
                  <a href="https://www.nccn.org/patients/resources/life_with_cancer/pdf/NCCN_Clinical_Trials_Patient_Handout.pdf" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                    Download Handout <i className="fas fa-external-link-alt text-xs" aria-hidden />
                  </a>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border border-gray-200 border-t-4 border-t-violet-500 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7e22ce, #a855f7)" }}>
                      <i className="fas fa-book-medical text-white" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 m-0 text-sm">2025 NCCN Treatment Guidelines</h4>
                      <p className="text-gray-500 text-xs m-0">Current guidelines for soft tissue sarcoma</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1464" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                      Professional Guidelines <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    </a>
                    <a href="https://www.nccn.org/patients/guidelines/content/PDF/sarcoma-patient.pdf" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                      Patient Guidelines <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border border-gray-200 border-t-4 border-t-orange-500 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #ea580c, #f97316)" }}>
                      <i className="fas fa-bone text-white" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 m-0 text-sm">Bone Sarcoma Resources</h4>
                      <p className="text-gray-500 text-xs m-0">Specialized guidelines and information for bone cancers</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="https://www.nccn.org/patients/guidelines/content/PDF/bone-patient.pdf" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                      NCCN Bone Cancer Guidelines <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    </a>
                    <a href="https://sarctrials.org/patients/what-is-sarcoma/bone-sarcoma/" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                      Bone Sarcoma Information <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trial Phases */}
          <section id="trial-phases" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-indigo-200 text-indigo-700">
              Understanding Clinical Trial Phases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  id: "phase1",
                  title: "PHASE 1",
                  tag: "First Step",
                  bg: "linear-gradient(to bottom right, #eff6ff, #dbeafe)",
                  border: "border-blue-200",
                  items: [
                    { label: "Duration:", value: "6 months – 1 year (approximate)" },
                    { label: "Patient participation:", value: "15 – 20 patients approximately (may vary somewhat)" },
                    { label: "Goal:", value: "To test an experimental drug or treatment in a small group for the first time to evaluate tumor response, identify side effects, and determine the maximum tolerable dosage." },
                  ],
                  note: null,
                },
                {
                  id: "phase2",
                  title: "PHASE 2",
                  tag: "Expanded Testing",
                  bg: "linear-gradient(to bottom right, #eef2ff, #e0e7ff)",
                  border: "border-indigo-200",
                  items: [
                    { label: "Duration:", value: "6 months to 1 year or more to complete" },
                    { label: "Patient participation:", value: "20 – 80 or 100 – 500, depending on the research facility" },
                    { label: "Goal:", value: "The experimental drug or treatment is given to a larger group to evaluate its effectiveness and to further assess safety." },
                  ],
                  note: "Only treatments proven to be safe in Phase 1 studies progress to the Phase 2 stage.",
                },
                {
                  id: "phase3",
                  title: "PHASE 3",
                  tag: "Comparative Studies",
                  bg: "linear-gradient(to bottom right, #f0fdfa, #ccfbf1)",
                  border: "border-teal-200",
                  items: [
                    { label: "Duration:", value: "1 – 4 years to complete depending on the type of cancer, type of study, and number of patient participants" },
                    { label: "Goal:", value: "To compare a new drug or treatment to other standard treatments currently used to determine which may be most effective to treat cancer." },
                  ],
                  note: "Safety and side effects are well monitored and evaluated by the researchers.",
                },
                {
                  id: "phase4",
                  title: "PHASE 4",
                  tag: "Post-Approval",
                  bg: "linear-gradient(to bottom right, #faf5ff, #f3e8ff)",
                  border: "border-purple-200",
                  items: [
                    { label: "Purpose:", value: "Post Marketing studies, which are conducted after a treatment is approved by the FDA." },
                    { label: "Goal:", value: "Provide additional information including the treatment or drug's risks and best use." },
                  ],
                  note: null,
                },
              ].map((phase) => (
                <div key={phase.id} className={`rounded-xl border ${phase.border} overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5`} style={{ background: phase.bg }}>
                  <div className="px-4 py-3 border-b border-black/10 flex justify-between items-center">
                    <h3 className="font-bold text-lg m-0">{phase.title}</h3>
                    <span className="text-xs font-semibold py-1 px-2 rounded-full bg-white/50">{phase.tag}</span>
                  </div>
                  <div className="p-4">
                    {phase.items.map((item, i) => (
                      <div key={i} className="mb-3">
                        <span className="block font-semibold text-sm text-gray-600">{item.label}</span>
                        <span className="block mt-0.5 text-gray-700">{item.value}</span>
                      </div>
                    ))}
                    {phase.note && (
                      <p className="text-sm italic mt-3 pt-3 border-t border-dashed border-black/10 m-0">{phase.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kasper 2022 */}
          <section id="kasper-2022-review" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-teal-200 text-teal-700">
              Featured Clinical Trials Review (2022)
            </h2>
            <div className="rounded-xl p-6 shadow border border-teal-200 bg-teal-50/50 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                  <i className="fas fa-file-medical text-white text-sm" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold m-0">What Clinical Trials Are Needed for Treatment of Leiomyosarcoma?</h3>
                  <p className="text-sm m-0 mt-1 text-gray-600">A comprehensive 2022 review article highlighting gaps, priorities, and directions for future leiomyosarcoma clinical trials.</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This peer-reviewed review article offers detailed insights into the state of leiomyosarcoma clinical research and guidance on what types of trials are most needed. It is especially helpful for patients and families who want a deeper understanding of where the field is focusing its efforts and why.
              </p>
              <a href="https://leiomyosarcoma.info/wp-content/uploads/2022/03/Kasper2022_Article.pdf" className="inline-flex items-center gap-2 bg-teal-600 text-white py-2 px-4 rounded font-medium text-sm no-underline hover:bg-teal-700 transition-colors" {...ext}>
                Read Kasper 2022 Clinical Trials Review <i className="fas fa-external-link-alt text-xs" aria-hidden />
              </a>
            </div>
          </section>

          {/* Questions to Ask */}
          <section id="questions" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-teal-200 text-teal-700">
              Questions to Ask Your Oncologist
            </h2>
            <div
              className="rounded-xl p-6 shadow border border-teal-200 mb-6"
              style={{
                background: "linear-gradient(to right, #f0fdfa, #ccfbf1)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                  <i className="fas fa-question-circle text-white text-sm" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold m-0">Suggested Pertinent Questions</h3>
                  <p className="text-sm m-0 mt-1 text-gray-600">Important questions to consider before participating in a clinical trial</p>
                </div>
              </div>
              <ul className="list-none p-0 m-0 space-y-3">
                {[
                  "Are there any other existing established treatments that I should consider before participating in this or other clinical trials?",
                  "What phase trial is this– Phase 1, Phase 2 or Phase 3?",
                  "Do I meet the eligibility criteria for the Clinical Trial that I wish to participate in?",
                  "What could my participation in the clinical trial mean for me in the short term / long term, based on the nature of this trial?",
                  "Are there known side effects or risks from the treatment I will receive in this clinical trial? If so, what are they?",
                  "Where will I receive the treatment — as a hospital inpatient or in an outpatient setting?",
                  "Must the treatment only be administered at a participating research center requiring travel to the center?",
                  "What is the treatment protocol — number of drugs or agents to be administered, route of administration (oral or intravenous), length of time for the administration of the treatment, how many courses of the treatment will I receive, and what is the anticipated duration of the trial?",
                  "Will there be patients enrolled in the trial who will not receive the drugs or agents being tested (i.e. is this a double-blind clinical trial)?",
                  "How will I be monitored during the clinical trial — required blood tests or radiology/imaging studies and their frequency?",
                  "Will serial biopsies be required as part of the clinical trial?",
                  "Would I be allowed to participate in the next phase of the trial, assuming the trial progresses from the phase of the trial that I am participating in?",
                  "Will I receive assistance/guidance on applying for participation in the trial?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 py-2 border-b border-black/10 last:border-0 pl-0">
                    <span className="text-teal-600 font-bold shrink-0">→</span>
                    <span className="text-gray-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 p-5 bg-gray-100 rounded-xl border border-gray-200 mb-8">
              <i className="fas fa-book-medical text-indigo-500 text-2xl shrink-0" aria-hidden />
              <div>
                <h4 className="font-semibold text-gray-900 m-0 mb-1">Patient-Friendly Language Resources</h4>
                <p className="text-gray-600 text-sm m-0 mb-3">
                  The FDA Oncology Center of Excellence Patient-Friendly Language Project provides definitions of common terms used in cancer clinical trials for better understanding.
                </p>
                <a href="https://www.fda.gov/about-fda/oncology-center-excellence/patient-friendly-language-cancer-clinical-trials" className="inline-flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded text-sm font-medium no-underline hover:bg-indigo-700 transition-colors" {...ext}>
                  Visit FDA Resource <i className="fas fa-external-link-alt text-xs" aria-hidden />
                </a>
              </div>
            </div>
          </section>

          {/* Find LMS Trials */}
          <section id="resources" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-purple-200 text-purple-700">
              Find Leiomyosarcoma Clinical Trials
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The following resources can help you locate clinical trials specifically for Leiomyosarcoma patients:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "fa-hospital", title: "National Cancer Institute", desc: "NCI-sponsored Trials/Studies for LMS", href: "https://www.cancer.gov/about-cancer/treatment/clinical-trials/search/r?loc=0&rl=1&t=C3158", label: "View NCI Trials" },
                { icon: "fa-microscope", title: "ClinicalTrials.gov", desc: "Comprehensive database of clinical trials", href: "https://clinicaltrials.gov/ct2/results?cond=Leiomyosarcoma", label: "Search Trials" },
                { icon: "fa-search", title: "WithPower", desc: "Leiomyosarcoma Trials in 2023", href: "https://www.withpower.com/clinical-trials/leiomyosarcoma", label: "View Trials" },
                { icon: "fa-female", title: "Uterine Sarcoma Trials", desc: "NCI trials for uterine sarcoma", href: "https://www.cancer.gov/types/uterine/patient/uterine-sarcoma-treatment-pdq#_135", label: "View Uterine Trials" },
              ].map((r) => (
                <div key={r.title} className="bg-white rounded-xl p-4 shadow border-t-4 border-t-violet-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`fas ${r.icon} text-violet-600 text-xl`} aria-hidden />
                    <h3 className="font-semibold text-gray-900 m-0 text-base">{r.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm m-0 mb-3">{r.desc}</p>
                  <a href={r.href} className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                    {r.label} <i className="fas fa-arrow-right text-xs" aria-hidden />
                  </a>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">International Clinical Trials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
                  <i className="fas fa-globe-europe text-indigo-600 text-xl" aria-hidden />
                  <h4 className="font-semibold m-0">European Trials</h4>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { href: "https://www.sarcoma-patients.eu/en/sarcoma-expertise2/sarcoma-centres", title: "SARCOMA PATIENTS EURO.NET", sub: "Sarcoma Specialist Centres with multi-disciplinary teams" },
                    { href: "https://www.orpha.net", title: "ORPHANET", sub: "Resource for rare diseases clinical trials" },
                    { href: "https://euracan.eu/", title: "Expert Care for Rare Adult Solid Cancers | EURACAN", sub: "EURACAN Expert Centres | Find Specialised Rare Cancer Care" },
                    { href: "https://euracan.eu/research/", title: "EURACAN Research", sub: "Advancing Rare Cancer Knowledge" },
                    { href: "https://www.ema.europa.eu/en/medicines/human/clinical-trials/clinical-trials-register", title: "Search for clinical trials - EMA", sub: "European Medicines Agency clinical trials database" },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="block no-underline group" {...ext}>
                      <span className="block font-medium text-gray-900 group-hover:text-violet-600">{l.title}</span>
                      <small className="block text-gray-500 text-xs">{l.sub}</small>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
                  <i className="fas fa-globe-europe text-blue-600 text-xl" aria-hidden />
                  <h4 className="font-semibold m-0">UK Resources</h4>
                </div>
                <div className="p-4">
                  <a href="https://www.cancerresearchuk.org/about-cancer/find-a-clinical-trial/how-to-find-a-clinical-trial" className="block no-underline group" {...ext}>
                    <span className="block font-medium text-gray-900 group-hover:text-violet-600">Cancer Research UK</span>
                    <small className="block text-gray-500 text-xs">Clinical trial finder in the UK</small>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarcoma Centers of Excellence</h3>
              <p className="text-gray-600 mb-4">
                The Sarcoma Alliance Through Research Collaboration (SARC) provides listings and maps of sarcoma centers throughout the USA.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 bg-white border border-gray-200 py-3 px-4 rounded-lg font-medium text-gray-700 no-underline hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700 transition-colors">
                  <i className="fas fa-map-marked-alt text-violet-600" aria-hidden /> View SARC Centers Map
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-white border border-gray-200 py-3 px-4 rounded-lg font-medium text-gray-700 no-underline hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700 transition-colors">
                  <i className="fas fa-search-location text-violet-600" aria-hidden /> SARC Center Locator
                </a>
              </div>
            </div>
          </section>

          {/* Videos & Booklets */}
          <section id="videos" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-rose-200 text-rose-700">
              Videos & Educational Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-200">
                <div className="relative aspect-video bg-gray-800 overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.youtube.com/vi/BcDkmVsehBg/maxresdefault.jpg" alt="Dr. George Demetri on Sarcoma Clinical Trials" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center bg-violet-900/30 group-hover:bg-violet-900/50 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-white">
                      <i className="fas fa-play ml-1" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 m-0 mb-1">Sarcoma Clinical Trials</h3>
                  <p className="text-violet-600 font-medium text-sm m-0 mb-2">Dr. George Demetri, MD, Dana Farber Cancer Institute</p>
                  <p className="text-gray-600 text-sm m-0 mb-3">
                    Dr. Demetri is the Director of the Sarcoma Center at Dana-Farber, director of the Ludwig Center at Dana-Farber/Harvard Cancer Center, and executive director for Clinical and Translational Research at the Ludwig Institute for Cancer Research.
                  </p>
                  <a href="https://www.youtube.com/watch?v=BcDkmVsehBg" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                    Watch Video <i className="fas fa-external-link-alt text-xs" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-200">
                <div className="relative aspect-video bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Informed Consent Video</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 m-0 mb-1">Informed Consent to Participate in a Clinical Trial</h3>
                  <p className="text-violet-600 font-medium text-sm m-0 mb-2">American Cancer Society</p>
                  <p className="text-gray-600 text-sm m-0 mb-3">
                    Learn about the informed consent process for clinical trials and what you need to know before participating.
                  </p>
                  <a href="https://www.cancer.org/treatment/treatments-and-side-effects/clinical-trials/clinical-trials-videos.html" className="inline-flex items-center gap-1 text-violet-600 font-medium text-sm no-underline hover:underline" {...ext}>
                    Watch Video <i className="fas fa-external-link-alt text-xs" aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-100 rounded-xl border border-gray-200 mb-8">
              <i className="fas fa-file-pdf text-rose-600 text-2xl shrink-0" aria-hidden />
              <div>
                <h3 className="font-bold text-gray-900 m-0 mb-1">Clinical Trials Booklet</h3>
                <p className="text-gray-600 text-sm m-0 mb-3">
                  Offered by MD Anderson Cancer Center - More information on what you need to know before participating in clinical trials
                </p>
                <a href="https://www.mdanderson.org/documents/patients-and-family/diagnosis-and-treatment/treatment-options/clinical-trials-booklet.pdf" className="inline-flex items-center gap-2 bg-rose-600 text-white py-2 px-4 rounded font-medium text-sm no-underline hover:bg-rose-700 transition-colors" {...ext}>
                  Download PDF <i className="fas fa-download text-xs" aria-hidden />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "https://www.cancer.gov/publications/dictionaries/cancer-drug", label: "The National Cancer Institute's Cancer Drug Dictionary" },
                { href: "https://www.cancer.gov/publications/dictionaries/cancer-terms", label: "The NCI's Dictionary of Cancer Terms" },
                { href: "https://clinicaltrials.gov/ct2/about-studies/glossary", label: "The ClinicalTrials.gov Glossary of Common Site Terms" },
                { href: "https://www.clinicaltrialsgps.com/", label: "CLINICAL TRIALS – GPS" },
              ].map((r) => (
                <a key={r.href} href={r.href} className="flex items-center gap-3 py-3 px-4 bg-white rounded-lg border border-gray-200 no-underline text-gray-900 font-medium hover:border-violet-500 hover:shadow-md transition-all" {...ext}>
                  <i className="fas fa-book text-violet-600 shrink-0" aria-hidden />
                  <span>{r.label}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
