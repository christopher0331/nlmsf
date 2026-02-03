import type { Metadata } from "next";
import Image from "next/image";
import "./nlmsf-events.css";

export const metadata: Metadata = {
  title: "NLMSF Events | NLMSF",
  description:
    "Community events, fundraisers, and awareness activities supporting the LMS community.",
};

export default function NlmsfEventsPage() {
  return (
    <div className="nlmsf-events-page">
      {/* Events Hero Section */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-calendar-alt"></i>
          <span>NLMSF Events &amp; Fundraisers</span>
        </div>
        <h1 className="hero-title">Community Events</h1>
        <div className="divider"></div>
        <p className="hero-description">
          Join us in supporting the LMS community through fundraising events, awareness campaigns, and memorial activities
        </p>
        <div className="feature-tags">
          <span className="feature-tag purple">
            <i className="fas fa-donate"></i>
            Fundraising
          </span>
          <span className="feature-tag indigo">
            <i className="fas fa-users"></i>
            Community
          </span>
          <span className="feature-tag rose">
            <i className="fas fa-heart"></i>
            Support
          </span>
        </div>
      </div>

      <div className="events-layout">
        <aside className="events-sidebar">
          {/* Events Sidebar Navigation */}
          <div className="sidebar-container">
            <div className="sidebar-nav">
              <h3 className="sidebar-title">Events Navigation</h3>
              <ul className="nav-links">
                <li>
                  <a href="#get-involved" className="nav-link">
                    <i className="fas fa-heart"></i>
                    <span>Get Involved</span>
                  </a>
                </li>
                <li>
                  <a href="#awareness-recognition" className="nav-link">
                    <i className="fas fa-award"></i>
                    <span>Awareness Recognition</span>
                  </a>
                </li>
                <li>
                  <a href="#community-events" className="nav-link">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Community Events</span>
                  </a>
                </li>
                <li>
                  <a href="#fundraising" className="nav-link">
                    <i className="fas fa-donate"></i>
                    <span>Fundraising Events</span>
                  </a>
                </li>
                <li>
                  <a href="#memorial-events" className="nav-link">
                    <i className="fas fa-mountain"></i>
                    <span>Memorial Events</span>
                  </a>
                </li>
                <li>
                  <a href="#support-groups" className="nav-link">
                    <i className="fas fa-users"></i>
                    <span>Support Groups</span>
                  </a>
                </li>
                <li>
                  <a href="#monthly-membership" className="nav-link">
                    <i className="fas fa-handshake"></i>
                    <span>Monthly Membership</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="sidebar-cta">
              <div className="cta-content">
                <div className="cta-icon">
                  <i className="fas fa-calendar-plus"></i>
                </div>
                <h4 className="cta-title">Host an Event</h4>
                <p className="cta-description">
                  Interested in organizing a fundraising event for NLMSF? We&apos;d love to help you make a difference in the LMS
                  community.
                </p>
                <a href="https://nlmsf.org/contact/" className="cta-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="events-content">
          {/* Research Roundtable Section */}
          <div className="content-section">
            <h2 className="section-title indigo">NLMSF International LMS Research Roundtable</h2>

            <div className="roundtable-intro">
              <div className="roundtable-badge">
                <i className="fas fa-microscope"></i>
                <span>International Collaboration</span>
              </div>
              <p className="roundtable-description">
                A groundbreaking global initiative bringing together the world&apos;s leading sarcoma research community for
                collaborative focus on the future of Leiomyosarcoma investigational research and clinical trials.
              </p>
            </div>

            <div className="content-panel indigo">
              <div className="panel-header">
                <div className="icon-circle indigo">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h3>Expert Collaboration</h3>
                  <p>Focused meetings exclusively on LMS</p>
                </div>
              </div>
              <p className="panel-text">
                Bringing together sarcoma experts for focused meetings exclusively on Leiomyosarcoma research and clinical
                advancement.
              </p>
            </div>

            <div className="content-panel purple">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h3>Current State Analysis</h3>
                  <p>Understanding LMS challenges</p>
                </div>
              </div>
              <p className="panel-text">
                Discussing and understanding LMS research, diagnosis, and treatment challenges to identify critical gaps.
              </p>
            </div>

            <div className="content-panel rose">
              <div className="panel-header">
                <div className="icon-circle rose">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h3>Precision Research</h3>
                  <p>Developing targeted solutions</p>
                </div>
              </div>
              <p className="panel-text">
                Developing work plans to close gaps and improve precision LMS research protocols for better patient outcomes.
              </p>
            </div>

            <div className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <h3>Annual Meeting Since 2019</h3>
                  <p>Partnership with SPAEN</p>
                </div>
              </div>
              <p className="panel-text">
                Launched in partnership with SPAEN (Sarcoma Patients EuroNet), bringing together 65+ researchers from around the
                world annually.
              </p>
            </div>

            {/* Roundtable Image Gallery */}
            <div className="roundtable-gallery">
              <h3 className="gallery-title">Annual Meeting Gallery</h3>
              <div className="roundtable-grid">
                <div className="roundtable-item" data-year="2024" data-city="Toronto">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/2024-int-research-roundtable-toronto-scaled.jpg"
                    alt="International LMS Research Roundtable 2024 - Toronto"
                    width={640}
                    height={360}
                  />
                  <div className="roundtable-info">
                    <span className="year-badge">2024</span>
                    <span className="city-badge">Toronto</span>
                  </div>
                </div>

                <div className="roundtable-item" data-year="2023" data-city="Houston">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/int-research-roundtable-2023-houston.jpg"
                    alt="International LMS Research Roundtable 2023 - Houston"
                    width={640}
                    height={360}
                  />
                  <div className="roundtable-info">
                    <span className="year-badge">2023</span>
                    <span className="city-badge">Houston</span>
                  </div>
                </div>

                <div className="roundtable-item" data-year="2022" data-city="Chicago">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/int-research-roundtable-2022-chicago-scaled.jpeg"
                    alt="International LMS Research Roundtable 2022 - Chicago"
                    width={640}
                    height={360}
                  />
                  <div className="roundtable-info">
                    <span className="year-badge">2022</span>
                    <span className="city-badge">Chicago</span>
                  </div>
                </div>

                <div className="roundtable-item" data-year="2020-2021" data-city="Virtual">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/int-research-roundtable-virtual-2020-2021.jpg"
                    alt="International LMS Research Roundtable 2020-2021 - Virtual"
                    width={640}
                    height={360}
                  />
                  <div className="roundtable-info">
                    <span className="year-badge">2020-2021</span>
                    <span className="city-badge">Virtual</span>
                  </div>
                </div>

                <div className="roundtable-item" data-year="2019" data-city="Miami">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/int-research-roundtable-2019-miami-innagural.png"
                    alt="International LMS Research Roundtable 2019 - Miami Inaugural"
                    width={640}
                    height={360}
                  />
                  <div className="roundtable-info">
                    <span className="year-badge">2019</span>
                    <span className="city-badge">Miami</span>
                    <span className="inaugural-badge">Inaugural</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="content-section" id="get-involved">
            <h2 className="section-title purple">GET INVOLVED IN WHAT WE ARE ALL ABOUT</h2>

            <div className="content-panel purple">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3>Patient Support &amp; Advocacy</h3>
                  <p>Focusing on patient priorities</p>
                </div>
              </div>
              <p className="panel-text">Focusing on patient priorities and advocacy initiatives</p>
            </div>

            <div className="content-panel indigo">
              <div className="panel-header">
                <div className="icon-circle indigo">
                  <i className="fas fa-microscope"></i>
                </div>
                <div>
                  <h3>Research Partnerships</h3>
                  <p>Collaborative LMS funding</p>
                </div>
              </div>
              <p className="panel-text">Collaborative partnerships for LMS funding and research platform expansion</p>
            </div>

            <div className="content-panel rose">
              <div className="panel-header">
                <div className="icon-circle rose">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h3>Research Community</h3>
                  <p>International collaboration</p>
                </div>
              </div>
              <p className="panel-text">Integrating research progress within the International LMS Research Roundtable</p>
            </div>

            <div className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-handshake"></i>
                </div>
                <div>
                  <h3>Building Bridges</h3>
                  <p>Collaborative programs</p>
                </div>
              </div>
              <p className="panel-text">Continuing collaborative programs for the LMS Community</p>
            </div>
          </div>

          {/* Raton, New Mexico Recognition Section */}
          <div className="content-section" id="awareness-recognition">
            <h2 className="section-title amber">Raton, New Mexico Recognizes Leiomyosarcoma Awareness Day</h2>

            <div className="recognition-section">
              <div className="recognition-image">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2025/08/events-page-image-2.png"
                  alt="Raton, New Mexico Leiomyosarcoma Awareness Day Recognition"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="recognition-content">
                <h3>NLMSF Ambassador Recognition</h3>
                <p>
                  Campaigning across New Mexico to build awareness of rare cancers, the{" "}
                  <a href="https://krtnradio.com/wp/2025/07/08/raton-city-commission-adopts-icip-and-hires-auditor/" target="_blank" rel="noopener noreferrer">
                    City/County of Raton
                  </a>
                  , New Mexico proudly recognizes Leiomyosarcoma Awareness Day.
                </p>
                <p>
                  We salute <strong>Bonnie Shaw of Raton, New Mexico</strong> for her dedication, advocacy, and tireless commitment
                  to increasing awareness of this rare and aggressive cancer. Her efforts as an NLMSF Ambassador for the
                  leiomyosarcoma patient and family communities reflect her determination to help save lives through education,
                  outreach, and support.
                </p>
                <p>
                  Together, we honor her work and reaffirm our commitment to raising awareness of rare cancers like leiomyosarcoma —
                  for the sake of earlier detection, improved treatment, and hope for patients and families everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Event Images Gallery */}
          <div className="content-section">
            <h2 className="section-title indigo">Event Images Gallery</h2>

            <div className="image-gallery">
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2023/03/Beau-Arts-Ball-Flyer.png"
                  alt="Beaux Arts Ball Event"
                  width={640}
                  height={360}
                />
              </div>
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-64.jpg"
                  alt="Community Fundraiser Event"
                  width={640}
                  height={360}
                />
              </div>
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-65.jpg"
                  alt="Golf Tournament Event"
                  width={640}
                  height={360}
                />
              </div>
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-62.jpg"
                  alt="Golf Fundraiser Event"
                  width={640}
                  height={360}
                />
              </div>
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-63.jpg"
                  alt="Memorial Hike Event"
                  width={640}
                  height={360}
                />
              </div>
              <div className="gallery-item">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2021/03/Support-group.jpeg"
                  alt="Support Group Meeting"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </div>

          {/* Community Events Section */}
          <div className="content-section" id="community-events">
            <h2 className="section-title purple">Our Community Events</h2>

            <div className="content-panel purple" id="fundraising">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <h3>Drury College Beaux Arts Ball</h3>
                  <p>In Honor of Susie Kapal</p>
                </div>
              </div>
              <p className="panel-text">
                Annual fundraising event supporting LMS research and patient advocacy through community engagement and celebration.
              </p>
            </div>

            <div className="content-panel indigo">
              <div className="panel-header">
                <div className="icon-circle indigo">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3>Jim Grim and Tom Minnock Tribute Fundraiser</h3>
                  <p>Memorial tribute event</p>
                </div>
              </div>
              <p className="panel-text">
                Honoring the memory of community champions who made significant contributions to the LMS community.
              </p>
              <div className="panel-actions">
                <a
                  href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Jim-Grim-and-Tom-Minnock-Tribute-Fundraiser-2.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button secondary"
                >
                  <i className="fas fa-file-pdf"></i>
                  View Event Details
                </a>
              </div>
            </div>

            <div className="content-panel rose">
              <div className="panel-header">
                <div className="icon-circle rose">
                  <i className="fas fa-golf-ball"></i>
                </div>
                <div>
                  <h3>Rodney Williams Golf Outing for Tom</h3>
                  <p>Annual golf tournament</p>
                </div>
              </div>
              <p className="panel-text">
                Annual golf tournament fundraiser bringing the community together for a great cause and LMS awareness.
              </p>
              <div className="panel-actions">
                <a
                  href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Rodney-Williams-Golf-Outing-for-Tom.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button secondary"
                >
                  <i className="fas fa-file-pdf"></i>
                  View Event Details
                </a>
              </div>
            </div>

            <div className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-golf-ball"></i>
                </div>
                <div>
                  <h3>Neal Jacobs Golf Tournament 2021</h3>
                  <p>Community golf fundraiser</p>
                </div>
              </div>
              <p className="panel-text">
                Community golf fundraising event supporting LMS research and patient programs through athletic participation.
              </p>
              <div className="panel-actions">
                <a
                  href="https://nlmsf.org/wp-content/uploads/2021/08/Neal-Jacobs-Golf-Tournament-2021.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button secondary"
                >
                  <i className="fas fa-file-pdf"></i>
                  View Event Details
                </a>
              </div>
            </div>

            <div className="content-panel amber" id="memorial-events">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-mountain"></i>
                </div>
                <div>
                  <h3>Incline Hike in Manitou Springs, CO</h3>
                  <p>In Memory of Shawn Borini</p>
                </div>
              </div>
              <p className="panel-text">
                A memorial activity bringing together the LMS community in remembrance and support through outdoor activity.
              </p>
            </div>

            <div className="content-panel green" id="support-groups">
              <div className="panel-header">
                <div className="icon-circle green">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h3>Community Support Groups</h3>
                  <p>Ongoing patient support</p>
                </div>
              </div>
              <p className="panel-text">
                Regular meetings for patients and families providing ongoing support, resources, and community connection.
              </p>
            </div>
          </div>

          {/* Monthly Membership Section */}
          <div className="content-section" id="monthly-membership">
            <h2 className="section-title rose">OPENING EVERY DOOR – TOGETHER</h2>

            <div className="content-panel rose">
              <div className="panel-header">
                <div className="icon-circle rose">
                  <i className="fas fa-heart"></i>
                </div>

                <div className="membership-image">
                  <div className="roundtable-image">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2023/02/Roundtable-2022-Group-Photo-resized-jpeg-2-300x200.jpeg"
                      alt="International LMS Research Roundtable 2022"
                      width={640}
                      height={360}
                    />
                    <div className="image-caption">International LMS Research Roundtable 2022</div>
                  </div>

                  <div className="floating-element top-right"></div>
                  <div className="floating-element bottom-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
