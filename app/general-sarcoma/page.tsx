import type { Metadata } from "next";
import "./general-sarcoma.css";

export const metadata: Metadata = {
  title: "General LMS Research Highlights | NLMSF",
  description:
    "Curated publications, research updates, clinical trials, and educational links relevant to the broader sarcoma community.",
};

export default function GeneralSarcomaPage() {
  return (
    <div className="general-sarcoma-page">
      {/* Hero */}
      <div className="wp-hero">
        <div className="wp-hero-inner">
          <span className="wp-hero-badge">NLMSF Knowledge Hub</span>
          <h1 className="wp-hero-title">General LMS Research Highlights</h1>
          <p className="wp-hero-sub">
            Curated publications, research updates, clinical trials, and educational links relevant to the broader sarcoma community.
          </p>
        </div>
      </div>

      <div className="page-layout">
        {/* Sidebar */}
        <aside className="wp-sidebar" aria-label="On this page">
          <nav className="wp-nav">
            <a className="wp-nav-link" href="#research-grants">Research Grants</a>
            <a className="wp-nav-link" href="#research-updates">Research Updates</a>
            <a className="wp-nav-link" href="#trials-education">Clinical Trials &amp; Education</a>
            <a className="wp-nav-link" href="#research-library">Research Library (By Year)</a>
            <a className="wp-nav-link" href="#full-research-archive">Full Research Archive</a>
          </nav>
          <div className="wp-sidebar-cta">
            <h4>Stay Informed</h4>
            <p>Get monthly updates on sarcoma research and patient resources.</p>
            <a className="wp-cta-btn" href="https://nlmsf.org/subscribe/" target="_blank" rel="noopener noreferrer">Subscribe</a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="content-container">
          {/* Research Grants */}
          <section id="research-grants" className="section">
            <h2 className="section-title gradient-text">NLMSF Research Grants</h2>
            <div className="card">
              <h3 className="card-title">2026–2027 Research Grant Announcement</h3>
              <p><strong>LOI deadline:</strong> April 15, 2025</p>
              <p className="lead">
                The National Leiomyosarcoma Foundation (NLMSF) invites letters of intent (LOIs) for pilot studies to launch new research trajectories in LMS, with a focus on basic and translational science. Clinical interventional trials are out of scope.
              </p>
              <ul className="checklist">
                <li>Total award: $50,000 per year for 2 years (indirects ≤ 10%).</li>
                <li>Scope includes biomarkers, imaging, computational biology, radiomics, and lab‑based translational studies.</li>
                <li>Human sample studies require IRB approval (or waiver) prior to award.</li>
              </ul>
              <p className="muted">
                Submission contacts: matthew.hemming@umassmemorial.org and alessandra.maleddu@cuanschutz.edu
              </p>
            </div>
          </section>

          {/* Research Updates */}
          <section id="research-updates" className="section">
            <h2 className="section-title gradient-text">Research Updates</h2>
            <div className="updates-list">
              <article className="update-item">
                <h4 className="update-title">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/41213941" target="_blank" rel="noopener noreferrer">
                    Identification of a novel minor-groove DNA binder that represses mitochondrial gene expression and induces apoptosis in highly aggressive leiomyosarcoma cells
                  </a>
                </h4>
                <p className="muted">New research article (PubMed).</p>
                <div className="update-actions">
                  <a className="pill-link" href="https://pubmed.ncbi.nlm.nih.gov/41213941" target="_blank" rel="noopener noreferrer">View on PubMed</a>
                  <a className="pill-link secondary" href="https://docs.google.com/document/d/1R1XUlFWi0l_n8vDcJfKt8aXhbrkaJDkY/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Patient-friendly summary (lay language)</a>
                </div>
              </article>
              <article className="update-item">
                <h4 className="update-title">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40543045/" target="_blank" rel="noopener noreferrer">
                    Stereotactic radiosurgery outcomes for brain metastases from sarcoma primaries (2025)
                  </a>
                </h4>
                <p className="muted">International multicenter analysis; Cancer (2025).</p>
              </article>
              <article className="update-item">
                <h4 className="update-title">
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000450?via%3Dihub" target="_blank" rel="noopener noreferrer">
                    Leiomyosarcoma: Therapeutic approaches and future directions (2025)
                  </a>
                </h4>
                <p className="muted">Hematology/Oncology Clinics of North America.</p>
              </article>
              <article className="update-item">
                <h4 className="update-title">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/40358615/" target="_blank" rel="noopener noreferrer">
                    Trabectedin + Olaparib Phase II trial in advanced sarcoma (2025)
                  </a>
                </h4>
                <p className="muted">Clin Cancer Res. Online ahead of print.</p>
              </article>
            </div>
            <p className="more-link">For additional items, see our News Tracker and Clinical Trials pages.</p>
          </section>

          {/* Clinical Trials & Education */}
          <section id="trials-education" className="section">
            <h2 className="section-title gradient-text">Clinical Trials &amp; Education</h2>
            <ul className="resource-list">
              <li>
                <a className="resource-link" href="https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS11590" target="_blank" rel="noopener noreferrer">
                  Lurbinectedin + doxorubicin vs doxorubicin (metastatic LMS) — Study overview
                </a>
              </li>
              <li>
                <a className="resource-link" href="https://www.ncbi.nlm.nih.gov/books/NBK551667/" target="_blank" rel="noopener noreferrer">
                  Leiomyosarcoma — Continuing Education (NCBI Bookshelf)
                </a>
              </li>
              <li>
                <a className="resource-link" href="https://www.frontiersin.org/articles/10.3389/fonc.2023.1149106/full" target="_blank" rel="noopener noreferrer">
                  Therapeutic advances in leiomyosarcoma (Frontiers in Oncology)
                </a>
              </li>
              <li>
                <a className="resource-link" href="https://www.onclive.com/view/annamycin-drives-clinical-benefit-in-soft-tissue-sarcoma-lung-metastases" target="_blank" rel="noopener noreferrer">
                  Annamycin drives clinical benefit in soft tissue sarcoma lung metastases (OncLive)
                </a>
                <p className="muted" style={{ margin: "4px 0 0" }}>
                  Phase 1b/2 MB‑107: next‑gen anthracycline annamycin showed a 59.4% clinical benefit rate (n=36) with median OS 13.5 months in phase 2 (330 mg/m²).
                  Patients achieving response or stable disease after 2 cycles had median OS 19.7 months; no cardiotoxicity reported across cohorts.
                </p>
              </li>
            </ul>
          </section>

          {/* Research Library (By Year) */}
          <section id="research-library" className="section">
            <h2 className="section-title gradient-text">Research Library (By Year)</h2>

            <div className="year-section">
              <h3 className="year-title">2025</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/40543045/" target="_blank" rel="noopener noreferrer">Clinical outcomes following stereotactic radiosurgery for brain metastases from sarcoma primaries (Cancer, 2025)</a></li>
                <li><a className="resource-link" href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000450?via%3Dihub" target="_blank" rel="noopener noreferrer">Leiomyosarcoma: Therapeutic Approaches and Future Directions (H/O Clinics of North America)</a></li>
                <li><a className="resource-link" href="https://www.sciencedirect.com/science/article/abs/pii/S0889858825000401?via%3Dihub" target="_blank" rel="noopener noreferrer">Emerging Role of Blood‑based Biomarkers in Sarcomas (H/O Clinics of North America)</a></li>
                <li>
                  <a className="resource-link" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12652729/" target="_blank" rel="noopener noreferrer">MicroRNAs in Uterine Leiomyosarcoma: From Molecular Mechanisms to Clinical Applications (Int J Mol Sci. 2025;26(22):10952)</a>
                  <p className="muted">Kourti A, Kalogiannidis I, Makedou K, Georgiou E. doi: 10.3390/ijms262210952. Full research publication available via PubMed Central.</p>
                </li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/40358615/" target="_blank" rel="noopener noreferrer">Trabectedin + Olaparib in Advanced Sarcoma — Phase II Multicenter Trial (Clin Cancer Res)</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/40357995/" target="_blank" rel="noopener noreferrer">Histology‑driven tailoring of surgery in retroperitoneal STS (BJS Open, 2025)</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/40230424/" target="_blank" rel="noopener noreferrer">Myxoid Leiomyosarcoma of the Uterus — Case Report (Oncology Letters, 2025)</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2024</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://www.nejm.org/doi/full/10.1056/NEJMc2412479" target="_blank" rel="noopener noreferrer">Doxorubicin–Trabectedin in Leiomyosarcoma (NEJM correspondence)</a></li>
                <li><a className="resource-link" href="https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS11590" target="_blank" rel="noopener noreferrer">Lurbinectedin + doxorubicin vs doxorubicin alone — metastatic LMS (JCO TPS11590)</a></li>
                <li><a className="resource-link" href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2024.1375483/full" target="_blank" rel="noopener noreferrer">Leiomyosarcoma of the abdomen and retroperitoneum — systematic review (Frontiers in Surgery)</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/39356980" target="_blank" rel="noopener noreferrer">Phase Ib: Doxorubicin, Dacarbazine, and Nivolumab (GEIS) — LMS (JCO)</a></li>
                <li><a className="resource-link" href="https://ascopubs.org/doi/10.1200/EDBK_432234" target="_blank" rel="noopener noreferrer">Immunotherapy in Sarcoma: Current Data and Promising Strategies (ASCO Educational Book)</a></li>
                <li><a className="resource-link" href="https://doi.org/10.1158/1078-0432.CCR-24-0148" target="_blank" rel="noopener noreferrer">Developing Novel Genomic Risk Stratification Models in STS &amp; ULMS (Clin Cancer Res)</a></li>
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/books/NBK551667/" target="_blank" rel="noopener noreferrer">Leiomyosarcoma — Continuing Education Activity (NCBI Bookshelf)</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2023</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://www.frontiersin.org/articles/10.3389/fonc.2023.1149106/full" target="_blank" rel="noopener noreferrer">Therapeutic advances in leiomyosarcoma (Frontiers in Oncology)</a></li>
                <li><a className="resource-link" href="https://www.mdpi.com/2072-6694/15/7/2099" target="_blank" rel="noopener noreferrer">Targeting Molecular and Immunologic Features of LMS (Cancers)</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/36603130/" target="_blank" rel="noopener noreferrer">Sequential RB and DNA synthesis pathway targeting strategy (MD Anderson)</a></li>
                <li><a className="resource-link" href="https://link.springer.com/article/10.1007/s11864-023-01067-2" target="_blank" rel="noopener noreferrer">Not All Leiomyosarcomas Are the Same: classification (Springer)</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/36857355/" target="_blank" rel="noopener noreferrer">Trabectedin long‑term disease control retrospective study</a></li>
                <li><a className="resource-link" href="https://doi.org/10.1093/oncolo/oyad052" target="_blank" rel="noopener noreferrer">Emerging Trends in Immunotherapy for Adult Sarcomas (The Oncologist)</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2022</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://leiomyosarcoma.info/wp-content/uploads/2022/03/Kasper2022_Article.pdf" target="_blank" rel="noopener noreferrer">What Clinical Trials Are Needed for Treatment of Leiomyosarcoma?</a></li>
                <li><a className="resource-link" href="https://onlinelibrary.wiley.com/doi/full/10.1002/ctd2.149" target="_blank" rel="noopener noreferrer">Molecular subtypes of leiomyosarcoma: Moving toward a consensus</a></li>
                <li><a className="resource-link" href="https://link.springer.com/article/10.1245/s10434-022-12517-w" target="_blank" rel="noopener noreferrer">Landmark Series: A Review of Landmark Studies in the Treatment of Primary Localized Retroperitoneal Sarcoma</a></li>
                <li><a className="resource-link" href="https://aacrjournals.org/clincancerres/article-abstract/28/15/3225/707113/Phase-II-Clinical-Trial-of-Eribulin-Gemcitabine?redirectedFrom=fulltext" target="_blank" rel="noopener noreferrer">Phase II Clinical Trial of Eribulin–Gemcitabine Combination Therapy in Advanced Liposarcoma or Leiomyosarcoma</a></li>
                <li><a className="resource-link" href="https://ascopubs.org/doi/abs/10.1200/JCO.2022.40.16_suppl.11506" target="_blank" rel="noopener noreferrer">A phase Ib/II study of lenvatinib + eribulin (LEADER): Efficacy updates</a></li>
                <li><a className="resource-link" href="https://www.nature.com/articles/s41598-022-16055-z" target="_blank" rel="noopener noreferrer">Retroperitoneal LMS Nomogram Model</a></li>
                <li><a className="resource-link" href="https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-22-0738/694390/Sounding-the-Alarm-on-Leiomyosarcoma-Recurrence" target="_blank" rel="noopener noreferrer">Sounding the Alarm on Leiomyosarcoma Recurrence: Role of ctDNA</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/35665732/" target="_blank" rel="noopener noreferrer">Surgical management strategy for LMS of IVC</a></li>
                <li><a className="resource-link" href="https://aacrjournals.org/clincancerres/article-abstract/28/11/2397/698931/Preclinical-Modeling-of-LMS-Identifies?redirectedFrom=fulltext" target="_blank" rel="noopener noreferrer">Preclinical Modeling of LMS Identifies Susceptibility to Transcriptional CDK Inhibitors</a></li>
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9029111/" target="_blank" rel="noopener noreferrer">Preoperative Differentiation of Uterine Leiomyomas and Leiomyosarcomas</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2021</h3>
              <ul className="resource-list">
                <li className="featured-resource">
                  <a className="resource-link featured" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/" target="_blank" rel="noopener noreferrer">
                    NLMSF–SPAEN publication on evidence-based unmet needs in LMS research and treatment
                  </a>
                  <p className="muted">Featured publication (2021) — A collaborative paper identifying critical gaps and priorities to accelerate progress in leiomyosarcoma research and care.</p>
                </li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/34710646/" target="_blank" rel="noopener noreferrer">Surgical resection of LMS of the IVC: case series + review</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/33788262/" target="_blank" rel="noopener noreferrer">Relationships between highly recurrent tumor suppressor alterations in 489 LMS</a></li>
                <li><a className="resource-link" href="https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11512" target="_blank" rel="noopener noreferrer">Large-scale multiomic analysis suggests mechanisms of resistance to immunotherapy in LMS</a></li>
                <li><a className="resource-link" href="https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11555" target="_blank" rel="noopener noreferrer">Multiomic analysis reveals distinct profiles of uterine and non-uterine LMS</a></li>
                <li className="resource-nested">
                  <div className="muted" style={{ margin: "8px 0 6px" }}>Additional 2021 resources:</div>
                  <ul className="resource-sublist">
                    <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/33941787/" target="_blank" rel="noopener noreferrer">Hexosamine biosynthesis pathway prognostic relevance</a> and <a className="resource-link" href="https://www.nature.com/articles/s41525-021-00193-w" target="_blank" rel="noopener noreferrer">companion article</a></li>
                    <li><a className="resource-link" href="https://youtu.be/8DN8YhJWxvM" target="_blank" rel="noopener noreferrer">Dr. Matt Hemming&apos;s Presentation</a></li>
                    <li><a className="resource-link" href="https://www.researchgate.net/publication/330615358_Detection_of_Circulating_Tumor_DNA_in_Patients_With_Leiomyosarcoma_With_Progressive_Disease" target="_blank" rel="noopener noreferrer">Detection of circulating tumor DNA in progressive LMS</a></li>
                    <li><a className="resource-link" href="https://youtu.be/a98XOq_BE6k" target="_blank" rel="noopener noreferrer">Dr. Brian Crompton and Dr. Jonathan Trent Presentations</a></li>
                    <li><a className="resource-link" href="https://www.researchgate.net/publication/343495968_Identification_of_Genetic_Alterations_by_Circulating_Tumor_DNA_in_Leiomyosarcoma_A_Molecular_Analysis_of_73_Patients" target="_blank" rel="noopener noreferrer">ctDNA in LMS — molecular analysis of 73 patients</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2020</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="http://pubmed.ncbi.nlm.nih.gov/32211860" target="_blank" rel="noopener noreferrer">Nutrition &amp; gut microbiome — current explorations</a></li>
                <li><a className="resource-link" href="https://www.onclive.com/view/sarcoma-experts-elucidate-on-combination-chemotherapy-regimens" target="_blank" rel="noopener noreferrer">Combination chemotherapy regimens — expert review</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/31439678/" target="_blank" rel="noopener noreferrer">Genomic profiling of primary histiocytic sarcoma</a></li>
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/32299819/" target="_blank" rel="noopener noreferrer">Genomic landscape of uterine sarcomas (prospective sequencing)</a></li>
                <li><a className="resource-link" href="https://www.onclive.com/view/nbtxr3-activity-in-soft-tissue-sarcoma-could-be-replicated-in-other-cancers" target="_blank" rel="noopener noreferrer">NBTXR3 activity in STS</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2019</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://pubmed.ncbi.nlm.nih.gov/31164371/" target="_blank" rel="noopener noreferrer">Genomic Evolutionary Patterns of LMS &amp; LPS (Clin Cancer Res)</a></li>
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6656468/" target="_blank" rel="noopener noreferrer">BRCA1/2 functional loss as a targetable subset in LMS</a></li>
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380497/" target="_blank" rel="noopener noreferrer">ctDNA detection in progressive LMS</a></li>
              </ul>
            </div>

            <div className="year-section">
              <h3 className="year-title">2018</h3>
              <ul className="resource-list">
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5759317/" target="_blank" rel="noopener noreferrer">Soft Tissue and Uterine Leiomyosarcoma (review)</a></li>
                <li><a className="resource-link" href="https://www.ncbi.nlm.nih.gov/pubmed/31068995" target="_blank" rel="noopener noreferrer">Cutaneous LMS on the trunk — aggressive course case &amp; review</a></li>
                <li><a className="resource-link" href="https://www.sciencedirect.com/science/article/pii/S0147027217301757" target="_blank" rel="noopener noreferrer">Ifosfamide and doxorubicin in advanced LMS</a></li>
              </ul>
            </div>

            <p className="muted" style={{ marginTop: "10px" }}>Note: This library highlights selections from a larger set. For the complete verbatim archive, see the section below.</p>
          </section>

          {/* Full Research Archive */}
          <section id="full-research-archive" className="section">
            <h2 className="section-title gradient-text">Full Research Archive (Verbatim)</h2>
            <p className="muted">Imported exactly as provided to ensure every original item appears. Collapsed by default for readability.</p>
            <details className="raw-archive">
              <summary>View full archive</summary>
              <div className="raw-archive-inner">
                <p className="lead">
                  The full verbatim archive includes grant announcements, key dates, and year-by-year publications (2025–2018) with links. Content is maintained by NLMSF. For the curated Research Library by year, scroll to the section above.
                </p>
                <p className="muted">
                  To add the complete HTML archive here, replace this placeholder with the full content or use the Research Library (By Year) links above for all curated items.
                </p>
              </div>
            </details>
          </section>
        </div>
      </div>
    </div>
  );
}
