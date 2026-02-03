import type { Metadata } from "next";
import "./survivors-inspire.css";

export const metadata: Metadata = {
  title: "Survivors Inspire | NLMSF",
  description:
    "A survivor-led initiative to share experiences, tips, and resources for life after treatment.",
};

export default function SurvivorsInspirePage() {
  return (
    <main className="survivors-inspire-page">
      <section className="si-hero">
        <div className="si-hero-inner">
          <p className="si-eyebrow">Survivorship Initiative</p>
          <h1>Survivors Inspire</h1>
          <p className="si-subtitle">
            Bringing together survivors to share experiences with life after treatment and hear
            tips, suggestions, and new information from guest speakers at sarcoma centers of
            excellence.
          </p>
        </div>
      </section>

      <section className="si-section">
        <div className="si-card">
          <p>
            Focus areas of discussion include:
          </p>
          <ul className="si-list">
            <li>
              What is important to experience after treatment with continued support of the
              oncology care team?
            </li>
            <li>
              Perspectives on how to shape “what’s next” — what should be the next steps in
              rebuilding quality of life after treatment has ended?
            </li>
            <li>Impact of Survivorship Care Planning after treatment.</li>
            <li>Integrative Medicine involvement in building such a plan.</li>
          </ul>
          <p>
            Sharing perspectives on what is working for you and learning from each other will be
            inspiring and empowering! We invite you to also visit our website focused specifically
            on survivorship: <a href="https://nlmsf.org" target="_blank" rel="noopener noreferrer">Life Change – A New Normal</a>.
          </p>
        </div>
      </section>

      <section className="si-section">
        <div className="si-card si-callout">
          <h2>Monthly Call Details</h2>
          <p>
            Our network meets by conference call on the third Thursday of each month at 7:00 pm ET.
            To register, please email{" "}
            <a href="mailto:annie@nlmsf.org">annie@nlmsf.org</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
