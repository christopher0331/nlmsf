import type { Metadata } from "next";
import "./quick-tips.css";

export const metadata: Metadata = {
  title: "Quick Tips for Newly Diagnosed | NLMSF",
  description:
    "Helpful tips and resources for newly diagnosed patients and caregivers dealing with leiomyosarcoma.",
};

interface QuickTipTopic {
  title: string;
  description?: string;
  driveUrl: string;
  category: string;
}

const QUICK_TIPS: QuickTipTopic[] = [
  {
    title: "Survivorship Care Guide",
    description: "Essential tips for navigating your LMS journey",
    driveUrl: "https://drive.google.com/file/d/1dgSeDh6-e4U6xfXJxo9YuOYmhDgUVz_g/view",
    category: "General",
  },
  {
    title: "NLMSF Diagnostic Quick Tips & Care Guide",
    description: "What to Do After a New Diagnosis",
    driveUrl: "https://drive.google.com/file/d/1kvq_OiK2cOTVg1MDh_jb8US4mouBOptj/view",
    category: "General",
  },
  {
    title: "The Role of a Tumor Board in Patient Care",
    description: "Understanding how tumor boards can help guide your treatment decisions",
    driveUrl: "https://drive.google.com/file/d/1GYajNDAlQSLGLQ_ERVVkzXGNg9J2TMxq/view?usp=sharing",
    category: "Treatment",
  },
  {
    title: "Sarcoma Imaging",
    description: "Learn about imaging techniques used in sarcoma diagnosis and monitoring",
    driveUrl: "https://drive.google.com/file/d/1bG0tq-MSXUl_wczNr8cARI8L26WehwOF/view?usp=sharing",
    category: "Treatment",
  },
  {
    title: "Leiomyosarcoma (LMS) Surgical Guide",
    description: "Comprehensive guide to surgical treatment options for LMS",
    driveUrl: "https://drive.google.com/file/d/1nkOvj2MUs75N6p-t1Ywhe-CX0LKhKv3F/view?usp=sharing",
    category: "Treatment",
  },
  {
    title: "Second Opinions for LMS / Sarcomas",
    description: "What to Consider when seeking a second opinion",
    driveUrl: "https://drive.google.com/file/d/1P1oWmE-_cCi_OZKVnOUOC0vHI-1mFYVs/view",
    category: "General",
  },
];

export default function QuickTipsPage() {
  // Group tips by category
  const tipsByCategory = QUICK_TIPS.reduce((acc, tip) => {
    if (!acc[tip.category]) {
      acc[tip.category] = [];
    }
    acc[tip.category].push(tip);
    return acc;
  }, {} as Record<string, QuickTipTopic[]>);

  const categories = Object.keys(tipsByCategory);

  return (
    <main className="quick-tips-page">
      <section className="quick-tips-hero">
        <div className="quick-tips-hero-content">
          <div className="quick-tips-hero-image">
            <img
              src="/images/quick-tips-logo.png"
              alt="Sarcoma & LMS Pathways Care Guide - Quick Tips for Patients & Families"
              className="quick-tips-logo"
            />
          </div>
          <div className="quick-tips-badge">
            <span className="quick-tips-badge-dot" aria-hidden="true" />
            <span>Support Resources</span>
          </div>
          <h1>Quick Tips for Newly Diagnosed</h1>
          <div className="quick-tips-divider" />
          <p>
            Trusted guidance for navigating diagnosis, treatment, and leiomyosarcoma. Helpful tips and resources organized by topic to support you on your LMS journey.
          </p>
          <div className="quick-tips-tags">
            <span className="quick-tips-tag blue">Patient Resources</span>
            <span className="quick-tips-tag indigo">Caregiver Support</span>
          </div>
        </div>
        <div className="quick-tips-hero-decor decor-one" aria-hidden="true" />
        <div className="quick-tips-hero-decor decor-two" aria-hidden="true" />
      </section>

      <section className="quick-tips-intro">
        <div className="quick-tips-card purple">
          <div className="quick-tips-card-header">
            <span className="quick-tips-icon purple" aria-hidden="true" />
            <h3>About Quick Tips</h3>
          </div>
          <div className="quick-tips-card-body">
            <p>
              Our Quick Tips collection provides practical, actionable advice organized by topic.
              Each document contains multiple tips to help you navigate various aspects of your
              journey with leiomyosarcoma.
            </p>
            <p>
              Click on any topic below to access a Google Drive document with detailed tips and
              guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="quick-tips-layout">
        <div className="quick-tips-main">
          {categories.map((category) => (
            <section key={category} className="content-section">
              <h2 className={`section-title ${getCategoryColor(category)}`}>{category}</h2>

              <div className="quick-tips-grid">
                {tipsByCategory[category].map((tip, index) => (
                  <div
                    key={index}
                    className={`quick-tips-card-link ${getCategoryColor(category)}`}
                  >
                    <div className="quick-tips-card-link-header">
                      <span
                        className={`quick-tips-icon ${getCategoryColor(category)}`}
                        aria-hidden="true"
                      />
                      <h3>{tip.title}</h3>
                    </div>
                    {tip.description && (
                      <p className="quick-tips-card-link-description">{tip.description}</p>
                    )}
                    <a
                      href={tip.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quick-tips-drive-link"
                    >
                      <span>View Tips Document</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {QUICK_TIPS.length === 0 && (
            <section className="content-section">
              <div className="content-panel teal">
                <div className="panel-header">
                  <span className="panel-icon teal" aria-hidden="true" />
                  <div>
                    <h3>Coming Soon</h3>
                    <p>Quick tips will be available here soon.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    General: "blue",
    Treatment: "indigo",
    Caregiving: "teal",
    Financial: "amber",
    Emotional: "rose",
    Nutrition: "emerald",
  };
  return colorMap[category] || "purple";
}
