import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import LiveTrials from "./LiveTrials";
import "./uterine-lms.css";

export const metadata: Metadata = {
  title: "Uterine Leiomyosarcoma | NLMSF",
  description:
    "Clinically relevant research, reviews, clinical trials, and education focused on uterine leiomyosarcoma.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function UterineLmsPage() {
  return (
    <main className="ulms-page">
      {/* Hero */}
      <section className="ulms-hero">
        <div className="ulms-hero-content">
          <div className="ulms-badge">
            <span className="ulms-badge-dot" aria-hidden="true" />
            <span>NLMSF Research Hub</span>
          </div>
          <h1>Uterine Leiomyosarcoma (uLMS)</h1>
          <div className="ulms-divider" />
          <p>
            Clinically relevant research, reviews, clinical trials, and education
            focused on uterine leiomyosarcoma.
          </p>
          <div className="ulms-tags">
            <span className="ulms-tag indigo">
              <i className="fas fa-dna" aria-hidden /> Genomics
            </span>
            <span className="ulms-tag purple">
              <i className="fas fa-flask" aria-hidden /> Clinical Trials
            </span>
            <span className="ulms-tag blue">
              <i className="fas fa-book-medical" aria-hidden /> Reviews
            </span>
          </div>
        </div>
        <div className="ulms-hero-decor decor-one" aria-hidden="true" />
        <div className="ulms-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="ulms-container">
        {/* Nav */}
        <nav className="ulms-nav">
          <h3>On This Page</h3>
          <a href="#ijgc-review">IJGC 2025 Review</a>
          <a href="#featured">Featured Publication</a>
          <a href="#genomic">Genomic Risk</a>
          <a href="#targeted">Targeted Therapy</a>
          <a href="#hormone">Hormone Therapy</a>
          <a href="#trials">Clinical Trials</a>
          <a href="#staging">Staging &amp; Treatment</a>
          <a href="#more">More Research</a>
        </nav>

        {/* IJGC Review — the most important/comprehensive piece */}
        <section id="ijgc-review" className="ulms-section">
          <h2 className="ulms-section-title purple">
            International Panel Review (IJGC 2025)
          </h2>
          <div className="ulms-panel purple">
            <div className="ulms-panel-header">
              <div className="ulms-icon purple">
                <i className="fas fa-file-medical-alt" aria-hidden />
              </div>
              <div>
                <h3>Uterine Leiomyosarcoma — International Panel Review</h3>
                <p>
                  International Journal of Gynecological Cancer · September 2025
                </p>
              </div>
            </div>
            <div className="ulms-review-grid">
              <div className="ulms-review-card">
                <h4>Biology</h4>
                <p>
                  Multifactorial pathogenesis with complex cytogenetic/molecular
                  alterations (TP53, RB1; chromothripsis patterns).
                </p>
              </div>
              <div className="ulms-review-card">
                <h4>Diagnosis</h4>
                <p>
                  Preoperative distinction from leiomyoma remains difficult;
                  MRI/CT assist but no single definitive test. Avoid morcellation
                  when malignancy is suspected.
                </p>
              </div>
              <div className="ulms-review-card">
                <h4>Primary Treatment</h4>
                <p>
                  Stage I: en bloc total hysterectomy +/- BSO; routine
                  lymphadenectomy not indicated without bulky nodes.
                  Multidisciplinary care emphasized.
                </p>
              </div>
              <div className="ulms-review-card">
                <h4>Advanced / Recurrent</h4>
                <p>
                  Aim for complete resection when feasible; adjuvant chemo/RT
                  evidence is mixed. Systemic options are doxorubicin-based;
                  consider RT and multimodal strategies.
                </p>
              </div>
              <div className="ulms-review-card">
                <h4>Follow-up</h4>
                <p>
                  Regular clinical and imaging surveillance due to high early
                  recurrence risk; patterns often distant (lung/liver).
                </p>
              </div>
              <div className="ulms-review-card">
                <h4>Guidelines</h4>
                <p>
                  ESGO/EURACAN/GCIG recommendations summarized; notable
                  international practice differences persist.
                </p>
              </div>
            </div>
            <a
              href="https://www.international-journal-of-gynecological-cancer.com/article/S1048-891X(25)01112-0/fulltext"
              className="ulms-cta-btn"
              {...ext}
            >
              <i className="fas fa-external-link-alt" aria-hidden />
              Read the Full IJGC 2025 Review
            </a>
          </div>
        </section>

        {/* Featured Publication */}
        <section id="featured" className="ulms-section">
          <h2 className="ulms-section-title indigo">Featured Publication</h2>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11578816"
            className="ulms-featured-link"
            {...ext}
          >
            <div className="ulms-featured-img">
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2025/11/research-uterine.png"
                alt="Uterine LMS research"
                width={320}
                height={240}
              />
            </div>
            <div className="ulms-featured-body">
              <span className="ulms-pub-tag">PMC · November 2024</span>
              <h3>
                Uterine Smooth Muscle Tumors of Uncertain Malignant Potential — A
                13-Year Retrospective Study
              </h3>
              <p>
                Comprehensive retrospective study informing diagnosis and
                management for uterine smooth muscle tumors of uncertain malignant
                potential.
              </p>
            </div>
          </a>
        </section>

        {/* Two-column: Genomic + Targeted */}
        <div className="ulms-two-col">
          <section id="genomic" className="ulms-section">
            <h2 className="ulms-section-title indigo">
              Genomic Risk Stratification
            </h2>
            <div className="ulms-panel indigo">
              <div className="ulms-panel-header">
                <div className="ulms-icon indigo">
                  <i className="fas fa-dna" aria-hidden />
                </div>
                <div>
                  <h3>Novel Risk Models for LMS</h3>
                  <p>Addressing heterogeneity gaps in current tools</p>
                </div>
              </div>
              <div className="ulms-article">
                <h4>Developing Novel Genomic Risk Stratification Models</h4>
                <p>
                  Dermawan JK et al. propose a clinically applicable genomic risk
                  model for LMS, addressing heterogeneity and current gaps.
                </p>
                <a
                  href="https://aacrjournals.org/clincancerres/article-abstract/30/10/2260/745180/Developing-Novel-Genomic-Risk-Stratification?redirectedFrom=fulltext"
                  className="ulms-link"
                  {...ext}
                >
                  Clinical Cancer Research (2024)
                </a>
              </div>
              <div className="ulms-article">
                <h4>
                  Transcriptome Profiling: Leiomyoma-Like Program Indicates
                  Better Survival
                </h4>
                <p>
                  Multi-cohort transcriptomic profiling identifies a subset of
                  uterine LMS with a leiomyoma-like expression pattern associated
                  with more favorable outcomes.
                </p>
                <a
                  href="https://www.nature.com/articles/s44276-025-00190-x"
                  className="ulms-link"
                  {...ext}
                >
                  Nature (2025)
                </a>
              </div>
            </div>
          </section>

          <section id="targeted" className="ulms-section">
            <h2 className="ulms-section-title blue">
              Targeted Therapy
            </h2>
            <div className="ulms-panel blue">
              <div className="ulms-panel-header">
                <div className="ulms-icon blue">
                  <i className="fas fa-crosshairs" aria-hidden />
                </div>
                <div>
                  <h3>The Future of Targeted Therapy for LMS</h3>
                  <p>MD Anderson Cancer Center · 2024 Review</p>
                </div>
              </div>
              <p className="ulms-panel-text">
                Explores DNA damage response, macrophage-rich microenvironment,
                PI3K/mTOR pathway, epigenetic regulators, and telomere biology as
                therapeutic targets.
              </p>
              <a
                href="https://www.mdpi.com/2072-6694/16/5/938"
                className="ulms-link"
                {...ext}
              >
                Cancers (2024) · Full Text
              </a>
            </div>
          </section>
        </div>

        {/* Hormone Therapy */}
        <section id="hormone" className="ulms-section">
          <h2 className="ulms-section-title purple">
            Hormone Therapy: Aromatase Inhibitors
          </h2>
          <div className="ulms-panel purple">
            <div className="ulms-panel-header">
              <div className="ulms-icon purple">
                <i className="fas fa-pills" aria-hidden />
              </div>
              <div>
                <h3>Letrozole and AI Use in uLMS</h3>
                <p>Expert insight from Dana-Farber Cancer Institute</p>
              </div>
            </div>
            <div className="ulms-qa">
              <div className="ulms-q">
                <strong>Q:</strong> Is Letrozole best for stage I/II uLMS or
                advanced stages III/IV?
              </div>
              <div className="ulms-a">
                <strong>A:</strong> Letrozole has been best studied (though small
                studies) in the metastatic setting. It is really not clear how much
                benefit these drugs have, but anecdotally patients can benefit.
                <span className="ulms-attribution">
                  — Matt Hemming, MD, Dana-Farber / LMS Research Roundtable
                </span>
              </div>
            </div>
            <div className="ulms-link-grid">
              <a
                href="https://acsjournals.onlinelibrary.wiley.com/doi/epdf/10.1002/cncr.28476"
                className="ulms-link-card"
                {...ext}
              >
                <span className="ulms-link-label">DFCI Publication</span>
                <span>Cancer Journal</span>
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/19932916/"
                className="ulms-link-card"
                {...ext}
              >
                <span className="ulms-link-label">AI Treatment</span>
                <span>Advanced uLMS</span>
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/24222211/"
                className="ulms-link-card"
                {...ext}
              >
                <span className="ulms-link-label">Phase II Letrozole</span>
                <span>ER/PR+ uLMS</span>
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/25018868/"
                className="ulms-link-card"
                {...ext}
              >
                <span className="ulms-link-label">Hormone-Positive uLMS</span>
                <span>Aromatase Inhibitors</span>
              </a>
            </div>
          </div>
        </section>

        {/* Live Clinical Trials from ClinicalTrials.gov */}
        <section id="trials" className="ulms-section">
          <h2 className="ulms-section-title indigo">
            Recruiting Clinical Trials
          </h2>
          <div className="ulms-panel indigo">
            <div className="ulms-panel-header">
              <div className="ulms-icon indigo">
                <i className="fas fa-flask" aria-hidden />
              </div>
              <div>
                <h3>Live from ClinicalTrials.gov</h3>
                <p>Currently recruiting trials for uterine leiomyosarcoma</p>
              </div>
            </div>
            <Suspense
              fallback={
                <p className="ulms-live-loading">
                  Loading active trials from ClinicalTrials.gov…
                </p>
              }
            >
              <LiveTrials />
            </Suspense>
          </div>
        </section>

        {/* Treatment Research (static curated links) */}
        <section className="ulms-section">
          <h2 className="ulms-section-title indigo">
            Treatment Research
          </h2>
          <div className="ulms-trials-grid">
            <a
              href="https://www.onclive.com/view/olaparib-temozolomide-shows-encouraging-efficacy-manageable-safety-in-uterine-leiomyosarcoma"
              className="ulms-trial-card"
              {...ext}
            >
              <div className="ulms-trial-icon">
                <i className="fas fa-capsules" aria-hidden />
              </div>
              <h4>Temozolomide + Olaparib</h4>
              <p>Encouraging efficacy and manageable safety in uLMS</p>
              <span className="ulms-trial-source">OncLive</span>
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/35660331/"
              className="ulms-trial-card"
              {...ext}
            >
              <div className="ulms-trial-icon">
                <i className="fas fa-chart-bar" aria-hidden />
              </div>
              <h4>Adjuvant Therapy Outcomes</h4>
              <p>Utilization and outcomes for stage II &amp; III uLMS</p>
              <span className="ulms-trial-source">PubMed</span>
            </a>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S104366182300049X?via%3Dihub"
              className="ulms-trial-card"
              {...ext}
            >
              <div className="ulms-trial-icon">
                <i className="fas fa-bullseye" aria-hidden />
              </div>
              <h4>Targeting UCP2 in uLMS</h4>
              <p>Novel therapeutic strategies</p>
              <span className="ulms-trial-source">ScienceDirect</span>
            </a>
            <a
              href="https://www.prnewswire.com/news-releases/preliminary-results-presented-at-asco-demonstrated-promising-clinical-efficacy-with-unesbulin-in-leiomyosarcoma-study-301560763.html"
              className="ulms-trial-card"
              {...ext}
            >
              <div className="ulms-trial-icon">
                <i className="fas fa-star" aria-hidden />
              </div>
              <h4>Unesbulin</h4>
              <p>Promising new drug with clinical efficacy in LMS (ASCO)</p>
              <span className="ulms-trial-source">PR Newswire</span>
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/35726279/"
              className="ulms-trial-card"
              {...ext}
            >
              <div className="ulms-trial-icon">
                <i className="fas fa-prescription-bottle-alt" aria-hidden />
              </div>
              <h4>Anlotinib for Advanced Sarcomas</h4>
              <p>Long-term efficacy and safety data</p>
              <span className="ulms-trial-source">PubMed</span>
            </a>
          </div>
        </section>

        {/* Staging & Treatment */}
        <section id="staging" className="ulms-section">
          <h2 className="ulms-section-title blue">
            Staging &amp; Treatment Guidelines
          </h2>
          <div className="ulms-panel blue">
            <div className="ulms-panel-header">
              <div className="ulms-icon blue">
                <i className="fas fa-sitemap" aria-hidden />
              </div>
              <div>
                <h3>uLMS Treatment by Stage</h3>
                <p>American Cancer Society guidelines</p>
              </div>
            </div>
            <div className="ulms-stage-grid">
              <div className="ulms-stage-card">
                <span className="ulms-stage-label">Stages I &amp; II</span>
                <p>
                  Standard surgery is hysterectomy with BSO; lymph node evaluation
                  as indicated. Adjuvant radiation may reduce local recurrence;
                  chemo is considered in higher-risk cases.
                </p>
              </div>
              <div className="ulms-stage-card">
                <span className="ulms-stage-label">Stage III</span>
                <p>
                  Debulking/definitive surgery followed by radiation +/- chemo
                  depending on risk of recurrence.
                </p>
              </div>
              <div className="ulms-stage-card">
                <span className="ulms-stage-label">Stage IV</span>
                <p>
                  IVA may be operable; otherwise radiation/chemo or both. IVB
                  managed with systemic therapy; targeted therapy when appropriate.
                </p>
              </div>
            </div>
            <a
              href="https://leiomyosarcoma.info/wp-content/uploads/2022/02/Uterine-LMS-Staging-Chart-and-comprehensive-study.docx.pdf"
              className="ulms-cta-btn"
              {...ext}
            >
              <i className="fas fa-file-pdf" aria-hidden />
              Download Uterine LMS Staging Chart (PDF)
            </a>
          </div>
        </section>

        {/* More Research */}
        <section id="more" className="ulms-section">
          <h2 className="ulms-section-title indigo">More Research &amp; Videos</h2>
          <div className="ulms-more-grid">
            {/* VuMedi ASCO 2022 recording URL returned 404; NLMSF roundtable YouTube link below covers related content. */}
            <div className="ulms-more-card opacity-90 cursor-default" role="note">
              <i className="fas fa-play-circle" aria-hidden />
              <div>
                <h4>ASCO 2022: Novel Therapeutics in Uterine Sarcoma</h4>
                <p>
                  Dr. Matthew Ingham, Columbia University Medical Center — recording previously linked on VuMedi is unavailable; see the
                  roundtable video below.
                </p>
              </div>
            </div>
            <a
              href="https://youtu.be/mY2q7q5VOlA"
              className="ulms-more-card"
              {...ext}
            >
              <i className="fas fa-play-circle" aria-hidden />
              <div>
                <h4>NLMSF Patient-Caregiver Advocacy Roundtable</h4>
                <p>
                  Dr. Ingham&apos;s presentation to the NLMSF advocacy roundtable
                </p>
              </div>
            </a>
            <a
              href="https://youtu.be/62gyn3nt6Z8"
              className="ulms-more-card"
              {...ext}
            >
              <i className="fas fa-play-circle" aria-hidden />
              <div>
                <h4>uLMS Clinical Trial Update</h4>
                <p>
                  Dr. Gary Schwartz on the Phase III uLMS trial progress
                </p>
              </div>
            </a>
            <a
              href="https://www.mdpi.com/1422-0067/23/17/9728/htm"
              className="ulms-more-card"
              {...ext}
            >
              <i className="fas fa-book" aria-hidden />
              <div>
                <h4>Molecular Insights in Uterine Leiomyosarcoma</h4>
                <p>Systematic review — Int. Journal of Molecular Sciences</p>
              </div>
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/35715148/"
              className="ulms-more-card"
              {...ext}
            >
              <i className="fas fa-book" aria-hidden />
              <div>
                <h4>LMS: Current Clinical Management and Future Horizon</h4>
                <p>Comprehensive review — PubMed</p>
              </div>
            </a>
            <a
              href="https://www.mdpi.com/2075-4418/13/3/543"
              className="ulms-more-card"
              {...ext}
            >
              <i className="fas fa-search" aria-hidden />
              <div>
                <h4>Ultrasound Evaluation of Leiomyosarcoma</h4>
                <p>
                  Overlap of suspicious and non-suspicious features — single center
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
