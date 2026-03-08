"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CAMPAIGN_FORM = "FUNRBJGPJSK";

type Donor = { name: string; amount: number };

export default function FundraiserPageClient() {
  const [raised, setRaised] = useState(0);
  const [goal, setGoal] = useState(5000);
  const [donors, setDonors] = useState(0);
  const [topDonors, setTopDonors] = useState<Donor[]>([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/fundraiser/", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setRaised(data.raised);
      setGoal(data.goal);
      setDonors(data.donors);
      setTopDonors(data.topDonors ?? []);
    } catch {
      /* silent */
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const pct = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;

  const handleDonate = () => {
    window.location.href = `/?form=${CAMPAIGN_FORM}`;
  };

  return (
    <main className="imfp-page">
      {/* Hero */}
      <section className="imfp-hero">
        <div className="imfp-hero-content">
          <div className="imfp-badge">
            <span className="imfp-badge-dot" aria-hidden="true" />
            <span>NLMSF Fundraiser</span>
          </div>
          <h1>Every Mile Counts</h1>
          <div className="imfp-divider" />
          <p className="imfp-hero-sub">
            Joseph Jang is racing IRONMAN to raise funds for
            leiomyosarcoma research. Join him in the fight against LMS.
          </p>
        </div>
        <div className="imfp-hero-decor decor-one" aria-hidden="true" />
        <div className="imfp-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="imfp-container">
        {/* Progress Card */}
        <section className="imfp-progress-card">
          <div className="imfp-progress-header">
            <div>
              <span className="imfp-raised-label">Raised</span>
              <span className="imfp-raised-amount">
                ${loaded ? raised.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "—"}
              </span>
            </div>
            <div className="imfp-goal-side">
              <span className="imfp-goal-label">Goal</span>
              <span className="imfp-goal-amount">
                ${goal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="imfp-bar-track">
            <div
              className="imfp-bar-fill"
              style={{ width: loaded ? `${pct}%` : "0%" }}
              role="progressbar"
              aria-valuenow={raised}
              aria-valuemin={0}
              aria-valuemax={goal}
            />
          </div>

          <div className="imfp-bar-meta">
            <span>{Math.round(pct)}% of goal</span>
            {donors > 0 && (
              <span>
                {donors} donation{donors !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <button type="button" className="imfp-donate-btn" onClick={handleDonate}>
            <i className="fas fa-heart" aria-hidden /> Support Joseph&apos;s Mission
          </button>
        </section>

        {/* Main Content Grid */}
        <div className="imfp-grid">
          {/* Story */}
          <div className="imfp-story">
            <h2 className="imfp-section-title">Joseph&apos;s Story</h2>

            <div className="imfp-quote-block">
              <p>
                This year I am taking on my biggest challenge yet:{" "}
                <strong>Ironman 70.3 Boulder</strong> in June and{" "}
                <strong>Ironman California</strong> in October. And I am not
                doing it just for myself.
              </p>
            </div>

            <p>
              I am doing it for the patients and families who are fighting
              leiomyosarcoma right now — a rare and aggressive cancer that
              too few people know about.
            </p>
            <p>
              I have seen how fast this disease can change a life and how
              powerless it can make families feel. I have also seen how much
              hope and support can mean when everything feels overwhelming.
              That is why I set a goal to raise <strong>five thousand
              dollars</strong> for the National Leiomyosarcoma Foundation
              throughout my Ironman training.
            </p>
            <p>
              Every dollar you give goes directly toward helping real people.
              Families who wake up every day facing something they never asked
              for. Your support gives them resources, direction, and a reminder
              that they are not alone in their fight.
            </p>
            <p>
              This cause matters deeply to me. It gives every workout and every
              mile a purpose beyond a finish line.
            </p>
            <p>
              If you are able, please consider donating. Any amount truly helps.
              It moves me closer to my goal and brings families closer to the
              support they need.
            </p>

            <div className="imfp-closing">
              <p>Thank you for being part of this with me.</p>
              <p className="imfp-tagline">
                Every step matters. Every moment matters.<br />
                <strong>Every mile counts.</strong>
              </p>
            </div>

            {/* Event Details */}
            <div className="imfp-events">
              <h3>Event Details</h3>
              <div className="imfp-event-cards">
                <div className="imfp-event-card">
                  <div className="imfp-event-icon">
                    <i className="fas fa-swimming-pool" aria-hidden />
                  </div>
                  <div>
                    <h4>IRONMAN 70.3 Boulder</h4>
                    <p>June 2026 · Boulder, CO</p>
                    <p className="imfp-event-detail">
                      1.2 mi swim · 56 mi bike · 13.1 mi run
                    </p>
                  </div>
                </div>
                <div className="imfp-event-card">
                  <div className="imfp-event-icon">
                    <i className="fas fa-medal" aria-hidden />
                  </div>
                  <div>
                    <h4>IRONMAN California</h4>
                    <p>October 2026 · Sacramento, CA</p>
                    <p className="imfp-event-detail">
                      2.4 mi swim · 112 mi bike · 26.2 mi run
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About NLMSF */}
            <div className="imfp-about">
              <h3>About the National Leiomyosarcoma Foundation</h3>
              <p>
                The NLMSF is dedicated to advancing research and providing hope to
                those affected by LMS. Since 1997, the foundation has funded
                LMS-specific research, organized international research
                roundtables, and provided 24/7 support to patients and caregivers
                worldwide.
              </p>
              <Link href="/mission" className="imfp-about-link">
                Learn more about the NLMSF &rarr;
              </Link>
            </div>
          </div>

          {/* Sidebar: Top Donors + Share */}
          <aside className="imfp-sidebar">
            <div className="imfp-donors-card">
              <h3>
                <i className="fas fa-trophy" aria-hidden /> Top Supporters
              </h3>
              {topDonors.length > 0 ? (
                <ol className="imfp-donor-list">
                  {topDonors.map((d, i) => (
                    <li key={i} className="imfp-donor-row">
                      <span className="imfp-donor-rank">{i + 1}</span>
                      <span className="imfp-donor-name">{d.name}</span>
                      <span className="imfp-donor-amount">
                        ${d.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="imfp-no-donors">
                  Be the first to support Joseph&apos;s mission!
                </p>
              )}
            </div>

            <div className="imfp-share-card">
              <h3>Share This Page</h3>
              <p>Help Joseph reach his goal by spreading the word.</p>
              <div className="imfp-share-links">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://nlmsf.org/ironman-fundraiser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imfp-share-btn facebook"
                  aria-label="Share on Facebook"
                >
                  <i className="fab fa-facebook-f" aria-hidden />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=https://nlmsf.org/ironman-fundraiser&text=Support%20Joseph%20Jang%27s%20IRONMAN%20fundraiser%20for%20LMS%20research!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imfp-share-btn twitter"
                  aria-label="Share on Twitter"
                >
                  <i className="fab fa-twitter" aria-hidden />
                </a>
                <a
                  href="mailto:?subject=Support Joseph's IRONMAN Fundraiser for LMS Research&body=Joseph Jang is racing IRONMAN to raise $5,000 for leiomyosarcoma research. Check it out: https://nlmsf.org/ironman-fundraiser"
                  className="imfp-share-btn email"
                  aria-label="Share via Email"
                >
                  <i className="fas fa-envelope" aria-hidden />
                </a>
              </div>
            </div>

            <button
              type="button"
              className="imfp-sidebar-donate"
              onClick={handleDonate}
            >
              <i className="fas fa-heart" aria-hidden /> Donate Now
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
