import type { Metadata } from "next";
import FundraiserPageClient from "./FundraiserPageClient";
import "./ironman-fundraiser.css";

export const metadata: Metadata = {
  title: "Joseph Jang — IRONMAN Fundraiser for LMS Research | NLMSF",
  description:
    "Joseph Jang is racing Boulder 70.3 and Ironman California to raise $5,000 for NLMSF-supported leiomyosarcoma research. Support his mission — every mile counts.",
};

export default function IronmanFundraiserPage() {
  return <FundraiserPageClient />;
}
