import type { Metadata } from "next";
import "./medical-advisory-board.css";
import { advisors } from "./advisors-data";
import { AdvisorCard } from "./AdvisorCard";

export const metadata: Metadata = {
  title: "Medical Advisory Committee | NLMSF",
  description:
    "The NLMSF Medical Advisory Committee comprises renowned experts from the global clinical and research community, guiding the foundation and the International Leiomyosarcoma Research Roundtable.",
};

export default function MedicalAdvisoryBoardPage() {
  return (
    <div className="mab-page">
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Expert Guidance</span>
            <h1 className="nlmsf-hero-title">Medical Advisory Committee</h1>
            <div className="nlmsf-hero-description">
              <p>
                The National Leiomyosarcoma Foundation (NLMSF) Medical Advisory Committee is comprised of renowned experts from the global clinical and research/scientific community. Their expertise and virtual discussions help us keep patients and families informed of the continuous progress in rare cancer research network, as well as clinical trials, and new/novel translational therapies. They provide guidance to the foundation by identifying and evaluating scientific research initiatives as esteemed member of our International Leiomyosarcoma Research Roundtable, founded by the NLMSF in 2018.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="nlmsf-medical-advisors">
        <div className="nlmsf-advisors-container">
          <div className="nlmsf-advisors-grid">
            {advisors.map((advisor, index) => (
              <AdvisorCard
                key={index}
                name={advisor.name}
                position={advisor.position}
                institution={advisor.institution}
                img={advisor.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
