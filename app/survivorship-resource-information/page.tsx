import type { Metadata } from "next";
import "./survivorship-resource-information.css";

export const metadata: Metadata = {
  title: "Survivorship Resources | NLMSF",
  description:
    "Survivorship resources and helpful articles from the American Society of Clinical Oncology.",
};

const resources = [
  {
    title: "Healthy Living After Cancer",
    source: "Cancer.Net",
    url: "https://www.cancer.net/survivorship/healthy-living/healthy-living-after-cancer",
  },
  {
    title: "Food and Cancer Risk",
    source: "Cancer.Net",
    url: "https://www.cancer.net/navigating-cancer-care/prevention-and-healthy-living/food-and-cancer-risk",
  },
  {
    title: "Coping with Cancer",
    source: "Cancer.Net",
    url: "https://www.cancer.net/coping-with-cancer",
  },
  {
    title: "Life After Cancer",
    source: "Cancer.Net",
    url: "https://www.cancer.net/survivorship/life-after-cancer",
  },
  {
    title: "NLMSF Life Change",
    source: "NLMSF",
    url: "https://nlmsflifechange.com/",
  },
];

export default function SurvivorshipResourceInformationPage() {
  return (
    <main className="survivorship-resource-page">
      <section className="sr-hero">
        <div className="sr-hero-inner">
          <p className="sr-eyebrow">Survivorship Resources</p>
          <h1>Survivorship Resource Information</h1>
          <p>
            Helpful articles by the American Society of Clinical Oncology, plus trusted survivorship
            resources to support life after treatment.
          </p>
        </div>
      </section>

      <section className="sr-section">
        <div className="sr-card">
          <h2>Featured Survivorship Links</h2>
          <div className="sr-grid">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-link-card"
              >
                <div className="sr-card-header">
                  <span>{resource.source}</span>
                </div>
                <h3>{resource.title}</h3>
                <span className="sr-cta">Visit resource</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
