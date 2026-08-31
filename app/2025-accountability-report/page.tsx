import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2025 Accountability Report | NLMSF",
  description:
    "2025 Accountability Report to the LMS-Sarcoma Community. 2025 in review, research awardees, collaborations, patient resources, and moving forward in 2026.",
};

const YEAR_END_MESSAGE =
  "https://mailchi.mp/nlmsf.org/nlmsf-2025-year-end-message-and-accountability-report";
const SUMMARY_PDF = "/accountability-reports/2025/summary.pdf";
const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const TOC = [
  { href: "#introduction", icon: "fa-info-circle", label: "Introduction" },
  { href: "#2025-review", icon: "fa-calendar-alt", label: "2025 In Review" },
  { href: "#research-awardees", icon: "fa-award", label: "Research Awardees" },
  { href: "#other-funding", icon: "fa-hand-holding-usd", label: "Other Funding" },
  { href: "#repurposed-drug", icon: "fa-pills", label: "Repurposing Drug Initiative" },
  { href: "#collaborations", icon: "fa-handshake", label: "Collaborations" },
  { href: "#patient-resources", icon: "fa-users", label: "Patient Resources" },
  { href: "#online-programs", icon: "fa-laptop", label: "Online Programs" },
  { href: "#moving-forward", icon: "fa-arrow-right", label: "Moving Forward 2026" },
];

function ResearcherCard({
  name,
  affil,
  project,
  note,
}: {
  name: string;
  affil: string;
  project: string;
  note?: string;
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-gradient-to-br from-slate-50 to-gray-100 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <h4 className="mb-2 text-lg font-bold text-slate-800">{name}</h4>
      <p className="mb-4 italic text-gray-500">{affil}</p>
      <div className="rounded-lg border-l-4 border-l-cyan-500 bg-white p-4">
        <strong>Research Project:</strong> {project}
      </div>
      {note ? <p className="mb-0 mt-3 text-sm italic text-gray-500">{note}</p> : null}
    </div>
  );
}

