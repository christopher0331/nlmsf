"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function NonUterineClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  return (
    <div className="non-uterine-page">
      {/* Non-Uterine LMS: Hero Section */}
      <section className="nlmsf-hero">
        <div className="nlmsf-hero-badge">
          <span className="nlmsf-hero-icon">
            <i className="fas fa-dna" aria-hidden />
          </span>
          <span className="nlmsf-hero-badge-text">Research • Treatment • Support</span>
        </div>
        <h1 className="nlmsf-hero-title">Non-Uterine Leiomyosarcoma</h1>
        <p className="nlmsf-hero-subtitle">
          Curated, nationally-relevant updates on maintenance therapy after first-line treatment and ongoing combination
          immunotherapy/chemotherapy studies in advanced soft tissue sarcoma, with emphasis on leiomyosarcoma.
        </p>
        <div className="nlmsf-hero-divider"></div>
        <div className="nlmsf-hero-tags">
          <span className="tag tag-purple">Soft Tissue Sarcoma</span>
          <span className="tag tag-blue">Maintenance Therapy</span>
          <span className="tag tag-teal">Clinical Trials</span>
        </div>
      </section>

      <div className="non-uterine-layout">
        {/* Non-Uterine LMS: Sidebar Navigation */}
        <aside className="nlmsf-sidebar">
          <nav className="sidebar-nav">
            <h3 className="sidebar-heading">On this page</h3>
            <ul className="sidebar-list">
              <li>
                <a href="#maintenance" className="sidebar-link">
                  Maintenance After First-Line
                </a>
              </li>
              <li>
                <a href="#therapy-chart" className="sidebar-link">
                  Therapy Chart
                </a>
              </li>
              <li>
                <a href="#tnt-study" className="sidebar-link">
                  TNT Phase 2 Study
                </a>
              </li>
            </ul>
          </nav>

          <Image
            src="https://nlmsf.org/wp-content/uploads/2025/11/research-non-uterine.png"
            className="sidebar-image"
            alt="Research non-uterine"
            width={640}
            height={360}
          />

          <div className="sidebar-cta">
            <h4 className="cta-title">Support LMS Research</h4>
            <p className="cta-text">Your contribution advances important research that impacts survivorship.</p>
            <div className="cta-actions">
              <a className="btn btn-primary" href="https://nlmsf.org/support/" target="_blank" rel="noopener noreferrer">
                Support
              </a>
              <a className="btn btn-outline" href="https://nlmsf.org/donate/" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </div>
          </div>
        </aside>

        {/* Non-Uterine LMS: Content Section */}
        <main className="nlmsf-content">
          {/* Section: Maintenance Therapy After First-Line */}
          <section id="maintenance" className="section-card section-purple">
            <h2 className="section-title">Maintenance after First-Line Treatment for Advanced Soft Tissue Sarcoma</h2>
            <p className="section-intro">
              Evidence and perspectives regarding maintenance strategies following initial therapy in advanced soft tissue sarcoma
              (STS).
            </p>
            <div className="resource">
              <div className="resource-info">
                <h3 className="resource-heading">Peer-reviewed overview (ScienceDirect)</h3>
                <p className="resource-desc">Explore maintenance options and considerations for advanced STS after first-line therapy.</p>
                <a
                  className="resource-link"
                  href="https://www.sciencedirect.com/science/article/abs/pii/S1040842825003476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maintenance after first-line treatment for advanced soft tissue sarcoma – ScienceDirect
                </a>
                <br />
                <a
                  className="resource-link"
                  href="https://www.sciencedirect.com/science/article/pii/S1040842825003476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here: Maintenance after first-line treatment for advanced soft tissue sarcoma – ScienceDirect (alternate link)
                </a>
              </div>
            </div>

            <div className="resource">
              <div className="resource-info">
                <h3 className="resource-heading">Maintenance review (PubMed)</h3>
                <p className="resource-desc muted">
                  Review of 8 randomized trials: PFS gains with trabectedin (post doxorubicin/trabectedin) in LMS and anlotinib (post
                  epirubicin/anlotinib) in STS; switch maintenance with regorafenib improved PFS in non-adipocytic STS; OS benefit
                  seen with doxorubicin/trabectedin in LMS.
                </p>
                <a
                  className="resource-link"
                  href="https://pubmed.ncbi.nlm.nih.gov/40975452"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maintenance after first-line treatment for advanced soft tissue sarcoma – PubMed
                </a>
              </div>
            </div>
          </section>

          {/* Section: Sarcoma NGS Updates 2025 (ASCO) */}
          <section id="ngs-updates-2025" className="section-card section-purple">
            <h2 className="section-title">Sarcoma Next-Generation Sequencing Updates (ASCO 2025)</h2>
            <p className="section-intro">
              Neal Chawla, MD — key updates on the evolving role of NGS, targeted therapies, cellular therapies, and immunotherapy in
              sarcoma management.
            </p>

            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/lCKbRPN-WBk"
                title="Sarcoma NGS Updates 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <p className="section-intro">
              <a href="#" onClick={(event) => {
                event.preventDefault();
                openModal();
              }} className="resource-link">
                Read summary (opens modal)
              </a>
            </p>
          </section>

          {/* Modal: NGS Summary */}
          <div
            id="ngs-summary-modal"
            className={`nlmsf-modal${isModalOpen ? " is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ngs-summary-title"
            aria-hidden={!isModalOpen}
          >
            <div className="nlmsf-modal__backdrop" data-close="true" onClick={closeModal}></div>
            <div className="nlmsf-modal__dialog" role="document">
              <button className="nlmsf-modal__close" aria-label="Close" onClick={closeModal}>
                ×
              </button>
              <h3 id="ngs-summary-title" className="nlmsf-modal__title">
                Summary: Sarcoma Next Generation Sequencing Updates in 2025 — Neal Chawla (ASCO 2025)
              </h3>
              <div className="nlmsf-modal__body">
                <p>
                  This video discusses the evolving role of next-generation sequencing (NGS) in sarcoma management. While NGS testing
                  is becoming more widely adopted, many patients still arrive at specialized centers without prior testing. NGS is
                  unlikely to influence first- or second-line treatments but can identify actionable mutations, such as NTRK
                  fusions, which are treatable with drugs like <strong>larotrectinib</strong>, <strong>entrectinib</strong>, and{" "}
                  <strong>repotrectinib</strong>. NGS also helps identify off-label treatment options for rare, treatment-refractory
                  sarcomas, especially when clinical trial participation is not feasible.
                </p>
                <p>
                  The video highlights the challenges of cellular therapies in solid tumors, including toxicity and limited targets.
                  However, the approval of a <strong>MAGE-A4</strong>-targeting therapy for synovial sarcoma has been a significant
                  milestone, though its applicability is limited by HLA subtype requirements. Other promising molecular targets
                  include <strong>IDH1</strong> mutations in chondrosarcoma (with ongoing phase III trials for{" "}
                  <strong>ivosidenib</strong>) and <strong>B7H3</strong>, which is being studied in CAR-T and antibody-drug conjugate
                  trials.
                </p>
                <p>
                  Immunotherapy, particularly immune checkpoint inhibitors, shows limited efficacy as monotherapy but may be more
                  effective when combined with other treatments. The speaker emphasizes the importance of multimodal therapies and
                  multi-arm studies to address the challenges of treating rare sarcomas. Lastly, the video stresses the need for
                  sarcoma patients to join support groups to build a sense of community and hope.
                </p>

                <h4>Clinical Trial Highlights</h4>
                <ul>
                  <li>
                    <strong>
                      Phase III Trial for Ivosidenib in Chondrosarcoma (&quot;CL3&quot;)
                    </strong>
                    : Investigating the use of ivosidenib for IDH1-mutant chondrosarcoma,
                    aiming to evaluate its potential for approval in this rare tumor type.
                  </li>
                  <li>
                    <strong>B7H3-Targeted Therapies</strong>: B7H3 is being studied as a molecular target in sarcomas (including
                    osteosarcoma and chondrosarcoma) via two approaches:
                    <ul>
                      <li>CAR-T therapy (UCSF)</li>
                      <li>Antibody-drug conjugate trial with promising early results</li>
                    </ul>
                  </li>
                </ul>

                <h4>Therapies Discussed</h4>
                <ul>
                  <li>
                    <strong>NGS-Driven Targeted Therapies</strong>
                    <ul>
                      <li>
                        <strong>NTRK Fusion Treatments</strong>: Larotrectinib, Entrectinib, and Repotrectinib highlighted as
                        effective options when NTRK fusions are identified by NGS.
                      </li>
                      <li>
                        <strong>Off-Label Treatments</strong>: NGS reports help identify actionable mutations for off-label use in
                        rare, treatment-refractory sarcomas.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cellular Therapies</strong>
                    <ul>
                      <li>
                        <strong>MAGE-A4 Targeted Therapy</strong>: Approved for synovial sarcoma; requires specific HLA types (e.g.,
                        HLA-A*02:01), limiting applicability.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ivosidenib for Chondrosarcoma</strong>
                    <ul>
                      <li>Used for IDH1-mutant chondrosarcoma; currently in phase III (CL3) for potential approval.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>B7H3-Targeted Therapies</strong>
                    <ul>
                      <li>CAR-T therapy studies</li>
                      <li>Antibody-drug conjugates with encouraging early data (osteosarcoma, chondrosarcoma)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Immunotherapies</strong>
                    <ul>
                      <li>Checkpoint inhibitors show limited single-agent activity; combinations (e.g., with immunomodulatory agents) may improve outcomes.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Multimodal Therapies</strong>
                    <ul>
                      <li>
                        Emphasis on combining standard therapies with novel agents or immunotherapies in multi-arm studies,
                        especially for rare and difficult-to-treat sarcomas.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4>Key Practice Updates for Sarcoma in 2025</h4>
                <h5>Next-Generation Sequencing (NGS) Adoption</h5>
                <ul>
                  <li>
                    <strong>Increased Use of NGS</strong>: Wider adoption in sarcoma, though some patients still present without prior
                    testing.
                  </li>
                  <li>
                    <strong>Impact on Treatment</strong>: Unlikely to change 1L/2L therapies; can reveal actionable targets (e.g.,
                    NTRK fusions) enabling larotrectinib, entrectinib, or repotrectinib.
                  </li>
                  <li>
                    <strong>Off-Label Use</strong>: NGS reports guide off-label options when clinical trials are unavailable.
                  </li>
                </ul>
                <h5>Targeted Therapies</h5>
                <ul>
                  <li>
                    <strong>NTRK Fusion Treatments</strong>: Larotrectinib, Entrectinib, Repotrectinib for NTRK fusions.
                  </li>
                  <li>
                    <strong>Ivosidenib for Chondrosarcoma</strong>: Targets IDH1; in phase III (CL3) for potential approval.
                  </li>
                </ul>
                <h5>Cellular Therapies</h5>
                <ul>
                  <li>
                    <strong>MAGE-A4 Targeted Therapy</strong>: Approved for synovial sarcoma; HLA subtype requirements limit breadth of
                    use.
                  </li>
                  <li>
                    <strong>B7H3-Targeted Therapies</strong>: CAR-T and ADC modalities under study.
                  </li>
                </ul>
                <h5>Immunotherapy and Multimodal Approaches</h5>
                <ul>
                  <li>
                    <strong>Checkpoint Inhibitors</strong>: Limited single-agent activity; some success in combinations.
                  </li>
                  <li>
                    <strong>Multimodal Therapies</strong>: Combining standard and novel agents in multi-arm designs is key for rare
                    sarcomas.
                  </li>
                </ul>
                <h5>Challenges in Clinical Trials</h5>
                <ul>
                  <li>
                    <strong>Small Patient Populations</strong>: Rare sarcomas challenge conventional trial design.
                  </li>
                  <li>
                    <strong>Multi-Arm Studies</strong>: Critical for testing combinations after progression on initial treatments.
                  </li>
                </ul>
                <h5>Patient Support and Advocacy</h5>
                <ul>
                  <li>Encourage joining sarcoma-specific or general support groups to combat isolation and build community.</li>
                </ul>

                <h4>Related Management Topics in Sarcoma</h4>
                <ul>
                  <li>
                    <strong>NGS in Sarcoma</strong>: Identifying actionable mutations (e.g., NTRK fusions) to guide targeted therapies;
                    off-label exploration when trials are not feasible.
                  </li>
                  <li>
                    <strong>Targeted Therapies</strong>: Managing mutation-defined sarcomas (e.g., IDH1 in chondrosarcoma); emerging
                    B7H3-targeted CAR-T/ADC therapies.
                  </li>
                  <li>
                    <strong>Cellular Therapies</strong>: MAGE-A4 therapy for synovial sarcoma; limitations due to HLA subtypes.
                  </li>
                  <li>
                    <strong>Immunotherapy Approaches</strong>: Limited single-agent efficacy; combination strategies.
                  </li>
                  <li>
                    <strong>Clinical Trial Design</strong>: Small cohorts; need for innovative, multi-arm designs.
                  </li>
                  <li>
                    <strong>Supportive Care and Advocacy</strong>: Importance of community and psychosocial support.
                  </li>
                </ul>

                <p className="muted">
                  Note: For alternative viewpoints or deeper dives on specific therapies (e.g., NTRK, MAGE-A4, B7H3), explore
                  additional expert videos on platforms like VuMedi under the Sarcoma/Oncology categories.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Surgical Outcomes */}
          <section id="surgical-outcomes" className="section-card section-blue">
            <h2 className="section-title">Surgical Outcomes: IVC Resection and Graft Replacement</h2>
            <p className="section-intro">
              Single-center experience over three decades evaluating safety, durability, and local control following inferior vena
              cava resection with graft replacement for malignant disease.
            </p>

            <div className="links-grid">
              <div className="link-card">
                <h3 className="link-title">Early and Late Outcomes (PubMed)</h3>
                <p className="link-desc">
                  IVC resection + graft replacement reported as safe and durable with excellent local control, offering potential
                  long-term survival in select patients.
                </p>
                <a className="link-url" href="https://pubmed.ncbi.nlm.nih.gov/40976571/" target="_blank" rel="noopener noreferrer">
                  Read the PubMed abstract
                </a>
              </div>
            </div>
          </section>

          {/* Section: Featured Sarcoma Drug Therapy Chart */}
          <section id="therapy-chart" className="section-card section-blue">
            <h2 className="section-title">Featured Sarcoma Drug Therapy Chart</h2>
            <p className="section-intro">High-level visual summary accompanying the ScienceDirect article.</p>
            <figure className="image-figure">
              <a href="https://ars.els-cdn.com/content/image/1-s2.0-S1040842825003476-ga1_lrg.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="image-responsive"
                  src="https://ars.els-cdn.com/content/image/1-s2.0-S1040842825003476-ga1_lrg.jpg"
                  alt="Featured sarcoma drug therapy chart from ScienceDirect article"
                  width={1200}
                  height={800}
                />
              </a>
              <figcaption className="image-caption">
                Source: ScienceDirect article &quot;Maintenance after first-line treatment for
                advanced soft tissue sarcoma.&quot; Image © respective publisher. Click to view
                full size.
              </figcaption>
            </figure>
          </section>

          {/* Section: TNT Phase 2 Study */}
          <section id="tnt-study" className="section-card section-teal">
            <h2 className="section-title">Phase 2 TNT Study: Talimogene Laherparepvec (TVEC), Nivolumab, and Trabectedin</h2>
            <p className="section-intro">
              Combination oncolytic immunotherapy and chemotherapy regimen evaluated in advanced sarcomas, including leiomyosarcoma
              and liposarcoma.
            </p>

            <div className="links-grid">
              <div className="link-card">
                <h3 className="link-title">ASCO Abstract</h3>
                <p className="link-desc">Conference abstract overview of the TNT study (NCT03886311).</p>
                <a
                  className="link-url"
                  href="https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e23560"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Journal of Clinical Oncology – e23560
                </a>
              </div>

              <div className="link-card">
                <h3 className="link-title">Full Text (PMC)</h3>
                <p className="link-desc">Open-access paper detailing eligibility, regimen, and outcomes in previously treated STS.</p>
                <a className="link-url" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10206273/" target="_blank" rel="noopener noreferrer">
                  Activity of TNT – Frontiers in Oncology (PMC)
                </a>
              </div>

              <div className="link-card">
                <h3 className="link-title">ClinicalTrials.gov</h3>
                <p className="link-desc">Trial registry with protocol information and status updates.</p>
                <a className="link-url" href="https://clinicaltrials.gov/study/NCT03886311" target="_blank" rel="noopener noreferrer">
                  NCT03886311 – TNT Study
                </a>
              </div>
            </div>

            <div className="note">
              <strong>Note:</strong> This page is informational only and not a substitute for medical advice. Patients should consult
              their oncology team for individualized recommendations.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
