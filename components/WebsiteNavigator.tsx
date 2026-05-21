import Link from "next/link";

const gradientText =
  "bg-gradient-to-br from-[#6b46c1] to-[#9333ea] bg-clip-text text-transparent";

const JOURNEY_PATHS = [
  {
    href: "/pathology-report-accuracy",
    title: "Newly Diagnosed",
    icon: "fa-compass",
    tint: "from-violet-50 to-white border-violet-200 hover:border-violet-300 hover:bg-violet-50",
    iconBg: "bg-violet-100 text-violet-700",
    accent: "bg-violet-500",
  },
  {
    href: "/treatment-options",
    title: "During Treatment",
    icon: "fa-notes-medical",
    tint: "from-indigo-50 to-white border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50",
    iconBg: "bg-indigo-100 text-indigo-700",
    accent: "bg-indigo-500",
  },
  {
    href: "/survivorship-resources-2",
    title: "Survivorship",
    icon: "fa-heart",
    tint: "from-emerald-50 to-white border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-700",
    accent: "bg-emerald-500",
  },
] as const;

export default function WebsiteNavigator() {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-200 bg-white py-4 px-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:py-5 sm:px-[18px]">
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="min-w-0">
            <h3 className={`m-0 text-lg font-bold leading-tight ${gradientText} sm:text-xl`}>
              Your Journey
            </h3>
            <p className="m-0 mt-1 text-xs leading-snug text-gray-500 sm:text-[13px]">
              Tap a stage for matched NLMSF resources
            </p>
          </div>
          <Link
            href="/resource-support"
            className="shrink-0 text-[11px] font-semibold text-[#6b46c1] no-underline leading-tight hover:text-[#553c9a] pt-1 sm:text-xs"
          >
            All resources &#8594;
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {JOURNEY_PATHS.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className={`group relative flex flex-col items-center rounded-xl border bg-gradient-to-b px-2 py-3.5 no-underline transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md sm:py-4 ${path.tint}`}
            >
              <span
                className={`absolute top-0 left-3 right-3 h-1 rounded-b-full ${path.accent}`}
                aria-hidden
              />
              <span
                className={`mt-2 flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${path.iconBg}`}
              >
                <i className={`fas ${path.icon} text-base sm:text-lg`} aria-hidden />
              </span>
              <span className="mt-2.5 text-center text-[11px] font-bold leading-snug text-[#4c1d95] group-hover:text-[#5b21b6] px-1 sm:text-xs">
                {path.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
