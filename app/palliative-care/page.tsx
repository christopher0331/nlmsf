import type { Metadata } from "next";
import PalliativeCareClient from "./PalliativeCareClient";
import "./palliative-care.css";

export const metadata: Metadata = {
  title: "Palliative Care | NLMSF",
  description:
    "Specialized, team-based support to reduce symptoms and stress, improve quality of life, and help you live as well as possible—at any stage of illness.",
};

export default function PalliativeCarePage() {
  return <PalliativeCareClient />;
}
