import type { Metadata } from "next";
import Link from "next/link";
import { Outfit, Fraunces } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-report-body",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-report-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2023 Accountability Report | NLMSF",
  description:
    "A Year in Review - Looking Back at 2023, Moving Forward in 2024. NLMSF 23rd year of advancing leiomyosarcoma research, patient support, and community advocacy.",
};

const gradientText =
  "bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 bg-clip-text text-transparent inline-block";
const card =
  "bg-white rounded-2xl p-8 mb-8 shadow-[0_2px_12px_rgba(30,27,75,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-violet-500/[0.06] transition-all duration-[0.25s] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(124,58,237,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:border-violet-500/10";
const cardHeader = "flex justify-between items-start mb-6 flex-wrap gap-2";
const cardTitle = "font-report-display text-[1.35rem] font-semibold m-0 text-indigo-900 tracking-tight";
const cardSubtitle = "block text-[0.9rem] text-indigo-500 mt-1 font-medium";
const sectionTitle = "font-report-display text-2xl md:text-[1.75rem] font-semibold mt-12 mb-6 text-indigo-900 tracking-tight";
const noteBox =
  "bg-gradient-to-br from-slate-50/95 to-slate-100/98 border-l-4 border-l-violet-600 py-5 px-6 my-8 rounded-lg shadow-[0_1px_3px_rgba(124,58,237,0.06)] [&>p:last-child]:mb-0";
const contentLink =
  "text-violet-700 font-semibold relative pb-0.5 no-underline transition-colors duration-200 hover:text-violet-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 hover:after:w-full";
const contentList = "pl-5 [&>li]:mb-3 [&>li]:pl-2 [&>li]:text-slate-700";
const itemSpacing = "mb-6 last:mb-0";
const ctaBox = "mt-6 [&>p]:mb-3";

