import type { Metadata } from "next";
import Image from "next/image";
import "./new-diagnosis.css";

export const metadata: Metadata = {
  title: "New Diagnosis | NLMSF",
  description:
    "Information and resources to help you navigate a new Leiomyosarcoma diagnosis.",
};

export default function NewDiagnosisPage() {
  return (
    <div className="new-diagnosis-page">
      {/* Hero Component for Newly Diagnosed Page */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-stethoscope"></i>
          <span>Newly Diagnosed</span>
        </div>

        <h1 className="hero-title">Understanding Your LMS Diagnosis</h1>

        <div className="divider"></div>

        <p className="hero-description">
          Information and resources to help you navigate a new Leiomyosarcoma diagnosis. The NLMSF provides comprehensive
          guidance for patients and their families at every step of the journey.
        </p>

        <div className="feature-tags">
          <div className="feature-tag purple">
            <i className="fas fa-hospital"></i>
            <span>Treatment Options</span>
          </div>
          <div className="feature-tag blue">
            <i className="fas fa-search"></i>
            <span>Finding Specialists</span>
          </div>
          <div className="feature-tag teal">
            <i className="fas fa-users"></i>
            <span>Support Network</span>
          </div>
        </div>
      </div>

      <div className="new-diagnosis-layout container">
        <div className="sidebar">
          <h3 className="sidebar-title">Newly Diagnosed Resources</h3>
          <ul className="sidebar-links">
            <li>
              <a href="#what-is-lms" className="sidebar-link">
                <i className="fas fa-info-circle"></i>
                <span>Understanding LMS</span>
              </a>
            </li>
            <li>
              <a href="#finding-care" className="sidebar-link">
                <i className="fas fa-hospital-user"></i>
                <span>Finding Specialized Care</span>
              </a>
            </li>
            <li>
              <a href="#additional-resources" className="sidebar-link">
                <i className="fas fa-book-medical"></i>
                <span>Additional Resources</span>
              </a>
            </li>
            <li>
              <a href="#denver-cta" className="sidebar-link denver-link">
                <i className="fas fa-map-marked-alt"></i>
                <span>Denver Resources</span>
              </a>
            </li>
          </ul>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Quick Links</h3>
            <div className="quick-help">
              <div className="help-item">
                <i className="fas fa-question-circle"></i>
                <div className="help-details">
                  <a href="https://nlmsf.org/what-is-lms/" target="_blank" rel="noopener noreferrer">
                    What is LMS?
                  </a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-user-md"></i>
                <div className="help-details">
                  <a href="https://nlmsf.org/find-a-sarcoma-specialist/" target="_blank" rel="noopener noreferrer">
                    Find a Sarcoma Specialist
                  </a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-procedures"></i>
                <div className="help-details">
                  <a
                    href="https://nlmsf.org/navigating-leiomyosarcoma-treatment-after-treatment/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Treatment Overview
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Featured Resource</h3>
            <div className="featured-resource">
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/10/NLMSF-2021-Brochure-March-2021.jpg"
                alt="NLMSF Brochure"
                className="featured-image"
                width={240}
                height={240}
              />
              <h4>NLMSF Patient &amp; Family Brochure</h4>
              <p>Access our comprehensive guide for patients and families newly diagnosed with LMS.</p>
              <a
                href="https://nlmsf.org/wp-content/uploads/2021/10/NLMSF-2021-Brochure-March-2021.pdf"
                className="resource-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Recommended Reading</h3>
            <div className="podcast-links">
              <div className="podcast-item">
                <i className="fas fa-book"></i>
                <div className="podcast-details">
                  <strong>Navigating Your LMS Diagnosis</strong>
                  <a
                    href="https://nlmsf.org/navigating-leiomyosarcoma-treatment-after-treatment/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="podcast-item">
                <i className="fas fa-book"></i>
                <div className="podcast-details">
                  <strong>LMS Research Publications</strong>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/" target="_blank" rel="noopener noreferrer">
                    View Research
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Denver Area Support</h3>
            <div className="denver-support">
              <p>If you&apos;re in the Denver area, we can help connect you with local specialists and support resources.</p>
              <a href="https://nlmsf.org/contact/" className="cta-button">
                Request Denver Support
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="contact-details">
                  <strong>Phone</strong>
                  <a href="tel:+13037830924">303-783-0924</a>
                  <a href="tel:+13038083437">303-808-3437</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-details">
                  <strong>Email</strong>
                  <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-details">
                  <strong>Address</strong>
                  <p>1685 So. Colorado Blvd, Unit S, Suite 447, Denver, CO 80222</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section cta-section">
            <h3 className="sidebar-subtitle">Support Our Mission</h3>
            <div className="donate-cta">
              <a href="https://nlmsf.org/donate/" className="donate-link">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2021/01/donate-circle.jpg"
                  alt="Donate to NLMSF"
                  className="donate-image"
                  width={240}
                  height={240}
                />
                <span className="donate-text">Donate Today</span>
              </a>
              <p>Help Shape the Future of Survival</p>
              <p className="donate-note">
                Please enter your loved one&apos;s name in the memo if you would like to donate in his/her name.
              </p>
            </div>
          </div>

          <div className="sidebar-section social-section">
            <h3 className="sidebar-subtitle">Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/groups/1329603747125818/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/nationallmsf" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCeDSK4og69Q78GP-SsKpIQg"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="nlmsf-logo">
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/03/Small-Nlmsf.jpg"
                alt="NLMSF Logo"
                width={240}
                height={240}
              />
            </div>
            <div className="nlmsf-info">
              <p className="nlmsf-message">
                <strong>
                  &quot;The information in two more NLMSF websites created for you, help shape the journey, and build hope.&quot;
                </strong>
              </p>
              <div className="nlmsf-websites">
                <a href="https://leiomyosarcoma.info/" target="_blank" rel="noopener noreferrer">
                  leiomyosarcoma.info
                </a>
                <span className="website-separator">&amp;</span>
                <a href="https://nlmsflifechange.com/" target="_blank" rel="noopener noreferrer">
                  nlmsflifechange.com
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="peri-section">
              <div className="peri-image">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2021/02/PeriGilpin.jpg"
                  alt="Peri Gilpin"
                  width={240}
                  height={240}
                />
              </div>
              <p className="peri-quote">
                My family has been touched by Leiomyosarcoma, not once, but twice. I know the heartbreak of this rare disease, and I
                believe that being aware of what to look for and asking the right questions is so important on this journey.
              </p>
              <a href="https://nlmsf.org/peri-gilpin/" className="peri-link">
                Learn More About Peri&apos;s Message
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="certification-section">
              <div className="certification-logos">
                <a href="https://sarcomacoalition.us/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/02/Screen-Shot-2021-02-18-at-15.42.31.png"
                    alt="Sarcoma Coalition"
                    className="certification-logo"
                    width={240}
                    height={240}
                  />
                </a>

                <div className="certification-seals">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/03/Seals.jpg"
                    alt="Certification Seal"
                    className="certification-seal"
                    width={240}
                    height={240}
                  />
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
                    alt="GuideStar Seal"
                    className="certification-seal"
                    width={240}
                    height={240}
                  />
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/03/Top-rated-Seal.jpg"
                    alt="Top Rated Seal"
                    className="certification-seal"
                    width={240}
                    height={240}
                  />
                </div>
              </div>
              <p className="certification-text">
                Bridging collaborations through advocacy, with organizations to amplify resources and support for patients and
                families. &quot;Achieving More Together&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Main Content for Newly Diagnosed Page */}
        <div className="main-content">
          {/* What is LMS Section */}
          <div id="what-is-lms" className="content-section">
            <h2 className="section-title purple">Understanding LMS</h2>

            <div className="resource-grid">
              <div className="resource-card">
                <div className="card-image">
                  <a href="https://nlmsf.org/what-is-lms/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-44.jpg"
                      alt="What is LMS?"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">What is LMS?</h3>
                  <p className="card-description">Definition/Diagnosis</p>
                  <a href="https://nlmsf.org/what-is-lms/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="card-image">
                  <a href="https://nlmsf.org/navigating-leiomyosarcoma-treatment-after-treatment/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-41.jpg"
                      alt="New Diagnosis/Treatment"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">New Diagnosis/Treatment</h3>
                  <p className="card-description">Next Steps</p>
                  <a href="https://nlmsf.org/navigating-leiomyosarcoma-treatment-after-treatment/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="card-image">
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2021/03/Cancers.png"
                      alt="NLMSF-SPAEN Publication"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">NLMSF-SPAEN Publication</h3>
                  <p className="card-description">Evidence-based unmet needs in LMS research and treatment</p>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Finding Care Section */}
          <div id="finding-care" className="content-section">
            <h2 className="section-title blue">Finding Specialized Care</h2>

            <div className="resource-grid">
              <div className="resource-card">
                <div className="card-image">
                  <a href="https://nlmsf.org/find-a-sarcoma-specialist/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2020/06/cancer-cells-541954__480-1.jpg"
                      alt="Finding a Sarcoma Center of Excellence"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Finding a Sarcoma Center of Excellence</h3>
                  <p className="card-description">Locate specialists experienced in treating LMS</p>
                  <a href="https://nlmsf.org/find-a-sarcoma-specialist/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="card-image">
                  <a href="https://nlmsf.org/staging-lms-tumors/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-32.jpg"
                      alt="LMS Tumor Assessment"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">LMS Tumor Assessment</h3>
                  <p className="card-description">
                    Treating LMS by stage/Follow Up care by Stage - according to NCCN Guidelines for Sarcoma Treatment
                  </p>
                  <a href="https://nlmsf.org/staging-lms-tumors/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="card-image">
                  <a href="https://nlmsf.org/molecular-tumor-testing/">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2020/11/blue-box.jpg"
                      alt="Molecular Tumor Testing"
                      width={640}
                      height={360}
                    />
                  </a>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Molecular Tumor Testing</h3>
                  <p className="card-description">Understanding genetic testing for LMS tumors</p>
                  <a href="https://nlmsf.org/molecular-tumor-testing/" className="card-button">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="welcome-panel">
            <div className="welcome-content">
              <h3 className="welcome-title green">WELCOME TO NLMSF</h3>
              <p className="welcome-text">
                Established in 2001, the National Leiomyosarcoma Foundation meets the needs of patients, caregivers, and families
                through education, resources, and research funding.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="video-container">
            <div className="responsive-video">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/P5tsdOm-U0I"
                title="National Leiomyosarcoma Foundation (NLMSF)"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Denver Support Section */}
          <div className="denver-cta" id="denver-cta">
            <div className="cta-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="cta-content">
              <h3>Denver Area Support</h3>
              <p>
                Looking for local support in Denver? Connect with our Denver-based patient advocates who can help guide you through
                local resources and treatment options.
              </p>
            </div>
            <div className="cta-button-container">
              <a href="https://nlmsf.org/contact/" className="denver-cta-button">
                <i className="fas fa-users"></i> Connect in Denver
              </a>
            </div>
          </div>

          {/* Additional Resources */}
          <div id="additional-resources" className="content-section">
            <h2 className="section-title teal">Additional Resources</h2>

            <div className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-book-medical"></i>
                </div>
                <h3>Educational Materials</h3>
              </div>
              <div className="panel-text">
                <p>Access our comprehensive educational materials to better understand your diagnosis and treatment options.</p>
                <ul className="resource-list">
                  <li>
                    <a href="https://nlmsf.org/patient-education/" className="resource-link">
                      <i className="fas fa-video"></i> Educational Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nlmsf.org/wp-content/uploads/2021/10/NLMSF-2021-Brochure-March-2021.pdf"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-file-pdf"></i> NLMSF Brochure
                    </a>
                  </li>
                  <li>
                    <a href="https://nlmsf.org/lms-research/" className="resource-link">
                      <i className="fas fa-microscope"></i> Latest Research
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
