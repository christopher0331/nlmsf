import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import JamaConsensusSpotlight from "@/components/JamaConsensusSpotlight";
import Milan2026RoundtableSection from "@/components/Milan2026RoundtableSection";
import HomeThreeColumns from "@/components/HomeThreeColumns";
import NovemberMessageSection from "@/components/NovemberMessageSection";
import RecentUpdates from "@/components/RecentUpdates";
import LatestFromLinkedIn from "@/components/LatestFromLinkedIn";
import EducationVideosSection from "@/components/EducationVideosSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import ImpactInActionSection from "@/components/ImpactInActionSection";
import ReportsSection from "@/components/ReportsSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import PatientVideoTestimonialsSection from "@/components/PatientVideoTestimonialsSection";
import CTASection from "@/components/CTASection";
import TestimonialsScrollSection from "@/components/TestimonialsScrollSection";
import SharingVoicesSection from "@/components/SharingVoicesSection";
import { issueFormToken } from "@/lib/bot-filter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "National Leiomyosarcoma Foundation | NLMSF",
  description:
    "National Leiomyosarcoma Foundation: Supporting patients, caregivers, and researchers with education, advocacy, and research funding since 1997.",
  openGraph: {
    title: "National Leiomyosarcoma Foundation | NLMSF",
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
  const formToken = issueFormToken();
  return (
    <main>
      <HeroSection formToken={formToken} />
      <JamaConsensusSpotlight />
      <HomeThreeColumns />
      <NovemberMessageSection />
      <TestimonialsScrollSection />
      <SharingVoicesSection />
      <RecentUpdates />
      <LatestFromLinkedIn />
      <EducationVideosSection />
      <Milan2026RoundtableSection />
      <NewsletterCTA formToken={formToken} />
      <ImpactInActionSection />
      <ReportsSection />
      <StatsSection />
      <PartnersSection />
      <PatientVideoTestimonialsSection />
      <CTASection />
    </main>
  );
}
