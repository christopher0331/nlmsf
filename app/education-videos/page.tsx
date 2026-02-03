import type { Metadata } from "next";
import EducationVideosSection from "@/components/EducationVideosSection";

export const metadata: Metadata = {
  title: "Education Videos & Resources | NLMSF",
  description:
    "Access our library of educational videos, webinars, and resources for patients, caregivers, and healthcare providers.",
};

export default function EducationVideosPage() {
  return (
    <main>
      <EducationVideosSection />
    </main>
  );
}
