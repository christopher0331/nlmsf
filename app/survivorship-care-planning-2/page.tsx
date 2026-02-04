import type { Metadata } from "next";
import Image from "next/image";
import "./survivorship-care-planning-2.css";

export const metadata: Metadata = {
  title: "Survivorship Care Planning | NLMSF",
  description:
    "Survivorship care planning guidance, resources, and examples for life after treatment.",
};

export default function SurvivorshipCarePlanningTwoPage() {
  return (
    <main className="survivorship-care-planning-page">
      <section className="survivorship-hero">
        <div className="hero-container">
          <div className="resource-tag">Patient Resources</div>
          <h1 className="hero-title">Survivorship Care Planning</h1>
          <p className="hero-subtitle">
            The roadmap to &quot;a new normal&quot; of moving forward with living for the patient
            and their family. Studies have shown that putting such a plan in place enhances
            survival.
          </p>
        </div>

        <div className="hero-card">
          <p>
            Survivorship Care Planning after treatment involves the oncologist, the oncology care
            team, the patient, and their family/caregivers who have been supporting them throughout
            the treatment phase.
          </p>
        </div>
      </section>

      <section className="survivorship-layout">
        <aside className="survivorship-sidebar">
          <h3 className="sidebar-heading">Quick Navigation</h3>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#introduction" className="sidebar-link">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#why-important" className="sidebar-link">
                  Why Survivorship Care is Important
                </a>
              </li>
              <li>
                <a href="#information-needed" className="sidebar-link">
                  Information Needed
                </a>
              </li>
              <li>
                <a href="#use-of-plan" className="sidebar-link">
                  Using Your Care Plan
                </a>
              </li>
              <li>
                <a href="#related-resources" className="sidebar-link">
                  Related Resources
                </a>
              </li>
              <li>
                <a href="#planning-models" className="sidebar-link">
                  Planning Models
                </a>
              </li>
              <li>
                <a href="#follow-up-care" className="sidebar-link">
                  Follow-Up Care
                </a>
              </li>
              <li>
                <a href="#examples" className="sidebar-link">
                  Examples
                </a>
              </li>
            </ul>
          </nav>

          <h3 className="sidebar-callout">Live Your Best Life!</h3>
          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2020/03/sunset.jpg"
            alt="Sunset"
            className="sidebar-image"
            width={756}
            height={159}
          />
        </aside>

        <div className="survivorship-content">
          <Image
            className="survivorship-logo"
            src="https://media.nlmsf.org/wp-content/uploads/2025/05/ChatGPT-Image-May-6-2025-03_16_15-PM.png"
            alt="NLMSF survivorship logo"
            width={500}
            height={260}
          />

          <div id="introduction" className="content-section introduction-section">
            <div className="section-header">
              <h2 className="section-title">Introduction to Survivorship Care Planning</h2>
            </div>
            <div className="section-body">
              <p>
                Survivorship care planning is a process that helps cancer survivors in transitioning
                from active treatment to post-treatment care. It involves the creation of a written
                or digital document that outlines the care a cancer survivor received and the plan
                for follow-up care.
              </p>
              <p>
                The plan is created by healthcare professionals, typically oncologists or nurse
                practitioners, in collaboration with the patient and serves as a roadmap for the
                survivor&apos;s health journey after active cancer treatment.
              </p>
              <p>
                This comprehensive document helps ensure coordination between the oncology team and
                primary care providers, addressing the unique health needs of cancer survivors as
                they navigate life after treatment.
              </p>
            </div>
          </div>

          <div id="why-important" className="content-section why-important-section">
            <div className="section-header">
              <h2 className="section-title">Why Survivorship Care is Important</h2>
            </div>
            <div className="section-body">
              <p>
                Survivorship care planning plays a crucial role in ensuring coordinated care
                following cancer treatment. Research indicates that comprehensive survivorship care
                is essential for addressing the long-term effects of cancer and its treatment,
                monitoring for cancer recurrence, and improving overall quality of life.
              </p>
              <p>
                The Institute of Medicine recommends survivorship care plans for all cancer
                survivors to help patients transition from active treatment to post-treatment care.
                These plans provide a structured approach to managing ongoing physical and
                psychosocial effects, promoting regular follow-up care, and reducing unnecessary
                healthcare utilization.
              </p>
              <div className="info-box why-important-box">
                <p>
                  With advancements in treatments, more people are surviving cancer than ever
                  before. However, many survivors face challenges related to the aftereffects of
                  treatment, emotional well-being, and navigating the healthcare system. A
                  survivorship care plan addresses these issues in a comprehensive manner.
                </p>
              </div>
            </div>
          </div>

          <div id="information-needed" className="content-section information-section">
            <div className="section-header">
              <h2 className="section-title">What Information Do I Need to Create a Care Plan?</h2>
            </div>
            <div className="section-body">
              <p>
                The OncoLife Survivorship Care Plan is a &quot;survivorship care plan&quot; that is
                individualized based on the answers you provide in a brief questionnaire. In order
                to develop the most accurate plan of care, you may need to talk to your oncology
                team to have some details of your cancer therapy available:
              </p>
              <ul className="info-list">
                <li>Type of cancer</li>
                <li>If you underwent surgery, what procedures were done?</li>
                <li>If you received chemotherapy, what medications were received?</li>
                <li>If you received radiation therapy, what type of cancer was this done for?</li>
              </ul>
            </div>
          </div>

          <div id="use-of-plan" className="content-section use-plan-section">
            <div className="section-header">
              <h2 className="section-title">What Should I Do with the Plan?</h2>
            </div>
            <div className="section-body">
              <p>
                This care plan is meant for you to review and discuss with your healthcare team
                (both oncology and primary care). Keep in mind that every case is different and the
                risks of some side effects vary based on the actual dose of radiation or
                chemotherapy that were received or the techniques that were used to administer
                these therapies.
              </p>
              <div className="important-note">
                <p>
                  It is very important to review your plan of care with the oncology team to
                  further clarify your risk.
                </p>
              </div>
            </div>
          </div>

          <div id="related-resources" className="content-section resources-section">
            <div className="section-header">
              <h2 className="section-title">Related Resources</h2>
            </div>
            <div className="section-body">
              <p className="resource-intro">Click titles for more information:</p>
              <ul className="resource-list">
                <li className="resource-item">
                  <a
                    href="https://www.cancer.gov/publications/patient-education/facing-forward"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="resource-arrow">→</span>
                    <span className="resource-title">
                      Facing Forward: Life After Cancer Treatment
                    </span>
                  </a>
                </li>
                <li className="resource-item">
                  <a
                    href="https://canceradvocacy.org/resources/care-planning-for-cancer-survivors/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="resource-arrow">→</span>
                    <span className="resource-title">
                      Care Planning for Cancer Survivors - NCCS
                    </span>
                  </a>
                </li>
                <li className="resource-item">
                  <a
                    href="https://www.uchealth.com/en/media-room/articles/what-does-a-cancer-survivorship-care-plan-look-like"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="resource-arrow">→</span>
                    <span className="resource-title">
                      What Does a Cancer Survivorship Care Plan Look Like?
                    </span>
                  </a>
                </li>
                <li className="resource-item">
                  <a
                    href="https://nci.rev.vbrick.com/#/videos/c0819a71-0fd2-412b-ba48-7efb962af23a"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="resource-arrow">→</span>
                    <span className="resource-title">
                      A video from the NCI, Office of Cancer Survivorship
                    </span>
                  </a>
                </li>
              </ul>
              <div className="note-box">
                <p>
                  <strong>NOTE:</strong> Partnering with your oncologist/oncology care team for your
                  continued care is important in rebuilding quality of life after treatment with a
                  survivorship care plan in place.
                </p>
              </div>
            </div>
          </div>

          <div id="planning-models" className="content-section planning-models-section">
            <div className="section-header">
              <h2 className="section-title">Survivorship Care Planning Models</h2>
            </div>
            <div className="section-body">
              <p className="models-intro">Various Sources for General Guidance:</p>
              <div className="models-content">
                <p>
                  Please visit the following sites to become acquainted with what will help you to
                  navigate issues during treatment, as well as after treatment is completed. This
                  information is helpful to discuss with your oncologist / medical care team.
                </p>
                <p>
                  Cancer.Net and the American Society of Clinical Oncology (ASCO) have put together
                  wonderful, helpful guidance that will benefit you after treatment and enhance
                  your survivorship through careful, ongoing connection with your oncology/medical
                  care team.
                </p>
              </div>
              <div className="models-links">
                <p>The following link will take you to this important information:</p>
                <a
                  href="https://www.cancer.net/survivorship/what-survivorship"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="models-button"
                >
                  Visit Cancer.Net Survivorship Resources
                </a>
                <p className="models-url">
                  <a
                    href="https://www.cancer.net/survivorship/what-survivorship"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    https://www.cancer.net/survivorship/what-survivorship
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div id="follow-up-care" className="content-section follow-up-section">
            <div className="section-header">
              <h2 className="section-title">Coping – Follow-Up Medical Care</h2>
            </div>
            <div className="section-body">
              <h3 className="follow-up-subtitle">National Cancer Institute Resources</h3>
              <div className="follow-up-content">
                <div className="follow-up-icon">
                  <svg viewBox="0 0 24 24" className="icon-document" aria-hidden="true">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="follow-up-text">
                  <p>
                    <span className="follow-up-highlight">Key Recommendation:</span> Once you&apos;re
                    done with cancer treatment, you should receive a follow-up cancer plan from your
                    doctor. All cancer survivors should have follow-up care.
                  </p>
                  <a
                    href="http://www.cancer.gov/about-cancer/coping/survivorship/follow-up-care"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="follow-up-button"
                  >
                    Visit NCI Follow-Up Care Resources
                  </a>
                  <p className="follow-up-url">
                    <a
                      href="http://www.cancer.gov/about-cancer/coping/survivorship/follow-up-care"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      www.cancer.gov/about-cancer/coping/survivorship/follow-up-care
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="examples" className="content-section examples-section">
            <div className="section-header">
              <h2 className="section-title">Examples of Cancer Care Plans</h2>
              <p className="examples-subtitle">The power of survivorship</p>
            </div>

            <div className="example-item cancer-net">
              <div className="example-header">
                <h3 className="example-title">
                  Follow-up Care After Cancer Treatment | Cancer.Net
                </h3>
              </div>
              <div className="example-body">
                <div className="example-icon">
                  <svg viewBox="0 0 24 24" className="icon-globe" aria-hidden="true">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="example-content">
                  <p>
                    Follow-up Care After Cancer Treatment. ... of your follow-up care plan once
                    treatment is ... information from the American Society of Clinical Oncology ...
                  </p>
                  <a
                    href="http://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="example-button"
                  >
                    Visit Cancer.Net Resources
                  </a>
                  <p className="example-url">
                    <a
                      href="http://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="example-item care-planning">
              <div className="example-header">
                <h3 className="example-title">An Updated Survivorship Care Planning Template</h3>
              </div>
              <div className="example-body">
                <div className="example-icon">
                  <svg viewBox="0 0 24 24" className="icon-document" aria-hidden="true">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="example-content">
                  <p>
                    ... the American Society of Clinical Oncology (ASCO) released an updated cancer
                    survivorship care planning template and resources for healthcare providers.
                  </p>
                  <a
                    href="https://www.canceradvocacy.org/news/an-updated-survivorship-care"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="example-button"
                  >
                    Visit Cancer Advocacy
                  </a>
                  <p className="example-url">
                    <a
                      href="https://www.canceradvocacy.org/news/an-updated-survivorship-care"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      https://www.canceradvocacy.org/news/an-updated-survivorship-care
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
