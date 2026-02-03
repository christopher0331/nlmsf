"use client";

import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";

const SECTION_IDS = ["introduction", "importance", "testing-types", "partnerships", "next-steps", "resources"];

export default function MolecularTumorTestingClient() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  const sectionIds = useMemo(() => SECTION_IDS, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    let currentSection = sectionIds[0];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) {
        return;
      }

      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  }, [sectionIds]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: "smooth",
    });

    setActiveSection(id);
  }, []);

  return (
    <div className="molecular-tumor-testing-page">
      {/* Hero Component for Molecular Tumor Testing Page */}
      <div className="abcs-hero">
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>

        <div className="hero-content">
          <h1 className="hero-title">Role of Biomarkers in Cancer Research and Treatment</h1>
          <p className="hero-description">
            Understanding how biomarkers can guide personalized treatment decisions for leiomyosarcoma patients and improve
            outcomes.
          </p>
        </div>
      </div>

      <div className="wp-lms-container">
        {/* Sidebar Navigation Component for Molecular Tumor Testing Page */}
        <div className="page-nav">
          <h3 className="sidebar-title">Page Contents</h3>

          <div className="nav-section section-introduction">
            <a
              href="#introduction"
              className={`nav-link${activeSection === "introduction" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "introduction")}
            >
              Introduction to Biomarkers
            </a>
          </div>

          <div className="nav-section section-importance">
            <a
              href="#importance"
              className={`nav-link${activeSection === "importance" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "importance")}
            >
              Importance for LMS Patients
            </a>
          </div>

          <div className="nav-section section-testing">
            <a
              href="#testing-types"
              className={`nav-link${activeSection === "testing-types" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "testing-types")}
            >
              Types of Testing
            </a>
          </div>

          <div className="nav-section section-partnerships">
            <a
              href="#partnerships"
              className={`nav-link${activeSection === "partnerships" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "partnerships")}
            >
              Research Partnerships
            </a>
          </div>

          <div className="nav-section section-next-steps">
            <a
              href="#next-steps"
              className={`nav-link${activeSection === "next-steps" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "next-steps")}
            >
              Next Steps
            </a>
          </div>

          <div className="nav-section section-resources">
            <a
              href="#resources"
              className={`nav-link${activeSection === "resources" ? " active" : ""}`}
              onClick={(event) => handleNavClick(event, "resources")}
            >
              Additional Resources
            </a>
          </div>
        </div>

        {/* Main Content Component for Molecular Tumor Testing Page */}
        <div className="molecular-content">
          {/* Introduction Card */}
          <div className="intro-card">
            <p>
              Biomarkers are measurable indicators found in the body that can provide valuable information about a person&apos;s
              health status, disease risk, or response to treatment. In cancer care, biomarkers can be molecules, genes, or
              characteristics that help doctors understand the unique features of a tumor.
            </p>
          </div>

          <div className="main-content">
            {/* Introduction Section */}
            <section id="introduction" className="content-section biomarkers-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-dna"></i>
                </div>
                <h2 className="section-title">Introduction to Biomarkers</h2>
              </div>

              <div className="section-content">
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-question-circle"></i>
                    </div>
                    <div className="card-title">
                      <h3>What are Biomarkers?</h3>
                      <p>Key components for personalized medicine</p>
                    </div>
                  </div>

                  <p>
                    Biomarkers are referred to as any substance, structure or process that can be analyzed in the body and helps
                    in predicting disease. Biomarkers have a crucial role in the early detection, diagnosis, and management of
                    treatment for major diseases like cancer and heart diseases.
                  </p>

                  <p>Biomarkers can include:</p>
                  <ul className="bullet-list">
                    <li>Genetic mutations or alterations in DNA</li>
                    <li>Proteins or enzymes produced by cancer cells</li>
                    <li>Patterns of gene expression</li>
                    <li>Specific molecules found in blood, tissue, or other body fluids</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Importance Section */}
            <section id="importance" className="content-section importance-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <h2 className="section-title">Importance for LMS Patients</h2>
              </div>

              <div className="section-content">
                <p>
                  For leiomyosarcoma (LMS) patients, molecular tumor testing can provide critical insights that may influence
                  treatment decisions and access to clinical trials. As a rare cancer, LMS treatment can benefit significantly
                  from a personalized approach guided by molecular testing.
                </p>

                <div className="two-column">
                  <div className="column">
                    <div className="info-card">
                      <div className="card-header">
                        <div className="card-icon">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="card-title">
                          <h3>Benefits of Molecular Testing</h3>
                          <p>Why testing matters for LMS patients</p>
                        </div>
                      </div>

                      <ul className="bullet-list">
                        <li>Identify potential targeted therapy options</li>
                        <li>Determine eligibility for clinical trials</li>
                        <li>Better understand tumor behavior and prognosis</li>
                        <li>Guide treatment decisions based on tumor characteristics</li>
                        <li>Monitor treatment response and detect recurrence</li>
                      </ul>
                    </div>
                  </div>

                  <div className="column">
                    <div className="testimonial-card">
                      <i className="fas fa-quote-left"></i>
                      <p>
                        &quot;Molecular testing revealed a specific mutation in my tumor that made me eligible for a targeted therapy
                        clinical trial. This personalized approach has given me hope and more treatment options.&quot;
                      </p>
                      <div className="testimonial-author">- LMS Patient, Denver Support Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testing Types Section */}
            <section id="testing-types" className="content-section testing-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-vial"></i>
                </div>
                <h2 className="section-title">Types of Molecular Testing</h2>
              </div>

              <div className="section-content">
                <p>Several types of molecular testing can be used to analyze tumor samples and identify important biomarkers in LMS:</p>

                <div className="cards-grid">
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-dna"></i>
                      </div>
                      <div className="card-title">
                        <h3>Next-Generation Sequencing (NGS)</h3>
                        <p>Comprehensive genetic analysis</p>
                      </div>
                    </div>
                    <p>
                      Analyzes multiple genes simultaneously to identify mutations, amplifications, deletions, and other genetic
                      alterations that may drive cancer growth. This technology can sequence entire genomes or targeted panels of
                      genes relevant to LMS.
                    </p>
                    <div className="card-footer">
                      <span className="technique-badge">Advanced Technique</span>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-microscope"></i>
                      </div>
                      <div className="card-title">
                        <h3>Immunohistochemistry (IHC)</h3>
                        <p>Protein detection method</p>
                      </div>
                    </div>
                    <p>
                      Uses antibodies to detect specific proteins in tissue samples, helping to identify biomarkers that may be
                      targets for therapy or indicators of prognosis. This technique can visualize protein expression patterns in
                      tumor cells.
                    </p>
                    <div className="card-footer">
                      <span className="technique-badge">Standard Technique</span>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-chart-bar"></i>
                      </div>
                      <div className="card-title">
                        <h3>Gene Expression Profiling</h3>
                        <p>Activity measurement</p>
                      </div>
                    </div>
                    <p>
                      Measures the activity levels of multiple genes to create a molecular &quot;signature&quot; that can help predict tumor
                      behavior and response to treatment. This approach analyzes which genes are actively being transcribed in
                      tumor cells.
                    </p>
                    <div className="card-footer">
                      <span className="technique-badge">Advanced Technique</span>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-tint"></i>
                      </div>
                      <div className="card-title">
                        <h3>Liquid Biopsy</h3>
                        <p>Non-invasive blood testing</p>
                      </div>
                    </div>
                    <p>
                      Analyzes circulating tumor DNA (ctDNA) in blood samples to monitor treatment response, detect recurrence, or
                      identify genetic alterations without invasive tissue sampling. This emerging approach offers a less invasive
                      alternative to traditional biopsies.
                    </p>
                    <div className="card-footer">
                      <span className="technique-badge">Emerging Technique</span>
                    </div>
                  </div>
                </div>

                <div className="note-box">
                  <p>
                    <strong>Note:</strong> Special Video on Circulating DNA for Sarcomas by Panel of Experts
                  </p>
                  <a href="https://www.youtube.com/watch?v=fhsyH8bJn_I" target="_blank" rel="noopener noreferrer">
                    Link to Video
                  </a>
                </div>

                <div className="note-box">
                  <p>
                    <strong>Note:</strong> The availability of these testing methods may vary by location. Discuss with your
                    oncologist which tests are appropriate for your specific situation.
                  </p>
                </div>
              </div>
            </section>

            {/* Partnerships Section */}
            <section id="partnerships" className="content-section partnerships-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-handshake"></i>
                </div>
                <h2 className="section-title">Research Partnerships</h2>
              </div>

              <div className="section-content">
                <p>
                  NLMSF has established partnerships with leading organizations to improve access to molecular testing and targeted
                  therapies for LMS patients.
                </p>
              </div>
            </section>

            {/* BostonGene Section */}
            <section id="bostongene" className="content-section partnership-section">
              <h3 className="subsection-title">
                <i className="fas fa-dna"></i>
                BostonGene
              </h3>
              <div className="content-block">
                <p>Personalized Cancer Care Through Genomic Profiling</p>

                <div className="partnership-card">
                  <div className="partnership-logo">
                    <i className="fas fa-dna"></i>
                  </div>
                  <div className="partnership-info">
                    <h4 className="partnership-name">BostonGene</h4>
                    <p className="partnership-description">
                      Delivers comprehensive genomic profiling to match cancer patients with biomarker-driven therapies and
                      clinical trials.
                    </p>
                    <a href="https://bostongene.com/" target="_blank" rel="noopener noreferrer" className="external-link">
                      <i className="fas fa-external-link-alt"></i>
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="feature-list">
                  <h5>Key Features:</h5>
                  <ul className="bullet-list purple">
                    <li>Tumor Portrait™ test analyzes DNA/RNA across 22,000 genes</li>
                    <li>Personalized treatment and clinical trial recommendations</li>
                    <li>Identifies prognostic and germline alterations</li>
                    <li>Financial assistance program for patients</li>
                    <li>ASCO/NCCN guideline-recommended testing</li>
                    <li>Secure report delivery to physicians</li>
                  </ul>
                </div>

                <div className="resource-links">
                  <h5>Resources:</h5>
                  <ul className="link-list">
                    <li>
                      <a href="https://bostongene.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-info-circle"></i>
                        BostonGene Information
                      </a>
                    </li>
                    <li>
                      <a href="https://bostongene.com/contact" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-envelope"></i>
                        Contact BostonGene
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bostongene.com/financial-assistance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <i className="fas fa-dollar-sign"></i>
                        Financial Assistance Program
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Signatera Section */}
            <section id="signatera" className="content-section partnership-section">
              <h3 className="subsection-title">
                <i className="fas fa-vial"></i>
                Signatera
              </h3>
              <div className="content-block">
                <p>Early Cancer Recurrence Detection with Personalized ctDNA Testing</p>

                <div className="partnership-card">
                  <div className="partnership-logo">
                    <i className="fas fa-vial"></i>
                  </div>
                  <div className="partnership-info">
                    <h4 className="partnership-name">Signatera</h4>
                    <p className="partnership-description">
                      A personalized ctDNA test that detects molecular residual disease (MRD) to identify cancer recurrence earlier
                      than standard tools.
                    </p>
                    <a
                      href="https://www.natera.com/oncology/signatera-advanced-cancer-detection/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="feature-list">
                  <h5>Key Features:</h5>
                  <ul className="bullet-list purple">
                    <li>Custom-built MRD assay using tumor-specific mutations</li>
                    <li>Detects recurrence 4-10 months before imaging</li>
                    <li>Monitors treatment response, including immunotherapy</li>
                    <li>Medicare coverage for multiple solid tumors</li>
                    <li>7-10 day turnaround for serial blood tests</li>
                    <li>Financial assistance for eligible patients</li>
                  </ul>
                </div>

                <div className="resource-links">
                  <h5>Resources:</h5>
                  <ul className="link-list">
                    <li>
                      <a
                        href="https://www.natera.com/oncology/signatera-advanced-cancer-detection/faq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <i className="fas fa-info-circle"></i>
                        Signatera FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.natera.com/oncology/signatera-advanced-cancer-detection/patients/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <i className="fas fa-user"></i>
                        Patient Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.natera.com/oncology/signatera-advanced-cancer-detection/billing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <i className="fas fa-dollar-sign"></i>
                        Billing &amp; Financial Assistance
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Target Cancer Foundation Section */}
            <section id="target-cancer" className="content-section target-cancer-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h2 className="section-title">Target Cancer Foundation</h2>
              </div>

              <div className="section-content">
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className="card-title">
                      <h3>Collaborative Partnership</h3>
                      <p>Supporting LMS research</p>
                    </div>
                  </div>

                  <p>
                    NLMSF has established a proactive collaborative partnership with Target Cancer Foundation on behalf of the LMS
                    Patient community. This foundation is dedicated to supporting rare cancer research and improving access to
                    precision medicine for patients with rare and understudied cancers.
                  </p>

                  <div className="partnership-links">
                    <a href="https://targetcancerfoundation.org/track" target="_blank" rel="noopener noreferrer" className="external-link">
                      <i className="fas fa-external-link-alt"></i>
                      Visit Target Cancer Foundation Website
                    </a>
                  </div>
                </div>

                {/* TRACK Trial Subsection */}
                <div id="track-trial" className="trial-box">
                  <div className="trial-header">
                    <i className="fas fa-flask"></i>
                    <h3>TRACK Trial</h3>
                  </div>

                  <p>
                    An open label, non-randomized, multi-center, pragmatic study that aims to establish whether patients with rare
                    tumors can benefit from matched molecular therapy as dictated by their next-generation sequencing (NGS) results.
                  </p>

                  <div className="feature-list">
                    <h4>Key Features:</h4>
                    <ul className="bullet-list">
                      <li>Remote consent and participation approach</li>
                      <li>Available for all patients with rare tumors within the United States</li>
                      <li>Traditional, site-based patient consenting also available</li>
                    </ul>
                  </div>

                  <div className="resource-links">
                    <h4>Resources:</h4>
                    <div className="links-grid">
                      <a href="https://us02web.zoom.us/…/M23F43Rc0dz5vlKwyx95xxzFbePFi…" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-video"></i>
                        <span>TRACK Trial Webinar</span>
                      </a>

                      <a
                        href="https://www.businesswire.com/news/home/20200930005492/en/TargetCancer-Foundation-Announces-First-Patients-Enrolled-in-TRACK-Study-to-Research-Genomic-Testing-in-People-with-Rare-Cancers-Supported-by-Bayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <i className="fas fa-newspaper"></i>
                        <span>2020 Announcement</span>
                      </a>

                      <a href="https://clinicaltrials.gov/ct2/show/NCT04504604" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-clipboard-list"></i>
                        <span>Clinical Trials.gov</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Perthera Section */}
            <section id="perthera" className="content-section partnership-section">
              <h3 className="subsection-title">
                <i className="fas fa-project-diagram"></i>
                Perthera
              </h3>
              <div className="content-block">
                <p>Matching Patients to Optimal Therapies * Intelligence for Optimum Outcomes</p>

                <div className="partnership-card">
                  <div className="partnership-logo">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <div className="partnership-info">
                    <h4 className="partnership-name">Perthera</h4>
                    <p className="partnership-description">
                      Provides precision oncology services that help match patients to optimal therapies based on molecular testing
                      results.
                    </p>
                    <a href="https://perthera.com/" target="_blank" rel="noopener noreferrer" className="external-link">
                      <i className="fas fa-external-link-alt"></i>
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="feature-list">
                  <h5>Key Features:</h5>
                  <ul className="bullet-list purple">
                    <li>Precision Oncology services at no cost to patients or oncologists</li>
                    <li>Clinical coordination, AI and data analytics</li>
                    <li>Molecular tumor board</li>
                    <li>Report delivery included in concierge services</li>
                    <li>Less than 3 days average turnaround time</li>
                    <li>HIPAA compliant patient data protection</li>
                  </ul>
                </div>

                <div className="resource-links">
                  <h5>Resources:</h5>
                  <ul className="link-list">
                    <li>
                      <a href="https://perthera.com/contact-nlmsf-perthera/" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-info-circle"></i>
                        NLMSF-Perthera Information
                      </a>
                    </li>
                    <li>
                      <a href="https://bit.ly/3eczOxR" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-file-pdf"></i>
                        Patient Pamphlet
                      </a>
                    </li>
                    <li>
                      <a href="https://bit.ly/2TzCBHS" target="_blank" rel="noopener noreferrer" className="resource-link">
                        <i className="fas fa-file-alt"></i>
                        Patient Take-Home
                      </a>
                    </li>
                  </ul>
                </div>

                {/* FAQ Subsection */}
                <div id="perthera-faq" className="subsection faq-section">
                  <h4 className="subsection-title">Frequently Asked Questions</h4>

                  <div className="faq-list">
                    <div className="faq-item">
                      <div className="faq-question">
                        <i className="fas fa-question-circle"></i>
                        <h5>What lab does the testing? How many mutations do they test for?</h5>
                      </div>
                      <div className="faq-answer">
                        <p>
                          Perthera is not a Lab. We are Lab agnostic and will use the ordering Oncologist&apos;s preferred Lab or one of
                          our own. The ordering physician determines how many panels/mutations they would like us to test. Lab
                          testing is put through a patient&apos;s insurance, often with no balance billing.
                        </p>
                      </div>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <i className="fas fa-question-circle"></i>
                        <h5>How much does it cost?</h5>
                      </div>
                      <div className="faq-answer">
                        <p>Perthera delivers our Precision Oncology services at no cost to patients or oncologists.</p>
                      </div>
                    </div>

                    <div className="faq-item">
                      <div className="faq-question">
                        <i className="fas fa-question-circle"></i>
                        <h5>Is the patient&apos;s data confidential or do they sell it?</h5>
                      </div>
                      <div className="faq-answer">
                        <p>We fully comply with all HIPAA requirements and maintain strict confidentiality with all patient data.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Next Steps Section */}
            <section id="next-steps" className="content-section">
              <h2 className="section-title">
                <i className="fas fa-arrow-right"></i>
                Next Steps
              </h2>
              <div className="content-block">
                <p>If you&apos;re considering molecular testing for your leiomyosarcoma, here are some recommended steps:</p>

                <div className="steps-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3 className="step-title">Discuss with Your Oncologist</h3>
                      <p>Talk to your oncologist about the potential benefits of molecular testing for your specific situation.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3 className="step-title">Explore Testing Options</h3>
                      <p>Research the different types of molecular testing available and which might be most appropriate for your case.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3 className="step-title">Check Insurance Coverage</h3>
                      <p>Contact your insurance provider to understand coverage for molecular testing and any potential out-of-pocket costs.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3 className="step-title">Consider Clinical Trials</h3>
                      <p>Explore clinical trials like the TRACK Trial that may provide access to molecular testing and targeted therapies.</p>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3 className="step-title">Connect with Resources</h3>
                      <p>Reach out to NLMSF, Target Cancer Foundation, or Perthera for additional support and guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section">
              <h2 className="section-title">
                <i className="fas fa-book"></i>
                Additional Resources
              </h2>
              <div className="content-block">
                <p>Explore these additional resources to learn more about molecular testing and precision medicine for leiomyosarcoma:</p>

                <div className="resources-grid">
                  <div className="resource-card">
                    <div className="resource-card-icon">
                      <i className="fas fa-file-pdf"></i>
                    </div>
                    <div className="resource-card-content">
                      <h3 className="resource-card-title">Molecular Testing Guide</h3>
                      <p className="resource-card-description">A comprehensive guide to understanding molecular testing for sarcoma patients.</p>
                      <a href="#" className="resource-card-link">
                        Download PDF
                      </a>
                    </div>
                  </div>

                  <div className="resource-card">
                    <div className="resource-card-icon">
                      <i className="fas fa-video"></i>
                    </div>
                    <div className="resource-card-content">
                      <h3 className="resource-card-title">Webinar: Precision Medicine for LMS</h3>
                      <p className="resource-card-description">An educational webinar featuring experts discussing the latest advances in precision medicine for LMS.</p>
                      <a href="#" className="resource-card-link">
                        Watch Webinar
                      </a>
                    </div>
                  </div>

                  <div className="resource-card">
                    <div className="resource-card-icon">
                      <i className="fas fa-clipboard-list"></i>
                    </div>
                    <div className="resource-card-content">
                      <h3 className="resource-card-title">Questions to Ask Your Doctor</h3>
                      <p className="resource-card-description">A list of important questions to ask your healthcare team about molecular testing.</p>
                      <a href="#" className="resource-card-link">
                        View Questions
                      </a>
                    </div>
                  </div>

                  <div className="resource-card">
                    <div className="resource-card-icon">
                      <i className="fas fa-flask"></i>
                    </div>
                    <div className="resource-card-content">
                      <h3 className="resource-card-title">LMS Biomarker Research</h3>
                      <p className="resource-card-description">Latest research on biomarkers and molecular targets in leiomyosarcoma.</p>
                      <a href="#" className="resource-card-link">
                        Read Research
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Telemedicine Section */}
            <section className="telemedicine-section">
              <h2>
                <i className="fas fa-video"></i>
                Telemedicine Clinics
              </h2>

              <div className="clinic-card">
                <h3 className="clinic-name">Virtual Sarcoma Clinic</h3>
                <div className="clinic-location">
                  <i className="fas fa-globe"></i>
                  <span>Serving: Nationwide</span>
                </div>
                <p className="clinic-description">
                  Access expert sarcoma care from anywhere in the United States through virtual consultations with specialized oncologists.
                </p>
              </div>

              <div className="clinic-card">
                <h3 className="clinic-name">Sarcoma Telehealth Institute</h3>
                <div className="clinic-location">
                  <i className="fas fa-globe"></i>
                  <span>Serving: West Coast</span>
                </div>
                <p className="clinic-description">
                  Specialized in providing telehealth services for sarcoma patients with a focus on molecular testing and precision medicine.
                </p>
              </div>
            </section>

            {/* Virtual Second Opinion Section */}
            <section className="virtual-opinion-section">
              <h2>
                <i className="fas fa-file-medical"></i>
                Virtual Second Opinion Resources
              </h2>

              <p className="virtual-opinion-intro">
                Getting a second opinion at a sarcoma center is crucial. Many hospitals now offer virtual second opinions, making it
                easier to access expert opinions without the need for travel.
              </p>

              <div className="opinion-service">
                <h3 className="opinion-service-name">Sarcoma Second Opinion Service</h3>
                <p className="opinion-service-description">Expert reviews of your medical records, no travel required.</p>
              </div>

              <div className="opinion-service">
                <h3 className="opinion-service-name">Cancer eConsults</h3>
                <p className="opinion-service-description">Virtual consultations with top oncologists nationwide.</p>
                <a href="#" className="external-link">
                  <i className="fas fa-external-link-alt"></i>
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
