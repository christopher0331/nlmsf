"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";

const SECTION_IDS = [
  "specialists",
  "sarc-centers",
  "denver-resources",
  "preparation",
  "select-center",
  "first-appointment",
  "documents",
  "resources",
  "videos",
  "articles",
  "important-links",
  "community",
];

const PARENT_SECTIONS: Record<string, string[]> = {
  specialists: ["sarc-centers", "denver-resources"],
  preparation: ["select-center", "first-appointment", "documents"],
  resources: ["videos", "articles", "important-links"],
};

export default function NewlyDiagnosedTreatmentClient() {
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
      const sectionTop = section.offsetTop - 120;
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
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
    setActiveSection(id);
  }, []);

  const isParentActive = useCallback(
    (id: string) => {
      if (activeSection === id) {
        return true;
      }
      const children = PARENT_SECTIONS[id];
      return children ? children.includes(activeSection) : false;
    },
    [activeSection]
  );

  return (
    <div className="newly-diagnosed-page">
      {/* Hero Component for Next Steps Page */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-map-signs"></i>
          <span>Next Steps Forward</span>
        </div>

        <h1 className="hero-title">Your Path After Diagnosis</h1>

        <div className="divider"></div>

        <p className="hero-description">
          Finding specialists, understanding treatment options, and connecting with resources to support your journey.
        </p>

        <div className="feature-tags">
          <div className="feature-tag blue">
            <i className="fas fa-user-md"></i>
            <span>Find Specialists</span>
          </div>
          <div className="feature-tag teal">
            <i className="fas fa-clipboard-list"></i>
            <span>Preparation Steps</span>
          </div>
          <div className="feature-tag purple">
            <i className="fas fa-book-open"></i>
            <span>Resources</span>
          </div>
        </div>
      </div>

      <div className="intro-panel">
        <p>
          After receiving a Leiomyosarcoma diagnosis, knowing what steps to take next is crucial. This guide will help you find
          specialists, prepare for appointments, and connect with resources and support groups to navigate your journey with
          confidence and clarity.
        </p>
      </div>

      <div className="wp-next-steps-container">
        {/* Sidebar Navigation Component for Next Steps Page */}
        <div className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">Page Contents</h3>

            <ul className="sidebar-links">
              <li>
                <a
                  href="#specialists"
                  className={`sidebar-link${isParentActive("specialists") ? " active" : ""}`}
                  data-section="specialists"
                  onClick={(event) => handleNavClick(event, "specialists")}
                >
                  <i className="fas fa-user-md"></i>
                  <span>Finding Specialists</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a
                      href="#sarc-centers"
                      className={`sidebar-sublink${activeSection === "sarc-centers" ? " active" : ""}`}
                      data-section="sarc-centers"
                      onClick={(event) => handleNavClick(event, "sarc-centers")}
                    >
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Sarcoma Centers</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#denver-resources"
                      className={`sidebar-sublink${activeSection === "denver-resources" ? " active" : ""}`}
                      data-section="denver-resources"
                      onClick={(event) => handleNavClick(event, "denver-resources")}
                    >
                      <i className="fas fa-mountain"></i>
                      <span>Denver Resources</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#preparation"
                  className={`sidebar-link${isParentActive("preparation") ? " active" : ""}`}
                  data-section="preparation"
                  onClick={(event) => handleNavClick(event, "preparation")}
                >
                  <i className="fas fa-clipboard-list"></i>
                  <span>Preparation Steps</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a
                      href="#select-center"
                      className={`sidebar-sublink${activeSection === "select-center" ? " active" : ""}`}
                      data-section="select-center"
                      onClick={(event) => handleNavClick(event, "select-center")}
                    >
                      <i className="fas fa-hospital"></i>
                      <span>Select a Center</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#first-appointment"
                      className={`sidebar-sublink${activeSection === "first-appointment" ? " active" : ""}`}
                      data-section="first-appointment"
                      onClick={(event) => handleNavClick(event, "first-appointment")}
                    >
                      <i className="fas fa-calendar-check"></i>
                      <span>First Appointment</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#documents"
                      className={`sidebar-sublink${activeSection === "documents" ? " active" : ""}`}
                      data-section="documents"
                      onClick={(event) => handleNavClick(event, "documents")}
                    >
                      <i className="fas fa-file-medical"></i>
                      <span>Important Documents</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#resources"
                  className={`sidebar-link${isParentActive("resources") ? " active" : ""}`}
                  data-section="resources"
                  onClick={(event) => handleNavClick(event, "resources")}
                >
                  <i className="fas fa-book-open"></i>
                  <span>Resources</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a
                      href="#videos"
                      className={`sidebar-sublink${activeSection === "videos" ? " active" : ""}`}
                      data-section="videos"
                      onClick={(event) => handleNavClick(event, "videos")}
                    >
                      <i className="fas fa-video"></i>
                      <span>Educational Videos</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#articles"
                      className={`sidebar-sublink${activeSection === "articles" ? " active" : ""}`}
                      data-section="articles"
                      onClick={(event) => handleNavClick(event, "articles")}
                    >
                      <i className="fas fa-file-alt"></i>
                      <span>Research &amp; Articles</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#important-links"
                      className={`sidebar-sublink${activeSection === "important-links" ? " active" : ""}`}
                      data-section="important-links"
                      onClick={(event) => handleNavClick(event, "important-links")}
                    >
                      <i className="fas fa-link"></i>
                      <span>Important Links</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#community"
                  className={`sidebar-link${activeSection === "community" ? " active" : ""}`}
                  data-section="community"
                  onClick={(event) => handleNavClick(event, "community")}
                >
                  <i className="fas fa-users"></i>
                  <span>Community Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Denver-specific CTA in sidebar */}
          <div className="sidebar-cta">
            <div className="cta-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h4>Denver Support</h4>
            <p>Connect with local LMS resources and support groups in the Denver area</p>
            <a href="#" className="sidebar-cta-button">
              Find Local Support
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Main Content Component for Next Steps Page */}
        <div className="main-content">
          {/* Specialists Section */}
          <div id="specialists" className="content-panel blue">
            <div className="panel-header">
              <div className="icon-circle blue">
                <i className="fas fa-user-md"></i>
              </div>
              <div>
                <h3>Finding a Sarcoma Specialist</h3>
                <p>Connecting with the right medical expertise</p>
              </div>
            </div>

            <p className="panel-text">
              Once diagnosed, finding a Sarcoma Specialist is crucial. Your primary care physician or diagnosing oncologist can
              recommend one, preferably experienced with Leiomyosarcoma cases. If they have no suggestions, refer to our list of
              Sarcoma Centers, all of which have LMS experience.
            </p>

            <div id="sarc-centers" className="sarc-centers-box">
              <h4>
                <i className="fas fa-map-marker-alt"></i>
                Sarcoma Centers of Excellence
              </h4>
              <p>
                Finding the right treatment center and a specialist you are comfortable with is imperative. The Sarcoma Alliance
                Through Research Collaboration (SARC) provides a map of Sarcoma Centers of Excellence throughout the U.S.
              </p>
              <a href="https://sarctrials.org/sarc-centers/" className="action-button indigo" target="_blank" rel="noopener noreferrer">
                View SARC Centers Map
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Denver-specific CTA */}
            <div id="denver-resources" className="denver-cta">
              <div className="denver-cta-header">
                <i className="fas fa-mountain"></i>
                <h4>Denver Sarcoma Resources</h4>
              </div>
              <p>
                If you&apos;re in the Denver area, we have specialized local resources available to you. The University of Colorado
                Cancer Center has a dedicated sarcoma team with extensive experience treating LMS patients.
              </p>
              <a href="https://sarctrials.org/sarc-centers/" className="action-button blue" target="_blank" rel="noopener noreferrer">
                Denver Sarcoma Specialists
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Preparation Steps Section */}
          <div id="preparation" className="content-panel teal">
            <div className="panel-header">
              <div className="icon-circle teal">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div>
                <h3>Preparing for Your Journey</h3>
                <p>Essential steps to take after diagnosis</p>
              </div>
            </div>

            <div className="preparation-steps-grid">
              <div id="select-center" className="preparation-card amber">
                <h4>Select a Sarcoma Center</h4>
                <ul className="check-list">
                  <li>Consult with primary care physician or oncologist for recommendations</li>
                  <li>Check SARC Centers of Excellence map</li>
                  <li>Verify insurance acceptance</li>
                  <li>Consider location and travel requirements</li>
                </ul>
              </div>

              <div id="first-appointment" className="preparation-card teal">
                <h4>Prepare for First Appointment</h4>
                <ul className="check-list">
                  <li>Bring a family member or friend to take notes</li>
                  <li>Request a medical appointment organizer from NLMSF</li>
                  <li>Prepare questions for your care team</li>
                  <li>Gather all medical records and test results</li>
                </ul>
              </div>

              <div id="documents" className="preparation-card rose">
                <h4>Important Documents</h4>
                <ul className="check-list">
                  <li>Lab test results</li>
                  <li>Radiology/imaging reports</li>
                  <li>Pathology reports</li>
                  <li>Current medication list</li>
                  <li>Insurance information</li>
                  <li>List of questions and concerns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div id="resources" className="content-section">
            {/* Videos Section */}
            <div id="videos" className="content-panel purple">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-video"></i>
                </div>
                <div>
                  <h3>Educational Videos</h3>
                  <p>Visual resources to help understand LMS</p>
                </div>
              </div>

              <div className="resources-grid">
                <a href="#" className="resource-card indigo" target="_blank" rel="noopener noreferrer">
                  <h4>Dr. Seth Pollack on Finding the Right Doctor</h4>
                  <p>A leading medical oncologist and sarcoma specialist discusses the importance of finding well-equipped doctors.</p>
                </a>

                <a href="#" className="resource-card blue" target="_blank" rel="noopener noreferrer">
                  <h4>The ABC&apos;s of a Sarcoma Diagnosis</h4>
                  <p>The Mayo Clinic and the NLMSF present: Learning About Cancer</p>
                </a>

                <a
                  href="https://www.dropbox.com/scl/fi/5fd0szxp8mbddn9kfs01k/Sarcoma-Facing-The-Challenge-Together.mp4?rlkey=e0dn7etnahwc98xjnlj24p040&e=1&dl=0"
                  className="resource-card purple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Facing the Challenge of an LMS Diagnosis</h4>
                  <p>Introductory Video from Multidisciplinary Sarcoma Team Specialists</p>
                </a>

                <a href="#" className="resource-card violet" target="_blank" rel="noopener noreferrer">
                  <h4>Panel Discussion for Newly Diagnosed Patients</h4>
                  <p>Multidisciplinary Sarcoma CareTeam clinicians discuss important topics</p>
                </a>
              </div>
            </div>

            {/* Articles Section */}
            <div id="articles" className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div>
                  <h3>Research &amp; Articles</h3>
                  <p>Scientific and informational resources</p>
                </div>
              </div>

              <div className="articles-container">
                <a
                  href="https://link.springer.com/article/10.1007/s11864-021-00897-2"
                  className="article-item teal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h4>Leiomyosarcoma: Location and Systemic Therapy</h4>
                    <p>Jan Philipp Novotny MD, PhD, Suzanne George MD</p>
                  </div>
                  <i className="fas fa-external-link-alt"></i>
                </a>

                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7186235/"
                  className="article-item emerald"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h4>Multidisciplinary treatment of soft tissue sarcomas</h4>
                    <p>World J Clin Oncol</p>
                  </div>
                  <i className="fas fa-external-link-alt"></i>
                </a>

                <a
                  href="https://www.nccn.org/patients/guidelines/content/PDF/uterine-patient.pdf"
                  className="article-item green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h4>NCCN Treatment Guidelines for Uterine Sarcoma</h4>
                    <p>NCCN Patient Guide</p>
                  </div>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Important Links Section */}
            <div id="important-links" className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-link"></i>
                </div>
                <div>
                  <h3>Important Links</h3>
                  <p>Essential resources for your journey</p>
                </div>
              </div>

              <div className="resources-grid">
                <a href="https://lmsproject.org" className="resource-card amber" target="_blank" rel="noopener noreferrer">
                  <h4>LMS Count Me In Project</h4>
                  <p>Participate in advancing LMS research through the Broad Institute</p>
                </a>

                <a href="#" className="resource-card orange" target="_blank" rel="noopener noreferrer">
                  <h4>SARC Centers Map</h4>
                  <p>Find Sarcoma Centers of Excellence throughout the U.S.</p>
                </a>

                <a
                  href="https://sarahcannon.com/blog/entry/12-questions-to-ask-at-your-first-oncology-appointment"
                  className="resource-card rose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Questions for First Appointment</h4>
                  <p>Prepare for your first oncology appointment</p>
                </a>

                <a href="#" className="resource-card pink" target="_blank" rel="noopener noreferrer">
                  <h4>Denver Support Group</h4>
                  <p>Connect with other LMS patients in the Denver metro area</p>
                </a>
              </div>
            </div>
          </div>

          {/* Featured Image Section with Denver-specific CTA */}
          <div id="community" className="featured-image-section">
            <div className="featured-image">
              <Image
                src="https://example.com/path/to/support-image.jpg"
                alt="LMS Support Community"
                width={1200}
                height={800}
              />
            </div>
            <div className="image-overlay">
              <h3>You Are Not Alone</h3>
              <p>Connect with our community of patients, caregivers, and medical professionals</p>
              <div className="cta-buttons">
                <a href="#" className="primary-cta">
                  Join Our Community
                </a>
                <a href="#" className="secondary-cta">
                  Denver Local Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
