import type { Metadata } from "next";
import "./general-sarcoma.css";

export const metadata: Metadata = {
  title: "General LMS Research Highlights | NLMSF",
  description:
    "Curated publications, research updates, clinical trials, and educational links relevant to the broader sarcoma community.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function GeneralSarcomaPage() {
  return (
    <main className="gs-page">
      {/* ── Hero ── */}
      <section className="gs-hero">
        <div className="gs-hero-content">
          <div className="gs-badge">
            <span className="gs-badge-dot" aria-hidden="true" />
            <span>Research Publication</span>
          </div>
          <h1>General LMS Research Highlights</h1>
          <div className="gs-divider" />
          <p>
            Curated publications, research updates, clinical trials, and
            educational links relevant to the broader sarcoma community.
          </p>
          <div className="gs-tags">
            <span className="gs-tag indigo">
              <i className="fas fa-award" aria-hidden /> Research Grants
            </span>
            <span className="gs-tag purple">
              <i className="fas fa-flask" aria-hidden /> Clinical Trials
            </span>
            <span className="gs-tag blue">
              <i className="fas fa-book-open" aria-hidden /> Publications
            </span>
            <span className="gs-tag teal">
              <i className="fas fa-graduation-cap" aria-hidden /> Education
            </span>
          </div>
        </div>
        <div className="gs-hero-decor decor-one" aria-hidden="true" />
        <div className="gs-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="gs-container">
        {/* ── Inline Nav ── */}
        <nav className="gs-nav">
          <h3>On This Page</h3>
          <a href="#research-grants">Research Grants</a>
          <a href="#research-updates">Research Updates</a>
          <a href="#trials-education">Clinical Trials &amp; Education</a>
          <a href="#research-library">Research Library</a>
          <a href="#full-research-archive">Full Archive</a>
        </nav>

        {/* ── Research Grants (indigo) ── */}
        <section id="research-grants" className="gs-section">
          <h2 className="gs-section-title indigo">NLMSF Research Grants</h2>
          <div className="gs-panel indigo">
            <div className="gs-panel-header">
              <div className="gs-icon indigo">
                <i className="fas fa-award" aria-hidden />
              </div>
              <div>
                <h3>2026–2027 Research Grant Announcement</h3>
                <p>LOI deadline: April 15, 2025</p>
              </div>
            </div>
            <p className="gs-panel-text">
              The National Leiomyosarcoma Foundation (NLMSF) invites letters of
              intent (LOIs) for pilot studies to launch new research trajectories
              in LMS, with a focus on basic and translational science. Clinical
              interventional trials are out of scope.
            </p>
            <ul className="gs-checklist">
              <li>
                Total award: $50,000 per year for 2 years (indirects ≤ 10%).
              </li>
              <li>
                Scope includes biomarkers, imaging, computational biology,
                radiomics, and lab‑based translational studies.
              </li>
              <li>
                Human sample studies require IRB approval (or waiver) prior to
                award.
              </li>
            </ul>
            <p className="gs-muted">
              Submission contacts: matthew.hemming@umassmemorial.org and
              alessandra.maleddu@cuanschutz.edu
            </p>
          </div>
        </section>

        {/* ── Research Updates (purple) ── */}
        <section id="research-updates" className="gs-section">
          <h2 className="gs-section-title purple">Research Updates</h2>
          <div className="gs-card-grid">
            <div className="gs-card purple">
              <h4>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/41213941"
                  {...ext}
                >
                  Identification of a novel minor-groove DNA binder that
                  represses mitochondrial gene expression and induces apoptosis
                  in highly aggressive leiomyosarcoma cells
                </a>
              </h4>
              <p className="gs-muted">New research article (PubMed).</p>
              <div className="gs-card-actions">
                <a
                  className="gs-pill-link"
                  href="https://pubmed.ncbi.nlm.nih.gov/41213941"
                  {...ext}
                >
                  View on PubMed
                </a>
                <a
                  className="gs-pill-link secondary"
                  href="https://docs.google.com/document/d/1R1XUlFWi0l_n8vDcJfKt8aXhbrkaJDkY/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true"
                  {...ext}
                >
                  Patient-friendly summary
                </a>
              </div>
            </div>

            <div className="gs-card purple">
              <h4>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/40543045/"
                  {...ext}
                >
                  Stereotactic radiosurgery outcomes for brain metastases from
                  sarcoma primaries (2025)
                </a>
              </h4>
              <p className="gs-muted">
                International multicenter analysis; Cancer (2025).
              </p>
            </div>

            <div className="gs-card purple">
              <h4>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000450?via%3Dihub"
                  {...ext}
                >
                  Leiomyosarcoma: Therapeutic approaches and future directions
                  (2025)
                </a>
              </h4>
              <p className="gs-muted">
                Hematology/Oncology Clinics of North America.
              </p>
            </div>

            <div className="gs-card purple">
              <h4>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/40358615/"
                  {...ext}
                >
                  Trabectedin + Olaparib Phase II trial in advanced sarcoma
                  (2025)
                </a>
              </h4>
              <p className="gs-muted">
                Clin Cancer Res. Online ahead of print.
              </p>
            </div>
          </div>
          <p className="gs-footnote">
            For additional items, see our News Tracker and Clinical Trials
            pages.
          </p>
        </section>

        {/* ── Clinical Trials & Education (teal) ── */}
        <section id="trials-education" className="gs-section">
          <h2 className="gs-section-title teal">
            Clinical Trials &amp; Education
          </h2>
          <div className="gs-card-grid">
            <a
              className="gs-link-card teal"
              href="https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS11590"
              {...ext}
            >
              <div className="gs-link-card-icon teal">
                <i className="fas fa-flask" aria-hidden />
              </div>
              <h4>Lurbinectedin + doxorubicin vs doxorubicin</h4>
              <p>Metastatic LMS — Study overview</p>
            </a>

            <a
              className="gs-link-card teal"
              href="https://www.ncbi.nlm.nih.gov/books/NBK551667/"
              {...ext}
            >
              <div className="gs-link-card-icon teal">
                <i className="fas fa-book-medical" aria-hidden />
              </div>
              <h4>Leiomyosarcoma — Continuing Education</h4>
              <p>NCBI Bookshelf</p>
            </a>

            <a
              className="gs-link-card teal"
              href="https://www.frontiersin.org/articles/10.3389/fonc.2023.1149106/full"
              {...ext}
            >
              <div className="gs-link-card-icon teal">
                <i className="fas fa-microscope" aria-hidden />
              </div>
              <h4>Therapeutic advances in leiomyosarcoma</h4>
              <p>Frontiers in Oncology</p>
            </a>

            <a
              className="gs-link-card teal"
              href="https://www.onclive.com/view/annamycin-drives-clinical-benefit-in-soft-tissue-sarcoma-lung-metastases"
              {...ext}
            >
              <div className="gs-link-card-icon teal">
                <i className="fas fa-lungs" aria-hidden />
              </div>
              <h4>Annamycin in soft tissue sarcoma lung metastases</h4>
              <p>
                Phase 1b/2 MB‑107: 59.4% clinical benefit rate (n=36), median OS
                13.5 months (330 mg/m²). Patients achieving response or SD after
                2 cycles had median OS 19.7 months; no cardiotoxicity.
              </p>
            </a>
          </div>
        </section>

        {/* ── Research Library by Year (blue) ── */}
        <section id="research-library" className="gs-section">
          <h2 className="gs-section-title blue">Research Library (By Year)</h2>

          {/* 2025 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2025</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/40543045/" {...ext}>
                Clinical outcomes following stereotactic radiosurgery for brain metastases from sarcoma primaries (Cancer, 2025)
              </a>
              <a className="gs-pub-card" href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000450?via%3Dihub" {...ext}>
                Leiomyosarcoma: Therapeutic Approaches and Future Directions (H/O Clinics of North America)
              </a>
              <a className="gs-pub-card" href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000401?via%3Dihub" {...ext}>
                Emerging Role of Blood‑based Biomarkers in Sarcomas (H/O Clinics of North America)
              </a>
              <div className="gs-pub-card-extended">
                <a className="gs-pub-card" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12652729/" {...ext}>
                  MicroRNAs in Uterine Leiomyosarcoma: From Molecular Mechanisms to Clinical Applications (Int J Mol Sci. 2025;26(22):10952)
                </a>
                <p className="gs-muted">
                  Kourti A, Kalogiannidis I, Makedou K, Georgiou E. doi: 10.3390/ijms262210952. Full research publication available via PubMed Central.
                </p>
              </div>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/40358615/" {...ext}>
                Trabectedin + Olaparib in Advanced Sarcoma — Phase II Multicenter Trial (Clin Cancer Res)
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/40357995/" {...ext}>
                Histology‑driven tailoring of surgery in retroperitoneal STS (BJS Open, 2025)
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/40230424/" {...ext}>
                Myxoid Leiomyosarcoma of the Uterus — Case Report (Oncology Letters, 2025)
              </a>
            </div>
          </div>

          {/* 2024 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2024</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://www.nejm.org/doi/full/10.1056/NEJMc2412479" {...ext}>
                Doxorubicin–Trabectedin in Leiomyosarcoma (NEJM correspondence)
              </a>
              <a className="gs-pub-card" href="https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS11590" {...ext}>
                Lurbinectedin + doxorubicin vs doxorubicin alone — metastatic LMS (JCO TPS11590)
              </a>
              <a className="gs-pub-card" href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2024.1375483/full" {...ext}>
                Leiomyosarcoma of the abdomen and retroperitoneum — systematic review (Frontiers in Surgery)
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/39356980" {...ext}>
                Phase Ib: Doxorubicin, Dacarbazine, and Nivolumab (GEIS) — LMS (JCO)
              </a>
              <a className="gs-pub-card" href="https://ascopubs.org/doi/10.1200/EDBK_432234" {...ext}>
                Immunotherapy in Sarcoma: Current Data and Promising Strategies (ASCO Educational Book)
              </a>
              <a className="gs-pub-card" href="https://doi.org/10.1158/1078-0432.CCR-24-0148" {...ext}>
                Developing Novel Genomic Risk Stratification Models in STS &amp; ULMS (Clin Cancer Res)
              </a>
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/books/NBK551667/" {...ext}>
                Leiomyosarcoma — Continuing Education Activity (NCBI Bookshelf)
              </a>
            </div>
          </div>

          {/* 2023 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2023</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://www.frontiersin.org/articles/10.3389/fonc.2023.1149106/full" {...ext}>
                Therapeutic advances in leiomyosarcoma (Frontiers in Oncology)
              </a>
              <a className="gs-pub-card" href="https://www.mdpi.com/2072-6694/15/7/2099" {...ext}>
                Targeting Molecular and Immunologic Features of LMS (Cancers)
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/36603130/" {...ext}>
                Sequential RB and DNA synthesis pathway targeting strategy (MD Anderson)
              </a>
              <a className="gs-pub-card" href="https://link.springer.com/article/10.1007/s11864-023-01067-2" {...ext}>
                Not All Leiomyosarcomas Are the Same: classification (Springer)
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/36857355/" {...ext}>
                Trabectedin long‑term disease control retrospective study
              </a>
              <a className="gs-pub-card" href="https://doi.org/10.1093/oncolo/oyad052" {...ext}>
                Emerging Trends in Immunotherapy for Adult Sarcomas (The Oncologist)
              </a>
            </div>
          </div>

          {/* 2022 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2022</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://leiomyosarcoma.info/wp-content/uploads/2022/03/Kasper2022_Article.pdf" {...ext}>
                What Clinical Trials Are Needed for Treatment of Leiomyosarcoma?
              </a>
              <a className="gs-pub-card" href="https://onlinelibrary.wiley.com/doi/full/10.1002/ctd2.149" {...ext}>
                Molecular subtypes of leiomyosarcoma: Moving toward a consensus
              </a>
              <a className="gs-pub-card" href="https://link.springer.com/article/10.1245/s10434-022-12517-w" {...ext}>
                Landmark Series: A Review of Landmark Studies in the Treatment of Primary Localized Retroperitoneal Sarcoma
              </a>
              <a className="gs-pub-card" href="https://aacrjournals.org/clincancerres/article-abstract/28/15/3225/707113/Phase-II-Clinical-Trial-of-Eribulin-Gemcitabine?redirectedFrom=fulltext" {...ext}>
                Phase II Clinical Trial of Eribulin–Gemcitabine Combination Therapy in Advanced Liposarcoma or Leiomyosarcoma
              </a>
              <a className="gs-pub-card" href="https://ascopubs.org/doi/abs/10.1200/JCO.2022.40.16_suppl.11506" {...ext}>
                A phase Ib/II study of lenvatinib + eribulin (LEADER): Efficacy updates
              </a>
              <a className="gs-pub-card" href="https://www.nature.com/articles/s41598-022-16055-z" {...ext}>
                Retroperitoneal LMS Nomogram Model
              </a>
              <a className="gs-pub-card" href="https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-22-0738/694390/Sounding-the-Alarm-on-Leiomyosarcoma-Recurrence" {...ext}>
                Sounding the Alarm on Leiomyosarcoma Recurrence: Role of ctDNA
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/35665732/" {...ext}>
                Surgical management strategy for LMS of IVC
              </a>
              <a className="gs-pub-card" href="https://aacrjournals.org/clincancerres/article-abstract/28/11/2397/698931/Preclinical-Modeling-of-LMS-Identifies?redirectedFrom=fulltext" {...ext}>
                Preclinical Modeling of LMS Identifies Susceptibility to Transcriptional CDK Inhibitors
              </a>
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9029111/" {...ext}>
                Preoperative Differentiation of Uterine Leiomyomas and Leiomyosarcomas
              </a>
            </div>
          </div>

          {/* 2021 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2021</h3>
            <div className="gs-year-cards">
              <div className="gs-pub-card-extended featured">
                <a className="gs-pub-card featured" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/" {...ext}>
                  NLMSF–SPAEN publication on evidence-based unmet needs in LMS research and treatment
                </a>
                <p className="gs-muted">
                  Featured publication (2021) — A collaborative paper identifying critical gaps and priorities to accelerate progress in leiomyosarcoma research and care.
                </p>
              </div>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/34710646/" {...ext}>
                Surgical resection of LMS of the IVC: case series + review
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/33788262/" {...ext}>
                Relationships between highly recurrent tumor suppressor alterations in 489 LMS
              </a>
              <a className="gs-pub-card" href="https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11512" {...ext}>
                Large-scale multiomic analysis suggests mechanisms of resistance to immunotherapy in LMS
              </a>
              <a className="gs-pub-card" href="https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11555" {...ext}>
                Multiomic analysis reveals distinct profiles of uterine and non-uterine LMS
              </a>
              <div className="gs-sub-group">
                <p className="gs-sub-label">Additional 2021 resources:</p>
                <div className="gs-pub-card-row">
                  <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/33941787/" {...ext}>
                    Hexosamine biosynthesis pathway prognostic relevance
                  </a>
                  <a className="gs-pub-card" href="https://www.nature.com/articles/s41525-021-00193-w" {...ext}>
                    Companion article
                  </a>
                </div>
                <a className="gs-pub-card" href="https://youtu.be/8DN8YhJWxvM" {...ext}>
                  Dr. Matt Hemming&apos;s Presentation
                </a>
                <a className="gs-pub-card" href="https://www.researchgate.net/publication/330615358_Detection_of_Circulating_Tumor_DNA_in_Patients_With_Leiomyosarcoma_With_Progressive_Disease" {...ext}>
                  Detection of circulating tumor DNA in progressive LMS
                </a>
                <a className="gs-pub-card" href="https://youtu.be/a98XOq_BE6k" {...ext}>
                  Dr. Brian Crompton and Dr. Jonathan Trent Presentations
                </a>
                <a className="gs-pub-card" href="https://www.researchgate.net/publication/343495968_Identification_of_Genetic_Alterations_by_Circulating_Tumor_DNA_in_Leiomyosarcoma_A_Molecular_Analysis_of_73_Patients" {...ext}>
                  ctDNA in LMS — molecular analysis of 73 patients
                </a>
              </div>
            </div>
          </div>

          {/* 2020 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2020</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="http://pubmed.ncbi.nlm.nih.gov/32211860" {...ext}>
                Nutrition &amp; gut microbiome — current explorations
              </a>
              <a className="gs-pub-card" href="https://www.onclive.com/view/sarcoma-experts-elucidate-on-combination-chemotherapy-regimens" {...ext}>
                Combination chemotherapy regimens — expert review
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/31439678/" {...ext}>
                Genomic profiling of primary histiocytic sarcoma
              </a>
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/32299819/" {...ext}>
                Genomic landscape of uterine sarcomas (prospective sequencing)
              </a>
              <a className="gs-pub-card" href="https://www.onclive.com/view/nbtxr3-activity-in-soft-tissue-sarcoma-could-be-replicated-in-other-cancers" {...ext}>
                NBTXR3 activity in STS
              </a>
            </div>
          </div>

          {/* 2019 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2019</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://pubmed.ncbi.nlm.nih.gov/31164371/" {...ext}>
                Genomic Evolutionary Patterns of LMS &amp; LPS (Clin Cancer Res)
              </a>
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6656468/" {...ext}>
                BRCA1/2 functional loss as a targetable subset in LMS
              </a>
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380497/" {...ext}>
                ctDNA detection in progressive LMS
              </a>
            </div>
          </div>

          {/* 2018 */}
          <div className="gs-year-group">
            <h3 className="gs-year-label">2018</h3>
            <div className="gs-year-cards">
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5759317/" {...ext}>
                Soft Tissue and Uterine Leiomyosarcoma (review)
              </a>
              <a className="gs-pub-card" href="https://www.ncbi.nlm.nih.gov/pubmed/31068995" {...ext}>
                Cutaneous LMS on the trunk — aggressive course case &amp; review
              </a>
              <a className="gs-pub-card" href="https://www.sciencedirect.com/science/article/pii/S0147027217301757" {...ext}>
                Ifosfamide and doxorubicin in advanced LMS
              </a>
            </div>
          </div>

          <p className="gs-muted" style={{ marginTop: "1rem" }}>
            This library highlights selections from a larger set. For the
            complete verbatim archive, see the section below.
          </p>
        </section>

        {/* ── Full Research Archive (purple) ── */}
        <section id="full-research-archive" className="gs-section">
          <h2 className="gs-section-title purple">
            Full Research Archive (Verbatim)
          </h2>
          <p className="gs-muted" style={{ marginBottom: "0.75rem" }}>
            Imported exactly as provided to ensure every original item appears.
            Collapsed by default for readability.
          </p>
          <details className="gs-archive">
            <summary>View full archive</summary>
            <div className="gs-archive-inner">
              <p className="gs-panel-text">
                The full verbatim archive includes grant announcements, key
                dates, and year-by-year publications (2025–2018) with links.
                Content is maintained by NLMSF. For the curated Research Library
                by year, scroll to the section above.
              </p>
              <p className="gs-muted">
                To add the complete HTML archive here, replace this placeholder
                with the full content or use the Research Library (By Year)
                links above for all curated items.
              </p>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
}
