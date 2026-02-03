import type { Metadata } from "next";
import PatientDrivenResearchClient from "./PatientDrivenResearchClient";
import "./patient-driven-research.css";

export const metadata: Metadata = {
  title: "Patient-Driven Research | NLMSF",
  description:
    "Learn how patient participation and advocacy accelerate LMS research and treatment options.",
};

export default function PatientDrivenResearchPage() {
  return <PatientDrivenResearchClient />;
}