export default function Report2023Page() {
  return (
    <main
      className={`min-h-screen leading-[1.65] text-[#1e1b4b] bg-gradient-to-b from-[#faf8ff] via-[#f5f3ff] to-[#f8f7fc] ${outfit.variable} ${fraunces.variable}`}
      style={{ fontFamily: "var(--font-report-body), 'Outfit', system-ui, sans-serif" }}
    >
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-8 relative overflow-hidden rounded-2xl pt-7 px-8 pb-8 bg-gradient-to-br from-violet-500/10 via-indigo-500/[0.06] to-indigo-600/5 shadow-[0_4px_24px_rgba(124,58,237,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-violet-500/10">
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div
            className="absolute rounded-full opacity-50 animate-report-2023-float bg-[radial-gradient(circle,rgba(126,34,206,0.3)_0%,rgba(126,34,206,0.1)_70%)]"
            style={{ top: "10%", left: "15%", width: 80, height: 80 }}
          />
          <div
            className="absolute rounded-full opacity-50 animate-report-2023-float bg-[radial-gradient(circle,rgba(67,56,202,0.3)_0%,rgba(67,56,202,0.1)_70%)]"
            style={{ top: "60%", right: "20%", width: 120, height: 120, animationDelay: "2s" }}
          />
          <div
            className="absolute rounded-full opacity-50 animate-report-2023-float bg-[radial-gradient(circle,rgba(4,120,87,0.3)_0%,rgba(4,120,87,0.1)_70%)]"
            style={{ bottom: "20%", left: "25%", width: 60, height: 60, animationDelay: "4s" }}
          />
        </div>
        <div className="relative z-[2] flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-violet-600 to-violet-700 text-white py-[0.45rem] px-[1.1rem] rounded-full mb-5 text-[0.8125rem] font-semibold tracking-wide w-fit shadow-[0_4px_14px_rgba(124,58,237,0.35)]">
            <i className="fas fa-calendar-alt mr-2 opacity-95" aria-hidden />
            <span>2023 Annual Report</span>
          </div>
          <h1 className={`font-report-display text-[2.35rem] md:text-[2.35rem] sm:text-3xl font-semibold mb-[0.85rem] tracking-tight ${gradientText}`}>
            2023 Accountability Report
          </h1>
          <div className="h-[3px] w-16 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mb-[0.85rem] rounded-sm" />
          <div className="text-[1.15rem] sm:text-[1.1rem] text-[#4c4a6a] mb-3 font-medium tracking-tight">
            A Year in Review - Looking Back at 2023, Moving Forward in 2024
          </div>
          <p className="text-base max-w-[720px] mx-auto mb-4 text-slate-600 leading-relaxed">
            Reflecting on our 23rd year of advancing leiomyosarcoma research, patient support, and community advocacy.
            Celebrating achievements in 2023 and outlining our strategic goals for 2024.
          </p>
          <div className="flex justify-center gap-3 mb-4 flex-wrap">
            <span className="py-2 px-4 rounded-full text-sm font-semibold tracking-wide bg-white shadow-[0_1px_4px_rgba(124,58,237,0.12)] border border-violet-500/20 text-violet-700">
              Research
            </span>
            <span className="py-2 px-4 rounded-full text-sm font-semibold tracking-wide bg-white shadow-[0_1px_4px_rgba(124,58,237,0.12)] border border-violet-500/20 text-indigo-600">
              Community
            </span>
            <span className="py-2 px-4 rounded-full text-sm font-semibold tracking-wide bg-white shadow-[0_1px_4px_rgba(124,58,237,0.12)] border border-violet-500/20 text-emerald-600">
              Support
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-5 sm:flex-row sm:gap-10">
            <div className="text-center">
              <div className={`text-3xl font-bold leading-none mb-1.5 ${gradientText}`}>23</div>
              <div className="text-[#4c4a6a] text-sm font-medium">Years of Service</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold leading-none mb-1.5 ${gradientText}`}>2</div>
              <div className="text-[#4c4a6a] text-sm font-medium">New Research Awards</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold leading-none mb-1.5 ${gradientText}`}>5th</div>
              <div className="text-[#4c4a6a] text-sm font-medium">Research Roundtable Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar + Content */}
      <div className="max-w-[1200px] mx-auto py-8 px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[320px_1fr]">
        <aside className="sticky top-8 max-md:static">
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(124,58,237,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-violet-500/[0.08]">
            <div>
              <h3 className="font-report-display text-xl font-semibold mt-0 mb-5 text-indigo-900 pb-3 relative tracking-tight after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:rounded">
                Navigate the Report
              </h3>
              <ul className="list-none p-0 m-0 mb-7">
                <li className="mb-1 last:mb-0">
                  <a href="#accountability-report" className="group flex items-center py-2.5 px-3.5 rounded-lg text-[#4c4a6a] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-indigo-500/10 hover:text-violet-800 hover:translate-x-1">
                    <span className="relative w-1.5 h-1.5 bg-indigo-300 rounded-full mr-3.5 shrink-0 transition-all duration-200 group-hover:bg-violet-600 group-hover:scale-125 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 group-hover:after:w-[14px]" />
                    <span>Accountability Report Overview</span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a href="#research-funding" className="group flex items-center py-2.5 px-3.5 rounded-lg text-[#4c4a6a] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-indigo-500/10 hover:text-violet-800 hover:translate-x-1">
                    <span className="relative w-1.5 h-1.5 bg-indigo-300 rounded-full mr-3.5 shrink-0 transition-all duration-200 group-hover:bg-violet-600 group-hover:scale-125 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 group-hover:after:w-[14px]" />
                    <span>Research Funding Support</span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a href="#collaborations" className="group flex items-center py-2.5 px-3.5 rounded-lg text-[#4c4a6a] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-indigo-500/10 hover:text-violet-800 hover:translate-x-1">
                    <span className="relative w-1.5 h-1.5 bg-indigo-300 rounded-full mr-3.5 shrink-0 transition-all duration-200 group-hover:bg-violet-600 group-hover:scale-125 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 group-hover:after:w-[14px]" />
                    <span>Collaborations</span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a href="#patient-resources" className="group flex items-center py-2.5 px-3.5 rounded-lg text-[#4c4a6a] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-indigo-500/10 hover:text-violet-800 hover:translate-x-1">
                    <span className="relative w-1.5 h-1.5 bg-indigo-300 rounded-full mr-3.5 shrink-0 transition-all duration-200 group-hover:bg-violet-600 group-hover:scale-125 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 group-hover:after:w-[14px]" />
                    <span>Patient/Caregiver Resources</span>
                  </a>
                </li>
                <li className="mb-1 last:mb-0">
                  <a href="#moving-forward-2024" className="group flex items-center py-2.5 px-3.5 rounded-lg text-[#4c4a6a] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-indigo-500/10 hover:text-violet-800 hover:translate-x-1">
                    <span className="relative w-1.5 h-1.5 bg-indigo-300 rounded-full mr-3.5 shrink-0 transition-all duration-200 group-hover:bg-violet-600 group-hover:scale-125 after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-600 after:to-indigo-500 after:transition-[width] after:duration-200 group-hover:after:w-[14px]" />
                    <span>Moving Forward in 2024</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl p-6 mb-6 text-white bg-gradient-to-br from-violet-800 via-violet-700 to-violet-600 shadow-[0_8px_24px_rgba(91,33,182,0.3),0_2px_8px_rgba(0,0,0,0.08)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.12)_0%,transparent_50%)] before:pointer-events-none">
              <h4 className="text-lg font-bold mt-0 mb-2 relative tracking-tight">Support Our Mission</h4>
              <p className="text-sm mb-5 opacity-95 leading-snug relative">Help us continue funding critical LMS research and supporting patients.</p>
              <Link href="/donate" className="relative inline-block bg-white text-violet-800 font-bold text-[0.9375rem] py-2.5 px-5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:text-violet-900 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                Donate Now
              </Link>
            </div>
            <div className="p-5 border border-violet-500/10 rounded-xl bg-slate-50/80">
              <h4 className="text-base font-bold mt-0 mb-2 text-indigo-900">Have Questions?</h4>
              <p className="text-sm text-[#4c4a6a] mb-3 leading-snug">Reach out to our team for more information.</p>
              <a href="mailto:annieachee@aol.com" className="block py-1.5 text-violet-700 font-semibold text-[0.9375rem] border-b border-violet-500/10 transition-colors duration-200 hover:text-violet-800 hover:pl-2">
                annieachee@aol.com
              </a>
              <a href="tel:303-808-3437" className="block py-1.5 text-violet-700 font-semibold text-[0.9375rem] transition-colors duration-200 hover:text-violet-800 hover:pl-2">
                303-808-3437
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 [&>:first-child]:mt-0">
          <section id="accountability-report" className="mb-8">
            <div className="bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-500 text-white py-6 px-7 rounded-xl mb-8 shadow-[0_8px_28px_rgba(91,33,182,0.22),0_2px_8px_rgba(0,0,0,0.06)] relative overflow-hidden text-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_55%),radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(255,255,255,0.06)_0%,transparent_50%)] before:pointer-events-none">
              <h1 className="font-report-display mt-0 text-white relative text-[1.4rem] font-semibold mb-1 tracking-wide leading-snug max-w-[28em] mx-auto drop-shadow-sm">
                THE NATIONAL LEIOMYOSARCOMA ACCOUNTABILITY REPORT
              </h1>
              <h2 className="text-[1.25rem] font-semibold mb-2 tracking-wider opacity-[0.98] mt-0 text-white relative drop-shadow-sm">
                A YEAR IN REVIEW
              </h2>
              <h3 className="text-sm font-medium opacity-90 mb-0 tracking-wide leading-snug max-w-[36em] mx-auto mt-0 text-white relative drop-shadow-sm">
                LOOKING BACK at 2023 - MOVING FORWARD IN 2024 IN THE QUEST FOR THE CURE
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-[0_2px_12px_rgba(30,27,75,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-violet-500/[0.06] transition-all duration-[0.25s] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(124,58,237,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:border-violet-500/10">
              <p className="text-[1.0625rem] text-slate-600 mb-6 max-w-[800px] leading-[1.65]">
                Since its inception in 2001, the National Leiomyosarcoma Foundation (NLMSF) has continued to provide
                important patient and caregiver resources, information assistance, advocacy, representation, and research
                support to advance and accelerate patient outcomes in diagnosis and treatment.
              </p>
              <p>
                Ongoing annual funding for leiomyosarcoma (LMS) basic and translational research supports early-career
                investigators interested in sarcoma, especially leiomyosarcoma, as one of three larger patient-populated
                sarcoma subtypes. In addition to granting direct funding to research programs, the Foundation supports
                LMS-specific and sarcoma research through collaborations with other groups, ensuring that patient
                perspectives are included.
              </p>
              <p>
                The Foundation also coordinates virtual and on-site patient/family education programs to build awareness
                of the disease in communities globally.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`${sectionTitle} ${gradientText}`}>2023 IN REVIEW</h2>
            <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600 shadow-[0_-1px_0_rgba(124,58,237,0.08)]`} id="research-funding">
              <div className={cardHeader}>
                <h3 className={cardTitle}>Research Funding Support</h3>
              </div>
              <p>
                During 2023 the Foundation provided the following funding to support the patient and research
                communities:
              </p>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Annual Research Awards</h4>
                  <span className={cardSubtitle}>For promising LMS-specific research</span>
                </div>
                <p>
                  The NLMSF awarded funding for 2023-2024 to <strong>Priya Chudasama, PhD</strong> - German Sarcoma
                  Research Group, Heidelberg, Germany, and <strong>Joanna Przybyl, PhD</strong> - McGill University,
                  Montreal, Canada for the most promising LMS-specific research as vetted by the Foundation&apos;s
                  Executive Committee panel of reviewers.
                </p>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>LMS Research Project (SPORE)</h4>
                  <span className={cardSubtitle}>University of Michigan</span>
                </div>
                <p>
                  The National Cancer Institute (NCI) has established various SPORE programs (Specialized Programs of
                  Research Excellence) throughout the US in an effort to reduce cancer incidence and mortality and
                  improve survival and quality of life for cancer patients. This SPORE at the University of Michigan is
                  sponsored by the NLMSF, Rein in Sarcoma, and the Sarcoma Foundation of America. We have committed
                  five years of funding support to this project, which focuses on understanding the genetics and genomics
                  of leiomyosarcoma. As of 2022, the program has also included Career Enhancement Program and
                  Developmental Research Program award support to early-career sarcoma research investigators from
                  sarcoma centers of excellence across the USA.
                </p>
                <p>
                  Dr. Mitch Achee continues to serve on the External Advisory Board of this SPORE, bringing the patient
                  perspective to this program. Congratulations to Dr. Scott Schuetze and the team of researchers who
                  continue to work together to better understand LMS with the goal of improving outcomes for those
                  facing this disease. The National Leiomyosarcoma Foundation is proud and honored to provide financial
                  support to this SPORE.
                </p>
                <div className={noteBox}>
                  <p>
                    <strong>NOTE TO OUR COMMUNITY:</strong> Thank you to all who continue to help support this NLMSF
                    five-year commitment, which began in 2022. Without your support we could not be partnering to fund
                    this project that is so noteworthy it has captured the support of the NIH / NCI.
                  </p>
                  <p>
                    To learn more about the NCI (National Cancer Institute) Translational Research Program (SPORE), see{" "}
                    <a href="https://trp.cancer.gov/" target="_blank" rel="noopener noreferrer" className={contentLink}>
                      https://trp.cancer.gov/
                    </a>
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>International Leiomyosarcoma Research Roundtable</h4>
                  <span className={cardSubtitle}>NLMSF/SPAEN Collaboration</span>
                </div>
                <p>
                  Together with SPAEN (Sarcoma Patients EuroNet), formerly SPAGN (Sarcoma Patients Advocacy Global
                  International Leiomyosarcoma), the NMLSF launched this effort in 2019. This body of research clinicians,
                  pathologists and lab colleagues, all dedicated to the mission of focusing on the future of
                  leiomyosarcoma investigational research and clinical trials, is now in its fifth year running and is
                  140+ members strong.
                </p>
                <h5>Research Roundtable Working Groups:</h5>
                <ul className={`${contentList} list-disc`}>
                  <li>LMS Cell Lines / PDX Models / Proteomics and Multiomics</li>
                  <li>Gynecologic Issues (STUMP)</li>
                  <li>Clinical Trial Assessments</li>
                  <li>Imaging Strategies and Radiomics</li>
                </ul>
                <p>
                  Learn more about the Research Roundtable at{" "}
                  <a href="https://leiomyosarcoma.info/irr-forum/" target="_blank" rel="noopener noreferrer" className={contentLink}>
                    https://leiomyosarcoma.info/irr-forum/
                  </a>
                </p>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Community Outreach</h4>
                  <span className={cardSubtitle}>Social Media & Web Platforms</span>
                </div>
                <p>
                  Katie Almaleh, the NLMSF Community Outreach Director, continued to support enhanced communication
                  through our Facebook groups, Instagram, Twitter, and other web platforms.
                </p>
                <p>
                  To learn more about how you can help expand our research support efforts, contact:{" "}
                  <a href="mailto:info@nlmsf.org" className={contentLink}>info@nlmsf.org</a>
                </p>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>SARC - SASS Program</h4>
                  <span className={cardSubtitle}>Research Collaboration Funding</span>
                </div>
                <p>
                  Supported the new Sarcoma Advances in Sarcoma Science (SASS) program, which encourages a collaborative
                  research focus on mechanistic science to define research opportunities, promoting a Think Tank approach
                  to key challenges in the science of sarcomas and new therapeutic challenges.
                </p>
              </div>
            </div>

            <div className={`${itemSpacing} ${card} border-t-4 border-t-indigo-500 shadow-[0_-1px_0_rgba(99,102,241,0.08)]`} id="collaborations">
              <div className={cardHeader}>
                <h3 className={cardTitle}>Collaborations & Research Advocacy</h3>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Broad Institute Cell Line Development</h4>
                  <span className={cardSubtitle}>Harvard/MIT Research Partnership</span>
                </div>
                <p>
                  Since 2018 the NLMSF has been collaborating with the Broad Institute to develop verifiable LMS cell
                  lines (that is, cell lines derived from patients&apos; tumors, which can be used by researchers). A
                  focus of this work is to recruit patients to send tissue samples to the project.
                </p>
                <p>
                  In 2019, NLMSF made a funding commitment for three years for the Cell Line Dependency Map project to
                  determine which drugs could be effective against LMS tumor cells.
                </p>
                <p>
                  In 2020, NLMSF made an additional funding grant for RNA sequencing of the 11 cell lines that have been
                  developed so far to see if they represented the original tumor from which they were derived. (Cell
                  lines that do not represent the original tumors have no value for research.) If validated, these cell
                  lines will then be made available to researchers throughout the world to use in their LMS research.
                </p>
                <div className={noteBox}>
                  <p>
                    The NLMSF continues to encourage patients having surgery to donate fresh tumor tissue to the Boehm
                    Lab at the Koch Institute for Integrative Cancer Research at MIT through{" "}
                    <a href="https://www.pattern.org" target="_blank" rel="noopener noreferrer" className={contentLink}>
                      www.pattern.org
                    </a>
                    , an initiative of the Rare Cancer Research Foundation. Please sign up at least a week in advance of
                    surgery in order to allow pattern.org to have time to coordinate with the medical center personnel.
                  </p>
                  <p>
                    Please direct any questions regarding tissue donation to{" "}
                    <a href="mailto:info@pattern.org" className={contentLink}>info@pattern.org</a>; who will respond to
                    your inquiry quickly.
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>LMS COUNT-ME-IN Project</h4>
                  <span className={cardSubtitle}>Broad Institute (Harvard/MIT)</span>
                </div>
                <p>
                  Our Foundation has collaborated with the Broad Institute and the Dana-Farber Cancer Institute on this
                  project since its inception, with an NLMSF board member serving on the development committee, and we
                  continue to work to inform LMS patients about the project and encourage them to participate in it.
                </p>
                <p>
                  The Leiomyosarcoma Project is part of the larger Count-Me-In Project that enables patients to share
                  their tissues, clinical information and voices to accelerate cancer research.
                </p>
                <p>
                  The project assembles and maintains patient-driven patient registries of rare cancers. The registries
                  include all available clinical data from the patient&apos;s clinical course, such as treatment and
                  pathology reports, genomic testing data, and imaging reports.
                </p>
                <div className={noteBox}>
                  <p>
                    <strong>NOTE TO OUR COMMUNITY:</strong> Your contributions to the patient-driven research of
                    patient data collection and collaboration through the Dana Farber COUNT ME IN PROJECT and the RARE
                    CANCER RESEARCH FOUNDATION for tumor tissue collection for the Broad and Koch Institutes make all
                    the difference in advancing research for LMS.
                  </p>
                </div>
                <div className={ctaBox}>
                  <a href="https://lmsproject.org" target="_blank" rel="noopener noreferrer" className={contentLink}>
                    Join the LMS Project at lmsproject.org »
                  </a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Pan-Sarcoma Organizations & Working Groups</h4>
                </div>
                <div className="mb-6 last:mb-0">
                  <h5 className="text-[1.1rem] font-semibold text-gray-800 mb-2">SARC (Sarcoma Alliance for Research through Collaboration)</h5>
                  <p>
                    SARC is a U.S.-based nonprofit cancer research organization. NLMFS board members serve on
                    SARC&apos;s Research Advocacy Committee.
                  </p>
                </div>
                <div className="mb-6 last:mb-0">
                  <h5 className="text-[1.1rem] font-semibold text-gray-800 mb-2">Sarcoma Coalition</h5>
                  <p>
                    The Sarcoma Coalition was co-founded in 2017 by NLMFS board member Annie Achee and representatives
                    from two other groups, SARC and Rein In Sarcoma. Ms. Achee now serves on the steering committee for
                    the Coalition. The Coalition works to foster collaborative sarcoma advocacy initiatives with both
                    sarcoma-subtype organizations and pan-sarcoma organizations. The Coalition now has 33 sarcoma
                    advocacy organization members and a newly created Advisory Panel established by the NLMSF.
                  </p>
                </div>
                <div className="mb-6 last:mb-0">
                  <h5 className="text-[1.1rem] font-semibold text-gray-800 mb-2">Clinical Trial Pan-Cancer Organization</h5>
                  <p>
                    Foundation members serve on the Patient Advocate Research Committee and the Sarcoma, Imaging and
                    Cardiotoxicity Workgroups for this clinical trials-focused organization.
                  </p>
                </div>
                <div className="mb-6 last:mb-0">
                  <h5 className="text-[1.1rem] font-semibold text-gray-800 mb-2">The Repurposed Drug Task Force</h5>
                  <span className="block text-[0.9rem] text-gray-500 mb-2">University of Michigan Multidisciplinary Sarcoma Clinic</span>
                  <p>
                    Foundation members serve on this task force. The Repurposed Drug Task Force is investigating the
                    efficacy of repurposing drugs previously approved for conditions other than cancer for use in LMS.
                  </p>
                </div>
                <div className="mb-6 last:mb-0">
                  <h5 className="text-[1.1rem] font-semibold text-gray-800 mb-2">International Guidelines Harmonization Group - GIST Task Force</h5>
                  <p>Board member Dr. Mitch Achee continues to serve on this Task Force.</p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Attendance at Annual Sarcoma Meetings</h4>
                </div>
                <p>
                  LMSF representatives attend sarcoma meetings throughout the year in the US and abroad to meet with
                  the research community, especially the physician scientists supporting the Foundation&apos;s
                  Research Roundtable, with involvement in the four workgroups within the Roundtable. This puts us in a
                  position to convey news and developments to our community.
                </p>
                <p>In 2023, the NLMSF was represented at the ASCO (American Society of Clinical Oncology) meeting.</p>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>International Cooperation</h4>
                </div>
                <p>
                  Advocacy groups from around the world share research results, clinical trials, and a variety of
                  initiatives throughout the year to support patients and inform them about all diagnostic and treatment
                  options.
                </p>
                <p>
                  Patients and caregivers from around the world are welcome in the Foundation&apos;s private Facebook
                  groups, email communications, YouTube webinar educational programs and more.
                </p>
              </div>
            </div>

            <div className={`${itemSpacing} ${card} border-t-4 border-t-emerald-600 shadow-[0_-1px_0_rgba(5,150,105,0.08)]`} id="patient-resources">
              <div className={cardHeader}>
                <h3 className={cardTitle}>Patient/Caregiver Resources</h3>
              </div>
              <p className="text-[1.0625rem] text-slate-600 mb-6 max-w-[800px] leading-[1.65]">In 2023 we continued our ongoing work through the following programs:</p>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Websites</h4>
                </div>
                <p>
                  Three websites providing information on patient and caregiver resources; research updates, clinical
                  trials, patient-driven research initiatives to advance LMS research; and well-being resources:
                </p>
                <ul className={`${contentList} list-disc`}>
                  <li>
                    <a href="https://nlmsf.org/" target="_blank" rel="noopener noreferrer" className={contentLink}>https://nlmsf.org/</a>
                  </li>
                  <li>
                    <a href="https://leiomyosarcoma.info" target="_blank" rel="noopener noreferrer" className={contentLink}>https://leiomyosarcoma.info</a>
                  </li>
                  <li>
                    <a href="https://nlmsflifechange.com/" target="_blank" rel="noopener noreferrer" className={contentLink}>https://nlmsflifechange.com/</a>
                  </li>
                </ul>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Social Media</h4>
                </div>
                <p>
                  The NLMSF maintains and regularly posts to various Facebook pages and an Instagram account to
                  encourage conversation and connections in the patient and caregiver communities.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://www.facebook.com/NLMSF" target="_blank" rel="noopener noreferrer" className="text-violet-700 font-semibold py-2 px-4 border border-violet-500/35 rounded-lg transition-colors duration-200 hover:bg-violet-500/10 hover:text-violet-800 hover:border-violet-500/50 no-underline">Facebook</a>
                  <a href="https://www.instagram.com/leiomyosarcomafoundation/" target="_blank" rel="noopener noreferrer" className="text-violet-700 font-semibold py-2 px-4 border border-violet-500/35 rounded-lg transition-colors duration-200 hover:bg-violet-500/10 hover:text-violet-800 hover:border-violet-500/50 no-underline">Instagram</a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>The NLMSF News Tracker</h4>
                </div>
                <p>
                  This biweekly e-newsletter alerts subscribers about upcoming virtual and on-site presentations;
                  research updates; clinical trials; book recommendations; tips for living with LMS; and more.
                </p>
                <div className={ctaBox}>
                  <Link href="/newsletter-signup" className={contentLink}>Subscribe to our Newsletter »</Link>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>LMS Lifeline Buddy Program</h4>
                </div>
                <p>Peer-to-peer patient matching for one-on-one support, including caregiver matching for coping support.</p>
                <div className={ctaBox}>
                  <Link href="/support" className={contentLink}>Connect with a Buddy »</Link>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>24/7 Lifeline Support Hotline</h4>
                </div>
                <p>The Foundation&apos;s support hotline is available 24 hours a day, 7 days a week:</p>
                <div className={ctaBox}>
                  <a href="tel:3038083437" className="text-xl font-bold text-violet-700">303-808-3437</a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Connect with a Clinician Program</h4>
                </div>
                <p>
                  This is an ad hoc program called on when patients or family members pose general questions (e.g.,
                  coping with side effects) to the NLMSF through our website or Facebook. We refer such questions to
                  one or more members of our Medical Advisory Panel, a group of clinical and research sarcoma and
                  oncology experts.
                </p>
                <div className={noteBox}>
                  <p>
                    Visit our{" "}
                    <Link href="/medical-advisory-board" className={contentLink}>Medical Advisory Board</Link> page to
                    learn more about our expert panel. We do our best to get accurate and up-to-date information for
                    anyone who makes such an inquiry.
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>On-site Patient/Family Programs</h4>
                  <span className={cardSubtitle}>Sarcoma Centers of Excellence</span>
                </div>
                <p>
                  The NLMSF presents annual educational, in-person sessions at sarcoma centers of excellence in
                  several states across the nation.
                </p>
                <div className={ctaBox}>
                  <Link href="/educational-programs" className={contentLink}>Learn About Upcoming Programs »</Link>
                </div>
              </div>
              <div className={`${itemSpacing} ${card}`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Online Patient/Caregiver Programs</h4>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-blue-500`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>The ABC&apos;s of the LMS Journey</h5>
                  </div>
                  <p>
                    This program / discussion group for new and existing patients and their families is held via Zoom
                    every other month. We talk about initial steps for newly diagnosed patients, finding a sarcoma
                    center for treatment, questions to ask at appointments, how to talk to the oncology care team, and
                    more. This group is useful to patients in all phases of diagnosis and treatment.
                  </p>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-teal-600`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>LMS LIVE CONNECT - RESEARCH IN REVIEW</h5>
                  </div>
                  <p>
                    In this quarterly series, members of the global research community speak directly to patients about
                    their current research initiatives, with the opportunity for patients to ask questions.
                  </p>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-pink-600`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>CLINICAL TRIAL Patient Perspective Advocacy Forum</h5>
                  </div>
                  <p>
                    This bimonthly discussion group meets on Zoom to discuss patient and caregiver experiences with
                    clinical trials and suggestions on how trials could be improved. NLMSF board members in attendance
                    serve on various committees with clinical trial working groups and can convey valuable suggestions
                    generated in this group to clinicians planning / running clinical trials.
                  </p>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-amber-500`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>CAREGIVING COUNTS Advocacy Network</h5>
                  </div>
                  <p>
                    This discussion group, held every other month via Zoom, is focused toward caregivers but patients
                    are encouraged to attend. Caregivers relatively new to LMS find it extremely helpful to hear from
                    those who have been there before. (Includes podcasts and handout materials.)
                  </p>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-emerald-600`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>SURVIVORSHIP CARE Planning Clinic</h5>
                  </div>
                  <p>
                    Launched in December 2023, this occasional online discussion group covers the significance,
                    objectives, and usefulness of having a survivorship care plan in place – both during and after
                    cancer treatment to help patients and their healthcare teams manage ongoing healthcare needs,
                    address any potential long-term side effects, and ensure a smooth transition into post-treatment
                    life.
                  </p>
                  <div className={noteBox}>
                    <p>Each session includes notes, podcasts, and handout materials for attendees.</p>
                  </div>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600`}>
                  <div className={cardHeader}>
                    <h5 className={cardTitle}>FAMILY SUPPORT Crisis and Bereavement Group</h5>
                  </div>
                  <p>
                    This discussion group, scheduled from time to time as needed, supports family members left behind in
                    grief, depression or anxiety. It offers support in &quot;picking up the pieces&quot; and rebuilding
                    lives, including with children. The group also welcomes family members who are in crisis with
                    facing the day-to-day challenge of a loved one&apos;s difficult cancer journey and trying to build
                    bridges of supportive communication.
                  </p>
                  <div className={ctaBox}>
                    <Link href="/support" className={contentLink}>Request Family Support »</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="moving-forward-2024" className="mb-8">
            <h2 className={`${sectionTitle} ${gradientText}`}>Moving Forward in 2024</h2>
            <p className="text-[1.0625rem] text-slate-600 mb-8 leading-[1.65]">
              We are in our 24th year of serving the LMS community, having increased and deepened connections with
              the patient community and research community every single year along the way. The following are the
              Foundation&apos;s goals as we head into 2024:
            </p>
            <div className={`${itemSpacing} ${card} border-t-4 border-t-amber-500 shadow-[0_-1px_0_rgba(217,119,6,0.08)]`} id="goals">
              <div className={cardHeader}>
                <h3 className={cardTitle}>Goals</h3>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Annual Research Awards</h4>
                </div>
                <p>
                  Grant annual research awards for the most promising LMS-specific research as vetted by the
                  Foundation&apos;s Executive Committee panel of reviewers.
                </p>
                <div className="mt-4">
                  <p><strong>2024-2025 Funded Researchers:</strong></p>
                  <ul className={contentList}>
                    <li>M. Nucci, MD, Dana Farber Cancer Institute, Boston</li>
                    <li>F. Amant, MD, PhD, University of Leuven, Belgium</li>
                  </ul>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-blue-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>NLMSF Early Career Funding Program</h4>
                </div>
                <p>
                  This program will enhance participation by early-career researchers in the Research Roundtable
                  workgroups and SASS Program with the aim to incentivize consideration of sarcoma oncology career
                  focus. The SASS program is headed by Dr. Jonathan Fletcher of the Sarcoma Alliance Through Research
                  and Collaboration (SARC), for the purpose of fostering sarcoma therapies by advancing both
                  mechanistic science and creative therapeutic strategies. The FDA and the NCI are participants in
                  this new initiative as well as physician-scientists and scientists in sarcoma research.
                </p>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-teal-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>SPORE LMS Research Project</h4>
                </div>
                <p>
                  Continue funding support for the SPORE LMS Research Project. The NLMSF&apos;s five-year funding
                  commitment includes all the components of the program listed earlier, including the Career
                  Enhancement Program and Developmental Research Program, launched in 2022, in which support is
                  awarded to several early-career sarcoma research investigators connected to the project.
                </p>
                <div className={ctaBox}>
                  <a href="#research-funding" className={contentLink}>View Research Funding Details »</a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-pink-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Cell Line Development Collaboration</h4>
                  <span className={cardSubtitle}>Broad Institute (Harvard/MIT)</span>
                </div>
                <p>
                  Continue support for the Cell Line Development Collaboration at the Broad Institute. Collaboration
                  with the cell line project at the Broad continues through the LMS Cell Lines / PDX Models /
                  Proteomics and Multiomics Working Group of the NLMSF/SPAEN Research Roundtable. In addition, NLMSF
                  funding continues for repurposing drug screening and tumor tissue processing.
                </p>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-amber-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>SASS Program Support</h4>
                </div>
                <p>
                  Continue the Sarcoma Advances in Sarcoma Science (SASS) program encouraging collaborative research
                  and a Think Tank approach, as well as the SASSY Program, which further supports young investigators
                  as part of the SASS program.
                </p>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-emerald-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>MD Anderson Patient Stakeholder Panel</h4>
                </div>
                <p>
                  Collaborate with MD Anderson Cancer Center on a Patient Stakeholder Panel for their Shorter-course
                  Multi-Arm Radiation Therapy study for soft tissue sarcoma (SMART-sarc).
                </p>
                <div className={noteBox}>
                  <p>This collaboration will help ensure patient perspectives are incorporated into the study design and implementation.</p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>International LMS Research Roundtable</h4>
                  <span className={cardSubtitle}>6th Annual - 2024</span>
                </div>
                <p>
                  Organize and host the 2024 International LMS Research Roundtable, working with the four workgroups
                  to enhance development and progress through the Roundtable&apos;s 2021 &quot;Unmet Needs&quot;
                  focus research publication.
                </p>
                <div className={ctaBox}>
                  <Link href="/research-roundtable" className={contentLink}>Learn About the Research Roundtable »</Link>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-blue-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Clinical Trials 101 Panel Discussion</h4>
                </div>
                <p>
                  Launch a &quot;Clinical Trials 101&quot; Panel Discussion with Physician Scientists to address
                  patients&apos; concerns and dispel myths about clinical trial participation. This will allow
                  patients and families to better understand the process and enhance communications between trial
                  administrators and patients.
                </p>
                <div className={noteBox}>
                  <p>
                    This is especially important now that the recent trend is to discuss clinical trials with patients
                    sooner after diagnosis, if appropriate, rather than later.
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-teal-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Circle of Hope Nutritional Patient Panel</h4>
                </div>
                <p>
                  Organize a Circle of Hope Nutritional Patient Panel to evaluate the possibility of launching an
                  ongoing nutritional program for LMS patients.
                </p>
                <div className={ctaBox}>
                  <Link href="/circle-of-hope" className={contentLink}>Join the Circle of Hope »</Link>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-emerald-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>The Golf Ball Project</h4>
                </div>
                <p>
                  Expand and promote the &quot;Golf Ball Project&quot; in coordination with the Sarcoma Coalition and
                  Dr. Grimer in the UK to build and expand information/awareness about lumps and bumps that need to be
                  further evaluated and not merely dismissed as benign cysts or lipomas.
                </p>
                <div className={noteBox}>
                  <p>
                    Although the Golf Ball Project addresses growths that are the size of a golf ball, lumps and bumps
                    of any size can be problematic and need to be evaluated through biopsy and/or imaging.
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-blue-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Patient Representation</h4>
                </div>
                <p>
                  Foundation board members will continue to serve as patient representatives, representing the patient
                  community in providing patient perspectives through the affiliations we hold to various sarcoma
                  research workgroups and related groups, and through our Sarcoma Coalition Steering Committee
                  leadership.
                </p>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Patient/Caregiver Programs</h4>
                </div>
                <p>
                  Continue all the Foundation&apos;s Patient/Caregiver Programs with the robust series of Zoom
                  presentations, meetings and discussions for patients and caregivers as outlined in the 2023 Review.
                </p>
                <div className={noteBox}>
                  <p>
                    These programs include bringing interesting and pertinent researchers to our community to address
                    the &quot;what should patients know&quot; about the disease, treatment side effects to be mindful
                    of, and new treatments on the horizon.
                  </p>
                </div>
                <div className={ctaBox}>
                  <a href="#patient-resources" className={contentLink}>View Patient Resources »</a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-amber-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Sarcoma Coalition Leadership</h4>
                  <span className={cardSubtitle}>36 Member Organizations</span>
                </div>
                <p>
                  Continue to guide the Sarcoma Coalition of 36 organizations representing various sarcoma subtypes.
                  The NLMSF will be adding two more sarcoma organizations to the Coalition this year and will work with
                  the Coalition to produce its Listen and Learn Series.
                </p>
                <div className={noteBox}>
                  <p>The Coalition is also part of the SARC Research Advocacy Council meetings, providing a unified voice for sarcoma patients.</p>
                </div>
                <div className={ctaBox}>
                  <Link href="/sarcoma-coalition" className={contentLink}>Learn About the Sarcoma Coalition »</Link>
                </div>
              </div>
            </div>

            <div className={`${itemSpacing} ${card}`} id="research-funding-2024">
              <div className={cardHeader}>
                <h3 className={`${cardTitle} ${gradientText}`}>NLMSF LMS Research Funding in 2024</h3>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-blue-500`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>LMS SPORE PROJECT</h4>
                  <span className={cardSubtitle}>NIH / University of Michigan</span>
                </div>
                <p>Funding from the NLMSF and other funders is explained in the Research Funding Support section above.</p>
                <div className="mt-4">
                  <p>
                    <strong>Summary of project content:</strong> The Leiomyosarcoma SPORE includes three projects,
                    three cores (biospecimen, data analysis and administration), and two programs (career
                    enhancement and developmental research).
                  </p>
                  <div className={noteBox}>
                    <p><strong>Three Overarching Projects:</strong></p>
                    <ul className={contentList}>
                      <li>Identify and exploit genomic vulnerabilities in leiomyosarcoma, targeting DNA repair pathway</li>
                      <li>Study the genetic epidemiology of leiomyosarcoma, defining the risk for cancer in families with cancer predisposition syndromes such as Li-Fraumeni Syndrome</li>
                      <li>Develop new biomarkers to assess more quickly if a new therapy has benefit</li>
                    </ul>
                  </div>
                </div>
                <div className={ctaBox}>
                  <a href="https://www.cancer.gov/about-nci/budget/fact-book/extramural-programs/spores" target="_blank" rel="noopener noreferrer" className={contentLink}>
                    View Genetics and Genomics of LMS Research Details »
                  </a>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-violet-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Second Year Funded Research</h4>
                  <span className={cardSubtitle}>Previously Awarded Grants</span>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-teal-600`}>
                  <div className={cardHeader}>
                    <h4 className={cardTitle}>Priya Chudasama, PhD</h4>
                    <span className={cardSubtitle}>German Sarcoma Research Group, Heidelberg, Germany</span>
                  </div>
                  <p>
                    <strong>Research project:</strong> Spatial heterogeneity and therapeutic implications of activated
                    telomere maintenance mechanisms in leiomyosarcoma.
                  </p>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-teal-600`}>
                  <div className={cardHeader}>
                    <h4 className={cardTitle}>Joanna Przybyl, PhD</h4>
                    <span className={cardSubtitle}>McGill University, Montreal, Canada</span>
                  </div>
                  <p>
                    <strong>Research Project:</strong> Development of the multi-omic liquid biopsy assay for the
                    pre-operative diagnosis of uterine leiomyosarcoma and leiomyoma.
                  </p>
                </div>
              </div>
              <div className={`${itemSpacing} ${card} border-t-4 border-t-emerald-600`}>
                <div className={cardHeader}>
                  <h4 className={cardTitle}>Newly Awarded Grants</h4>
                  <span className={cardSubtitle}>Funding for 2024-2025</span>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-pink-600`}>
                  <div className={cardHeader}>
                    <h4 className={cardTitle}>M. Nucci, MD</h4>
                    <span className={cardSubtitle}>Dana-Farber Cancer Institute, Boston</span>
                  </div>
                  <p>
                    Dr. Nucci is Chief of Perinatal Pathology at Brigham and Women&apos;s Hospital and Professor of
                    Pathology, Harvard Medical School.
                  </p>
                  <div className={noteBox}>
                    <p>
                      <strong>Research Project:</strong> Establish a cutting-edge platform for the characterization of
                      uterine leiomyosarcoma utilizing advanced AI techniques. This involves the integration of genetic
                      and histology markers. Delve into the intricate relationship between genetic markers, histology,
                      and disease outcomes to develop an AI model that enhances the prediction of recurrence for uterine
                      LMS patients.
                    </p>
                  </div>
                </div>
                <div className={`${itemSpacing} ${card} border-t-4 border-t-pink-600`}>
                  <div className={cardHeader}>
                    <h4 className={cardTitle}>F. Amant, MD, PhD</h4>
                    <span className={cardSubtitle}>University of Leuven, Belgium</span>
                  </div>
                  <p>Dr. Amant is Professor of Gynecologic Oncology University of Leuven, Belgium.</p>
                  <div className={noteBox}>
                    <p>
                      <strong>Research Project:</strong> Enhancing the adaptive immune response in LMS tumors through
                      P13K/mTOR inhibition may render them more receptive to ICB, a downstream target of the P13K/mTOR
                      pathway. This approach holds promise as a potential predictive biomarker for response. Investigate
                      the immunomodulatory impacts of P13K/mTOR inhibitors on the Tumor Microenvironment (TME) and
                      their capacity to overcome primary ICB resistance in LMS.
                    </p>
                    <p>
                      Integrating humanized PDX models of LMS with immune checkpoint inhibition unveils the intricate
                      TME remodeling dynamics triggered by P13K/mTOR inhibition and/or PD-I blockade in LMS.
                    </p>
                  </div>
                </div>
                <div className={ctaBox}>
                  <p>These two researchers will present insights into their research projects in the LMS LIVE - RESEARCH IN REVIEW series for 2024.</p>
                  <a href="#patient-resources" className={contentLink}>View LMS LIVE Program Details »</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
