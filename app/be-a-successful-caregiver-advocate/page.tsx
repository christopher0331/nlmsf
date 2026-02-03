import type { Metadata } from "next";
import "./caregiver-advocate.css";

export const metadata: Metadata = {
  title: "Be a Successful Caregiver Advocate | NLMSF",
  description:
    "Discover essential resources, practical guidance, and supportive tools designed specifically for cancer caregivers. From understanding your vital role to accessing professional support.",
};

export default function BeASuccessfulCaregiverAdvocatePage() {
  return (
    <div className="caregiver-advocate-page">
      <section className="hero-section">
        <div className="hero-decoration">
          <div className="floating-shape shape-1" aria-hidden />
          <div className="floating-shape shape-2" aria-hidden />
          <div className="floating-shape shape-3" aria-hidden />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-heart" aria-hidden />
            <span>Caregiver Support</span>
          </div>
          <h1 className="hero-title">Be a Successful Caregiver Advocate</h1>
          <div className="hero-divider" aria-hidden />
          <h2 className="hero-subtitle">
            Empowering Caregivers with Resources, Support, and Guidance
          </h2>
          <div className="hero-tags">
            <span className="hero-tag">Support Resources</span>
            <span className="hero-tag">Caregiver Tips</span>
            <span className="hero-tag">Mental Health</span>
            <span className="hero-tag">Advocacy Tools</span>
          </div>
          <p className="hero-description">
            Discover essential resources, practical guidance, and supportive tools designed
            specifically for cancer caregivers. From understanding your vital role to accessing
            professional support, find everything you need to be an effective advocate for your
            loved one while caring for yourself.
          </p>
        </div>
      </section>

      <div className="page-layout">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <h3 className="sidebar-title">Page Navigation</h3>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#caregiver-resources" className="sidebar-link">
                  <i className="fas fa-heart" aria-hidden />
                  <span>Caregiver Resources</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#caregiving-universal" className="sidebar-link">
                  <i className="fas fa-globe" aria-hidden />
                  <span>Caregiving is Universal</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#caregiver-support" className="sidebar-link">
                  <i className="fas fa-hands-helping" aria-hidden />
                  <span>Support &amp; Tips</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#nlmsf-podcasts" className="sidebar-link">
                  <i className="fas fa-podcast" aria-hidden />
                  <span>NLMSF Podcasts</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#caring-for-caregiver" className="sidebar-link">
                  <i className="fas fa-spa" aria-hidden />
                  <span>Caring for the Caregiver</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#cost-of-caregiving" className="sidebar-link">
                  <i className="fas fa-dollar-sign" aria-hidden />
                  <span>Cost of Caregiving</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="sidebar-cta">
            <div className="cta-box">
              <h4>24/7 Caregiver Support</h4>
              <p>Our lifeline is always available for caregivers who need someone to talk to.</p>
              <div className="hotline-display">
                <i className="fas fa-phone" aria-hidden />
                <strong>303-808-3437</strong>
              </div>
              <div className="cta-buttons">
                <a
                  href="https://nlmsf.org/caregiver-buddy-program/"
                  className="cta-btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-user-friends" aria-hidden />
                  Buddy Program
                </a>
                <a
                  href="https://nlmsf.org/support/"
                  className="cta-btn secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-heart" aria-hidden />
                  Get Support
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-quick-resources">
            <h4>Quick Resources</h4>
            <ul className="quick-links">
              <li>
                <a
                  href="https://www.cancer.org/treatment/caregivers.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt" aria-hidden />
                  American Cancer Society
                </a>
              </li>
              <li>
                <a href="https://www.caregiver.org/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt" aria-hidden />
                  Family Caregiver Alliance
                </a>
              </li>
              <li>
                <a href="https://www.caregiving.org/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt" aria-hidden />
                  National Alliance for Caregiving
                </a>
              </li>
              <li>
                <a href="https://nlmsf.org/events/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-calendar" aria-hidden />
                  NLMSF Caregiver Events
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="main-content">
          <section id="caregiver-resources" className="content-section">
            <h2 className="section-title">Caregiver Resources</h2>
            <div className="section-content">
              <p className="section-intro">
                Essential resources and support for cancer caregivers
              </p>
              <div className="resource-grid">
                <div className="resource-card">
                  <figure className="resource-image">
                    <a href="https://nlmsf.org/caregiver-traits/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-55.jpg"
                        alt="Special Traits of Caregivers"
                      />
                    </a>
                  </figure>
                  <div className="resource-content">
                    <h3>Special Traits of Caregivers</h3>
                    <p>
                      Discover the unique qualities that make caregivers extraordinary in their
                      support for loved ones.
                    </p>
                    <a
                      href="https://nlmsf.org/caregiver-traits/"
                      className="resource-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-arrow-right" aria-hidden />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <figure className="resource-image">
                    <a href="https://nlmsf.org/resource-support/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-56.jpg"
                        alt="Resource Support"
                      />
                    </a>
                  </figure>
                  <div className="resource-content">
                    <h3>Resource Support</h3>
                    <p>Access valuable resources designed to support caregivers through their journey.</p>
                    <a
                      href="https://nlmsf.org/resource-support/"
                      className="resource-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-arrow-right" aria-hidden />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <figure className="resource-image">
                    <a href="https://nlmsf.org/co-survivors-tips/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-58.jpg"
                        alt="Co-Survivor Tips"
                      />
                    </a>
                  </figure>
                  <div className="resource-content">
                    <h3>Co-Survivor Tips</h3>
                    <p>
                      Practical advice and guidance for those supporting cancer patients through
                      their journey.
                    </p>
                    <a
                      href="https://nlmsf.org/co-survivors-tips/"
                      className="resource-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-arrow-right" aria-hidden />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="caregiving-universal" className="content-section universal-section">
            <h2 className="section-title">Caregiving is Universal</h2>
            <div className="section-content">
              <p className="section-intro">
                Recognizing and supporting the vital role of caregivers
              </p>
              <div className="universal-caregiving">
                <div className="image-container">
                  <img
                    src="https://nlmsf.org/wp-content/uploads/2021/01/CargivingisUniversal.jpg"
                    alt="Caregiving is Universal"
                  />
                </div>
                <div className="content-text">
                  <p>
                    The Foundation salutes all Cancer Caregivers for their encouragement, steadfast
                    support for their loved ones, and all the special qualities demonstrated by their
                    commitment and dedication to do, and be, their best every day.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="caregiver-support" className="content-section support-section">
            <h2 className="section-title">Caregiver Support &amp; Tips</h2>
            <div className="section-content">
              <p className="section-intro">
                Guidance and resources to help caregivers provide the best care possible
              </p>
              <div className="support-resources">
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-video" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>American Cancer Society Video Series</h3>
                    <p>
                      If you are about to become a Cancer Caregiver, the American Cancer Society
                      offers valuable information through their video series for caregivers.
                    </p>
                    <p>
                      Caregivers are a crucial part of any cancer care team. The goal of this video
                      series is to provide educational support to caregivers as they assist with the
                      everyday needs of cancer patients and provide self-care techniques to improve
                      their quality of life.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.cancer.org/treatment/caregivers/caregiver-support-videos.html"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        <span>Watch Video Series</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-clipboard-check" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>Create a Backup Plan</h3>
                    <p>
                      Emergencies can happen, and they&apos;re almost always unexpected. That&apos;s why you
                      should always be prepared with a backup plan for you and your loved one.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_creating_back-up_plan.pdf"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf" aria-hidden />
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-calendar-check" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>Preparing for Appointments</h3>
                    <p>
                      Helping your loved one prepare for medical appointments is an important part
                      of caregiving.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_preparing_for_loved_ones_appointment.pdf"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf" aria-hidden />
                        <span>View Guide</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-notes-medical" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>Understanding Treatment Plans</h3>
                    <p>
                      Ensure that your loved one understands their treatment plan going forward.
                      Encourage your loved one to be actively engaged and a self advocate in
                      partnership with their oncology multidisciplinary care team.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_how_to_help_loved_one_understand_treatment.pdf"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf" aria-hidden />
                        <span>Visit Resource</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-brain" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>Mental Health Support</h3>
                    <p>
                      These may be some of the hardest days of your loved one&apos;s life, but there are
                      ways to help them find joy and face this battle with a more positive mindset.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_understanding_loved_ones_mental_health.pdf"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf" aria-hidden />
                        <span>Understanding Mental Health</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="nlmsf-podcasts" className="content-section podcast-section">
            <h2 className="section-title">NLMSF Supportive Podcasts</h2>
            <div className="section-content">
              <p className="section-intro">Listen to our podcasts designed to support caregivers</p>
              <div className="podcast-resources">
                <div className="podcast-item">
                  <div className="podcast-icon">
                    <i className="fas fa-podcast" aria-hidden />
                  </div>
                  <div className="podcast-content">
                    <h3>Caring for the Caregiver</h3>
                    <p>
                      A podcast focused on supporting those who provide care to cancer patients.
                    </p>
                    <div className="resource-links">
                      <a
                        href="https://www.youtube.com/watch?v=n4OOczeh1LQ&feature=youtu.be&ab_channel=NLMSF"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-youtube" aria-hidden />
                        <span>Watch on YouTube</span>
                      </a>
                      <a
                        href="https://docs.google.com/presentation/d/1iccd1p-Mr-BYd4pFCltC0QpSd0na65ok0BeDrWp8kBs/edit"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-powerpoint" aria-hidden />
                        <span>View PowerPoint</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="podcast-item">
                  <div className="podcast-icon">
                    <i className="fas fa-podcast" aria-hidden />
                  </div>
                  <div className="podcast-content">
                    <h3>Morning Pages</h3>
                    <p>
                      A self-driven Cognitive Support Therapy Concept to help caregivers manage
                      stress and emotions.
                    </p>
                    <div className="resource-links">
                      <a
                        href="https://www.youtube.com/watch?v=0fv3DoEWFtQ&feature=youtu.be&ab_channel=NLMSF"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-youtube" aria-hidden />
                        <span>Watch on YouTube</span>
                      </a>
                      <a
                        href="https://docs.google.com/presentation/d/1510-4n7jInf5DdlcMKkuA3kKR-xHPYdFWmdpnpRsH-4/edit"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-powerpoint" aria-hidden />
                        <span>View PowerPoint</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resource-highlight">
                <div className="highlight-image">
                  <img
                    src="https://nlmsf.org/wp-content/uploads/2020/10/books-300x200.png"
                    alt="Caregiver Books"
                  />
                </div>
                <div className="highlight-content">
                  <h3>The Fearless Caregiver Guides</h3>
                  <p>
                    These guides provide the vital support family caregivers need to learn the
                    skills to achieve the best care for their loved ones…and for themselves.
                  </p>
                  <a
                    href="https://caregiver.us4.list-manage.com/track/click?u=3a9dceeae152c6cd205d8a038&id=7e1bfdd1f4&e=e83f4d04a5"
                    className="resource-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-book" aria-hidden />
                    <span>Access Guides</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="caring-for-caregiver" className="content-section selfcare-section">
            <h2 className="section-title">Caring For The Caregiver</h2>
            <div className="section-content">
              <p className="section-intro">
                Self-care resources for those who provide care to others
              </p>
              <div className="caregiver-care">
                <div className="image-container">
                  <img
                    src="https://nlmsf.org/wp-content/uploads/2021/01/carinfgFortheCaregiver.jpg"
                    alt="Caring For The Caregiver"
                  />
                </div>
                <div className="content-text">
                  <p>
                    Remember that taking care of yourself is just as important as caring for your
                    loved one. Find resources and support to help you maintain your own physical and
                    mental well-being.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="cost-of-caregiving" className="content-section cost-section">
            <h2 className="section-title">The Cost of Caregiving</h2>
            <div className="section-content">
              <p className="section-intro">
                Understanding the financial and personal impact of caregiving
              </p>
              <div className="caregiving-cost">
                <div className="cost-highlight">
                  <p>
                    Unpaid caregivers in the U.S. provide services <strong>worth $470 billion</strong>{" "}
                    according to the AARP. Around half of cancer caregivers have jobs while
                    caregiving.
                  </p>
                </div>
                <div className="cost-sections">
                  <div className="cost-item">
                    <h3>Family and Medical Leave Act (FMLA)</h3>
                    <p>
                      The Family and Medical Leave Act (FMLA) requires that employers with 50 or more
                      workers allow caregivers to take off work for up to 12 weeks annually without
                      pay to care for a parent, spouse or child.
                    </p>
                  </div>
                  <div className="cost-item">
                    <h3>Paid Family Leave</h3>
                    <p>
                      Four states–<strong>California, New Jersey, Rhode Island and New York</strong>
                      –passed laws enacting paid family leave programs funded through payroll taxes
                      that allow caregivers to receive part of their usual salary while on leave.
                    </p>
                  </div>
                  <div className="cost-item featured">
                    <h3>CARE Act</h3>
                    <p>
                      <strong>
                        Since 2014, 39 states have passed the Caregiver Advise, Record, and Enable
                        (CARE) Act.
                      </strong>{" "}
                      This legislation, developed by AARP, requires hospitals to:
                    </p>
                    <ul className="care-act-list">
                      <li>
                        Ask patients if they would like to have hospital staff include the name of a
                        designated caregiver in their records
                      </li>
                      <li>Notify that person when the patient is going to be discharged or moved</li>
                      <li>
                        Provide training to the caregiver on what to do to help the patient at home
                      </li>
                    </ul>
                    <p className="care-note">
                      It is not easy for the caregiver to remember all that was learned in a
                      training session. There is much information being given to patients and their
                      families, and it can be overwhelming because of the anxiety, stress, and
                      uncertainty of being prepared to handle things at home once discharge takes
                      place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
