import type { Metadata } from "next";
import Link from "next/link";
import "./may-28-sound-byte.css";

export const metadata: Metadata = {
  title: "Sarcoma Sound Bytes - May 28, 2025 | NLMSF",
  description:
    "ASCO engineered cell therapies for solid tumors, survivorship resources, nutrition and psychosocial guidance for LMS patients and caregivers.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

const NUTRITION_LINK = "https://docs.google.com/document/d/1rl4hUYVkp89c3JdVi_7S7_VEWishnV-p/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true";
const PSYCHOSOCIAL_LINK = "https://docs.google.com/document/d/1OhGEQ3Cq68fQ7z2mFu8XMX6zsi_I10b_/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true";

export default function May28SoundBytePage() {
  return (
    <div className="sound-byte-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-bullhorn" aria-hidden />
            <span>Sound Byte</span>
          </div>
          <div className="hero-date">May 28, 2025</div>
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
                <Link href="/may-22-sound-byte" className="sidebar-link">
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
                <a href={NUTRITION_LINK} className="sidebar-link" {...ext}>
                  <i className="fas fa-utensils" aria-hidden />
                  <span>Nutrition &amp; Activity Guide</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href={PSYCHOSOCIAL_LINK} className="sidebar-link" {...ext}>
                  <i className="fas fa-brain" aria-hidden />
                  <span>Psychosocial Resources</span>
                </a>
              </li>
              <li className="sidebar-item">
                <Link href="/survivorship-resources" className="sidebar-link">
                  <i className="fas fa-hand-holding-heart" aria-hidden />
                  <span>Survivorship Resources</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="sound-byte-container">
          <div className="sound-byte-content">
            <div className="sound-byte-header">
              <h2 className="sound-byte-title">SARCOMA SOUND BYTES - May 28, 2025</h2>
              <div className="sound-byte-divider" aria-hidden />
            </div>
            <div className="sound-byte-body">
              <div className="sound-byte-section">
                <h3 className="sound-byte-subtitle sound-byte-subtitle-center">American Society of Clinical Oncology</h3>
                <div className="sound-byte-center">
                  <p><strong>Working Toward Changing the Treatment Landscape for Patients with Solid Cancers</strong></p>
                </div>
                <p>Engineered cell therapies have demonstrated survival benefits for patients with certain hematologic cancers, but can they improve outcomes for patients with solid tumors? An Education Session will aim to answer this and other questions about how cell therapies are changing the treatment landscape for these patients.</p>
                <p>Engineered cell therapies are a form of immunotherapy derived by collecting a patient&apos;s immune cells (or, less frequently, a donor&apos;s cells), genetically engineering them to enhance the immune system&apos;s ability to attack tumor cells, and then infusing the engineered cells back into the patient. There has been progress for Synovial Sarcoma. . .great news!</p>
                <p>The National LMS Foundation will be probing for what next steps in research focus in this area might be for LMS at the upcoming ASCO meeting in Chicago starting May 30th.</p>
              </div>

              <div className="sound-byte-separator" aria-hidden>______________________________________________________________</div>
              <div className="sound-byte-spacer" />

              <div className="sound-byte-section">
                <h3 className="sound-byte-section-title">Resource Information from the National LMS Foundation</h3>
                <p className="sound-byte-center sound-byte-bold">BE YOUR OWN BEST ADVOCATE . . by . . THE MORE YOU KNOW.</p>
                <p>Helpful Resources for Your Journey Through Recovery and Enhanced Survivorship after treatment has been completed.</p>
                <p>Below are valuable links from our website, offering guidance on psychosocial support, nutrition, and physical activity—key elements that can make a meaningful difference for patients and caregivers alike.</p>
                <p>These resources support every stage of the journey, from diagnosis through treatment, end of treatment, and into the vital phase of Survivorship Care Planning. The goal: to rebuild and enhance quality of life as part of a strong, informed path forward.</p>
                <p>NUTRITION AND PHYSICAL ACTIVITY GUIDANCE AND RESOURCE INFORMATION:<br />
                  <a href={NUTRITION_LINK} className="content-link" {...ext}>Nutrition &amp; Activity Guide (Google Doc)</a>
                </p>
                <p>PSYCHOSOCIAL ISSUES - GUIDANCE AND RESOURCE INFORMATION:<br />
                  <a href={PSYCHOSOCIAL_LINK} className="content-link" {...ext}>Psychosocial Resources (Google Doc)</a>
                </p>
              </div>

              <div className="sound-byte-separator" aria-hidden>______________________________________________________________</div>
              <div className="sound-byte-spacer" />

              <div className="sound-byte-section">
                <h3 className="sound-byte-section-title">COPING MAGAZINE SAYS . . . .</h3>
                <p><strong>Focus on One Thing at a Time</strong><br />Just contemplating, let alone actually dealing with, the reality of these potential psychosocial struggles can be completely overwhelming. Before you panic, know that there is no guarantee that you will have to deal with any of these issues. However, you should be prepared to handle those that do arise. As with any major task, prioritize what you need to deal with first; then focus on resolving that issue before moving on to the next.</p>
                <p><strong>Ask for Help</strong><br />Rather than trying to manage your difficult emotions and concerns on your own, ask for help. Some people are hesitant to ask for help because they don&apos;t want to be a burden. What many don&apos;t realize is that their friends and family are struggling with their own feelings of helplessness; they want to help you, but they may not know how. Asking for and accepting help benefits everyone.</p>
                <p><strong>Be Informed</strong><br />Seek out information on your disease, its treatment, and potential side effects, including psychosocial concerns. Talking with your healthcare team is a great place to start. Make a list of questions you want to ask, and write down the answers. When possible, take someone with you to act as a second set of ears and an extra brain to process all the information you&apos;re given. It&apos;s equally important to provide your healthcare team with detailed information about your condition and any side effects you&apos;ve been experiencing to ensure that all your issues are addressed and you get the personalized treatment you need.</p>
              </div>
            </div>
          </div>

          <div className="sound-byte-navigation">
            <Link href="/may-22-sound-byte" className="sound-byte-nav-btn prev">
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
