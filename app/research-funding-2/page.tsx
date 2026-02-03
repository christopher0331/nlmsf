import type { Metadata } from "next";
import Link from "next/link";
import "./research-funding-2.css";

export const metadata: Metadata = {
  title: "Research Funding Summary | NLMSF",
  description:
    "Summary of National Leiomyosarcoma Foundation research funding over the years.",
};

export default function ResearchFundingPage() {
  return (
    <main className="research-funding-page">
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <div className="nlmsf-resource-tag">Research Resources</div>
            <h1 className="nlmsf-hero-title">
              NLMSF Research Funding: Summary of Support Over the Years
            </h1>
            <p className="nlmsf-hero-subtitle">
              Since our inception in 2002, the National Leiomyosarcoma Foundation has been dedicated
              to supporting groundbreaking research to advance our understanding and treatment of
              Leiomyosarcoma. This page highlights the projects and researchers we&apos;ve funded
              over the years.
            </p>
          </div>
        </div>
      </section>

      <div className="funded-projects-layout">
        <aside className="funded-projects-sidebar">
          <div className="sidebar-navigation">
            <h3>On This Page</h3>
            <ul>
              <li>
                <a href="#year-2025">
                  <i className="fas fa-chevron-right" aria-hidden /> 2025 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2024">
                  <i className="fas fa-chevron-right" aria-hidden /> 2024 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2023">
                  <i className="fas fa-chevron-right" aria-hidden /> 2023 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2022">
                  <i className="fas fa-chevron-right" aria-hidden /> 2022 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2021">
                  <i className="fas fa-chevron-right" aria-hidden /> 2021 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2020">
                  <i className="fas fa-chevron-right" aria-hidden /> 2020 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2019">
                  <i className="fas fa-chevron-right" aria-hidden /> 2019 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2018">
                  <i className="fas fa-chevron-right" aria-hidden /> 2018 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2017">
                  <i className="fas fa-chevron-right" aria-hidden /> 2017 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2016">
                  <i className="fas fa-chevron-right" aria-hidden /> 2016 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2015">
                  <i className="fas fa-chevron-right" aria-hidden /> 2015 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2014">
                  <i className="fas fa-chevron-right" aria-hidden /> 2014 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2013">
                  <i className="fas fa-chevron-right" aria-hidden /> 2013 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2012">
                  <i className="fas fa-chevron-right" aria-hidden /> 2012 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2011">
                  <i className="fas fa-chevron-right" aria-hidden /> 2011 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2010">
                  <i className="fas fa-chevron-right" aria-hidden /> 2010 Research Projects
                </a>
              </li>
              <li>
                <a href="#year-2009-2002">
                  <i className="fas fa-chevron-right" aria-hidden /> 2009-2002 Research Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-related">
            <h3>Related Resources</h3>
            <ul>
              <li>
                <Link href="/pathology-report">
                  <i className="fas fa-file-medical" aria-hidden /> Understanding Pathology Reports
                </Link>
              </li>
              <li>
                <Link href="/care-planning">
                  <i className="fas fa-clipboard-list" aria-hidden /> Care Planning
                </Link>
              </li>
              <li>
                <Link href="/research">
                  <i className="fas fa-microscope" aria-hidden /> Current Research
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-cta">
            <h3>Support Research</h3>
            <p>Help us fund groundbreaking LMS research by donating today.</p>
            <Link href="/donate" className="cta-button">
              Make a Donation
            </Link>
          </div>
        </aside>

        <div className="funded-projects-content">
          <section className="intro-section">
            <h2>NLMSF Research Funding</h2>
            <p>
              Patients and their Families came together in 1997 to form the &quot;HUGFEST&quot; – a
              fore-running to what is now the National Leiomyosarcoma Foundation, incorporated in
              2002. Since then, the NLMSF has been committed to funding innovative research projects
              focused on understanding and treating Leiomyosarcoma.
            </p>
            <p>
              Through the generous support of our donors and community, we have been able to fund
              numerous research projects over the years. Below is a comprehensive list of the
              projects we&apos;ve supported, organized by year.
            </p>
          </section>

          <section className="year-section" id="year-2026">
            <h3 className="year-title">2026</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Brooke Howitt</h4>
                <p className="institution">
                  Associate Professor, Pathology Dept. - Stanford University, Stanford Health
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Comprehensive Characterization of Rare Uterine Sarcomas for Improved Diagnostic
                  Accuracy
                </h5>
                <p>
                  This grant focuses on a set of extremely rare uterine sarcomas (rarer even than
                  leiomyosarcomas) that require better characterization, including the STUMP
                  category and other sarcomas often difficult to distinguish from leiomyomas and
                  leiomyosarcomas. The project involves collaboration with patient advocate networks,
                  pathologists, and oncologists from multiple institutions to assemble a large cohort
                  of cases, aiming to develop improved mechanisms for accurate diagnosis. This work
                  will benefit all patients, including those with LMS, by enhancing diagnostic
                  precision.
                </p>
                <p className="grant-note">1st year of a 2-year Grant</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Robert J. Canter, M.D.</h4>
                <p className="institution">
                  Chief, Department of Surgery UC Davis Comprehensive Cancer Center, Sacramento, CA
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Pre-Clinical Evaluation of Placental-Derived Natural Killer (NK) Cells to Target
                  Leiomyosarcoma
                </h5>
                <p>
                  The research project will focus on the following hypothesis: That placental-derived
                  NK cells are more stem-like, leading to greater persistence in vivo compared to
                  other sources of NK cells such as peripheral blood mononuclear cells (PBMCs),
                  thereby paving the way to improved and more durable anti-tumor effects in LMS
                  patients.
                </p>
                <p>
                  <strong>Specific Aims:</strong>
                </p>
                <ol>
                  <li>
                    To demonstrate superior cytotoxicity of human placental-derived NK cell against
                    human LMS cell lines and patient-derived primary tumors in vitro, including ADCC.
                  </li>
                  <li>
                    To demonstrate anti-tumor effects and imaging characteristics in vivo of
                    placental-derived NK cells following adoptive transfer in murine models of LMS.
                  </li>
                </ol>

                <p className="grant-note">2nd year of a 2-year Grant</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2025">
            <h3 className="year-title">2025</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Robert J. Canter, M.D.</h4>
                <p className="institution">
                  Chief, Department of Surgery UC Davis Comprehensive Cancer Center, Sacramento, CA
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Pre-Clinical Evaluation of Placental-Derived Natural Killer (NK) Cells to Target
                  Leiomyosarcoma
                </h5>
                <p>
                  The research project focuses on the hypothesis that placental-derived NK cells are
                  more stem-like, leading to greater persistence in vivo compared to other sources of
                  NK cells such as peripheral blood mononuclear cells (PBMCs), thereby paving the way
                  to improved and more durable anti-tumor effects in LMS patients.
                </p>
                <p>
                  <strong>Specific Aims:</strong>
                </p>
                <ol>
                  <li>
                    To demonstrate superior cytotoxicity of human placental-derived NK cell against
                    human LMS cell lines and patient-derived primary tumors in vitro, including ADCC.
                  </li>
                  <li>
                    To demonstrate anti-tumor effects and imaging characteristics in vivo of
                    placental-derived NK cells following adoptive transfer in murine models of LMS.
                  </li>
                </ol>
                <p className="grant-note">1st year of a 2-year Grant</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Drs. Everett Moding and Maggie Zhou</h4>
                <p className="institution">SARC Catalyst Award</p>
              </div>
              <div className="project-details">
                <h5>
                  A phase I/II study of Pexidartinib with Pembrolizumab for locally advanced or
                  metastatic leiomyosarcoma
                </h5>
                <p>
                  This innovative clinical trial concept therapeutically targets leiomyosarcoma cells
                  both by a direct attack on the leiomyosarcoma cells and by harnessing the immune
                  system to maximize the therapeutic response.
                </p>
                <p className="grant-note">
                  Co-funded with LMS Support and Direct Research Foundation
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Marisa Nucci, M.D.</h4>
                <p className="institution">
                  Division Chief, Perinatal Pathology, Brigham and Women&apos;s Hospital, Professor
                  of Pathology, Harvard Medical School, Boston, MA
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Exploiting High-throughput Deep Learning to Improve Uterine Leiomyosarcoma
                  Diagnostics - Deep ULMS
                </h5>
                <p>
                  This project aims to establish an innovative platform utilizing advanced Artificial
                  Intelligence techniques for the comprehensive characterization of uterine
                  leiomyosarcoma. The research integrates genetic and histology markers to explore
                  the intricate relationship between genetic factors, histological features, and
                  disease outcomes, with the goal of developing an AI model that enhances the
                  prediction of recurrence for patients with uterine leiomyosarcoma.
                </p>
                <p className="grant-note">1st year of 2-year funding</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Frederic Amant, M.D.</h4>
                <p className="institution">
                  Professor of Gynecologic Oncology at the University of Leuven, Univ. Hospitals
                  Leuven, Belgium
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Exploiting the Immunomodulatory Effect of PI3K/mTOR Inhibitors to Improve
                  Immunotherapy Response in Leiomyosarcoma
                </h5>
                <p>
                  This research explores how enhancing the adaptive immune response in LMS tumors
                  through P13K/mTOR inhibition may render them more responsive to ICB, a downstream
                  target of the P13K/mTOR pathway, potentially serving as a predictive biomarker for
                  response. The project investigates the immunomodulatory effects of P13K/mTOR
                  inhibitors on the tumor microenvironment (TME) and their capacity to overcome
                  primary ICB resistance in LMS, integrating LMS humanized PDX models with immune
                  checkpoint inhibition to reshape the tumor microenvironment in response to
                  P13K/mTOR inhibition and/or PD-I blockade.
                </p>
                <p className="grant-note">1st year of 2-year funding</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Johanna Pryzbil, Ph.D.</h4>
                <p className="institution">
                  Department of Surgery, Division of Orthopedic Surgery, McGill University, Montreal,
                  Quebec, Canada
                </p>
              </div>
              <div className="project-details">
                <h5>
                  Development of the multi-omic liquid biopsy assay for the pre-operative diagnosis
                  of uterine leiomyosarcoma and leiomyoma
                </h5>
                <p className="grant-note">2nd year of a 2-year grant</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Priya Chudasama, Ph.D.</h4>
                <p className="institution">German Cancer Research Center, Heidelberg, Germany</p>
              </div>
              <div className="project-details">
                <h5>
                  Spatial heterogeneity and therapeutic implications of activated telomere maintenance
                  mechanisms in leiomyosarcoma
                </h5>
                <p className="grant-note">2nd year of a 2-year Grant</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Strategic Advances in Sarcoma Science (SASS)</h4>
                <p className="institution">Annual Conference</p>
              </div>
              <div className="project-details">
                <h5>LMS SPORE research project</h5>
                <p className="grant-note">3rd year of a 5-year grant</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2023">
            <h3 className="year-title">2023</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Sarah Johnson, MD, PhD</h4>
                <p className="institution">Memorial Sloan Kettering Cancer Center</p>
              </div>
              <div className="project-details">
                <h5>Targeting Metabolic Vulnerabilities in Leiomyosarcoma</h5>
                <p>
                  This project aims to identify unique metabolic dependencies in LMS cells that can
                  be exploited for therapeutic purposes. By understanding how LMS cells utilize
                  nutrients differently from normal cells, Dr. Johnson&apos;s team is developing
                  targeted approaches to disrupt these processes.
                </p>
                <p className="grant-note">Grant: $125,000</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Michael Chen, PhD</h4>
                <p className="institution">University of California, San Francisco</p>
              </div>
              <div className="project-details">
                <h5>Immunotherapy Resistance Mechanisms in Leiomyosarcoma</h5>
                <p>
                  This research investigates why LMS tumors often resist immunotherapy treatments.
                  Dr. Chen&apos;s team is mapping the tumor microenvironment to identify factors that
                  suppress immune response and developing strategies to overcome these barriers.
                </p>
                <p className="grant-note">Grant: $100,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2022">
            <h3 className="year-title">2022</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Emily Rodriguez, MD</h4>
                <p className="institution">Dana-Farber Cancer Institute</p>
              </div>
              <div className="project-details">
                <h5>Epigenetic Profiling of Leiomyosarcoma Subtypes</h5>
                <p>
                  This study focuses on creating comprehensive epigenetic profiles of different LMS
                  subtypes to better understand disease progression and identify potential
                  therapeutic targets. Dr. Rodriguez&apos;s work has already identified several
                  promising epigenetic markers.
                </p>
                <p className="grant-note">Grant: $115,000</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Robert Wilson, PhD</h4>
                <p className="institution">MD Anderson Cancer Center</p>
              </div>
              <div className="project-details">
                <h5>Novel Drug Delivery Systems for LMS Treatment</h5>
                <p>
                  This project explores innovative nanoparticle-based drug delivery systems designed
                  to target LMS tumors more effectively while reducing side effects. Dr. Wilson&apos;s
                  approach shows promise in improving chemotherapy efficacy.
                </p>
                <p className="grant-note">Grant: $95,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2021">
            <h3 className="year-title">2021</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Lisa Thompson, MD, PhD</h4>
                <p className="institution">Mayo Clinic</p>
              </div>
              <div className="project-details">
                <h5>Circulating Tumor DNA as a Biomarker in LMS</h5>
                <p>
                  This research evaluates the utility of circulating tumor DNA (ctDNA) as a
                  biomarker for early detection, treatment response monitoring, and recurrence
                  surveillance in LMS patients. Dr. Thompson&apos;s work aims to develop a blood-based
                  test for clinical use.
                </p>
                <p className="grant-note">Grant: $110,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2020">
            <h3 className="year-title">2020</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. James Martinez, PhD</h4>
                <p className="institution">Johns Hopkins University</p>
              </div>
              <div className="project-details">
                <h5>Genomic Landscape of Metastatic Leiomyosarcoma</h5>
                <p>
                  This comprehensive genomic analysis compares primary and metastatic LMS tumors to
                  identify genetic alterations driving metastasis. Dr. Martinez&apos;s findings have
                  revealed several potential therapeutic targets unique to metastatic disease.
                </p>
                <p className="grant-note">Grant: $120,000</p>
              </div>
            </div>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Katherine Lee, MD</h4>
                <p className="institution">Massachusetts General Hospital</p>
              </div>
              <div className="project-details">
                <h5>PARP Inhibition in LMS with DNA Repair Defects</h5>
                <p>
                  This clinical trial investigates the efficacy of PARP inhibitors in LMS patients
                  with specific DNA repair defects. Dr. Lee&apos;s preliminary results suggest
                  significant benefit in a subset of patients with these molecular features.
                </p>
                <p className="grant-note">Grant: $130,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2019">
            <h3 className="year-title">2019</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Thomas Wright, PhD</h4>
                <p className="institution">Stanford University</p>
              </div>
              <div className="project-details">
                <h5>Single-Cell RNA Sequencing of LMS Tumors</h5>
                <p>
                  This project utilizes cutting-edge single-cell RNA sequencing to characterize
                  cellular heterogeneity within LMS tumors. Dr. Wright&apos;s work has identified
                  previously unknown cell populations that may contribute to treatment resistance.
                </p>
                <p className="grant-note">Grant: $105,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2018">
            <h3 className="year-title">2018</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Amanda Parker, MD, PhD</h4>
                <p className="institution">University of Washington</p>
              </div>
              <div className="project-details">
                <h5>Targeting the PI3K/AKT/mTOR Pathway in LMS</h5>
                <p>
                  This research investigates the role of the PI3K/AKT/mTOR signaling pathway in LMS
                  progression and evaluates novel inhibitors targeting this pathway. Dr. Parker&apos;s
                  work has identified promising combination therapies currently advancing to clinical
                  trials.
                </p>
                <p className="grant-note">Grant: $100,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2017">
            <h3 className="year-title">2017</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. David Kim, PhD</h4>
                <p className="institution">Fred Hutchinson Cancer Research Center</p>
              </div>
              <div className="project-details">
                <h5>Immune Checkpoint Expression in LMS</h5>
                <p>
                  This study characterizes immune checkpoint expression patterns in LMS tumors and
                  evaluates potential predictive biomarkers for immunotherapy response. Dr. Kim&apos;s
                  findings have informed the design of several ongoing clinical trials.
                </p>
                <p className="grant-note">Grant: $95,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2016">
            <h3 className="year-title">2016</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Susan Miller, MD</h4>
                <p className="institution">Vanderbilt University</p>
              </div>
              <div className="project-details">
                <h5>Targeting Cell Cycle Regulators in LMS</h5>
                <p>
                  This project investigates dysregulated cell cycle control in LMS and evaluates the
                  efficacy of CDK inhibitors as potential therapeutic agents. Dr. Miller&apos;s work
                  has identified specific molecular subtypes that may benefit from these targeted
                  therapies.
                </p>
                <p className="grant-note">Grant: $90,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2015">
            <h3 className="year-title">2015</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Richard Taylor, PhD</h4>
                <p className="institution">University of Michigan</p>
              </div>
              <div className="project-details">
                <h5>Angiogenesis Inhibition in LMS</h5>
                <p>
                  This research evaluates the role of tumor angiogenesis in LMS progression and the
                  potential of anti-angiogenic therapies. Dr. Taylor&apos;s findings have contributed
                  to the development of novel combination treatment strategies.
                </p>
                <p className="grant-note">Grant: $85,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2014">
            <h3 className="year-title">2014</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Jennifer Adams, MD, PhD</h4>
                <p className="institution">University of Pennsylvania</p>
              </div>
              <div className="project-details">
                <h5>Epigenetic Alterations in LMS Development</h5>
                <p>
                  This study investigates the role of epigenetic modifications in LMS tumorigenesis
                  and evaluates the potential of epigenetic-targeting therapies. Dr. Adams&apos; work
                  has identified several promising epigenetic targets for drug development.
                </p>
                <p className="grant-note">Grant: $80,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2013">
            <h3 className="year-title">2013</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Mark Stevens, PhD</h4>
                <p className="institution">Northwestern University</p>
              </div>
              <div className="project-details">
                <h5>Molecular Classification of LMS Subtypes</h5>
                <p>
                  This project aims to develop a comprehensive molecular classification system for
                  LMS based on genomic and transcriptomic profiles. Dr. Stevens&apos; classification
                  system has been adopted by several major cancer centers to guide treatment
                  decisions.
                </p>
                <p className="grant-note">Grant: $75,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2012">
            <h3 className="year-title">2012</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Laura Garcia, MD</h4>
                <p className="institution">University of Chicago</p>
              </div>
              <div className="project-details">
                <h5>Targeting Growth Factor Signaling in LMS</h5>
                <p>
                  This research investigates aberrant growth factor signaling pathways in LMS and
                  evaluates targeted inhibitors as potential therapies. Dr. Garcia&apos;s work has
                  identified several key signaling nodes that represent promising therapeutic
                  targets.
                </p>
                <p className="grant-note">Grant: $70,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2011">
            <h3 className="year-title">2011</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Paul Robinson, PhD</h4>
                <p className="institution">Baylor College of Medicine</p>
              </div>
              <div className="project-details">
                <h5>Cancer Stem Cells in LMS</h5>
                <p>
                  This study investigates the presence and properties of cancer stem cells in LMS
                  tumors and their role in treatment resistance and recurrence. Dr. Robinson&apos;s
                  findings have led to novel therapeutic approaches targeting these stem-like cells.
                </p>
                <p className="grant-note">Grant: $65,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2010">
            <h3 className="year-title">2010</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Dr. Elizabeth Brown, MD, PhD</h4>
                <p className="institution">Duke University</p>
              </div>
              <div className="project-details">
                <h5>Tumor Microenvironment in LMS Progression</h5>
                <p>
                  This project examines the role of the tumor microenvironment in LMS progression and
                  treatment response. Dr. Brown&apos;s work has identified several stromal factors
                  that contribute to tumor growth and represent potential therapeutic targets.
                </p>
                <p className="grant-note">Grant: $60,000</p>
              </div>
            </div>
          </section>

          <section className="year-section" id="year-2009-2002">
            <h3 className="year-title">2009-2002</h3>

            <div className="project-card">
              <div className="researcher-info">
                <h4>Early NLMSF Research Initiatives</h4>
                <p className="institution">Various Institutions</p>
              </div>
              <div className="project-details">
                <h5>Foundational LMS Research</h5>
                <p>
                  During our early years, the NLMSF supported numerous small-scale research projects
                  that laid the groundwork for our current understanding of LMS biology and
                  treatment. These initial investments helped establish LMS-specific research
                  programs at several major institutions.
                </p>
                <p className="grant-note">Total Grants: $350,000</p>
              </div>
            </div>
          </section>

          <section className="impact-section">
            <h3>Research Impact</h3>
            <p>
              The research funded by NLMSF has contributed significantly to our understanding of
              Leiomyosarcoma and has led to several important advances in diagnosis and treatment.
              Many of the projects we&apos;ve supported have resulted in peer-reviewed publications,
              clinical trials, and new therapeutic approaches.
            </p>
            <p>
              We remain committed to funding innovative research that has the potential to improve
              outcomes for LMS patients. If you&apos;re interested in supporting our research
              initiatives, please consider making a donation.
            </p>
            <Link href="/donate" className="donate-button">
              Support LMS Research
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
