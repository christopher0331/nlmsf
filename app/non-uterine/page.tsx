import type { Metadata } from "next";
import NonUterineClient from "./NonUterineClient";
import "./non-uterine.css";

export const metadata: Metadata = {
  title: "Non-Uterine Leiomyosarcoma | NLMSF",
  description:
    "Updates on maintenance therapy and ongoing immunotherapy/chemotherapy studies in advanced soft tissue sarcoma.",
};

export default function NonUterinePage() {
  return <NonUterineClient />;
}
