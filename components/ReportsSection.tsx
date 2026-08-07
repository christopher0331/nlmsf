import Link from "next/link";

const reports = [
  {
    year: "2025",
    badge: "Latest Report",
    title: "2025 Accountability Report",
    description:
      "What we accomplished for the LMS community in 2025 — Circle of Hope, research funding, awards, Snapshot News, and new collaborations.",
    highlights: [
      "Circle of Hope",
      "LMS Research Funding",
      "Early Career Awards",
      "Snapshot News",
    ],
    href: "/2025-accountability-report",
  },
  {
    year: "2024",
    badge: "Previous Report",
    title: "2024 Accountability Report",
    description:
      "25th anniversary report detailing research funding, grant awards, repurposed drug initiatives, and expanded international collaborations.",
    highlights: [
      "Research Awardees",
      "60+ Roundtable Researchers",
      "Repurposed Drug Initiative",
      "International Collaborations",
    ],
    href: "/accountability-reports",
  },
  {
    year: "2023",
    badge: "Previous Report",
    title: "2023 Accountability Report",
    description:
      "Annual report highlighting achievements in leiomyosarcoma research, patient support programs, and community advocacy initiatives.",
    highlights: [
      "Research Awardees",
      "SPORE LMS Project",
      "MD Anderson Collaboration",
      "23 Years of Service",
    ],
    href: "/2023-accountability-report",
  },
];

export default function ReportsSection() {
  return (
    <div
      className="py-10 px-5 text-center text-gray-800"
      aria-label="Annual Accountability Reports"
    >
      <h2 className="text-4xl mb-2.5 text-gray-500">
        Annual Accountability Reports
      </h2>
      <p className="text-[1.1rem] text-gray-500 mb-8 max-w-3xl mx-auto">
        Access our comprehensive annual reports documenting our progress,
        achievements, and financial stewardship
      </p>
      <div className="flex justify-center gap-5 flex-wrap items-stretch">
        {reports.map((report) => (
          <div
            key={report.year}
            className="bg-[#f0f7f4] rounded-[10px] p-5 w-[450px] max-w-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-left md:w-full md:max-w-[350px] flex flex-col"
          >
            <h3 className="text-3xl text-[#26a69a] mb-2.5">{report.year}</h3>
            <span className="inline-block w-fit bg-[#e0f2f1] py-1.5 px-2.5 rounded-md text-[0.9rem] text-[#26a69a] mb-2.5">
              {report.badge}
            </span>
            <h4 className="text-xl mb-2.5 font-semibold text-gray-800">
              {report.title}
            </h4>
            <p className="text-[0.9rem] text-gray-500 mb-4">
              {report.description}
            </p>
            <ul className="list-none p-0 m-0 mb-4 flex-1">
              {report.highlights.map((item) => (
                <li key={item} className="text-[0.9rem] mb-1.5">
                  <span className="text-[#26a69a] mr-1.5">✔</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5 justify-center mt-auto">
              <Link
                href={report.href}
                className="py-2.5 px-5 border-0 rounded-md text-white no-underline text-[0.9rem] inline-block bg-[#26a69a] hover:bg-[#1d7d73] transition-colors"
              >
                View Full Report
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
