import type { Metadata } from "next";
import PaliativeCareClient from "./PaliativeCareClient";
import "./paliative-care.css";

export const metadata: Metadata = {
  title: "Palliative Care | NLMSF",
  description:
    "Learn about palliative care, how it differs from hospice, and resources for support.",
};

export default function PaliativeCarePage() {
  return <PaliativeCareClient />;
}
