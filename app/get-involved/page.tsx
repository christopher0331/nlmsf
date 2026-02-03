import type { Metadata } from "next";
import "./get-involved.css";

export const metadata: Metadata = {
  title: "Get Involved | NLMSF",
  description:
    "Join our community efforts to support research, raise awareness, and help those affected by Leiomyosarcoma. Donate, volunteer, and get involved.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="badge">
          <i className="fas fa-hands-helping" aria-hidden />
          <span>Make a Difference</span>
        </div>
        <h1 className="hero-title">Get Involved with NLMSF</h1>
        <p className="hero-description">
          Join our community efforts to support research, raise awareness, and help those affected by Leiomyosarcoma. Your involvement makes a real difference in the lives of patients and their families.
        </p>
        <div className="feature-tags">
          <div className="feature-tag">
            <i className="fas fa-donate" aria-hidden />
            <span>Donate</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-calendar-alt" aria-hidden />
            <span>Events</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-users" aria-hidden />
            <span>Volunteer</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-bullhorn" aria-hidden />
            <span>Advocacy</span>
          </div>
        </div>
      </section>

      <div className="content-container">
        {/* Sidebar - left */}
        <aside className="sidebar">
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Donate to NLMSF Today!</h3>
            <div className="sidebar-widget-content">
              <a href="https://nlmsf.org/donate/" {...ext}>
                <img className="sidebar-widget-image" src="https://nlmsf.org/wp-content/uploads/2021/01/donate-circle.jpg" alt="Donate" />
              </a>
              <p>Help Shape the Future of Survival:</p>
              <p>
                <a href="https://nlmsf.org/donate-leiomyosarcoma-research/" {...ext}>https://nlmsf.org/donate-leiomyosarcoma-research/</a>
              </p>
              <p>Please enter your loved one&apos;s name in the memo if you would like to donate in his/her name.</p>
              <a href="https://nlmsf.org/donate-leiomyosarcoma-research/" className="sidebar-widget-button" {...ext}>
                <i className="fas fa-heart" aria-hidden />
                <span>Donate Now</span>
              </a>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Contact Us!</h3>
            <div className="sidebar-widget-content">
              <p>
                <strong>Phone</strong>
                <br />
                <a href="tel:+13037830924">303-783-0924</a>
                <br />
                <a href="tel:+13038083437">303-808-3437</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
              </p>
              <p><strong>Mailing Address</strong></p>
              <p>
                1685 So. Colorado Blvd, Unit S, Suite 447,
                <br />
                Denver, CO 80222
              </p>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Follow Us!</h3>
            <div className="sidebar-widget-content">
              <div className="social-icons">
                <a href="https://www.facebook.com/groups/1329603747125818/" className="social-icon facebook" {...ext}>
                  <i className="fab fa-facebook-f" aria-hidden />
                </a>
                <a href="https://twitter.com/nationallmsf" className="social-icon twitter" {...ext}>
                  <i className="fab fa-twitter" aria-hidden />
                </a>
                <a href="https://www.youtube.com/channel/UCeDSK4og69Q78GP-SsKpIQg" className="social-icon youtube" {...ext}>
                  <i className="fab fa-youtube" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar-widget">
            <div className="sidebar-widget-content">
              <img className="sidebar-widget-image" src="https://nlmsf.org/wp-content/uploads/2021/03/Small-Nlmsf.jpg" alt="NLMSF Logo" />
              <p><strong>&quot;The information in two more NLMSF websites created for you, help shape the journey, and build hope.&quot;</strong></p>
              <p>
                <a href="https://leiomyosarcoma.info/" {...ext}>leiomyosarcoma.info</a> &amp;{" "}
                <a href="https://nlmsflifechange.com/" {...ext}>nlmsflifechange.com</a>
              </p>
            </div>
          </div>

          <div className="sidebar-widget">
            <div className="sidebar-widget-content">
              <img className="sidebar-widget-image" src="https://nlmsf.org/wp-content/uploads/2021/02/PeriGilpin.jpg" alt="Peri Gilpin" />
              <p>
                My family has been touched by Leiomyosarcoma, not once, but twice. I know the heartbreak of this rare disease, and I believe that being aware of what to look for and asking the right questions is so important on this journey.
              </p>
              <a href="https://nlmsf.org/peri-gilpin/" className="sidebar-widget-button" {...ext}>
                <span>Learn More About Peri&apos;s Message</span>
              </a>
            </div>
          </div>

          <div className="sidebar-widget">
            <div className="sidebar-widget-content">
              <a href="https://sarcomacoalition.us/" {...ext}>
                <img className="sidebar-widget-image" src="https://nlmsf.org/wp-content/uploads/2021/02/Screen-Shot-2021-02-18-at-15.42.31.png" alt="Sarcoma Coalition" />
              </a>
              <div className="seals-row">
                <img src="https://nlmsf.org/wp-content/uploads/2021/03/Seals.jpg" alt="Seal" />
                <img src="https://nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg" alt="GuideStar Seal" />
                <img src="https://nlmsf.org/wp-content/uploads/2021/03/Top-rated-Seal.jpg" alt="Top Rated Seal" />
              </div>
              <p>
                Bridging collaborations through advocacy, with organizations to amplify resources and support for patients and families.
                <br />
                &quot;Achieving More Together&quot;
              </p>
            </div>
          </div>

          <div className="denver-support">
            <h3>Denver Area Support</h3>
            <p>If you&apos;re in the Denver area, join our local support group and access Denver-specific resources to help you on your journey.</p>
            <a href="#" className="sidebar-widget-button">
              <i className="fas fa-map-marker-alt" aria-hidden />
              <span>Denver Support</span>
            </a>
          </div>
        </aside>

        <div className="main-content">
          {/* Past Fundraising Events */}
          <div className="past-events">
            <h3>Past Fundraising Events</h3>
            <ul className="past-events-list">
              <li>
                <a href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Jim-Grim-and-Tom-Minnock-Tribute-Fundraiser-2.docx.pdf" {...ext}>
                  The English Channel Swim in Memory of Jim Grimm
                </a>
              </li>
              <li>
                <a href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Rodney-Williams-Golf-Outing-for-Tom.docx.pdf" {...ext}>
                  The Golf Outing in Memory of Ted Cimafranca
                </a>
              </li>
              <li>
                <a href="https://nlmsf.org/wp-content/uploads/2021/08/Neal-Jacobs-Golf-Tournament-2021.docx.pdf" className="highlight" {...ext}>
                  <strong>Golf Outing in Memory of Neal Jacobs (Annual)</strong>
                </a>
              </li>
              <li>Incline Hike in Manitou Springs, CO In Memory of Shawn Borini</li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div className="get-involved-section">
            <h3>GET INVOLVED IN WHAT WE ARE ALL ABOUT</h3>
            <ul className="get-involved-list">
              <li>Focusing on patient support and advocacy = patient priorities</li>
              <li>Focusing on Research collaborative partnerships for LMS funding and LMS research platform expansion</li>
              <li>Integrating the Research Community to communicate research progress within the International LMS Research Roundtable</li>
              <li>Continuing to build bridges of collaborative programs for the LMS Community</li>
            </ul>
            <div className="roundtable-wrap" style={{ textAlign: "center", marginTop: "30px" }}>
              <img
                src="https://nlmsf.org/wp-content/uploads/2023/02/Roundtable-2022-Group-Photo-resized-jpeg-2-300x200.jpeg"
                alt="Roundtable 2022 Group Photo"
                style={{ borderRadius: "8px" }}
              />
            </div>
            <h3 style={{ marginTop: "30px" }}>OPENING EVERY DOOR – TOGETHER</h3>
            <p>
              Become a monthly member &quot;investor&quot; in LMS research . . . in LMS Survivorship! Investors are Champions of Hope for the future of surviving this form of cancer (sarcoma) – and WE – ALL OF US ARE THE &quot;STAKEHOLDERS.&quot; $ 1 a day or $ 5 – 10 a month or any amount will make all the different in the world toward accelerating research projects for Leiomyosarcoma!
            </p>
            <p>
              The Foundation is doing everything it can to fund the best research – being the best stewards of all donations received. How are we doing that? By having our Foundation Executive Committee vet the incoming research grant proposals each year – a rigorous review process to make sure we are aiming for the best possible steps forward to accelerate the advancement of key research that will produce treatment option results.
            </p>
          </div>

          {/* Action Cards */}
          <div className="action-cards">
            <div className="action-card purple">
              <div className="action-card-image">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-8.png" alt="Donate" />
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Donate</h3>
                <p className="action-card-description">
                  Your donation helps fund critical research and support services for those affected by Leiomyosarcoma.
                </p>
                <a href="https://nlmsf.org/donate-leiomyosarcoma-research/" className="action-card-button" {...ext}>
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" aria-hidden />
                </a>
              </div>
            </div>
            <div className="action-card blue">
              <div className="action-card-image">
                <img src="https://nlmsf.org/wp-content/uploads/2020/06/austin-kehmeier-lyiKExA4zQA-unsplash-scaled.jpg" alt="Learn How you can help" />
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Learn How You Can Help</h3>
                <p className="action-card-description">
                  Discover the many ways you can contribute to our mission and make a difference.
                </p>
                <a href="https://nlmsf.org/support/" className="action-card-button blue" {...ext}>
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="action-cards" style={{ marginTop: "20px" }}>
            <div className="action-card teal">
              <div className="action-card-image">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-70.jpg" alt="Gift Shop" />
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Gift Shop</h3>
                <p className="action-card-description">
                  Shop for merchandise that supports our cause and helps spread awareness.
                </p>
                <a href="https://nlmsf.org/gift-shop/" className="action-card-button teal" {...ext}>
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" aria-hidden />
                </a>
              </div>
            </div>
            <div className="action-card amber">
              <div className="action-card-image">
                <img src="https://nlmsf.org/wp-content/uploads/2020/08/unnamed-71.jpg" alt="Your Voice Matters" />
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Your Voice, Your Advocacy Counts!</h3>
                <p className="action-card-description">Calling all Patients and Caregivers! Share your thoughts.</p>
                <a href="https://nlmsf.org/your-voice-matters/" className="action-card-button amber" {...ext}>
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="image-gallery">
            <h2>Get Involved with the NLMSF</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-64.jpg" alt="NLMSF Event" />
              </div>
              <div className="gallery-item">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-65.jpg" alt="NLMSF Event" />
              </div>
              <div className="gallery-item">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-62.jpg" alt="NLMSF Event" />
              </div>
              <div className="gallery-item">
                <img src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-63.jpg" alt="NLMSF Event" />
              </div>
              <div className="gallery-item">
                <img src="https://nlmsf.org/wp-content/uploads/2021/03/Support-group.jpeg" alt="Support group" />
              </div>
            </div>
          </div>

          {/* Denver CTA */}
          <div className="denver-cta">
            <div className="content-panel">
              <h3>Denver Area Support &amp; Resources</h3>
              <p>
                If you&apos;re in the Denver area, we offer additional local support groups, events, and resources specifically for our Denver community members.
              </p>
              <a href="#" className="cta-button">
                <i className="fas fa-map-marker-alt" aria-hidden />
                <span>Denver Resources</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
