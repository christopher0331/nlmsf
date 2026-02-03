import type { Metadata } from "next";
import Link from "next/link";
import "./mission.css";

export const metadata: Metadata = {
  title: "Our Mission | NLMSF",
  description:
    "Advancing research, accelerating treatment options, and providing supportive resources for the LMS community. The mission and goals of the National Leiomyosarcoma Foundation.",
};

export default function MissionPage() {
  return (
    <div className="mission-page">
      <div className="mission-hero">
        <div className="container">
          <h1 className="hero-title">Our Enduring Mission is Our Passion</h1>
          <p className="hero-subtitle">
            Advancing research, accelerating treatment options, and providing supportive resources for the LMS community
          </p>
        </div>
      </div>

      <div className="mission-layout">
        <aside className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">On This Page</h3>
            <nav className="sidebar-nav">
              <div className="nav-item">
                <a href="#mission-overview" className="nav-link">
                  <span className="nav-icon purple" aria-hidden />
                  <span>Our Mission</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#testimonial" className="nav-link">
                  <span className="nav-icon blue" aria-hidden />
                  <span>Expert Testimonial</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#founders" className="nav-link">
                  <span className="nav-icon teal" aria-hidden />
                  <span>Foundation Founders</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#history" className="nav-link">
                  <span className="nav-icon orange" aria-hidden />
                  <span>Foundation History</span>
                </a>
                <div className="subnav">
                  <a href="#milestones" className="subnav-link">Key Milestones</a>
                  <a href="#founding-members" className="subnav-link">Founding Members</a>
                  <a href="#achievements" className="subnav-link">Major Achievements</a>
                </div>
              </div>
              <div className="nav-item">
                <a href="#community" className="nav-link">
                  <span className="nav-icon red" aria-hidden />
                  <span>Community Support</span>
                </a>
              </div>
              <div className="nav-item">
                <a href="#get-involved" className="nav-link">
                  <span className="nav-icon green" aria-hidden />
                  <span>Get Involved</span>
                </a>
              </div>
            </nav>
            <h3 className="sidebar-title additional-resources">Related Resources</h3>
            <div className="sidebar-resources">
              <Link href="/research-projects/" className="resource-link">
                <span className="resource-icon" aria-hidden />
                <span>LMS Research Projects</span>
              </Link>
              <Link href="/about-us/" className="resource-link">
                <span className="resource-icon" aria-hidden />
                <span>About NLMSF</span>
              </Link>
              <Link href="/get-involved/" className="resource-link">
                <span className="resource-icon" aria-hidden />
                <span>Become an Ambassador</span>
              </Link>
              <Link href="/contact/" className="resource-link">
                <span className="resource-icon" aria-hidden />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </aside>

        <div className="mission-content">
          <section id="mission-overview" className="content-section">
            <div className="mission-card">
              <h2 className="mission-heading">THE MISSION AND GOALS OF THE NATIONAL LEIOMYOSARCOMA FOUNDATION</h2>
              <ul className="mission-goals">
                <li>To fund LMS-specific research that advances the field of study and accelerates development of clinical trials and treatments.</li>
                <li>To support the LMS patient, family, and caregiver community through education, information sharing, resource assistance, and 24/7 direct phone support.</li>
                <li>To raise global, national, and community awareness of this disease, prioritizing actionable goals and delivering measurable progress.</li>
                <li>To address unmet needs in treatment, research, clinical trials, and care through the Foundation&apos;s International LMS Research Roundtable—collaborating with researchers, clinicians, partner organizations, and especially the LMS community—to achieve meaningful progress.</li>
              </ul>
            </div>
          </section>

          <section id="testimonial" className="content-section">
            <div className="testimonial-card">
              <div className="card-header">
                <div className="icon-circle icon-blue"><i className="fas fa-quote-right" aria-hidden /></div>
                <h3>Expert Testimonial</h3>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">&quot;The National Leiomyosarcoma Foundation is an important organization that strives to gather a critical mass of patients, scientists, patient advocates and physicians to learn more about this rare disease. Within the NLMSF, the LMS Research Roundtable organizes cutting edge research in this area and strives to innovate the ways that this disease is treated.&quot;</p>
                <div className="testimonial-author">
                  <h4>Arun Singh, M.D.</h4>
                  <p>Associate Professor Sarcoma Service</p>
                  <p>Division of Hematology</p>
                  <p>UCLA, Santa Monica, CA</p>
                </div>
              </div>
              <a href="https://nlmsf.org/testimonials/" className="testButton" target="_blank" rel="noopener noreferrer">
                View More Testimonials
              </a>
            </div>
          </section>

          <section id="founders" className="content-section">
            <div className="founders-card">
              <div className="card-header">
                <div className="icon-circle icon-teal"><i className="fas fa-users" aria-hidden /></div>
                <h3>The Founders of the Foundation</h3>
              </div>
              <div className="founders-list">
                <div className="founder-item">
                  <h4>First Founding Members</h4>
                  <ul>
                    <li>Edmund and Nancy Hoag</li>
                    <li>Harry and Diana Froling</li>
                    <li>Donna and Joe Fischer</li>
                    <li>Ken and Karen Gibson</li>
                  </ul>
                  <p>These families were dedicated and committed to the mission of building support for the LMS patient/family Community.</p>
                </div>
                <div className="quote-box">
                  <p>&quot;The National LMS Foundation was the first to galvanize patients and researchers for advocacy, support, and education for the LMS Community in 2001 and the first to bring together researchers from around the world to privately fund LMS Research in the search for a cure&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section id="history" className="content-section">
            <div className="history-card">
              <div className="card-header">
                <div className="icon-circle icon-orange"><i className="fas fa-history" aria-hidden /></div>
                <h3>History of the Foundation</h3>
              </div>

              <div id="milestones" className="timeline-container">
                <h4 className="section-subtitle">Key Milestones</h4>
                <div className="timeline">
                  <div className="timeline-item timeline-item-amber">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>1997 - 2001</h5>
                      <p>Patients and family came together for the first time, called annual Hugfest, from 1997 to 2001, which later became the NLMSF.</p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-purple">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2001</h5>
                      <p>Foundation founded by a Caregiver in honor of his wife to support and advocate for patients and fund research. Originally, a gathering place for peer-to-peer support.</p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-blue">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2002 – present</h5>
                      <p>The NLMSF Research Project Support Funding history: <a href="https://leiomyosarcoma.info/research-projects/" target="_blank" rel="noopener noreferrer">View Research Projects</a></p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-teal">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2012</h5>
                      <p>Patient education programs began at sarcoma centers of excellence and the evolution of the Foundation has been remarkable.</p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-pink">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2015</h5>
                      <p>The NLMSF collaborate with several cancer/sarcoma working groups throughout the US and Canada to strengthen and amplify patient – family/caregiver resource support.</p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-orange">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2016</h5>
                      <p>The NLMSF reached out for support from Congress for National Leiomyosarcoma Awareness Day – July 15.</p>
                      <p>Congress passed the Resolution: <a href="https://www.govtrack.us/congress/bills/114/sres545/text/ats" target="_blank" rel="noopener noreferrer">View Resolution</a></p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-red">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2019</h5>
                      <p>The NLMSF launched the International Leiomyosarcoma Roundtable, now with 120 research members in global support. <a href="https://leiomyosarcoma.info/" target="_blank" rel="noopener noreferrer">Learn More</a></p>
                    </div>
                  </div>
                  <div className="timeline-item timeline-item-green">
                    <div className="timeline-dot" aria-hidden />
                    <div className="timeline-content">
                      <h5>2020</h5>
                      <p>Sarcoma PatientsEuro.Net partner with the NLMS in support of the International LMS Research Roundtable.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="founding-members" className="founding-story">
                <h4 className="section-subtitle">The Founding Story</h4>
                <div className="story-box">
                  <p>Harry and Diana were inspirations to the LMS ACOR online support group, and appreciated their guidance and help. From all this, the Foundation was born and incorporated in 2001.</p>
                  <p>Nancy Hoag made the signature purple and green ribbons, and her family helped with mailing information to patients, as well as helping her make the ribbons.</p>
                  <p>Karen Gibson coordinated the first Hugfest events, bringing patients and their families together to support one another in Pennsylvania. At the first Hugfest, Edmund Hoag spoke of creating a foundation to raise awareness and funding for Leiomyosarcoma research.</p>
                  <p>The Hugfest attendees were all enthused to support this initiative. The Foundation was formed by the support and commitment by the LMS Community. Edmund and Nancy proceeded to secure the needed funding and the first check for LMS research was given to the Research Community.</p>
                  <p>Karen Gibson (treasurer and secretary of the foundation) and Lynda Hendrix, an LMS patient, created the LMS Quilt to honor patients, and for a hopeful display at the Washington DC mall. Two quilts were created from mailed quilt squares received from across the country.</p>
                </div>
              </div>

              <div id="achievements">
                <h4 className="section-subtitle">Notable Achievements</h4>
                <div className="key-achievements">
                  <div className="achievement-box">
                    <div className="achievement-content">
                      <div className="achievement-icon"><i className="fas fa-award" aria-hidden /></div>
                      <div>
                        <h5>National LMS Awareness Day</h5>
                        <p>In 2016 the NLMSF was successful with Congressional approval for a National LMS Awareness Day - July 15, marking a significant milestone in raising public awareness about Leiomyosarcoma.</p>
                      </div>
                    </div>
                  </div>
                  <div className="achievement-box">
                    <div className="achievement-content">
                      <div className="achievement-icon"><i className="fas fa-users" aria-hidden /></div>
                      <div>
                        <h5>NLMSF Support Community</h5>
                        <p>Our Facebook support group grew to over 5,000 members, creating a vital platform for patients and caregivers to connect, share experiences, and find emotional support throughout their LMS journey.</p>
                      </div>
                    </div>
                  </div>
                  <div className="achievement-box">
                    <div className="achievement-content">
                      <div className="achievement-icon"><i className="fas fa-microscope" aria-hidden /></div>
                      <div>
                        <h5>Research Advancement</h5>
                        <p>The NLMSF has funded critical research initiatives and fostered collaboration among leading scientists worldwide, accelerating the development of new treatments and improving patient outcomes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="community" className="content-section">
            <div className="community-card">
              <div className="card-header">
                <div className="icon-circle icon-red"><i className="fas fa-heart" aria-hidden /></div>
                <h3>Community Support</h3>
              </div>
              <div className="community-content">
                <p>Thank you for joining the NLMSF FB Support Group to build a strong LMS Community of Caring and Sharing!</p>
                <div className="community-stats">
                  <div className="stat-box">
                    <div className="stat-icon"><i className="fas fa-users" aria-hidden /></div>
                    <div className="stat-info">
                      <h5>3,000+</h5>
                      <p>Facebook Community Members</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-icon"><i className="fas fa-globe" aria-hidden /></div>
                    <div className="stat-info">
                      <h5>140+</h5>
                      <p>Research Roundtable Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="get-involved" className="content-section">
            <div className="get-involved-card">
              <div className="card-header">
                <div className="icon-circle icon-green"><i className="fas fa-hands-helping" aria-hidden /></div>
                <h3>Get Involved</h3>
              </div>
              <div className="get-involved-content">
                <p>Join the NLMSF as an Ambassador for Community Awareness of Leiomyosarcoma. Spreading the word is important for community support for the much needed LMS-specific research.</p>
                <p className="highlight-text">Sarcoma remains the least funded of all cancers for research.</p>
                <Link href="/get-involved/" className="cta-button">Become an Ambassador</Link>
                <p className="signature">Grateful to you all - Annie Achee | Honoring the LMS Community | (President NLSMF since 2015)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
