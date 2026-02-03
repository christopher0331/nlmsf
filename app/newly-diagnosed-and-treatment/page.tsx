import type { Metadata } from "next";
import NewlyDiagnosedTreatmentClient from "./NewlyDiagnosedTreatmentClient";
import "./newly-diagnosed-and-treatment.css";

export const metadata: Metadata = {
  title: "Newly Diagnosed and Treatment | NLMSF",
  description:
    "Finding specialists, understanding treatment options, and connecting with resources to support your journey.",
};

export default function NewlyDiagnosedAndTreatmentPage() {
  return <NewlyDiagnosedTreatmentClient />;
}
