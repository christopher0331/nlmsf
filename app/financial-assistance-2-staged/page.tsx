import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Financial Assistance (Resources) | NLMSF",
  description:
    "CFAC coalition organizations, free grants, co-pay relief, prescription assistance, and sarcoma patient funding support for cancer patients.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function FinancialAssistance2StagedPage() {
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
            Grants, coalition organizations, and support for cancer patients and families.
          </p>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-4 md:px-6 pb-16">
        {/* CFAC intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            The <strong>Cancer Financial Assistance Coalition</strong> (CFAC) is a consortium of organizations that help patients manage financial challenges that can emerge as a result of a cancer diagnosis.
          </p>
        </section>

        {/* Free Grants */}
        <section className="mb-10 flex flex-col md:flex-row md:items-start gap-6 rounded-xl border border-gray-200 bg-gray-50/60 p-6">
          <Image
            src="https://nlmsf.org/wp-content/uploads/2021/02/DollarsignGuy.jpg"
            alt=""
            width={79}
            height={79}
            className="w-20 h-20 object-contain shrink-0 rounded-lg"
          />
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-gray-900 mb-2 underline decoration-[#7e22ce] underline-offset-2">
              Free Grants to help Patients
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A list of resource organizations that offer funding support to patients:
            </p>
            <a
              href="https://cancercarenews.com/more-cancer-freebies/grants/"
              className="inline-flex items-center gap-2 font-semibold text-[#7e22ce] no-underline hover:underline"
              {...ext}
            >
              https://cancercarenews.com/more-cancer-freebies/grants/ <i className="fas fa-external-link-alt text-xs" aria-hidden />
            </a>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm">
              Grants are money and goods that do not have to be paid back and are provided by the agencies below to help ease the burden of a cancer diagnosis. Grants typically range from $200 to $5000. Please review each program&apos;s link for specific eligibility, the application process, and deadlines.
            </p>
          </div>
        </section>

        {/* CFAC Coalition Organizations */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7e22ce]/30">
            CFAC Coalition Organizations that help patients
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li><a href="https://www.cancer.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>American Cancer Society</a></li>
            <li><a href="https://www.cancercare.org/financial" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>CancerCare</a></li>
            <li><a href="https://www.cancercare.org/copayfoundation" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>CancerCare Co-Payment Assistance Foundation</a></li>
            <li><a href="http://www.cancerfac.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Cancer Financial Assistance Coalition</a></li>
            <li><a href="https://www.dreamfoundation.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Dream Foundation</a></li>
            <li><a href="https://www.healthwellfoundation.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>HealthWell Foundation</a></li>
            <li><a href="https://rarediseases.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>National Organization for Rare Disease</a></li>
            <li><a href="https://panfoundation.org/index.php/en/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Patient Access Network Foundation</a></li>
            <li><a href="https://www.patientservicesinc.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Patient Services Incorporated</a></li>
            <li><a href="https://sarcomaalliance.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Sarcoma Alliance</a></li>
            <li><a href="https://sarcoma-oma.org/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Sarcoma–Oma</a></li>
            <li><a href="https://triagecancer.org/cancer-finances-financial-assistance" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Triage Cancer</a></li>
          </ol>
        </section>

        {/* Free Mortgage, Utility & Legal */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            <a href="https://cancercarenews.com/free-financial-help-for-cancer-patients/mortgage-utilities-legal-taxes/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>
              Free Mortgage, Utility &amp; Legal Help For Cancer Patients
            </a>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The last thing a cancer patient needs is the added stress that comes with the financial burdens related to cancer care. These governmental and nonprofit agencies help cancer patients and families struggling with a broad range of financial issues. All assistance is free of charge and available nationwide to cancer patients and families in the USA.
          </p>
        </section>

        {/* Financial Support - GRACE / Nicki Leach */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            <a href="https://cancerjourneysfoundation.org/survivor-resources/financial-resources-for-cancer-patients/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>
              Financial Support for Cancer Patients and Survivors
            </a>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The National GRACE Foundation provides FREE college admissions and financial aid counseling to pediatric cancer patients and survivors. Nicki Leach Foundation, 904-304-8531 – Lifestyle scholarships and financial assistance for adolescent and young adult cancer survivor students that provide for everyday expenses like car payments, clothing and more.
          </p>
        </section>

        {/* CancerCare Financial & Co-Pay */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            <a href="https://www.cancercare.org/financial_assistance" className="text-[#7e22ce] no-underline hover:underline" {...ext}>
              Financial &amp; Co-Payment Assistance for Cancer Patients
            </a>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Offering limited financial assistance for cancer-related costs and co-pays, and our professional oncology social workers can help you find additional resources. Financial Assistance Program helps with treatment-related costs, such as transportation, home care and child care. View available assistance and eligibility guidelines. Learn more.
          </p>
        </section>

        {/* Resources list */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#7e22ce]/30">
            Additional resources
          </h2>
          <ul className="space-y-4 list-none pl-0 text-gray-700 leading-relaxed">
            <li>
              <a href="https://www.nccn.org/business-policy/business/virtual-reimbursement-resource-room-and-app" className="text-[#7e22ce] font-medium no-underline hover:underline" {...ext}>Virtual Reimbursement Resource Room and App</a>
            </li>
            <li>
              <strong>Patient Guide</strong> – Read Cancer.net&apos;s patient guide to financial help:{" "}
              <a href="https://www.cancer.net/navigating-cancer-care/financial-considerations/financial-resources" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://www.cancer.net/navigating-cancer-care/financial-considerations/financial-resources</a>.
            </li>
            <li>
              <strong>Paying for Cancer Treatments – Personal Loans, HSAs, and More</strong> – The Simple Dollar&apos;s{" "}
              <a href="https://www.thesimpledollar.com/financial-wellness/paying-for-cancer-treatments-personal-loans/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>Guide to Paying for Cancer Treatment</a> is a resource that outlines how to afford some of the most common cancer treatments. Our guide discusses payment options, important questions to ask, and recommendations from experienced medical professionals.
            </li>
            <li>
              <strong>Paying for Cancer Treatments</strong> – tips for managing costs:{" "}
              <a href="https://www.cdc.gov/cancer/survivors/patients/paying-for-cancer-treatment.htm" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://www.cdc.gov/cancer/survivors/patients/paying-for-cancer-treatment.htm</a>
            </li>
            <li>
              <strong>Cancer Finances</strong> – A Toolkit for Navigating Finances After Cancer:{" "}
              <a href="https://triagecancer.org/cancer-finances-financial-assistance" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://triagecancer.org/cancer-finances</a>
            </li>
            <li>
              <strong>Guide to Helping you Manage your Medical Bills</strong> – Triage Cancer and Co-Patient collaborate:{" "}
              <a href="https://triagecancer.org/cancer-medical-bills" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://triagecancer.org/cancer-medical-bills</a>
            </li>
            <li><strong>Co-Pay Relief Program</strong> – Many voluntary organizations offer some financial relief to cancer patients who cannot afford insurance coverage, co-pays, deductibles, and other associated out-of-pocket costs if eligibility requirements are met.</li>
            <li><strong>Government Programs</strong> – Check into government programs to see if you qualify. State government programs may be able to assist with medical and living expenses if eligibility requirements are met.</li>
            <li><strong>Public and Nonprofit Hospitals</strong> – Contact a social worker at a local health department for more information.</li>
            <li><strong>Patient Assistant Programs</strong> – From pharmaceutical companies that have patient assistant programs for insurance reimbursement; referrals to co-pay relief programs; medication cost reduction offers if eligibility requirements are met.</li>
            <li><strong>Voluntary Organizations</strong> – Volunteer organizations may offer assistance with childcare, transportation, or home maintenance needs. Different organizations have different types and levels of assistance with eligibility &amp; regulatory parameters.</li>
            <li><strong>Personal Financial Planning</strong> – Getting advice from a financial planner may be a valuable appointment. An accountant can help guide you on income taxes. Qualifications for tax credits can be evaluated to reduce your taxes, especially if you have significant out-of-pocket medical expenses, such as insurance deductibles. There are free and low-cost financial planning seminars as well, usually sponsored by investment management companies or even AARP.</li>
            <li><strong>Health Insurance</strong> – Your own health insurance benefit entitlements need to be carefully reviewed to best understand your policy&apos;s coverage. Your insurance company case manager can offer more personalized assistance with answering questions.</li>
            <li><strong>Your Community</strong> – Local organizations or advocacy organizations can provide assistance.</li>
            <li>
              <strong>TRIAGE CANCER</strong> – Quick Guide to Getting &amp; Paying for Prescription Drugs:{" "}
              <a href="https://triagecancer.org/QuickGuide-RxAssistance" className="text-[#7e22ce] no-underline hover:underline" {...ext}>Link</a>
            </li>
          </ul>
        </section>

        {/* Help is available - Prescription assistance */}
        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Help is available
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-[#339966]">There are various prescription-assistance programs (PAPs)</span>, including those sponsored by pharmaceutical companies, state programs, and nonprofits. They offer free or low-cost medicines for the uninsured, under insured, and those who have trouble with high co-pays.
            The benefits of such programs depend on numerous factors. Some patients may qualify for free medicines, while other programs may help reduce co-pays.
            Keep in mind that each PAP has its own rules, and all have income guidelines that can vary. Each pharmaceutical company selects the drugs that are in its program and specifies how long the patient can receive assistance.
            Various organizations and medical societies offer a list of comprehensive PAPs, including:
          </p>
          <ul className="space-y-2 list-none pl-0 text-gray-700 leading-relaxed">
            <li><a href="https://www.needymeds.org/state-programs" className="text-[#7e22ce] no-underline hover:underline" {...ext}>NeedyMeds</a></li>
            <li><a href="https://www.rxassist.org/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>RxAssist</a></li>
            <li><a href="https://copays.org/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>Patient Advocate Foundation Co-Pay Relief</a></li>
            <li>Another option to decrease medication prices is manufacturer copay cards, which help with out-of-pocket prices.</li>
            <li>
              <a href="https://www.mdlinx.com/article/helping-when-patients-can-and-8217-t-afford-their-medication/4gqshLfCTZVcxY3Zb5gT5U" className="text-[#7e22ce] no-underline hover:underline" {...ext}>
                These cards usually cover the cost of drugs that lack a generic version. There are requirements on who can receive them, and there can also be limits on how much is saved per month or year.
              </a>
            </li>
            <li>
              <a href="https://www.mdlinx.com/article/helping-when-patients-can-and-8217-t-afford-their-medication/4gqshLfCTZVcxY3Zb5gT5U" className="text-[#7e22ce] no-underline hover:underline" {...ext}>
                Sometimes, Medicare patients max out their yearly coverage of medications and enter the &quot;coverage gap.&quot; By choosing a different plan at a higher premium, this gap can be covered.
              </a>
            </li>
            <li>On a related note, Medicare and Social Security offer a plan called <a href="https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/lower-prescription-costs" className="text-[#7e22ce] no-underline hover:underline" {...ext}>Extra Help</a>, which offers discounted prices on certain generic drugs (e.g. $3.95) and brand-name drugs (e.g. $9.85) for those who qualify.</li>
            <li>What this means for you</li>
            <li>Inflation rates are unhinged, and in a post-pandemic financial reality, your patients may be feeling the pinch. Paying for the prohibitive costs of prescription drugs may be a lower priority to them, but they need them. Fortunately, there are various programs that can help. Share information about these with your patients. Be polite, private, and persistent when asking them about their ability to pay for medications.</li>
          </ul>
        </section>

        {/* Sarcoma Patient funding support */}
        <section className="rounded-xl border-2 border-[#339966]/30 bg-[#f0fdf4]/50 p-6">
          <h2 className="text-xl font-bold text-[#339966] mb-6 pb-2 border-b-2 border-[#339966]/40">
            Sarcoma Patient funding support organizations
          </h2>
          <ul className="space-y-5 list-none pl-0 text-gray-700 leading-relaxed">
            <li>
              <strong className="text-gray-900">Cynthia Holmes Foundation</strong> –{" "}
              <a href="https://curelms.webs.com/wecare" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://curelms.webs.com/wecare</a>
              {" "}– WECARE Grants for active LMS patients.
            </li>
            <li>
              <strong className="text-gray-900">Lazarex Cancer Foundation</strong> –{" "}
              <a href="https://lazarex.org/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://lazarex.org/</a>
              {" "}– Patient funding support for clinical trial participation.
            </li>
            <li>
              <strong className="text-gray-900">Sarcoma Oma</strong> –{" "}
              <a href="http://www.sarcoma-oma.org/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>http://www.sarcoma-oma.org/</a>
              {" "}– Support for travel funding for sarcoma families.
            </li>
            <li>
              <strong className="text-gray-900">Sarcoma Alliance</strong> –{" "}
              <a href="https://sarcomaalliance.org/" className="text-[#7e22ce] no-underline hover:underline" {...ext}>https://sarcomaalliance.org/</a>
              {" "}– Support for second opinion appointment expenses.
            </li>
          </ul>
          <p className="mt-6 text-gray-700 leading-relaxed border-t border-[#339966]/20 pt-4">
            Both organizations help patients defray costs for medical appointments. Please visit their respective websites for more information.
          </p>
        </section>
      </div>
    </main>
  );
}
