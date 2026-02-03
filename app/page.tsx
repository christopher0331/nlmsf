import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import HomeThreeColumns from "@/components/HomeThreeColumns";
import RecentUpdates from "@/components/RecentUpdates";
import EducationVideosSection from "@/components/EducationVideosSection";
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
      <HeroSection />
      <HomeThreeColumns />
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
