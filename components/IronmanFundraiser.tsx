"use client";

import { useState, useEffect, useCallback } from "react";
import "./ironman-fundraiser.css";

declare global {
  interface Window {
    FundraiseUp?: {
      openCheckout: (opts?: Record<string, unknown>) => void;
      on: (event: string, cb: (...args: unknown[]) => void) => void;
      [key: string]: unknown;
    };
  }
}

const CAMPAIGN_FORM = "FUNRBJGPJSK";
const GOFUNDME_URL = "https://www.gofundme.com/f/support-national-leiomyosarcoma-foundation";
const COMBINED_GOAL = 5000;

export default function IronmanFundraiser() {
  const [raised, setRaised] = useState(0);
  const [donors, setDonors] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/fundraiser/", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      const fu = data.fundraiseUp;
      const gfm = data.goFundMe;
      setRaised(fu.raised + gfm.raised);
      setDonors(fu.donors + gfm.donors);
    } catch {
      /* silent */
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.FundraiseUp) return;

    try {
      window.FundraiseUp.on("donationComplete", () => {
        setTimeout(fetchData, 3000);
      });
    } catch {
      /* widget not ready yet */
    }
  }, [fetchData]);

  const pct = COMBINED_GOAL > 0 ? Math.min((raised / COMBINED_GOAL) * 100, 100) : 0;

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleDonate = () => {
    window.location.href = `?form=${CAMPAIGN_FORM}`;
  };

  return (
    <div className="imf-card">
      <div className="imf-header">
        <div className="imf-header-decor" aria-hidden="true" />
        <div className="imf-header-content">
          <span className="imf-badge">
            <i className="fas fa-running" aria-hidden /> IRONMAN Fundraiser
          </span>
          <h3 className="imf-name">Joseph Jang</h3>
          <p className="imf-event">Boulder 70.3 &amp; Ironman California</p>
        </div>
      </div>

      <div className="imf-body">
        <p className="imf-story">
          Training for two IRONMAN races to raise funds for NLMSF-supported LMS
          research. Every swim, bike, and run represents a step forward in the
          fight against leiomyosarcoma.
        </p>

        <div className="imf-progress-section">
          <div className="imf-progress-labels">
            <span className="imf-raised">
              ${loaded ? fmt(raised) : "—"}
            </span>
            <span className="imf-goal">
              Goal: ${COMBINED_GOAL.toLocaleString()}
            </span>
          </div>
          <div className="imf-bar-track">
            <div
              className="imf-bar-fill"
              style={{ width: loaded ? `${pct}%` : "0%" }}
              role="progressbar"
              aria-valuenow={raised}
              aria-valuemin={0}
              aria-valuemax={COMBINED_GOAL}
            />
          </div>
          <div className="imf-progress-meta">
            <span>{Math.round(pct)}% funded</span>
            {donors > 0 && (
              <span>
                {donors} donor{donors !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>

        <div className="imf-donate-actions">
          <button type="button" className="imf-donate-btn" onClick={handleDonate}>
            <i className="fas fa-heart" aria-hidden /> Donate via NLMSF
          </button>
          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="imf-donate-btn imf-donate-btn--gfm"
          >
            <i className="fas fa-external-link-alt" aria-hidden /> GoFundMe
          </a>
        </div>
        <a href="/ironman-fundraiser" className="imf-learn-more">
          Read Joseph&apos;s Story &rarr;
        </a>
      </div>
    </div>
  );
}
