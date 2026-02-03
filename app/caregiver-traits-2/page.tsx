import type { Metadata } from "next";
import "./caregiver-traits-2.css";

export const metadata: Metadata = {
  title: "Caregiver Traits | NLMSF",
  description:
    "Acknowledging the special traits of caregivers: compassion, patience, dependability, and flexibility in the cancer journey.",
};

export default function CaregiverTraits2Page() {
  return (
    <div className="caregiver-traits-2-page">
      {/* Hero Section */}
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Caregiver Resources</span>
            <h1 className="nlmsf-hero-title">Caregiver Traits</h1>
            <p className="nlmsf-hero-subtitle">
              The important qualities that make caregivers essential to their loved ones during treatment and recovery.
            </p>
          </div>
        </div>
      </section>

      <div className="nlmsf-page-wrapper nlmsf-with-sidebar">
        {/* Main Content */}
        <div className="nlmsf-content-section">
          <div className="nlmsf-content-container">
            <div className="nlmsf-introduction">
              <h2 className="nlmsf-section-title">Acknowledging the Special Traits of Caregivers</h2>
              <p className="nlmsf-intro-text">
                Caregivers play a crucial role in the cancer journey. The following traits highlight the
                important qualities that make caregivers so essential to their loved ones during treatment and recovery.
              </p>
            </div>

            <div className="nlmsf-traits-section">
              <div id="compassion" className="nlmsf-trait-card nlmsf-trait-compassion">
                <h4 className="nlmsf-trait-title">Compassion</h4>
                <p className="nlmsf-trait-description">
                  Trying to understand what the loved one is experiencing and responding to that. Natural empathy and compassion – gentleness draws us together.
                </p>
              </div>

              <div id="patience" className="nlmsf-trait-card nlmsf-trait-patience">
                <h4 className="nlmsf-trait-title">Patience</h4>
                <p className="nlmsf-trait-description">
                  &quot;Patience is a virtue&quot; – still remains true! Patience while caregiving enhances calmness to be able to help with treatment side effects and pain management.
                </p>
              </div>

              <div id="dependability" className="nlmsf-trait-card nlmsf-trait-dependability">
                <h4 className="nlmsf-trait-title">Dependability/Reliability</h4>
                <p className="nlmsf-trait-description">
                  Our loved ones are depending on us to travel in the treatment journey with them as much as possible. Being dependable is a balancing act with trying to remain independent. Making a plan on how we will be there with our loved one is key to day-to-day, week-to-week routine so that we remain reliable and dependable to follow through caregiving commitment.
                </p>
              </div>

              <div id="flexibility" className="nlmsf-trait-card nlmsf-trait-flexibility">
                <h4 className="nlmsf-trait-title">Flexibility</h4>
                <p className="nlmsf-trait-description">
                  Great routines established may from time to time require change. Here again, reliability and flexibility are a balance. Moods, care needs, abilities, and behaviors all play a part in the &quot;routine.&quot; Empathy and patience come into play once again.
                  {" "}
                  <a
                    href="https://www.cancer.net/blog/2020-06/if-you-have-self-doubt-when-caring-loved-one-with-cancer?cmpid=ks_net_blog_dcnews_-_all_06-05-20_blog"
                    className="nlmsf-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read this article from ASCO about caregiver support in stressful times
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="nlmsf-sidebar">
          <div className="nlmsf-sidebar-container">
            <div className="nlmsf-sidebar-navigation">
              <h3 className="nlmsf-sidebar-title">Caregiver Traits</h3>
              <ul className="nlmsf-sidebar-nav-list">
                <li><a href="#compassion" className="nlmsf-sidebar-link nlmsf-sidebar-link-compassion">Compassion</a></li>
                <li><a href="#patience" className="nlmsf-sidebar-link nlmsf-sidebar-link-patience">Patience</a></li>
                <li><a href="#dependability" className="nlmsf-sidebar-link nlmsf-sidebar-link-dependability">Dependability</a></li>
                <li><a href="#flexibility" className="nlmsf-sidebar-link nlmsf-sidebar-link-flexibility">Flexibility</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
