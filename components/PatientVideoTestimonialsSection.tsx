"use client";

import { useState, useCallback } from "react";

const VIDEOS = [
  {
    embedUrl: "https://www.youtube.com/embed/P5tsdOm-U0I?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=P5tsdOm-U0I",
    title: "Dr. Mitch Achee - NLMSF Medical Advisory Board Chairman",
    name: "Dr. Mitch Achee",
    roles: [
      { label: "Diagnostic Radiologist", type: "medical" },
      { label: "LMS Survivor", type: "survivor" },
      { label: "Chairman, NLMSF Medical Advisory Board", type: "board" },
    ],
    quote:
      "As both a medical professional and an LMS survivor, I understand the importance of accurate information and community support in navigating this complex journey.",
  },
  {
    embedUrl: "https://www.youtube.com/embed/azkHE80lvto?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=azkHE80lvto",
    title: "Tembi Locke - Actress and Author",
    name: "Tembi Locke",
    roles: [
      { label: "Actress & Author", type: "creative" },
      { label: "NLMSF Technical Advisor", type: "advisor" },
    ],
    quote:
      "From Scratch chronicles my personal LMS journey with my husband. The NLMSF provided invaluable guidance, which is why I selected them as the technical advisor for the Netflix adaptation of my memoir.",
  },
  {
    embedUrl: "https://www.youtube.com/embed/lXVRLYplcRI?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=lXVRLYplcRI",
    title: "Chandalyn Williams - NLMSF Board Member",
    name: "Chandalyn Williams, Ph.D",
    roles: [{ label: "NLMSF Board Member", type: "board" }],
    quote:
      "The NLMSF serves as a guiding light to face the LMS journey. Their resources and community support make a significant difference in the lives of patients and caregivers.",
  },
];

const ROLE_BADGE_CLASSES: Record<string, string> = {
  medical: "bg-[#dbeafe] text-[#1d4ed8]",
  survivor: "bg-[#d1fae5] text-[#047857]",
  board: "bg-[#ede9fe] text-[#5b21b6]",
  advisor: "bg-[#ede9fe] text-[#5b21b6]",
  creative: "bg-[#fce7f3] text-[#9d174d]",
};

export default function PatientVideoTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const n = VIDEOS.length;

  const goTo = useCallback((index: number) => {
    setCurrentSlide((index + n) % n);
  }, [n]);

  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);
  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);

  return (
    <section
      className="py-16 px-6 md:py-12 md:px-4"
      style={{
        background: "linear-gradient(180deg, #f8f9ff 0%, #fff 15%, #fff 85%, #f0f4ff 100%)",
      }}
      aria-label="Patient and caregiver video testimonials"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block py-2 px-5 bg-[#5a4da0] text-white text-[0.9rem] font-semibold rounded-full mb-4 tracking-wide">
            Patient and Caregiver Perspectives
          </span>
          <h2 className="text-2xl font-extrabold text-[#1e293b] mb-3 leading-tight md:text-[1.65rem]">
            From Patients and Caregivers to You
          </h2>
          <p className="text-[1.1rem] text-[#64748b] m-0 max-w-[640px] mx-auto leading-normal">
            Hear directly from LMS survivors and specialists who have been where you are. Their
            stories provide insight, guidance, and hope for your journey.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-6 mb-5">
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-[#e2e8f0] border-0 text-[#475569] cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#cbd5e1] hover:text-[#1e293b]"
              aria-label="Previous video"
              onClick={prev}
            >
              <i className="fas fa-chevron-left text-[1.1rem]" aria-hidden />
            </button>
            <div className="flex items-center gap-2">
              {VIDEOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`w-3 h-3 rounded-full border-2 p-0 cursor-pointer transition-colors duration-200 ${
                    i === currentSlide ? "bg-[#5a4da0] border-[#5a4da0]" : "bg-transparent border-[#cbd5e1]"
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-[#e2e8f0] border-0 text-[#475569] cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#cbd5e1] hover:text-[#1e293b]"
              aria-label="Next video"
              onClick={next}
            >
              <i className="fas fa-chevron-right text-[1.1rem]" aria-hidden />
            </button>
          </div>

          <div className="relative overflow-hidden">
            {VIDEOS.map((v, index) => (
              <div
                key={index}
                className={index === currentSlide ? "block" : "hidden"}
              >
                <div className="grid grid-cols-[1.1fr_1fr] gap-0 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e2e8f0] md:grid-cols-1">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden bg-[#0f172a]">
                    <iframe
                      src={index === currentSlide ? v.embedUrl : undefined}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full border-0"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center md:p-6">
                    <h3 className="text-2xl font-bold text-[#1e293b] mb-3 leading-snug md:text-[1.35rem]">
                      {v.name}
                    </h3>
                    <p className="flex flex-wrap gap-2 m-0 mb-4">
                      {v.roles.map((r, i) => (
                        <span
                          key={i}
                          className={`inline-block py-1.5 px-3 text-[0.8rem] font-semibold rounded-lg ${ROLE_BADGE_CLASSES[r.type] ?? "bg-gray-100 text-gray-700"}`}
                        >
                          {r.label}
                        </span>
                      ))}
                    </p>
                    <p className="text-base leading-normal text-[#475569] italic m-0 mb-5 flex-1">
                      &ldquo;{v.quote}&rdquo;
                    </p>
                    <a
                      href={v.watchUrl}
                      className="inline-flex items-center gap-2 py-3 px-5 text-[0.95rem] font-semibold text-white no-underline rounded-[10px] self-start transition-all duration-200 hover:opacity-95 hover:-translate-y-px"
                      style={{
                        background: "linear-gradient(135deg, #4f46e5, #5a4da0)",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Full Video <i className="fas fa-external-link-alt" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-[#64748b] m-0 leading-normal max-w-[560px] mx-auto">
            These personal stories offer unique insights from those who understand what you&apos;re
            going through. Remember, you&apos;re not alone on this journey.
          </p>
        </div>
      </div>
    </section>
  );
}
