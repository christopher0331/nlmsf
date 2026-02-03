import type { Metadata } from "next";
import "./resources.css";

export const metadata: Metadata = {
  title: "Resources | NLMSF",
  description:
    "Patient and family resources, support programs, financial assistance, and well-being resources for LMS.",
};

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      {/* Hero Component for Resources Page */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-hands-helping"></i>
          <span>Patient &amp; Family Resources</span>
        </div>

        <h1 className="hero-title">Navigating Resources</h1>

        <div className="divider"></div>

        <p className="hero-description">
          Find the support and resources you need throughout your LMS journey. The NLMSF is committed to providing comprehensive
          assistance to patients and their families.
        </p>

        <div className="feature-tags">
          <div className="feature-tag purple">
            <i className="fas fa-heart"></i>
            <span>Support Programs</span>
          </div>
          <div className="feature-tag blue">
            <i className="fas fa-hand-holding-usd"></i>
            <span>Financial Assistance</span>
          </div>
          <div className="feature-tag teal">
            <i className="fas fa-home"></i>
            <span>Practical Help</span>
          </div>
        </div>
      </div>

      <div className="container resources-layout">
        {/* Sidebar Navigation Component for Resources Page */}
        <div className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">Resource Categories</h3>

            <ul className="sidebar-links">
              <li>
                <a href="#brochure" className="sidebar-link" data-section="brochure">
                  <i className="fas fa-file-alt"></i>
                  <span>NLMSF Brochure</span>
                </a>
              </li>
              <li>
                <a href="#buddy-program" className="sidebar-link" data-section="buddy-program">
                  <i className="fas fa-user-friends"></i>
                  <span>Support Programs</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a href="#buddy-program" className="sidebar-sublink" data-section="buddy-program">
                      <i className="fas fa-heart"></i>
                      <span>Buddy Program</span>
                    </a>
                  </li>
                  <li>
                    <a href="#buddy-program" className="sidebar-sublink" data-section="imerman-angels">
                      <i className="fas fa-hands-helping"></i>
                      <span>Imerman Angels</span>
                    </a>
                  </li>
                  <li>
                    <a href="#buddy-program" className="sidebar-sublink" data-section="grief-support">
                      <i className="fas fa-heart"></i>
                      <span>Grief Support</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#financial-assistance" className="sidebar-link" data-section="financial-assistance">
                  <i className="fas fa-hand-holding-usd"></i>
                  <span>Financial &amp; Practical Support</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a href="#financial-assistance" className="sidebar-sublink" data-section="financial">
                      <i className="fas fa-dollar-sign"></i>
                      <span>Financial Assistance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#financial-assistance" className="sidebar-sublink" data-section="insurance">
                      <i className="fas fa-file-medical"></i>
                      <span>Insurance Guidance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#financial-assistance" className="sidebar-sublink" data-section="transportation">
                      <i className="fas fa-car"></i>
                      <span>Transportation &amp; Lodging</span>
                    </a>
                  </li>
                  <li>
                    <a href="#financial-assistance" className="sidebar-sublink" data-section="house-cleaning">
                      <i className="fas fa-home"></i>
                      <span>House Cleaning &amp; Meal Prep</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#well-being" className="sidebar-link" data-section="well-being">
                  <i className="fas fa-heartbeat"></i>
                  <span>Well-Being Resources</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-cta">
            <h3>Donate to NLMSF Today!</h3>
            <p>Help Shape the Future of Survival</p>
            <a href="https://nlmsf.org/donate/" className="cta-button">
              <i className="fas fa-heart"></i> Donate Now
            </a>
          </div>

          <div className="sidebar-cta">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone</strong>
            </p>
            <p>
              <a href="tel:+13037830924">303-783-0924</a>
            </p>
            <p>
              <a href="tel:+13038083437">303-808-3437</a>
            </p>

            <p>
              <strong>Email</strong>
            </p>
            <p>
              <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
            </p>

            <p>
              <strong>Mailing Address</strong>
            </p>
            <p>
              1685 So. Colorado Blvd, Unit S, Suite 447,
              <br />
              Denver, CO 80222
            </p>
          </div>

          <div className="sidebar-cta">
            <h3>Follow Us!</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/groups/1329603747125818/" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/nationallmsf" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCeDSK4og69Q78GP-SsKpIQg" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content for Resources Page */}
        <div className="main-content">
          {/* NLMSF Brochure Section */}
          <div id="brochure" className="content-section">
            <div className="content-panel purple">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>NLMSF Patient Family Information</h3>
              </div>
              <div className="panel-text">
                <p>
                  Our comprehensive brochure provides essential information for patients and families navigating an LMS diagnosis.
                </p>
                <div className="text-center">
                  <a
                    href="https://nlsmf.org/wp-content/uploads/2021/10/NLMSF-2021-Brochure-March-2021.pdf"
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-download"></i> Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Buddy Program Section */}
          <div id="buddy-program" className="content-section">
            <h2 className="section-title purple">Support Programs</h2>

            <div className="content-panel blue">
              <div className="panel-header">
                <div className="icon-circle blue">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3>NLMSF Buddy Program</h3>
              </div>
              <div className="panel-text">
                <p>
                  Connect with someone who understands what you&apos;re going through. Our informal buddy program pairs you with another
                  patient or caregiver who has experienced similar challenges.
                </p>
                <div className="text-center">
                  <a href="http://randal.sg-host.com/uncategorized/lms-lifeline-buddy-program/" className="resource-link">
                    <i className="fas fa-heart"></i> Learn About the Buddy Program
                  </a>
                </div>
              </div>
            </div>

            {/* Imerman Angels Section */}
            <div className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Imerman Angels Mentor Program</h3>
              </div>
              <div className="panel-text">
                <p>
                  In collaboration with NLMSF, Imerman Angels provides one-on-one support to cancer fighters, survivors, and
                  caregivers.
                </p>
                <div className="program-details">
                  <p className="text-center">
                    <strong>Sign up for personalized mentoring support:</strong>
                  </p>
                  <div className="text-center">
                    <a
                      href="https://nlsmf.org/wp-content/uploads/2021/09/NLMSF-IMERMAN-ANGELS-PARTNERSHIP.pdf"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-file-alt"></i> Sign Up Form
                    </a>
                  </div>
                  <p className="text-center">
                    <strong>Learn more about the program:</strong>
                  </p>
                  <div className="text-center">
                    <a href="https://imermanangels.org/" className="resource-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Visit Imerman Angels
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Grief Support Section */}
            <div className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Coping and Grief Support</h3>
              </div>
              <div className="panel-text">
                <p>NLMSF offers virtual support groups to help with coping and grief - nurturing hope and healing from the inside out.</p>
                <div className="program-details">
                  <p className="text-center">
                    <strong>VIRTUAL COPING and GRIEF SUPPORT GROUP</strong>
                  </p>
                  <div className="text-center">
                    <a
                      href="https://docs.google.com/document/d/118PgvXoZBy2bxAENPtTt3PDpjXO0E4ZK/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-users"></i> Join Our Support Group
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Assistance Section */}
          <div id="financial-assistance" className="content-section">
            <h2 className="section-title blue">Financial &amp; Practical Support</h2>

            <div className="assistance-grid">
              {/* Financial Assistance */}
              <div className="content-panel blue">
                <div className="panel-header">
                  <div className="icon-circle blue">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3>Financial Assistance</h3>
                </div>
                <div className="panel-text">
                  <p>NLMSF offers financial support programs to help with expenses related to LMS treatment and care.</p>
                  <div className="text-center">
                    <a href="https://nlmsf.org/financial-assistance-2/" className="resource-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-right"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* Insurance Guidance */}
              <div className="content-panel emerald">
                <div className="panel-header">
                  <div className="icon-circle emerald">
                    <i className="fas fa-file-medical"></i>
                  </div>
                  <h3>Insurance Guidance</h3>
                </div>
                <div className="panel-text">
                  <p>Navigate the complex world of health insurance with our guidance and resources.</p>
                  <div className="text-center">
                    <a href="https://nlmsf.org/insurance-2/" className="resource-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-right"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* Transportation & Lodging */}
              <div className="content-panel purple">
                <div className="panel-header">
                  <div className="icon-circle purple">
                    <i className="fas fa-car"></i>
                  </div>
                  <h3>Transportation &amp; Lodging</h3>
                </div>
                <div className="panel-text">
                  <p>Get help with transportation to medical appointments and lodging for treatment away from home.</p>
                  <div className="text-center">
                    <a href="https://nlmsf.org/transportation-lodging/" className="resource-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-right"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* House Cleaning & Meal Prep */}
              <div className="content-panel teal">
                <div className="panel-header">
                  <div className="icon-circle teal">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>House Cleaning &amp; Meal Prep</h3>
                </div>
                <div className="panel-text">
                  <p>Practical assistance with everyday tasks during treatment and recovery.</p>
                  <div className="text-center">
                    <a href="https://nlmsf.org/house-cleaning-and-meal-prep/" className="resource-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-right"></i> Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Well-Being Resources Section */}
          <div id="well-being" className="content-section">
            <h2 className="section-title teal">Well-Being Resources</h2>

            <div className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>Navigating Well-Being Support</h3>
              </div>
              <div className="panel-text">
                <ul className="resource-list">
                  <li>
                    <strong>Free Exercise Program for Women with Cancer</strong>
                    <p>Physical activity can help manage symptoms and improve quality of life during and after cancer treatment.</p>
                  </li>
                  <li>
                    <strong>Acupuncture and Cancer</strong>
                    <p>Learn about how acupuncture may help manage cancer-related symptoms and treatment side effects.</p>
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
