"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import HomeEventsColumn from "@/components/HomeEventsColumn";

const CLINICAL_TRIALS_URL =
  "https://clinicaltrials.gov/search?term=leiomyosarcoma";
const ONCLIVE_SARCOMA_URL = "https://www.onclive.com/clinical/sarcoma";
const ONCLIVE_IMG =
  "https://nlmsf.org/wp-content/uploads/2025/09/1757876547796blob_sharpened.jpg";

const ONCLIVE_UPDATES = [
  {
    href: "https://www.onclive.com/view/mri-and-ultrasound-may-be-best-used-in-tandem-for-surveillance-imaging-in-soft-tissue-sarcoma",
    title: "MRI + Ultrasound Best in Tandem for Surveillance",
    desc: "Combining both imaging modalities improves detection while lowering cost and patient burden.",
  },
  {
    href: "https://www.onclive.com/view/dr-randall-on-the-diagnostic-accuracy-and-cost-effectiveness-of-mri-vs-ultrasound-in-sts",
    title: "Dr. Randall: MRI vs Ultrasound Accuracy & Cost",
    desc: "Expert insight on practical surveillance choices.",
  },
  {
    href: "https://www.onclive.com/shorts/benefits-and-limitations-of-mri-in-soft-tissue-sarcoma-surveillance",
    title: "Benefits & Limitations of MRI in STS Surveillance",
    desc: "Quick video overview of current imaging guidelines.",
  },
  {
    href: "https://www.onclive.com/view/dr-van-tine-on-olaparib-plus-temozolomide-in-advanced-uterine-leiomyosarcoma",
    title: "Dr. Van Tine: Olaparib + Temozolomide in Uterine LMS",
    desc: "Encouraging results from the PARP inhibitor combination.",
  },
  {
    href: "https://www.onclive.com/view/anlotinib-plus-epirubicin-elicits-pfs-benefit-in-advanced-soft-tissue-sarcoma",
    title: "Anlotinib + Epirubicin PFS Benefit in Advanced STS",
    desc: "Phase 3 data showing significant progression-free survival gain.",
  },
  {
    href: "https://www.onclive.com/view/mecbotamab-vedotin-shows-potential-to-extend-survival-in-treatment-refractory-soft-tissue-sarcomas",
    title: "Mecbotamab Vedotin in Refractory STS",
    desc: "Early signals of survival extension in heavily pre-treated patients.",
  },
  {
    href: "https://www.onclive.com/view/prosthetic-embodiment-research-could-improve-outcomes-after-amputation-in-sarcomas",
    title: "Prosthetic Embodiment Research Post-Amputation",
    desc: "New approaches to improve functional outcomes and quality of life.",
  },
];

