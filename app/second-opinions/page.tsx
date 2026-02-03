import type { Metadata } from "next";
import "./second-opinions.css";

export const metadata: Metadata = {
  title: "Second Opinions | NLMSF",
  description: "Why second opinions matter for sarcoma care and treatment.",
};

export default function SecondOpinionsPage() {
  return (
    <main className="second-opinions-page">
      <section className="so-hero">
        <div className="so-hero-inner">
          <p className="so-eyebrow">Second Opinions</p>
          <h1>Why Second Opinions Matter for Sarcoma</h1>
          <p className="so-subtitle">
            Dr. Margaret Von Merhen, Chief, Division of Oncology · Dr. Jeffrey Farma, Surgical
            Oncologist
          </p>
        </div>
      </section>

      <section className="so-section">
        <div className="so-card">
          <p>
            Sarcoma is a rare type of cancer — with fewer than 20,000 new diagnoses occurring each
            year. Because it is so rare, not all doctors are familiar with how to treat these tumors
            effectively, which makes it especially important to seek a second opinion if you are
            diagnosed with a sarcoma.
          </p>
          <p>
            Sarcomas are cancerous tumors that develop both in bone and in soft tissues such as fat,
            muscles, nerves, fibrous tissues, blood vessels, or deep skin tissues. Though they
            commonly form in the arms, legs, or torso, sarcomas can occur anywhere in the body. There
            are also more than 70 different types of soft tissue sarcomas, each affecting the body in
            a different way.
          </p>
        </div>
      </section>

      <section className="so-section">
        <div className="so-card so-quote">
          <p>
            “They’re very rare,” said Jeffrey M. Farma, MD, FACS, a surgical oncologist and expert in
            Sarcoma at Fox Chase Cancer Center. “And not every practitioner is experienced in dealing
            with these types of tumors. Some hospitals may have never seen certain types of sarcomas
            before.”
          </p>
        </div>
      </section>

      <section className="so-section">
        <div className="so-card">
          <p>
            In addition to being uncommon, sarcomas can be challenging to treat. “They have a high
            chance of recurring locally and can also spread elsewhere, even with aggressive
            treatment,” Farma said.
          </p>
          <p>
            Ensuring you receive an accurate diagnosis is critical. This, along with seeking care at
            a place that can offer personalized, cutting-edge treatments, offers the greatest chance
            for success.
          </p>
          <p className="so-highlight">
            “It’s crucial to see a physician at an NCI-designated comprehensive cancer center. You
            will be seen by a multidisciplinary team who specializes in sarcoma and can determine
            the best treatment plan for your specific disease.”
          </p>
        </div>
      </section>
    </main>
  );
}
