import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Assistance | NLMSF",
  description:
    "Resources and organizations that help cancer patients manage financial challenges. CFAC, co-pay relief, patient assistance programs, and more.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function FinancialAssistancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl bg-white px-6 py-10 text-center shadow-sm mb-8 max-w-[900px] mx-auto border border-gray-100">
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(135deg, rgba(126, 34, 206, 0.04), rgba(67, 56, 202, 0.08))",
          }}
        />
        <div className="relative z-[2]">
          <div className="inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-sm font-semibold text-white mb-4" style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca)" }}>
            <i className="fas fa-hand-holding-usd" aria-hidden />
            <span>Resources</span>
          </div>
          <h1
            className="text-2xl font-bold leading-tight pb-1 mb-3 md:text-[2rem]"
            style={{
              background: "linear-gradient(90deg, #7e22ce, #4338ca)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Financial Assistance
          </h1>
          <p className="text-gray-600 max-w-[640px] mx-auto text-base md:text-lg">
            Organizations and programs that help patients manage financial challenges related to cancer care.
          </p>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-4 md:px-6 pb-16">
        {/* CFAC intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-6">
            The <strong>Cancer Financial Assistance Coalition (CFAC)</strong> is a consortium of organizations that help patients manage financial challenges that can emerge as a result of a cancer diagnosis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Patient Advocacy/Support organizations, such as Sarcoma Alliance, offer financial assistance/reimbursement for certain expenses connected to second opinion medical appointments–up to $500 upon meeting eligibility requirements. Advocacy support organizations may offer various programs and services to assist with cancer care expenses. Organizations offer different types of assistance with their own eligibility/regulatory parameters. Additionally, there is no guarantee that funds would always be available. Funds are limited and the amount of funding varies, therefore each should be contacted for specific information.
          </p>
        </section>

        {/* Program types */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#7e22ce]/30">
            Types of assistance
          </h2>
          <ul className="space-y-6 list-none p-0 m-0">
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>1</span>
              <div>
                <strong className="text-gray-900">Co-Pay Relief Program</strong> – Many voluntary organizations offer some financial relief to cancer patients who cannot afford insurance coverage, co-pays, deductibles, and other associated out-of-pocket costs if eligibility requirements are met.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>2</span>
              <div>
                <strong className="text-gray-900">Government Programs</strong> – Check into a government program to see if you may qualify. State government programs may be able to assist with medical and living expenses if eligibility requirements are met.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>3</span>
              <div>
                <strong className="text-gray-900">Public and Nonprofit Hospitals</strong> – Contact a social worker at a local health dept. for more information.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>4</span>
              <div>
                <strong className="text-gray-900">Patient Assistant Programs</strong> – From pharmaceutical companies that have patient assistant programs for insurance reimbursement; referrals to co-pay relief programs; medication cost reduction offers–if eligibility requirements are met.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>5</span>
              <div>
                <strong className="text-gray-900">Voluntary Organizations</strong> – Voluntary organizations may offer assistance with childcare, transportation, or home maintenance needs. Different organizations have different types and levels of assistance with eligibility/regulatory parameters.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>6</span>
              <div>
                <strong className="text-gray-900">Personal Financial Planning</strong> – Getting advice from a financial planner may be a valuable appointment. An accountant can help guide you on income taxes. Qualifications for tax credits can be evaluated to reduce your taxes, especially if you have significant out-of-pocket medical expenses, such as insurance deductibles. There are free and low-cost financial planning seminars as well, usually sponsored by investment management companies or even AARP.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>7</span>
              <div>
                <strong className="text-gray-900">Health Insurance</strong> – Your own health insurance benefit entitlements need to be carefully reviewed to best understand your policy&apos;s coverage. Your insurance company case manager can offer more personalized assistance with answering questions.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-[#7e22ce] text-sm font-bold" aria-hidden>8</span>
              <div>
                <strong className="text-gray-900">Your Community</strong> – Local organizations or advocacy organizations can provide assistance.
              </div>
            </li>
          </ul>
        </section>

        {/* Patient Guide + Paying for Cancer */}
        <section className="mb-10 space-y-6 rounded-xl border border-gray-200 bg-gray-50/60 p-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Patient Guide</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Read Cancer.net&apos;s new patient guide to financial help: &quot;Managing the Cost of Cancer Care,&quot; published by the American Society of Clinical Oncology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Paying for Cancer Treatments – Personal Loans, HSAs, and More</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Simple Dollar&apos;s &quot;Guide to Paying for Cancer Treatments&quot;. Receiving a cancer diagnosis can take a toll on a person&apos;s life not only emotionally and physically but also financially. We created a resource that outlines how to afford some of the most common cancer treatments. Our guide discusses payment options, important questions to ask and recommendations from experienced medical professionals.
            </p>
            <a
              href="https://www.thesimpledollar.com/paying-for-cancer-treatments-personal-loans/"
              className="inline-flex items-center gap-2 font-semibold text-[#7e22ce] no-underline hover:underline"
              {...ext}
            >
              https://www.thesimpledollar.com/paying-for-cancer-treatments-personal-loans/ <i className="fas fa-external-link-alt text-xs" aria-hidden />
            </a>
          </div>
        </section>

        {/* CFAC Coalition Organizations */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7e22ce]/30">
            CFAC Coalition Organizations that help patients
          </h2>
          <ul className="space-y-2 text-gray-700 leading-relaxed mb-6">
            <li>American Cancer Society</li>
            <li>CancerCare – <a href="https://www.cancercare.org/financial" className="text-[#7e22ce] font-medium no-underline hover:underline" {...ext}>cancercare.org/financial</a></li>
            <li>CancerCare Co-Payment Assistance Foundation</li>
            <li>HealthWell Foundation</li>
            <li>Patient Access Network Foundation</li>
            <li>Patient Services Incorporated</li>
            <li>National Organization for Rare Disease</li>
            <li><strong>Sarcoma Alliance</strong> – for second opinion appts – stipends for travel and medical expenses</li>
          </ul>
          <a
            href="http://www.cancerfac.org/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}
            {...ext}
          >
            GO TO: cancerfac.org for more information <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
          </a>
        </section>

        {/* Dream Foundation */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Dream Foundation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Grants final dreams from the heart to adults with life-threatening illnesses. May include vacation with a couple of family members, help with a utility bill, an appliance, or gift for ill adult&apos;s child.
          </p>
        </section>
      </div>
    </main>
  );
}
