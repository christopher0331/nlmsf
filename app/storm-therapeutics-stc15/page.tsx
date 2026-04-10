import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AISummaryButton from "@/components/AISummaryButton";

export const metadata: Metadata = {
  title: "Storm Therapeutics STC-15 — Phase 2 Clinical Trial | NLMSF",
  description:
    "Storm Therapeutics has opened a Phase 2 study of STC-15 in leiomyosarcoma (uterine & non-uterine). Learn about this METTL3 inhibitor clinical trial for LMS and liposarcoma patients.",
};

export default function StormTherapeuticsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      {/* Hero */}
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
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Clinical Trial — Phase 2
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Storm Therapeutics Research
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A Phase 2 study of STC-15 in Leiomyosarcoma &amp; Liposarcoma — targeting cancer at a deeper biological level
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* Recruiting Alert */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-400 to-emerald-500" />
          <div className="pl-6 pr-6 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Now Recruiting
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-extrabold text-slate-900 leading-snug">
                    STC-15 Phase 2 Clinical Trial — NCT06975293
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Storm Therapeutics is <strong>actively enrolling patients</strong> with leiomyosarcoma
                    (uterine &amp; non-uterine) and liposarcoma into this Phase 2 study of STC-15,
                    an oral METTL3 inhibitor. Sites are open now across the US — talk to your oncologist
                    about eligibility.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <a
                      href="https://clinicaltrials.gov/study/NCT06975293"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition shadow-sm"
                    >
                      <i className="fas fa-external-link-alt text-[10px]" aria-hidden />
                      View on ClinicalTrials.gov
                    </a>
                    <AISummaryButton
                      url="https://clinicaltrials.gov/study/NCT06975293"
                      title="STC-15 Phase 2 Study in Leiomyosarcoma and Liposarcoma (NCT06975293) — Storm Therapeutics METTL3 Inhibitor"
                      variant="large"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trial Overview */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-xl font-extrabold text-[#4338ca] mb-1 uppercase tracking-wide">
            Clinical Trial for Leiomyosarcoma &amp; Liposarcoma Patients
          </h2>
          <p className="text-xs text-slate-400 mb-5 font-medium uppercase tracking-wider">Because of their cell similarities</p>
          <p className="text-slate-700 leading-relaxed text-base">
            Storm Therapeutics has opened a Phase 2 study of <strong>STC-15</strong> in leiomyosarcoma
            (uterine &amp; non-uterine). STC-15 is a <strong>METTL3 inhibitor</strong>, administered as an
            oral tablet monotherapy to sarcoma patients. STC-15 inhibits the differentiation of aberrant
            stem cells that mature into leiomyosarcoma. The study is open at three sites in the US now,
            with many more to come.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-2.5">
            <i className="fas fa-flask text-[#4338ca]" aria-hidden />
            <span className="text-sm font-semibold text-[#4338ca]">Trial ID: NCT06975293</span>
          </div>
        </div>

        {/* Why important */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🔬</span> What Makes This Trial Important?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This study is testing a completely new way of treating leiomyosarcoma — not just attacking
            the tumor, but trying to <strong>interrupt how the cancer forms and grows</strong> at a deeper level.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#7e22ce] shrink-0" />
              <span>STC-15 targets <strong>METTL3</strong>, which plays a role in how cells "decide" what they become.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#7e22ce] shrink-0" />
              <span>In LMS, some cells behave like abnormal stem cells, which can keep producing more cancer.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#7e22ce] shrink-0" />
              <span>This drug is designed to <strong>block that process</strong>, potentially slowing or stopping tumor growth at its source.</span>
            </li>
          </ul>
          <div className="mt-5 bg-indigo-50 border-l-4 border-[#4338ca] rounded-r-xl px-5 py-3">
            <p className="text-slate-700 text-sm font-medium">
              <span className="text-base">💡</span> <strong>In simple terms:</strong> Instead of just shrinking tumors, this approach may help
              stop the cancer from continually rebuilding itself.
            </p>
          </div>
        </div>

        {/* Why patients might care */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-xl">💊</span> Why Patients Might Care About This Treatment
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900 mb-2">1. A New Mechanism — Different from Standard Chemo</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Most LMS treatments (like doxorubicin) work by killing rapidly dividing cells.
                STC-15 works differently — it aims to <strong>reprogram or disrupt cancer cell development</strong>.
              </p>
              <p className="text-sm font-semibold text-[#4338ca] mb-1">This could mean:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <i className="fas fa-arrow-right text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
                  Activity in patients who no longer respond to standard treatments
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-arrow-right text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
                  A new option for difficult-to-treat disease
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900 mb-2">2. Oral Therapy — Pill Instead of IV</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-green-600 mt-0.5 text-xs" aria-hidden />
                  Taken as a tablet, not an infusion
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-green-600 mt-0.5 text-xs" aria-hidden />
                  May reduce time spent in clinics
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-green-600 mt-0.5 text-xs" aria-hidden />
                  Potentially easier to fit into daily life
                </li>
              </ul>
              <p className="text-xs text-[#7e22ce] font-semibold mt-3">
                💊 For many patients, this is a meaningful quality-of-life benefit.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900 mb-2">3. Focus on Leiomyosarcoma Specifically</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-green-600 mt-0.5 text-xs" aria-hidden />
                  This trial includes both uterine and non-uterine LMS
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-green-600 mt-0.5 text-xs" aria-hidden />
                  LMS has historically had limited targeted therapy options
                </li>
              </ul>
              <p className="text-xs text-[#7e22ce] font-semibold mt-3">
                ❤️ That makes this study especially important — it is built for this patient community, not just borrowed from another cancer type.
              </p>
            </div>
          </div>
        </div>

        {/* Why Phase 2 matters */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-xl">📊</span> Why a Phase 2 Trial Matters
          </h2>
          <p className="text-slate-700 text-sm mb-3">Phase 2 trials are where researchers start to answer:</p>
          <ul className="space-y-2 text-slate-700 mb-5">
            {["Does this drug actually work in this cancer?", "How well does it control disease?", "What are the side effects?"].map((q) => (
              <li key={q} className="flex items-start gap-2 text-sm">
                <i className="fas fa-circle-question text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-slate-800 mb-2">Positive results here can lead to:</p>
          <ul className="space-y-2 text-slate-700">
            {["Larger Phase 3 trials", "Faster development timelines", "Potential future approval"].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <i className="fas fa-arrow-right text-[#4338ca] mt-0.5 text-xs" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Bigger picture */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🌍</span> Bigger-Picture Impact
          </h2>
          <p className="text-slate-700 text-sm mb-3">If STC-15 is successful, it could:</p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-star text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
              Open the door to a new class of drugs — <strong>METTL3 inhibitors</strong>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-star text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
              Change how LMS is treated — shifting toward <strong>targeting cancer biology</strong>, not just tumor size
            </li>
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-star text-[#7e22ce] mt-0.5 text-xs" aria-hidden />
              Provide hope for more <strong>personalized and less toxic treatments</strong>
            </li>
          </ul>
        </div>

        {/* Patient realism */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-xl">❤️</span> What Patients Should Realistically Keep in Mind
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-circle-info text-amber-600 mt-0.5 text-xs" aria-hidden />
              This is still early-stage research
            </li>
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-circle-info text-amber-600 mt-0.5 text-xs" aria-hidden />
              We don&apos;t yet know how effective it will be
            </li>
            <li className="flex items-start gap-2 text-sm">
              <i className="fas fa-circle-info text-amber-600 mt-0.5 text-xs" aria-hidden />
              Not everyone will benefit
            </li>
          </ul>
          <p className="text-sm text-amber-700 font-semibold mt-4">
            🔬 But trials like this are how progress happens — especially in rare cancers like LMS.
          </p>
        </div>

        {/* Bottom line */}
        <div className="bg-gradient-to-r from-[#4338ca] to-[#7e22ce] rounded-2xl p-8 text-white text-center">
          <p className="text-lg font-bold mb-2">Bottom Line — Patient Takeaway</p>
          <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
            This trial represents hope for a smarter, more targeted way to treat leiomyosarcoma — one
            that may go after the root of the cancer, not just the symptoms.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 text-center">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Learn More &amp; Find Trial Sites</h2>
          <p className="text-slate-500 text-sm mb-6">
            View full eligibility criteria, participating sites, and enrollment details on ClinicalTrials.gov
          </p>
          <a
            href="https://clinicaltrials.gov/study/NCT06975293"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4338ca] to-[#7e22ce] text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:opacity-90 transition text-sm"
          >
            <i className="fas fa-external-link-alt text-xs" aria-hidden />
            View Clinical Trial — NCT06975293
          </a>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/general-sarcoma"
            className="inline-flex items-center gap-2 text-[#4338ca] font-semibold hover:underline text-sm"
          >
            <i className="fas fa-arrow-left text-xs" aria-hidden /> Back to General Sarcoma
          </Link>
        </div>
      </div>
    </main>
  );
}
