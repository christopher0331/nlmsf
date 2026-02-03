import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABC's of Newly Diagnosed | NLMSF",
  description:
    "Essential guidance for navigating your LMS diagnosis and treatment journey. Awareness, advocacy, and communication.",
};

export default function ABCsOfNewDiagnosisPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - matches .abcs-hero */}
      <section
        className="relative overflow-hidden py-16 px-8 text-center"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #eef2ff)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
          <div
            className="absolute rounded-full opacity-20 blur-[50px] w-[30rem] h-[30rem] -top-[15rem] -right-[10rem] bg-gradient-to-br from-[#a78bfa] to-[#60a5fa]"
          />
          <div
            className="absolute rounded-full opacity-20 blur-[50px] w-[20rem] h-[20rem] -bottom-[10rem] -left-[5rem] bg-gradient-to-tr from-[#fbbf24] to-[#f97316]"
          />
        </div>
        <div className="relative z-[2] max-w-[900px] mx-auto">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(to right, #6a3ea1, #4a90e2)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ABC&apos;s of Newly Diagnosed
          </h1>
          <p className="text-xl text-[#6b7280] max-w-[800px] mx-auto">
            Essential guidance for navigating your LMS diagnosis and treatment
            journey
          </p>
        </div>
      </section>

      {/* Page container: sidebar LEFT + content RIGHT - same pattern as health-insurance-guidance and 2023 report */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 gap-10 items-start md:grid-cols-[280px_1fr]">
        {/* Sidebar - LEFT column, sticky on desktop */}
        <aside className="sticky top-8 max-md:static w-full">
          <div
            className="bg-white rounded-2xl p-6 h-fit w-full"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <h3 className="text-2xl font-bold text-[#1f2937] mt-0 mb-5 pb-3 border-b-[3px] border-[#6a3ea1]">
              On This Page
            </h3>

            <nav className="space-y-3 mb-6">
              <a
                href="#abcs-intro"
                className="flex items-center py-3 px-4 rounded-lg bg-[#f9fafb] text-[#4b5563] no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:text-[#6a3ea1] hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#6a3ea1] shrink-0 mr-3" />
                <span>Introduction</span>
              </a>
              <a
                href="#awareness-card"
                className="flex items-center py-3 px-4 rounded-lg bg-[#f9fafb] text-[#4b5563] no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:text-[#6a3ea1] hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#4a90e2] shrink-0 mr-3" />
                <span>A - Awareness</span>
              </a>
              <a
                href="#advocate-card"
                className="flex items-center py-3 px-4 rounded-lg bg-[#f9fafb] text-[#4b5563] no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:text-[#6a3ea1] hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] shrink-0 mr-3" />
                <span>B - Be Your Own Advocate</span>
              </a>
              <a
                href="#communication-card"
                className="flex items-center py-3 px-4 rounded-lg bg-[#f9fafb] text-[#4b5563] no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:text-[#6a3ea1] hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] shrink-0 mr-3" />
                <span>C - Communication</span>
              </a>
              <a
                href="#support-card"
                className="flex items-center py-3 px-4 rounded-lg bg-[#f9fafb] text-[#4b5563] no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:text-[#6a3ea1] hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#ef4444] shrink-0 mr-3" />
                <span>Additional Support</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content - RIGHT column */}
        <div className="min-w-0">
          <section
            className="rounded-2xl p-8 mb-8"
            style={{
              backgroundColor: "#ffffff",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Intro card */}
            <div id="abcs-intro" className="mb-8 scroll-mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #6a3ea1, #4a90e2)",
                  }}
                >
                  <i className="fas fa-book text-white text-2xl" aria-hidden />
                </div>
                <h2
                  className="text-2xl font-bold m-0"
                  style={{
                    background: "linear-gradient(to right, #6a3ea1, #4a90e2)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Essential Guide for Newly Diagnosed Patients
                </h2>
              </div>
            </div>

            {/* A - Awareness - exact gradients from your CSS */}
            <div
              id="awareness-card"
              className="rounded-2xl p-6 mb-6 border border-[#d8b4fe] scroll-mt-8"
              style={{
                background:
                  "linear-gradient(to bottom right, #f3e8ff, #e0e7ff)",
              }}
            >
              <h3 className="flex items-center text-2xl font-bold mt-0 mb-4 text-[#7e22ce]">
                <i className="fas fa-info-circle mr-3" aria-hidden />
                A - Awareness
              </h3>
              <p className="text-lg text-[#4b5563] mb-6">
                Awareness of the various aspects of this disease is key to be
                able to have effective and efficient appointments.
              </p>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              >
                <ul className="list-none p-0 m-0 space-y-4">
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Become aware of what LMS is
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    See resource information about the disease from{" "}
                    <a
                      href="https://www.nlmsf.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6a3ea1] font-semibold no-underline hover:text-[#4a90e2] hover:underline"
                    >
                      www.nlmsf.org
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.leiomyosarcoma.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6a3ea1] font-semibold no-underline hover:text-[#4a90e2] hover:underline"
                    >
                      www.leiomyosarcoma.info
                    </a>
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Become aware of your pathology report and its importance in
                    proceeding down the right course of treatment
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    You have the right to seek a second opinion pathology
                    assessment
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Be aware of genomic/molecular testing opportunities to
                    evaluate your tumor for best treatment protocols to be
                    impacted by the results received
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Patient consent to donate tumor tissue prior to surgery to
                    the Cancer Cell Line Project for LMS
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Dental Care prior to oncologic treatment
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Be aware of all the resources available at your fingertips
                    from the NLMSF on insurance, lodging and transportation to
                    distant sarcoma centers
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#7e22ce] before:w-6 before:text-center">
                    Be aware of all three websites of the NLMSF to access
                    information and assistance to help and guide you and your
                    family/caregiver
                  </li>
                </ul>
              </div>
            </div>

            {/* B - Be Your Own Advocate */}
            <div
              id="advocate-card"
              className="rounded-2xl p-6 mb-6 border border-[#93c5fd] scroll-mt-8"
              style={{
                background:
                  "linear-gradient(to bottom right, #dbeafe, #e0f2fe)",
              }}
            >
              <h3 className="flex items-center text-2xl font-bold mt-0 mb-4 text-[#1d4ed8]">
                <i className="fas fa-user-shield mr-3" aria-hidden />
                B - Be Your Own Best Advocate
              </h3>
              <p className="text-lg text-[#4b5563] mb-6">
                To be an effective member of your care team:
              </p>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              >
                <ul className="list-none p-0 m-0 space-y-4">
                  {[
                    "Finding a sarcoma center of excellence - for sarcoma specialist care or if one location is an issue; request your community provider to consult with the sarcoma specialist (telemedicine)",
                    "Learn about your multidisciplinary care team - their role in your care",
                    "Time Management - Scheduling your appointments with efficiency in conjunction with coordination of scans, treatment and follow-up appointments",
                    "Build a tracking system - personal medical history journal",
                    'Ask for medical language explanations when you are unfamiliar with the "medical talk" - establish understanding between you and your provider',
                    "Ask questions and learn about clinical trials that might be an option for your situation",
                    "Find a healthcare partner who can accompany you to your appointments to be a second listener, take notes and help you remember important details",
                    "Know that in most cases, you have time to investigate your options for treatment protocol",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#1d4ed8] before:w-6 before:text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* C - Communication */}
            <div
              id="communication-card"
              className="rounded-2xl p-6 mb-6 border border-[#6ee7b7] scroll-mt-8"
              style={{
                background:
                  "linear-gradient(to bottom right, #d1fae5, #ccfbf1)",
              }}
            >
              <h3 className="flex items-center text-2xl font-bold mt-0 mb-4 text-[#047857]">
                <i className="fas fa-comments mr-3" aria-hidden />
                C - Communication
              </h3>
              <p className="text-lg text-[#4b5563] mb-6">
                Communication is key with your care team:
              </p>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              >
                <ul className="list-none p-0 m-0 space-y-4">
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Who are they
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Guidance on questions to ask
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Discuss side effects immediately from treatment
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Discuss the potential for recurrence, and anticipation of
                    next steps
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Discuss survivorship care planning for after treatment
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Contact the NLMSF - accessible 24/7
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Request information about the NLMSF LMS LifeLine Buddy
                    Program
                  </li>
                  <li className="flex items-start pl-8 relative before:content-['✓'] before:absolute before:left-0 before:font-bold before:text-[#047857] before:w-6 before:text-center">
                    Request information about the Learning Curves Workshop
                    Initiatives of the NLMSF
                    <ul className="list-none pl-6 mt-3 space-y-2">
                      <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-lg text-[#047857]">
                        Patient-Caregiver Advocacy Roundtable
                      </li>
                      <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-lg text-[#047857]">
                        Survivors Inspire Peer Network
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support card */}
            <div
              id="support-card"
              className="rounded-2xl p-6 border border-[#fcd34d] scroll-mt-8"
              style={{
                background:
                  "linear-gradient(to bottom right, #fef3c7, #ffedd5)",
              }}
            >
              <h3 className="flex items-center text-2xl font-bold mt-0 mb-6 text-[#b45309]">
                <i className="fas fa-cloud mr-3" aria-hidden />
                Need Additional Support?
              </h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:text-left text-center">
                <p className="flex-1 m-0 text-[#4b5563] md:pr-8">
                  The National Leiomyosarcoma Foundation is here to help.
                  Contact us anytime for resources, support, or to connect with
                  others in the LMS community.
                </p>
                <div className="shrink-0">
                  <Link
                    href="/contact/"
                    className="inline-block font-semibold py-3 px-6 rounded-lg text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to right, #6a3ea1, #4a90e2)",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
