import type { Metadata } from "next";
import Image from "next/image";
import "./staging-lms-tumors-staged2.css";

export const metadata: Metadata = {
  title: "Leiomyosarcoma Staging | NLMSF",
  description:
    "Staging guidance, tumor grading basics, genetic testing notes, and treatment planning by stage.",
};

export default function StagingLmsTumorsStaged2Page() {
  return (
    <main className="lms-staging-page">
      <section className="lms-hero">
        <div className="lms-hero-inner">
          <p className="lms-hero-badge">Patient Education</p>
          <h1>Leiomyosarcoma Staging</h1>
          <p>
            A practical overview of how leiomyosarcoma is staged, how grading works, and how staging
            informs treatment planning and follow‑up care.
          </p>
          <div className="lms-hero-actions">
            <a href="#staging-overview" className="lms-btn lms-btn-primary">
              Start with Staging Basics
            </a>
            <a href="#stage-treatments" className="lms-btn lms-btn-outline">
              View Treatment Table
            </a>
          </div>
        </div>
      </section>

      <section id="genetic-testing" className="lms-section">
        <div className="lms-card lms-card-accent">
          <h2>Testing Your Tumor for Cancer-Related Genes</h2>
          <p>
            Molecular/genomic testing for sarcoma-related genes may not be for everyone, but by
            staying informed and continuing to ask important questions about such testing
            availability allows you to self-advocate. Make sure that every avenue for testing your
            tumor tissue is explored — potentially making a difference in the cutting-edge
            treatment options and targeted therapies/immunotherapies that might be available to you.
          </p>
          <div className="lms-video-card">
            <div className="lms-video-thumb">
              <a
                href="https://www.youtube.com/watch?v=Dmb8fyzKUgQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://img.youtube.com/vi/Dmb8fyzKUgQ/hqdefault.jpg"
                  alt="The Role of Genetic Test in Soft Tissue Sarcoma"
                  width={640}
                  height={360}
                  sizes="(min-width: 900px) 480px, 100vw"
                />
                <span className="lms-video-play">
                  <i className="fas fa-play-circle" aria-hidden />
                </span>
              </a>
            </div>
            <div className="lms-video-body">
              <h3>The Role of Genetic Test in Soft Tissue Sarcoma</h3>
              <a
                href="https://www.youtube.com/watch?v=Dmb8fyzKUgQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch presentation
              </a>
            </div>
          </div>
          <p className="lms-link">
            Historical information on genomic testing for sarcomas:{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/16359533/" target="_blank" rel="noopener noreferrer">
              PubMed article
            </a>
          </p>
        </div>
      </section>

      <section id="staging-overview" className="lms-section">
        <div className="lms-card">
          <h2>How is Leiomyosarcoma Staged?</h2>
          <p>
            The process of finding out how far leiomyosarcoma has spread is called staging. In
            sarcoma staging, doctors also evaluate the appearance of the tumor under the microscope
            and judge how fast the cancer seems to be growing. The stage of a sarcoma is the most
            significant factor in determining each patient’s prognosis and in selecting treatment
            options.
          </p>
          <p>
            The information needed to stage sarcomas includes biopsies and imaging tests of the main
            tumor (usually with CT or MRI scans) and other parts of the body where the cancer may
            have spread. When examining the biopsy sample, the pathologist determines the cell type
            and grade and estimates how rapidly it will grow and spread.
          </p>
          <div className="lms-pill-grid">
            <span className="lms-pill">T = Tumor size</span>
            <span className="lms-pill">N = Lymph node spread</span>
            <span className="lms-pill">M = Metastasis</span>
            <span className="lms-pill">G = Grade (FNCLCC)</span>
          </div>
        </div>
      </section>

      <section id="grading" className="lms-section">
        <div className="lms-card">
          <h2>Grade (G) and the FNCLCC System</h2>
          <p>
            In soft tissue sarcomas, grade is part of the tumor’s stage. Under the French (FNCLCC)
            system, grade is based on three factors:
          </p>
          <ul className="lms-list">
            <li>
              <strong>Differentiation:</strong> how closely cells resemble normal cells (score 1–3)
            </li>
            <li>
              <strong>Mitotic count:</strong> how many cells are actively dividing (score 1–3)
            </li>
            <li>
              <strong>Tumor necrosis:</strong> how much of the tumor is dying tissue (score 0–2)
            </li>
          </ul>
          <p>
            The scores are added to determine the grade. Higher-grade cancers tend to grow and spread
            faster than lower-grade cancers.
          </p>
        </div>
      </section>

      <section id="stage-treatments" className="lms-section">
        <div className="lms-card">
          <h2>Staging the Tumor Once It Is Found</h2>
          <p className="lms-note">
            From the NCCN Guidelines for Patients (2020):{" "}
            <a
              href="https://www.nccn.org/patients/guidelines/content/PDF/sarcoma-patient.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sarcoma Patient Guidelines (PDF)
            </a>
          </p>
          <div className="lms-table">
            <div className="lms-row lms-row-head">
              <div>Stage</div>
              <div>Primary Treatment Options</div>
              <div>Follow Up Care</div>
            </div>
            <div className="lms-row">
              <div>Stage 1 (1A/1B)</div>
              <div>
                Low-grade tumor surgery. Recommendations for more treatment depend on margins and
                fascia involvement.
              </div>
              <div>
                Rehabilitation if needed. Imaging (CT/CT‑PET), lung surveillance, genetic test of
                tumor, regular imaging of primary site, blood work.
              </div>
            </div>
            <div className="lms-row">
              <div>Stage 2 (Grade 2–3)</div>
              <div>
                Surgery; surgery following radiation; radiation followed by surgery. Treatment
                depends on location, size, and overall health.
              </div>
              <div>
                Regular imaging every 3–6 months for 2–3 years; every 6 months for 2 years; then
                annually.
              </div>
            </div>
            <div className="lms-row">
              <div>Stage 3 (III A/B)</div>
              <div>
                Surgery followed by radiation/adjuvant chemo; chemo or radiation before surgery, then
                radiation boost ± chemo.
              </div>
              <div>Same as Stage 2 follow-up.</div>
            </div>
            <div className="lms-row">
              <div>Stage 4 (Confined)</div>
              <div>
                Treatment as in Stages 2–3. Surgery to remove metastases ± chemo or radiation, SBRT,
                ablation, embolization, or observation.
              </div>
              <div>Imaging cycles as in Stages 2–3; regular imaging of primary site.</div>
            </div>
            <div className="lms-row">
              <div>Stage 4 (Widespread)</div>
              <div>Chemotherapy, radiation therapy/SBRT, surgery, or observation if no symptoms.</div>
              <div>Same follow-up as Stage 4 confined.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="recurrence" className="lms-section">
        <div className="lms-card">
          <h2>Recurrence</h2>
          <div className="lms-table">
            <div className="lms-row lms-row-head">
              <div>Location</div>
              <div>Treatment Options</div>
            </div>
            <div className="lms-row">
              <div>Local</div>
              <div>Testing; treatment based on stage; more treatment as listed above.</div>
            </div>
            <div className="lms-row">
              <div>Isolated</div>
              <div>
                Regional disease or lymph nodes, regional node dissection with or without radiation,
                with or without chemotherapy, SBRT, isolated limb infusion/perfusion plus surgery.
              </div>
            </div>
            <div className="lms-row">
              <div>Widespread</div>
              <div>
                Palliative chemotherapy, palliative radiation therapy, SBRT, ablation, embolization,
                or observation if no symptoms.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planning" className="lms-section">
        <div className="lms-card lms-card-muted">
          <h2>Treatment Planning & Quality of Life</h2>
          <p>
            Treatment planning is important in the first steps of care. All such planning is always
            case-specific — it is not a “one size fits all” situation. Being proactive in your care
            is important, which means knowing as much as you can and asking the right questions
            along the way.
          </p>
          <p>
            For quality of life maintenance/rebuilding: discuss integrative medicine and survivorship
            care planning with your oncologist. Sarcoma centers may have supportive resources
            available in survivorship clinics for patients and families.
          </p>
        </div>
      </section>
    </main>
  );
}
