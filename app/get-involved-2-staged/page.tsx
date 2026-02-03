import type { Metadata } from "next";
import Image from "next/image";
import "./get-involved-2-staged.css";

export const metadata: Metadata = {
  title: "Get Involved | NLMSF",
  description:
    "Get involved with NLMSF: future and past fundraising events, ways to support research, and quick links to donate, volunteer, and advocate.",
};

export default function GetInvolved2StagedPage() {
  return (
    <div className="get-involved-2-staged-page">
      {/* Hero Section */}
      <section className="g2-hero-section">
        <div className="g2-hero-container">
          <div className="g2-hero-content">
            <span className="g2-resource-tag">Make a Difference</span>
            <h1 className="g2-hero-title">Get Involved with NLMSF</h1>
            <p className="g2-hero-subtitle">
              Join our community efforts to support research, raise awareness, and help those affected by Leiomyosarcoma.
            </p>
          </div>
        </div>
      </section>

      <div className="g2-page-wrapper g2-with-sidebar">
        {/* Main Content */}
        <div className="g2-content-section">
          <div className="g2-content-container">
            {/* Future Fundraising Events */}
            <div className="g2-section g2-future-events">
              <h2 className="g2-section-title">Future Fundraising Events</h2>
              <div className="g2-flyer-wrap">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2023/03/Beau-Arts-Ball-Flyer.png"
                  alt="Beau Arts Ball flyer"
                  className="g2-flyer-image"
                  width={1200}
                  height={800}
                />
              </div>
            </div>

            {/* Past Fundraising Events */}
            <div className="g2-section g2-past-events">
              <h2 className="g2-section-title">Past Fundraising Events</h2>
              <ul className="g2-past-events-list">
                <li>
                  <a
                    href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Jim-Grim-and-Tom-Minnock-Tribute-Fundraiser-2.docx.pdf"
                    className="g2-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The English Channel Swim in Memory of Jim Grimm
                  </a>
                </li>
                <li>
                  <a
                    href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Rodney-Williams-Golf-Outing-for-Tom.docx.pdf"
                    className="g2-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Golf Outing in Memory of Ted Cimafranca
                  </a>
                </li>
                <li>
                  <a
                    href="https://nlmsf.org/wp-content/uploads/2021/08/Neal-Jacobs-Golf-Tournament-2021.docx.pdf"
                    className="g2-link g2-link-highlight"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Golf Outing in Memory of Neal Jacobs (Annual)</strong>
                  </a>
                </li>
                <li>Incline Hike in Manitou Springs, CO In Memory of Shawn Borini</li>
              </ul>
            </div>

            {/* Get Involved In What We Are All About */}
            <div className="g2-section g2-get-involved-about">
              <h2 className="g2-section-title">GET INVOLVED IN WHAT WE ARE ALL ABOUT</h2>
              <ul className="g2-bullet-list">
                <li>Focusing on patient support and advocacy = patient priorities</li>
                <li>Focusing on Research collaborative partnerships for LMS funding and LMS research platform expansion</li>
                <li>Integrating the Research Community to communicate research progress within the International LMS Research Roundtable</li>
                <li>Continuing to build bridges of collaborative programs for the LMS Community</li>
              </ul>
            </div>

            {/* Opening Every Door - Together */}
            <div className="g2-section g2-opening-door">
              <h2 className="g2-section-title">OPENING EVERY DOOR – TOGETHER</h2>
              <div className="g2-roundtable-wrap">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2023/02/Roundtable-2022-Group-Photo-resized-jpeg-2-300x200.jpeg"
                  alt="Roundtable 2022 Group Photo"
                  className="g2-roundtable-image"
                  width={1200}
                  height={800}
                />
              </div>
              <p className="g2-body-text">
                Become a monthly member &quot;investor&quot; in LMS research . . . in LMS Survivorship! Investors are Champions of Hope for the future of surviving this form of cancer (sarcoma) – and WE – ALL OF US ARE THE &quot;STAKEHOLDERS.&quot; $1 a day or $5–10 a month or any amount will make all the difference in the world toward accelerating research projects for Leiomyosarcoma!
              </p>
              <p className="g2-body-text">
                The Foundation is doing everything it can to fund the best research – being the best stewards of all donations received. How are we doing that? By having our Foundation Executive Committee vet the incoming research grant proposals each year – a rigorous review process to make sure we are aiming for the best possible steps forward to accelerate the advancement of key research that produce treatment option results.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Links */}
        <aside className="g2-sidebar">
          <div className="g2-sidebar-container">
            <div className="g2-quick-links">
              <h3 className="g2-sidebar-title">Quick Links</h3>
              <ul className="g2-quick-links-list">
                <li>
                  <a
                    href="https://nlmsf.org/donate-leiomyosarcoma-research/"
                    className="g2-sidebar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a
                    href="https://nlmsf.org/support/"
                    className="g2-sidebar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn How You Can Help
                  </a>
                </li>
                <li>
                  <a
                    href="https://nlmsf.org/gift-shop/"
                    className="g2-sidebar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gift Shop
                  </a>
                </li>
                <li>
                  <a
                    href="https://nlmsf.org/your-voice-matters/"
                    className="g2-sidebar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Your Voice, Your Advocacy Counts!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
