import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Assistance | NLMSF",
  description:
    "Navigating the financial challenges of cancer treatment. Find resources, grants, and support programs for LMS patients and families.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const CFAC_ORGS = [
  { name: "American Cancer Society", href: "https://www.cancer.org/", icon: "fa-hospital" },
  { name: "CancerCare", href: "https://www.cancercare.org/financial", icon: "fa-hands-helping" },
  { name: "CancerCare Co-Payment Assistance Foundation", href: "https://www.cancercare.org/copayfoundation", icon: "fa-file-medical-alt" },
  { name: "Cancer Financial Assistance Coalition", href: "http://www.cancerfac.org/", icon: "fa-hand-holding-usd" },
  { name: "Dream Foundation", href: "https://www.dreamfoundation.org/", icon: "fa-star" },
  { name: "HealthWell Foundation", href: "https://www.healthwellfoundation.org/", icon: "fa-heartbeat" },
  { name: "National Organization for Rare Disease", href: "https://rarediseases.org/", icon: "fa-stethoscope" },
  { name: "NCCN Virtual Reimbursement Resource Room", href: "https://www.nccn.org/business-policy/business/virtual-reimbursement-resource-room-and-app", icon: "fa-laptop-medical" },
  { name: "Patient Access Network Foundation", href: "https://panfoundation.org/index.php/en/", icon: "fa-users" },
  { name: "Patient Services Incorporated", href: "https://www.patientservicesinc.org/", icon: "fa-user-md" },
  { name: "Triage Cancer", href: "https://triagecancer.org/cancer-finances-financial-assistance", icon: "fa-balance-scale" },
];