export default function Report2025Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section
        className="relative flex min-h-[400px] items-center justify-center overflow-hidden px-8 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #7e22ce 0%, #4338ca 50%, #059669 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-[20%] h-[60px] w-[60px] rounded-full bg-white/10" />
          <div className="absolute right-[15%] top-[60%] h-[80px] w-[80px] rounded-full bg-white/10" />
          <div className="absolute bottom-[30%] left-[20%] h-[40px] w-[40px] rounded-full bg-white/10" />
        </div>
        <div className="relative z-[2] max-w-[800px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[25px] bg-white/10 px-4 py-2 backdrop-blur-[10px] text-white">
            <i className="fas fa-chart-line" aria-hidden />
            <span>Annual Report</span>
          </div>
          <h1
            className="my-4 text-4xl font-bold md:text-5xl"
            style={{
              background: "linear-gradient(45deg, #ffffff, #e0e7ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            2025 Accountability Report
          </h1>
          <div
            className="mx-auto my-4 h-1 w-[100px] rounded-sm"
            style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)" }}
          />
          <p className="mb-6 text-2xl font-medium text-indigo-100">
            to the LMS-Sarcoma Community
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[10px]">
              2025 In Review
            </span>
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[10px]">
              Moving Forward in 2026
            </span>
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[10px]">
              Research Impact
            </span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-indigo-100">
            2025 in review . . . moving forward in 2026. Research funding, community support, and
            collaborations that keep LMS research moving when other funding is paused or delayed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SUMMARY_PDF}
              {...ext}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-violet-800 no-underline transition hover:bg-indigo-50"
            >
              <i className="fas fa-download" aria-hidden /> Download PDF Report
            </a>
            <a
              href={YEAR_END_MESSAGE}
              {...ext}
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-2.5 font-semibold text-white no-underline transition hover:bg-white/20"
            >
              <i className="fas fa-envelope-open-text" aria-hidden /> Year-End Message
            </a>
            <Link
              href="/accountability-reports-hub/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-transparent px-5 py-2.5 font-semibold text-white no-underline transition hover:bg-white/10"
            >
              All Reports
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-10 grid grid-cols-1 gap-10 items-start md:grid-cols-[280px_1fr]">
        <aside className="sticky top-8 max-md:static">
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <h3 className="bg-gradient-to-br from-violet-700 to-indigo-700 px-4 py-4 text-center text-xl font-semibold text-white">
              Report Navigation
            </h3>
            <nav className="p-6">
              <ul className="m-0 list-none space-y-2 p-0">
                {TOC.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg border-l-4 border-l-transparent px-3 py-3 text-gray-600 no-underline transition-all duration-300 hover:translate-x-1 hover:border-l-amber-400 hover:bg-indigo-500 hover:text-white"
                    >
                      <i className={`fas ${item.icon} w-4 text-center`} aria-hidden />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-200">
              <div className="bg-gradient-to-br from-violet-700 to-indigo-700 p-6 text-center text-white">
                <h4 className="mb-2 text-lg font-semibold">Support Our Mission</h4>
                <p className="mb-4 text-sm opacity-90">
                  Help us continue funding LMS research and supporting the community.
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  <Link
                    href="/donate/"
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-red-700"
                  >
                    <i className="fas fa-donate" aria-hidden /> Donate
                  </Link>
                </div>
                <p className="m-0 flex items-center justify-center gap-2 text-sm">
                  <i className="fas fa-phone" aria-hidden />
                  24/7 Support: <strong>303-808-3437</strong>
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-12 rounded-xl border-l-4 border-violet-700 bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <h2 className="mb-4 mt-0 text-xl font-bold text-gray-900">Contents</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TOC.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border-l-4 border-l-transparent bg-white px-4 py-3 text-indigo-600 no-underline shadow-sm transition-all hover:-translate-x-0.5 hover:border-l-amber-400 hover:bg-indigo-500 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <section id="introduction" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              Introduction
            </h2>
            <div className="p-8">
              <p className="mb-6">
                Since 2001, the National Leiomyosarcoma Foundation (NLMSF) has been working to:
              </p>
              <ul className="list-none space-y-4 p-0">
                {[
                  "Fund LMS-specific research to advance the field of study and accelerate development of clinical trials and treatments.",
                  "Support the LMS patient, family, and caregiver community through education, information sharing, resource assistance, and 24/7 direct phone support.",
                  "Raise global, national, and community awareness of leiomyosarcoma.",
                  "Address unmet needs in treatment, research, clinical trials, and care through the Foundation's International LMS Research Roundtable, in which researchers, clinicians, partner organizations, and the LMS community collaborate to achieve meaningful progress.",
                ].map((text) => (
                  <li
                    key={text}
                    className="rounded-lg border-l-4 border-l-sky-500 bg-gradient-to-br from-sky-50 to-blue-50 p-4 pl-6 before:mr-2 before:font-bold before:text-sky-500 before:content-['→']"
                  >
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mb-4 mt-6">
                Research funding is the backbone of transforming patient treatment and, ultimately,
                survivorship. At a time when much research funding has been paused or delayed,
                philanthropic support is more critical than ever to keep LMS research moving forward.
              </p>
              <p className="mb-4">
                New drug discoveries are being tested all the time, but it takes money to continue the
                research. We aim to fuel the future of research breakthroughs for more options besides
                the 40-year-old drugs that have been relied upon for years for LMS treatment.
                Repurposing drug discoveries is also an important focus of this Foundation.
              </p>
              <p className="m-0">
                The power of people coming together is what makes all the difference. Together with
                the LMS-sarcoma community, we continue to move forward to pursue these objectives.
              </p>
            </div>
          </section>

          <section id="2025-review" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              2025 In Review
            </h2>
            <div className="p-8">
              <div id="research-awardees" className="mb-12 scroll-mt-8">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  NLMSF 2025 Research Awardees
                </h3>
                <p className="mb-6 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  The following grant was awarded in 2025, with funding for 2026–2027
                </p>
                <ResearcherCard
                  name="Robert J. Canter, MD"
                  affil="Chief, Dept. of Surgery, UC Davis Comprehensive Cancer Center, Sacramento, CA"
                  project="Pre-Clinical Evaluation of Placental-Derived Natural Killer (NK) Cells to Target Leiomyosarcoma. The project focuses on this hypothesis: Placental-derived NK cells are more stem-like, leading to greater persistence in vivo compared to other sources of NK cells such as peripheral blood mononuclear cells (PBMCs), thereby paving the way to improved and more durable anti-tumor effects in LMS patients."
                  note="Funding begins in 2026."
                />

                <h3 className="m-0 mb-6 mt-10 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Continuing Research Funding (2025)
                </h3>
                <p className="mb-6 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  The following grant was awarded in 2024, with one-year funding during 2025
                </p>
                <ResearcherCard
                  name="Everett Moding, MD"
                  affil="Physician-scientist, Department of Radiation Oncology, Stanford University — with Maggie Zhou, MD, instructor in the Division of Oncology at Stanford. Special LMS project associated with the SARC Catalyst Program."
                  project="Correlative analysis of CSF-1R blockade and immunotherapy in leiomyosarcoma. Drs. Moding and Zhou will analyze tumor and blood specimens collected from a clinical trial combining CSF-1R blockade and immunotherapy in patients with leiomyosarcoma. They aim to show that CSF-1R blockade can improve the efficacy of immunotherapy by blocking the recruitment of immunosuppressive macrophages and targeting leiomyosarcoma tumor cells."
                  note="Co-funded by NLMSF and the LMS Support and Direct Research Foundation; administered by SARC (Sarcoma Alliance for Research through Collaboration)."
                />

                <p className="mb-6 mt-8 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  The following two grants were awarded in 2024, with funding for 2025–2026
                </p>
                <ResearcherCard
                  name="Frederic Amant, MD, PhD"
                  affil="Professor of Gynecologic Oncology at the University of Leuven, Univ. Hospitals Leuven, Belgium"
                  project="Exploiting the Immunomodulatory Effect of PI3K/mTOR Inhibitors to Improve Immunotherapy Response in Leiomyosarcoma. This research explores how enhancing the adaptive immune response in LMS tumors through PI3K/mTOR inhibition may render them more responsive to ICB, a downstream target of the PI3K/mTOR pathway, potentially serving as a predictive biomarker for response. The project investigates the immunomodulatory effects of PI3K/mTOR inhibitors on the tumor microenvironment (TME) and their capacity to overcome primary ICB resistance in LMS, integrating LMS humanized PDX models with immune checkpoint inhibition to reshape the tumor microenvironment in response to PI3K/mTOR inhibition and/or PD-1 blockade."
                  note="First year of 2-year funding."
                />
                <ResearcherCard
                  name="Marisa Nucci, MD"
                  affil="Division Chief, Perinatal Pathology, Brigham and Women's Hospital; Professor of Pathology, Harvard Medical School, Boston, MA"
                  project="Exploiting High-throughput Deep Learning to Improve Uterine Leiomyosarcoma Diagnostics — Deep ULMS. This project aims to establish an innovative platform utilizing advanced Artificial Intelligence techniques for the comprehensive characterization of uterine leiomyosarcoma. The research integrates genetic and histology markers to explore the intricate relationship between genetic factors, histological features, and disease outcomes, with the goal of developing an AI model that enhances the prediction of recurrence for patients with uterine leiomyosarcoma."
                  note="First year of 2-year funding."
                />

                <p className="mb-6 mt-8 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  The following two grants were awarded in 2023, with funding for 2024–2025
                </p>
                <ResearcherCard
                  name="Priya Chudasama, PhD"
                  affil="German Cancer Research Center, Heidelberg, Germany"
                  project="Spatial heterogeneity and therapeutic implications of activated telomere maintenance mechanisms in leiomyosarcoma."
                  note="Second year of 2-year funding."
                />
                <ResearcherCard
                  name="Joanna Przybyl, PhD"
                  affil="McGill University, Montreal, Quebec, Canada"
                  project="Development of the multi-omic liquid biopsy assay for the pre-operative diagnosis of uterine leiomyosarcoma and benign leiomyoma."
                  note="Second year of 2-year funding."
                />
              </div>

              <div id="other-funding" className="scroll-mt-8">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Other Research Funding Commitments (2025)
                </h3>
                <div className="space-y-6">
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      The NLMSF-SPAGN International LMS Research Roundtable
                    </h4>
                    <p className="mb-4 text-gray-700">
                      The NLMSF, together with the globally based organization now known as SPAGN
                      (Sarcoma Patient Advocacy Global Network), launched this effort in 2019. The
                      project engages a body of research clinicians, pathologists and lab colleagues
                      to focus on the future of leiomyosarcoma investigational research and clinical
                      trials, with workgroup communications throughout the year and an annual meeting
                      of the entire group. Now in its eighth year, this group met in Berlin in
                      October 2025, with over 60 researchers in attendance.
                    </p>
                    <div className="rounded-lg border-l-4 border-l-sky-500 bg-sky-50 p-4">
                      <p className="mb-2 font-semibold">The Research Roundtable Working Groups are:</p>
                      <ul className="m-0 list-none space-y-2 p-0">
                        {[
                          "LMS Cell Lines / PDX Models / Proteomics and Multiomics",
                          "Gynecologic Issues (STUMP)",
                          "Clinical Trial Assessment",
                          "Imaging Strategies and Radiomics",
                        ].map((item) => (
                          <li
                            key={item}
                            className="rounded-md border-l-2 border-l-cyan-500 bg-white py-2 pl-4 pr-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mb-0 mt-4">
                        Learn more about the{" "}
                        <Link
                          href="/international-research-roundtable/"
                          className="font-semibold text-indigo-600 hover:underline"
                        >
                          Research Roundtable
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      NLMSF Early Career Award 2025
                    </h4>
                    <p className="m-0 text-gray-700">
                      This award, also recognized as the Peer Faculty Recognition Award, is presented
                      annually to emerging researchers in the leiomyosarcoma field. It provides a
                      travel stipend to attend the Research Roundtable meeting, contribute to a
                      workgroup of choice, and present during the Roundtable. The awardee is mentored
                      by the workgroup leader. The 2025 awardee was Dr. Ryan Denu, MD, PhD, MD
                      Anderson Cancer Center.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      NLMSF Faculty Recognition Award
                    </h4>
                    <p className="m-0 text-gray-700">
                      In 2025, NLMSF launched this non-monetary award, which will be granted to a
                      junior faculty member within 5–7 years from initial faculty position. The
                      awardee will be integrated into the International Research Roundtable
                      workgroups. The first award will be presented in 2026.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      SARC Catalyst Program: Young Researcher Travel Award
                    </h4>
                    <p className="m-0 text-gray-700">
                      Keila E. Torres, MD, PhD, MBA, FACS, is the founder and leader of the SARC
                      Catalyst Program, co-led with SARC&apos;s Chief Scientific Officer Jonathan
                      Fletcher, MD. The NLMSF provides funding annually to support a young researcher
                      in attending and presenting at the meeting. The 2025 Young Researcher awardee
                      was Everett Moding, MD, Stanford University; this was in connection with a
                      research grant to Dr. Moding, described above.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      SARC SASS Program&apos;s Young Investigator Award
                    </h4>
                    <p className="m-0 text-gray-700">
                      Beginning in 2023, the NLMSF has supported SARC&apos;s SASS (Strategic Advances
                      in Sarcoma Science) program by supporting young investigators through the
                      competitive SASS program, which features collaborative research and a Think Tank
                      approach at a conference at the National Institutes of Health. NLMSF&apos;s
                      award goes to a fund administered by SARC.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">
                      University of Michigan — LMS SPORE Project
                    </h4>
                    <p className="m-0 text-gray-700">
                      The Leiomyosarcoma SPORE (Specialized Programs of Research Excellence) is a
                      multi-institutional, international research program led by the University of
                      Michigan Rogel Cancer Center. Funded by the National Cancer Institute (NCI) in
                      2022, this landmark grant brought together leading sarcoma centers across the
                      U.S., Canada, and Australia to advance understanding of LMS genetics, biology,
                      and therapeutic approaches. The year 2025 was the fourth year of our five-year
                      funding commitment, alongside partners including Rein in Sarcoma and the
                      Sarcoma Foundation of America. Research priorities include identifying genomic
                      vulnerabilities in LMS, studying genetic epidemiology and cancer predisposition
                      syndromes such as Li-Fraumeni Syndrome, and developing biomarkers to assess
                      treatment response. NLMSF Board Member Dr. Mitch Achee serves as Patient
                      Advocate representative on the External Advisory Committee of this project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="repurposed-drug" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-red-600 to-red-800 px-8 py-6 text-2xl font-bold text-white">
              Repurposing Drug Initiative (2025)
            </h2>
            <div className="p-8">
              <p className="mb-8">
                As drug costs continue to escalate, the Foundation has established the NLMSF
                Repurposing Drug Research Initiative to explore possible new leiomyosarcoma and
                sarcoma treatment options on behalf of the LMS patient community. The NLMSF has
                collaborated for several years with some of these organizations and, in 2025, expanded
                the reach of this initiative through additional partnerships.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: "The Cell Line / Omics Workgroup of the NLMSF-SPAGN International LMS Research Roundtable",
                    sub: "Matt Hemming, MD, PhD, UMass Chan Medical School",
                  },
                  {
                    title: "CURE ID Drug Repurposing Collaboration",
                    sub: "Heather Stone, PhD, Health Science Policy Analyst, FDA. CURE ID is an internet-based repository that allows the global community to report novel uses of existing drugs for difficult-to-treat diseases through a website, a smartphone, or other mobile device.",
                    link: "https://www.fda.gov/drugs/science-and-research-drugs/cure-id-app-lets-clinicians-report-novel-uses-existing-drugs",
                  },
                  {
                    title: "MD Anderson Cancer Center",
                    sub: "Wontong Yao, MD, PhD, of the Yao Research Lab",
                  },
                  {
                    title: "The Repurposed Drug Task Force, University of Michigan Multidisciplinary Sarcoma Clinic",
                    sub: "Denise Reinke, MS, NP, MBA. Drug Repurposing at the University of Michigan brings sarcoma groups together to explore strategies for engaging in repurposed drug research.",
                    link: "https://drugrepurposing.umich.edu/",
                  },
                  {
                    title: "The Tracer Project",
                    sub: "T. Gujral, PhD, Fred Hutchinson Cancer Center",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h4 className="mb-3 text-base font-semibold leading-snug text-red-900">{item.title}</h4>
                    <p className="m-0 text-sm text-gray-700">
                      {item.sub}
                      {"link" in item && item.link ? (
                        <>
                          {" "}
                          <a href={item.link} {...ext} className="text-indigo-600 hover:underline">
                            Learn more
                          </a>
                        </>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="collaborations" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-emerald-600 to-emerald-800 px-8 py-6 text-2xl font-bold text-white">
              Other Collaborations (2025)
            </h2>
            <div className="p-8">
              <p className="mb-6">In 2025, the Foundation embarked on a new collaboration:</p>
              <div className="mb-8 rounded-xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-100 p-6">
                <h3 className="mb-4 text-xl font-bold text-emerald-900">
                  Dr. David Liebner — PCORI Grant Application
                </h3>
                <p className="m-0 text-gray-700">
                  Dr. David Liebner, James Cancer Center, Ohio, is working on a PCORI
                  (Patient-Centered Outcomes Research Institute) grant application entitled: A
                  randomized study evaluating neoadjuvant doxorubicin and ifosfamide versus no chemo
                  in patients with resectable high-risk soft tissue sarcoma who are candidates for
                  pembrolizumab and radiation. PCORI requires an engagement plan. The National LMS
                  Foundation, Annie Achee, and the Sarcoma Coalition will lead that effort and oversee
                  the activities of the advisory committee.
                </p>
              </div>

              <h3 className="mb-6 text-xl font-semibold text-gray-900">Research Initiatives</h3>
              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Boston Gene</h4>
                  <p className="m-0 text-sm text-gray-700">
                    Molecular and immune profiling to assist in treatment selection for patients with
                    cancer.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">
                    Cell Line Development at the Broad Institute (Harvard / MIT)
                  </h4>
                  <p className="m-0 text-sm text-gray-700">
                    Ongoing collaboration to develop verifiable LMS cell lines.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Count Me In — LMS Project</h4>
                  <p className="m-0 text-sm text-gray-700">
                    A patient-partnered research initiative of Dana-Farber Cancer Institute and the
                    Broad Institute that the NLMSF has supported by encouraging patient participation.
                    In December 2025 the data-collection phase successfully came to a close. In 2026,
                    the project is going into an evaluation phase, for which the NLMSF has made a
                    funding commitment.{" "}
                    <Link href="/lms-count-me-in-project/" className="text-indigo-600 hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">
                    Huntsman Cancer Institute Heredity Genomic Counseling Project
                  </h4>
                  <p className="m-0 text-sm text-gray-700">
                    Continuing partnership on a patient-driven data collection initiative exploring
                    LMS heritability and interest in genetic testing.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">
                    Koch Research Institute / Rare Cancer Research Foundation
                  </h4>
                  <p className="m-0 text-sm text-gray-700">
                    The NLMSF encourages patients having surgery to donate fresh tumor tissue to the
                    Boehm Lab at the Koch Institute for Integrative Cancer Research at MIT through{" "}
                    <a href="https://www.pattern.org" {...ext} className="text-indigo-600 hover:underline">
                      pattern.org
                    </a>
                    , an initiative of the Rare Cancer Research Foundation.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">PCORI Clinical Trial Advocacy Committee</h4>
                  <p className="m-0 text-sm text-gray-700">
                    NLMSF participation in patient-centered outcomes research advocacy.
                  </p>
                </div>
              </div>

              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Pan-Sarcoma Organizations / Working Groups
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "ECOG-ACRIN",
                    p: "The ECOG-ACRIN Cancer Research Group is a network of nearly 1400 academic and community-based cancer centers and hospitals in the United States and around the world involved in designing and conducting biomarker-driven cancer research. Foundation members serve on the Patient Advocate Research Committee and the Sarcoma, Imaging and Cardiotoxicity Workgroups for this clinical trials-focused organization.",
                    link: "https://ecog-acrin.org/",
                  },
                  {
                    title: "Haystack Project / Rare Cancer Policy Coalition",
                    p: "In 2025, the NLMSF became a member of the Haystack Foundation's Rare Cancer Policy Coalition (RCPC), an organization dedicated to ensuring patient access to treatment options for those with rare and ultra-rare diseases.",
                    link: "https://haystackproject.org/",
                  },
                  {
                    title: "NORD (National Organization for Rare Disorders)",
                    p: "Continued membership and collaboration with NORD on rare-disease advocacy and patient resources.",
                    link: "https://rarediseases.org/",
                  },
                  {
                    title: "SARC (Sarcoma Alliance for Research through Collaboration)",
                    p: "SARC is a U.S.-based nonprofit cancer research organization. NLMSF board members serve on SARC's Research Advocacy Committee and participate in the SARC Sarcoma Center Directory Steering Advisory Committee.",
                    link: "https://sarctrials.org/",
                  },
                  {
                    title: "Sarcoma Coalition",
                    p: "The NLMSF is active in the Sarcoma Coalition, a nonprofit co-founded in 2017 by NLMSF board member Annie Achee and representatives from two other groups, SARC and Rein In Sarcoma. Ms. Achee serves on the steering committee. The Coalition works to foster collaborative sarcoma advocacy initiatives with both sarcoma-subtype organizations and pan-sarcoma organizations. The NLMSF also helps the Coalition produce its Listen and Learn Series. During 2025, two new groups joined the Coalition, bringing the number of participating sarcoma advocacy organizations to 37.",
                    link: "https://sarcomacoalition.us/",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-emerald-200 border-l-4 border-l-emerald-500 bg-white p-6"
                  >
                    <h4 className="mb-3 font-semibold text-emerald-900">{item.title}</h4>
                    <p className="m-0 text-gray-700">
                      {item.p}{" "}
                      <a href={item.link} {...ext} className="text-indigo-600 hover:underline">
                        Visit website
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                <h4 className="mb-3 font-semibold text-emerald-900">
                  Attendance at Annual Sarcoma Meetings
                </h4>
                <p className="m-0 text-gray-700">
                  NLMSF representatives attend several annual sarcoma-specific meetings throughout
                  the year to learn more about progress in LMS / sarcoma research and meet with the
                  experts to discuss collaboration for future virtual and onsite patient-family
                  forums.
                </p>
              </div>
            </div>
          </section>

          <section id="patient-resources" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-6 text-2xl font-bold text-white">
              Patient / Caregiver Resources (2025)
            </h2>
            <div className="p-8">
              <p className="mb-8">
                In 2025 we continued our ongoing work through many programs and channels. You can
                read a full list of our support groups, support services, and educational programs on{" "}
                <Link href="/our-programs/" className="font-semibold text-indigo-600 hover:underline">
                  Our Programs
                </Link>
                . Following are just a few of the highlights:
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Three websites providing information</h4>
                  <p className="mb-4 text-sm text-gray-700">
                    Patient and caregiver resources; research updates, clinical trials,
                    patient-driven research initiatives; and well-being resources.
                  </p>
                  <ul className="list-none space-y-1 p-0">
                    <li className="before:mr-2 before:font-bold before:text-cyan-600 before:content-['→']">
                      <a href="https://nlmsf.org/" {...ext} className="text-indigo-600 hover:underline">
                        nlmsf.org
                      </a>
                    </li>
                    <li className="before:mr-2 before:font-bold before:text-cyan-600 before:content-['→']">
                      <a href="https://leiomyosarcoma.info" {...ext} className="text-indigo-600 hover:underline">
                        leiomyosarcoma.info
                      </a>
                    </li>
                    <li className="before:mr-2 before:font-bold before:text-cyan-600 before:content-['→']">
                      <a href="https://nlmsflifechange.com/" {...ext} className="text-indigo-600 hover:underline">
                        nlmsflifechange.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-amber-200 border-l-4 border-l-amber-600 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 text-center">
                  <h4 className="mb-3 font-semibold text-amber-900">24/7 Lifeline Support Hotline</h4>
                  <p className="mb-2 text-2xl font-bold text-red-600">303-808-3437</p>
                  <p className="m-0 text-sm text-gray-700">
                    The Foundation&apos;s support hotline is available 24 hours a day, 7 days a week.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">LMS Lifeline Buddy Program</h4>
                  <p className="m-0 text-sm text-gray-700">
                    Peer-to-peer patient and / or caregiver matching for one-on-one support.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Connect with a Clinician Program</h4>
                  <p className="m-0 text-sm text-gray-700">
                    An ad hoc program that helps users connect with sarcoma and/or oncology experts
                    who can answer questions about treatment options.{" "}
                    <Link href="/find-a-sarcoma-specialist/" className="text-indigo-600 hover:underline">
                      Find a sarcoma specialist
                    </Link>
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Social media</h4>
                  <p className="m-0 text-sm text-gray-700">
                    The NLMSF maintains three Facebook pages and regularly posts to them and to
                    other community Facebook pages to encourage conversation and connections in the
                    patient and caregiver communities.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Weekly email newsletters</h4>
                  <p className="m-0 text-sm text-gray-700">
                    The LMS / Sarcoma Community Connection Newsletter and Sarcoma Snapshot News /
                    Sarcoma Sound Bytes. Subscribe under &quot;stay informed&quot; on our{" "}
                    <Link href="/" className="text-indigo-600 hover:underline">
                      home page
                    </Link>
                    .
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Savor Health</h4>
                  <p className="m-0 text-sm text-gray-700">
                    Nutrition guidance to optimize health outcomes.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Pete&apos;s Blankets of Hope</h4>
                  <p className="m-0 text-sm text-gray-700">
                    Offers cancer patients colorful blankets made from donated yarn.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6 md:col-span-2">
                  <h4 className="mb-3 font-semibold text-cyan-900">Imerman Angels</h4>
                  <p className="m-0 text-sm text-gray-700">
                    Guidance and resources, one-on-one support for cancer fighters and caregivers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="online-programs" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-violet-900 px-8 py-6 text-2xl font-bold text-white">
              Online Patient / Caregiver Programs (2025)
            </h2>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: "LMS Research in Review",
                    p: "Virtual discussions with experts are presented throughout the year via Zoom. Members of the global research community speak about their current research initiatives, clinical trials, and treatment updates in progress, with the opportunity for patients / caregivers to ask questions. These presentations are also recorded and made available on our website for later viewing.",
                    href: "/events/",
                    linkLabel: "View programs",
                  },
                  {
                    title: "Clinical Trials: Patient/Caregiver Perspectives",
                    p: "This discussion group meets on Zoom several times per year to discuss patient and caregiver experiences with clinical trials and suggestions on how trials could be improved. NLMSF board members serve on various committees with clinical trial working groups and can convey valuable suggestions generated in this group to clinicians planning / running clinical trials.",
                  },
                  {
                    title: "Caregiving Counts Advocacy Network",
                    p: "This discussion group, held several times per year via Zoom, is focused toward caregivers but patients are encouraged to attend. Caregivers relatively new to LMS find it extremely helpful to hear from those who have been there before. (Includes podcasts and handout materials.)",
                  },
                  {
                    title: "THE ABC's of the LMS Diagnosis and Treatment Journey",
                    p: "This program / discussion group for new and existing patients and their families is held via Zoom several times per year. We talk about initial steps for newly diagnosed patients, finding a sarcoma center for treatment, questions to ask at appointments, how to talk to the oncology care team, and more. This group is useful to patients in all phases of diagnosis and treatment.",
                    href: "/abcs-of-new-diagnosis/",
                    linkLabel: "ABC's of a new diagnosis",
                  },
                  {
                    title: "Survivorship Care Clinic",
                    p: "This occasional online discussion group covers the significance, objectives, and usefulness of having a survivorship care plan in place both during and after cancer treatment. A plan helps patients and their healthcare teams manage ongoing healthcare needs, address any potential long-term side effects, and ensure a smooth transition into post-treatment life. (Notes from each meeting, podcasts, and handout materials are available.)",
                  },
                  {
                    title: "Wellness – Integrative Medicine Guidance for Patients",
                    p: "This series was new in 2024 and continued in 2025. It incorporates nutrition, exercise, and psychosocial well-being and includes survivorship peer clinic sessions for patients, throughout the course of treatment and afterwards.",
                    href: "/nutrition-and-physical-activity/",
                    linkLabel: "Nutrition and physical activity",
                  },
                  {
                    title: "Open to Hope – Crisis and Bereavement Group",
                    p: "This discussion group, scheduled as needed, supports family members left behind in grief, depression or anxiety. It offers support in \"picking up the pieces\" and rebuilding lives, including with children. The group also welcomes family members who are in crisis with facing the day-to-day challenge of a loved one's difficult cancer journey and trying to build bridges of supportive communication.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-violet-200 border-l-4 border-l-violet-700 bg-gradient-to-br from-violet-50 to-purple-50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h4 className="mb-3 font-semibold leading-snug text-violet-900">{item.title}</h4>
                    <p className="m-0 text-sm leading-relaxed text-violet-800">
                      {item.p}
                      {item.href ? (
                        <>
                          {" "}
                          <Link href={item.href} className="font-semibold text-indigo-600 hover:underline">
                            {item.linkLabel}
                          </Link>
                        </>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="moving-forward" className="mb-16 scroll-mt-8 overflow-hidden rounded-xl bg-white shadow-md">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              Moving Forward in 2026
            </h2>
            <div className="p-8">
              <p className="mb-10">
                We are in our 26th year of serving the LMS community, having increased and deepened
                connections with the patient community and research community every single year along
                the way. The following are the Foundation&apos;s activities as we proceed through
                2026:
              </p>

              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  NLMSF 2026 Research Awardee
                </h3>
                <p className="mb-6 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  The following grant is being awarded in 2026, with funding for 2027–2028
                </p>
                <ResearcherCard
                  name="Brooke Howitt, MD"
                  affil="Associate Professor, Pathology Dept. — Stanford University, Stanford Health"
                  project="Comprehensive Characterization of Rare Uterine Sarcomas for Improved Diagnostic Accuracy. This grant focuses on a set of extremely rare uterine sarcomas (rarer even than leiomyosarcomas) that require better characterization, including the STUMP category and other sarcomas often difficult to distinguish from leiomyomas and leiomyosarcomas. The project involves collaboration with patient advocate networks, pathologists, and oncologists from multiple institutions to assemble a large cohort of cases, aiming to develop improved mechanisms for accurate diagnosis. This work will benefit all patients, including those with LMS, by enhancing diagnostic precision."
                  note="Two-year funding begins in 2027."
                />
              </div>

              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Continuing Research Funding 2026
                </h3>
                <p className="mb-4 text-gray-700">Funding continues for the following projects.</p>
                <p className="mb-6 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  Awarded in 2025, with funding for 2026–2027
                </p>
                <div className="mb-6 rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-white p-6">
                  <h4 className="mb-2 text-lg font-bold text-slate-800">Robert J. Canter, MD</h4>
                  <p className="mb-2 italic text-gray-500">
                    Chief, Dept. of Surgery, UC Davis Comprehensive Cancer Center, Sacramento, CA
                  </p>
                  <p className="m-0 text-gray-700">
                    Pre-Clinical Evaluation of Placental-Derived Natural Killer (NK) Cells to Target
                    Leiomyosarcoma. See{" "}
                    <a href="#research-awardees" className="font-semibold text-indigo-600 hover:underline">
                      2025 Research Awardees
                    </a>{" "}
                    for the full description.
                  </p>
                </div>
                <p className="mb-6 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 italic text-gray-500">
                  Awarded in 2024, with funding for 2025–2026
                </p>
                <div className="mb-4 rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-white p-6">
                  <h4 className="mb-1 text-lg font-bold text-slate-800">Frederic Amant, MD, PhD</h4>
                  <p className="m-0 text-gray-700">
                    Exploiting the Immunomodulatory Effect of PI3K/mTOR Inhibitors to Improve
                    Immunotherapy Response in Leiomyosarcoma.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-white p-6">
                  <h4 className="mb-1 text-lg font-bold text-slate-800">Marisa Nucci, MD</h4>
                  <p className="m-0 text-gray-700">
                    Exploiting High-throughput Deep Learning to Improve Uterine Leiomyosarcoma
                    Diagnostics — Deep ULMS.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Other Research Funding Commitments 2026
                </h3>
                <p className="mb-6 text-gray-700">
                  In 2026, the NLMSF will continue its financial support of all the programs listed
                  under Other Research Funding Commitments 2025, above. In addition:
                </p>
                <div className="rounded-xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-100 p-6">
                  <h4 className="mb-3 text-lg font-bold text-emerald-900">Count Me In — LMS Project</h4>
                  <p className="m-0 text-gray-700">
                    The Count Me In (CMI) LMS Project, a project of Dana-Farber Cancer Institute and
                    the Broad Institute, is a patient-partnered research initiative that the NLMSF
                    has supported for several years by encouraging patient participation throughout
                    our community. In December 2025 the data-collection phase of this project
                    successfully came to a close. Now the project is going into an evaluation phase
                    to analyze the rich dataset generated by this project. The NLMSF has committed to
                    fund half of the projected cost of the evaluation phase, payable in installments.
                    The purpose is to ensure this landmark LMS dataset can be fully analyzed and
                    turned into actionable research findings for patients.
                  </p>
                </div>
              </div>

              <div className="mb-10 space-y-6">
                <div className="rounded-xl border border-gray-200 border-l-4 border-l-red-600 bg-white p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Repurposing Drug Initiative (2026)</h4>
                  <p className="m-0 text-gray-700">
                    In 2026, the NLMSF will continue its work on this initiative in collaboration
                    with the same partners as in 2025.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                  <h4 className="mb-3 font-semibold text-emerald-900">Other Collaborations (2026)</h4>
                  <p className="m-0 text-gray-700">
                    In 2026, the Foundation will continue its work with the same projects and
                    organizations as in 2025. In addition, the NLMSF will participate in a patient
                    program for an innovative novel clinical trial for LMS being undertaken by Storm
                    Therapeutics.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Patient / Caregiver Resources (2026)
                </h3>
                <p className="mb-6 text-gray-700">
                  In 2026, the Foundation will also continue all the support resources listed above,
                  which are at the heart of its service and advocacy. Find a more complete list of
                  these support resources on{" "}
                  <Link href="/our-programs/" className="font-semibold text-indigo-600 hover:underline">
                    Our Programs
                  </Link>
                  .
                </p>
                <div className="rounded-xl border-2 border-violet-400 bg-gradient-to-br from-violet-50 to-purple-50 p-6">
                  <h4 className="mb-3 text-lg font-bold text-violet-900">
                    New in 2026! Sharing Voices Community Forums
                  </h4>
                  <p className="mb-4 text-gray-700">
                    In early 2026 we introduced a new community forum: Sharing Voices — a
                    password-protected site, moderated for kindness and safety, designed to be quieter
                    and gentler than Facebook or other online forums. Not a medical forum, it is a
                    place most for reflection, encouragement, and connection, shared by people who
                    understand the leiomyosarcoma journey. There are two separate communication
                    platforms on this forum:
                  </p>
                  <ul className="mb-0 list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      <a href="https://patients.nlmsf.org" {...ext} className="font-semibold text-indigo-600 hover:underline">
                        Patients Platform
                      </a>{" "}
                      — for patients walking the LMS journey
                    </li>
                    <li>
                      <a href="https://caregivers.nlmsf.org" {...ext} className="font-semibold text-indigo-600 hover:underline">
                        Caregivers Platform
                      </a>{" "}
                      — for caregivers supporting someone on the LMS journey
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Online Patient / Caregiver Programs (2026)
                </h3>
                <p className="mb-6 text-gray-700">
                  Throughout 2026, we will continue to present a robust series of Zoom meetings and
                  discussions for patients and caregivers as in 2025, including bringing interesting
                  and pertinent researchers to our community to educate patients about the disease,
                  treatment side effects to be mindful of, and new treatments on the horizon.
                  Upcoming programs can always be found on our{" "}
                  <Link href="/" className="font-semibold text-indigo-600 hover:underline">
                    home page
                  </Link>
                  .
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-teal-400 bg-gradient-to-br from-teal-50 to-emerald-50 p-6">
                    <h4 className="mb-3 font-semibold text-teal-900">
                      New in 2026! Circle of Hope Community Roundtable
                    </h4>
                    <p className="m-0 text-sm text-gray-700">
                      In January 2026, we launched this new initiative that harnesses patient power
                      to come up with new ideas and insights to have an impact on the future of
                      sarcoma diagnosis, treatment, care, and survivorship. This is a periodic online
                      gathering focusing on how to address unmet needs in care and treatment.{" "}
                      <Link href="/patient-unmet-needs/" className="font-semibold text-indigo-600 hover:underline">
                        Addressing Patients&apos; Common Challenges
                      </Link>
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-teal-400 bg-gradient-to-br from-teal-50 to-emerald-50 p-6">
                    <h4 className="mb-3 font-semibold text-teal-900">
                      New in 2026! Sarcoma Educational Forum
                    </h4>
                    <p className="m-0 text-sm text-gray-700">
                      The NLMSF will be collaborating with the Dana-Farber Cancer Institute to
                      develop this program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
