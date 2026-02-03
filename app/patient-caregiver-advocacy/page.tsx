import type { Metadata } from "next";
import "./patient-caregiver-advocacy.css";

export const metadata: Metadata = {
  title: "Patient-Caregiver Advocacy | NLMSF",
  description:
    "Monthly roundtable and advocacy network supporting patients and caregivers in the LMS community.",
};

export default function PatientCaregiverAdvocacyPage() {
  return (
    <div className="patient-caregiver-advocacy-page">
      <section className="pca-hero">
        <div className="pca-hero-content">
          <span className="pca-badge">Monthly Roundtable</span>
          <h1 className="pca-title">Patient Caregiver Monthly Roundtable</h1>
          <p className="pca-subtitle">
            What we do today, can affect our tomorrow, our future. We all have
            what it takes to help each other!
          </p>
        </div>
      </section>

      <section className="pca-section">
        <div className="pca-card">
          <h2 className="pca-section-title">
            NLMSF Patient-Caregiver Advocacy Roundtable
          </h2>
          <p>
            Within the LMS community, everyone has a unique experience and
            sharing our narratives empowers the storyteller and all those who
            listen. Within the sarcoma community, those individual voices that
            unite to serve as a core transformative component for the care
            paradigm with an emphasis on patient experience. This network can
            generate recommendations for changes to the standard of care—from
            initial diagnosis to end of treatment that will create a legacy for
            those patients and caregivers who come after us.
          </p>
          <p>
            This is a Patient Work Group – with a goal to impact care by sharing
            your actionable suggestions with the oncology care and research
            communities. An LMS Community “think-tank” in which your voice will
            be important, and will be heard by the Oncology Care Community, the
            Research Community, to impact changes in care and precision research
            and clinical trial design. You won’t be disappointed in the results
            of your commitment to “change the story” on survivorship.
          </p>
        </div>
      </section>

      <section className="pca-section">
        <div className="pca-highlight">
          <h2>Educational Workshops of the National Leiomyosarcoma Foundation</h2>
          <p>Featuring Guest Speakers on important topics selected by the participants in these groups:</p>
          <div className="pca-list">
            <div className="pca-list-item">Patient-Caregiver Advocacy Roundtable</div>
            <div className="pca-list-item">Survivors Inspire Peer Network</div>
          </div>
        </div>
      </section>

      <section className="pca-section">
        <div className="pca-cta">
          <p className="pca-cta-text">
            We can and WILL achieve more, together! Call Annie Achee at{" "}
            <a href="tel:+13038083437">(303) 808-3437</a> to participate/ ask
            questions about PCAN!
          </p>
        </div>
      </section>
    </div>
  );
}
