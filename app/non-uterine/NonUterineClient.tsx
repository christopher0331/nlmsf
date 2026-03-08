"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function NonUterineClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  return (
    <main className="nulms-page">
      {/* Hero */}
      <section className="nulms-hero">
        <div className="nulms-hero-content">
          <div className="nulms-badge">
            <span className="nulms-badge-dot" aria-hidden="true" />
            <span>NLMSF Research Hub</span>
          </div>
          <h1>Non-Uterine Leiomyosarcoma</h1>
          <div className="nulms-divider" />
          <p>
            Curated, nationally-relevant updates on maintenance therapy,
            combination immunotherapy/chemotherapy studies, and surgical outcomes
            in advanced soft tissue sarcoma with emphasis on leiomyosarcoma.
          </p>
          <div className="nulms-tags">
            <span className="nulms-tag purple">
              <i className="fas fa-dna" aria-hidden /> Soft Tissue Sarcoma
            </span>
            <span className="nulms-tag blue">
              <i className="fas fa-pills" aria-hidden /> Maintenance Therapy
            </span>
            <span className="nulms-tag teal">
              <i className="fas fa-flask" aria-hidden /> Clinical Trials
            </span>
            <span className="nulms-tag indigo">
              <i className="fas fa-microscope" aria-hidden /> NGS &amp; Genomics
            </span>
          </div>
        </div>
        <div className="nulms-hero-decor decor-one" aria-hidden="true" />
        <div className="nulms-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="nulms-container">
        {/* Nav */}
        <nav className="nulms-nav">
          <h3>On This Page</h3>
          <a href="#ngs-video">NGS Updates (ASCO 2025)</a>
          <a href="#maintenance">Maintenance Therapy</a>
          <a href="#surgical">Surgical Outcomes</a>
          <a href="#therapy-chart">Drug Therapy Chart</a>
          <a href="#tnt-study">TNT Phase 2 Study</a>
        </nav>

        {/* NGS Updates — Featured Video */}
        <section id="ngs-video" className="nulms-section">
          <h2 className="nulms-section-title indigo">
            Sarcoma NGS Updates (ASCO 2025)
          </h2>
          <div className="nulms-panel indigo">
            <div className="nulms-panel-header">
              <div className="nulms-icon indigo">
                <i className="fas fa-microscope" aria-hidden />
              </div>
              <div>
                <h3>
                  Next-Generation Sequencing, Targeted &amp; Cellular Therapies
                </h3>
                <p>Neal Chawla, MD — ASCO 2025</p>
              </div>
            </div>
            <div className="nulms-video">
              <iframe
                src="https://www.youtube.com/embed/lCKbRPN-WBk"
                title="Sarcoma NGS Updates 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="nulms-video-note">
              Key updates on NGS adoption, NTRK fusion treatments, MAGE-A4
              therapy for synovial sarcoma, ivosidenib for chondrosarcoma, B7H3
              targeted therapies, and multimodal immunotherapy approaches.
            </p>
            <button
              type="button"
              className="nulms-cta-btn"
              onClick={openModal}
            >
              <i className="fas fa-file-alt" aria-hidden />
              Read Full Summary
            </button>
          </div>
        </section>

        {/* Maintenance Therapy */}
        <section id="maintenance" className="nulms-section">
          <h2 className="nulms-section-title purple">
            Maintenance After First-Line Treatment
          </h2>
          <div className="nulms-panel purple">
            <div className="nulms-panel-header">
              <div className="nulms-icon purple">
                <i className="fas fa-pills" aria-hidden />
              </div>
              <div>
                <h3>Advanced Soft Tissue Sarcoma</h3>
                <p>
                  Evidence and perspectives on maintenance strategies following
                  initial therapy
                </p>
              </div>
            </div>

            <div className="nulms-article">
              <h4>Peer-Reviewed Overview</h4>
              <p>
                Explore maintenance options and considerations for advanced STS
                after first-line therapy.
              </p>
              <div className="nulms-link-row">
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S1040842825003476"
                  className="nulms-link"
                  {...ext}
                >
                  ScienceDirect — Full Article
                </a>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S1040842825003476"
                  className="nulms-link"
                  {...ext}
                >
                  ScienceDirect — Alternate Link
                </a>
              </div>
            </div>

            <div className="nulms-article">
              <h4>Maintenance Review (PubMed)</h4>
              <p>
                Review of 8 randomized trials: PFS gains with trabectedin (post
                doxorubicin/trabectedin) in LMS and anlotinib (post
                epirubicin/anlotinib) in STS; switch maintenance with
                regorafenib improved PFS in non-adipocytic STS; OS benefit seen
                with doxorubicin/trabectedin in LMS.
              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/40975452"
                className="nulms-link"
                {...ext}
              >
                PubMed — Abstract
              </a>
            </div>
          </div>
        </section>

        {/* Two-column: Surgical Outcomes + Drug Chart */}
        <div className="nulms-two-col">
          <section id="surgical" className="nulms-section">
            <h2 className="nulms-section-title blue">Surgical Outcomes</h2>
            <div className="nulms-panel blue">
              <div className="nulms-panel-header">
                <div className="nulms-icon blue">
                  <i className="fas fa-procedures" aria-hidden />
                </div>
                <div>
                  <h3>IVC Resection &amp; Graft Replacement</h3>
                  <p>Single-center experience over three decades</p>
                </div>
              </div>
              <p className="nulms-panel-text">
                Evaluating safety, durability, and local control following
                inferior vena cava resection with graft replacement for
                malignant disease. Reported as safe and durable with excellent
                local control, offering potential long-term survival in select
                patients.
              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/40976571/"
                className="nulms-cta-btn"
                {...ext}
              >
                <i className="fas fa-external-link-alt" aria-hidden />
                Read the PubMed Abstract
              </a>
            </div>
          </section>

          <section id="therapy-chart" className="nulms-section">
            <h2 className="nulms-section-title teal">Drug Therapy Chart</h2>
            <div className="nulms-panel teal">
              <div className="nulms-panel-header">
                <div className="nulms-icon teal">
                  <i className="fas fa-chart-bar" aria-hidden />
                </div>
                <div>
                  <h3>Featured Sarcoma Drug Therapy Chart</h3>
                  <p>Visual summary from ScienceDirect</p>
                </div>
              </div>
              <figure className="nulms-figure">
                <a
                  href="https://ars.els-cdn.com/content/image/1-s2.0-S1040842825003476-ga1_lrg.jpg"
                  {...ext}
                >
                  <Image
                    src="https://ars.els-cdn.com/content/image/1-s2.0-S1040842825003476-ga1_lrg.jpg"
                    alt="Featured sarcoma drug therapy chart"
                    width={800}
                    height={533}
                    className="nulms-figure-img"
                  />
                </a>
                <figcaption>
                  Source: &ldquo;Maintenance after first-line treatment for
                  advanced soft tissue sarcoma&rdquo; — ScienceDirect. Click to
                  view full size.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        {/* TNT Phase 2 Study */}
        <section id="tnt-study" className="nulms-section">
          <h2 className="nulms-section-title teal">
            Phase 2 TNT Study
          </h2>
          <div className="nulms-panel teal">
            <div className="nulms-panel-header">
              <div className="nulms-icon teal">
                <i className="fas fa-flask" aria-hidden />
              </div>
              <div>
                <h3>
                  Talimogene Laherparepvec (TVEC), Nivolumab &amp; Trabectedin
                </h3>
                <p>
                  Combination oncolytic immunotherapy and chemotherapy in
                  advanced sarcomas
                </p>
              </div>
            </div>
            <div className="nulms-trials-grid">
              <a
                href="https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e23560"
                className="nulms-trial-card"
                {...ext}
              >
                <div className="nulms-trial-icon">
                  <i className="fas fa-file-medical" aria-hidden />
                </div>
                <h4>ASCO Abstract</h4>
                <p>Conference abstract overview of the TNT study</p>
                <span className="nulms-trial-source">
                  J Clin Oncol · e23560
                </span>
              </a>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10206273/"
                className="nulms-trial-card"
                {...ext}
              >
                <div className="nulms-trial-icon">
                  <i className="fas fa-book-open" aria-hidden />
                </div>
                <h4>Full Text (PMC)</h4>
                <p>
                  Open-access paper detailing eligibility, regimen, and outcomes
                </p>
                <span className="nulms-trial-source">
                  Frontiers in Oncology
                </span>
              </a>
              <a
                href="https://clinicaltrials.gov/study/NCT03886311"
                className="nulms-trial-card"
                {...ext}
              >
                <div className="nulms-trial-icon">
                  <i className="fas fa-clipboard-list" aria-hidden />
                </div>
                <h4>ClinicalTrials.gov</h4>
                <p>Trial registry with protocol info and status updates</p>
                <span className="nulms-trial-source">NCT03886311</span>
              </a>
            </div>
            <div className="nulms-callout">
              <i className="fas fa-info-circle" aria-hidden />
              <span>
                This page is informational only and not a substitute for medical
                advice. Patients should consult their oncology team for
                individualized recommendations.
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Modal: NGS Summary */}
      {isModalOpen && (
        <div
          className="nulms-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ngs-modal-title"
        >
          <div className="nulms-modal-backdrop" onClick={closeModal} />
          <div className="nulms-modal" role="document">
            <button
              type="button"
              className="nulms-modal-close"
              aria-label="Close"
              onClick={closeModal}
            >
              <i className="fas fa-times" aria-hidden />
            </button>
            <h3 id="ngs-modal-title" className="nulms-modal-title">
              Summary: Sarcoma NGS Updates in 2025 — Neal Chawla (ASCO 2025)
            </h3>
            <div className="nulms-modal-body">
              <p>
                This video discusses the evolving role of next-generation
                sequencing (NGS) in sarcoma management. While NGS testing is
                becoming more widely adopted, many patients still arrive at
                specialized centers without prior testing. NGS is unlikely to
                influence first- or second-line treatments but can identify
                actionable mutations, such as NTRK fusions, which are treatable
                with drugs like <strong>larotrectinib</strong>,{" "}
                <strong>entrectinib</strong>, and{" "}
                <strong>repotrectinib</strong>.
              </p>
              <p>
                The video highlights the challenges of cellular therapies in
                solid tumors, including toxicity and limited targets. However,
                the approval of a <strong>MAGE-A4</strong>-targeting therapy for
                synovial sarcoma has been a significant milestone, though its
                applicability is limited by HLA subtype requirements. Other
                promising molecular targets include <strong>IDH1</strong>{" "}
                mutations in chondrosarcoma and <strong>B7H3</strong>, being
                studied in CAR-T and antibody-drug conjugate trials.
              </p>
              <p>
                Immunotherapy, particularly immune checkpoint inhibitors, shows
                limited efficacy as monotherapy but may be more effective when
                combined with other treatments. The speaker emphasizes the
                importance of multimodal therapies and multi-arm studies to
                address the challenges of treating rare sarcomas.
              </p>

              <h4>Clinical Trial Highlights</h4>
              <ul>
                <li>
                  <strong>Phase III Ivosidenib in Chondrosarcoma</strong>:
                  Investigating ivosidenib for IDH1-mutant chondrosarcoma,
                  aiming for potential approval.
                </li>
                <li>
                  <strong>B7H3-Targeted Therapies</strong>: Being studied via
                  CAR-T therapy (UCSF) and antibody-drug conjugates with
                  promising early results in osteosarcoma and chondrosarcoma.
                </li>
              </ul>

              <h4>Therapies Discussed</h4>
              <ul>
                <li>
                  <strong>NTRK Fusion Treatments</strong>: Larotrectinib,
                  Entrectinib, Repotrectinib — effective when NTRK fusions are
                  identified by NGS.
                </li>
                <li>
                  <strong>MAGE-A4 Targeted Therapy</strong>: Approved for
                  synovial sarcoma; requires specific HLA types, limiting
                  applicability.
                </li>
                <li>
                  <strong>Ivosidenib for Chondrosarcoma</strong>: Targets IDH1;
                  in phase III for potential approval.
                </li>
                <li>
                  <strong>Checkpoint Inhibitors</strong>: Limited single-agent
                  activity; combinations may improve outcomes.
                </li>
                <li>
                  <strong>Multimodal Therapies</strong>: Combining standard and
                  novel agents in multi-arm designs is key for rare sarcomas.
                </li>
              </ul>

              <h4>Key Practice Updates for 2025</h4>

              <div className="nulms-modal-grid">
                <div className="nulms-modal-card">
                  <h5>NGS Adoption</h5>
                  <ul>
                    <li>Wider adoption, though some patients present without prior testing</li>
                    <li>Unlikely to change 1L/2L therapies but reveals actionable targets</li>
                    <li>Guides off-label options when trials are unavailable</li>
                  </ul>
                </div>
                <div className="nulms-modal-card">
                  <h5>Targeted Therapies</h5>
                  <ul>
                    <li>NTRK fusion treatments: Larotrectinib, Entrectinib, Repotrectinib</li>
                    <li>Ivosidenib for IDH1-mutant chondrosarcoma (Phase III)</li>
                  </ul>
                </div>
                <div className="nulms-modal-card">
                  <h5>Cellular Therapies</h5>
                  <ul>
                    <li>MAGE-A4 approved for synovial sarcoma; HLA subtype limits breadth</li>
                    <li>B7H3-targeted CAR-T and ADC modalities under study</li>
                  </ul>
                </div>
                <div className="nulms-modal-card">
                  <h5>Trial Design Challenges</h5>
                  <ul>
                    <li>Small patient populations challenge conventional design</li>
                    <li>Multi-arm studies critical after progression</li>
                    <li>Support groups encouraged for community and hope</li>
                  </ul>
                </div>
              </div>

              <p className="nulms-modal-note">
                For deeper dives on specific therapies, explore expert videos on
                VuMedi under Sarcoma/Oncology categories.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
