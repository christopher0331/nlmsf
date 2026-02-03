const STATS_BG_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='20' cy='30' r='15' fill='rgba(255,255,255,0.08)'/%3E%3Ccircle cx='80' cy='80' r='25' fill='rgba(255,255,255,0.06)'/%3E%3Ccircle cx='150' cy='40' r='20' fill='rgba(255,255,255,0.07)'/%3E%3Ccircle cx='40' cy='140' r='18' fill='rgba(255,255,255,0.05)'/%3E%3Ccircle cx='120' cy='120' r='22' fill='rgba(255,255,255,0.06)'/%3E%3Ccircle cx='180' cy='160' r='12' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E\")";

export default function StatsSection() {
  return (
    <section
      className="relative py-16 px-6 overflow-hidden text-white bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#6d28d9] md:py-12 md:px-4"
      aria-label="Key statistics"
    >
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: STATS_BG_PATTERN,
          backgroundSize: "200px 200px",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex justify-around items-stretch gap-8 flex-wrap md:flex-row md:justify-center md:gap-6 sm:flex-col sm:items-center">
          <div className="flex-1 min-w-[140px] max-w-[260px] text-center flex flex-col items-center gap-2 md:min-w-[120px] sm:max-w-none">
            <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight md:text-3xl">
              28+
            </div>
            <div className="text-base font-medium text-white leading-snug max-w-[12ch] md:text-[0.9rem]">
              Years Supporting Patients
            </div>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[260px] text-center flex flex-col items-center gap-2 md:min-w-[120px] sm:max-w-none">
            <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight md:text-3xl">
              5,000+
            </div>
            <div className="text-base font-medium text-white leading-snug max-w-[12ch] md:text-[0.9rem]">
              Patients Assisted
            </div>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[260px] text-center flex flex-col items-center gap-2 md:min-w-[120px] sm:max-w-none">
            <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight md:text-3xl">
              $2M+
            </div>
            <div className="text-base font-medium text-white leading-snug max-w-[12ch] md:text-[0.9rem]">
              Research Funding
            </div>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[260px] text-center flex flex-col items-center gap-2 md:min-w-[120px] sm:max-w-none">
            <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-tight md:text-3xl">
              24/7
            </div>
            <div className="text-base font-medium text-white leading-snug max-w-[12ch] md:text-[0.9rem]">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
