import type { Metadata } from "next";
import "./navigating-support.css";

export const metadata: Metadata = {
  title: "Navigating Support | NLMSF",
  description:
    "Support resources and services to help patients and families throughout their LMS journey.",
};

export default function NavigatingSupportPage() {
  return (
    <div className="navigating-support-page">
      {/* Hero Component for Navigating Support Page */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-hands-helping"></i>
          <span>Support Resources</span>
        </div>

        <h1 className="hero-title">Navigating Support</h1>

        <div className="divider"></div>

        <p className="hero-description">Resources and support services to help you throughout your LMS journey</p>

        <div className="feature-tags">
          <div className="feature-tag blue">
            <i className="fas fa-phone"></i>
            <span>Lifeline Connection</span>
          </div>
          <div className="feature-tag purple">
            <i className="fas fa-user-friends"></i>
            <span>Buddy Program</span>
          </div>
          <div className="feature-tag teal">
            <i className="fas fa-hands-helping"></i>
            <span>Resource Assistance</span>
          </div>
        </div>
      </div>

      <div className="intro-panel">
        <p>
          The National LeioMyoSarcoma Foundation provides various support services and resources to help patients and families
          navigate their LMS journey. From direct connections with medical professionals to peer support programs, we&apos;re here to
          help you every step of the way.
        </p>
      </div>

      <div className="container support-layout">
        {/* Sidebar Navigation Component for Navigating Support Page */}
        <div className="sidebar">
          <div className="sidebar-container">
            <h3 className="sidebar-title">Page Contents</h3>

            <ul className="sidebar-links">
              <li>
                <a href="#lifeline-connection" className="sidebar-link" data-section="lifeline-connection">
                  <i className="fas fa-phone-alt"></i>
                  <span>LMS Lifeline Connection</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a href="#compass-connection" className="sidebar-sublink" data-section="compass-connection">
                      <i className="fas fa-compass"></i>
                      <span>Compass Connection</span>
                    </a>
                  </li>
                  <li>
                    <a href="#clinician-connection" className="sidebar-sublink" data-section="clinician-connection">
                      <i className="fas fa-user-md"></i>
                      <span>Clinician Connection</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#buddy-program" className="sidebar-link" data-section="buddy-program">
                  <i className="fas fa-user-friends"></i>
                  <span>Buddy Program</span>
                </a>
              </li>
              <li>
                <a href="#resource-assistance" className="sidebar-link" data-section="resource-assistance">
                  <i className="fas fa-hand-holding-heart"></i>
                  <span>Resource Assistance</span>
                </a>

                <ul className="subsection-links">
                  <li>
                    <a href="#life-change" className="sidebar-sublink" data-section="life-change">
                      <i className="fas fa-life-ring"></i>
                      <span>Life Change Program</span>
                    </a>
                  </li>
                  <li>
                    <a href="#emotional-support" className="sidebar-sublink" data-section="emotional-support">
                      <i className="fas fa-heart"></i>
                      <span>Emotional Support</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#organizations" className="sidebar-link" data-section="organizations">
                  <i className="fas fa-building"></i>
                  <span>Support Organizations</span>
                </a>
              </li>
              <li>
                <a href="#sarcoma-recurrence" className="sidebar-link" data-section="sarcoma-recurrence">
                  <i className="fas fa-info-circle"></i>
                  <span>Sarcoma Recurrence</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-cta">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone</strong>
            </p>
            <p>
              <a href="tel:+13037830924">303-783-0924</a>
            </p>
            <p>
              <a href="tel:+13038083437">303-808-3437</a>
            </p>

            <p>
              <strong>Email</strong>
            </p>
            <p>
              <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
            </p>

            <p>
              <strong>Mailing Address</strong>
            </p>
            <p>
              1685 So. Colorado Blvd, Unit S, Suite 447,
              <br />
              Denver, CO 80222
            </p>
          </div>

          <div className="sidebar-cta">
            <h3>Donate to NLMSF Today!</h3>
            <p>Help Shape the Future of Survival</p>
            <a href="https://nlmsf.org/donate/" className="cta-button">
              <i className="fas fa-heart"></i> Donate Now
            </a>
          </div>
        </div>

        {/* Main Content Component for Navigating Support Page */}
        <div className="main-content">
          {/* Lifeline Connection Section */}
          <div id="lifeline-connection" className="content-section">
            <h2 className="section-title purple">LMS Lifeline Connection</h2>

            <div className="space-y">
              {/* Compass Connection Panel */}
              <div id="compass-connection" className="content-panel purple">
                <div className="panel-header">
                  <div className="icon-circle purple">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3>Compass Connection</h3>
                    <p>Direct support line for LMS patients and families</p>
                  </div>
                </div>

                <p className="panel-text">
                  <strong>Call anytime, the LMS Lifeline/Compass Connection:</strong>
                </p>

                <div className="contact-info">
                  <p>
                    <a href="tel:+13038083437" className="contact-link">
                      303-808-3437
                    </a>{" "}
                    or{" "}
                    <a href="tel:+13037830924" className="contact-link">
                      303-783-0924
                    </a>
                  </p>
                </div>
              </div>

              {/* Clinician Connection Panel */}
              <div id="clinician-connection" className="content-panel blue">
                <div className="panel-header">
                  <div className="icon-circle blue">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div>
                    <h3>Connect With A Clinician Program</h3>
                    <p>Professional medical guidance for your questions</p>
                  </div>
                </div>

                <div className="program-details">
                  <p>
                    <i>
                      Send <strong>general</strong> questions to{" "}
                      <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>, to be forwarded anonymously to research clinicians
                      to provide <strong>general</strong> help. This program was developed to encourage medical questions to be
                      directed to medical professionals rather than social media communities in an effort to provide helpful
                      information from medical professionals - sarcoma specialists from sarcoma centers of excellence.
                    </i>
                  </p>

                  <p>
                    <strong>
                      <i>
                        NOTE: This connection never takes the place of your own oncologist / multidisciplinary care team. You must
                        always seek help from your own team first for your specific medical case.
                      </i>
                    </strong>
                  </p>

                  <p>
                    <strong>
                      <i>
                        If you are seeking case-specific second opinions, the Telemedicine option is offered by sarcoma centers of
                        excellence – contact the Foundation for more information/assistance:{" "}
                        <a href="tel:+13037830924">303-783-0924</a>. Happy to help you!
                      </i>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buddy Program Section */}
          <div id="buddy-program" className="content-section">
            <h2 className="section-title blue">LMS Lifeline Buddy Program</h2>

            <div className="content-panel teal">
              <div className="panel-header">
                <div className="icon-circle teal">
                  <i className="fas fa-user-friends"></i>
                </div>
                <div>
                  <h3>Peer Support Network</h3>
                  <p>Connect with others who understand your journey</p>
                </div>
              </div>

              <p className="panel-text">
                The NLMSF Lifeline Buddy Program connects LMS patients with trained peer supporters who have personal experience
                with LMS. These buddies provide emotional support, share experiences, and help navigate the challenges of an LMS
                diagnosis.
              </p>

              <div className="text-center">
                <p>To learn more about the Buddy Program or to be connected with a buddy, contact the Foundation at:</p>
                <p>
                  <a href="tel:+13038083437" className="contact-link">
                    303-808-3437
                  </a>{" "}
                  or{" "}
                  <a href="tel:+13037830924" className="contact-link">
                    303-783-0924
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Resource Assistance Section */}
          <div id="resource-assistance" className="content-section">
            <h2 className="section-title teal">Resource Assistance</h2>

            <div id="life-change" className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <div>
                  <h3>NLMSF Life Change Resource Assistance</h3>
                  <p>Support for life changes due to LMS</p>
                </div>
              </div>

              <p className="panel-text">
                The NLMSF Life Change program provides resources and assistance to help patients and families navigate the life
                changes that come with an LMS diagnosis. This includes emotional support, practical guidance, and connections to
                helpful services.
              </p>
            </div>

            <div id="emotional-support" className="content-panel emerald">
              <div className="panel-header">
                <div className="icon-circle emerald">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3>Emotional Support Resources</h3>
                  <p>Help for handling cancer and your emotions</p>
                </div>
              </div>

              <p className="panel-text">
                Dealing with the emotional aspects of cancer is an important part of the journey. NLMSF provides guidance on
                handling cancer and your emotions throughout the cancer journey.
              </p>

              <div className="text-center">
                <a
                  href="http://bit.ly/3atgIlP"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="resource-link"
                >
                  <i className="fas fa-external-link-alt"></i> Access Emotional Support Resources
                </a>
              </div>
            </div>
          </div>

          {/* Organizations Section */}
          <div id="organizations" className="content-section">
            <h2 className="section-title purple">Support Organizations</h2>

            <h3 className="subsection-title">List of Resources Assistance Organizations</h3>

            <div className="organizations-list">
              <div className="organization-item">
                <h4>
                  <a href="https://www.cancer.org/">American Cancer Society (ACS)</a>
                </h4>
                <p>
                  <a href="tel:+18002272345">800-ACS-2345 (800-227-2345)</a> provides information about specific cancers and has
                  resources for supportive care and services around the country.
                </p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="http://www.acor.org/">Association of Cancer Online Resources</a>
                </h4>
                <p>A group of online cancer communities that provides information in a supportive environment.</p>
              </div>

              <div className="organization-item">
                <h4>Sarcoma Research Resources</h4>
                <p>Podcast from Dr. Vinod Ravi (MD Anderson Cancer Center) on LMS research efforts.</p>
                <p>YouTube presentation by Dr. Bharat Aggarwal on nutrition and Curcumin (Turmeric).</p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.cancer.net/">Cancer.Net</a>
                </h4>
                <p>
                  <a href="tel:+18886513038">888-651-3038</a>, this patient education website from the American Society of Clinical
                  Oncology (ASCO) provides information on more than 50 types of cancer and their treatments, clinical trials, side
                  effects, and coping.
                </p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.cancercare.org/">CancerCare</a>
                </h4>
                <p>
                  <a href="tel:+18008134673">800-813-HOPE (800-813-4673)</a>, this national organization provides a toll-free
                  counseling phone line, telephone support groups, and educational programs. All services are free of charge.
                </p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.cancer.net/blog/2020-07/how-find-caregiver-when-you-have-cancer">
                    Finding a Caregiver When you Have Cancer
                  </a>
                </h4>
                <p>Resource guide for finding caregiving support during cancer treatment.</p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.cancer.gov/">National Cancer Institute (NCI)</a>
                </h4>
                <p>
                  <a href="tel:+18004226237">800-4-CANCER (800-422-6237)</a> provides access to many types of information resources on
                  different cancers, treatments, and supportive care.
                </p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.nih.gov/">National Institutes of Health (NIH)</a>
                </h4>
                <p>The nation&apos;s medical research agency – supporting scientific studies that turn discovery into health.</p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.nccn.org/">National Comprehensive Cancer Network (NCCN)</a>
                </h4>
                <p>
                  Made up of experts from many of the nation&apos;s leading cancer centers. It develops cancer treatment guidelines for
                  doctors to use when treating patients.
                </p>
              </div>

              <div className="organization-item">
                <h4>
                  <a href="https://www.canceradvocacy.org/">National Coalition for Cancer Survivorship (NCCS)</a>
                </h4>
                <p>877-NCCS-YES provides tools that empower people afflicted by cancer to advocate for themselves.</p>
              </div>
            </div>
          </div>

          {/* Sarcoma Recurrence Section */}
          <div id="sarcoma-recurrence" className="content-section">
            <h2 className="section-title blue">Sarcoma Recurrence Information</h2>

            <div className="content-panel blue">
              <div className="panel-header">
                <div className="icon-circle blue">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div>
                  <h3>Six Things to Know about a Sarcoma Recurrence</h3>
                  <p>Information from Memorial Sloan Kettering Cancer Center</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.mskcc.org/news/six-things-know-about-soft-tissue-sarcoma-recurrence"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="resource-link"
                >
                  <i className="fas fa-external-link-alt"></i> Read the Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
