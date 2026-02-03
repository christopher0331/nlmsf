import type { Metadata } from "next";
import "./find-a-sarcoma-specialist-staged-2.css";

export const metadata: Metadata = {
  title: "Find a Sarcoma Specialist | NLMSF",
  description:
    "SARC Centers map, NCI Designated Cancer Centers, Sarcoma Centers of Excellence telemedicine clinics, and virtual second opinion resources.",
};

export default function FindASarcomaSpecialistStaged2Page() {
  return (
    <div className="find-sarcoma-specialist-page">
      {/* Hero Section */}
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Patient Resources</span>
            <h1 className="nlmsf-hero-title">Find a Sarcoma Specialist</h1>
            <p className="nlmsf-hero-subtitle">
              SARC Centers, NCI Designated Cancer Centers, telemedicine clinics, and second opinion resources.
            </p>
          </div>
        </div>
      </section>

      <div className="nlmsf-page-wrapper">
        <div className="nlmsf-content-section">
          <div className="nlmsf-content-container">
            {/* SARC Centers */}
            <section className="nlmsf-specialist-block">
              <figure className="nlmsf-block-figure nlmsf-figure-center">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2021/02/sarc_logo_web.gif"
                  alt="SARC logo"
                  width={304}
                  height={74}
                  className="nlmsf-block-img"
                />
              </figure>
              <p className="nlmsf-block-text">
                This link will lead you to an interactive and information map for SARC Centers across the nation.{" "}
                <a
                  href="https://sarctrials.org/sarc-centers-map"
                  className="nlmsf-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
                .
              </p>
              <p className="nlmsf-block-text">
                All SARC Centers listed here meet the criteria, and have strong history of collaboration and commitment to sarcoma research.
              </p>
            </section>

            {/* NCI Designated Cancer Centers */}
            <section className="nlmsf-specialist-block">
              <div className="nlmsf-block-with-image">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2021/03/NIH.jpg"
                  alt="NIH"
                  width={200}
                  height={110}
                  className="nlmsf-block-img nlmsf-img-left"
                />
                <div>
                  <p className="nlmsf-block-text">
                    NCI Designated Cancer Centers deliver cutting edge cancer treatments to patients in communities across the United States. You can search for a center here:
                  </p>
                  <p>
                    <a
                      href="https://www.cancer.gov/research/infrastructure/cancer-centers/find"
                      className="nlmsf-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.cancer.gov/research/infrastructure/cancer-centers/find
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Sarcoma Centers of Excellence – Telemedicine Clinics */}
            <section id="telemedicine" className="nlmsf-specialist-block">
              <div className="nlmsf-block-with-image">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2021/02/SARCpage.jpg"
                  alt="SARC page"
                  width={237}
                  height={300}
                  className="nlmsf-block-img nlmsf-img-left"
                />
                <div>
                  <h2 className="nlmsf-section-heading nlmsf-heading-purple">
                    Sarcoma Centers of Excellence – Telemedicine Clinics
                  </h2>
                  <ul className="nlmsf-specialist-list">
                    <li>Cleveland Clinic Telehealth – OH</li>
                    <li>Columbia Univ., Irvine Med. Center Telehealth – NY, NJ, CT</li>
                    <li>Dana Farber Cancer Institute Telehealth – MD</li>
                    <li>Fox Chase Cancer Telehealth - PA</li>
                    <li>Hillman Cancer Center Telehealth - PA</li>
                    <li>Johns Hopkins Telehealth - MD</li>
                    <li>Mayo Clinic Telehealth - MN</li>
                    <li>MD Anderson Telehealth - TX / AZ</li>
                    <li>Memorial Sloan Kettering - NY</li>
                    <li>Sylvester Cancer Center Telehealth - FL, IA, NY, Russia</li>
                    <li>University of Colorado Health Sciences WY, MN, and (other surrounding states)</li>
                    <li>Vanderbilt-Ingram Telehealth - TN, KY, GA, MS, AL</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Second Opinion Resources */}
            <section id="second-opinion" className="nlmsf-specialist-block">
              <h2 className="nlmsf-section-heading nlmsf-heading-purple">
                Second Opinion Resources for Patients
              </h2>

              <div className="nlmsf-resource-card">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2021/02/PartnersHealthcare.jpg"
                  alt="Partners Healthcare"
                  width={160}
                  height={96}
                  className="nlmsf-block-img nlmsf-img-inline"
                />
                <div>
                  <p className="nlmsf-block-text nlmsf-text-strong">
                    Resource for virtual second opinions for patients:
                  </p>
                  <p className="nlmsf-block-text">
                    This patient needs to get a second opinion at a sarcoma center! There are virtual second opinions available to avoid travel, such as Partners Online Second Opinion{" "}
                    <a
                      href="https://poso.partners.org/"
                      className="nlmsf-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://poso.partners.org/
                    </a>
                    {" "}and other hospitals have similar virtual platforms. This offers another second opinion resource.
                  </p>
                </div>
              </div>

              <div className="nlmsf-resource-card">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2021/02/GrandRounds.jpg"
                  alt="Grand Rounds"
                  width={320}
                  height={58}
                  className="nlmsf-block-img nlmsf-img-inline"
                />
                <p className="nlmsf-block-text nlmsf-text-center">
                  Get the tools and support to navigate your healthcare needs, no matter how big or small. Find a high-quality local doctor/sarcoma specialist covered by your insurance, or get a second opinion on a diagnosis from a leading expert in your specific condition.
                </p>
                <ul className="nlmsf-link-list">
                  <li>
                    <a
                      href="https://grandrounds.com/"
                      className="nlmsf-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Grand Rounds is your personal healthcare assistant | Grand Rounds
                    </a>
                  </li>
                </ul>
              </div>

              <ul className="nlmsf-link-list">
                <li>
                  <strong>Cancer.Net: </strong>
                  <a
                    href="https://www.cancer.net/navigating-cancer-care/cancer-basics/cancer-care-team/seeking-second-opinion"
                    className="nlmsf-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.cancer.net/navigating-cancer-care/cancer-basics/cancer-care-team/seeking-second-opinion
                  </a>
                </li>
                <li>
                  <strong>MD Anderson Cancer Center: </strong>
                  <a
                    href="https://www.mdanderson.org/publications/conquest/second-opinions-and-second-chances.h34-1591413.html"
                    className="nlmsf-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.mdanderson.org/publications/conquest/second-opinions-and-second-chances.h34-1591413.html
                  </a>
                </li>
                <li>
                  <strong>Stanford Health Care Online Second Opinion: </strong>
                  <a
                    href="https://stanfordhealthcare.org/second-opinion/overview.html"
                    className="nlmsf-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stanfordhealthcare.org/second-opinion/overview.html
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
