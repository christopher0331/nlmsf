import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2027–2028 Research Grant Announcement | NLMSF",
  description:
    "National Leiomyosarcoma Foundation 2027–2028 Research Grant Announcement. LOI deadline: May 1, 2026.",
};

export default function ResearchGrantAnnouncementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#4338ca] to-[#7e22ce] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/nlmsf_logo_no_background-removebg-preview.png"
              alt="National Leiomyosarcoma Foundation Logo"
              width={220}
              height={80}
              className="brightness-0 invert"
              priority
            />
          </div>
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Annual Research Grant
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Annual Research Grant Proposal Announcements
          </h1>
          <p className="text-white/80 text-lg">
            National Leiomyosarcoma Foundation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Grant Title Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#4338ca] mb-2">
            NATIONAL LEIOMYOSARCOMA FOUNDATION
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-center text-[#7e22ce] mb-6">
            2027–2028 RESEARCH GRANT ANNOUNCEMENT
          </h3>

          {/* LOI Deadline Banner */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-5 mb-8">
            <p className="text-red-700 font-bold text-lg">
              LOI Deadline: Friday, May 1st, 2026
            </p>
          </div>

          {/* Submit To */}
          <div className="bg-indigo-50 rounded-xl p-5 mb-8">
            <p className="font-semibold text-slate-800 mb-2">Please submit to:</p>
            <ul className="space-y-1 text-slate-700">
              <li>
                <span className="font-medium">Matthew Ingham</span>{" "}
                —{" "}
                <a
                  href="mailto:matthew.ingham@nyulangone.org"
                  className="text-[#4338ca] hover:underline font-medium"
                >
                  matthew.ingham@nyulangone.org
                </a>
              </li>
              <li>
                <span className="font-medium">Brittany Siontis</span>{" "}
                —{" "}
                <a
                  href="mailto:siontis.brittany@mayo.edu"
                  className="text-[#4338ca] hover:underline font-medium"
                >
                  siontis.brittany@mayo.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Introduction
            </h4>
            <p className="text-slate-700 leading-relaxed">
              The National Leiomyosarcoma Foundation (NLMSF) is dedicated to meeting the needs of
              leiomyosarcoma (LMS) patients, caregivers and families through education and research.
              In order to facilitate advances in the treatment of LMS through research, the NLMSF is
              accepting research proposals for pilot studies that will launch "out of the box" ideas
              and new research trajectories to move the field forward.
            </p>
          </div>

          {/* Scope */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Scope of the Award / Areas of Interest
            </h4>
            <p className="text-slate-700 leading-relaxed">
              All direct funds must be used to support LMS research. Proposals involving any
              scientific discipline are allowed including those related to biomarkers and imaging.
              This award was created to support basic and translational research. Other highly
              translational projects that are not based in a traditional "wet lab" may be considered
              (for example: in silico computational biology, radiomics, etc.); however, investigators
              who are considering submitting a non-traditional research project are highly encouraged
              to discuss the appropriateness of their project ahead of time. Clinical research
              (interventional trials) will not be supported by this award; however, work studying
              human samples and annotated data sets obtained from clinical trials is allowed. Studies
              requiring human samples must show documentation of IRB approval prior to awarding of
              funds (or document waivers if applicable).
            </p>
          </div>

          {/* LOI Overview */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Letter of Intent (LOI) Overview
            </h4>
            <p className="text-slate-700 leading-relaxed mb-4">
              The NLMSF seeks LOIs for research grant funding. The total award will be{" "}
              <strong>$50,000 per year for 2 years</strong>. Indirect costs should not exceed 10%
              of the total budget.
            </p>
            <p className="text-slate-700 font-medium mb-3">The LOI should consist of:</p>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li className="leading-relaxed">
                <span className="font-semibold">Proposed research (2 page maximum)</span> – please
                include the research question/purpose, significance, high-level methodology and
                potential impact on the field
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Applicant&apos;s NIH Biosketch</span>
              </li>
            </ol>
            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              The LOIs will be reviewed by the NLMSF RFP committee, and a subset of candidates will
              be invited to submit a full proposal. Further information on the requirements for the
              full proposal will be provided.
            </p>
          </div>

          {/* Key Dates */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
              Key Dates
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "LOI Due", date: "May 1st, 2026" },
                { label: "Invitations for Full Proposal Sent", date: "June 15th, 2026" },
                { label: "Full Proposal Due", date: "August 31st, 2026" },
                { label: "Announcement", date: "November 2026" },
                { label: "Funding Start Date", date: "January 2027" },
              ].map(({ label, date }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-gradient-to-r from-[#4338ca]/5 to-[#7e22ce]/5 rounded-xl border border-indigo-100 px-4 py-3"
                >
                  <i className="fas fa-calendar-check text-[#7e22ce] mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-[#4338ca] uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-slate-800 font-bold">{date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/research-initiatives"
            className="inline-flex items-center gap-2 text-[#4338ca] font-semibold hover:underline text-sm"
          >
            <i className="fas fa-arrow-left text-xs" aria-hidden /> Back to Research Initiatives
          </Link>
        </div>
      </div>
    </main>
  );
}
