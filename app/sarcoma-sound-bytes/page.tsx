import type { Metadata } from "next";
import "./sarcoma-sound-bytes.css";

export const metadata: Metadata = {
  title: "Sarcoma Sound Bytes | NLMSF",
  description:
    "Quick updates on research findings and important information from the National Leiomyosarcoma Foundation.",
};

export default function SarcomaSoundBytesPage() {
  return (
    <main className="sarcoma-sound-bytes-page">
      <section className="hero-section">
        <div className="hero-decoration">
          <div
            className="floating-shape shape-purple"
            style={{ top: "10%", left: "15%", width: 80, height: 80, animationDelay: "0s" }}
          />
          <div
            className="floating-shape shape-blue"
            style={{ top: "60%", right: "20%", width: 120, height: 120, animationDelay: "2s" }}
          />
          <div
            className="floating-shape shape-teal"
            style={{ bottom: "20%", left: "25%", width: 60, height: 60, animationDelay: "4s" }}
          />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-bullhorn" aria-hidden />
            <span>Research Updates</span>
          </div>

          <h1 className="hero-title gradient-text">Sarcoma Sound Bytes</h1>

          <div className="hero-divider" />

          <div className="hero-subtitle">
            Quick Updates on Research Findings and Important Information
          </div>

          <p className="hero-description">
            Stay informed with the latest updates, research findings, and important information
            from the National LeiomyoSarcoma Foundation. Our Sound Bytes provide concise, timely
            updates on research, resources, and advocacy efforts.
          </p>
        </div>
      </section>

      <div className="sound-bytes-layout">
        <aside className="sidebar">
          <div className="sidebar-nav">
            <h3 className="sidebar-title">Sound Bytes Navigation</h3>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="/sound-bytes-hub/" className="sidebar-link active">
                  <i className="fas fa-home" aria-hidden />
                  <span>Sound Bytes Home</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#2025" className="sidebar-link">
                  <i className="fas fa-calendar-alt" aria-hidden />
                  <span>2025 Sound Bytes</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#2024" className="sidebar-link">
                  <i className="fas fa-calendar-alt" aria-hidden />
                  <span>2024 Sound Bytes</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#2023" className="sidebar-link">
                  <i className="fas fa-calendar-alt" aria-hidden />
                  <span>2023 Sound Bytes</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-recent">
            <h3 className="sidebar-title">Recent Sound Bytes</h3>
            <ul className="recent-sound-bytes">
              <li className="recent-sound-byte">
                <a href="/sound-bytes/2025-05-22/" className="recent-sound-byte-link">
                  <div>
                    <div>National Cancer Research Month</div>
                    <div className="recent-sound-byte-date">May 22, 2025</div>
                  </div>
                </a>
              </li>
              <li className="recent-sound-byte">
                <a href="/sound-bytes/2025-04-15/" className="recent-sound-byte-link">
                  <div>
                    <div>Social Security Benefits Update</div>
                    <div className="recent-sound-byte-date">April 15, 2025</div>
                  </div>
                </a>
              </li>
              <li className="recent-sound-byte">
                <a href="/sound-bytes/2025-03-10/" className="recent-sound-byte-link">
                  <div>
                    <div>Stanford Health Sarcoma Panel</div>
                    <div className="recent-sound-byte-date">March 10, 2025</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-cta">
            <h3>Support Our Mission</h3>
            <p>
              Your donation helps fund critical research and support services for leiomyosarcoma
              patients and their families.
            </p>
            <a href="https://nlmsf.org/donate/" className="sidebar-btn" target="_blank" rel="noopener noreferrer">
              Donate Now
            </a>
          </div>
        </aside>

        <div className="main-content">
          <section className="content-section">
            <h2 className="section-title">Latest Sound Bytes</h2>
            <p>
              Browse our collection of Sarcoma Sound Bytes for the latest updates and important
              information from the National LeiomyoSarcoma Foundation.
            </p>

            <div className="sound-byte-filter">
              <span className="sound-byte-filter-label">Filter by Year:</span>
              <button className="sound-byte-filter-btn active" type="button">
                All
              </button>
              <button className="sound-byte-filter-btn" type="button">
                2025
              </button>
              <button className="sound-byte-filter-btn" type="button">
                2024
              </button>
              <button className="sound-byte-filter-btn" type="button">
                2023
              </button>
            </div>

            <div className="sound-byte-year" id="2025">
              <h3 className="sound-byte-year-title">2025</h3>
              <div className="sound-bytes-grid">
                <div className="sound-byte-card">
                  <span className="sound-byte-date">July 25, 2025</span>
                  <h3 className="sound-byte-title">Research Updates &amp; Sarcoma Awareness</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Expert panel on liquid biopsy (ctDNA) for sarcomas this September. New research
                      on regorafenib maintenance therapy, spinal LMS surgery outcomes, and
                      blood-based biomarkers for immunotherapy response.
                    </p>
                  </div>
                  <a
                    href="https://mailchi.mp/nlmsf.org/sarcoma-sound-bytes-july-25-2025"
                    className="sound-byte-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">July 10, 2025</span>
                  <h3 className="sound-byte-title">Catequentinib Trial Results &amp; Patient Transportation</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Sarcoma Awareness Month highlights and LMS Awareness Day (July 15). ResearchMatch
                      platform introduction, recent studies on recurrence risk factors, and
                      pembrolizumab vs. nivolumab comparison.
                    </p>
                  </div>
                  <a
                    href="https://mailchi.mp/nlmsf.org/sarcoma-sound-bytes-july-10-2025"
                    className="sound-byte-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">June 9, 2025</span>
                  <h3 className="sound-byte-title">ctDNA Monitoring &amp; Cardiac Health During Chemo</h3>
                  <div className="sound-byte-preview">
                    <p>
                      June 10 virtual Natera ctDNA presentation, June 12 Survivorship Care roundtable.
                      Doxorubicin cardiotoxicity findings and heart-protective strategies. Magnesium
                      deficiency signs and benefits.
                    </p>
                  </div>
                  <a
                    href="https://mailchi.mp/nlmsf.org/sarcoma-sound-bytes-june-9-6752069"
                    className="sound-byte-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">June 25, 2025</span>
                  <h3 className="sound-byte-title">Catequentinib Trial Success &amp; LMS Awareness Month</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Phase 3 trial demonstrates superior PFS for Catequentinib vs placebo in
                      metastatic/advanced LMS. Plus, get ready for July Sarcoma Awareness Month and
                      National LMS Awareness Day on July 15th.
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-06-25/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">June 9, 2025</span>
                  <h3 className="sound-byte-title">ctDNA Monitoring &amp; Cardiac Health</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Upcoming presentation on Natera ctDNA data for LMS, plus important cardiac
                      health information during chemotherapy and magnesium benefits. Join the June
                      12th Survivorship Care Roundtable.
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-06-09/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">May 28, 2025</span>
                  <h3 className="sound-byte-title">ASCO Updates on Cell Therapies</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Cell therapy prospects for solid tumors like synovial sarcoma explored at ASCO.
                      Survivorship resources including psychosocial counseling, nutrition guidelines,
                      and coping strategies for patients and caregivers.
                    </p>
                  </div>
                  <a
                    href="https://mailchi.mp/nlmsf.org/sarcoma-sound-bytes-may-282025"
                    className="sound-byte-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">May 22, 2025</span>
                  <h3 className="sound-byte-title">National Cancer Research Month</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Celebrate and thank your sarcoma specialist who is most likely also a Sarcoma
                      Research Clinician. Supporting/Donating for Sarcoma/Leiomyosarcoma Research is an
                      "investment" in enhancing long-term Survivorship...
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-05-22/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">April 15, 2025</span>
                  <h3 className="sound-byte-title">Social Security Benefits Update</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Important updates on Social Security Benefits for 2025, especially if you are
                      newly diagnosed. Good news for your Social Security Disability Benefits in 2025
                      - Disability Digest Blog!
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-04-15/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">May 7, 2025</span>
                  <h3 className="sound-byte-title">Stanford Faculty Sarcoma Research &amp; Trial Updates</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Three May Zoom forums: Stanford faculty discussion on research and trials, Dr.
                      Jana Ascher-Carr&apos;s LMS biomarker updates, and INVINCIBLE-3 Phase III trial
                      overview from Johns Hopkins.
                    </p>
                  </div>
                  <a
                    href="https://mailchi.mp/nlmsf.org/discussion-with-stanford-faculty-sarcoma-research-trial-updates-second-opinions-the-stanford-process-6750194"
                    className="sound-byte-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">March 10, 2025</span>
                  <h3 className="sound-byte-title">Stanford Health Multi-Discipline Sarcoma Panel</h3>
                  <div className="sound-byte-preview">
                    <p>
                      In our next Newsletter: links to a Stanford Health Multi-Discipline Sarcoma
                      Panel Discussion and Dr. Carr-Ascher&apos;s presentation on a leiomyosarcoma
                      research project.
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-03-10/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">February 20, 2025</span>
                  <h3 className="sound-byte-title">Financial Assistance Resources</h3>
                  <div className="sound-byte-preview">
                    <p>
                      The National GRACE Foundation provides FREE college admissions and financial aid
                      counseling to pediatric cancer patients and survivors. Nicki Leach Foundation
                      offers lifestyle scholarships and financial assistance.
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-02-20/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">January 5, 2025</span>
                  <h3 className="sound-byte-title">New Year Message from NLMSF</h3>
                  <div className="sound-byte-preview">
                    <p>
                      A special message from the National LMS Foundation: You are NEVER alone—your
                      support system of family, friends, and the many ways the NLMSF anticipates your
                      unmet needs - We ALL care so much...
                    </p>
                  </div>
                  <a href="/sound-bytes/2025-01-05/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            <div className="sound-byte-year" id="2024">
              <h3 className="sound-byte-year-title">2024</h3>
              <div className="sound-bytes-grid">
                <div className="sound-byte-card">
                  <span className="sound-byte-date">December 15, 2024</span>
                  <h3 className="sound-byte-title">Holiday Support Resources</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Special holiday resources and support for patients and caregivers during the
                      holiday season. Includes coping strategies and community events.
                    </p>
                  </div>
                  <a href="/sound-bytes/2024-12-15/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">November 10, 2024</span>
                  <h3 className="sound-byte-title">Research Grant Recipients</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Announcing the 2024 NLMSF Research Grant Recipients and their innovative projects
                      to advance LMS treatment and care.
                    </p>
                  </div>
                  <a href="/sound-bytes/2024-11-10/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>

                <div className="sound-byte-card">
                  <span className="sound-byte-date">October 5, 2024</span>
                  <h3 className="sound-byte-title">Sarcoma Awareness Campaign</h3>
                  <div className="sound-byte-preview">
                    <p>
                      Details on our new public awareness campaign to increase understanding of
                      sarcoma and leiomyosarcoma among healthcare providers.
                    </p>
                  </div>
                  <a href="/sound-bytes/2024-10-05/" className="sound-byte-link">
                    Read Full Sound Byte <i className="fas fa-chevron-right" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
