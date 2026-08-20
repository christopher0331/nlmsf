import type { Metadata } from "next";
import PatientDrivenResearchClient from "./PatientDrivenResearchClient";
import "./patient-driven-research.css";

export const metadata: Metadata = {
  title: "Be a Part of Research | Patient-Driven Research | NLMSF",
  description:
    "Be a part of research — accelerating research, clinical trials, and treatment options to further LMS survivorship through patient-driven initiatives.",
};

export default function PatientDrivenResearchPage() {
  return <PatientDrivenResearchClient />;
}
