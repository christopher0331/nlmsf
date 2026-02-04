import type { Metadata } from "next";
import Image from "next/image";
import "./personal-advocacy.css";

export const metadata: Metadata = {
  title: "Personal Advocacy | NLMSF",
  description:
    "Resources from the National LMS Foundation to support your journey through recovery and enhance survivorship after treatment completion.",
};

export default function PersonalAdvocacyPage() {
  return (
    <main className="personal-advocacy-page">
      <div className="hero-section">
        <div className="hero-decoration" aria-hidden>
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
            <i className="fas fa-hand-holding-heart" aria-hidden />
            <span>Personal Empowerment</span>
          </div>

          <h1 className="hero-title gradient-text">Personal Advocacy</h1>

          <div className="hero-divider" />

          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2025/07/CircleOfHopeLogo.png"
            alt="Circle of Hope Logo"
            width={440}
            height={440}
            className="hero-logo"
            sizes="(min-width: 768px) 220px, 180px"
          />

          <div className="hero-subtitle">BE YOUR OWN BEST ADVOCATE</div>

          <p className="hero-description">
            Resources from the National LMS Foundation to support your journey through recovery
            and enhance survivorship after treatment completion.
          </p>

          <div className="hero-tags">
            <span className="hero-tag tag-support">Support</span>
            <span className="hero-tag tag-resources">Resources</span>
            <span className="hero-tag tag-education">Education</span>
          </div>
        </div>
      </div>

      <div className="content-layout">
        <aside className="sidebar">
          <div className="sidebar-nav">
            <h3 className="sidebar-title">Page Navigation</h3>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#introduction" className="sidebar-link">
                  <i className="fas fa-info-circle" aria-hidden />
                  <span>Introduction</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#resources" className="sidebar-link">
                  <i className="fas fa-book-medical" aria-hidden />
                  <span>Support Resources</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#coping-strategies" className="sidebar-link">
                  <i className="fas fa-hands-helping" aria-hidden />
                  <span>Coping Strategies</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#advocacy-cta" className="sidebar-link">
                  <i className="fas fa-heart" aria-hidden />
                  <span>Community Support</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-quick-access">
            <h4>Quick Access</h4>
            <div className="quick-access-links">
              <a
                href="https://nlmsf.org/nutrition-and-physical-activity"
                className="quick-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="quick-link-icon">
                  <i className="fas fa-apple-alt" aria-hidden />
                </div>
                <div className="quick-link-content">
                  <strong>Nutrition Guide</strong>
                  <span>Physical Activity Resources</span>
                </div>
              </a>

              <a
                href="https://nlmsf.org/psychosocial-guidance"
                className="quick-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="quick-link-icon">
                  <i className="fas fa-brain" aria-hidden />
                </div>
                <div className="quick-link-content">
                  <strong>Psychosocial Support</strong>
                  <span>Emotional Wellbeing</span>
                </div>
              </a>
            </div>
          </div>

          <div className="sidebar-cta">
            <div className="cta-box">
              <h4>Circle of Hope</h4>
              <p>Join our supportive community of survivors, caregivers, and advocates.</p>
              <div className="cta-buttons">
                <a
                  href="https://nlmsf.org/circle-of-hope/"
                  className="sidebar-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-users" aria-hidden />
                  Join Today
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar-support">
            <div className="support-box">
              <h4>Need Support?</h4>
              <p>Contact our patient support team for personalized guidance.</p>
              <div className="support-contact">
                <i className="fas fa-phone" aria-hidden />
                <strong>
                  <a href="tel:3038083437">303-808-3437</a>
                </strong>
              </div>
              <div className="support-email">
                <i className="fas fa-envelope" aria-hidden />
                <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
              </div>
            </div>
          </div>
        </aside>

        <div className="main-content">
          <section id="introduction" className="content-section">
            <h2 className="section-title">Resource Information from the National LMS Foundation</h2>
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">THE MORE YOU KNOW</h3>
                <div className="content-card-subtitle">Helpful Resources for Your Journey</div>
              </div>

              <p>
                Helpful Resources for Your Journey Through Recovery and Enhanced Survivorship
                after treatment has been completed.
              </p>

              <p>
                Below are valuable links from our website, offering guidance on psychosocial
                support, nutrition, and physical activity--key elements that can make a
                meaningful difference for patients and caregivers alike.
              </p>

              <div className="note-box">
                <p>
                  These resources support every stage of the journey, from diagnosis through
                  treatment, end of treatment, and into the vital phase of Survivorship Care
                  Planning. The goal: to rebuild and enhance quality of life as part of a
                  strong, informed path forward.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className="content-section">
            <h2 className="section-title">Support Resources</h2>
            <div className="resources-grid">
              <div className="content-card content-card-blue">
                <div className="content-card-header">
                  <h3 className="content-card-title">Nutrition &amp; Physical Activity</h3>
                </div>
                <p>
                  Guidance and resources to support your physical wellbeing during and after
                  treatment.
                </p>
                <div className="note-box blue">
                  <p>
                    Access our comprehensive guide with nutrition plans, exercise
                    recommendations, and expert advice tailored for LMS patients.
                  </p>
                  <p>
                    <a
                      href="https://nlmsf.org/nutrition-and-physical-activity/"
                      className="content-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NUTRITION AND PHYSICAL ACTIVITY GUIDANCE AND RESOURCE INFORMATION
                    </a>
                  </p>
                </div>
              </div>

              <div className="content-card content-card-teal">
                <div className="content-card-header">
                  <h3 className="content-card-title">Psychosocial Support</h3>
                </div>
                <p>
                  Resources to help address the emotional and psychological aspects of your
                  cancer journey.
                </p>
                <div className="note-box teal">
                  <p>
                    Learn about coping strategies, support groups, and professional resources
                    for managing psychosocial challenges.
                  </p>
                  <p>
                    <a
                      href="https://nlmsf.org/psychosocial-guidance"
                      className="content-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PSYCHOSOCIAL ISSUES - GUIDANCE AND RESOURCE INFORMATION
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="coping-strategies" className="content-section">
            <div className="section-gradient-bg">
              <h2>COPING MAGAZINE SAYS . . . .</h2>
            </div>

            <div className="resources-grid">
              <div className="content-card content-card-amber">
                <div className="content-card-header">
                  <h3 className="content-card-title">Focus on One Thing at a Time</h3>
                </div>
                <div className="quote-box">
                  <div className="quote-content">
                    <p>
                      Just contemplating, let alone actually dealing with, the reality of these
                      potential psychosocial struggles can be completely overwhelming. Before
                      you panic, know that there is no guarantee that you will have to deal
                      with any of these issues. However, you should be prepared to handle those
                      that do arise. As with any major task, prioritize what you need to deal
                      with first; then focus on resolving that issue before moving on to the
                      next.
                    </p>
                  </div>
                  <div className="quote-source">Coping Magazine</div>
                </div>
              </div>

              <div className="content-card content-card-pink">
                <div className="content-card-header">
                  <h3 className="content-card-title">Ask for Help</h3>
                </div>
                <div className="quote-box">
                  <div className="quote-content">
                    <p>
                      Rather than trying to manage your difficult emotions and concerns on your
                      own, ask for help. Some people are hesitant to ask for help because they
                      don't want to be a burden. What many don't realize is that their friends
                      and family are struggling with their own feelings of helplessness; they
                      want to help you, but they may not know how. Asking for and accepting help
                      benefits everyone.
                    </p>
                  </div>
                  <div className="quote-source">Coping Magazine</div>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Be Informed</h3>
              </div>
              <div className="quote-box">
                <div className="quote-content">
                  <p>
                    Seek out information on your disease, its treatment, and potential side
                    effects, including psychosocial concerns. Talking with your healthcare
                    team is a great place to start. Make a list of questions you want to ask,
                    and write down the answers. When possible, take someone with you to act as
                    a second set of ears and an extra brain to process all the information
                    you're given. It's equally important to provide your healthcare team with
                    detailed information about your condition and any side effects you've been
                    experiencing to ensure that all your issues are addressed and you get the
                    personalized treatment you need.
                  </p>
                </div>
                <div className="quote-source">Coping Magazine</div>
              </div>
            </div>
          </section>

          <section id="advocacy-cta" className="content-section">
            <div className="cta-box">
              <h3>Join Our Circle of Hope Community</h3>
              <p>
                Connect with fellow survivors and caregivers for support, guidance, and shared
                experiences on your journey.
              </p>
              <a
                href="https://nlmsf.org/circle-of-hope/"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
