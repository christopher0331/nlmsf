import type { Metadata } from "next";

// TODO: Delete this page at some point (temporary /donation-history/)

export const metadata: Metadata = {
  title: "Donation History | NLMSF",
  description: "View your donation history.",
};

const rows = [
  { id: 3, date: "February 14, 2021", amount: "$3.00", details: "View Abandoned »" },
  { id: 2, date: "February 14, 2021", amount: "$1.00", details: "View Abandoned »" },
  { id: 1, date: "February 14, 2021", amount: "$1.00", details: "View Receipt »" },
];

export default function DonationHistoryPage() {
  return (
    <main className="mx-auto max-w-[900px] px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
        Donation History
      </h1>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-900">ID</th>
              <th className="px-4 py-3 font-semibold text-gray-900">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-900">Amount</th>
              <th className="px-4 py-3 font-semibold text-gray-900">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                <td className="px-4 py-3 text-gray-700">{row.id}</td>
                <td className="px-4 py-3 text-gray-700">{row.date}</td>
                <td className="px-4 py-3 text-gray-700">{row.amount}</td>
                <td className="px-4 py-3">
                  <span className="text-[#7e22ce] hover:underline">
                    {row.details}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
