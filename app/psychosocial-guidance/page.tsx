import type { Metadata } from "next";
import PsychosocialGuidanceClient from "./PsychosocialGuidanceClient";
import "./psychosocial-guidance.css";

export const metadata: Metadata = {
  title: "Psychosocial Support | NLMSF",
  description:
    "Understanding and addressing the emotional, psychological, and social challenges faced by patients and caregivers.",
};

export default function PsychosocialGuidancePage() {
  return <PsychosocialGuidanceClient />;
}
