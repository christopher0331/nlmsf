import Link from "next/link";

export default function ReportsSection() {
  return (
    <div
      className="py-10 px-5 text-center text-gray-800"
      aria-label="Annual Accountability Reports"
    >
      <h2 className="text-4xl mb-2.5 text-gray-500">
        Annual Accountability Reports
      </h2>
      <p className="text-[1.1rem] text-gray-500 mb-8">
        Access our comprehensive annual reports documenting our progress,
        achievements, and financial stewardship
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="bg-[#f0f7f4] rounded-[10px] p-5 w-[450px] max-w-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-left md:w-full md:max-w-[350px]">
          <h3 className="text-3xl text-[#26a69a] mb-2.5">2024</h3>
          <span className="inline-block bg-[#e0f2f1] py-1.5 px-2.5 rounded-md text-[0.9rem] text-[#26a69a] mb-2.5">
            Latest Report
          </span>
          <h4 className="text-xl mb-2.5 font-semibold text-gray-800">
            2024 Accountability Report
          </h4>
          <p className="text-[0.9rem] text-gray-500 mb-4">
            Our comprehensive 25th anniversary report detailing research funding,
            grant awards, repurposed drug initiatives, and expanded international
            collaborations.
          </p>
          <ul className="list-none p-0 m-0 mb-4">
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> Research Awardees
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> 60+ Roundtable
              Researchers
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> Repurposed Drug
              Initiative
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> International
              Collaborations
            </li>
          </ul>
          <div className="flex justify-between flex-wrap gap-2 text-[0.8rem] text-gray-500 mb-4">
            <span>4 CURRENT RESEARCH GRANTS</span>
            <span>60+ ROUNDTABLE ATTENDEES</span>
            <span>25TH ANNIVERSARY YEAR</span>
          </div>
          <div className="flex gap-2.5 justify-center">
            <Link
              href="/accountability-reports"
              className="py-2.5 px-5 border-0 rounded-md text-white no-underline text-[0.9rem] inline-block bg-[#26a69a] hover:bg-[#1d7d73] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Report
            </Link>
          </div>
        </div>

        <div className="bg-[#f0f7f4] rounded-[10px] p-5 w-[450px] max-w-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-left md:w-full md:max-w-[350px]">
          <h3 className="text-3xl text-[#26a69a] mb-2.5">2023</h3>
          <span className="inline-block bg-[#e0f2f1] py-1.5 px-2.5 rounded-md text-[0.9rem] text-[#26a69a] mb-2.5">
            Previous Report
          </span>
          <h4 className="text-xl mb-2.5 font-semibold text-gray-800">
            2023 Accountability Report
          </h4>
          <p className="text-[0.9rem] text-gray-500 mb-4">
            Our annual report highlighting achievements in leiomyosarcoma
            research, patient support programs, and community advocacy
            initiatives.
          </p>
          <ul className="list-none p-0 m-0 mb-4">
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> Research Awardees
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> SPORE LMS Project
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> MD Anderson
              Collaboration
            </li>
            <li className="text-[0.9rem] mb-1.5">
              <span className="text-[#26a69a] mr-1.5">✔</span> 24 Years of
              Service
            </li>
          </ul>
          <div className="flex justify-between flex-wrap gap-2 text-[0.8rem] text-gray-500 mb-4">
            <span>2 NEW RESEARCH GRANTS</span>
            <span>5 PATIENT SUPPORT PROGRAMS</span>
            <span>24th ANNIVERSARY YEAR</span>
          </div>
          <div className="flex gap-2.5 justify-center">
            <Link
              href="/2023-accountability-report"
              className="py-2.5 px-5 border-0 rounded-md text-white no-underline text-[0.9rem] inline-block bg-[#26a69a] hover:bg-[#1d7d73] transition-colors"
            >
              View Full Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
