import type { Metadata } from "next";
import Link from "next/link";
import "./may-22-sound-byte.css";

export const metadata: Metadata = {
  title: "Sarcoma Sound Bytes - May 22, 2025 | NLMSF",
  description:
    "National Cancer Research Month, Social Security and disability resources, financial assistance, and NLMSF support for leiomyosarcoma patients.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function May22SoundBytePage() {
  return (
    <div className="sound-byte-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-bullhorn" aria-hidden />
            <span>Sound Byte</span>
          </div>
          <div className="hero-date">May 22, 2025</div>
          <h1 className="hero-title gradient-text">Sarcoma Sound Bytes</h1>
          <div className="hero-divider" aria-hidden />
        </div>
      </section>

      <div className="sound-byte-layout">
        <aside className="sidebar">
          <div className="sidebar-nav">
            <h3 className="sidebar-title">Navigation</h3>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link href="/sound-bytes-hub" className="sidebar-link">
                  <i className="fas fa-home" aria-hidden />
                  <span>Sound Bytes Hub</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href="/sound-bytes/2025-04-15" className="sidebar-link">
                  <i className="fas fa-chevron-left" aria-hidden />
                  <span>Previous Sound Byte</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href="/sound-bytes/2025-06-10" className="sidebar-link">
                  <i className="fas fa-chevron-right" aria-hidden />
                  <span>Next Sound Byte</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <a href="https://nlmsf.org/support/" className="sidebar-link" {...ext}>
                  <i className="fas fa-heart" aria-hidden />
                  <span>Support NLMSF</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-cta">
            <h3>Research Investment</h3>
            <p>Supporting Sarcoma/LMS research is an investment in enhancing long-term survivorship and treatment outcomes.</p>
            <a href="https://nlmsf.org/donate/" className="sidebar-btn" {...ext}>
              Donate Today
            </a>
          </div>
          <div className="sidebar-nav">
            <h3 className="sidebar-title">Related Resources</h3>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link href="/financial-assistance" className="sidebar-link">
                  <i className="fas fa-dollar-sign" aria-hidden />
                  <span>Financial Assistance</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href="/accountability-reports-hub" className="sidebar-link">
                  <i className="fas fa-chart-line" aria-hidden />
                  <span>Accountability Reports</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link href="/personal-advocacy" className="sidebar-link">
                  <i className="fas fa-user-shield" aria-hidden />
                  <span>Personal Advocacy</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="sound-byte-container">
          <div className="sound-byte-content">
            <div className="sound-byte-header">
              <h2 className="sound-byte-title">S A R C O M A   S O U N D   B Y T E S - May 22, 2025</h2>
              <div className="sound-byte-divider" aria-hidden />
            </div>
            <div className="sound-byte-body">
              <div className="sound-byte-section">
                <h3 className="sound-byte-subtitle sound-byte-subtitle-center">N A T I O N A L    C A N C E R     R E S E A R C H     M O N T H</h3>
                <div className="sound-byte-center">
                  <p><strong>Celebrate and thank your sarcoma specialist who<br /> is most likely also a Sarcoma Research Clinician</strong></p>
                </div>
                <div className="sound-byte-center">
                  <p><strong>Supporting  / Donating for Sarcoma / Leiomyosarcoma<br /> Research is an &quot;investment&quot; in:</strong></p>
                </div>
                <div className="sound-byte-indent">
                  <p>Enhancing long-term Survivorship</p>
                  <p>Advancing and accelerating Research initiatives</p>
                  <p>Enhancing treatment outcomes for sarcoma</p>
                  <p className="sound-byte-indent-2">based on the success of research expansion</p>
                  <p>Advances research in Repurposing Drugs for Sarcoma</p>
                </div>
                <div className="sound-byte-center">
                  <p><strong>Every dollar counts – THANK YOU in advance<br /> for your belief and commitment to make a difference</strong></p>
                </div>
                <div className="sound-byte-center">
                  <p>National LeioMyoSarcoma Foundation – helping to empower and educate about leiomyosarcoma a rare smooth tissue cancer</p>
                </div>
              </div>

              <div className="sound-byte-separator" aria-hidden>______________________________________________________________</div>

              <div className="sound-byte-section">
                <p className="sound-byte-center">In our next Newsletter coming out next week:  you will have links to a Stanford Health Multi-Discipline<br /><br /> Sarcoma Panel Discussion and Dr. Carr- Ascher&apos;s presentation on a leiomyosarcoma research project.</p>
              </div>

              <div className="sound-byte-separator" aria-hidden>______________________________________________________________</div>

              <div className="sound-byte-spacer" />

              <div className="sound-byte-section">
                <h3 className="sound-byte-section-title">SOCIAL SECURITY AND YOU:</h3>
                <p>The More you Know . . .  . .especially if you are newly diagnosed:</p>
                <p>
                  <a href="https://retiredamericans.org/wp-content/uploads/2025/04/Social-Security-Figures-Fact-Sheet-2025.pdf" className="content-link" {...ext}>2025 FACT SHEET – Update on Social Security Benefits</a>
                </p>
                <p>Good News For Your Social Security Disability Benefits in 2025 – Disability Digest Blog!</p>
                <p>What Changes Are Coming To Social Security In 2025 Disability?</p>
                <p>Is Cancer Considered a Disability?<br />(Please note: the listing of cancer types is not a complete list)</p>
                <p>Filing for Social Security Disability if you have a cancer diagnosis:<br />
                  <a href="https://www.cancercenter.com/community/blog/2023/01/filing-disability-for-cancer" className="content-link" {...ext}>https://www.cancercenter.com/community/blog/2023/01/filing-disability-for-cancer</a>
                </p>
              </div>

              <div className="sound-byte-separator" aria-hidden>____________________________________________________________________________________</div>

              <div className="sound-byte-spacer" />

              <div className="sound-byte-section">
                <h3 className="sound-byte-section-title">Financial Assistance</h3>
                <p>The National GRACE Foundation provides FREE college admissions and financial aid counseling to pediatric cancer patients and survivors. Nicki Leach Foundation, 904-304-8531 Lifestyle scholarships and financial assistance for adolescent and young adult cancer survivor students that provide for everyday expenses like car payments, clothing and more.</p>
                <p>For more resource information on Financial Assistance, visit the NLMSF Website: <Link href="/financial-assistance" className="content-link">Financial Assistance</Link></p>
              </div>

              <div className="sound-byte-spacer" />

              <div className="sound-byte-section">
                <p>From the National LMS Foundation:  Sharing a special message with you on this Special Day:</p>
                <p>A Reminder from the National LMS Foundation . . .</p>
                <p>You are NEVER alone—your support system of family, friends, and the many ways the NLMSF anticipates your unmet needs - We ALL care so much . . .</p>
                <p>Don&apos;t count the days. Make the days count. – Muhammad Ali Cancer cannot cripple hope, resilience. Strength . . . it cannot conquer the spirit.</p>
                <p>Wishing you all only good things for you and your family</p>
                <div className="sound-byte-center sound-byte-mt">
                  <p><strong>YOUR National LMS Foundation (NLMSF) Support Team</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="sound-byte-navigation">
            <Link href="/sound-bytes/2025-04-15" className="sound-byte-nav-btn prev">
              <i className="fas fa-chevron-left" aria-hidden /> Previous Sound Byte
            </Link>
            <Link href="/sound-bytes-hub" className="sound-byte-nav-btn">
              <i className="fas fa-th-large" aria-hidden /> All Sound Bytes
            </Link>
            <Link href="/sound-bytes/2025-06-10" className="sound-byte-nav-btn next">
              Next Sound Byte <i className="fas fa-chevron-right" aria-hidden />
            </Link>
          </div>

          <div className="sound-byte-cta">
            <h3>Support Our Mission</h3>
            <p>Your donation helps fund critical research and support services for leiomyosarcoma patients and their families.</p>
            <a href="https://nlmsf.org/donate/" className="sound-byte-btn" {...ext}>
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
