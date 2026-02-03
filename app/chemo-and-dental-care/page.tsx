import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Care Prior to Cancer Treatment | NLMSF",
  description:
    "Oral health and dental care before and during cancer treatment. Importance of dental care, patient education, and managing oral complications.",
};

const SECTION_TITLE =
  "text-xl md:text-2xl font-bold mb-6 py-2 px-4 text-white rounded inline-block";
const INFO_CARD =
  "bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md";
const BULLET_LIST = "list-disc pl-6 my-0 space-y-4 text-gray-700 leading-relaxed";
const SIDEBAR_LINK =
  "flex items-center py-2 px-2 rounded text-gray-600 no-underline transition-all duration-200 hover:bg-gray-100 hover:text-violet-700 hover:pl-3";
const ICON_MARKER = "mr-2 w-4 text-center text-[#7e22ce] shrink-0";

export default function ChemoAndDentalCarePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center text-center px-4 py-8 md:px-6 md:py-8 rounded-lg mb-8 max-w-[1200px] mx-auto"
        style={{
          background: "linear-gradient(to bottom right, white 60%, #8b5cf6 100%)",
        }}
      >
        <div className="inline-flex items-center bg-gray-100 rounded-full py-2 px-4 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#7e22ce] text-white flex items-center justify-center mr-2 shrink-0">
            <i className="fas fa-tooth text-xs" aria-hidden />
          </div>
          <span className="font-semibold text-gray-600 text-sm">Patient Education</span>
        </div>

        <h1
          className="text-2xl md:text-[2.5rem] font-bold my-4"
          style={{
            background: "linear-gradient(to right, #7e22ce, #4338ca)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Dental Care Prior to Cancer Treatment
        </h1>

        <div
          className="h-1 w-20 my-6 mx-auto rounded"
          style={{
            background: "linear-gradient(to right, #7e22ce, #4338ca)",
          }}
          aria-hidden
        />

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <span className="bg-violet-100 text-violet-700 py-1.5 px-3 rounded-full text-sm font-semibold">
            Oral Health
          </span>
          <span className="bg-violet-100 text-violet-700 py-1.5 px-3 rounded-full text-sm font-semibold">
            Cancer Care
          </span>
          <span className="bg-violet-100 text-violet-700 py-1.5 px-3 rounded-full text-sm font-semibold">
            Prevention
          </span>
        </div>

        <p className="text-gray-500 italic mt-2">Moving forward in the quest for the cure!</p>
      </section>

      {/* Sidebar + Content */}
      <div className="max-w-[1200px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <div className="p-6 bg-gray-50 rounded-lg">
            <nav aria-label="In this section">
              <h3 className="text-lg font-bold text-gray-600 mb-4 pb-2 border-b-2 border-gray-200">
                In This Section
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a href="#importance" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-angle-right text-xs" aria-hidden /></span>
                    Importance of Dental Care
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#education" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-angle-right text-xs" aria-hidden /></span>
                    Patient Education
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#complications" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-angle-right text-xs" aria-hidden /></span>
                    Managing Oral Complications
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#takeaways" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-angle-right text-xs" aria-hidden /></span>
                    Key Takeaways
                  </a>
                </li>
              </ul>
            </nav>

            <div
              className="text-white p-6 rounded-lg my-8"
              style={{
                background: "linear-gradient(135deg, #7e22ce, #6d28d9)",
              }}
            >
              <h3 className="text-lg font-bold mt-0 mb-2">Need Personalized Guidance?</h3>
              <p className="text-sm mb-4 opacity-95">
                Our patient navigators can help connect you with dental specialists experienced in cancer care.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#6d28d9] font-semibold py-2 px-4 rounded no-underline transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Contact a Navigator
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-600 mb-4 pb-2 border-b-2 border-gray-200">
                Related Resources
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <Link href="/abcs-of-new-diagnosis" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-file-alt text-xs" aria-hidden /></span>
                    ABCs of Diagnosis
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/treatment-options" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-pills text-xs" aria-hidden /></span>
                    Treatment Options
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/survivorship-resources" className={SIDEBAR_LINK}>
                    <span className={ICON_MARKER}><i className="fas fa-hands-helping text-xs" aria-hidden /></span>
                    Survivorship Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <section id="importance" className="mb-10 scroll-mt-24">
            <h2
              className={SECTION_TITLE}
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Importance of Dental Care
            </h2>
            <div className={INFO_CARD}>
              <ul className={BULLET_LIST}>
                <li>Cancer patients require educated, experienced dentists for treatment.</li>
                <li>Integration of oral care with oncology care is important, especially when advances in cancer treatment include various radiotherapies, chemotherapies, target treatment agents, immunotherapies, and maintenance therapy.</li>
                <li>Dental care can represent a clinical challenge, that highlights the need for collaboration and good communication between the treating physician/oncology care team and the dental care team.</li>
                <li>Dental specialists with sufficient training and experience should be sought out by patients in order to ensure that their care is optimum for appropriate, safe, and effective oral care.</li>
              </ul>
            </div>
          </section>

          <section id="education" className="mb-10 scroll-mt-24">
            <h2
              className={SECTION_TITLE}
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Patient Education
            </h2>
            <div className={INFO_CARD}>
              <ul className={BULLET_LIST}>
                <li>Similarly, patient education is important regarding potential oral side effects from cancer therapy, their prevention, surveillance check ups, as well as prophylactic oral and systemic care.</li>
                <li>Oral compromise during cancer therapy, including mucositis, infection, mouth sores, taste changes, and pain, can be significant. These side effects and toxicities can alter all aspects of oral and oropharyngeal functions affecting diet/taste, dry mouth, swallowing, chewing — and nutrition.</li>
                <li>An accurate knowledge of the burden of the diagnosis, treatment care, and potential oral complications associated with cancer therapies will facilitate appropriate management of oral complication potential.</li>
              </ul>
            </div>
          </section>

          <section id="complications" className="mb-10 scroll-mt-24">
            <h2
              className={SECTION_TITLE}
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Managing Oral Complications
            </h2>
            <div className={INFO_CARD}>
              <div className="bg-sky-100 border-l-4 border-sky-500 pl-5 pr-4 py-4 rounded-r my-6">
                <p className="font-semibold text-sky-800 mt-0 mb-4">Common oral complications during cancer treatment include:</p>
                <ul className={`${BULLET_LIST} text-sky-900`}>
                  <li>Mucositis (inflammation of the mouth lining)</li>
                  <li>Infections (bacterial, viral, fungal)</li>
                  <li>Bleeding</li>
                  <li>Dry mouth (xerostomia)</li>
                  <li>Taste alterations</li>
                  <li>Difficulty swallowing</li>
                  <li>Jaw pain or stiffness</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="takeaways" className="mb-10 scroll-mt-24">
            <h2
              className={SECTION_TITLE}
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
              }}
            >
              Key Takeaways
            </h2>
            <div className={INFO_CARD}>
              <ul className={BULLET_LIST}>
                <li>Prevention of oral complications, early recognition, and management will help bridge timely support through medical intervention for ultimate best outcomes to be achieved as part of cancer care.</li>
                <li>Bottom line: pre-cancer treatment dental assessment and care is imperative, in order to possibly side-step issues, and manage complications from moving into cancer therapy.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