const TESTIMONIALS = [
  {
    name: "Brian Van Tine, MD",
    title: "Sarcoma Program Director, Alvin J. Siteman Cancer Center",
    quote: '"I love this group, it makes a difference."',
    image: "https://nlmsf.org/wp-content/uploads/2025/10/Brian-Van-Tine-MD.png",
    alt: "Brian Van Tine, MD",
  },
  {
    name: "Seth Pollack, MD",
    title: "Professor, Northwestern University Feinberg School of Medicine",
    quote:
      '"I love the NLMSF – I love the patient programs held – your signature support advocacy to collaborate with sarcoma centers..."',
    image: "https://nlmsf.org/wp-content/uploads/2025/10/Seth-Pollack-MD.png",
    alt: "Seth Pollack, MD",
  },
  {
    name: "Arun Singh, MD",
    title: "Director of UCLA Sarcoma Medical Oncology",
    quote:
      '"The National Leiomyosarcoma Foundation is an important organization that strives to gather a critical mass of patients, scientists, patient advocates and physicians..."',
    image: "https://nlmsf.org/wp-content/uploads/2025/10/Arun-Singh-MD.png",
    alt: "Arun Singh, MD",
  },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const gradientText =
  "bg-gradient-to-br from-[#6b46c1] to-[#9333ea] bg-clip-text text-transparent";

export default function HomeThreeColumns() {
  const [oncliveModalOpen, setOncliveModalOpen] = useState(false);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && oncliveModalOpen) setOncliveModalOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [oncliveModalOpen]);

  useEffect(() => {
    if (testimonialPaused) return;
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialPaused]);

  return (
    <section
      className="py-8 px-8 max-w-[1600px] mx-auto w-full"
      aria-label="Resources and navigation"
    >
      <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-3">
        {/* Left column: Clinical Trials + Website Navigator */}
        <div className="flex flex-col gap-0">
          <div className="p-0 m-0">
            <div className="bg-white rounded-xl border border-gray-200 py-5 px-[18px] shadow-[0_4px_12px_rgba(15,23,42,0.06)] md:py-5 md:px-[18px] sm:py-4 sm:px-[14px]">
              <div className="flex items-center justify-between mb-3.5">
                <div
                  className={`text-lg font-bold ${gradientText} md:text-lg sm:text-base`}
                >
                  Clinical Trials
                </div>
                <a
                  href={CLINICAL_TRIALS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#6b46c1] no-underline inline-flex items-center gap-1 hover:text-[#553c9a]"
                >
                  View on ClinicalTrials.gov &#8599;
                </a>
              </div>
              <p className="text-[13px] text-gray-600 m-0 mb-3 leading-normal">
                Explore current clinical trials that include{" "}
                <strong>leiomyosarcoma</strong> so you can discuss options with
                your care team.
              </p>
              <a
                href={CLINICAL_TRIALS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2.5 px-3.5 rounded-full bg-gradient-to-br from-[#6b46c1] to-[#9333ea] text-white text-[13px] font-semibold no-underline shadow-[0_8px_16px_rgba(88,28,135,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(88,28,135,0.3)]"
              >
                Open Leiomyosarcoma Trials on ClinicalTrials.gov
              </a>
              <p className="text-[11px] text-gray-500 mt-2.5">
                This link opens the official <strong>ClinicalTrials.gov</strong>{" "}
                website with results already filtered for{" "}
                <strong>leiomyosarcoma</strong>.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-white rounded-xl border border-gray-200 py-5 px-[18px] shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:py-4 sm:px-[14px]">
              <h3
                className={`text-lg font-bold m-0 mb-1.5 ${gradientText} sm:text-base`}
              >
                Website Navigator
              </h3>
              <p className="text-[13px] text-gray-600 m-0 mb-3.5">
                Start here to find the most helpful information for where you
                are in your LMS journey.
              </p>
              <div className="grid grid-cols-1 gap-3.5 min-[900px]:grid-cols-1">
                <Link
                  href="/pathology-report-accuracy"
                  className="block bg-gray-50 rounded-[10px] py-3 px-3 no-underline border border-gray-200 transition-all duration-150 hover:bg-[#f3e8ff] hover:border-[#c4b5fd] hover:shadow-[0_8px_16px_rgba(88,28,135,0.16)] hover:-translate-y-0.5"
                >
                  <div className="text-[13px] font-semibold text-[#4c1d95] mb-1">
                    Newly Diagnosed Patient
                  </div>
                  <p className="text-xs text-gray-600 m-0 leading-snug">
                    Learn the basics, key questions for your care team, and
                    first steps after diagnosis.
                  </p>
                </Link>
                <Link
                  href="/treatment-options"
                  className="block bg-gray-50 rounded-[10px] py-3 px-3 no-underline border border-gray-200 transition-all duration-150 hover:bg-[#f3e8ff] hover:border-[#c4b5fd] hover:shadow-[0_8px_16px_rgba(88,28,135,0.16)] hover:-translate-y-0.5"
                >
                  <div className="text-[13px] font-semibold text-[#4c1d95] mb-1">
                    Entering Treatment / Caregivers
                  </div>
                  <p className="text-xs text-gray-600 m-0 leading-snug">
                    Prepare for treatment, understand side effects, and find
                    caregiver-specific support.
                  </p>
                </Link>
                <Link
                  href="/survivorship-resources-2"
                  className="block bg-gray-50 rounded-[10px] py-3 px-3 no-underline border border-gray-200 transition-all duration-150 hover:bg-[#f3e8ff] hover:border-[#c4b5fd] hover:shadow-[0_8px_16px_rgba(88,28,135,0.16)] hover:-translate-y-0.5"
                >
                  <div className="text-[13px] font-semibold text-[#4c1d95] mb-1">
                    End of Treatment / Survivorship
                  </div>
                  <p className="text-xs text-gray-600 m-0 leading-snug">
                    Explore quality-of-life resources, follow-up care, and
                    survivorship support.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* OncLive card */}
          <div
            className="mt-4 w-full text-center bg-gradient-to-b from-white to-[#faf5ff] border border-gray-200 rounded-xl p-3.5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
            role="complementary"
            aria-label="OncLive Sarcoma Updates"
          >
            <div className="flex justify-center mb-2.5">
              <a
                href={ONCLIVE_SARCOMA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ONCLIVE_IMG}
                  alt="OncLive Sarcoma"
                  width={640}
                  height={360}
                  className="w-full max-w-[320px] h-auto rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] object-cover"
                  sizes="(min-width: 1024px) 320px, 70vw"
                />
              </a>
            </div>
            <div>
              <h3 className="text-[1.06rem] mt-2 mb-1 font-extrabold leading-snug">
                <a
                  className="text-[#6a3ea1] underline underline-offset-2 decoration-2 hover:text-[#4f2f7b]"
                  href={ONCLIVE_SARCOMA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarcomas | Clinical | OncLive
                </a>
              </h3>
              <p className="text-[#374151] text-[0.95rem] my-1.5 mb-3">
                Sarcoma OncLive videos from Sarcoma Specialists throughout the
                country
              </p>
              <button
                type="button"
                className="inline-block py-2 px-3 rounded-full border-2 border-[#6a3ea1] text-[#6a3ea1] font-bold no-underline transition-all duration-150 cursor-pointer font-[inherit] bg-transparent hover:bg-[#6a3ea1] hover:text-white hover:shadow-[0_4px_10px_rgba(106,62,161,0.25)]"
                onClick={() => setOncliveModalOpen(true)}
              >
                View Latest Research Updates
              </button>
            </div>
          </div>
        </div>

        {/* Center column: Support Hotline + Testimonials */}
        <div className="hidden lg:block">
          <div className="p-0 m-0 text-center">
            <h2
              className={`text-3xl font-bold text-[#6b46c1] m-0 mb-6 ${gradientText} md:text-3xl sm:text-2xl`}
            >
              24/7 Support Hotline
            </h2>
            <p
              className="relative text-center my-3 mx-auto font-bold italic text-base md:text-lg"
              style={{
                background: "linear-gradient(90deg, #8b5cf6, #6d28d9, #5b21b6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              We are here for you
            </p>
            <div
              className="relative left-1/2 -translate-x-1/2 -mb-[18px] w-[60%] min-w-[240px] max-w-[440px] h-[22px]"
              style={{
                background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 60' preserveAspectRatio='none'><defs><linearGradient id='hotline-g' x1='0' y1='0' x2='1' y2='0'><stop stop-color='%238b5cf6'/><stop offset='.6' stop-color='%236d28d9'/><stop offset='1' stop-color='%235b21b6'/></linearGradient></defs><path d='M10 45 C120 8 380 8 490 45' stroke='url(%23hotline-g)' stroke-width='10' fill='none' stroke-linecap='round'/></svg>") center / 100% 100% no-repeat`,
              }}
              aria-hidden
            />
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#6b46c1] to-[#553c9a] py-6 px-6 text-white shadow-[0_4px_12px_rgba(107,70,193,0.3)]">
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <PhoneIcon className="w-5 h-5 mr-2 text-white" />
                    <h3 className="font-semibold text-white text-lg m-0 flex items-center">
                      Primary Contact
                    </h3>
                  </div>
                  <a
                    href="tel:+13038083437"
                    className="block text-5xl font-bold text-white no-underline mb-2 transition-opacity hover:opacity-90 leading-none md:text-5xl sm:text-4xl xs:text-3xl"
                  >
                    (303) 808-3437
                  </a>
                  <p className="text-sm text-white/80 m-0">
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
                <div
                  className="absolute rounded-full bg-white/10 top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2"
                  aria-hidden
                />
                <div
                  className="absolute rounded-full bg-white/5 bottom-0 left-0 w-24 h-24 -translate-x-1/2 translate-y-1/2"
                  aria-hidden
                />
              </div>

              <div className="py-4 px-4 bg-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center mb-2">
                  <PhoneIcon className="w-4 h-4 text-[#6b46c1] mr-2" />
                  <h3 className="font-semibold text-[#6b46c1] text-base m-0">
                    Alternative Contact
                  </h3>
                </div>
                <a
                  href="tel:+13037830924"
                  className="block text-3xl font-bold text-[#6b46c1] no-underline mb-1 transition-colors hover:text-[#553c9a] leading-none md:text-3xl sm:text-2xl xs:text-xl"
                >
                  (303) 783-0924
                </a>
                <p className="text-sm text-gray-600 m-0">Backup support line</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3 px-3 bg-white border-2 border-[#6b46c1] text-[#6b46c1] rounded-lg no-underline text-sm font-medium transition-all duration-300 hover:bg-[#6b46c1] hover:text-white"
                >
                  <MessageIcon className="w-4 h-4 mr-1" />
                  Get Support
                </Link>
                <Link
                  href="/find-a-sarcoma-specialist/"
                  className="flex items-center justify-center py-3 px-3 bg-white border-2 border-[#6b46c1] text-[#6b46c1] rounded-lg no-underline text-sm font-medium transition-all duration-300 hover:bg-[#6b46c1] hover:text-white sm:py-2.5 sm:text-[13px]"
                >
                  <SearchIcon className="w-4 h-4 mr-1" />
                  Find a Sarcoma Specialist
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl border border-slate-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] sm:p-3">
            <h3
              className={`text-center text-xl font-bold text-[#6a3ea1] m-0 mb-4 ${gradientText} sm:text-lg`}
            >
              What Our Experts Say
            </h3>
            <div
              className="relative overflow-hidden min-h-[200px]"
              id="testimonialCarousel"
              onMouseEnter={() => setTestimonialPaused(true)}
              onMouseLeave={() => setTestimonialPaused(false)}
            >
              {TESTIMONIALS.map((t, index) => (
                <div
                  key={t.name}
                  className={`transition-opacity duration-500 ${
                    index === testimonialSlide
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-2 border-[3px] border-[#6a3ea1] shadow-[0_4px_8px_rgba(106,62,161,0.2)] sm:w-[50px] sm:h-[50px]">
                        <Image
                          src={t.image}
                          alt={t.alt}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover"
                          sizes="60px"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="text-[0.9rem] font-bold text-gray-800 m-0 mb-1 leading-tight sm:text-[0.85rem]">
                          {t.name}
                        </h4>
                        <p className="text-[0.75rem] text-gray-500 m-0 leading-snug italic sm:text-[0.7rem]">
                          {t.title}
                        </p>
                      </div>
                    </div>
                    <blockquote
                      className={
                        "text-[0.85rem] leading-snug text-[#374151] m-0 py-3 px-3 bg-white rounded-lg border-l-4 border-[#6a3ea1] shadow-[0_2px_4px_rgba(0,0,0,0.05)] relative sm:text-[0.8rem] sm:py-2.5 sm:px-2.5 before:content-[attr(data-quote)] before:text-3xl before:text-[#6a3ea1] before:absolute before:top-[-0.5rem] before:left-2 before:opacity-30 before:font-serif"
                      }
                      data-quote='"'
                    >
                      {t.quote}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300 hover:bg-[#8b5cf6] ${
                    index === testimonialSlide
                      ? "bg-[#6a3ea1] scale-125"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setTestimonialSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Upcoming Events + Recent Recordings */}
        <div>
          <HomeEventsColumn />
        </div>
      </div>

      {/* OncLive modal */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-5 overflow-y-auto bg-black/50"
        style={{ display: oncliveModalOpen ? "flex" : "none" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="onclive-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOncliveModalOpen(false);
        }}
      >
        <div className="bg-white max-w-[680px] w-[90%] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] max-h-[90vh] overflow-hidden">
          <div className="bg-[#6a3ea1] text-white py-4 px-6 relative text-[1.35rem] font-extrabold">
            <h3 id="onclive-modal-title">
              Latest Sarcoma Research &amp; Treatment Updates
            </h3>
            <button
              type="button"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[2.2rem] cursor-pointer bg-transparent border-0 text-white leading-none p-0 hover:opacity-90"
              onClick={() => setOncliveModalOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
            {ONCLIVE_UPDATES.map((item, i) => (
              <div
                key={item.href}
                className={`pb-4 mb-5 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0`}
              >
                <h4 className="m-0 mb-1.5 text-[1.02rem]">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6a3ea1] underline hover:text-[#4f2f7b]"
                  >
                    {item.title}
                  </a>
                </h4>
                <p className="mt-1.5 m-0 text-[0.94rem] text-gray-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
