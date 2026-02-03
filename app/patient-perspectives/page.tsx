import type { Metadata } from "next";
import PatientPerspectivesClient from "./PatientPerspectivesClient";
import "./patient-perspectives.css";

export const metadata: Metadata = {
  title: "Patient & Caregiver Perspectives | NLMSF",
  description:
    "Real stories from patients and caregivers living with LMS, offering insight, hope, and guidance.",
};

export default function PatientPerspectivesPage() {
  return <PatientPerspectivesClient />;
}
