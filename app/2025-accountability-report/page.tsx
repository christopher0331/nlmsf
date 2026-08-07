import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2025 Accountability Report | NLMSF",
  description:
    "What we accomplished to help and support the LMS community — 2025 in review. Research funding, Circle of Hope, Snapshot News, awards, and new initiatives.",
};

const YEAR_END_MESSAGE =
  "https://mailchi.mp/nlmsf.org/nlmsf-2025-year-end-message-and-accountability-report";
const SUMMARY_PDF = "/accountability-reports/2025/summary.pdf";

export default function Report2025Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50/80 via-white to-slate-50 text-slate-800">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">
          Annual Accountability Report
        </p>
        <h1 className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
          2025 NLMSF Accountability Report
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
          What we accomplished to help and support the LMS community — 2025 in review
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={SUMMARY_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 font-semibold text-white no-underline transition hover:bg-teal-700"
          >
            <i className="fas fa-download" aria-hidden /> Download PDF Summary
          </a>
          <a
            href={YEAR_END_MESSAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-600 px-5 py-2.5 font-semibold text-teal-700 no-underline transition hover:bg-teal-50"
          >
            <i className="fas fa-envelope-open-text" aria-hidden /> Year-End Message
          </a>
          <Link
            href="/accountability-reports-hub/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 no-underline transition hover:bg-slate-100"
          >
            All Reports
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-6 pb-16">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Circle of Hope Roundtable</h2>
          <p className="m-0 leading-relaxed text-slate-700">
            Newly created NLMSF Patient-Caregiver Circle of Hope Roundtable — the Community THINK
            TANK for sarcoma patients and families, as well as other sarcoma patient advocacy
            foundations, to come together to prioritize unmet needs in treatment and care and
            tackle strategies to improve the patient experience. Launch date: January 8, 2026.
          </p>
          <p className="mt-4 mb-0">
            <Link href="/patient-unmet-needs/" className="font-semibold text-teal-700 underline">
              Addressing Patients&apos; Common Challenges
            </Link>
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Patient &amp; Family Programs</h2>
          <p className="m-0 leading-relaxed text-slate-700">
            Continued to host numerous Patient-Family/Caregiver Virtual Programs, all posted on our
            website for everyone to find and learn more about important updates in the LMS cancer
            journey.
          </p>
          <p className="mt-4 mb-0">
            <Link href="/events/" className="font-semibold text-teal-700 underline">
              View patient programs &amp; events
            </Link>
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Funded Research</h2>
          <ul className="m-0 list-disc space-y-3 pl-5 text-slate-700">
            <li>
              Three LMS-specific research projects — one new for 2025–2026 and two completing their
              two-year research funding grants for 2024–2025. Details are on the NLMSF website under
              Research.
            </li>
            <li>
              Fourth year of funding of a five-year NLMSF commitment in support of the LMS SPORE
              (Specialized Programs of Research Excellence) — translational LMS research projects
              largely funded by a grant from the NCI/NIH.
            </li>
          </ul>
          <p className="mt-4 mb-0">
            <Link href="/research-funding-2/" className="font-semibold text-teal-700 underline">
              View research projects
            </Link>
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Awards for Young Researchers</h2>
          <ul className="m-0 list-disc space-y-3 pl-5 text-slate-700">
            <li>
              The Brian Van Tine, MD — Memorial Peer Recognition Award for Excellence in LMS
              Research
            </li>
            <li>
              The Early Career Award — for young researchers to encourage them to continue in
              LMS-specific research
            </li>
          </ul>
          <p className="mt-4 mb-0 leading-relaxed text-slate-700">
            Both awardees are required to attend the annual International LMS Research Roundtable
            and to actively participate in one of the existing Roundtable workgroups.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Research Collaborations</h2>
          <ul className="m-0 list-disc space-y-3 pl-5 text-slate-700">
            <li>
              <strong>TARGET Taskforce</strong> — initiated by Dr. Scott Okuno, Mayo Clinic, as an
              offshoot of the International LMS Research Roundtable, to review existing literature
              on known targets for LMS treatment and make recommendations for industry partners to
              pursue.
            </li>
            <li>
              <strong>TRACER Project</strong> — collaborative partnership with the Gujral Lab of
              the Fred Hutchinson Cancer Center, for a 2026 launch for patients to participate.
              Coordination with CURE ID (FDA) continues for an additional taskforce initiative for
              Repurposing Drugs for Sarcoma.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Community Information &amp; Resources</h2>
          <ul className="m-0 list-disc space-y-3 pl-5 text-slate-700">
            <li>
              <strong>Snapshot News</strong> — an additional short-read newsletter for research,
              well-being, and resource updates, sent on alternate weeks with the longstanding
              Community Connections newsletters.
            </li>
            <li>
              Added companion lay-language explanations of technical research articles to help
              patients understand study updates and clinical trial implications.
            </li>
            <li>
              New research/clinical trials site launching in 2026 at{" "}
              <a
                href="https://lmsresearch.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 underline"
              >
                lmsresearch.net
              </a>
              , including an accessible Patient Portal.
            </li>
            <li>Refreshed www.nlmsf.org for improved navigation and expanded support resources.</li>
          </ul>
          <p className="mt-4 mb-0">
            <Link href="/community-snapshot-news/" className="font-semibold text-teal-700 underline">
              Browse Snapshot News archives
            </Link>
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-teal-800">Pete&apos;s Blankets of Hope</h2>
          <p className="m-0 leading-relaxed text-slate-700">
            A collaboration with the Foundation to create crocheted chemo blankets, matching head
            coverings, and optional mittens for patients going through chemotherapy — every stitch
            symbolizes hope, encouragement, caring, and compassion for a patient&apos;s journey.
          </p>
        </article>

        <aside className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 p-6 text-center text-white md:p-8">
          <p className="m-0 text-lg font-semibold leading-relaxed">
            The NLMSF is most grateful to its supporters as well as the partnerships and
            collaborations that continue to strengthen the growth of resource support and research
            for the LMS community.
          </p>
          <Link
            href="/donate/"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-teal-800 no-underline transition hover:bg-teal-50"
          >
            Support LMS Research
          </Link>
        </aside>
      </section>
    </main>
  );
}
