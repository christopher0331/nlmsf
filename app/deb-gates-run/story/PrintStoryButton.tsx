"use client";

export default function PrintStoryButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ddd6fe] bg-white px-4 py-2 text-sm font-semibold text-[#5b21b6] shadow-sm hover:bg-[#f5f3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b21b6]"
    >
      <i className="fas fa-print" aria-hidden />
      Print / Save as PDF
    </button>
  );
}
