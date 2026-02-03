import type { Metadata } from "next";
import "./treating-soft-tissue-sarcomas.css";

export const metadata: Metadata = {
  title: "Treating Soft Tissue Sarcomas | NLMSF",
  description:
    "Treatment approaches, decision guidance, and links from the American Cancer Society on soft tissue sarcomas.",
};

const primaryApproaches = [
  {
    title: "Surgery for Soft Tissue Sarcomas",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/surgery.html",
  },
  {
    title: "Radiation Therapy for Soft Tissue Sarcomas",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/radiation-therapy.html",
  },
  {
    title: "Chemotherapy for Soft Tissue Sarcomas",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/chemotherapy.html",
  },
  {
    title: "Targeted Drug Therapy for Soft Tissue Sarcoma",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/targeted-therapy.html",
  },
  {
    title: "Immunotherapy for Soft Tissue Sarcoma",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/immunotherapy.html",
  },
];

const decisionLinks = [
  {
    title: "Treatment of Soft Tissue Sarcomas, by Stage",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/by-stage.html",
  },
  {
    title: "Questions to Ask About Soft Tissue Sarcomas",
    url: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/detection-diagnosis-staging/talking-with-doctor.html",
  },
  {
    title: "Seeking a Second Opinion",
    url: "https://www.cancer.org/cancer/managing-cancer/finding-care/seeking-a-second-opinion.html",
  },
];

export default function TreatingSoftTissueSarcomasPage() {
  return (
    <main className="tst-sarcoma-page">
      <section className="tst-hero">
        <div className="tst-hero-inner">
          <p className="tst-eyebrow">American Cancer Society</p>
          <h1>Treating Soft Tissue Sarcomas</h1>
          <p>
            Insights from the American Cancer Society on treatment approaches, decision guidance,
            and recommended resources for soft tissue sarcomas.
          </p>
        </div>
      </section>

      <section className="tst-section">
        <div className="tst-card">
          <h2>How are soft tissue sarcomas treated?</h2>
          <p>
            Primary approaches to soft tissue sarcoma treatment include surgery, radiation,
            chemotherapy, targeted therapy, and immunotherapy. Treatment should be tailored to the
            sarcoma type, location, and stage, while accounting for overall health. The primary
            curative method involves surgical removal, making surgery an integral component of the
            treatment approach whenever feasible.
          </p>
          <div className="tst-grid">
            {primaryApproaches.map((approach) => (
              <a
                key={approach.title}
                href={approach.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tst-link-card"
              >
                <h3>{approach.title}</h3>
                <span>Learn more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tst-section">
        <div className="tst-card">
          <h2>Making treatment decisions</h2>
          <p>
            Engage in comprehensive discussions with your medical team about various treatment
            options, understanding their objectives and potential side effects. While there might
            be a sense of urgency in making decisions, allow yourself the necessary time to
            assimilate the information. Don&apos;t hesitate to pose questions to your cancer care team
            for clarity and informed decision-making. Given the opportunity, seeking a second
            opinion is a prudent decision and can provide additional information and confidence in
            the chosen treatment plan.
          </p>
          <ul className="tst-list">
            {decisionLinks.map((link) => (
              <li key={link.title}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tst-section">
        <div className="tst-card tst-callout">
          <h2>Additional information</h2>
          <p>
            Visit the American Cancer Society overview for more details and background on treating
            soft tissue sarcomas.
          </p>
          <a
            href="https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating.html"
            target="_blank"
            rel="noopener noreferrer"
            className="tst-primary-link"
          >
            View the ACS treatment overview
          </a>
        </div>
      </section>
    </main>
  );
}
