import type { Metadata } from "next";
import Link from "next/link";
import { getFullFeed } from "@/lib/community-news";
import NewsTrackerFeed from "./NewsTrackerFeed";
import "./news-tracker.css";

export const metadata: Metadata = {
  title: "NLMSF News Tracker | NLMSF",
  description:
    "Stay informed with the latest news, updates, and research in the LMS community.",
};

function trackerYears(newsTracker: { year: string }[]): string[] {
  const set = new Set(newsTracker.map((entry) => entry.year));
  return Array.from(set).sort((a, b) => Number(b) - Number(a));
}

export default async function NewsTrackerPage() {
  const { newsTracker } = await getFullFeed();
  const years = trackerYears(newsTracker);
  const activeYear = years[0] ?? "";

  return (
    <main className="news-tracker-page">
      {/* Hero Section for Elementor */}
      <div className="elementor-section elementor-section-boxed">
        <div className="elementor-container">
          <div className="news-hero">
            <div className="badge">
              <i className="fas fa-newspaper"></i>
              <span>Newsletter Archive</span>
            </div>
            <h1 className="hero-title">NLMSF News Tracker</h1>
            <p className="hero-description">
              Stay informed with the latest news, updates, and research in the LMS community
            </p>

            <div className="feature-tags">
              <div className="feature-tag">News Updates</div>
              <div className="feature-tag">Research Highlights</div>
              <div className="feature-tag">Clinical Trials</div>
              <div className="feature-tag">Community Resources</div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-tracker-layout">
        {/* Sidebar for News Tracker Page */}
        <div className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">On This Page</h3>

            <div className="sidebar-nav">
              <div className="nav-item">
                <a href="#latest-news" className="nav-link sidebar-link">
                  <span className="nav-icon purple"></span>
                  <span>Latest News</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#research-updates" className="nav-link sidebar-link">
                  <span className="nav-icon blue"></span>
                  <span>Research Updates</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#clinical-trials" className="nav-link sidebar-link">
                  <span className="nav-icon teal"></span>
                  <span>Clinical Trials</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#foundation-updates" className="nav-link sidebar-link">
                  <span className="nav-icon green"></span>
                  <span>Foundation Updates</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#events" className="nav-link sidebar-link">
                  <span className="nav-icon orange"></span>
                  <span>Events &amp; Webinars</span>
                </a>
              </div>

              <div className="nav-item">
                <a href="#patient-stories" className="nav-link sidebar-link">
                  <span className="nav-icon red"></span>
                  <span>Patient Stories</span>
                </a>
              </div>
            </div>

            <div className="year-nav">
              <h4 className="sidebar-subtitle">Newsletter Archives</h4>
              <div className="year-links">
                {years.length === 0 ? (
                  <span className="year-link active">No Issues Yet</span>
                ) : (
                  years.map((year) => (
                    <a
                      key={year}
                      href={`#year-${year}`}
                      className={`year-link sidebar-link${year === activeYear ? " active" : ""}`}
                    >
                      {year}
                    </a>
                  ))
                )}
              </div>
            </div>

            <div className="sidebar-action">
              <Link href="/" className="back-button">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-section cta-section">
            <h3 className="sidebar-subtitle">Stay Updated</h3>
            <p>Get the latest LMS news and research updates delivered to your inbox.</p>
            <Link href="/newsletter-signup" className="cta-button">
              <i className="fas fa-envelope"></i>
              <span>Subscribe</span>
            </Link>
          </div>
        </div>

        <div className="news-tracker-content">
          <div id="latest-news" className="news-tracker-anchor" />
          <div id="research-updates" className="news-tracker-anchor" />
          <div id="clinical-trials" className="news-tracker-anchor" />
          <div id="foundation-updates" className="news-tracker-anchor" />
          <div id="events" className="news-tracker-anchor" />
          <div id="patient-stories" className="news-tracker-anchor" />
          <NewsTrackerFeed newsTracker={newsTracker} />
        </div>
      </div>
    </main>
  );
}
