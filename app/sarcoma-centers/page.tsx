import type { Metadata } from "next";
import SarcomaCentersClient from "./SarcomaCentersClient";

export const metadata: Metadata = {
  title: "Sarcoma Centers — Clinical Trial Links | NLMSF",
  description:
    "Direct links to clinical trial pages at major sarcoma and cancer centers across the United States, curated by the National Leiomyosarcoma Foundation.",
};

export default function SarcomaCentersPage() {
  return <SarcomaCentersClient />;
}
