import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workplace Rights for Cancer Patients & Caregivers | NLMSF",
  description:
    "Guidance on cancer patients' and caregivers' workplace rights under the ADA and FMLA, including reasonable accommodations, medical leave, confidentiality, and return-to-work support.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const workplaceRights = [
  {
    title: "ADA Protection",
    body: "Cancer is considered a disability under the Americans with Disabilities Act (ADA), protecting patients from discrimination in the workplace.",
    icon: "fa-balance-scale",
  },
  {
    title: "Reasonable Accommodation",
    body: "Employers must provide reasonable accommodations, such as flexible hours or remote work options, when appropriate.",
    icon: "fa-clock",
  },
  {
    title: "Medical Leave",
    body: "The Family and Medical Leave Act (FMLA) allows eligible employees to take unpaid, job-protected leave for medical treatment and caregiving.",
    icon: "fa-calendar-alt",
  },
  {
    title: "Confidentiality",
    body: "Employers must maintain the confidentiality of an employee's medical condition and treatment.",
    icon: "fa-user-shield",
  },
  {
    title: "Return-to-Work Policies",
    body: "Clear policies should be in place for a smooth transition back to work after treatment.",
    icon: "fa-briefcase",
  },
  {
    title: "Supportive Environment",
    body: "Employers should provide and promote a workplace culture that supports employees with cancer through awareness and resources.",
    icon: "fa-hands-helping",
  },
];

const resources = [
  {
    title: "Cancer in the Workplace and the ADA",
    source: "U.S. Equal Employment Opportunity Commission",
    href: "https://www.eeoc.gov/laws/guidance/cancer-workplace-and-ada",
  },
  {
    title: "Workplace Protections for Individuals Impacted by Cancer",
    source: "U.S. Department of Labor",
    href: "https://www.dol.gov/agencies/whd/fmla/workplace-protections-for-individuals-cancer",
  },
  {
    title: "Am I Eligible for FMLA Leave?",
    source: "U.S. Department of Labor",
    href: "https://www.dol.gov/agencies/whd/fmla/am-i-eligible-FMLA-leave",
  },
  {
    title: "Cancer at Work: Patient and Caregiver Rights",
    source: "Kidney Cancer Association (PDF guide)",
    href: "https://www.kidneycancer.org/wp-content/uploads/2025/01/KCAGuide_Rights_at_Work.pdf",
  },
  {
    title: "ADA Rights — Cancer Patients Guide",
    source: "National Pancreatic Cancer Foundation",
    description:
      "Helpful guidance from the National Pancreatic Cancer Foundation for all cancer patients.",
    href: "https://www.npcf.us/ada-rights-cancer-patients-guide/",
  },
  {
    title: "What to Know About Taking Time Off Work",
    source: "Triage Cancer Webinar",
    description:
      "Explains key laws related to taking time off work, including FMLA, the ADA, and state and local leave laws.",
    href: "https://triagehealth.org/webinars/taking-time-off-work/",
  },
];

export default function WorkrightsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9ff] via-[#eef2ff] to-[#f5f3ff]">
      <section className="bg-gradient-to-r from-[#4338ca] to-[#7e22ce] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <Image
                src="/images/workrights-logo.png"
                alt="Cancer Patients/Caregivers Workplace Rights"
                width={220}
                height={220}
                className="w-44 h-44 sm:w-52 sm:h-52 object-contain"
                priority
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            <i className="fas fa-briefcase text-xs" aria-hidden />
            <span>Patient &amp; Caregiver Support</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold leading-tight mb-4">
            Cancer Patients&apos; Rights / Caregiver Rights in the Workplace
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Understanding your protections under the ADA, FMLA, and related workplace laws
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
            Key Workplace Protections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workplaceRights.map(({ title, body, icon }) => (
              <article
                key={title}
                className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 h-full"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4338ca] text-white">
                    <i className={`fas ${icon} text-sm`} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 m-0 mb-2">{title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed m-0">{body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-indigo-100 bg-gradient-to-r from-[#4338ca]/5 to-[#7e22ce]/5">
            <h2 className="text-xl font-bold text-slate-900 m-0">Trusted Resources</h2>
            <p className="text-slate-600 text-sm mt-2 mb-0">
              Federal guidance, patient rights guides, and educational materials
            </p>
          </div>
          <div className="p-8 md:p-10 space-y-4">
            {resources.map(({ title, source, href, description }) => (
              <article
                key={href}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30"
              >
                <h3 className="text-base font-bold text-slate-900 m-0">{title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#4338ca] mt-1 mb-2">
                  {source}
                </p>
                {description && (
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{description}</p>
                )}
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4338ca] hover:text-[#7e22ce] hover:underline"
                  {...ext}
                >
                  <i className="fas fa-external-link-alt text-xs" aria-hidden />
                  View resource
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/health-insurance-deep-dive"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow transition"
          >
            <i className="fas fa-shield-alt text-xs" aria-hidden />
            Social Security &amp; Disability Benefits
          </Link>
          <Link
            href="/caregivers-corner"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow transition"
          >
            <i className="fas fa-heart text-rose-500 text-xs" aria-hidden />
            Caregivers Corner
          </Link>
        </div>
      </div>
    </main>
  );
}
