import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chemo Corner | NLMSF",
  description:
    "Quick support as you prepare for chemotherapy for the first time. Care team, ChemoCare resources, and helpful tips for newly diagnosed patients.",
};

export default function ChemoCornerPage() {
  return (
    <main>
      {/* Hero - matches theme: light blue bg, purple gradient title, in-page links */}
      <section
        className="text-center py-10 px-6 md:px-8 max-w-[1200px] mx-auto rounded-lg mb-8"
        style={{ backgroundColor: "#f0f4ff" }}
      >
        <div className="inline-flex items-center bg-[#8b5cf6] text-white py-1.5 px-4 rounded-full text-sm font-medium mb-4">
          <svg className="w-4 h-4 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" />
          </svg>
          Circle of Hope
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            background: "linear-gradient(90deg, #7e22ce 0%, #4338ca 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CHEMO CORNER
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mt-0 mb-5">
          For Newly Diagnosed Patients - Look Who is in YOUR CORNER!
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-600">
          Quick support as you prepare yourself for chemotherapy for the first time.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="#care-team"
            className="inline-block py-2 px-4 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium no-underline border border-indigo-100 hover:bg-indigo-100 transition-colors"
          >
            Care Team
          </a>
          <a
            href="#chemocare"
            className="inline-block py-2 px-4 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium no-underline border border-emerald-100 hover:bg-emerald-100 transition-colors"
          >
            ChemoCare
          </a>
          <a
            href="#tips"
            className="inline-block py-2 px-4 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium no-underline border border-amber-100 hover:bg-amber-100 transition-colors"
          >
            Helpful Tips
          </a>
        </div>
      </section>

      {/* Sidebar + Content - same grid as chemo-and-dental-care, health-insurance-guidance */}
      <div className="max-w-[1200px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[280px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            {/* Quick Navigation */}
            <div className="border-b border-gray-200 p-5">
              <h3 className="text-base font-semibold text-indigo-700 mb-4 flex items-center">
                <svg className="w-[18px] h-[18px] mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Quick Navigation
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#care-team"
                  className="flex items-center py-2.5 px-3 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium no-underline border-l-4 border-indigo-600 hover:bg-indigo-100 transition-colors"
                >
                  Your Care Team
                </a>
                <a
                  href="#chemocare"
                  className="flex items-center py-2.5 px-3 bg-emerald-50 text-emerald-700 rounded-md text-sm font-medium no-underline border-l-4 border-emerald-600 hover:bg-emerald-100 transition-colors"
                >
                  ChemoCare Resources
                </a>
                <a
                  href="#tips"
                  className="flex items-center py-2.5 px-3 bg-amber-50 text-amber-700 rounded-md text-sm font-medium no-underline border-l-4 border-amber-600 hover:bg-amber-100 transition-colors"
                >
                  Helpful Tips
                </a>
              </div>
            </div>

            {/* Related Resources */}
            <div className="border-b border-gray-200 p-5">
              <h3 className="text-base font-semibold text-indigo-700 mb-4 flex items-center">
                <svg className="w-[18px] h-[18px] mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                Related Resources
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/newly-diagnosed/care-team"
                  className="flex items-center py-2.5 px-3 text-gray-600 rounded-md text-sm no-underline transition-colors hover:bg-gray-100"
                >
                  <svg className="w-4 h-4 mr-2 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Your Care Team
                </Link>
                <Link
                  href="/newly-diagnosed/treatment-options"
                  className="flex items-center py-2.5 px-3 text-gray-600 rounded-md text-sm no-underline transition-colors hover:bg-gray-100"
                >
                  <svg className="w-4 h-4 mr-2 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Treatment Options
                </Link>
                <Link
                  href="/newly-diagnosed/managing-lms"
                  className="flex items-center py-2.5 px-3 text-gray-600 rounded-md text-sm no-underline transition-colors hover:bg-gray-100"
                >
                  <svg className="w-4 h-4 mr-2 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Managing LMS
                </Link>
                <Link
                  href="/newly-diagnosed/patient-perspectives"
                  className="flex items-center py-2.5 px-3 text-gray-600 rounded-md text-sm no-underline transition-colors hover:bg-gray-100"
                >
                  <svg className="w-4 h-4 mr-2 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  Patient Perspectives
                </Link>
              </div>
            </div>

            {/* Support CTA */}
            <div className="p-5">
              <div
                className="rounded-lg p-5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(to right, #eff6ff, #dbeafe)",
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10" aria-hidden>
                  <svg fill="#1d4ed8" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-blue-800 mt-0 mb-2">Need Support?</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Connect with others who understand your journey through our support community.
                </p>
                <Link
                  href="/leiomyosarcoma-support-group"
                  className="inline-block py-2 px-4 bg-blue-700 text-white rounded-md text-sm font-medium no-underline transition-colors hover:bg-blue-800"
                >
                  Join Support Group
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content - sections so in-page links have targets */}
        <div className="min-w-0">
          <section id="care-team" className="mb-10 scroll-mt-24">
            <h2
              className="text-xl md:text-2xl font-bold mb-6 py-2 px-4 text-white rounded inline-block"
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Your Care Team
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your oncology care team is your partner through chemotherapy. They include your medical oncologist, nurses, and support staff who will guide you through treatment, manage side effects, and answer your questions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Building a strong relationship with your care team and knowing who to contact for different needs can make your chemo journey smoother. Use the links in the sidebar to explore care team resources.
              </p>
            </div>
          </section>

          <section id="chemocare" className="mb-10 scroll-mt-24">
            <h2
              className="text-xl md:text-2xl font-bold mb-6 py-2 px-4 text-white rounded inline-block"
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              ChemoCare Resources
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                ChemoCare resources help you prepare for and manage life during chemotherapy. From nutrition and hydration to managing fatigue and protecting your immune system, these tools support you before, during, and after treatment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                NLMSF and partner organizations offer guides, checklists, and support so you can focus on your health and recovery.
              </p>
            </div>
          </section>

          <section id="tips" className="mb-10 scroll-mt-24">
            <h2
              className="text-xl md:text-2xl font-bold mb-6 py-2 px-4 text-white rounded inline-block"
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Helpful Tips
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Practical tips can make a big difference as you start chemotherapy. Stay hydrated, rest when you need to, keep a symptom log, and don&apos;t hesitate to ask your care team about any concern—no question is too small.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many patients find it helpful to bring a family member or friend to appointments, write down questions in advance, and connect with others who have been through treatment. You&apos;re not alone in your corner.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
