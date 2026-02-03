import type { Metadata } from "next";
import Link from "next/link";
import "./pathology-report-accuracy.css";

export const metadata: Metadata = {
  title: "Pathology Report Accuracy | NLMSF",
  description:
    "Critical information to help you understand your pathology report, diagnosis, and treatment options.",
};

export default function PathologyReportAccuracyPage() {
  return (
    <div className="pathology-report-page">
      <section className="abcs-hero">
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        <div className="hero-content">
          <h1 className="hero-title">Understanding Your Pathology Report</h1>
          <div className="divider"></div>
          <p className="hero-description">
            Critical information to help you understand your diagnosis and
            treatment options
          </p>
        </div>
      </section>

      <div className="content-container pathology-layout">
        <aside className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">On This Page</h3>
            <div className="sidebar-nav">
              <div className="nav-item">
                <a href="#overview" className="nav-link">
                  <span className="nav-icon blue"></span>
                  <span>Overview</span>
                </a>
                <div className="subnav">
                  <a href="#basic-concepts" className="subnav-link">
                    Basic Concepts
                  </a>
                  <a href="#purpose-use" className="subnav-link">
                    Purpose &amp; Use
                  </a>
                </div>
              </div>

              <div className="nav-item">
                <a href="#cancer-grading" className="nav-link">
                  <span className="nav-icon teal"></span>
                  <span>Cancer Grading</span>
                </a>
                <div className="subnav">
                  <a href="#grading-definition" className="subnav-link">
                    Definition &amp; Purpose
                  </a>
                  <a href="#grading-systems" className="subnav-link">
                    Grading Systems
                  </a>
                </div>
              </div>

              <div className="nav-item">
                <a href="#cancer-staging" className="nav-link">
                  <span className="nav-icon blue"></span>
                  <span>Cancer Staging</span>
                </a>
                <div className="subnav">
                  <a href="#staging-definition" className="subnav-link">
                    Definition &amp; Purpose
                  </a>
                  <a href="#staging-systems" className="subnav-link">
                    Staging Systems
                  </a>
                  <a href="#staging-methods" className="subnav-link">
                    Staging Methods
                  </a>
                </div>
              </div>

              <div className="nav-item">
                <a href="#key-differences" className="nav-link">
                  <span className="nav-icon purple"></span>
                  <span>Key Differences</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#importance-treatment" className="nav-link">
                  <span className="nav-icon red"></span>
                  <span>Importance in Treatment</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#sarcoma-specific" className="nav-link">
                  <span className="nav-icon orange"></span>
                  <span>Sarcoma-Specific Info</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="content-section">
          <section id="overview" className="diagnostic-card">
            <div className="card-header">
              <div className="icon-circle icon-blue">
                <i className="fas fa-file-medical" aria-hidden />
              </div>
              <h3>The Importance of an Accurate Pathology Report</h3>
            </div>
            <p>
              The pathologist&apos;s analysis of tumor tissue is an absolute
              critical starting point for an accurate diagnosis, in order to
              plan for the appropriate treatment protocol. Diagnosing soft
              tissue sarcomas can be challenging even with adequate biopsies or
              resection specimens.
            </p>
            <p>
              Soft tissue sarcomas are rare cancers with more than 100 different
              subgroups and tremendous morphologic heterogeneity. Based on the
              fact that pathologic diagnosis dictates prognosis and treatment,
              patients suffering from this orphan disease should receive a{" "}
              <b>second opinion from a soft tissue pathologist before a final
              treatment decision is made.</b>
            </p>
            <p>
              <strong>Takeaway message:</strong> Patients should be mandatorily
              treated in specialized centers by a multidisciplinary team in
              close cooperation with physicians interested in this orphan
              disease.
            </p>

            <div className="resource-link">
              <p>
                Reference:{" "}
                <a
                  href="https://link.springer.com/article/10.1007/s12254-020-00574-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The importance of pathology to ensure an accurate diagnosis is
                  obtained
                </a>
              </p>
            </div>
            <div className="video-resource" id="basic-concepts">
              <h4 className="video-title">The Pathologist&apos;s Role in Sarcoma Care</h4>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=493xTdzUjes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch on YouTube
                </a>
              </p>
            </div>
          </section>

          <section id="purpose-use" className="treatment-card">
            <div className="card-header">
              <div className="icon-circle icon-green">
                <i className="fas fa-stethoscope" aria-hidden />
              </div>
              <h3>Critical Distinctions in Diagnosis</h3>
            </div>
            <ul className="custom-bullet-list green-bullet">
              <li>
                Distinguishing benign tissue from a malignant tumor is critical
                to setting the path of treatment modalities to consider
              </li>
              <li>
                Histology grade is important – which establishes surgical
                planning and marginal or simple excision vs wide excision
              </li>
              <li>
                Sarcoma grading includes &quot;tumor differentiation&quot; which
                is essentially the diagnostic category
              </li>
              <li>
                The mitotic rate count and tumor necrosis determination are
                important components of pathology assessment
              </li>
            </ul>

            <div className="card note-card">
              <h3 className="card-title">Important Notes</h3>
              <ul className="custom-bullet-list green-bullet">
                <li>Some sarcomas are not graded – some experts say that LMS is not gradable</li>
                <li>Many sarcomas are translocation-associated</li>
                <li>
                  If the sarcoma is found to be of &quot;high grade&quot; – it
                  might be easier to recognize in biopsies
                </li>
              </ul>
            </div>
          </section>

          <section id="sarcoma-specific" className="diagnostic-card">
            <div className="card-header">
              <div className="icon-circle icon-blue">
                <i className="fas fa-dna" aria-hidden />
              </div>
              <h3>Molecular Pathology</h3>
            </div>
            <p>
              Molecular pathology is a vital piece of the sarcoma puzzle.
              Identifying the presence of proteins in a tumor sample and genomic
              sequencing along with other molecular analysis to pinpoint a
              sarcoma&apos;s unique characteristics / gene
              characterization/sequencing is part of the pathology process.
            </p>
            <p>
              Genetic abnormalities that are known to drive sarcoma growth are
              also involved in molecular diagnostic tests.
            </p>

            <div className="quote-block">
              <p>
                &quot;Knowing what drives a tumor is what allows for pinpointing
                the best treatment approach, but with LMS, the gene mutation
                burden is quite low.&quot;
              </p>
            </div>
          </section>

          <section id="cancer-grading" className="pathology-guide-card highlight-card">
            <div className="card-header">
              <div className="icon-circle icon-purple">
                <i className="fas fa-file-alt" aria-hidden />
              </div>
              <h3>UNDERSTANDING YOUR PATHOLOGY REPORT: A Patient&apos;s Guide</h3>
            </div>
            <p>
              Knowing what &quot;drives&quot; the tumor allows for pinpointing the
              best treatment approach. Staging the tumor - establishing its
              size, and possible spread based on the above, plus
              &quot;differentiation&quot; of the cancer cells, and the mitotic
              rate, including possible evidence of tumor &quot;necrosis&quot; -
              all contribute to the grading of the tumor.
            </p>
            <div className="resource-link" id="grading-definition">
              <p>
                <a
                  href="https://askyourpathologist.com/understanding-your-pathology-report-a-patients-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the Complete Guide to Understanding Your Pathology Report
                </a>
              </p>
            </div>

            <h4 className="term-heading" id="grading-systems">
              Key Terms in Pathology Reports
            </h4>
            <div className="term-boxes">
              <div className="term-box">
                <h5>Differentiation</h5>
                <p>
                  In cancer, this describes how much or how little tumor tissue
                  looks like the normal tissue it came from. Well-differentiated
                  cancer cells look more like normal cells and tend to grow and
                  spread more slowly than poorly differentiated or
                  undifferentiated cancer cells.
                </p>
              </div>
              <div className="term-box">
                <h5>Mitotic Rate</h5>
                <p>
                  Mitotic rate measures how fast melanoma cells are dividing and
                  growing. It is a prognostic factor that can help predict
                  outcomes and treatment options.
                </p>
              </div>
              <div className="term-box">
                <h5>Necrosis</h5>
                <p>
                  Necrotic tumors are masses with dead tissue inside, caused by
                  insufficient blood flow to the tumor cells. A form of cell
                  death that can affect cancer treatment and prognosis.
                </p>
              </div>
            </div>
          </section>

          <div id="cancer-staging" className="grid-layout cols-2">
            <div className="imaging-card">
              <div className="card-header">
                <div className="icon-circle icon-purple">
                  <i className="fas fa-video" aria-hidden />
                </div>
                <h3>Educational Resources</h3>
              </div>
              <p>
                Dr. Brian Van Tine leads a discussion about the diagnostic
                workup of a new patient, the usefulness of imaging and genetic
                testing, and more in this informative video.
              </p>
              <div className="resource-link" id="staging-definition">
                <p>
                  <a
                    href="https://www.youtube.com/watch?v=61rBFlWg-2w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accurately Diagnosing the Soft Tissue Sarcoma - YouTube
                  </a>
                </p>
              </div>
            </div>

            <div className="treatment-card" id="staging-systems">
              <div className="card-header">
                <div className="icon-circle icon-green">
                  <i className="fas fa-chart-bar" aria-hidden />
                </div>
                <h3>Cancer Staging Information</h3>
              </div>
              <p>
                The stages of soft tissue sarcomas range from stages I (1)
                through IV (4). As a rule, the lower the number, the less the
                cancer has spread. A higher number, such as stage IV, means
                cancer has spread more.
              </p>
              <div className="resource-link">
                <p>
                  <a
                    href="https://www.cancer.net/cancer-types/sarcomas-soft-tissue/stages-and-grades"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sarcoma Tumor Staging and Grading Explained by Cancer.Net
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div id="key-differences"></div>
          <div id="importance-treatment"></div>

          <h2 className="section-title" id="staging-methods">
            Staging &amp; Grading
          </h2>

          <div className="card staging-card">
            <h3 className="card-title">
              <i className="fas fa-exclamation-circle" aria-hidden />
              <span>Important Information</span>
            </h3>
            <p>
              Understanding staging and grading is crucial when interpreting
              your pathology report. Staging determines the extent of cancer
              spread, while grading assesses how aggressive the cancer cells
              appear.
            </p>
            <p>
              For comprehensive information about how tumors are staged and
              graded, including the specifics for sarcoma classification, please
              visit our detailed guide:
            </p>
            <Link href="/staging-lms-tumors" className="sidebar-button">
              Complete Staging &amp; Grading Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
