"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const SLIDES: { src: string; alt: string }[][] = [
  [
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-32.jpg", alt: "AACR" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/7-asco.jpg", alt: "ASCO" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-36.jpg", alt: "Broad Institute" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-3.png", alt: "CancerCare" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-34.jpg", alt: "Dana-Farber" },
  ],
  [
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-33.jpg", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-35.jpg", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2021/03/Pcori.jpg", alt: "PCORI" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/cb0a477898aea87bc1af0e7ddeaea647-1.png", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-2.png", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/Sarcoma-Oncology-Center.jpg", alt: "Sarcoma Oncology Center" },
  ],
  [
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/12/lazarex.jpg", alt: "Lazarex" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-6.png", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-6.jpg", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-38.jpg", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2020/11/unnamed-74-1.jpg", alt: "Partner" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2021/11/CountmeIn.jpg", alt: "Count Me In" },
  ],
  [
    { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/University-of-Mannheim.jpg", alt: "University of Mannheim" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/USC.jpg", alt: "USC" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/royal-marsden.jpg", alt: "Royal Marsden" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/McGill.jpg", alt: "McGill University" },
    { src: "https://media.nlmsf.org/wp-content/uploads/2021/02/ECOG.jpg", alt: "ECOG" },
  ],
];

const ALL_PARTNERS: { src: string; alt: string; name: string }[] = [
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-32.jpg", alt: "AACR", name: "AACR" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/7-asco.jpg", alt: "ASCO", name: "ASCO" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-36.jpg", alt: "Broad Institute", name: "Broad Institute" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-3.png", alt: "CancerCare", name: "CancerCare" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-34.jpg", alt: "Dana-Farber", name: "Dana-Farber" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2021/02/ECOG.jpg", alt: "ECOG", name: "ECOG" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-33.jpg", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-35.jpg", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2021/03/Pcori.jpg", alt: "PCORI", name: "PCORI" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/cb0a477898aea87bc1af0e7ddeaea647-1.png", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-2.png", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/Sarcoma-Oncology-Center.jpg", alt: "Sarcoma Oncology Center", name: "Sarcoma Oncology Center" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/12/lazarex.jpg", alt: "Lazarex", name: "Lazarex" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-6.png", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/download-6.jpg", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-38.jpg", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2020/11/unnamed-74-1.jpg", alt: "Partner", name: "Partner" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2021/11/CountmeIn.jpg", alt: "Count Me In", name: "Count Me In" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/University-of-Mannheim.jpg", alt: "University of Mannheim", name: "University of Mannheim" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/USC.jpg", alt: "USC", name: "USC" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/royal-marsden.jpg", alt: "Royal Marsden", name: "Royal Marsden" },
  { src: "https://media.nlmsf.org/wp-content/uploads/2022/03/McGill.jpg", alt: "McGill University", name: "McGill University" },
];

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const slideCount = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + slideCount) % slideCount);
  }, [slideCount]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (paused || modalOpen) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [paused, modalOpen, nextSlide]);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, closeModal]);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <section
      className="py-16 px-6 bg-[#f5f5f5] text-center md:py-12 md:px-4"
      aria-label="Our Partners"
    >
      <div className="max-w-[800px] mx-auto mb-10">
        <h2 className="text-[2.25rem] font-bold text-[#5a4da0] mb-2">Our Partners</h2>
        <p className="text-[1.1rem] text-[#666] m-0 leading-normal">
          Working together with leading organizations to advance LMS research and patient care
        </p>
      </div>

      <div
        className="max-w-[900px] mx-auto bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 relative md:p-6 md:px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-[-24px] w-12 h-12 rounded-full bg-[#e0e0e0] border-0 text-[#333] cursor-pointer flex items-center justify-center z-[2] transition-colors duration-200 hover:bg-[#d0d0d0] md:left-2"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left text-xl" aria-hidden />
        </button>
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-[-24px] w-12 h-12 rounded-full bg-[#e0e0e0] border-0 text-[#333] cursor-pointer flex items-center justify-center z-[2] transition-colors duration-200 hover:bg-[#d0d0d0] md:right-2"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right text-xl" aria-hidden />
        </button>

        <div className="relative overflow-hidden min-h-[200px]">
          {SLIDES.map((logos, slideIndex) => (
            <div
              key={slideIndex}
              className={slideIndex === currentSlide ? "block" : "hidden"}
            >
              <div className="grid grid-cols-3 gap-8 gap-y-6 items-center justify-items-center md:grid-cols-2 md:gap-6">
                {logos.map((logo, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 no-underline transition-opacity duration-200 hover:opacity-85"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={80}
                      className="max-w-[140px] max-h-[80px] w-auto h-auto object-contain md:max-w-[120px] md:max-h-[60px]"
                      sizes="(min-width: 768px) 120px, 140px"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`w-2.5 h-2.5 rounded-full border-2 p-0 cursor-pointer transition-colors duration-200 ${
                i === currentSlide ? "bg-[#2b82ea] border-[#2b82ea]" : "bg-transparent border-[#ccc]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="bg-transparent border-0 text-[#2b82ea] text-base font-medium cursor-pointer inline-flex items-center gap-2 py-1 transition-[text-decoration] duration-200 hover:underline"
          onClick={openModal}
        >
          View all our partners and collaborators
          <i className="fas fa-arrow-right text-[0.9rem]" aria-hidden />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[1000] bg-black/50 items-center justify-center p-8 ${
          modalOpen ? "flex" : "hidden"
        }`}
        id="partners-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="partners-modal-title"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] max-w-[900px] w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center py-5 px-6 border-b border-gray-200">
            <h3 id="partners-modal-title" className="m-0 text-[1.35rem] font-bold text-gray-800">
              All Partners & Collaborators
            </h3>
            <button
              type="button"
              className="bg-transparent border-0 text-[#666] cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800"
              aria-label="Close modal"
              onClick={closeModal}
            >
              <i className="fas fa-times text-xl" aria-hidden />
            </button>
          </div>
          <div className="p-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 items-start md:grid-cols-2">
              {ALL_PARTNERS.map((partner, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 no-underline text-inherit transition-opacity duration-200 hover:opacity-85"
                >
                  <div className="w-full flex items-center justify-center min-h-[70px] p-2">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={120}
                      height={60}
                      className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain"
                      sizes="120px"
                    />
                  </div>
                  <span className="text-[0.85rem] text-gray-700 text-center leading-snug">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="py-4 px-6 border-t border-gray-200 text-center">
            <button
              type="button"
              className="py-2.5 px-6 text-base font-semibold bg-[#2b82ea] text-white border-0 rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#1d6fd6]"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
