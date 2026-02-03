import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./caregivers-corner.css";

export const metadata: Metadata = {
  title: "Caregivers Corner | NLMSF",
  description:
    "Dedicated to those who provide care and support to cancer patients. Find resources, guidance, and community support for your caregiving journey.",
};

const externalLinkProps = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function CaregiversCornerPage() {
  return (
    <div className="caregivers-corner-page">
      <section className="hero">
        <div className="badge">
          <i className="fas fa-heart" aria-hidden />
          <span>Patient & Family Support</span>
        </div>
        <h1 className="hero-title">Caregivers Corner</h1>
        <div className="feature-tags">
          <div className="feature-tag">
            <i className="fas fa-hands-helping" aria-hidden />
            <span>Caregiver Support</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-book" aria-hidden />
            <span>Resources</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-lightbulb" aria-hidden />
            <span>Tips & Guides</span>
          </div>
        </div>
        <p className="hero-description">
          Dedicated to those who provide care and support to cancer patients.
          Find resources, guidance, and community support to help you in your caregiving journey.
        </p>
      </section>

      <div className="page-wrapper">
        <aside className="sidebar">
          <h3 className="sidebar-title">Caregiver Resources</h3>
          <ul className="sidebar-links">
            <li>
              <a href="#caregiver-resources" className="sidebar-link">
                <i className="fas fa-hands-helping" aria-hidden />
                <span>Caregiver Resources</span>
              </a>
            </li>
            <li>
              <a href="#caregiving-universal" className="sidebar-link">
                <i className="fas fa-globe" aria-hidden />
                <span>Caregiving is Universal</span>
              </a>
            </li>
            <li>
              <a href="#caregiver-support" className="sidebar-link">
                <i className="fas fa-life-ring" aria-hidden />
                <span>Support & Tips</span>
              </a>
            </li>
            <li>
              <a href="#nlmsf-podcasts" className="sidebar-link">
                <i className="fas fa-podcast" aria-hidden />
                <span>NLMSF Podcasts</span>
              </a>
            </li>
            <li>
              <a href="#caring-for-caregiver" className="sidebar-link">
                <i className="fas fa-heart" aria-hidden />
                <span>Caring For The Caregiver</span>
              </a>
            </li>
            <li>
              <a href="#cost-of-caregiving" className="sidebar-link">
                <i className="fas fa-dollar-sign" aria-hidden />
                <span>Cost of Caregiving</span>
              </a>
            </li>
          </ul>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Quick Help</h3>
            <div className="quick-help">
              <div className="help-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="help-details">
                  <strong>American Cancer Society</strong>
                  <a href="tel:+18002272345">800-227-2345</a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-video" aria-hidden />
                <div className="help-details">
                  <a href="https://www.cancer.org/TREATMENT/CAREGIVERS/CAREGIVER-SUPPORT-VIDEOS.HTML" {...externalLinkProps}>
                    Caregiver Support Videos
                  </a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-file-pdf" aria-hidden />
                <div className="help-details">
                  <a href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_creating_back-up_plan.pdf" {...externalLinkProps}>
                    Download Backup Plan Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">NLMSF Podcasts</h3>
            <div className="podcast-links">
              <div className="podcast-item">
                <i className="fab fa-youtube" aria-hidden />
                <div className="podcast-details">
                  <strong>Caring for the Caregiver</strong>
                  <a href="https://www.youtube.com/watch?v=n4OOczeh1LQ&feature=youtu.be&ab_channel=NLMSF" {...externalLinkProps}>Watch Video</a>
                </div>
              </div>
              <div className="podcast-item">
                <i className="fab fa-youtube" aria-hidden />
                <div className="podcast-details">
                  <strong>Morning Pages</strong>
                  <a href="https://www.youtube.com/watch?v=0fv3DoEWFtQ&feature=youtu.be&ab_channel=NLMSF" {...externalLinkProps}>Watch Video</a>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="contact-details">
                  <strong>Phone</strong>
                  <a href="tel:+13037830924">303-783-0924</a>
                  <a href="tel:+13038083437">303-808-3437</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden />
                <div className="contact-details">
                  <strong>Email</strong>
                  <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" aria-hidden />
                <div className="contact-details">
                  <strong>Address</strong>
                  <p>1685 So. Colorado Blvd, Unit S, Suite 447, Denver, CO 80222</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section cta-section">
            <h3 className="sidebar-subtitle">Support Our Mission</h3>
            <div className="donate-cta">
              <a href="https://nlmsf.org/donate/" className="donate-link" {...externalLinkProps}>
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2021/01/donate-circle.jpg"
                  alt="Donate to NLMSF"
                  className="donate-image"
                  width={120}
                  height={120}
                />
                <span className="donate-text">Donate Today</span>
              </a>
              <p>Help Shape the Future of Survival</p>
            </div>
          </div>
        </aside>

        <div className="content-container">
          <section id="caregiver-resources" className="content-section">
            <div className="section-header">
              <h2>Caregiver Resources</h2>
              <p>Essential resources and support for cancer caregivers</p>
            </div>
            <div className="content-panel">
              <div className="resource-grid">
                <div className="resource-card">
                  <figure className="resource-image">
                    <Link href="/caregiver-traits">
                      <Image
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-55.jpg"
                        alt="Special Traits of Caregivers"
                        width={640}
                        height={360}
                      />
                    </Link>
                  </figure>
                  <h3>Special Traits of Caregivers</h3>
                  <p>Discover the unique qualities that make caregivers extraordinary in their support for loved ones.</p>
                  <Link href="/caregiver-traits" className="resource-button">
                    <i className="fas fa-arrow-right" aria-hidden />
                    <span>Learn More</span>
                  </Link>
                </div>

                <div className="resource-card">
                  <figure className="resource-image">
                    <a href="https://nlmsf.org/resource-support/" {...externalLinkProps}>
                      <Image
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-56.jpg"
                        alt="Resource Support"
                        width={640}
                        height={360}
                      />
                    </a>
                  </figure>
                  <h3>Resource Support</h3>
                  <p>Access valuable resources designed to support caregivers through their journey.</p>
                  <a href="https://nlmsf.org/resource-support/" className="resource-button" {...externalLinkProps}>
                    <i className="fas fa-arrow-right" aria-hidden />
                    <span>Learn More</span>
                  </a>
                </div>

                <div className="resource-card">
                  <figure className="resource-image">
                    <a href="https://nlmsf.org/co-survivors-tips/" {...externalLinkProps}>
                      <Image
                        src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-58.jpg"
                        alt="Co-Survivor Tips"
                        width={640}
                        height={360}
                      />
                    </a>
                  </figure>
                  <h3>Co-Survivor Tips</h3>
                  <p>Practical advice and guidance for those supporting cancer patients through their journey.</p>
                  <a href="https://nlmsf.org/co-survivors-tips/" className="resource-button" {...externalLinkProps}>
                    <i className="fas fa-arrow-right" aria-hidden />
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="caregiving-universal" className="content-section">
            <div className="section-header">
              <h2>Caregiving is Universal</h2>
              <p>Recognizing and supporting the vital role of caregivers</p>
            </div>
            <div className="content-panel blue">
              <div className="universal-caregiving">
                <div className="image-container">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/01/CargivingisUniversal.jpg"
                    alt="Caregiving is Universal"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="content-text">
                  <p>The Foundation salutes all Cancer Caregivers for their encouragement, steadfast support for their loved ones, and all the special qualities demonstrated by their commitment and dedication to do, and be, their best every day.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="caregiver-support" className="content-section">
            <div className="section-header">
              <h2>Caregiver Support & Tips</h2>
              <p>Guidance and resources to help caregivers provide the best care possible</p>
            </div>
            <div className="content-panel">
              <div className="support-resources">
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-video" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>American Cancer Society Video Series</h3>
                    <p>If you are about to become a Cancer Caregiver, the American Cancer Society offers valuable information through their video series for caregivers.</p>
                    <p>Caregivers are a crucial part of any cancer care team. The goal of this video series is to provide educational support to caregivers as they assist with the everyday needs of cancer patients and provide self-care techniques to improve their quality of life.</p>
                    <div className="resource-link-wrapper">
                      <a href="https://www.cancer.org/TREATMENT/CAREGIVERS/CAREGIVER-SUPPORT-VIDEOS.HTML" className="resource-link" {...externalLinkProps}>
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
                    <p>Emergencies can happen, and they&apos;re almost always unexpected. That&apos;s why you should always be prepared with a backup plan for you and your loved one.</p>
                    <div className="resource-link-wrapper">
                      <a href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_creating_back-up_plan.pdf" className="resource-link" {...externalLinkProps}>
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
                    <p>Helping your loved one prepare for medical appointments is an important part of caregiving.</p>
                    <div className="resource-link-wrapper">
                      <a href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_preparing_for_loved_ones_appointment.pdf" className="resource-link" {...externalLinkProps}>
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
                    <p>Ensure that your loved one understands their treatment plan going forward. Encourage your loved one to be actively engaged and a self advocate in partnership with their oncology multidisciplinary care team.</p>
                    <div className="resource-link-wrapper">
                      <a href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_how_to_help_loved_one_understand_treatment.pdf" className="resource-link" {...externalLinkProps}>
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
                    <p>These may be some of the hardest days of your loved one&apos;s life, but there are ways to help them find joy and face this battle with a more positive mindset.</p>
                    <div className="resource-link-wrapper">
                      <a href="https://www.thisislivingwithcancer.com/sites/default/files/tlwc_caregiver_tips_understanding_loved_ones_mental_health.pdf" className="resource-link" {...externalLinkProps}>
                        <i className="fas fa-file-pdf" aria-hidden />
                        <span>Understanding Mental Health</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="nlmsf-podcasts" className="content-section">
            <div className="section-header">
              <h2>NLMSF Supportive Podcasts</h2>
              <p>Listen to our podcasts designed to support caregivers</p>
            </div>
            <div className="content-panel green">
              <div className="podcast-resources">
                <div className="podcast-item">
                  <div className="podcast-icon">
                    <i className="fas fa-podcast" aria-hidden />
                  </div>
                  <div className="podcast-content">
                    <h3>Caring for the Caregiver</h3>
                    <p>A podcast focused on supporting those who provide care to cancer patients.</p>
                    <div className="resource-links">
                      <a href="https://www.youtube.com/watch?v=n4OOczeh1LQ&feature=youtu.be&ab_channel=NLMSF" className="resource-link" {...externalLinkProps}>
                        <i className="fab fa-youtube" aria-hidden />
                        <span>Watch on YouTube</span>
                      </a>
                      <a href="https://docs.google.com/presentation/d/1iccd1p-Mr-BYd4pFCltC0QpSd0na65ok0BeDrWp8kBs/edit" className="resource-link" {...externalLinkProps}>
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
                    <p>A self-driven Cognitive Support Therapy Concept to help caregivers manage stress and emotions.</p>
                    <div className="resource-links">
                      <a href="https://www.youtube.com/watch?v=0fv3DoEWFtQ&feature=youtu.be&ab_channel=NLMSF" className="resource-link" {...externalLinkProps}>
                        <i className="fab fa-youtube" aria-hidden />
                        <span>Watch on YouTube</span>
                      </a>
                      <a href="https://docs.google.com/presentation/d/1510-4n7jInf5DdlcMKkuA3kKR-xHPYdFWmdpnpRsH-4/edit" className="resource-link" {...externalLinkProps}>
                        <i className="fas fa-file-powerpoint" aria-hidden />
                        <span>View PowerPoint</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resource-highlight">
                <div className="highlight-image">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2020/10/books-300x200.png"
                    alt="Caregiver Books"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="highlight-content">
                  <h3>The Fearless Caregiver Guides</h3>
                  <p>These guides provide the vital support family caregivers need to learn the skills to achieve the best care for their loved ones…and for themselves.</p>
                  <a href="https://caregiver.us4.list-manage.com/track/click?u=3a9dceeae152c6cd205d8a038&id=7e1bfdd1f4&e=e83f4d04a5" className="resource-button" {...externalLinkProps}>
                    <i className="fas fa-book" aria-hidden />
                    <span>Access Guides</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="caring-for-caregiver" className="content-section">
            <div className="section-header">
              <h2>Caring For The Caregiver</h2>
              <p>Self-care resources for those who provide care to others</p>
            </div>
            <div className="content-panel">
              <div className="caregiver-care">
                <div className="image-container">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2021/01/carinfgFortheCaregiver.jpg"
                    alt="Caring For The Caregiver"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="content-text">
                  <p>Remember that taking care of yourself is just as important as caring for your loved one. Find resources and support to help you maintain your own physical and mental well-being.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="cost-of-caregiving" className="content-section">
            <div className="section-header">
              <h2>The Cost of Caregiving</h2>
              <p>Understanding the financial and personal impact of caregiving</p>
            </div>
            <div className="content-panel purple">
              <div className="caregiving-cost">
                <p>Unpaid caregivers in the U.S. provide services <strong>worth $470 billion</strong> according to the AARP. Around half of cancer caregivers have jobs while caregiving.</p>

                <h3>Family and Medical Leave Act (FMLA)</h3>
                <p>The Family and Medical Leave Act (FMLA) requires that employers with 50 or more workers allow caregivers to take off work for up to 12 weeks annually without pay to care for a parent, spouse or child.</p>

                <h3>Paid Family Leave</h3>
                <p>Four states–<strong>California, New Jersey, Rhode Island and New York</strong>–passed laws enacting paid family leave programs funded through payroll taxes that allow caregivers to receive part of their usual salary while on leave.</p>

                <h3>CARE Act</h3>
                <p><strong>Since 2014, 39 states have passed the Caregiver Advise, Record, and Enable (CARE) Act.</strong> This legislation, developed by AARP, requires hospitals to:</p>
                <ul className="care-act-list">
                  <li>Ask patients if they would like to have hospital staff include the name of a designated caregiver in their records</li>
                  <li>Notify that person when the patient is going to be discharged or moved</li>
                  <li>Provide training to the caregiver on what to do to help the patient at home</li>
                </ul>

                <p>It is not easy for the caregiver to remember all that was learned in a training session. There is much information being given to patients and their families, and it can be overwhelming because of the anxiety, stress, and uncertainty of being prepared to handle things at home once discharge takes place.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
