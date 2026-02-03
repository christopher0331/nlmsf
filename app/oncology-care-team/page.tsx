import type { Metadata } from "next";
import Link from "next/link";
import "./oncology-care-team.css";

export const metadata: Metadata = {
  title: "Your Sarcoma Clinical Care Team | NLMSF",
  description:
    "Understanding the roles of healthcare professionals in your sarcoma treatment journey.",
};

export default function OncologyCareTeamPage() {
  return (
    <div className="oncology-care-team-page">
      {/* Hero Section */}
      <section className="care-team-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Your Sarcoma Clinical Care Team</h1>
            <p className="hero-description">
              Understanding the roles of healthcare professionals in your treatment journey
            </p>
          </div>
          <div className="hero-decoration hero-decoration-1"></div>
          <div className="hero-decoration hero-decoration-2"></div>
        </div>
      </section>

      <div className="care-team-layout">
        {/* On This Page Navigation Sidebar */}
        <div className="sidebar page-nav">
          <h3 className="sidebar-title">On This Page</h3>

          <div className="nav-section">
            <a href="#introduction" className="nav-link">
              Introduction
            </a>
          </div>

          <div className="nav-section section-diagnosis">
            <a href="#initial-diagnosis" className="nav-link nav-heading">
              Initial Diagnosis Questions
            </a>
            <a href="#about-diagnosis" className="nav-link nav-sublink">
              About My Diagnosis
            </a>
            <a href="#about-care-team" className="nav-link nav-sublink">
              About My Care Team
            </a>
          </div>

          <div className="nav-section section-treatment">
            <a href="#treatment-planning" className="nav-link nav-heading">
              Treatment Planning
            </a>
            <a href="#treatment-options" className="nav-link nav-sublink">
              Treatment Options
            </a>
            <a href="#surgery" className="nav-link nav-sublink">
              Surgery
            </a>
            <a href="#radiation" className="nav-link nav-sublink">
              Radiation
            </a>
            <a href="#chemotherapy" className="nav-link nav-sublink">
              Chemotherapy
            </a>
          </div>

          <div className="nav-section section-during">
            <a href="#during-treatment" className="nav-link nav-heading">
              During Treatment
            </a>
            <a href="#monitoring" className="nav-link nav-sublink">
              Monitoring Treatment
            </a>
            <a href="#side-effects" className="nav-link nav-sublink">
              Managing Side Effects
            </a>
            <a href="#practical-concerns" className="nav-link nav-sublink">
              Practical Concerns
            </a>
          </div>

          <div className="nav-section section-after">
            <a href="#after-treatment" className="nav-link nav-heading">
              After Treatment
            </a>
            <a href="#follow-up" className="nav-link nav-sublink">
              Follow-up Care
            </a>
            <a href="#long-term" className="nav-link nav-sublink">
              Long-term Effects
            </a>
            <a href="#normal-life" className="nav-link nav-sublink">
              Returning to Normal Life
            </a>
          </div>
        </div>

        {/* Content Section */}
        <section className="care-team-content">
          <div className="main-content">
            <div id="introduction" className="intro-card">
              <p>
                There are many people who are part of your Sarcoma Clinic care team. Each member of your care team is important
                and they work together to give you the best care. It is important for you to talk with your care team about any
                questions or concerns you may have about your health.
              </p>
              <p>
                Your health care team may include staff who are in training. You can print this off and use this as a reference
                tool - to write down the names and phone numbers of your care team.
              </p>
            </div>

            {/* Medical Oncology Section */}
            <div id="initial-diagnosis" className="team-section medical-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-user-md" aria-hidden />
                </div>
                <h2 className="section-title">Medical Oncology Health Care Team Members</h2>
              </div>

              <div className="team-members">
                <div id="about-care-team" className="team-member">
                  <h3>Your Sarcoma Medical Oncologist</h3>
                  <p>He or She directs your treatment and coordinates your care with other doctors and team members.</p>
                </div>

                <div className="team-member">
                  <h3>Nurse Practitioner (NP)</h3>
                  <p>A nurse with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Physician Assistant (PA)</h3>
                  <p>A PA is a special assistant with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Primary Nurse (RN)</h3>
                  <p>This is your main nurse who will plan, coordinate and direct your nursing care.</p>
                </div>

                <div className="team-member">
                  <h3>Patient Care Associate (PCA)</h3>
                  <p>This nurse plans and directs your nursing care.</p>
                </div>

                <div className="team-member">
                  <h3>Social Worker</h3>
                  <p>
                    The social worker can help you and your family with concerns such as your care after your hospital stay, coping
                    or finding resources to meet your needs.
                  </p>
                </div>

                <div className="team-member">
                  <h3>Clinical Research Coordinator</h3>
                  <p>Monitors research studies.</p>
                </div>

                <div className="team-member">
                  <h3>Pharmacist or Pharmacy Tech</h3>
                  <p>Prepares medicines for you and provides medicine education.</p>
                </div>

                <div className="team-member">
                  <h3>Registered Dietitian</h3>
                  <p>A dietitian and diet tech provide education about nutrition, and food choices.</p>
                </div>

                <div className="team-member">
                  <h3>Palliative Care Team</h3>
                  <p>Works with your doctor to help manage your pain and symptoms.</p>
                </div>
              </div>
            </div>

            {/* Surgical Oncology Section */}
            <div id="treatment-planning" className="team-section surgical-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-procedures" aria-hidden />
                </div>
                <h2 className="section-title">Surgical Oncology Health Care Team Members</h2>
              </div>

              <div className="team-members">
                <div id="surgery" className="team-member">
                  <h3>Attending Physician (Surgeon)</h3>
                  <p>The Physician who directs your treatment and coordinates your care with other doctors and team members.</p>
                </div>
                <div className="team-member">
                  <h3>Nurse Practitioner (NP)</h3>
                  <p>A nurse with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Physician Assistant (PA)</h3>
                  <p>A PA is a special assistant with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Primary Nurse (RN)</h3>
                  <p>This is your main nurse who will plan, coordinate and direct your nursing care.</p>
                </div>
              </div>
            </div>

            {/* Radiation Oncology Section */}
            <div id="during-treatment" className="team-section radiation-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-radiation" aria-hidden />
                </div>
                <h2 className="section-title">Radiation Oncology Health Care Team Members</h2>
              </div>

              <div className="team-members">
                <div id="radiation" className="team-member">
                  <h3>Attending Physician (Radiation Oncologist)</h3>
                  <p>A doctor who directs your treatment and coordinates your care with other doctors and team members.</p>
                </div>
                <div className="team-member">
                  <h3>Nurse Practitioner (NP)</h3>
                  <p>A nurse with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Physician Assistant (PA)</h3>
                  <p>A PA is a special assistant with advanced training who may do procedures and prescribe medicine.</p>
                </div>

                <div className="team-member">
                  <h3>Primary Nurse (RN)</h3>
                  <p>This is your main nurse who will plan, coordinate and direct your nursing care.</p>
                </div>

                <div className="team-member">
                  <h3>Radiation Therapist</h3>
                  <p>A therapist who will give your radiation treatment each day.</p>
                </div>
              </div>
            </div>

            <div className="conclusion-card">
              <p>
                Understanding the roles of each member of your clinical care team can help you navigate your treatment journey more
                effectively. Don&apos;t hesitate to ask questions or request clarification about any aspect of your care.
              </p>
              <div className="cta-wrapper">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us With Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
