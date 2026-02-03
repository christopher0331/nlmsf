import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2024 Accountability Report | NLMSF",
  description:
    "Annual accountability report to the LMS community. 2024 in review, research awardees, collaborations, patient resources, and moving forward in 2025.",
};

export default function AccountabilityReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative flex min-h-[400px] items-center justify-center overflow-hidden px-8 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #7e22ce 0%, #4338ca 50%, #059669 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-[20%] h-[60px] w-[60px] rounded-full bg-white/10 animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute right-[15%] top-[60%] h-[80px] w-[80px] rounded-full bg-white/10 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[30%] left-[20%] h-[40px] w-[40px] rounded-full bg-white/10 animate-float" style={{ animationDelay: "4s" }} />
        </div>
        <div className="relative z-[2] max-w-[800px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-[25px] bg-white/10 px-4 py-2 backdrop-blur-[10px]">
            <i className="fas fa-chart-line" aria-hidden />
            <span>Annual Report</span>
          </div>
          <h1 className="my-4 text-4xl font-bold md:text-5xl" style={{ background: "linear-gradient(45deg, #ffffff, #e0e7ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            2024 Accountability Report
          </h1>
          <div className="my-4 h-1 w-[100px] rounded-sm mx-auto" style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)" }} />
          <p className="mb-8 text-2xl font-medium text-indigo-100">to the LMS Community</p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm backdrop-blur-[10px]">2024 In Review</span>
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm backdrop-blur-[10px]">Moving Forward</span>
            <span className="rounded-[20px] bg-white/10 px-4 py-2 text-sm backdrop-blur-[10px]">Research Impact</span>
          </div>
          <p className="text-lg leading-relaxed text-indigo-100">
            Celebrating 25 years of serving the LMS community with increased and deepened connections with the patient community and research community every single year along the way.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-10 grid grid-cols-1 gap-10 items-start md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-8 max-md:static">
          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <h3 className="bg-gradient-to-br from-violet-700 to-indigo-700 px-4 py-4 text-center text-xl font-semibold text-white">
              Report Navigation
            </h3>
            <nav className="p-6">
              <ul className="list-none space-y-2 p-0 m-0">
                {[
                  { href: "#introduction", icon: "fa-info-circle", label: "Introduction" },
                  { href: "#2024-review", icon: "fa-calendar-alt", label: "2024 In Review" },
                  { href: "#research-awardees", icon: "fa-award", label: "Research Awardees" },
                  { href: "#other-funding", icon: "fa-hand-holding-usd", label: "Other Funding" },
                  { href: "#repurposed-drug", icon: "fa-pills", label: "Repurposed Drug Initiative" },
                  { href: "#collaborations", icon: "fa-handshake", label: "Collaborations" },
                  { href: "#patient-resources", icon: "fa-users", label: "Patient Resources" },
                  { href: "#online-programs", icon: "fa-laptop", label: "Online Programs" },
                  { href: "#moving-forward", icon: "fa-arrow-right", label: "Moving Forward 2025" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-600 no-underline transition-all duration-300 hover:translate-x-1 hover:bg-indigo-500 hover:text-white hover:border-l-4 hover:border-l-amber-400 border-l-4 border-l-transparent">
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
                <p className="mb-4 text-sm opacity-90">Help us continue funding LMS research and supporting the community.</p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  <Link href="/support/" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-red-700">
                    <i className="fas fa-heart" aria-hidden /> Support
                  </Link>
                  <Link href="/donate/" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-white/20">
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

        {/* Main content */}
        <div className="min-w-0">
          {/* TOC */}
          <div className="mb-12 rounded-xl border-l-4 border-violet-700 bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <h2 className="mt-0 mb-4 text-xl font-bold text-gray-900">Contents</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["#introduction", "#2024-review", "#research-awardees", "#other-funding", "#repurposed-drug", "#collaborations", "#patient-resources", "#online-programs", "#moving-forward"].map((href) => (
                <a key={href} href={href} className="block rounded-lg border-l-4 border-l-transparent bg-white px-4 py-3 text-indigo-600 no-underline shadow-sm transition-all hover:-translate-x-0.5 hover:border-l-amber-400 hover:bg-indigo-500 hover:text-white">
                  {href === "#introduction" && "Introduction"}
                  {href === "#2024-review" && "2024 In Review"}
                  {href === "#research-awardees" && "NLMSF Current Research Awardees"}
                  {href === "#other-funding" && "Other Research Funding Commitments"}
                  {href === "#repurposed-drug" && "Repurposed Drug Initiative"}
                  {href === "#collaborations" && "Other Collaborations"}
                  {href === "#patient-resources" && "Patient / Caregiver Resources"}
                  {href === "#online-programs" && "Online Patient / Caregiver Programs"}
                  {href === "#moving-forward" && "Moving Forward in 2025"}
                </a>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              Introduction
            </h2>
            <div className="p-8">
              <p className="mb-6">The National Leiomyosarcoma Foundation (NLMSF) was established in 2001. Our work consists of the following:</p>
              <ul className="list-none space-y-4 p-0">
                {[
                  "Funding LMS-specific research that advances the field of study and accelerates development of clinical trials and treatments.",
                  "Supporting the LMS patient, family, and caregiver community through education, information sharing, resource assistance, and 24/7 direct phone support.",
                  "Raising global, national, and community awareness of leiomyosarcoma.",
                  "Addressing unmet needs in treatment, research, clinical trials, and care through the Foundation's International LMS Research Roundtable — collaborating with researchers, clinicians, partner organizations, and the LMS community to achieve meaningful progress.",
                ].map((text, i) => (
                  <li key={i} className="rounded-lg border-l-4 border-l-sky-500 bg-gradient-to-br from-sky-50 to-blue-50 p-4 pl-6 before:mr-2 before:content-['→'] before:font-bold before:text-sky-500">
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mb-4 mt-6">We at the Foundation are most grateful to our donors, both in the United States and internationally, who have supported the Foundation&apos;s efforts to vet the most promising LMS research projects and fund them annually. The Executive Committee of the NLMSF conducts a comprehensive review of incoming research grant proposals in order to ensure that the donations are well placed in the selected research projects each year.</p>
              <p>Read on for a summary of our efforts over 2024 and our continuing programs and new initiatives for 2025.</p>
            </div>
          </section>

          {/* 2024 In Review */}
          <section id="2024-review" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              2024 In Review
            </h2>
            <div className="p-8">
              {/* Research Awardees */}
              <div id="research-awardees" className="mb-12 scroll-mt-8">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  NLMSF Current Research Awardees
                </h3>
                <p className="mb-6 italic text-gray-500 bg-gray-50 rounded-lg border-l-4 border-gray-300 px-4 py-3">(The following two grants were awarded in 2024, with funding for 2025-2026)</p>
                {[
                  { name: "Marisa Nucci, MD", affil: "Division Chief, Perinatal Pathology, Brigham and Women's Hospital; Professor of Pathology, Harvard Medical School.", project: "Establish an innovative platform utilizing advanced Artificial Intelligence techniques for the comprehensive characterization of uterine leiomyosarcoma." },
                  { name: "Frederic Amant, MD, PhD", affil: "Professor of Gynecologic Oncology, University of Leuven, Belgium", project: "Enhancing the adaptive immune response in LMS tumors through P13K/mTOR inhibition may render them more receptive to ICB. Explore the immune-modulatory impacts of P13K/mTOR inhibitors on the tumor microenvironment (TME) and their capacity to overcome primary ICB resistance in LMS." },
                ].map((r) => (
                  <div key={r.name} className="mb-6 rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-gradient-to-br from-slate-50 to-gray-100 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <h4 className="mb-2 text-lg font-bold text-slate-800">{r.name}</h4>
                    <p className="mb-4 italic text-gray-500">{r.affil}</p>
                    <div className="rounded-lg border-l-4 border-l-cyan-500 bg-white p-4">
                      <strong>Research Project:</strong> {r.project}
                    </div>
                  </div>
                ))}
                <p className="mb-6 mt-8 italic text-gray-500 bg-gray-50 rounded-lg border-l-4 border-gray-300 px-4 py-3">(The following two grants were awarded in 2023, with funding for 2023-2024)</p>
                {[
                  { name: "Priya Chudasama, PhD", affil: "German Cancer Research Center, Heidelberg, Germany", project: "Spatial heterogeneity and therapeutic implications of activated telomere maintenance mechanisms in leiomyosarcoma." },
                  { name: "Joanna Przybyl, PhD", affil: "McGill University, Montreal, Quebec, Canada", project: "Development of the multi-omic liquid biopsy assay for the pre-operative diagnosis of uterine leiomyosarcoma and benign leiomyoma." },
                ].map((r) => (
                  <div key={r.name} className="mb-6 rounded-xl border border-gray-200 border-l-4 border-l-indigo-500 bg-gradient-to-br from-slate-50 to-gray-100 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <h4 className="mb-2 text-lg font-bold text-slate-800">{r.name}</h4>
                    <p className="mb-4 italic text-gray-500">{r.affil}</p>
                    <div className="rounded-lg border-l-4 border-l-cyan-500 bg-white p-4">
                      <strong>Research Project:</strong> {r.project}
                    </div>
                  </div>
                ))}
              </div>

              {/* Other Funding */}
              <div id="other-funding" className="scroll-mt-8">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">
                  Other Research Funding Commitments
                </h3>
                <div className="space-y-6">
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">NLMSF Early Career Award 2024</h4>
                    <p className="m-0 text-gray-700">This award, launched in 2024, is for fellows and post-doc specialists; it provides a travel stipend to attend the Research Roundtable meeting and contribute to a Workgroup of choice, and to present during the Roundtable. The Awardee will be mentored by the Workgroup leader. Our 2024 awardee was Dr. Jeff Ryts.</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">Funding Support for the SARC Catalyst Program for Young Researchers</h4>
                    <p className="m-0 text-gray-700">This program, spearheaded by <a href="https://sarctrials.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">SARC</a> (Sarcoma Alliance for Research through Collaboration) provides awardees with financial support for small-scale sarcoma research projects as well as monthly expert coaching sessions. The NLMSF contributes to the financial support of young researchers involved in the <a href="https://sarctrials.org/research/funding-opportunities/catalyst-program/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Catalyst</a> program.</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <h4 className="mb-3 text-lg font-semibold text-emerald-900">The NLMSF-SPAGN International LMS Research Roundtable</h4>
                    <p className="mb-4 text-gray-700">The NLMSF, together with the organization now known as SPAGN (Sarcoma Patient Advocacy Global Network), launched this effort in 2019, convening a body of research clinicians, pathologists and lab colleagues to focus on the future of leiomyosarcoma investigational research and clinical trials. Now in its seventh year, this group met in Toronto in September 2024, with over 60 researchers in attendance.</p>
                    <div className="rounded-lg border-l-4 border-l-sky-500 bg-sky-50 p-4">
                      <p className="mb-2 font-semibold">The Research Roundtable Working Groups are:</p>
                      <ul className="list-none space-y-2 p-0">
                        {["LMS Cell Lines / PDX Models / Proteomics and Multiomics", "Gynecologic Issues (STUMP)", "Clinical Trial Assessments", "Imaging Strategies and Radiomics"].map((item) => (
                          <li key={item} className="rounded-md border-l-2 border-l-cyan-500 bg-white py-2 pl-4 pr-2">{item}</li>
                        ))}
                      </ul>
                      <p className="mt-4 mb-0">Learn more about the Research Roundtable at <a href="https://leiomyosarcoma.info/irr-forum/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://leiomyosarcoma.info/irr-forum/</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repurposed Drug Initiative */}
          <section id="repurposed-drug" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-red-600 to-red-800 px-8 py-6 text-2xl font-bold text-white">
              Repurposed Drug Initiative
            </h2>
            <div className="p-8">
              <p className="mb-8">As drug costs continue to escalate, the Foundation has established the NLMSF Repurposing Drug Research Initiative to explore possible new leiomyosarcoma and sarcoma treatment options on behalf of the LMS patient community. The NLMSF has collaborated for several years with some of these organizations and, in 2024, expanded the reach of this initiative through additional partnerships.</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { title: "The Cell Line / Omics Workgroup of the NLMSF-SPAGN International LMS Research Roundtable", sub: "Matt Hemming, MD, PhD, UMass Chan Medical School" },
                  { title: "MD Anderson Cancer Center", sub: "Wontong Yao, MD, PhD, of the Yao Research Lab" },
                  { title: "The Tracer Project", sub: "T. Gujral, PhD, Fred Hutchinson Cancer Center" },
                  { title: "CURE ID Drug Repurposing Collaboration", sub: "Heather Stone, PhD, Health Science Policy Analyst, FDA. CURE ID is an internet-based repository that allows the global community to report novel uses of existing drugs for difficult-to-treat diseases. ", link: "https://www.fda.gov/drugs/science-and-research-drugs/cure-id-app-lets-clinicians-report-novel-uses-existing-drugs" },
                  { title: "The Repurposed Drug Task Force, University of Michigan Multidisciplinary Sarcoma Clinic", sub: "Denise Reinke, MS, NP, MBA. Drug Repurposing at the University of Michigan brings sarcoma groups together to explore strategies for engaging in repurposed drug research.", link: "https://drugrepurposing.umich.edu/" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <h4 className="mb-3 text-base font-semibold leading-snug text-red-900">{item.title}</h4>
                    <p className="m-0 text-sm text-gray-700">
                      {item.sub}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"> {item.link}</a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Collaborations */}
          <section id="collaborations" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-emerald-600 to-emerald-800 px-8 py-6 text-2xl font-bold text-white">
              Other Collaborations
            </h2>
            <div className="p-8">
              <p className="mb-6">In 2024, the Foundation embarked on a new collaboration:</p>
              <div className="mb-8 rounded-xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-100 p-6">
                <h3 className="mb-4 text-xl font-bold text-emerald-900">Huntsman Cancer Institute Heredity Genomic Counseling Project</h3>
                <p className="mb-4">The National LMS Foundation has partnered with the Huntsman Cancer Institute at the University of Utah for a heredity genomic counseling project, a patient-driven data collection initiative launched in 2024: <a href="https://redcap01.brisc.utah.edu/ccts/redcap/surveys/?s=LNA4DNL9LE7C9ML7" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Genetics Attitude Questionnaire / Cuestionario de actitud genética</a></p>
                <p className="m-0">The NLMSF team and the Huntsman Cancer Institute genetic counselors are working together to understand what LMS patients think about the heritability of LMS and to explore their interest in genetic testing. The data collected and analyzed from this initiative will impact future NCCN (National Comprehensive Cancer Network) treatment guidelines, with such testing becoming incorporated into standard of care for the future.</p>
              </div>
              <h3 className="mb-6 text-xl font-semibold text-gray-900">Continuing Collaborations</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Boston Gene</h4>
                  <p className="m-0 text-sm text-gray-700"><a href="https://bostongene.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">BostonGene</a> is a company that provides molecular and immune profiling to assist in treatment selection for patients with cancer. The NLMSF collaborates with BostonGene to provide information to patients regarding a new tumor portrait testing platform. <a href="https://www.youtube.com/watch?v=Y4cCbiddC1w" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">(See a YouTube project overview for patients.)</a></p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Cell Line Development at the Broad Institute (Harvard / MIT)</h4>
                  <p className="mb-4 text-sm text-gray-700">Since 2018 the NLMSF has been collaborating with the Broad Institute to develop verifiable LMS cell lines. In 2019, NLMSF made a funding commitment for three years for the Cell Line Dependency Map project. In 2020, NLMSF made an additional funding grant for RNA sequencing of the 11 cell lines that have been developed so far.</p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">Koch Research Institute / Rare Cancer Research Foundation</h4>
                  <p className="m-0 text-sm text-gray-700">The NLMSF encourages patients having surgery to donate fresh tumor tissue to the Boehm Lab at the Koch Institute for Integrative Cancer Research at MIT through www.pattern.org, an initiative of the Rare Cancer Research Foundation.</p>
                </div>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-3 font-semibold text-red-900">LMS Count-Me-In Project at the Broad Institute (Harvard / MIT)</h4>
                  <p className="mb-4 text-sm text-gray-700">The Foundation continues to work closely with the Broad Institute and the Dana-Farber Cancer Institute on this project. The Leiomyosarcoma Project is part of the larger Count-Me-In Project. The Broad has received a significant funding grant from the NIH / NCI to develop new registries for leiomyosarcoma and osteosarcoma.</p>
                </div>
              </div>
              <h3 className="mb-6 mt-10 text-xl font-semibold text-gray-900">Pan-Sarcoma Organizations Working Groups</h3>
              <div className="space-y-4">
                {[
                  { title: "SARC (Sarcoma Alliance for Research through Collaboration)", p: "SARC is a U.S.-based nonprofit cancer research organization. NLMSF board members serve on SARC's Research Advocacy Committee.", link: "https://sarctrials.org/" },
                  { title: "Sarcoma Coalition", p: "The NLMSF is active in the Sarcoma Coalition, a nonprofit co-founded in 2017 by NLMSF board member Annie Achee. During 2024, three new groups joined the Coalition, bringing the number of participating sarcoma advocacy organizations to 36.", link: "https://sarcomacoalition.us/" },
                  { title: "ECOG-ACRIN", p: "The ECOG-ACRIN Cancer Research Group is a network of nearly 1400 academic and community-based cancer centers and hospitals. The NLMSF contributes to the mission and goals of ECOG-ACRIN's sarcoma workgroup, cardiotoxicity workgroup, and patient advocacy workgroup.", link: "https://ecog-acrin.org/" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-emerald-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 font-semibold text-emerald-900">{item.title}</h4>
                    <p className="m-0 text-gray-700">{item.p} {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Learn more</a>}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Patient Resources */}
          <section id="patient-resources" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-6 text-2xl font-bold text-white">
              Patient / Caregiver Resources
            </h2>
            <div className="p-8">
              <p className="mb-8">In 2024 we continued our ongoing work through the following programs:</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Three websites providing information</h4>
                  <p className="mb-4 text-sm text-gray-700">Patient and caregiver resources; research updates, clinical trials; and well-being resources</p>
                  <ul className="list-none space-y-1 p-0">
                    {["https://nlmsf.org/", "https://leiomyosarcoma.info", "https://nlmsflifechange.com/"].map((url) => (
                      <li key={url} className="before:mr-2 before:content-['→'] before:font-bold before:text-cyan-600"><a href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{url}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Social Media</h4>
                  <p className="m-0 text-sm text-gray-700">The NLMSF maintains three Facebook pages and regularly posts to them and to other community Facebook pages.</p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">The LMS / Sarcoma Community Connection</h4>
                  <p className="m-0 text-sm text-gray-700">At the end of 2024, the Foundation&apos;s biweekly e-newsletter underwent a redesign and got a new name: the LMS / Sarcoma Community Connection.</p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">LMS Lifeline Buddy Program</h4>
                  <p className="m-0 text-sm text-gray-700">Peer-to-peer patient and / or caregiver matching for one-on-one support.</p>
                </div>
                <div className="rounded-xl border border-amber-200 border-l-4 border-l-amber-600 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 text-center">
                  <h4 className="mb-3 font-semibold text-amber-900">24/7 Lifeline Support Hotline</h4>
                  <p className="mb-2 text-2xl font-bold text-red-600">303-808-3437</p>
                  <p className="m-0 text-sm text-gray-700">The Foundation&apos;s support hotline is available 24 hours a day, 7 days a week.</p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">Connect with a Clinician Program</h4>
                  <p className="m-0 text-sm text-gray-700">We refer questions to one or more members of our Medical Advisory Panel. <Link href="/our-board-5/" className="text-indigo-600 hover:underline">Our Board / Medical Advisory Panel</Link></p>
                </div>
                <div className="rounded-xl border border-sky-200 border-l-4 border-l-cyan-600 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                  <h4 className="mb-3 font-semibold text-cyan-900">On-site Patient Family Programs at Sarcoma Centers</h4>
                  <p className="m-0 text-sm text-gray-700">The NLMSF presents annual educational, in-person sessions at sarcoma centers of excellence in several states across the nation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Online Programs */}
          <section id="online-programs" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-violet-900 px-8 py-6 text-2xl font-bold text-white">
              Online Patient / Caregiver Programs
            </h2>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { title: "LMS Research in Review", p: "Virtual discussions with experts are presented throughout the year via Zoom. Find current and past programs here: ", link: "/events/" },
                  { title: "Peer-to-Peer Patient Network", p: "Online discussions are held throughout the year on topics that allowed for sharing patient perspectives but without clinical scientists present. These sessions are not recorded." },
                  { title: "Patient Perspectives in Clinical Trials", p: "This discussion group meets on Zoom several times per year to discuss patient and caregiver experiences with clinical trials and suggestions on how trials could be improved." },
                  { title: "Caregiving Counts Advocacy Network", p: "This discussion group, held several times per year via Zoom, is focused toward caregivers but patients are encouraged to attend. (Includes podcasts and handout materials.)" },
                  { title: "THE ABC's of the LMS Diagnosis and Treatment Journey", p: "This program / discussion group for new and existing patients and their families is held via Zoom several times per year. We talk about initial steps for newly diagnosed patients, finding a sarcoma center, questions to ask at appointments, and more." },
                  { title: "Survivorship Care Planning Clinic", p: "This occasional online discussion group covers the significance, objectives, and usefulness of having a survivorship care plan in place both during and after cancer treatment." },
                  { title: "Wellness – Integrative Medicine Guidance for Patients", p: "This series was new in 2024. It incorporates nutrition, exercise, and psychosocial well-being and includes survivorship peer clinic sessions for patients." },
                  { title: "Open to Hope – Crisis and Bereavement Group", p: "This discussion group, scheduled as needed, supports family members left behind in grief, depression or anxiety. It offers support in \"picking up the pieces\" and rebuilding lives, including with children." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-violet-200 border-l-4 border-l-violet-700 bg-gradient-to-br from-violet-50 to-purple-50 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <h4 className="mb-3 font-semibold leading-snug text-violet-900">{item.title}</h4>
                    <p className="m-0 text-sm leading-relaxed text-violet-800">
                      {item.p}
                      {item.link && <Link href={item.link} className="text-indigo-600 hover:underline">Events</Link>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Moving Forward 2025 */}
          <section id="moving-forward" className="mb-16 overflow-hidden rounded-xl bg-white shadow-md scroll-mt-8">
            <h2 className="m-0 bg-gradient-to-br from-violet-700 to-indigo-700 px-8 py-6 text-2xl font-bold text-white after:block after:h-1 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-amber-500">
              Moving Forward in 2025
            </h2>
            <div className="p-8">
              <p className="mb-10">We are in our 25th year of serving the LMS community, having increased and deepened connections with the patient community and research community every single year along the way. The following are the Foundation&apos;s activities as we proceed through 2025:</p>
              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">2025 NLMSF Research Awardee</h3>
                <div className="rounded-xl border border-red-200 border-l-4 border-l-red-600 bg-gradient-to-br from-red-50 to-red-100/50 p-6">
                  <h4 className="mb-2 text-lg font-bold text-slate-800">Robert Canter, MD</h4>
                  <p className="mb-4 italic text-gray-500">Department of Surgery · UC Davis, Sacramento, CA</p>
                  <div className="mb-4 rounded-lg border-l-4 border-l-cyan-500 bg-white p-4">
                    <strong>Research Project:</strong> Pre-clinical Evaluation of Placental-Derived Natural Killer (NK) Cells to Target Leiomyosarcoma
                  </div>
                  <div className="rounded-lg border-l-4 border-l-sky-500 bg-sky-50 p-4">
                    <p className="m-0"><strong>Research Description:</strong> To optimize the therapeutic efficacy of placental-derived natural killer (NK) cells to pave the way for their use against leiomyosarcoma (LMS) in the clinic. Key features include evaluating the hypothesis that placental-derived NK cells expand more and live longer compared to peripheral blood NK cells, and that they also show sustained expression of CD16, a key marker allowing NK cells to kill tumor cells.</p>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">Other Research Funding Commitments</h3>
                <div className="space-y-6">
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 font-semibold text-emerald-900">NLMSF Early Career Award for 2025</h4>
                    <p className="m-0 text-gray-700">Our 2025 awardee will be announced later this year. This award, targeted to fellows and post-doc specialists, covers a travel stipend to attend the 2025 Research Roundtable meeting, which will be focused on the consensus paper.</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 border-l-4 border-l-emerald-500 bg-white p-6">
                    <h4 className="mb-3 font-semibold text-emerald-900">NLMSF Faculty Recognition Award for 2025</h4>
                    <p className="m-0 text-gray-700">This non-monetary award, which is being launched in 2025, will be granted to a junior faculty member within 5-7 years from initial faculty position. The awardee will be integrated into the International Research Roundtable workgroups.</p>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="m-0 mb-6 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 px-8 py-4 text-xl font-semibold text-white">Patient / Caregiver Resources</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-100 p-6 text-center">
                    <h4 className="mb-4 font-semibold text-amber-900">Three websites providing comprehensive information</h4>
                    <ul className="list-none space-y-2 p-0 text-sm">
                      <li><a href="https://nlmsf.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://nlmsf.org/</a></li>
                      <li><a href="https://leiomyosarcoma.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://leiomyosarcoma.info</a></li>
                      <li><a href="https://nlmsflifechange.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://nlmsflifechange.com/</a></li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-100 p-6 text-center">
                    <h4 className="mb-3 font-semibold text-amber-900">24/7 Lifeline Support Hotline</h4>
                    <p className="mb-2 text-2xl font-bold text-red-600">303-808-3437</p>
                    <p className="m-0 text-sm">Available 24 hours a day, 7 days a week</p>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-100 p-6 text-center">
                    <h4 className="mb-3 font-semibold text-amber-900">LMS Lifeline Buddy Program</h4>
                    <p className="m-0 text-sm">Peer-to-peer patient and/or caregiver matching for one-on-one support.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-2 border-red-400 bg-gradient-to-br from-red-50 to-red-100/50 p-8 text-center">
                <h4 className="mb-4 text-xl font-bold text-red-700">NOTE TO OUR COMMUNITY:</h4>
                <p className="m-0 text-gray-700">Your contributions to the patient-driven research of patient data collection and collaboration through the Dana Farber COUNT ME IN PROJECT and the RARE CANCER RESEARCH FOUNDATION for tumor tissue collection for the Broad and Koch Institutes make all the difference in advancing research for LMS.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
