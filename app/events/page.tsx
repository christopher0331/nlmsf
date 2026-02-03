import type { Metadata } from "next";
import AbcNewDiagnosisSection from "./components/AbcNewDiagnosisSection";
import BasicResearchSection from "./components/BasicResearchSection";
import "./events.css";

export const metadata: Metadata = {
  title: "Patient and Family Education Programs | NLMSF",
  description:
    "Educational programs, workshops, and video resources for the LMS community.",
};

export default function EventsPage() {
  return (
    <main className="events-page">
      <div className="events-container">
        <section className="hero">
          <div className="badge">
            <i className="fas fa-graduation-cap" aria-hidden />
            <span>Patient Resources</span>
          </div>

          <h1 className="hero-title">Patient and Family Education Programs</h1>

          <div className="divider" />

          <p className="hero-description">
            Educational programs, workshops, and video resources for the LMS
            community
          </p>

          <div className="feature-tags">
            <div className="feature-tag purple">
              <i className="fas fa-video" aria-hidden />
              <span>Video Resources</span>
            </div>
            <div className="feature-tag blue">
              <i className="fas fa-users" aria-hidden />
              <span>Support Groups</span>
            </div>
            <div className="feature-tag teal">
              <i className="fas fa-calendar-alt" aria-hidden />
              <span>Monthly Workshops</span>
            </div>
          </div>
        </section>

        <div className="intro-panel">
          <p>
            The NLMSF collaborates annually with major sarcoma centers of
            excellence to bring important and special educational opportunities
            to the LMS Community. These programs include virtual meetings,
            workshops, and comprehensive video resources on a variety of topics
            relevant to LMS patients and their families.
          </p>
        </div>

        <div className="events-layout">
          <aside className="sidebar">
            <div className="sidebar-container">
              <h3 className="sidebar-title">Page Contents</h3>
              <ul className="sidebar-links">
                <li>
                  <a href="#workshops" className="sidebar-link" data-section="workshops">
                    <span className="icon">📅</span>
                    <span>Educational Workshops</span>
                  </a>
                  <ul className="subsection-links">
                    <li>
                      <a
                        href="#monthly-programs"
                        className="sidebar-sublink"
                        data-section="monthly-programs"
                      >
                        <span className="icon">👥</span>
                        <span>Monthly Programs</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#video-resources"
                    className="sidebar-link"
                    data-section="video-resources"
                  >
                    <span className="icon">🎥</span>
                    <span>Leiomyosarcoma Education Videos</span>
                  </a>
                  <ul className="subsection-links">
                    <li>
                      <a
                        href="#video-topics"
                        className="sidebar-sublink"
                        data-section="video-topics"
                      >
                        <span className="icon">📋</span>
                        <span>Video Topics</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#abc-new-diagnosis"
                    className="sidebar-link"
                    data-section="abc-new-diagnosis"
                  >
                    <span className="icon">📘</span>
                    <span>ABC&apos;s of a New Diagnosis</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#basic-research"
                    className="sidebar-link"
                    data-section="basic-research"
                  >
                    <span className="icon">🔬</span>
                    <span>Basic Research</span>
                  </a>
                </li>
                <li>
                  <a href="#caregiving" className="sidebar-link" data-section="caregiving">
                    <span className="icon">🤝</span>
                    <span>Caregiving</span>
                  </a>
                </li>
                <li>
                  <a href="#chemotherapy" className="sidebar-link" data-section="chemotherapy">
                    <span className="icon">💊</span>
                    <span>Chemotherapy and Targeted Agents</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#circulating-tumor-dna"
                    className="sidebar-link"
                    data-section="circulating-tumor-dna"
                  >
                    <span className="icon">🧪</span>
                    <span>Circulating Tumor DNA and Liquid Biopsies</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#clinical-trials"
                    className="sidebar-link"
                    data-section="clinical-trials"
                  >
                    <span className="icon">⚗️</span>
                    <span>Clinical Trials</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#cutaneous-lms"
                    className="sidebar-link"
                    data-section="cutaneous-lms"
                  >
                    <span className="icon">🌡️</span>
                    <span>Cutaneous Leiomyosarcoma</span>
                  </a>
                </li>
                <li>
                  <a href="#general-info" className="sidebar-link" data-section="general-info">
                    <span className="icon">ℹ️</span>
                    <span>General Information on Sarcoma Care</span>
                  </a>
                </li>
                <li>
                  <a href="#imaging" className="sidebar-link" data-section="imaging">
                    <span className="icon">🩻</span>
                    <span>Imaging/Radiology</span>
                  </a>
                </li>
                <li>
                  <a href="#immunotherapy" className="sidebar-link" data-section="immunotherapy">
                    <span className="icon">🛡️</span>
                    <span>Immunotherapy</span>
                  </a>
                </li>
                <li>
                  <a href="#microbiome" className="sidebar-link" data-section="microbiome">
                    <span className="icon">🦠</span>
                    <span>The Microbiome (Gut Health)</span>
                  </a>
                </li>
                <li>
                  <a href="#nutrition" className="sidebar-link" data-section="nutrition">
                    <span className="icon">🍎</span>
                    <span>Nutrition</span>
                  </a>
                </li>
                <li>
                  <a href="#pathology" className="sidebar-link" data-section="pathology">
                    <span className="icon">🔬</span>
                    <span>Pathology</span>
                  </a>
                </li>
                <li>
                  <a href="#pecoma" className="sidebar-link" data-section="pecoma">
                    <span className="icon">🧬</span>
                    <span>PEComa</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#patient-research"
                    className="sidebar-link"
                    data-section="patient-research"
                  >
                    <span className="icon">👥</span>
                    <span>Patient Centered Research</span>
                  </a>
                </li>
                <li>
                  <a href="#radiation" className="sidebar-link" data-section="radiation">
                    <span className="icon">☢️</span>
                    <span>Radiation Therapy</span>
                  </a>
                </li>
                <li>
                  <a href="#sarculator" className="sidebar-link" data-section="sarculator">
                    <span className="icon">🧮</span>
                    <span>Sarculator</span>
                  </a>
                </li>
                <li>
                  <a href="#surgical" className="sidebar-link" data-section="surgical">
                    <span className="icon">🩺</span>
                    <span>Surgical Treatment</span>
                  </a>
                </li>
                <li>
                  <a href="#survivorship" className="sidebar-link" data-section="survivorship">
                    <span className="icon">❤️</span>
                    <span>Survivorship Care Planning</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#uterine-fibroids"
                    className="sidebar-link"
                    data-section="uterine-fibroids"
                  >
                    <span className="icon">♀️</span>
                    <span>Uterine Fibroids</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="main-content">
            <div id="video-resources" className="content-section">
              <h2 className="section-title blue">Leiomyosarcoma Education Videos</h2>
              <div className="space-y">
                <div id="video-topics" className="content-panel blue">
                  <div className="panel-header">
                    <div className="icon-circle blue">
                      <i className="fas fa-video" aria-hidden />
                    </div>
                    <div>
                      <h3>Video Topics</h3>
                      <p>Educational videos on various LMS-related topics</p>
                    </div>
                  </div>
                  <p className="panel-text">
                    The NLMSF provides educational videos on a wide range of topics
                    relevant to LMS patients and their families. Click on a topic
                    below to view available videos.
                  </p>
                  <div className="topics-grid">
                    <a href="#abc-new-diagnosis" className="topic-button blue">
                      <i className="fas fa-book-medical" aria-hidden />
                      <span>ABC&apos;s of a New Diagnosis</span>
                    </a>
                    <a href="#basic-research" className="topic-button indigo">
                      <i className="fas fa-microscope" aria-hidden />
                      <span>Basic Research</span>
                    </a>
                    <a href="#caregiving" className="topic-button teal">
                      <i className="fas fa-hands-helping" aria-hidden />
                      <span>Caregiving</span>
                    </a>
                    <a href="#chemotherapy" className="topic-button purple">
                      <i className="fas fa-pills" aria-hidden />
                      <span>Chemotherapy</span>
                    </a>
                    <a href="#circulating-tumor-dna" className="topic-button emerald">
                      <i className="fas fa-vial" aria-hidden />
                      <span>Circulating Tumor DNA</span>
                    </a>
                    <a href="#clinical-trials" className="topic-button orange">
                      <i className="fas fa-flask" aria-hidden />
                      <span>Clinical Trials</span>
                    </a>
                    <a href="#cutaneous-lms" className="topic-button rose">
                      <i className="fas fa-allergies" aria-hidden />
                      <span>Cutaneous Leiomyosarcoma</span>
                    </a>
                    <a href="#general-info" className="topic-button emerald">
                      <i className="fas fa-info-circle" aria-hidden />
                      <span>General Information</span>
                    </a>
                    <a href="#imaging" className="topic-button blue">
                      <i className="fas fa-x-ray" aria-hidden />
                      <span>Imaging/Radiology</span>
                    </a>
                    <a href="#immunotherapy" className="topic-button red">
                      <i className="fas fa-shield-alt" aria-hidden />
                      <span>Immunotherapy</span>
                    </a>
                    <a href="#microbiome" className="topic-button teal">
                      <i className="fas fa-bacteria" aria-hidden />
                      <span>Microbiome</span>
                    </a>
                    <a href="#nutrition" className="topic-button green">
                      <i className="fas fa-apple-alt" aria-hidden />
                      <span>Nutrition</span>
                    </a>
                    <a href="#pathology" className="topic-button indigo">
                      <i className="fas fa-microscope" aria-hidden />
                      <span>Pathology</span>
                    </a>
                    <a href="#pecoma" className="topic-button amber">
                      <i className="fas fa-dna" aria-hidden />
                      <span>PEComa</span>
                    </a>
                    <a href="#patient-research" className="topic-button blue">
                      <i className="fas fa-users" aria-hidden />
                      <span>Patient Centered Research</span>
                    </a>
                    <a href="#radiation" className="topic-button red">
                      <i className="fas fa-radiation" aria-hidden />
                      <span>Radiation Therapy</span>
                    </a>
                    <a href="#sarculator" className="topic-button indigo">
                      <i className="fas fa-calculator" aria-hidden />
                      <span>Sarculator</span>
                    </a>
                    <a href="#surgical" className="topic-button teal">
                      <i className="fas fa-procedures" aria-hidden />
                      <span>Surgical Treatment</span>
                    </a>
                    <a href="#survivorship" className="topic-button purple">
                      <i className="fas fa-heart" aria-hidden />
                      <span>Survivorship Care</span>
                    </a>
                    <a href="#uterine-fibroids" className="topic-button rose">
                      <i className="fas fa-female" aria-hidden />
                      <span>Uterine Fibroids</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <AbcNewDiagnosisSection />
            <BasicResearchSection />
          </div>
        </div>
      </div>
    </main>
  );
}
