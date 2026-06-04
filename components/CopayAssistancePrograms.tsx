const COPAY_PROGRAMS = [
  {
    name: "CancerCare® Co-Payment Assistance Foundation",
    href: "https://www.cancercare.org/copayfoundation",
    phone: "866-55-COPAY (26729)",
    tel: "8665526729",
    icon: "fa-hand-holding-heart",
    accent: "from-rose-500 to-pink-600",
    description:
      "Co-payment assistance for insured cancer patients who need help covering treatment-related medication and care costs.",
  },
  {
    name: "Good Days",
    href: "https://mygooddays.org/",
    phone: "877-968-7233",
    tel: "8779687233",
    icon: "fa-sun",
    accent: "from-amber-500 to-orange-500",
    description:
      "National nonprofit assistance for patients facing the financial burden of chronic and life-altering illness.",
  },
  {
    name: "HealthWell Foundation",
    href: "https://www.healthwellfoundation.org/",
    phone: "800-675-8416",
    tel: "8006758416",
    icon: "fa-heartbeat",
    accent: "from-emerald-500 to-teal-600",
    description:
      "When health insurance is not enough — help with copays, premiums, deductibles, and other out-of-pocket treatment costs.",
  },
  {
    name: "National Organization for Rare Disorders (NORD)",
    href: "https://rarediseases.org/",
    phone: "800-999-6673",
    tel: "8009996673",
    icon: "fa-dna",
    accent: "from-violet-500 to-purple-600",
    description:
      "Resources and patient assistance programs for people and families affected by rare diseases.",
  },
  {
    name: "Patient Access Network Foundation",
    href: "https://www.panfoundation.org/",
    phone: "866-316-7263",
    tel: "8663167263",
    icon: "fa-users",
    accent: "from-blue-500 to-indigo-600",
    description:
      "Copay and premium grants to help patients afford prescribed treatments, medications, and related costs.",
  },
  {
    name: "Patient Advocate Foundation Co-Pay Relief Program",
    href: "https://copays.org/",
    phone: "866-512-3861",
    tel: "8665123861",
    icon: "fa-file-invoice-dollar",
    accent: "from-cyan-500 to-sky-600",
    description:
      "Co-pay relief for insured patients who need help with out-of-pocket prescription and treatment expenses.",
  },
] as const;

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

type CopayAssistanceProgramsProps = {
  id?: string;
  className?: string;
  /** Purple gradient header on the staged page variant */
  variant?: "default" | "staged";
};

export default function CopayAssistancePrograms({
  id = "copay-assistance",
  className = "",
  variant = "default",
}: CopayAssistanceProgramsProps) {
  const isStaged = variant === "staged";
  const accentText = isStaged ? "text-[#7e22ce]" : "text-[#6c63ff]";
  const accentBg = isStaged ? "bg-[#7e22ce]" : "bg-[#6c63ff]";
  const accentBorder = isStaged ? "border-[#7e22ce]/20" : "border-[#6c63ff]/20";
  const accentHover = isStaged ? "hover:bg-[#6d21a8]" : "hover:bg-[#5b54e8]";

  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div
        className={`overflow-hidden rounded-xl border shadow-sm ${
          isStaged ? "border-[#7e22ce]/15 bg-white" : "border-gray-100 bg-white"
        }`}
      >
        <div
          className={`px-6 py-5 ${
            isStaged
              ? "border-b border-[#7e22ce]/10 bg-gradient-to-r from-[#faf5ff] to-[#eef2ff]"
              : "border-b border-gray-100 bg-gradient-to-r from-[#f5f3ff] via-[#eef2ff] to-[#f0fdfa]"
          }`}
        >
          <div className="flex flex-wrap items-start gap-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${accentBg}`}
            >
              <i className="fas fa-hand-holding-usd text-lg" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-gray-900 m-0">
                Co-Payment Assistance Programs
              </h2>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-3xl">
                These national foundations may help with insurance copays, premiums, and other
                out-of-pocket treatment costs. Eligibility and fund availability vary — contact
                each program directly or visit their website to apply.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          {COPAY_PROGRAMS.map((program) => (
            <article
              key={program.href}
              className={`group flex h-full flex-col rounded-xl border ${accentBorder} bg-gray-50/50 p-5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md`}
            >
              <div className="mb-4 flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${program.accent} text-white shadow-sm`}
                >
                  <i className={`fas ${program.icon} text-sm`} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-gray-900 leading-snug m-0">
                    {program.name}
                  </h3>
                </div>
              </div>

              <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed m-0">
                {program.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-200/80">
                <a
                  href={`tel:${program.tel}`}
                  className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold ${accentText} no-underline ring-1 ring-inset ring-gray-200 transition-colors hover:ring-gray-300`}
                >
                  <i className="fas fa-phone-alt text-xs opacity-80" aria-hidden />
                  {program.phone}
                </a>
                <a
                  href={program.href}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-white no-underline transition-colors ${accentBg} ${accentHover}`}
                  {...ext}
                >
                  Visit website
                  <i className="fas fa-external-link-alt text-[0.65rem] opacity-90" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
