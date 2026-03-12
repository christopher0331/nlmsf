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

type SourceData = {
  raised: number;
  goal: number;
  donors: number;
};

export default function IronmanFundraiser() {
  const [fu, setFu] = useState<SourceData>({ raised: 0, goal: 5000, donors: 0 });
  const [gfm, setGfm] = useState<SourceData>({ raised: 0, goal: 5000, donors: 0 });
  const [loaded, setLoaded] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/fundraiser/", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setFu(data.fundraiseUp);
      setGfm(data.goFundMe);
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

  const fuPct = fu.goal > 0 ? Math.min((fu.raised / fu.goal) * 100, 100) : 0;
  const gfmPct = gfm.goal > 0 ? Math.min((gfm.raised / gfm.goal) * 100, 100) : 0;

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

        <div className="imf-dual-progress">
          {/* Fundraise Up */}
          <div className="imf-progress-section">
            <div className="imf-progress-labels">
              <span className="imf-source-tag">Fundraise Up</span>
              <span className="imf-goal">
                Goal: ${fu.goal.toLocaleString()}
              </span>
            </div>
            <div className="imf-progress-labels">
              <span className="imf-raised">${loaded ? fmt(fu.raised) : "—"}</span>
            </div>
            <div className="imf-bar-track">
              <div
                className="imf-bar-fill"
                style={{ width: loaded ? `${fuPct}%` : "0%" }}
                role="progressbar"
                aria-valuenow={fu.raised}
                aria-valuemin={0}
                aria-valuemax={fu.goal}
                aria-label="Fundraise Up progress"
              />
            </div>
            <div className="imf-progress-meta">
              <span>{Math.round(fuPct)}% funded</span>
              {fu.donors > 0 && (
                <span>
                  {fu.donors} donor{fu.donors !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>

          {/* GoFundMe */}
          <div className="imf-progress-section">
            <div className="imf-progress-labels">
              <span className="imf-source-tag imf-source-tag--gfm">GoFundMe</span>
              <span className="imf-goal">
                Goal: ${gfm.goal.toLocaleString()}
              </span>
            </div>
            <div className="imf-progress-labels">
              <span className="imf-raised">${loaded ? fmt(gfm.raised) : "—"}</span>
            </div>
            <div className="imf-bar-track">
              <div
                className="imf-bar-fill imf-bar-fill--gfm"
                style={{ width: loaded ? `${gfmPct}%` : "0%" }}
                role="progressbar"
                aria-valuenow={gfm.raised}
                aria-valuemin={0}
                aria-valuemax={gfm.goal}
                aria-label="GoFundMe progress"
              />
            </div>
            <div className="imf-progress-meta">
              <span>{Math.round(gfmPct)}% funded</span>
              {gfm.donors > 0 && (
                <span>
                  {gfm.donors} donor{gfm.donors !== 1 ? "s" : ""}
                </span>
              )}
            </div>
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
