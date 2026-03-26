import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import HomeThreeColumns from "@/components/HomeThreeColumns";
import RecentUpdates from "@/components/RecentUpdates";
import EducationVideosSection from "@/components/EducationVideosSection";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import "@/components/testimonial-marquee.css";
import NewsletterCTA from "@/components/NewsletterCTA";
import MissionSection from "@/components/MissionSection";
import ReportsSection from "@/components/ReportsSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import ExpertEndorsementSection from "@/components/ExpertEndorsementSection";
import PatientVideoTestimonialsSection from "@/components/PatientVideoTestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "National Leiomyosarcoma Foundation",
  description:
    "National Leiomyosarcoma Foundation: Supporting patients, caregivers, and researchers with education, advocacy, and research funding since 1997.",
  openGraph: {
    title: "National Leiomyosarcoma Foundation",
    description:
      "Providing education, advocacy, support, and research funding for the global LMS community.",
    images: [
      {
        url: "https://media.nlmsf.org/wp-content/uploads/2025/06/hero-section-1.png",
      },
    ],
    url: "https://nlmsf.org",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Pillars of Purpose Fundraiser Banner */}
      <div className="w-full bg-gradient-to-r from-violet-700 via-indigo-700 to-violet-800 text-white">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
              <i className="fas fa-star text-yellow-300 text-sm" aria-hidden />
            </span>
            <p className="text-sm md:text-base font-medium leading-snug">
              <span className="font-bold">Impact in Action: Pillars of Purpose</span>
              <span className="mx-2 opacity-60">·</span>
              Support the National Leiomyosarcoma Foundation — tickets, raffle &amp; sponsorships now available.
            </p>
          </div>
          <Link
            href="/pillars-of-purpose-fundraiser"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white text-violet-800 font-semibold text-sm px-4 py-1.5 hover:bg-yellow-300 hover:text-violet-900 transition-colors no-underline whitespace-nowrap"
          >
            Get Your Tickets <i className="fas fa-arrow-right text-xs" aria-hidden />
          </Link>
        </div>
      </div>
      <HeroSection />
      <HomeThreeColumns />
      <TestimonialMarquee />
      <RecentUpdates />
      <EducationVideosSection />
      <NewsletterCTA />
      <MissionSection />
      <ReportsSection />
      <StatsSection />
      <PartnersSection />
      <ExpertEndorsementSection />
      <PatientVideoTestimonialsSection />
      <CTASection />
    </main>
  );
}