export default function FinancialAssistance2Page() {
  return (
    <main>
      {/* Hero */}
      <section className="rounded-lg bg-gray-100 px-5 py-10 text-center shadow-sm mb-8 max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#6c63ff] px-4 py-2 text-white text-sm font-medium mb-4">
          <i className="fas fa-hand-holding-usd" aria-hidden />
          <span>Patient &amp; Family Support</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-5 md:text-[2.5rem]">
          Financial Assistance
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700">
            <i className="fas fa-donate text-[#6c63ff]" aria-hidden />
            <span>Grants &amp; Funding</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700">
            <i className="fas fa-file-invoice-dollar text-[#6c63ff]" aria-hidden />
            <span>Insurance Support</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700">
            <i className="fas fa-hands-helping text-[#6c63ff]" aria-hidden />
            <span>Patient Programs</span>
          </span>
        </div>
        <p className="text-gray-600 text-base md:text-[1.1rem] max-w-[800px] mx-auto leading-relaxed">
          Navigating the financial challenges of cancer treatment can be overwhelming.
          Find resources and support programs designed to help LMS patients and their families.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b-2 border-gray-200">
              On This Page
            </h3>
            <nav className="space-y-1 mb-6" aria-label="Page sections">
              <a href="#introduction" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 no-underline transition-colors hover:bg-gray-100 hover:text-[#6a3ea1]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6a3ea1]" aria-hidden />
                <span>Introduction</span>
              </a>
              <a href="#cfac-organizations" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 no-underline transition-colors hover:bg-gray-100 hover:text-[#6a3ea1]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#4a90e2]" aria-hidden />
                <span>CFAC Organizations</span>
              </a>
              <a href="#helpful-resources" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 no-underline transition-colors hover:bg-gray-100 hover:text-[#6a3ea1]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#06b6d4]" aria-hidden />
                <span>Helpful Resources</span>
              </a>
              <a href="#prescription-assistance" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 no-underline transition-colors hover:bg-gray-100 hover:text-[#6a3ea1]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#10b981]" aria-hidden />
                <span>Prescription Assistance</span>
              </a>
              <a href="#sarcoma-funding" className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 no-underline transition-colors hover:bg-gray-100 hover:text-[#6a3ea1]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#f59e0b]" aria-hidden />
                <span>Sarcoma Funding</span>
              </a>
            </nav>
            <Link href="/" className="flex items-center gap-3 rounded-lg bg-gray-200 px-4 py-3 font-semibold text-gray-800 no-underline transition-colors hover:bg-gray-300">
              <i className="fas fa-arrow-left text-[#6a3ea1]" aria-hidden />
              <span>Back to Home</span>
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0 space-y-10 pb-12">
          {/* Community resources */}
          <section className="rounded-lg border-l-4 border-[#e91e63] bg-gray-100 p-6">
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              We&apos;re offering all the information we have about financial assistance on this page, but you can also join our communities and subscribe to our newsletter and bi-weekly snapshots (delivered the same way) to stay up to date and get immediate support outside of our webpage resources.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#e91e63] text-white text-xs">
                    <i className="fab fa-facebook" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800">Facebook Groups</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 border-l-2 border-[#3b5998]">
                    <h4 className="text-xs font-semibold text-gray-800">NLMSF Support Group</h4>
                    <a href="https://www.facebook.com/groups/leiomyosarcomasupportgroup" className="rounded bg-[#3b5998] px-2 py-1 text-[0.7rem] font-medium text-white no-underline hover:bg-[#2d4373]" {...ext}>Join</a>
                  </div>
                  <div className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 border-l-2 border-[#3b5998]">
                    <h4 className="text-xs font-semibold text-gray-800">Stand Up to LMS</h4>
                    <a href="https://www.facebook.com/groups/cancerleiomyosarcoma" className="rounded bg-[#3b5998] px-2 py-1 text-[0.7rem] font-medium text-white no-underline hover:bg-[#2d4373]" {...ext}>Join</a>
                  </div>
                  <div className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 border-l-2 border-[#3b5998]">
                    <h4 className="text-xs font-semibold text-gray-800">Cancer Sucks - LMS</h4>
                    <a href="https://www.facebook.com/groups/573285557042465/" className="rounded bg-[#3b5998] px-2 py-1 text-[0.7rem] font-medium text-white no-underline hover:bg-[#2d4373]" {...ext}>Join</a>
                  </div>
                </div>
              </div>
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#e91e63] text-white text-xs">
                    <i className="fas fa-envelope" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800">Newsletter &amp; Snapshots</h3>
                </div>
                <form action="/api/send-email" method="POST" className="space-y-2">
                  <input type="text" name="name" placeholder="Name" required className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#e91e63] focus:outline-none focus:ring-1 focus:ring-[#e91e63]" />
                  <input type="email" name="email" placeholder="Email" required className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#e91e63] focus:outline-none focus:ring-1 focus:ring-[#e91e63]" />
                  <button type="submit" className="mt-2 w-full rounded bg-[#e91e63] px-3 py-2 text-sm font-medium text-white hover:bg-[#c2185b]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <div className="rounded-lg border-l-4 border-[#4285f4] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cancer Financial Assistance Coalition</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The <strong>Cancer Financial Assistance Coalition</strong> (CFAC) is a consortium of organizations that help patients manage financial challenges that can emerge as a result of a cancer diagnosis.
              </p>
              <div className="flex flex-col gap-4 rounded-lg bg-gray-50 p-5 my-5 md:flex-row md:items-center">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/02/DollarsignGuy.jpg"
                  alt="Financial Assistance"
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                  width={240}
                  height={240}
                />
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">Free Grants to help Patients</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A list of resource organizations that offer funding support to patients:{" "}
                    <a href="https://cancercarenews.com/more-cancer-freebies/grants/" className="text-[#6c63ff] font-medium no-underline hover:underline" {...ext}>https://cancercarenews.com/more-cancer-freebies/grants/</a>
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Grants are money and goods that do not have to be paid back and are provided by the agencies below to help ease the burden of a cancer diagnosis. Grants typically range from $200 to $5000. Please review each program&apos;s link for specific eligibility, the application process, and deadlines.
              </p>
            </div>
          </section>

          {/* CFAC Organizations */}
          <section id="cfac-organizations" className="scroll-mt-24">
            <div className="mb-5 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">CFAC Coalition Organizations</h2>
              <p className="text-gray-600 text-sm mt-1">Organizations that help patients with financial support:</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CFAC_ORGS.map((org) => (
                <div key={org.name} className="rounded-lg bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md border border-gray-100">
                  <i className={`fas ${org.icon} text-2xl text-[#6c63ff] mb-3 block`} aria-hidden />
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 leading-snug">{org.name}</h4>
                  <a href={org.href} className="inline-block rounded px-3 py-1.5 text-sm font-semibold text-[#6c63ff] no-underline hover:bg-gray-100" {...ext}>Visit Website</a>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Resources */}
          <section id="additional-resources" className="scroll-mt-24">
            <div className="rounded-lg border-l-4 border-[#a142f4] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Financial Support Resources</h3>
              <div className="space-y-5">
                <div className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    <a href="https://familyreach.org/blog/6-free-financial-resources-for-cancer-patients-and-caregivers/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>6 Free Financial Resources for Cancer Patients and Caregivers – Family Reach</a>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Curated free tools and programs to help patients and caregivers navigate medical costs, budgeting, employment, and day-to-day financial challenges during treatment.</p>
                </div>
                <div className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    <a href="https://cancercarenews.com/free-financial-help-for-cancer-patients/mortgage-utilities-legal-taxes/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Free Mortgage, Utility &amp; Legal Help For Cancer Patients</a>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The last thing a cancer patient needs is the added stress that comes with the financial burdens related to cancer care. These governmental and nonprofit agencies help cancer patients and families struggling with a broad range of financial issues. All assistance is free of charge and available nationwide to cancer patients and families in the USA.</p>
                </div>
                <div className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    <a href="https://cancerjourneysfoundation.org/survivor-resources/financial-resources-for-cancer-patients/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Financial Support for Cancer Patients and Survivors</a>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The National GRACE Foundation provides FREE college admissions and financial aid counseling to pediatric cancer patients and survivors. Nicki Leach Foundation, 904-304-8531 Lifestyle scholarships and financial assistance for adolescent and young adult cancer survivor students that provide for everyday expenses like car payments, clothing and more.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">
                    <a href="https://www.cancercare.org/financial_assistance" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Financial &amp; Co-Payment Assistance for Cancer Patients</a>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Offering limited financial assistance for cancer-related costs and co-pays, and our professional oncology social workers can help you find additional resources. Financial Assistance Program Helps with treatment-related costs, such as transportation, home care and child care.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Helpful Resources */}
          <section id="helpful-resources" className="scroll-mt-24">
            <div className="mb-5 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Helpful Resources</h2>
              <p className="text-gray-600 text-sm mt-1">Additional resources to help navigate financial challenges:</p>
            </div>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed list-none pl-0">
              <li><strong className="text-gray-800">Cancer Finances</strong> – A Toolkit for Navigating Finances After Cancer <a href="https://triagecancer.org/cancer-finances-financial-assistance" className="text-[#6c63ff] no-underline hover:underline" {...ext}>https://triagecancer.org/cancer-finances</a></li>
              <li><strong className="text-gray-800">Guide to Helping you Manage your Medical Bills</strong><br />Triage Cancer and Co-Patient collaborate<br /><a href="https://triagecancer.org/cancer-medical-bills" className="text-[#6c63ff] no-underline hover:underline" {...ext}>https://triagecancer.org/cancer-medical-bills</a></li>
              <li><strong className="text-gray-800">Patient Guide</strong> – Read Cancer.net&apos;s patient guide to financial help: <a href="https://www.cancer.net/navigating-cancer-care/financial-considerations/financial-resources" className="text-[#6c63ff] no-underline hover:underline" {...ext}>https://www.cancer.net/navigating-cancer-care/financial-considerations/financial-resources</a>.</li>
              <li><strong className="text-gray-800">Paying for Cancer Treatments – Personal Loans, HSAs, and More</strong> – The Simple Dollar&apos;s &quot;<a href="https://www.thesimpledollar.com/financial-wellness/paying-for-cancer-treatments-personal-loans/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Guide to Paying for Cancer Treatment</a>&quot; is a resource that outlines how to afford some of the most common cancer treatments.</li>
              <li><strong className="text-gray-800">Paying for Cancer Treatments</strong> – tips for managing costs<br /><a href="https://www.cdc.gov/cancer/survivors/patients/paying-for-cancer-treatment.htm" className="text-[#6c63ff] no-underline hover:underline" {...ext}>https://www.cdc.gov/cancer/survivors/patients/paying-for-cancer-treatment.htm</a></li>
              <li><a href="https://www.everydayhealth.com/cancer/spotlight-on-family-reach/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Spotlight on Family Reach (Everyday Health)</a></li>
              <li><a href="https://www.nccn.org/business-policy/business/virtual-reimbursement-resource-room-and-app" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Virtual Reimbursement Resource Room and App</a></li>
              <li><strong className="text-gray-800">Co-Pay Relief Program</strong> – Many voluntary organizations offer some financial relief to cancer patients who cannot afford insurance coverage, co-pays, deductibles, and other associated out-of-pocket costs if eligibility requirements are met.</li>
              <li><strong className="text-gray-800">Government Programs</strong> – Check into government programs to see if you qualify. State government programs may be able to assist with medical and living expenses if eligibility requirements are met.</li>
              <li><strong className="text-gray-800">Public and Nonprofit Hospitals</strong> – Contact a social worker at a local health department for more information.</li>
              <li><strong className="text-gray-800">Patient Assistant Programs</strong> – from pharmaceutical companies that have patient assistant programs for insurance reimbursement; referrals to co-pay relief programs; medication cost reduction offers if eligibility requirements are met.</li>
              <li><strong className="text-gray-800">Voluntary Organizations</strong> – Volunteer organizations may offer assistance with childcare, transportation, or home maintenance needs. Different organizations have different types and levels of assistance with eligibility &amp; regulatory parameters.</li>
              <li><strong className="text-gray-800">Personal Financial Planning</strong> – Getting advice from a financial planner may be a valuable appointment. An accountant can help guide you on income taxes.</li>
              <li><strong className="text-gray-800">Health Insurance</strong> – Your own health insurance benefit entitlements need to be carefully reviewed to best understand your policy&apos;s coverage.</li>
              <li><strong className="text-gray-800">Your Community</strong> – Local organizations or advocacy organizations can provide assistance.</li>
              <li><strong className="text-gray-800">TRIAGE CANCER</strong> – helpful information: Quick Guide to Getting &amp; Paying for Prescription Drugs (<a href="https://triagecancer.org/QuickGuide-RxAssistance" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Link</a>)</li>
            </ul>
          </section>

          {/* Prescription Assistance */}
          <section id="prescription-assistance" className="scroll-mt-24">
            <div className="rounded-lg border-l-4 border-[#0f9d58] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Prescription Assistance Programs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Help is available</strong><br />
                <span className="font-medium text-[#0f9d58]">There are various prescription-assistance programs (PAPs)</span>, including those sponsored by pharmaceutical companies, state programs, and nonprofits. They offer free or low-cost medicines for the uninsured, under insured, and those who have trouble with high co-pays.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The benefits of such programs depend on numerous factors. Some patients may qualify for free medicines, while other programs may help reduce co-pays. Keep in mind that each PAP has its own rules, and all have income guidelines that can vary. Each pharmaceutical company selects the drugs that are in its program and specifies how long the patient can receive assistance.
              </p>
              <p className="text-gray-600 text-sm mb-3">Various organizations and medical societies offer a list of comprehensive PAPs, including:</p>
              <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
                <li><a href="https://www.needymeds.org/state-programs" className="text-[#6c63ff] no-underline hover:underline" {...ext}>NeedyMeds</a></li>
                <li><a href="https://www.rxassist.org/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>RxAssist</a></li>
                <li><a href="https://copays.org/" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Patient Advocate Foundation Co-Pay Relief</a></li>
                <li>Another option to decrease medication prices is manufacturer copay cards, which help with out-of-pocket prices.</li>
                <li>These cards usually cover the cost of drugs that lack a generic version. There are requirements on who can receive them, and there can also be limits on how much is saved per month or year.</li>
                <li>Sometimes, Medicare patients max out their yearly coverage of medications and enter the &quot;coverage gap.&quot; By choosing a different plan at a higher premium, this gap can be covered.</li>
                <li>On a related note, Medicare and Social Security offer a plan called <a href="https://www.medicare.gov/your-medicare-costs/get-help-paying-costs/lower-prescription-costs" className="text-[#6c63ff] no-underline hover:underline" {...ext}>Extra Help</a>, which offers discounted prices on certain generic drugs (e.g. $3.95) and brand-name drugs (e.g. $9.85) for those who qualify.</li>
              </ul>
            </div>
          </section>

          {/* Sarcoma Funding */}
          <section id="sarcoma-funding" className="scroll-mt-24">
            <div className="mb-5 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Sarcoma Patient Funding Support Organizations</h2>
              <p className="text-gray-600 text-sm mt-1">Organizations specifically focused on helping sarcoma patients:</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border-t-4 border-[#ff6b6b] bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <i className="fas fa-heart text-2xl text-[#6c63ff] mb-3 block" aria-hidden />
                <h4 className="text-base font-semibold text-gray-800 mb-2">Cynthia Holmes Foundation</h4>
                <p className="text-gray-600 text-sm mb-3">WECARE Grants for active LMS patients</p>
                <a href="https://curelms.webs.com/wecare" className="inline-block rounded px-3 py-1.5 text-sm font-semibold text-[#6c63ff] no-underline hover:bg-gray-100" {...ext}>Visit Website</a>
              </div>
              <div className="rounded-lg border-t-4 border-[#ff6b6b] bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <i className="fas fa-plane text-2xl text-[#6c63ff] mb-3 block" aria-hidden />
                <h4 className="text-base font-semibold text-gray-800 mb-2">Sarcoma Oma</h4>
                <p className="text-gray-600 text-sm mb-3">Support for travel funding for sarcoma families</p>
                <a href="http://www.sarcoma-oma.org/" className="inline-block rounded px-3 py-1.5 text-sm font-semibold text-[#6c63ff] no-underline hover:bg-gray-100" {...ext}>Visit Website</a>
              </div>
            </div>
            <p className="mt-5 rounded-lg bg-gray-50 px-4 py-3 italic text-gray-600 text-sm">
              Both organizations help patients defray costs for medical appointments. Please visit their respective websites for more information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
