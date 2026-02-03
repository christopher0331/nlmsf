import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advance Care Planning | NLMSF",
  description:
    "Care planning for patients and families. The Circle of COURAGE – HOPE – RESILIENCE – STRENGTH. Survivorship care planning and documenting life experiences.",
};

export default function AdvanceCarePlanningPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero - care-hero */}
      <section
        className="relative mx-auto mb-10 max-w-[1200px] overflow-hidden rounded-2xl px-6 py-14 text-center"
        style={{
          background: "linear-gradient(120deg, #ede9fe 0%, #f3f4f6 100%)",
          boxShadow: "0 4px 24px rgba(67,56,202,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-[700px] flex-col items-center">
          <span className="mb-5 inline-block rounded-full bg-[#e9d5ff] px-4 py-1.5 text-[0.95rem] font-semibold tracking-wide text-[#7e22ce] shadow-[0_1px_6px_rgba(126,34,206,0.07)]">
            Care Planning
          </span>
          <h1
            className="mb-2.5 text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]"
            style={{
              background: "linear-gradient(90deg, #7e22ce, #4338ca)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Care Planning
          </h1>
          <p className="mb-2 text-xl font-semibold text-[#7e22ce]">
            The Circle of <b>COURAGE – HOPE – RESILIENCE – STRENGTH</b>
          </p>
          <p className="mb-6 max-w-[600px] text-[1.1rem] text-[#4338ca]">
            A cancer diagnosis triggers many important questions, impactful emotions, life-changing
            decisions and challenges for patients and their families.
          </p>
          <div className="mx-auto max-w-[520px] rounded-2xl bg-white p-5 text-[1.05rem] font-medium text-[#4338ca] shadow-[0_2px_12px_rgba(67,56,202,0.08)] md:px-6">
            We help patients explore and identify their personal healthcare needs and desires in
            order to empower patients to communicate best with their oncology care team, their
            caregiver and family members. We understand that each patient and family is unique and
            has individual needs. We work closely with each family to identify and explore their
            specific challenges from initial diagnosis through end of treatment Survivorship Care
            Planning.
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-10 px-6 pb-12 md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-8 h-fit max-md:static">
          <div className="rounded-2xl bg-[#f8f9fc] p-6 shadow-[0_2px_10px_rgba(67,56,202,0.06)]">
            <h3 className="mb-6 border-b-2 border-[#e9d5ff] pb-3 text-lg font-bold text-[#7e22ce]">
              On This Page
            </h3>
            <nav className="sidebar-nav">
              <ul className="list-none space-y-3 p-0 m-0">
                <li>
                  <Link
                    href="/patient-perspectives"
                    className="flex items-center rounded-lg px-3 py-2.5 font-semibold text-[#7e22ce] no-underline transition-colors hover:bg-[#e9d5ff] hover:text-[#4338ca]"
                  >
                    <i className="fas fa-user-friends mr-3 w-5 text-center" aria-hidden />
                    Patient Perspectives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support-groups"
                    className="flex items-center rounded-lg px-3 py-2.5 font-semibold text-[#7e22ce] no-underline transition-colors hover:bg-[#e9d5ff] hover:text-[#4338ca]"
                  >
                    <i className="fas fa-users mr-3 w-5 text-center" aria-hidden />
                    Support Groups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education-forums"
                    className="flex items-center rounded-lg px-3 py-2.5 font-semibold text-[#7e22ce] no-underline transition-colors hover:bg-[#e9d5ff] hover:text-[#4338ca]"
                  >
                    <i className="fas fa-graduation-cap mr-3 w-5 text-center" aria-hidden />
                    Education Forums
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workshops"
                    className="flex items-center rounded-lg px-3 py-2.5 font-semibold text-[#7e22ce] no-underline transition-colors hover:bg-[#e9d5ff] hover:text-[#4338ca]"
                  >
                    <i className="fas fa-tools mr-3 w-5 text-center" aria-hidden />
                    Workshops & Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/denver-resources"
                    className="flex items-center rounded-lg px-3 py-2.5 font-semibold text-[#f59e42] no-underline transition-colors hover:bg-[#fef3c7] hover:text-[#d97706]"
                  >
                    <i className="fas fa-map-marker-alt mr-3 w-5 text-center" aria-hidden />
                    Denver Resources
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className="mt-8 overflow-hidden rounded-xl text-center shadow-[0_4px_12px_rgba(67,56,202,0.15)]"
              style={{ background: "linear-gradient(120deg, #7e22ce, #4338ca)" }}
            >
              <div className="p-6 text-white">
                <h3 className="mt-0 mb-3 text-lg font-semibold">Get Involved</h3>
                <Link
                  href="/get-involved"
                  className="inline-block rounded-md bg-white px-5 py-2.5 font-semibold text-[#7e22ce] no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 space-y-8">
          {/* Intro card */}
          <section className="content-section">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(67,56,202,0.08)]">
              <div className="border-l-[6px] border-[#7e22ce] p-6 text-[1.1rem] font-medium text-[#4338ca]">
                <p className="m-0">
                  The roadmap to &quot;a new normal&quot; of moving forward with living for the patient and
                  their family. Studies have shown that putting such a plan in place enhances
                  survival.
                </p>
              </div>
            </div>
          </section>

          {/* Survivorship Care Planning card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(67,56,202,0.08)]">
            <div className="border-l-[6px] border-teal-500 p-6 md:flex md:flex-row md:items-start md:gap-6">
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-bold text-[#7e22ce]">Survivorship Care Planning</h2>
                <p className="mb-6 text-gray-700">
                  Survivorship Care Planning after treatment involves the oncologist, the oncology
                  care team, the patient, and their family/caregivers who have been supporting them
                  throughout the treatment phase.
                </p>
              </div>
              <div className="flex shrink-0 justify-center py-4 md:py-0">
                {/* Add image to public/assets/survivor-heart.png */}
                <img
                  src="/assets/survivor-heart.png"
                  alt="Survivor Ribbon Heart"
                  className="max-h-[150px] w-auto max-w-[180px] rounded-2xl object-cover shadow-[0_2px_12px_rgba(126,34,206,0.14)] md:max-h-[180px]"
                />
              </div>
            </div>
          </div>

          {/* Gradient subtitle */}
          <h2
            className="my-8 py-2 text-2xl font-bold md:text-[1.8rem]"
            style={{
              background: "linear-gradient(90deg, #7e22ce, #4338ca)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Introduction to Survivorship Care Planning
          </h2>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Family Support Programs",
                text: "Connecting patients with support systems that understand their unique journey.",
              },
              {
                title: "Resource Navigation",
                text: "Linking to quality of life resources, educational workshops, and support groups.",
              },
              {
                title: "Education Forums",
                text: "Virtual and in-person educational opportunities for patients and families.",
              },
              {
                title: "Legacy Creation",
                text: "Helping patients document life experiences through Patient Perspectives projects.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-[#f6f7fb] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(67,56,202,0.12)]"
              >
                <h3 className="mb-3 text-lg font-semibold text-[#7e22ce]">{item.title}</h3>
                <p className="m-0 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="banner my-10 py-4 text-center">
            {/* Add image to public/assets/supporting-fighters.png */}
            <img
              src="/assets/supporting-fighters.png"
              alt="Supporting Fighters Quote"
              className="mx-auto max-w-full w-full max-w-[400px] rounded-2xl shadow-[0_4px_16px_rgba(245,158,66,0.14)]"
            />
            <p className="mt-3 text-[1.1rem] italic text-[#7e22ce]">
              &quot;Supporting the Fighters, Admiring the Survivors, Honoring the Taken, And NEVER, ever
              GIVING UP hope&quot;
            </p>
          </div>

          {/* Resources section - Documenting Life Experiences */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "linear-gradient(90deg, #f59e42 0%, #f6f7fb 100%)" }}
          >
            <h2 className="mb-4 text-2xl font-bold text-[#7e22ce]">Documenting Life Experiences</h2>
            <p className="mb-6 text-gray-700">
              Documenting life experiences can be cathartic and rewarding. We help patients create a
              Legacy Keepsake—an expressive project for families as a window into the heart of a
              patient or caregiver to reflect the essence of their journey.
            </p>
            <div className="text-center">
              <a
                href="https://nlmsf.org/patient-perspectives/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#7e22ce] px-6 py-3 font-semibold text-white no-underline shadow-[0_2px_8px_rgba(126,34,206,0.2)] transition-all hover:bg-[#6a1dad] hover:-translate-y-0.5"
              >
                Explore Patient Perspectives
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
