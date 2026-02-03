import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accountability Reports | NLMSF",
  description:
    "Annual accountability reports on our mission, impact, and financial stewardship. Research funding, grant awards, patient support, and community impact.",
};

export default function AccountabilityReportsHubPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section
        className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-[10%] top-[20%] h-20 w-20 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "-1s" }}
          />
          <div
            className="absolute right-[15%] top-[60%] h-[120px] w-[120px] rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "-3s" }}
          />
          <div
            className="absolute bottom-[20%] left-[70%] h-[60px] w-[60px] rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "-5s" }}
          />
        </div>
        <div className="relative z-10 max-w-[800px] px-5">
          <div className="mb-6 inline-flex items-center gap-2 rounded-[50px] bg-white/20 px-4 py-2 backdrop-blur-[10px]">
            <i className="fas fa-chart-line text-teal-300" aria-hidden />
            <span>Transparency & Accountability</span>
          </div>
          <h1
            className="mb-5 text-4xl font-bold md:text-[3.5rem]"
            style={{
              background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NLMSF Accountability Reports
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-sm bg-gradient-to-r from-teal-400 to-teal-600" />
          <h2 className="mb-8 text-xl font-light text-white/90 md:text-2xl">
            Annual Reports on Our Mission, Impact & Financial Stewardship
          </h2>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {["Research Funding", "Grant Awards", "Patient Support", "Community Impact"].map((tag) => (
              <span
                key={tag}
                className="rounded-[20px] bg-white/20 px-4 py-1.5 text-sm backdrop-blur-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-white/90">
            Explore our comprehensive annual accountability reports that detail our research funding
            commitments, grant awards, patient support initiatives, and community impact. Each report
            provides transparent insights into how we&apos;re advancing leiomyosarcoma (LMS) research and
            supporting patients and their families.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-10 items-start px-5 py-10 md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-5 max-md:static">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="mb-5 border-b-2 border-gray-200 pb-3 text-center text-xl font-bold text-gray-800">
                Page Navigation
              </h3>
              <ul className="list-none space-y-2 p-0 m-0">
                {[
                  { href: "#introduction", icon: "fa-info-circle", label: "Our Commitment" },
                  { href: "#annual-reports", icon: "fa-file-alt", label: "Annual Reports" },
                  { href: "#key-metrics", icon: "fa-chart-bar", label: "Key Metrics" },
                  { href: "#contact-transparency", icon: "fa-envelope", label: "Contact Us" },
                  {
                    href: "#denver-transparency",
                    icon: "fa-map-marker-alt",
                    label: "Denver Community Impact",
                    highlight: true,
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-600 no-underline transition-all duration-200 hover:translate-x-1 hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-600 hover:text-white ${
                        item.highlight
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700"
                          : ""
                      }`}
                    >
                      <i className={`fas ${item.icon} w-4 text-center`} aria-hidden />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-lg font-semibold text-gray-800">Quick Access</h4>
              <div className="flex flex-col gap-3">
                <Link
                  href="/accountability-reports/"
                  className="flex items-center gap-3 rounded-lg border border-teal-500 bg-gradient-to-br from-teal-50 to-green-50 p-3 no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white">
                    <i className="fas fa-star text-sm" aria-hidden />
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-800">2024 Report</strong>
                    <span className="text-xs text-gray-500">Latest Annual Report</span>
                  </div>
                </Link>
                <a
                  href="/accountability-reports/2024/summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white">
                    <i className="fas fa-download text-sm" aria-hidden />
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-800">Download PDF</strong>
                    <span className="text-xs text-gray-500">2024 Summary</span>
                  </div>
                </a>
                <Link
                  href="/financial-statements/"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white">
                    <i className="fas fa-calculator text-sm" aria-hidden />
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-800">Financial Statements</strong>
                    <span className="text-xs text-gray-500">Detailed Financials</span>
                  </div>
                </Link>
                <Link
                  href="/2023-accountability-report/"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 no-underline transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white">
                    <i className="fas fa-file-alt text-sm" aria-hidden />
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-800">2023 Report</strong>
                    <span className="text-xs text-gray-500">Previous Annual Report</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mb-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 text-center text-white">
              <h4 className="mb-2 text-lg font-semibold">Stay Informed</h4>
              <p className="mb-4 text-sm opacity-90">
                Get notified when new accountability reports are published.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://nlmsf.org/newsletter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white/20 px-4 py-2.5 font-semibold text-white no-underline backdrop-blur-[10px] transition hover:bg-white/30"
                >
                  <i className="fas fa-envelope" aria-hidden /> Subscribe to Updates
                </a>
                <a
                  href="https://nlmsf.org/transparency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-4 py-2.5 font-semibold text-white no-underline transition hover:bg-white/10"
                >
                  <i className="fas fa-eye" aria-hidden /> Transparency Portal
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="mb-2 text-lg font-semibold text-gray-800">Questions?</h4>
              <p className="mb-4 text-sm text-gray-600">
                Contact our transparency team for detailed information about our reports.
              </p>
              <div className="mb-2 flex items-center gap-2">
                <i className="fas fa-phone w-4 text-violet-500" aria-hidden />
                <strong className="text-gray-800">303-808-3437</strong>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope w-4 text-violet-500" aria-hidden />
                <a
                  href="mailto:transparency@nlmsf.org"
                  className="text-violet-600 no-underline hover:underline"
                >
                  transparency@nlmsf.org
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 space-y-20">
          {/* Introduction */}
          <section
            id="introduction"
            className="overflow-hidden rounded-2xl bg-white shadow-lg scroll-mt-8"
          >
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(45deg, #667eea, #764ba2)" }}
            />
            <div className="p-10">
              <h2
                className="mb-4 text-center text-3xl font-bold"
                style={{
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Our Commitment to Transparency
              </h2>
              <p className="mb-10 text-center text-lg text-gray-600">
                The National Leiomyosarcoma Foundation is committed to full transparency in our
                operations, funding decisions, and impact measurement.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "fa-search-dollar",
                    title: "Financial Transparency",
                    text: "Detailed breakdowns of our funding allocations, research investments, and operational expenses.",
                  },
                  {
                    icon: "fa-microscope",
                    title: "Research Impact",
                    text: "Comprehensive reporting on funded research projects, outcomes, and scientific breakthroughs.",
                  },
                  {
                    icon: "fa-users",
                    title: "Community Support",
                    text: "Detailed accounts of patient support programs, educational initiatives, and community outreach efforts.",
                  },
                  {
                    icon: "fa-handshake",
                    title: "Partnership Impact",
                    text: "Reports on collaborations with healthcare institutions, research organizations, and community partners.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 text-center transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white"
                      style={{ background: "linear-gradient(45deg, #667eea, #764ba2)" }}
                    >
                      <i className={`fas ${card.icon}`} aria-hidden />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Annual Reports */}
          <section
            id="annual-reports"
            className="overflow-hidden rounded-2xl bg-white shadow-lg scroll-mt-8"
          >
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(45deg, #38b2ac, #4fd1c7)" }}
            />
            <div className="p-10">
              <h2
                className="mb-4 text-center text-3xl font-bold"
                style={{
                  background: "linear-gradient(45deg, #38b2ac, #4fd1c7)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Annual Accountability Reports
              </h2>
              <p className="mb-10 text-center text-lg text-gray-600">
                Access our comprehensive annual reports documenting our progress, achievements, and
                financial stewardship.
              </p>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {/* 2024 */}
                <div className="overflow-hidden rounded-2xl border-2 border-teal-500 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="flex items-center justify-between px-6 py-5 text-white"
                    style={{ background: "linear-gradient(45deg, #38b2ac, #4fd1c7)" }}
                  >
                    <span className="text-2xl font-bold">2024</span>
                    <span className="rounded-[20px] bg-white/20 px-3 py-1 text-xs font-semibold">
                      Latest Report
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      2024 Accountability Report
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Our comprehensive 25th anniversary report detailing research funding, grant
                      awards, repurposed drug initiatives, and expanded international collaborations.
                    </p>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: "fa-microscope", label: "4 Research Awardees" },
                        { icon: "fa-users", label: "60+ Roundtable Researchers" },
                        { icon: "fa-pills", label: "Repurposed Drug Initiative" },
                        { icon: "fa-globe", label: "International Collaborations" },
                      ].map((h) => (
                        <div
                          key={h.label}
                          className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700"
                        >
                          <i className={`fas ${h.icon}`} aria-hidden />
                          <span>{h.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-gray-50 p-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">4</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          Current Research Grants
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">60+</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          Roundtable Attendees
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">25th</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          Anniversary Year
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/accountability-reports/"
                        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white no-underline transition hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(45deg, #38b2ac, #4fd1c7)" }}
                      >
                        <i className="fas fa-file-alt" aria-hidden /> View Full Report
                      </Link>
                      <a
                        href="/accountability-reports/2024/summary.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-500 bg-transparent px-6 py-3 font-semibold text-teal-600 no-underline transition hover:bg-teal-500 hover:text-white"
                      >
                        <i className="fas fa-download" aria-hidden /> Download PDF
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2023 */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="flex items-center justify-between px-6 py-5 text-white"
                    style={{ background: "linear-gradient(45deg, #38b2ac, #4fd1c7)" }}
                  >
                    <span className="text-2xl font-bold">2023</span>
                    <span className="rounded-[20px] bg-white/20 px-3 py-1 text-xs font-semibold">
                      Previous Report
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      2023 Accountability Report
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Our annual report highlighting achievements in leiomyosarcoma research, patient
                      support programs, and community advocacy initiatives.
                    </p>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        { icon: "fa-microscope", label: "2 Research Awardees" },
                        { icon: "fa-handshake", label: "SPORE LMS Project" },
                        { icon: "fa-user-md", label: "MD Anderson Collaboration" },
                        { icon: "fa-users", label: "23 Years of Service" },
                      ].map((h) => (
                        <div
                          key={h.label}
                          className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700"
                        >
                          <i className={`fas ${h.icon}`} aria-hidden />
                          <span>{h.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-gray-50 p-5">
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">2</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          New Research Grants
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">5</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          Patient Support Programs
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-teal-600">23rd</div>
                        <div className="text-xs font-semibold uppercase text-gray-500">
                          Anniversary Year
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/2023-accountability-report/"
                        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white no-underline transition hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(45deg, #38b2ac, #4fd1c7)" }}
                      >
                        <i className="fas fa-file-alt" aria-hidden /> View Full Report
                      </Link>
                      <a
                        href="/accountability-reports/2023/summary.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-500 bg-transparent px-6 py-3 font-semibold text-teal-600 no-underline transition hover:bg-teal-500 hover:text-white"
                      >
                        <i className="fas fa-download" aria-hidden /> Download PDF
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2025 Coming Soon */}
                <div className="overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white opacity-90">
                  <div className="flex items-center justify-between bg-gradient-to-br from-gray-400 to-gray-300 px-6 py-5 text-white">
                    <span className="text-2xl font-bold">2025</span>
                    <span className="rounded-[20px] bg-white/30 px-3 py-1 text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      2025 Accountability Report
                    </h3>
                    <p className="mb-6 text-gray-600">
                      Our upcoming report will detail continued progress in research funding, expanded
                      patient support programs, and new partnership initiatives.
                    </p>
                    <div className="mb-6 py-10 text-center text-gray-500">
                      <i className="fas fa-calendar-alt mb-3 block text-3xl" aria-hidden />
                      <p>Expected Publication: Q1 2026</p>
                    </div>
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-400"
                    >
                      <i className="fas fa-clock" aria-hidden /> Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section
            id="key-metrics"
            className="overflow-hidden rounded-2xl bg-white shadow-lg scroll-mt-8"
          >
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(45deg, #ed64a6, #9f7aea)" }}
            />
            <div className="p-10">
              <h2
                className="mb-10 text-center text-3xl font-bold"
                style={{
                  background: "linear-gradient(45deg, #ed64a6, #9f7aea)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                2024 Foundation Impact
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "fa-microscope",
                    number: "4",
                    label: "Active Research Grants",
                    period: "Current awardees (2023-2026)",
                    gradient: "linear-gradient(45deg, #667eea, #764ba2)",
                  },
                  {
                    icon: "fa-users",
                    number: "60+",
                    label: "Research Roundtable Attendees",
                    period: "Toronto 2024 meeting",
                    gradient: "linear-gradient(45deg, #f6ad55, #ed8936)",
                  },
                  {
                    icon: "fa-pills",
                    number: "5",
                    label: "Drug Repurposing Partners",
                    period: "Expanding treatment options",
                    gradient: "linear-gradient(45deg, #48bb78, #38b2ac)",
                  },
                  {
                    icon: "fa-calendar",
                    number: "25",
                    label: "Years of Service",
                    period: "Since 2001 founding",
                    gradient: "linear-gradient(45deg, #ed64a6, #9f7aea)",
                  },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl text-white"
                      style={{ background: m.gradient }}
                    >
                      <i className={`fas ${m.icon}`} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="text-2xl font-bold text-gray-800">{m.number}</div>
                      <div className="font-medium text-gray-700">{m.label}</div>
                      <div className="text-xs font-semibold uppercase text-gray-500">{m.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact-transparency"
            className="overflow-hidden rounded-2xl bg-white shadow-lg scroll-mt-8"
          >
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(45deg, #f6ad55, #ed8936)" }}
            />
            <div className="p-10">
              <h2
                className="mb-4 text-center text-3xl font-bold"
                style={{
                  background: "linear-gradient(45deg, #f6ad55, #ed8936)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Questions About Our Reports?
              </h2>
              <p className="mb-10 text-center text-lg text-gray-600">
                We&apos;re committed to transparency and welcome your questions about our accountability
                reports.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-amber-400 bg-amber-50/80 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white"
                    style={{ background: "linear-gradient(45deg, #f6ad55, #ed8936)" }}
                  >
                    <i className="fas fa-envelope" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-amber-900">Email Us</h3>
                  <p className="mb-5 text-amber-800">
                    Send questions about our reports or request additional information
                  </p>
                  <a
                    href="mailto:transparency@nlmsf.org"
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white no-underline transition hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(45deg, #f6ad55, #ed8936)" }}
                  >
                    transparency@nlmsf.org
                  </a>
                </div>
                <div className="rounded-xl border border-amber-400 bg-amber-50/80 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white"
                    style={{ background: "linear-gradient(45deg, #f6ad55, #ed8936)" }}
                  >
                    <i className="fas fa-phone" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-amber-900">Call Us</h3>
                  <p className="mb-5 text-amber-800">
                    Speak directly with our team about our accountability measures
                  </p>
                  <a
                    href="tel:303-808-3437"
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white no-underline transition hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(45deg, #f6ad55, #ed8936)" }}
                  >
                    303-808-3437
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Denver Community Impact placeholder - anchor for sidebar */}
          <section id="denver-transparency" className="scroll-mt-8" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}
