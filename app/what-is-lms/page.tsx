import type { Metadata } from "next";
import "./what-is-lms.css";
import SidebarNav from "./SidebarNav";

export const metadata: Metadata = {
  title: "What Is Leiomyosarcoma? | NLMSF",
  description:
    "Understand leiomyosarcoma (LMS), including diagnosis, treatment options, and resources.",
};

export default function WhatIsLmsPage() {
  return (
    <main className="what-lms-page">
      <section className="what-lms-hero">
        <div className="what-lms-hero-content">
          <div className="what-lms-badge">
            <span className="what-lms-badge-dot" aria-hidden="true" />
            <span>Understanding LMS</span>
          </div>
          <h1>What is Leiomyosarcoma?</h1>
          <div className="what-lms-divider" />
          <p>
            Understanding Leiomyosarcoma (LMS), its diagnosis, and treatment options.
          </p>
          <div className="what-lms-tags">
            <span className="what-lms-tag blue">Rare Cancer Type</span>
            <span className="what-lms-tag indigo">Affects Smooth Muscle</span>
          </div>
        </div>
        <div className="what-lms-hero-decor decor-one" aria-hidden="true" />
        <div className="what-lms-hero-decor decor-two" aria-hidden="true" />
      </section>

      <section className="what-lms-intro">
        <div className="what-lms-card purple">
          <div className="what-lms-card-header">
            <span className="what-lms-icon purple" aria-hidden="true" />
            <h3>What is LMS?</h3>
          </div>
          <div className="what-lms-card-body">
            <p>
              Leiomyosarcoma is a form of cancer characterized by abnormal, uncontrolled cellular
              growth that invades tissues and may spread to distant body sites via the bloodstream or
              lymphatic system.
            </p>
            <p>
              It is a type of soft tissue sarcoma arising from the connective tissue that connects,
              supports, and surrounds various structures and organs.
            </p>
            <p>
              A deeper dive into the details from the University of California, San Francisco
              (UCSF):{" "}
              <a
                href="https://surgery.ucsf.edu/condition/leiomyosarcoma"
                target="_blank"
                rel="noopener noreferrer"
              >
                UCSF Leiomyosarcoma Overview
              </a>
              .
            </p>
          </div>
        </div>

        <div className="what-lms-card blue">
          <div className="what-lms-card-header">
            <span className="what-lms-icon blue" aria-hidden="true" />
            <h3>Occurrence</h3>
          </div>
          <div className="what-lms-card-body">
            <ul className="what-lms-checklist">
              <li>Soft tissue sarcomas are rare (less than 1% of all new cancer cases).</li>
              <li>About 13,520 new cases expected in 2025 (7,600 in men, 5,920 in women).</li>
              <li>LMS accounts for 10-20% of all soft tissue sarcomas.</li>
            </ul>
          </div>
        </div>

        <div className="what-lms-card teal">
          <div className="what-lms-card-header">
            <span className="what-lms-icon teal" aria-hidden="true" />
            <h3>Origin &amp; Biology</h3>
          </div>
          <div className="what-lms-card-body">
            <p>
              LMS arises from <strong>smooth muscle cells</strong> - involuntary muscles not
              consciously controlled by the brain.
            </p>
            <ul className="what-lms-bullets teal">
              <li>Digestive tract: creates wave-like contractions for food transport.</li>
              <li>Salivary glands: releases saliva in response to eating.</li>
              <li>Skin: forms goose bumps in response to cold.</li>
            </ul>
          </div>
        </div>

        <div className="what-lms-card amber">
          <div className="what-lms-card-header">
            <span className="what-lms-icon amber" aria-hidden="true" />
            <h3>Common Locations</h3>
          </div>
          <div className="what-lms-card-body">
            <p>
              Since smooth muscle exists throughout the body, LMS can form almost anywhere blood
              vessels are present.
            </p>
            <div className="what-lms-locations">
              <span>Abdomen</span>
              <span>Retroperitoneum</span>
              <span>Uterus</span>
              <span>Extremities</span>
            </div>
          </div>
        </div>

        <div className="what-lms-card indigo">
          <div className="what-lms-card-header">
            <span className="what-lms-icon indigo" aria-hidden="true" />
            <h3>Spread &amp; Causes</h3>
          </div>
          <div className="what-lms-card-body">
            <ul className="what-lms-bullets indigo">
              <li>LMS typically spreads via the bloodstream.</li>
              <li>Very rarely spreads through the lymphatic system.</li>
              <li>There are no known causes of leiomyosarcoma.</li>
            </ul>
          </div>
        </div>

        <div className="what-lms-card rose">
          <div className="what-lms-card-header">
            <span className="what-lms-icon rose" aria-hidden="true" />
            <h3>About This Guide</h3>
          </div>
          <div className="what-lms-card-body">
            <p>
              This page provides essential information to help you understand LMS diagnosis,
              treatment options, and resources in clear, accessible language.
            </p>
          </div>
        </div>
      </section>

      <section className="what-lms-layout">
        <SidebarNav />

        <div className="what-lms-main">
          <section className="what-lms-community content-section">
            <p>
              We are offering all the information we have about leiomyosarcoma on this page, but
              you can also join our communities and subscribe to our newsletter and bi-weekly
              snapshots (delivered the same way) to stay up to date and get immediate support
              outside of our webpage resources.
            </p>
            <div className="what-lms-community-grid">
              <div className="what-lms-community-card">
                <h3>Facebook Groups</h3>
                <div className="what-lms-group-list">
                  <div className="what-lms-group-item">
                    <span>NLMSF Support Group</span>
                    <a
                      href="https://www.facebook.com/groups/leiomyosarcomasupportgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join
                    </a>
                  </div>
                  <div className="what-lms-group-item">
                    <span>Stand Up to LMS</span>
                    <a
                      href="https://www.facebook.com/groups/cancerleiomyosarcoma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join
                    </a>
                  </div>
                  <div className="what-lms-group-item">
                    <span>Cancer Sucks - LMS</span>
                    <a
                      href="https://www.facebook.com/groups/573285557042465/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join
                    </a>
                  </div>
                </div>
              </div>

              <div className="what-lms-community-card">
                <h3>Newsletter &amp; Snapshots</h3>
                <form className="what-lms-form" action="/api/send-email" method="POST">
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </section>

          <section id="diagnosis" className="content-section">
            <h2 className="section-title blue">Diagnosis</h2>

            <div className="content-panel blue">
              <div className="panel-header">
                <span className="panel-icon blue" aria-hidden="true" />
                <div>
                  <h3>Initial Assessment</h3>
                  <p>The first steps in diagnosing Leiomyosarcoma.</p>
                </div>
              </div>
              <p className="panel-text">
                If your doctor suspects you may have Leiomyosarcoma, they will likely perform a
                physical examination and order several tests. The diagnosis process typically
                involves:
              </p>
              <ul className="panel-list blue">
                <li>Physical examination to check for any visible or palpable abnormalities.</li>
                <li>Review of your medical history and symptoms.</li>
                <li>Various imaging tests to identify the location and extent of the tumor.</li>
                <li>Biopsy to confirm the diagnosis.</li>
              </ul>
            </div>

            <div className="content-panel indigo">
              <div className="panel-header">
                <span className="panel-icon indigo" aria-hidden="true" />
                <div>
                  <h3>Imaging Tests</h3>
                  <p>Common imaging tests used in LMS diagnosis.</p>
                </div>
              </div>
              <div className="what-lms-grid">
                <div className="what-lms-grid-card blue">
                  <h4>X-ray</h4>
                  <p>
                    Examination of the possible area of cancer to look for tumors or to see if
                    there is any spread beyond the cancer&apos;s origin.
                  </p>
                </div>
                <div className="what-lms-grid-card teal">
                  <h4>CT Scan</h4>
                  <p>
                    A painless, non-invasive way to see inside the body using X-ray imaging.
                    Creates cross-sectional images of soft tissue, organs, blood vessels, and bone
                    that can be combined into 3D pictures.
                  </p>
                </div>
                <div className="what-lms-grid-card amber">
                  <h4>MRI Scan</h4>
                  <p>Captures detailed images of the inside of the body using magnetic fields and radio waves.</p>
                </div>
                <div className="what-lms-grid-card indigo">
                  <h4>PET/CT Scan</h4>
                  <p>
                    Combines CT imaging with a radioactive glucose solution to track cancer cells,
                    which absorb glucose more quickly than healthy cells.
                  </p>
                </div>
                <div className="what-lms-grid-card rose">
                  <h4>Ultrasound</h4>
                  <p>Uses sound waves to create pictures of organs, veins, and arteries.</p>
                </div>
                <div className="what-lms-grid-card emerald">
                  <h4>Angiogram</h4>
                  <p>
                    Uses X-ray and contrast dye injected through a catheter to check blood vessels
                    and blood flow for blockages or leakage.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-panel teal">
              <div className="panel-header">
                <span className="panel-icon teal" aria-hidden="true" />
                <div>
                  <h3>Biopsy</h3>
                  <p>The definitive test for LMS diagnosis.</p>
                </div>
              </div>
              <p className="panel-text">
                A biopsy is necessary to confirm a diagnosis of Leiomyosarcoma. During this
                procedure:
              </p>
              <ul className="panel-list teal">
                <li>A sample of tissue is removed from the suspected tumor.</li>
                <li>The sample is examined under a microscope by a pathologist.</li>
                <li>Special tests may be performed on the tissue to determine the exact type of tumor.</li>
                <li>Results help determine the grade and stage of the cancer.</li>
              </ul>
            </div>
          </section>

          <section id="treatment" className="content-section">
            <h2 className="section-title indigo">Treatment</h2>

            <div className="content-panel indigo">
              <div className="panel-header">
                <span className="panel-icon indigo" aria-hidden="true" />
                <div>
                  <h3>Treatment Overview</h3>
                  <p>Understanding your treatment options for Leiomyosarcoma.</p>
                </div>
              </div>
              <p className="panel-text">
                Treatment for Leiomyosarcoma typically involves a combination of approaches. Your
                specific treatment plan will depend on several factors, including:
              </p>
              <ul className="panel-list indigo">
                <li>The size and location of the tumor.</li>
                <li>Whether the cancer has spread.</li>
                <li>Your overall health and preferences.</li>
                <li>The grade and stage of the cancer.</li>
              </ul>
            </div>

            <div className="what-lms-subsection">
              <h3>Treatment Options</h3>
              <div className="what-lms-grid options">
                <div className="what-lms-option-card blue">
                  <h4>Surgery</h4>
                  <p>Tumor resection with wide margins to enhance potential for non-recurrence.</p>
                </div>
                <div className="what-lms-option-card amber">
                  <h4>Radiation Therapy</h4>
                  <p>Used to destroy cancer cells while preserving surrounding organ function.</p>
                </div>
                <div className="what-lms-option-card emerald">
                  <h4>Chemotherapy</h4>
                  <p>Various drug combinations including gemcitabine-docetaxel and trabectedin.</p>
                </div>
                <div className="what-lms-option-card rose">
                  <h4>Targeted Drug Therapy</h4>
                  <p>Directed at specific molecular features, often including Pazopanib.</p>
                </div>
                <div className="what-lms-option-card purple">
                  <h4>Immunotherapy</h4>
                  <p>Treatment that uses the body&apos;s immune system to help fight cancer.</p>
                </div>
              </div>
            </div>

            <div className="content-panel purple">
              <div className="panel-header">
                <span className="panel-icon purple" aria-hidden="true" />
                <div>
                  <h3>Clinical Trials</h3>
                  <p>Exploring additional treatment options.</p>
                </div>
              </div>
              <p className="panel-text">
                Clinical trials may provide access to new treatments that are not yet widely
                available. These trials:
              </p>
              <ul className="panel-list purple">
                <li>Test new drugs, combinations of drugs, or other treatments.</li>
                <li>Help researchers understand which approaches work better for different patients.</li>
                <li>May provide treatment options when standard treatments have not worked.</li>
                <li>Contribute to the advancement of cancer treatment for future patients.</li>
              </ul>
            </div>
          </section>

          <section id="resources" className="content-section">
            <h2 className="section-title teal">Resources</h2>

            <div className="content-panel teal">
              <div className="panel-header">
                <span className="panel-icon teal" aria-hidden="true" />
                <div>
                  <h3>Types of Leiomyosarcoma</h3>
                  <p>Learn about different types of LMS and where they can occur.</p>
                </div>
              </div>
              <p className="panel-text">
                Leiomyosarcoma can develop in different parts of the body. Click on each type to
                learn more about its specific characteristics, symptoms, and treatment approaches.
              </p>
              <div className="what-lms-type-grid">
                <a
                  href="https://www.dovemed.com/diseases-conditions/leiomyosarcoma-blood-vessel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blood Vessel LMS
                </a>
                <a
                  href="https://www.hindawi.com/journals/sarcoma/2012/636849/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bone LMS
                </a>
                <a
                  href="https://www.dovemed.com/diseases-conditions/leiomyosarcoma-breast/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Breast LMS
                </a>
                <a
                  href="https://www.dovemed.com/diseases-conditions/cardiac-leiomyosarcoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cardiac LMS
                </a>
                <a
                  href="https://www.dovemed.com/diseases-conditions/primary-cutaneous-leiomyosarcoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cutaneous LMS
                </a>
                <a href="https://nlmsf.org/uterine-lms" target="_blank" rel="noopener noreferrer">
                  Uterine LMS
                </a>
              </div>

              <div className="what-lms-research">
                <h4>Research Resources</h4>
                <p>For detailed information about genomic research in uterine sarcomas, visit:</p>
                <a
                  href="https://clincancerres.aacrjournals.org/content/26/14/3881"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Genomic landscape of uterine sarcomas (07/2020 - M. Hensley, MD)
                </a>
              </div>
            </div>

            <div className="content-panel indigo">
              <div className="panel-header">
                <span className="panel-icon indigo" aria-hidden="true" />
                <div>
                  <h3>Medical Terms Dictionary</h3>
                  <p>Understanding medical terminology.</p>
                </div>
              </div>
              <p className="panel-text">
                The National Cancer Institute (NCI) offers a guide to over 8,000 cancer terms. The
                NCI Dictionary is an easy-to-use resource that helps patients and their families
                better comprehend medical articles that contain unfamiliar terminology.
              </p>
              <a
                href="https://www.cancer.gov/publications/dictionaries/cancer-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="what-lms-dictionary"
              >
                Visit NCI Dictionary of Cancer Terms
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
