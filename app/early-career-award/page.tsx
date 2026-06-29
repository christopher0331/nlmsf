import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NLMSF Early Career Award | National Leiomyosarcoma Foundation",
  description:
    "The NLMSF Early Career Award supports residents, fellows, post-docs, and junior investigators developing a focus in leiomyosarcoma research. Nominations due June 12, 2026.",
};

const workgroups = [
  "Cell Lines / PDX Models",
  "Omics",
  "Clinical Trials",
  "Gynecological LMS",
  "Imaging/Radiomics",
];

const recentAwardees = [
  {
    award: "Early Career Award",
    name: "Dr. Ryan Denu, MD, PhD",
    affiliation: "MD Anderson Cancer Center · Houston, Texas",
  },
  {
    award: "Brian Van Tine, MD Memorial — Peer Recognition Award for Excellence in LMS Research",
    name: "Priya Chudasama, PhD",
    affiliation: "German Cancer Research Center · Heidelberg, Germany",
  },
  {
    award: "Early Career Award",
    name: "Dr. Jeff Ryts",
    affiliation: "2024 Awardee",
  },
];

export default function EarlyCareerAwardPage() {
  return (
    <main id="early-career" className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      <section className="bg-gradient-to-r from-[#4338ca] to-[#7e22ce] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            <i className="fas fa-award text-xs" aria-hidden />
            <span>Research Initiatives · Year 3</span>
          </div>
          <h1 className="text-3xl md:text-[2.5rem] font-extrabold leading-tight mb-4">
            NLMSF Early Career Award Program
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-6">
            Recognizing and supporting the next generation of leiomyosarcoma researchers
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-2 m-0">
            <i className="fas fa-calendar-check text-xs" aria-hidden />
            Nominations due <time dateTime="2026-06-12">June 12, 2026</time>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
          <div className="px-8 py-7 border-b border-indigo-100 bg-gradient-to-r from-emerald-50/70 to-amber-50/50 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="rounded-2xl bg-white border border-amber-200/70 p-4 shadow-sm shrink-0">
              <Image
                src="/images/early-career-award-logo.jpg"
                alt="NLMSF Early Career Researcher Recognition Awards — For Excellence in LMS Research"
                width={240}
                height={240}
                className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-contain"
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-slate-900 m-0">
                The National Leiomyosarcoma Foundation Awards
              </h2>
              <p className="text-slate-600 text-sm mt-2 mb-0">
                Honoring leaders for their collaboration, dedication, and vision in driving forward
                sarcoma research and transforming patient outcomes.
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-4 m-0">
              Recent Recipients
            </h3>
            <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <Image
                src="/images/nlmsf-early-career-awards-2026.png"
                alt="NLMSF Early Career Award and Brian Van Tine MD Memorial Peer Recognition Award recipients"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {recentAwardees.map((recipient) => (
                <article
                  key={`${recipient.award}-${recipient.name}`}
                  className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 h-full"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 leading-snug">
                    {recipient.award}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 m-0">{recipient.name}</h3>
                  <p className="text-sm text-slate-600 mt-1 mb-0">{recipient.affiliation}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded-xl p-5 shadow-sm flex gap-4 items-start">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <i className="fas fa-bell" aria-hidden />
          </span>
          <div>
            <p className="text-amber-900 font-bold text-lg m-0">
              Nominations open — deadline extended to{" "}
              <time dateTime="2026-06-12">June 12, 2026</time>
            </p>
            <p className="text-amber-800 text-sm mt-2 mb-0">
              Submit your completed nomination form directly to the Foundation (see How to Nominate below).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-indigo-100 bg-gradient-to-r from-[#4338ca]/5 to-[#7e22ce]/5">
            <p className="text-sm font-semibold text-[#4338ca] uppercase tracking-widest mb-1">
              April 4, 2026 Announcement
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 m-0">
              About the Program
            </h2>
          </div>

          <div className="p-8 md:p-10 space-y-5 text-slate-700 leading-relaxed">
            <p className="m-0">
              The National Leiomyosarcoma Foundation (NLMSF) is offering an{" "}
              <strong>Early Career Award Program</strong>, currently in its{" "}
              <strong>3rd year</strong>, to recognize and support Residents, Research Fellows,
              Post Docs, and Junior Investigators to develop specific interest in leiomyosarcoma
              research as a future focus in clinical practice and research endeavors.
            </p>
            <p className="m-0">
              One selected candidate per year is sponsored to attend the{" "}
              <strong>International LMS Research Roundtable</strong>, participate in one of the
              workgroups, and receive mentorship from participating scientific leadership.
            </p>
            <p className="m-0">
              The selected candidate will be acknowledged at the annual meeting of the International
              LMS Research Roundtable on <strong>October 2–3, 2026 in Milan</strong>, with
              sponsorship supporting their attendance and workgroup participation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Sponsorship", value: "Travel & attendance", icon: "fa-hand-holding-heart" },
            { label: "Roundtable meeting", value: "Oct 2–3, 2026", icon: "fa-calendar-alt" },
            { label: "Location", value: "Milan, Italy", icon: "fa-map-marker-alt" },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="rounded-xl border border-indigo-100 bg-white px-5 py-4 shadow-sm text-center"
            >
              <i className={`fas ${icon} text-[#7e22ce] text-lg mb-2`} aria-hidden />
              <p className="text-xs font-semibold text-[#4338ca] uppercase tracking-wide m-0">
                {label}
              </p>
              <p className="text-lg font-bold text-slate-900 mt-1 mb-0">{value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
            Roundtable Workgroups
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Workgroups focus on setting goals and objectives centered around the unmet needs of LMS
            research and treatment. An example of work produced by the Clinical Trials Workgroup is
            reflected in this publication:{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4338ca] font-semibold hover:underline"
            >
              PMC7924026
            </a>
            .
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0 m-0">
            {workgroups.map((group) => (
              <li
                key={group}
                className="rounded-lg border-l-4 border-[#7e22ce] bg-indigo-50/60 px-4 py-3 text-sm font-medium text-slate-800"
              >
                {group}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
            How to Nominate
          </h2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Nominations are requested at this time. Please forward your completed nomination form to:
          </p>
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 mb-5">
            <p className="font-semibold text-slate-900 m-0">Annie Achee</p>
            <p className="text-sm text-slate-600 mt-1 mb-2">
              President, National Leiomyosarcoma Foundation
            </p>
            <a
              href="mailto:annieachee@aol.com?subject=NLMSF%20Early%20Career%20Award%20Nomination"
              className="inline-flex items-center gap-2 text-[#4338ca] font-semibold hover:underline text-sm"
            >
              <i className="fas fa-envelope text-xs" aria-hidden />
              annieachee@aol.com
            </a>
          </div>
          <p className="text-slate-700 leading-relaxed mb-0">
            For questions or additional clarification, please contact{" "}
            <strong>Dr. Sujana Movva</strong> (
            <a href="mailto:movvas@mskcc.org" className="text-[#4338ca] font-medium hover:underline">
              movvas@mskcc.org
            </a>
            ), Medical Oncology, Sarcoma Center, Memorial Sloan Kettering — or Annie Achee, President
            of the National Leiomyosarcoma Foundation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/international-research-roundtable"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow transition"
          >
            <i className="fas fa-globe text-xs" aria-hidden />
            International LMS Research Roundtable
          </Link>
          <Link
            href="/research-projects-funded#early-career"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow transition"
          >
            <i className="fas fa-microscope text-indigo-600 text-xs" aria-hidden />
            NLMSF Research Projects Funded
          </Link>
        </div>
      </div>
    </main>
  );
}
