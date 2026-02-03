import type { Metadata } from "next";
import "./staging-lms-tumors.css";

export const metadata: Metadata = {
  title: "Staging vs Grading of Cancer Tumors | NLMSF",
  description:
    "Understand the difference between staging and grading, why it matters, and sarcoma-specific considerations.",
};

export default function StagingLmsTumorsPage() {
  return (
    <main className="nlmsf-staging-grading">
      <div className="nlmsf-container">
        <section className="nlmsf-hero-container">
          <div className="nlmsf-hero-gradient" aria-hidden />
          <div className="nlmsf-hero-content">
            <div className="nlmsf-hero-badge">Patient Education</div>
            <h1 className="nlmsf-hero-title">Staging vs Grading of Cancer Tumors</h1>
            <p className="nlmsf-hero-description">
              Understanding the difference between staging and grading is crucial for patients
              with cancer, including those with Leiomyosarcoma (LMS). This page explains these
              concepts, their importance in treatment planning, and specific information relevant to
              sarcoma patients.
            </p>
            <div className="nlmsf-hero-button-container">
              <a href="#differences" className="nlmsf-hero-button">
                Learn the Key Differences
                <i className="fas fa-arrow-right" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <div className="nlmsf-layout">
          <aside className="nlmsf-sidebar-container">
            <h3 className="nlmsf-sidebar-title">On This Page</h3>
            <ul className="nlmsf-sidebar-nav">
              <li className="nlmsf-sidebar-item">
                <a href="#overview" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon blue">
                    <i className="fas fa-info" aria-hidden />
                  </div>
                  <span>Overview</span>
                </a>
                <ul className="nlmsf-sidebar-submenu">
                  <li>
                    <a href="#basic-concepts">Basic Concepts</a>
                  </li>
                  <li>
                    <a href="#purpose">Purpose &amp; Use</a>
                  </li>
                </ul>
              </li>

              <li className="nlmsf-sidebar-item">
                <a href="#grading" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon teal">
                    <i className="fas fa-balance-scale" aria-hidden />
                  </div>
                  <span>Cancer Grading</span>
                </a>
                <ul className="nlmsf-sidebar-submenu">
                  <li>
                    <a href="#grading-definition">Definition &amp; Purpose</a>
                  </li>
                  <li>
                    <a href="#grading-systems">Grading Systems</a>
                  </li>
                </ul>
              </li>

              <li className="nlmsf-sidebar-item">
                <a href="#staging" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon indigo">
                    <i className="fas fa-bullseye" aria-hidden />
                  </div>
                  <span>Cancer Staging</span>
                </a>
                <ul className="nlmsf-sidebar-submenu">
                  <li>
                    <a href="#staging-definition">Definition &amp; Purpose</a>
                  </li>
                  <li>
                    <a href="#staging-methods">Staging Methods</a>
                  </li>
                </ul>
              </li>

              <li className="nlmsf-sidebar-item">
                <a href="#differences" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon purple">
                    <i className="fas fa-not-equal" aria-hidden />
                  </div>
                  <span>Key Differences</span>
                </a>
              </li>

              <li className="nlmsf-sidebar-item">
                <a href="#importance" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon rose">
                    <i className="fas fa-stethoscope" aria-hidden />
                  </div>
                  <span>Importance in Treatment</span>
                </a>
              </li>

              <li className="nlmsf-sidebar-item">
                <a href="#sarcoma-specific" className="nlmsf-sidebar-link">
                  <div className="nlmsf-sidebar-icon amber">
                    <i className="fas fa-dna" aria-hidden />
                  </div>
                  <span>Sarcoma-Specific Info</span>
                </a>
              </li>
            </ul>
          </aside>

          <div className="nlmsf-content">
            <div className="nlmsf-content-intro">
              <p>
                Understanding the difference between staging and grading is crucial for patients
                with cancer, including those with Leiomyosarcoma (LMS). This page explains these
                concepts, their importance in treatment planning, and specific information relevant
                to sarcoma patients.
              </p>
            </div>

            <section id="overview" className="nlmsf-content-section">
              <h2 className="nlmsf-section-title blue">Overview: Staging vs Grading</h2>

              <div id="basic-concepts" className="nlmsf-subsection blue">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle blue">
                    <i className="fas fa-info" aria-hidden />
                  </div>
                  <div>
                    <h3>Basic Concepts</h3>
                    <p>Understanding staging and grading fundamentals</p>
                  </div>
                </div>

                <p>
                  When a patient is diagnosed with cancer, healthcare professionals use two distinct
                  but complementary classification systems to assess the cancer:{" "}
                  <span className="font-bold">staging</span> and{" "}
                  <span className="font-bold">grading</span>.
                </p>

                <div className="nlmsf-concept-grid">
                  <div className="nlmsf-concept-card">
                    <div className="nlmsf-concept-icon blue">
                      <i className="fas fa-balance-scale" aria-hidden />
                    </div>
                    <h4>Grading</h4>
                    <p>
                      <span className="font-bold">Assesses the appearance of cancer cells</span>{" "}
                      under a microscope, indicating how aggressive the cancer cells look compared
                      to normal cells and how quickly they might grow and spread.
                    </p>
                  </div>

                  <div className="nlmsf-concept-card">
                    <div className="nlmsf-concept-icon blue">
                      <i className="fas fa-bullseye" aria-hidden />
                    </div>
                    <h4>Staging</h4>
                    <p>
                      <span className="font-bold">Evaluates the extent of cancer</span> in the body,
                      including the size of the tumor, its location, and whether it has spread to
                      nearby lymph nodes or other parts of the body.
                    </p>
                  </div>
                </div>
              </div>

              <div id="purpose" className="nlmsf-subsection blue">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle blue">
                    <i className="fas fa-clipboard-check" aria-hidden />
                  </div>
                  <div>
                    <h3>Purpose &amp; Use</h3>
                    <p>How these classifications guide treatment decisions</p>
                  </div>
                </div>

                <p>Both staging and grading serve important but different purposes in cancer care:</p>

                <ul className="nlmsf-bullet-list">
                  <li>
                    <span className="font-bold">Diagnosis:</span> They help confirm and characterize
                    the type of cancer.
                  </li>
                  <li>
                    <span className="font-bold">Prognosis:</span> They provide insight into the
                    likely course of the disease.
                  </li>
                  <li>
                    <span className="font-bold">Treatment Planning:</span> They guide decisions about
                    appropriate treatment options.
                  </li>
                  <li>
                    <span className="font-bold">Research:</span> They enable comparison of similar
                    cases in clinical studies.
                  </li>
                  <li>
                    <span className="font-bold">Communication:</span> They provide standardized terms
                    for healthcare providers to discuss cases.
                  </li>
                </ul>
              </div>
            </section>

            <section id="differences" className="nlmsf-content-section">
              <h2 className="nlmsf-section-title purple">Key Differences</h2>

              <div className="nlmsf-subsection purple">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle purple">
                    <i className="fas fa-not-equal" aria-hidden />
                  </div>
                  <div>
                    <h3>Staging vs Grading: Understanding the Distinctions</h3>
                    <p>How these two systems differ but work together</p>
                  </div>
                </div>

                <div className="nlmsf-comparison-table">
                  <div className="nlmsf-comparison-row header">
                    <div className="nlmsf-comparison-cell">Aspect</div>
                    <div className="nlmsf-comparison-cell">Staging</div>
                    <div className="nlmsf-comparison-cell">Grading</div>
                  </div>

                  <div className="nlmsf-comparison-row">
                    <div className="nlmsf-comparison-cell aspect">Focus</div>
                    <div className="nlmsf-comparison-cell">
                      <i className="fas fa-globe-americas" aria-hidden />
                      <br />
                      Extent and spread of cancer in the body
                    </div>
                    <div className="nlmsf-comparison-cell">
                      <i className="fas fa-microscope" aria-hidden />
                      <br />
                      Appearance and behavior of cancer cells
                    </div>
                  </div>

                  <div className="nlmsf-comparison-row">
                    <div className="nlmsf-comparison-cell aspect">Assessment</div>
                    <div className="nlmsf-comparison-cell">
                      Based on tumor size, lymph node involvement, and metastasis (TNM system)
                    </div>
                    <div className="nlmsf-comparison-cell">
                      Based on cellular appearance, differentiation, and other microscopic features
                    </div>
                  </div>

                  <div className="nlmsf-comparison-row">
                    <div className="nlmsf-comparison-cell aspect">Methods</div>
                    <div className="nlmsf-comparison-cell">
                      Physical exams, imaging (CT, MRI, PET), surgery, biopsies
                    </div>
                    <div className="nlmsf-comparison-cell">
                      Microscopic examination of tissue samples by a pathologist
                    </div>
                  </div>

                  <div className="nlmsf-comparison-row">
                    <div className="nlmsf-comparison-cell aspect">Purpose</div>
                    <div className="nlmsf-comparison-cell">
                      Guides treatment decisions and predicts prognosis based on cancer&apos;s physical
                      spread
                    </div>
                    <div className="nlmsf-comparison-cell">
                      Indicates aggressiveness and potential behavior of the cancer
                    </div>
                  </div>

                  <div className="nlmsf-comparison-row">
                    <div className="nlmsf-comparison-cell aspect">Timing</div>
                    <div className="nlmsf-comparison-cell">
                      Can change over time as cancer progresses or responds to treatment
                    </div>
                    <div className="nlmsf-comparison-cell">
                      Generally remains consistent throughout the course of the disease
                    </div>
                  </div>
                </div>

                <div className="nlmsf-info-box purple">
                  <div className="nlmsf-info-box-icon">
                    <i className="fas fa-lightbulb" aria-hidden />
                  </div>
                  <div className="nlmsf-info-box-content">
                    <h4>Important Note</h4>
                    <p>
                      A high-grade tumor (more aggressive cells) can be found at any stage. Similarly,
                      a low-grade tumor (less aggressive cells) could potentially be at an advanced
                      stage if it has spread widely.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="grading" className="nlmsf-content-section">
              <h2 className="nlmsf-section-title teal">Cancer Grading</h2>

              <div id="grading-definition" className="nlmsf-subsection teal">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle teal">
                    <i className="fas fa-microscope" aria-hidden />
                  </div>
                  <div>
                    <h3>Definition &amp; Purpose</h3>
                    <p>What cancer grading tells us about the disease</p>
                  </div>
                </div>

                <p>
                  Grading is a measure of{" "}
                  <span className="font-bold">
                    how abnormal the cancer cells look under a microscope
                  </span>{" "}
                  compared to healthy cells. The more abnormal the cells appear, the higher the
                  grade and the more aggressive the cancer is likely to be.
                </p>

                <div className="nlmsf-info-box teal">
                  <div className="nlmsf-info-box-icon">
                    <i className="fas fa-lightbulb" aria-hidden />
                  </div>
                  <div className="nlmsf-info-box-content">
                    <h4>Key Fact</h4>
                    <p>
                      Grading focuses on the cellular characteristics and is primarily determined by
                      a pathologist examining tissue samples under a microscope after a biopsy or
                      surgery.
                    </p>
                  </div>
                </div>
              </div>

              <div id="grading-systems" className="nlmsf-subsection teal">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle teal">
                    <i className="fas fa-list-ol" aria-hidden />
                  </div>
                  <div>
                    <h3>Grading Systems</h3>
                    <p>Different ways cancer cells are classified by appearance</p>
                  </div>
                </div>

                <p>Different cancers use specific grading systems, but most follow similar principles:</p>

                <div className="nlmsf-grading-table">
                  <div className="nlmsf-grading-row header">
                    <div className="nlmsf-grading-cell">Grade</div>
                    <div className="nlmsf-grading-cell">Description</div>
                    <div className="nlmsf-grading-cell">Characteristics</div>
                  </div>

                  <div className="nlmsf-grading-row">
                    <div className="nlmsf-grading-cell grade">
                      Grade 1
                      <br />
                      <span>(Low Grade)</span>
                    </div>
                    <div className="nlmsf-grading-cell">Well-differentiated</div>
                    <div className="nlmsf-grading-cell">
                      Cells look similar to normal cells and are well-organized.
                      <br />
                      Generally slow-growing with less tendency to spread.
                    </div>
                  </div>

                  <div className="nlmsf-grading-row">
                    <div className="nlmsf-grading-cell grade">Grade 2</div>
                    <div className="nlmsf-grading-cell">Moderately differentiated</div>
                    <div className="nlmsf-grading-cell">
                      Cells have features between low and high grade.
                      <br />
                      Moderately abnormal appearance and growth rate.
                    </div>
                  </div>

                  <div className="nlmsf-grading-row">
                    <div className="nlmsf-grading-cell grade">
                      Grade 3
                      <br />
                      <span>(High Grade)</span>
                    </div>
                    <div className="nlmsf-grading-cell">Poorly differentiated</div>
                    <div className="nlmsf-grading-cell">
                      Cells look very abnormal and disorganized.
                      <br />
                      Tend to grow rapidly and spread more aggressively.
                    </div>
                  </div>

                  <div className="nlmsf-grading-row">
                    <div className="nlmsf-grading-cell grade">
                      Grade 4
                      <br />
                      <span>(High Grade)</span>
                    </div>
                    <div className="nlmsf-grading-cell">Undifferentiated</div>
                    <div className="nlmsf-grading-cell">
                      Cells look primitive and immature.
                      <br />
                      Very aggressive with high risk of spreading.
                    </div>
                  </div>
                </div>

                <p className="nlmsf-note">
                  <span className="font-bold">Note:</span> For soft tissue sarcomas like LMS, the
                  French Federation of Cancer Centers Sarcoma Group (FNCLCC) system is commonly used,
                  which evaluates differentiation, mitotic count, and necrosis.
                </p>
              </div>
            </section>

            <section id="staging" className="nlmsf-content-section">
              <h2 className="nlmsf-section-title indigo">Cancer Staging</h2>

              <div id="staging-definition" className="nlmsf-subsection indigo">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle indigo">
                    <i className="fas fa-map-marker-alt" aria-hidden />
                  </div>
                  <div>
                    <h3>Definition &amp; Purpose</h3>
                    <p>What cancer staging tells us about the disease</p>
                  </div>
                </div>

                <p>
                  Staging describes the{" "}
                  <span className="font-bold">extent or spread of cancer at the time of diagnosis</span>.
                  It helps determine how serious the cancer is and the best treatment options.
                </p>

                <div className="nlmsf-info-box indigo">
                  <div className="nlmsf-info-box-icon">
                    <i className="fas fa-lightbulb" aria-hidden />
                  </div>
                  <div className="nlmsf-info-box-content">
                    <h4>Key Fact</h4>
                    <p>
                      Staging is determined through physical exams, imaging tests (CT scans, MRIs,
                      PET scans), lab tests, pathology reports from biopsies, and sometimes surgical
                      findings.
                    </p>
                  </div>
                </div>
              </div>

              <div id="staging-methods" className="nlmsf-subsection indigo">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle indigo">
                    <i className="fas fa-search" aria-hidden />
                  </div>
                  <div>
                    <h3>Staging Methods</h3>
                    <p>How doctors determine the stage of cancer</p>
                  </div>
                </div>

                <p>Staging is a complex process that integrates information from multiple sources:</p>

                <div className="nlmsf-methods-grid">
                  <div className="nlmsf-method-card">
                    <div className="nlmsf-method-icon indigo">
                      <i className="fas fa-handshake" aria-hidden />
                    </div>
                    <h4>Clinical Staging</h4>
                    <p>
                      Based on physical exams, imaging studies, and initial biopsies before treatment
                      begins.
                    </p>
                  </div>

                  <div className="nlmsf-method-card">
                    <div className="nlmsf-method-icon indigo">
                      <i className="fas fa-procedures" aria-hidden />
                    </div>
                    <h4>Pathological Staging</h4>
                    <p>
                      Based on surgery and examination of removed tissue, providing more accurate
                      information.
                    </p>
                  </div>

                  <div className="nlmsf-method-card">
                    <div className="nlmsf-method-icon indigo">
                      <i className="fas fa-sync-alt" aria-hidden />
                    </div>
                    <h4>Restaging</h4>
                    <p>
                      Determines if cancer has progressed, regressed, or remained stable after
                      treatment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="sarcoma-specific" className="nlmsf-content-section">
              <div className="nlmsf-subsection amber">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle amber">
                    <i className="fas fa-dna" aria-hidden />
                  </div>
                  <div>
                    <h3>LMS and Other Sarcomas</h3>
                    <p>Special considerations for soft tissue sarcomas</p>
                  </div>
                </div>

                <p>
                  Soft tissue sarcomas, including Leiomyosarcoma (LMS), have some unique
                  characteristics in their staging and grading:
                </p>

                <div className="nlmsf-info-box amber">
                  <div className="nlmsf-info-box-icon">
                    <i className="fas fa-exclamation-circle" aria-hidden />
                  </div>
                  <div className="nlmsf-info-box-content">
                    <h4>Important for Sarcoma Patients</h4>
                    <p>
                      For sarcomas, grade is often incorporated into the staging system, highlighting
                      how critical the cellular characteristics are in determining the behavior of
                      these rare cancers.
                    </p>
                  </div>
                </div>

                <h4 className="nlmsf-subsection-subtitle">Sarcoma Grading Systems</h4>
                <p>
                  The most widely used grading system for soft tissue sarcomas is the French
                  Federation of Cancer Centers Sarcoma Group (FNCLCC) system, which scores three
                  factors:
                </p>

                <ul className="nlmsf-bullet-list">
                  <li>
                    <span className="font-bold">Differentiation Score:</span> How closely the cancer
                    cells resemble normal cells
                  </li>
                  <li>
                    <span className="font-bold">Mitotic Count:</span> How many cancer cells are
                    actively dividing
                  </li>
                  <li>
                    <span className="font-bold">Tumor Necrosis:</span> How much of the tumor is made
                    up of dying tissue
                  </li>
                </ul>

                <p>These scores are added to determine the grade:</p>

                <ul className="nlmsf-bullet-list highlight">
                  <li>Grade 1: Total score of 2-3</li>
                  <li>Grade 2: Total score of 4-5</li>
                  <li>Grade 3: Total score of 6-8</li>
                </ul>

                <h4 className="nlmsf-subsection-subtitle">Sarcoma Staging</h4>
                <p>
                  The American Joint Committee on Cancer (AJCC) system for soft tissue sarcomas
                  considers:
                </p>

                <ul className="nlmsf-bullet-list">
                  <li>
                    <span className="font-bold">Tumor size and depth:</span> Larger and deeper tumors
                    generally have a worse prognosis
                  </li>
                  <li>
                    <span className="font-bold">Lymph node involvement:</span> Though less common in
                    sarcomas than in other cancers
                  </li>
                  <li>
                    <span className="font-bold">Distant metastasis:</span> Often to the lungs in
                    sarcomas
                  </li>
                  <li>
                    <span className="font-bold">Grade:</span> A critical factor that significantly
                    influences staging in sarcomas
                  </li>
                </ul>

                <div className="nlmsf-tips-box">
                  <h4>Tips for Patients</h4>
                  <ul className="nlmsf-tips-list">
                    <li>Always ask for clarification about both the stage and grade of your sarcoma</li>
                    <li>Request copies of your pathology and imaging reports</li>
                    <li>
                      Consider seeking a second opinion from a sarcoma specialist, as these are rare
                      cancers
                    </li>
                    <li>Join patient support groups to connect with others who understand your experience</li>
                    <li>Keep a record of your test results and treatment history</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="importance" className="nlmsf-content-section">
              <h2 className="nlmsf-section-title rose">Importance in Treatment Planning</h2>

              <div className="nlmsf-subsection rose">
                <div className="nlmsf-subsection-header">
                  <div className="icon-circle rose">
                    <i className="fas fa-stethoscope" aria-hidden />
                  </div>
                  <div>
                    <h3>Medical Decision Making</h3>
                    <p>How staging and grading influence your care</p>
                  </div>
                </div>

                <p>
                  Both staging and grading play crucial roles in determining the most appropriate
                  treatment approach:
                </p>

                <div className="nlmsf-treatment-grid">
                  <div className="nlmsf-treatment-card">
                    <div className="nlmsf-treatment-icon rose">
                      <i className="fas fa-pills" aria-hidden />
                    </div>
                    <h4>Treatment Selection</h4>
                    <p>
                      Staging and grading help determine whether surgery, radiation therapy,
                      chemotherapy, targeted therapy, immunotherapy, or a combination is most
                      appropriate.
                    </p>
                  </div>

                  <div className="nlmsf-treatment-card">
                    <div className="nlmsf-treatment-icon rose">
                      <i className="fas fa-chart-line" aria-hidden />
                    </div>
                    <h4>Prognosis</h4>
                    <p>
                      They provide information about the expected course of the disease and
                      likelihood of recovery, helping patients understand their outlook.
                    </p>
                  </div>

                  <div className="nlmsf-treatment-card">
                    <div className="nlmsf-treatment-icon rose">
                      <i className="fas fa-users" aria-hidden />
                    </div>
                    <h4>Clinical Trials</h4>
                    <p>
                      Staging and grading can determine eligibility for clinical trials, potentially
                      providing access to cutting-edge treatments.
                    </p>
                  </div>

                  <div className="nlmsf-treatment-card">
                    <div className="nlmsf-treatment-icon rose">
                      <i className="fas fa-comments" aria-hidden />
                    </div>
                    <h4>Communication</h4>
                    <p>
                      They provide a common language for healthcare providers to discuss cases and
                      for patients to better understand their condition.
                    </p>
                  </div>
                </div>

                <div className="nlmsf-quote-box">
                  <i className="fas fa-quote-left" aria-hidden />
                  <blockquote>
                    "Understanding your cancer&apos;s stage and grade empowers you to participate more
                    actively in treatment decisions and to have more informed discussions with your
                    healthcare team."
                  </blockquote>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
