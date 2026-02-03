import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./open-research-2.css";

export const metadata: Metadata = {
  title: "Opening Every Door – Together | NLMSF",
  description:
    "Become a monthly member investor in LMS research and survivorship.",
};

export default function OpenResearchPage() {
  return (
    <div className="open-research-page">
      {/* Hero Section */}
      <section className="open-research-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Opening Every Door – Together</h1>
            <p className="hero-subtitle">
              Become a Monthly Member &quot;Investor&quot; in LMS Research &amp; Survivorship
            </p>
            <p className="hero-description">
              Investors are Champions of Hope for the future of surviving this
              form of cancer (sarcoma) – and ALL OF US ARE THE &quot;STAKEHOLDERS.&quot;
            </p>
            <div className="hero-cta">
              <a
                href="https://nlmsf.org/support/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-heart icon-inline" aria-hidden />
                Start Supporting Research
              </a>
              <a
                href="https://nlmsf.org/donate/"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-donate icon-inline" aria-hidden />
                Make a Donation
              </a>
            </div>
          </div>
          <div className="hero-decoration hero-decoration-1"></div>
          <div className="hero-decoration hero-decoration-2"></div>
          <div className="hero-decoration hero-decoration-3"></div>
        </div>
      </section>

      <div className="open-research-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <h3 className="nav-title">Quick Actions</h3>
            <ul className="nav-links">
              <li>
                <a href="#investment-options">
                  <i className="fas fa-donate icon-inline icon-blue" aria-hidden />
                  Investment Options
                </a>
              </li>
              <li>
                <a href="#foundation-commitment">
                  <i className="fas fa-shield-alt icon-inline icon-purple" aria-hidden />
                  Our Commitment
                </a>
              </li>
              <li>
                <a href="#research-impact">
                  <i className="fas fa-chart-line icon-inline icon-emerald" aria-hidden />
                  Research Impact
                </a>
              </li>
              <li>
                <a href="#get-involved">
                  <i className="fas fa-users icon-inline icon-amber" aria-hidden />
                  Get Involved
                </a>
              </li>
            </ul>
          </nav>

          <div className="monthly-giving-box">
            <h3>Monthly Giving</h3>
            <p>
              Join our community of monthly investors making a sustained impact
              on LMS research.
            </p>
            <div className="giving-amounts">
              <div className="amount-option">$30/month</div>
              <div className="amount-option">$50/month</div>
              <div className="amount-option">$100/month</div>
              <div className="amount-option">Custom Amount</div>
            </div>
            <a
              href="https://nlmsf.org/support/"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Monthly Giving
            </a>
          </div>

          <div className="research-updates">
            <h3>Research Updates</h3>
            <div className="update-item">
              <i className="fas fa-flask icon-inline icon-blue" aria-hidden />
              <div>
                <strong>Latest Research News</strong>
                <p>
                  Stay informed about breakthrough discoveries and ongoing
                  clinical trials.
                </p>
              </div>
            </div>
            <div className="update-item">
              <i className="fas fa-calendar icon-inline icon-emerald" aria-hidden />
              <div>
                <strong>Grant Application Cycles</strong>
                <p>
                  Learn about our rigorous review process for research funding.
                </p>
              </div>
            </div>
          </div>

          <div className="sidebar-contact">
            <h3>Questions About Giving?</h3>
            <p>
              Our team is here to help you understand how your investment makes
              a difference.
            </p>
            <Link href="/contact" className="contact-button">
              <i className="fas fa-envelope icon-inline" aria-hidden />
              Contact Us
            </Link>
          </div>
        </aside>

        {/* Content Section */}
        <section className="open-research-content">
          <div className="main-content">
            <div id="investment-options" className="investment-hero-card">
              <div className="investment-content-wrapper">
                <div className="investment-text-section">
                  <div className="investment-header">
                    <div className="investment-icon">
                      <i className="fas fa-chart-line" aria-hidden />
                    </div>
                    <h2>Invest in LMS Research Today</h2>
                    <p className="investment-subtitle">
                      Every dollar makes a difference in accelerating
                      breakthrough research
                    </p>
                  </div>

                  <div className="investment-highlight">
                    <div className="amount-callout">
                      <span className="currency">$</span>
                      <span className="amount">1</span>
                      <span className="period">per day</span>
                    </div>
                    <div className="amount-separator">or</div>
                    <div className="amount-callout">
                      <span className="currency">$</span>
                      <span className="amount">5-10</span>
                      <span className="period">per month</span>
                    </div>
                  </div>

                  <p className="investment-description">
                    Your investment will make all the difference in the world
                    toward accelerating research projects for Leiomyosarcoma!
                  </p>

                  <div className="fire-callout">
                    <i className="fas fa-fire icon-inline icon-amber" aria-hidden />
                    <strong>Let&apos;s ignite the fire for more LMS Research!</strong>
                  </div>
                </div>

                <div className="investment-image-section">
                  <div className="investment-image-wrapper">
                    <Image
                      src="https://nlsmf.org/wp-content/uploads/2022/03/image1.jpg"
                      alt="Research Investment Impact"
                      className="investment-feature-image"
                      width={1200}
                      height={800}
                    />
                    <div className="image-badge">
                      <i className="fas fa-flask" aria-hidden />
                      <span>Funding Breakthroughs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="foundation-commitment" className="commitment-section">
              <div className="section-header commitment-header">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt" aria-hidden />
                </div>
                <h2 className="section-title">Our Foundation Commitment</h2>
              </div>

              <div className="commitment-content">
                <div className="commitment-description">
                  <p>
                    The Foundation is doing everything it can to fund the best
                    research – being the best stewards of all donations
                    received. How are we doing that? By having our Foundation
                    Executive Committee vet the incoming research grant
                    proposals each year – a rigorous review process to make sure
                    we are aiming for the best possible steps forward to
                    accelerate the advancement of key research that will
                    produce treatment option results.
                  </p>
                </div>

                <div className="research-showcase">
                  <h3>Research Areas We Support</h3>
                  <div className="research-grid">
                    <div className="research-card">
                      <div className="research-image-container">
                        <Image
                          src="https://nlsmf.org/wp-content/uploads/2022/03/image3.jpg"
                          alt="Research Laboratory"
                          className="research-image"
                          width={640}
                          height={360}
                        />
                        <div className="research-overlay"></div>
                        <div className="research-content">
                          <h4>Advanced Laboratory Research</h4>
                          <p>
                            Cutting-edge research facilities working on LMS
                            breakthroughs and innovative treatment approaches.
                          </p>
                          <div className="research-tag">Laboratory Studies</div>
                        </div>
                      </div>
                    </div>

                    <div className="research-card">
                      <div className="research-image-container">
                        <Image
                          src="https://nlsmf.org/wp-content/uploads/2022/03/image2.jpg"
                          alt="Research Team"
                          className="research-image"
                          width={640}
                          height={360}
                        />
                        <div className="research-overlay"></div>
                        <div className="research-content">
                          <h4>Collaborative Research Teams</h4>
                          <p>
                            Leading scientists and medical professionals
                            dedicated to finding new treatments and improving
                            patient outcomes.
                          </p>
                          <div className="research-tag">Team Collaboration</div>
                        </div>
                      </div>
                    </div>

                    <div className="research-card">
                      <div className="research-image-container">
                        <Image
                          src="https://nlsmf.org/wp-content/uploads/2022/03/image4-768x544.jpg"
                          alt="Clinical Research"
                          className="research-image"
                          width={640}
                          height={360}
                        />
                        <div className="research-overlay"></div>
                        <div className="research-content">
                          <h4>Clinical Trial Development</h4>
                          <p>
                            Translating research discoveries into life-saving
                            treatments through rigorous clinical testing and
                            trials.
                          </p>
                          <div className="research-tag">Clinical Trials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="appeal-section">
              <div className="appeal-inner">
                <h2 className="appeal-title">Why Research Funding Matters</h2>
                <div className="appeal-body">
                  <p>
                    Leiomyosarcoma is not just a rare cancer. It&apos;s a
                    devastating diagnosis that often comes with no warning —
                    and no cure. Patients are told they have a disease most
                    people have never heard of… and then they&apos;re told they
                    may only have five years to live, if that.
                  </p>
                  <p>
                    Imagine being told that — imagine it&apos;s your spouse, your
                    child, 9 there are 20 - 30 cases a year for kids) your
                    parent, your friend. And then imagine realizing that
                    there&apos;s almost no funding for research… that treatment
                    options haven&apos;t changed in decades… that hope is hard to
                    find, not because it&apos;s impossible, but because it&apos;s been
                    neglected.
                  </p>
                  <p>We can change that. But we need help.</p>
                  <p>
                    Every donation — no matter how small — is a step toward
                    hope. Toward longer lives. Toward better treatments. Toward
                    one more birthday, one more hug, one more chance.
                  </p>
                  <p>
                    <strong>Please, if you&apos;re listening — give.</strong> Give
                    because you can. Give because someone with Leiomyosarcoma
                    can&apos;t wait five more years for a cure that doesn&apos;t
                    come. Give so that one day, no one has to hear the words,
                    &apos;There&apos;s nothing more we can do.
                  </p>
                </div>
              </div>
            </div>

            <div id="get-involved" className="stakeholders-section">
              <div className="stakeholders-content">
                <div className="stakeholders-icon">
                  <i className="fas fa-users" aria-hidden />
                </div>
                <h2 className="stakeholders-title">All Hands on Deck Stakeholders!</h2>
                <p className="stakeholders-description">
                  We need to lead the charge together! And &quot;Together We Can!&quot;
                </p>

                <div className="action-buttons">
                  <a
                    href="https://nlmsf.org/support/"
                    className="btn btn-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-hands-helping icon-inline" aria-hidden />
                    Support Research
                  </a>
                  <a
                    href="https://nlmsf.org/donate/"
                    className="btn btn-light-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-heart icon-inline" aria-hidden />
                    Make a Donation
                  </a>
                </div>
              </div>
            </div>

            <div id="research-impact" className="impact-section">
              <h2 className="impact-title">Your Investment Makes a Real Impact</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-icon">
                    <i className="fas fa-microscope" aria-hidden />
                  </div>
                  <h3>Research Projects Funded</h3>
                  <p>
                    Every dollar goes directly toward groundbreaking LMS
                    research that brings us closer to better treatments and
                    outcomes.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-icon">
                    <i className="fas fa-users" aria-hidden />
                  </div>
                  <h3>Community of Champions</h3>
                  <p>
                    Join thousands of stakeholders who are actively investing in
                    the future of LMS research and patient care.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-icon">
                    <i className="fas fa-star" aria-hidden />
                  </div>
                  <h3>Hope for Tomorrow</h3>
                  <p>
                    Together, we&apos;re building a future where LMS patients have
                    more treatment options and better survival rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
