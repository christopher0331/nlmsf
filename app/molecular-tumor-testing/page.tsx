import type { Metadata } from "next";
import MolecularTumorTestingClient from "./MolecularTumorTestingClient";
import "./molecular-tumor-testing.css";

export const metadata: Metadata = {
  title: "Molecular Tumor Testing | NLMSF",
  description:
    "Learn how biomarkers guide personalized treatment decisions for leiomyosarcoma patients and improve outcomes.",
};

export default function MolecularTumorTestingPage() {
  return <MolecularTumorTestingClient />;
}
