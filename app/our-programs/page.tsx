import type { Metadata } from "next";
import "./our-programs.css";

export const metadata: Metadata = {
  title: "Our Programs | NLMSF",
  description:
    "Education, advocacy, and research programs supporting LMS patients, families, and caregivers.",
};

export default function OurProgramsPage() {
  return (
    <div className="our-programs-page">
      <section className="programs-hero">
        <div className="programs-hero-content">
          <p className="programs-tagline">Inform – Inspire – Empower</p>
          <h1 className="programs-title">Our Mission Is Our Passion</h1>
          <p className="programs-subtitle">
            Through Education / Advocacy / Research
          </p>
          <blockquote className="programs-quote">
            “What we can do today can affect what happens tomorrow – We Have
            what it Takes to Help Each Other!”
          </blockquote>
        </div>
      </section>

      <section className="programs-content">
        <div className="programs-card">
          <h2 className="programs-section-title">Our Programs</h2>
          <ul className="programs-list">
            <li>The NLMSF- SPAEN INTERNATIONAL RESEARCH ROUNDTABLE</li>
            <li>The PATIENT-CAREGIVER ADVOCACY NETWORK [ROUNDTABLE]</li>
            <li>The SURVIVORS INSPIRE PEER NETWORK</li>
            <li>The LMS LIFELINE BUDDY PROGRAM</li>
            <li>24/7 Direct Patient/Caregiver Helpline: 303 808-3437</li>
            <li>
              Annual Patient-Family LMS Education Symposia throughout the
              USA/Canada
            </li>
            <li>
              Education Webinar collaboration with other cancer organizations
            </li>
            <li>
              The Cancer Cell Line Project – patient drive tumor registry for
              Crisper Crispr / repurposed drug screening / global data access
              for Research
            </li>
            <li>
              NCI MyPart Network – patient natural history data collection
              partnership
            </li>
            <li>Connect with a Clinician Program for general Q &amp; A</li>
            <li>
              Collaborative Partnerships with other organizations to enhance
              Patient – Family resource support
            </li>
            <li>
              Sarcoma Coalition – Steering Committee membership for
              collaboration with 20 other sarcoma organizations
            </li>
            <li>
              Research Advocacy Council – to collaborate with other sarcoma
              organizations to impact clinical trial patient participation and
              outcomes
            </li>
            <li>
              Three Foundation websites – to offer resource assistance
              throughout the diagnosis / treatment journey of patients and
              caregivers
            </li>
            <li>
              Weekly News Letters for clinical trial updates, research updates
              and wellbeing educational opportunities, well-being resource
              information
            </li>
          </ul>
        </div>

        <div className="programs-contact">
          <h3>Direct Contact to the Foundation</h3>
          <p className="programs-contact-name">A N N I E &nbsp; A C H E E</p>
          <p className="programs-contact-details">
            <a href="mailto:annieachee@aol.com">annieachee@aol.com</a> or{" "}
            <a href="tel:+13038083437">303 808-3437</a>
          </p>
        </div>
      </section>
    </div>
  );
}
