import Link from "next/link";

const TABS = [
  { id: "events", href: "/admin/events", label: "Events" },
  { id: "videos", href: "/admin/education-videos", label: "Education Videos" },
  { id: "tributes", href: "/admin/tributes", label: "Tributes" },
  { id: "merch", href: "/admin/merch", label: "Merch Studio" },
] as const;

export function AdminTabs({ active }: { active: (typeof TABS)[number]["id"] }) {
  return (
    <div className="mb-6 flex flex-wrap gap-0 border-b-2 border-gray-200">
      {TABS.map((tab) =>
        tab.id === active ? (
          <div
            key={tab.id}
            className="-mb-0.5 border-b-2 border-b-violet-700 px-5 py-3 text-sm font-semibold text-violet-700"
          >
            {tab.label}
          </div>
        ) : (
          <Link
            key={tab.id}
            href={tab.href}
            className="-mb-0.5 border-b-2 border-transparent px-5 py-3 text-sm font-semibold text-gray-500 no-underline hover:text-gray-700"
          >
            {tab.label}
          </Link>
        ),
      )}
    </div>
  );
}
