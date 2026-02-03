import type { Metadata } from "next";
import "./metastatic-treatment-options.css";

export const metadata: Metadata = {
  title: "Metastatic Treatment Options | NLMSF",
  description:
    "Evidence-based local and systemic treatment options for metastatic sarcoma, including lung, liver, and spine-directed therapies.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function MetastaticTreatmentOptionsPage() {
  return (
    <div className="mto-page">
      <section className="hero">
        <div className="badge">
          <i className="fas fa-procedures" aria-hidden />
          <span>Advanced Care Pathways</span>
        </div>
        <h1 className="hero-title">Metastatic Treatment Options</h1>
        <div className="divider" aria-hidden />
        <p className="hero-description">
          Evidence-based local and systemic treatment options for metastatic sarcoma, including lung, liver, and spine-directed therapies.
        </p>
        <div className="feature-tags">
          <div className="feature-tag blue">
            <i className="fas fa-lungs" aria-hidden />
            <span>Lung</span>
          </div>
          <div className="feature-tag indigo">
            <i className="fas fa-liver" aria-hidden />
            <span>Liver</span>
          </div>
          <div className="feature-tag teal">
            <i className="fas fa-bone" aria-hidden />
            <span>Spine</span>
          </div>
        </div>
      </section>

      <div className="wp-lms-container">
        <aside className="page-nav">
          <h3 className="sidebar-title">Page Contents</h3>
          <div className="nav-section section-local">
            <a href="#local-therapies" className="nav-link">Local Therapies (Overview)</a>
          </div>
          <div className="nav-section section-lung">
            <a href="#lung-metastases" className="nav-link">Lung Metastases</a>
          </div>
          <div className="nav-section section-liver">
            <a href="#liver-metastases" className="nav-link">Liver Metastases</a>
          </div>
          <div className="nav-section section-spine">
            <a href="#spinal-metastases" className="nav-link">Spinal Metastases</a>
          </div>
        </aside>

        <div className="main-content">
          <div id="local-therapies" className="content-section">
            <h2 className="section-title indigo">Local Therapies for Metastatic Sarcoma</h2>
            <div className="content-panel indigo">
              <div className="panel-header">
                <div className="icon-circle indigo"><i className="fas fa-clipboard-list" aria-hidden /></div>
                <div>
                  <h3>Why, When, and How?</h3>
                  <p>Framework for integrating local therapies into metastatic sarcoma care.</p>
                </div>
              </div>
              <p className="panel-text">
                Local therapies (surgery, radiation, ablation, embolization) can provide durable control and symptom relief in selected patients with oligometastatic or limited-progression disease, often in conjunction with systemic therapy.
              </p>
              <ul className="bullet-list indigo">
                <li>Patient selection and timing are critical; multidisciplinary review is essential.</li>
                <li>Goals include prolonging progression-free survival, palliation, or enabling systemic therapy breaks.</li>
              </ul>
              <div className="research-box">
                <div className="research-header">
                  <div className="research-icon"><i className="fas fa-file-alt" aria-hidden /></div>
                  <h4>Reference</h4>
                </div>
                <a className="research-link" href="https://ascopubs.org/doi/10.1200/EDBK_390554" {...ext}>
                  ASCO Educational Book — Local Therapies for Metastatic Sarcoma: Why, When, and How?
                  <i className="fas fa-external-link-alt" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div id="lung-metastases" className="content-section">
            <h2 className="section-title blue">Lung Metastases Treatment</h2>
            <div className="space-y">
              <div className="content-panel blue">
                <div className="panel-header">
                  <div className="icon-circle blue"><i className="fas fa-lungs" aria-hidden /></div>
                  <div>
                    <h3>Overview and Outcomes</h3>
                    <p>Strategies include surgery, SBRT, and ablative techniques.</p>
                  </div>
                </div>
                <ul className="bullet-list blue">
                  <li><a className="resource-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5028117/" {...ext}>Pulmonary metastasectomy in soft tissue sarcoma — outcomes and selection</a></li>
                  <li><a className="resource-link" href="https://ro-journal.biomedcentral.com/articles/10.1186/s13014-023-02226-3" {...ext}>Stereotactic radiotherapy for sarcoma lung metastases</a></li>
                  <li><a className="resource-link" href="https://www.redjournal.org/article/S0360-3016(23)08023-9/abstract" {...ext}>SBRT evidence in oligometastatic disease (Red Journal)</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="liver-metastases" className="content-section">
            <h2 className="section-title teal">Liver Metastases Treatment</h2>
            <div className="space-y">
              <div className="content-panel teal">
                <div className="panel-header">
                  <div className="icon-circle teal"><i className="fas fa-liver" aria-hidden /></div>
                  <div>
                    <h3>Embolization</h3>
                    <p>Catheter-directed therapy to restrict tumor blood supply.</p>
                  </div>
                </div>
                <p className="panel-text">May be considered for unresectable lesions, symptom control, or progression confined to the liver.</p>
                <ul className="bullet-list teal">
                  <li><a className="resource-link" href="https://nyulangone.org/conditions/liver-cancer-liver-metastases/treatments/embolization-for-liver-cancer-liver-metastases" {...ext}>NYU Langone: Embolization for Liver Metastases</a></li>
                </ul>
              </div>
              <div className="content-panel teal">
                <div className="panel-header">
                  <div className="icon-circle teal"><i className="fas fa-burn" aria-hidden /></div>
                  <div>
                    <h3>Ablation Therapies</h3>
                    <p>Thermal or chemical destruction of tumor tissue.</p>
                  </div>
                </div>
                <p className="panel-text">Options include radiofrequency, microwave, or cryoablation, often for limited number/size lesions.</p>
                <ul className="bullet-list teal">
                  <li><a className="resource-link" href="https://nyulangone.org/conditions/liver-cancer-liver-metastases/treatments/ablation-therapies-for-liver-metastases" {...ext}>NYU Langone: Ablation Therapies for Liver Metastases</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="spinal-metastases" className="content-section">
            <h2 className="section-title amber">Spinal Metastatic Disease</h2>
            <div className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber"><i className="fas fa-bone" aria-hidden /></div>
                <div>
                  <h3>Treatment Progress and Quality of Life</h3>
                  <p>Modern approaches to control pain, maintain function, and stabilize spine.</p>
                </div>
              </div>
              <ul className="bullet-list amber">
                <li><a className="resource-link" href="https://www.mdpi.com/2072-6694/17/8/1296" {...ext}>Treatment progress of spinal metastatic cancer (Cancers, 2025)</a></li>
                <li><a className="resource-link" href="https://josr-online.biomedcentral.com/articles/10.1186/s13018-023-03975-3" {...ext}>Review of spinal metastasis management (J Orthop Surg Res, 2023)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
