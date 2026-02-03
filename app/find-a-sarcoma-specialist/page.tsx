import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./find-a-sarcoma-specialist.css";

export const metadata: Metadata = {
  title: "Find a Sarcoma Specialist | NLMSF",
  description:
    "Connect with experienced sarcoma specialists. Find sarcoma centers, oncologists, second opinions, and resources for leiomyosarcoma care.",
};

export default function FindASarcomaSpecialistPage() {
  return (
    <div className="find-sarcoma-specialist-page">
      {/* Hero */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-user-md" aria-hidden />
          <span>Expert Care</span>
        </div>
        <h1 className="hero-title">Find a Sarcoma Specialist</h1>
        <div className="divider" aria-hidden />
        <p className="hero-description">
          Connect with experienced sarcoma specialists who can provide the expert care you need for your leiomyosarcoma diagnosis.
        </p>
        <div className="feature-tags">
          <div className="feature-tag indigo">
            <i className="fas fa-hospital" aria-hidden />
            <span>Sarcoma Centers</span>
          </div>
          <div className="feature-tag amber">
            <i className="fas fa-stethoscope" aria-hidden />
            <span>Oncologists</span>
          </div>
          <div className="feature-tag rose">
            <i className="fas fa-calendar-check" aria-hidden />
            <span>Second Opinions</span>
          </div>
        </div>
      </div>

      <div className="intro-panel">
        <p>
          Finding the right specialist is a crucial step in your treatment journey. Sarcoma specialists have the expertise and experience to provide the most effective care for rare cancers like leiomyosarcoma.
        </p>
      </div>

      <div className="page-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">On This Page</h3>
            <div className="sidebar-nav">
              <div className="nav-item">
                <a href="#why-specialist" className="nav-link">
                  <span className="nav-icon purple" aria-hidden />
                  <span>Why a Sarcoma Specialist</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#finding-specialist" className="nav-link">
                  <span className="nav-icon blue" aria-hidden />
                  <span>Finding a Specialist</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#sarcoma-centers" className="nav-link sub-link">
                  <span className="nav-icon teal small" aria-hidden />
                  <span>Sarcoma Centers</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#oncologists" className="nav-link sub-link">
                  <span className="nav-icon teal small" aria-hidden />
                  <span>Sarcoma Oncologists</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#second-opinion" className="nav-link sub-link">
                  <span className="nav-icon teal small" aria-hidden />
                  <span>Getting a Second Opinion</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#questions" className="nav-link">
                  <span className="nav-icon orange" aria-hidden />
                  <span>Questions to Ask</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#insurance" className="nav-link">
                  <span className="nav-icon red" aria-hidden />
                  <span>Insurance Considerations</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#resources" className="nav-link">
                  <span className="nav-icon indigo" aria-hidden />
                  <span>Additional Resources</span>
                </a>
              </div>
            </div>
            <div className="sidebar-action">
              <Link href="/newly-diagnosed/" className="back-button">
                <i className="fas fa-arrow-left" aria-hidden />
                <span>Back to Newly Diagnosed</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="content">
          {/* Community Resources */}
          <div className="content-section community-resources-section">
            <div className="community-description">
              <p>
                We&apos;re offering all the information we have about finding sarcoma specialists on this page, but you can also join our communities and subscribe to our newsletter and bi-weekly snapshots (delivered the same way) to stay up to date and get immediate support outside of our webpage resources.
              </p>
            </div>
            <div className="community-resources-grid">
              <div className="community-resource-card facebook-groups">
                <div className="resource-header">
                  <div className="resource-icon">
                    <i className="fab fa-facebook" aria-hidden />
                  </div>
                  <h3>Facebook Groups</h3>
                </div>
                <div className="facebook-groups-list">
                  <div className="facebook-group-item">
                    <div className="group-info">
                      <h4>NLMSF Support Group</h4>
                    </div>
                    <a href="https://www.facebook.com/groups/leiomyosarcomasupportgroup" className="group-link" target="_blank" rel="noopener noreferrer">Join</a>
                  </div>
                  <div className="facebook-group-item">
                    <div className="group-info">
                      <h4>Stand Up to LMS</h4>
                    </div>
                    <a href="https://www.facebook.com/groups/cancerleiomyosarcoma" className="group-link" target="_blank" rel="noopener noreferrer">Join</a>
                  </div>
                  <div className="facebook-group-item">
                    <div className="group-info">
                      <h4>Cancer Sucks - LMS</h4>
                    </div>
                    <a href="https://www.facebook.com/groups/573285557042465/" className="group-link" target="_blank" rel="noopener noreferrer">Join</a>
                  </div>
                </div>
              </div>
              <div className="community-resource-card newsletter-signup">
                <div className="resource-header">
                  <div className="resource-icon">
                    <i className="fas fa-envelope" aria-hidden />
                  </div>
                  <h3>Newsletter &amp; Snapshots</h3>
                </div>
                <div className="newsletter-form">
                  <form action="/api/send-email" method="POST">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <button type="submit" className="newsletter-submit-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Why a Sarcoma Specialist */}
          <section id="why-specialist" className="content-section">
            <h2 className="section-title">Why You Need a Sarcoma Specialist</h2>
            <div className="section-content">
              <div className="info-card">
                <div className="info-card-header">
                  <i className="fas fa-exclamation-circle" aria-hidden />
                  <h3>Sarcomas Require Specialized Care</h3>
                </div>
                <p>Leiomyosarcoma (LMS) is a rare cancer that many general oncologists may see only a few times in their entire career. Sarcoma specialists have extensive experience treating these rare cancers and stay current with the latest treatment approaches.</p>
                <ul className="benefit-list">
                  <li><strong>Accurate diagnosis:</strong> Specialists are more likely to correctly identify and stage your sarcoma</li>
                  <li><strong>Treatment expertise:</strong> Knowledge of the most effective protocols for different types and stages of LMS</li>
                  <li><strong>Access to clinical trials:</strong> Information about innovative treatments that may not be widely available</li>
                  <li><strong>Multidisciplinary approach:</strong> Coordination with surgical oncologists, radiation oncologists, and other specialists</li>
                </ul>
              </div>
              <blockquote className="testimonial">
                <p>&quot;Finding a sarcoma specialist completely changed my treatment plan. My local oncologist recommended one approach, but the specialist at a sarcoma center suggested a different protocol that proved much more effective for my specific case.&quot;</p>
                <cite>— Sarah, LMS Survivor</cite>
              </blockquote>
            </div>
          </section>

          {/* Finding a Specialist */}
          <section id="finding-specialist" className="content-section">
            <h2 className="section-title">Finding a Specialist</h2>
            <div className="section-content">
              <p className="section-intro">
                There are several ways to find sarcoma specialists who have experience treating leiomyosarcoma. The following resources can help you connect with expert care.
              </p>

              <div id="sarcoma-centers" className="subsection">
                <h3 className="subsection-title">Sarcoma Centers of Excellence</h3>
                <p>Sarcoma Centers of Excellence are medical facilities that specialize in the diagnosis and treatment of sarcomas. These centers typically have teams of specialists who work together to provide comprehensive care.</p>
                <div className="centers-grid">
                  <div className="center-card">
                    <div className="center-card-inner">
                      <Image
                        src="https://nlsmf.org/wp-content/uploads/2021/02/SARC.jpg"
                        alt="SARC Logo"
                        className="center-card-img"
                        width={240}
                        height={240}
                      />
                      <div className="center-content">
                        <h4>SARC Sarcoma Centers Directory</h4>
                        <p>The Sarcoma Alliance for Research through Collaboration (SARC) enhanced Sarcoma Centers Directory (SCD) helps patients, families, and medical communities find specialized sarcoma expertise across the US and globally.</p>
                        <a href="https://sarctrials.org/sarcoma-centers" className="resource-link" target="_blank" rel="noopener noreferrer">SARC Sarcoma Centers <i className="fas fa-external-link-alt" aria-hidden /></a>
                      </div>
                    </div>
                  </div>
                  <div className="center-card">
                    <div className="center-icon">
                      <i className="fas fa-hospital-alt" aria-hidden />
                    </div>
                    <div className="center-content">
                      <h4>NCI-Designated Cancer Centers</h4>
                      <p>The National Cancer Institute recognizes centers with exceptional research and treatment capabilities.</p>
                      <a href="https://www.cancer.gov/research/infrastructure/cancer-centers/find" className="resource-link" target="_blank" rel="noopener noreferrer">Find NCI Centers <i className="fas fa-external-link-alt" aria-hidden /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div id="oncologists" className="subsection">
                <h3 className="subsection-title">Sarcoma Oncologists</h3>
                <p>Sarcoma oncologists are doctors who specialize in the medical treatment of sarcomas. They typically have additional training and experience in treating these rare cancers.</p>
                <div className="specialist-finder">
                  <h4>Finding a Sarcoma Oncologist</h4>
                  <ul className="resource-list">
                    <li>
                      <a href="https://www.cancer.net/find-cancer-doctor" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-user-md" aria-hidden />
                        <span>ASCO&apos;s Cancer.Net Doctor Database</span>
                        <i className="fas fa-external-link-alt" aria-hidden />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lmsdr.org/resources/physicians/" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-user-md" aria-hidden />
                        <span>LMS Direct Research Foundation Physician List</span>
                        <i className="fas fa-external-link-alt" aria-hidden />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.leiomyosarcoma.info/physicians.html" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-user-md" aria-hidden />
                        <span>Leiomyosarcoma Support &amp; Direct Research Foundation</span>
                        <i className="fas fa-external-link-alt" aria-hidden />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="second-opinion" className="subsection">
                <h3 className="subsection-title">Getting a Second Opinion</h3>
                <p>Even if you&apos;ve already seen an oncologist, getting a second opinion from a sarcoma specialist is highly recommended. This is especially important for rare cancers like leiomyosarcoma.</p>
                <div className="info-card">
                  <div className="info-card-header">
                    <i className="fas fa-clipboard-check" aria-hidden />
                    <h3>When to Get a Second Opinion</h3>
                  </div>
                  <ul className="check-list">
                    <li>After initial diagnosis, before starting treatment</li>
                    <li>If you&apos;re unsure about your treatment plan</li>
                    <li>If your cancer isn&apos;t responding to treatment</li>
                    <li>Before undergoing major surgery</li>
                    <li>If you&apos;re considering a clinical trial</li>
                  </ul>
                </div>
                <p>Many insurance plans cover second opinions, and some even require them before certain treatments. Check with your insurance provider about their policy on second opinions.</p>
                <div className="tip-box">
                  <div className="tip-header">
                    <i className="fas fa-lightbulb" aria-hidden />
                    <h4>Tip: Prepare for Your Second Opinion</h4>
                  </div>
                  <p>Before your appointment, gather all your medical records, including:</p>
                  <ul>
                    <li>Pathology reports</li>
                    <li>Imaging studies (CT scans, MRIs, etc.)</li>
                    <li>Lab results</li>
                    <li>Current treatment plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Questions to Ask */}
          <section id="questions" className="content-section">
            <h2 className="section-title">Questions to Ask Your Specialist</h2>
            <div className="section-content">
              <p className="section-intro">
                Preparing questions in advance can help you make the most of your appointment with a sarcoma specialist. Here are some important questions to consider asking:
              </p>
              <div className="questions-grid">
                <div className="question-card">
                  <div className="question-header">
                    <i className="fas fa-diagnoses" aria-hidden />
                    <h4>About Your Diagnosis</h4>
                  </div>
                  <ul className="question-list">
                    <li>What type and subtype of leiomyosarcoma do I have?</li>
                    <li>What is the stage and grade of my cancer?</li>
                    <li>Has my diagnosis been confirmed by a pathologist who specializes in sarcomas?</li>
                    <li>What additional tests do you recommend?</li>
                  </ul>
                </div>
                <div className="question-card">
                  <div className="question-header">
                    <i className="fas fa-procedures" aria-hidden />
                    <h4>About Treatment Options</h4>
                  </div>
                  <ul className="question-list">
                    <li>What treatment options do you recommend and why?</li>
                    <li>What are the goals of treatment (cure, control, comfort)?</li>
                    <li>What are the potential side effects of each treatment?</li>
                    <li>Are there any clinical trials I should consider?</li>
                  </ul>
                </div>
                <div className="question-card">
                  <div className="question-header">
                    <i className="fas fa-user-md" aria-hidden />
                    <h4>About Your Specialist</h4>
                  </div>
                  <ul className="question-list">
                    <li>How many LMS patients have you treated?</li>
                    <li>Do you work with a multidisciplinary team?</li>
                    <li>How do you stay current with the latest LMS treatments?</li>
                    <li>Who should I contact with questions between appointments?</li>
                  </ul>
                </div>
              </div>
              <div className="download-box">
                <i className="fas fa-file-download" aria-hidden />
                <div className="download-content">
                  <h4>Printable Question Guide</h4>
                  <p>Download our comprehensive list of questions to bring to your appointment.</p>
                </div>
                <a href="#" className="download-button">Download PDF</a>
              </div>
            </div>
          </section>

          {/* Insurance Considerations */}
          <section id="insurance" className="content-section">
            <h2 className="section-title">Insurance Considerations</h2>
            <div className="section-content">
              <p className="section-intro">
                Navigating insurance coverage for specialist care can be challenging. Here are some important considerations and tips:
              </p>
              <div className="insurance-grid">
                <div className="insurance-card">
                  <div className="insurance-icon">
                    <i className="fas fa-network-wired" aria-hidden />
                  </div>
                  <div className="insurance-content">
                    <h4>In-Network vs. Out-of-Network</h4>
                    <p>Check if the specialist is in your insurance network. Out-of-network care may have higher costs, but many plans make exceptions for rare cancer specialists.</p>
                    <div className="tip"><strong>Tip:</strong> Ask your insurance company about their exception process for rare cancer treatment.</div>
                  </div>
                </div>
                <div className="insurance-card">
                  <div className="insurance-icon">
                    <i className="fas fa-file-medical-alt" aria-hidden />
                  </div>
                  <div className="insurance-content">
                    <h4>Prior Authorization</h4>
                    <p>Many treatments require prior authorization from your insurance company. Your specialist&apos;s office can help with this process.</p>
                    <div className="tip"><strong>Tip:</strong> Start the authorization process as early as possible to avoid treatment delays.</div>
                  </div>
                </div>
                <div className="insurance-card">
                  <div className="insurance-icon">
                    <i className="fas fa-hand-holding-usd" aria-hidden />
                  </div>
                  <div className="insurance-content">
                    <h4>Financial Assistance</h4>
                    <p>If you&apos;re concerned about costs, ask about financial assistance programs. Many cancer centers have financial counselors who can help.</p>
                    <div className="tip"><strong>Tip:</strong> Organizations like the Patient Advocate Foundation can help navigate insurance challenges.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section id="resources" className="content-section">
            <h2 className="section-title">Additional Resources</h2>
            <div className="section-content">
              <div className="resources-grid">
                <a href="https://www.cancer.gov/rare-brain-spine-tumor/research/rare-brain-spine-clinic" className="resource-card indigo" target="_blank" rel="noopener noreferrer">
                  <div className="resource-icon">
                    <i className="fas fa-hospital" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h4>NCI Rare Tumor Clinic</h4>
                    <p>Information about the NCI&apos;s clinic for rare tumors, including sarcomas</p>
                  </div>
                  <i className="fas fa-external-link-alt" aria-hidden />
                </a>
                <a href="https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/by-stage.html" className="resource-card blue" target="_blank" rel="noopener noreferrer">
                  <div className="resource-icon">
                    <i className="fas fa-book-medical" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h4>American Cancer Society</h4>
                    <p>Information about sarcoma treatment approaches by stage</p>
                  </div>
                  <i className="fas fa-external-link-alt" aria-hidden />
                </a>
                <a href="https://sarcomaalliance.org/resources/financial-assistance/" className="resource-card teal" target="_blank" rel="noopener noreferrer">
                  <div className="resource-icon">
                    <i className="fas fa-dollar-sign" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h4>Financial Assistance</h4>
                    <p>Sarcoma Alliance&apos;s guide to financial resources for patients</p>
                  </div>
                  <i className="fas fa-external-link-alt" aria-hidden />
                </a>
                <Link href="/contact/" className="resource-card rose">
                  <div className="resource-icon">
                    <i className="fas fa-users" aria-hidden />
                  </div>
                  <div className="resource-content">
                    <h4>Denver Sarcoma Support Group</h4>
                    <p>Connect with other sarcoma patients in the Denver area</p>
                  </div>
                  <i className="fas fa-external-link-alt" aria-hidden />
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Image CTA */}
          <section className="featured-image-section">
            <div className="featured-image">
              <Image
                src="/images/doctor-patient-consultation.jpg"
                alt="Doctor consulting with patient"
                width={1200}
                height={800}
              />
            </div>
            <div className="image-overlay">
              <h3>Need Help Finding a Specialist?</h3>
              <p>Our patient navigators can help you connect with sarcoma specialists and understand your treatment options.</p>
              <div className="cta-buttons">
                <Link href="/contact/" className="primary-cta">Contact a Navigator</Link>
                <Link href="/community-snapshot-news/" className="secondary-cta">Join Our Community</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
