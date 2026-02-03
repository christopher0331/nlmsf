import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./resource-support.css";

export const metadata: Metadata = {
  title: "Resource Support | NLMSF",
  description: "Comprehensive resources and support for cancer patients and caregivers.",
};

export default function ResourceSupportPage() {
  return (
    <main className="resource-support-page">
      <section className="hero">
        <div className="badge">
          <i className="fas fa-hands-helping" aria-hidden />
          <span>Patient &amp; Family Support</span>
        </div>
        <h1 className="hero-title">Resource Support</h1>
        <p className="hero-description">
          Comprehensive resources and support for cancer patients and their caregivers.
        </p>
        <div className="feature-tags">
          <div className="feature-tag">
            <i className="fas fa-video" aria-hidden />
            <span>Video Series</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-book" aria-hidden />
            <span>Reading Materials</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-phone" aria-hidden />
            <span>Support Hotlines</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-users" aria-hidden />
            <span>Community Support</span>
          </div>
        </div>
      </section>

      <div className="resource-support-layout">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="sidebar-icon" aria-hidden />
              <span>Page Navigation</span>
            </h3>

            <ul className="nav-links">
              <li>
                <a href="#nccn-guidelines" className="nav-link">
                  <span className="nav-icon" aria-hidden />
                  <span>NCCN Guidelines</span>
                </a>
              </li>
              <li>
                <a href="#nccs-resources" className="nav-link">
                  <span className="nav-icon" aria-hidden />
                  <span>NCCS Resources</span>
                </a>
              </li>
              <li>
                <a href="#asco-resources" className="nav-link">
                  <span className="nav-icon" aria-hidden />
                  <span>ASCO Resources</span>
                </a>
              </li>
              <li>
                <a href="#cancer-centers" className="nav-link">
                  <span className="nav-icon" aria-hidden />
                  <span>Cancer Centers</span>
                </a>
              </li>
              <li>
                <a
                  href="https://nlmsf.org/after-treatment/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="nav-icon" aria-hidden />
                  <span>After Treatment</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-image-card">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2025/09/caregiver-image.jpg"
              alt="Caregiver support"
              className="sidebar-image"
              width={600}
              height={800}
              sizes="(min-width: 1200px) 280px, (min-width: 768px) 35vw, 90vw"
            />
          </div>

          <div className="sidebar-cta">
            <h4>Need Personal Guidance?</h4>
            <p>
              Our team can help connect you with survivorship resources tailored to your specific
              needs.
            </p>
            <Link href="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </aside>

        <div className="content-container">
          <div className="content-section" id="nccn-guidelines">
            <div className="section-header">
              <h2>Resources for Cancer Caregivers</h2>
              <p>
                NCI has information to help you care for a family member or friend with cancer—and
                yourself.
              </p>
            </div>
            <div className="content-panel">
              <div className="resource-grid">
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-users fa-3x" style={{ color: "#e91e63" }} />
                  </div>
                  <h3>Informal Caregivers in Cancer (PDQ®)–Patient Version</h3>
                  <p>
                    Comprehensive information about the roles, needs, benefits, and burdens of being
                    an informal caregiver, along with ways to reduce caregiver burden.
                  </p>
                  <div className="resource-links">
                    <a
                      href="https://www.cancer.gov/about-cancer/coping/family-friends/family-caregivers-pdq"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Access NCI Caregiver Information
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-heart fa-3x" style={{ color: "#1976d2" }} />
                  </div>
                  <h3>Caring for the Caregiver</h3>
                  <p>
                    Patient education materials from NCI focused on caregiver health and self-care
                    strategies.
                  </p>
                  <div className="resource-links">
                    <a
                      href="https://www.cancer.gov/publications/patient-education/caring-for-the-caregiver"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      View Caregiver Education Materials
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-hand-holding-heart fa-3x" style={{ color: "#2e7d32" }} />
                  </div>
                  <h3>Advanced Cancer Caregivers</h3>
                  <p>
                    Specialized resources for caregivers supporting loved ones with advanced cancer,
                    including end-of-life care considerations.
                  </p>
                  <div className="resource-links">
                    <a
                      href="https://www.cancer.gov/about-cancer/advanced-cancer/caregivers"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Access Advanced Cancer Caregiver Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section" id="nccs-resources">
            <div className="section-header">
              <h2>What are the Unmet Needs – The NLMSF as a support resource</h2>
              <p>
                Understanding the comprehensive needs of caregiving to be effective and efficient in
                supporting cancer patients
              </p>
            </div>
            <div className="content-panel">
              <div className="unmet-needs-content">
                <div className="needs-overview">
                  <p>
                    Needs of caregiving to be effective and efficient in the various facets of
                    support needed by the cancer patient they are caring for. Good points were raised
                    regarding:
                  </p>

                  <ul className="needs-list">
                    <li>
                      <strong>Caregiving stress</strong> has the potential to negatively influence
                      caregiving.
                    </li>
                    <li>
                      <strong>Caregiving impact</strong> has always had a significant impact on the
                      quality of life of the caregiver themselves but also for the person they are
                      caring for – in terms of parallel issues involving physical, psychosocial, and
                      financial stress, along with managing/balancing daily activities while
                      addressing caregiving tasks.
                    </li>
                    <li>
                      <strong>Well-being connection</strong> - The wellbeing of the caregiver goes
                      hand in hand with the wellbeing of the patient.
                    </li>
                  </ul>
                </div>

                <div className="support-resources">
                  <h3>
                    Support Resource Information for caregivers - how to prepare for cancer
                    appointments – how to help with questions to ask, and more:
                  </h3>

                  <div className="resource-links-section">
                    <div className="resource-item">
                      <div className="resource-icon">
                        <i className="fas fa-book-open fa-2x" style={{ color: "#e91e63" }} />
                      </div>
                      <div className="resource-content">
                        <h4>NLMSF Resource Information</h4>
                        <p>
                          Found on this page plus additional comprehensive caregiver support
                          materials.
                        </p>
                      </div>
                    </div>

                    <div className="resource-item">
                      <div className="resource-icon">
                        <i className="fas fa-lightbulb fa-2x" style={{ color: "#1976d2" }} />
                      </div>
                      <div className="resource-content">
                        <h4>7 Essential Tips for Cancer Caregivers - Together4Cancer</h4>
                        <p>
                          Understanding the patient&apos;s specific cancer type, maintaining clear
                          communication with healthcare teams, managing daily responsibilities, and
                          seeking emotional support are all essential steps to provide compassionate
                          care.
                        </p>
                        <div className="resource-link-wrapper">
                          <a
                            href="https://www.together4cancer.com/post/7-essential-tips-for-cancer-caregivers/"
                            className="resource-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt" aria-hidden />
                            View Essential Tips
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="video-series" className="content-section">
            <div className="section-header">
              <h2>Caregiver Support Video Series</h2>
              <p>Educational resources to assist with caregiving and self-care</p>
            </div>
            <div className="content-panel">
              <div className="resource-highlight">
                <div className="highlight-image">
                  <Image
                    src="https://tse3.mm.bing.net/th?id=OIP.nh1-P-m_9w6sBLs9E1LdIAHaC8&pid=Api&P=0&w=415&h=166"
                    alt="Cancer.Net Video Series"
                    className="img-fluid"
                    width={415}
                    height={166}
                    sizes="(min-width: 900px) 200px, 60vw"
                  />
                </div>
                <div className="highlight-content">
                  <h3>Caregiver Support Video Series from Cancer.Net</h3>
                  <p>
                    This video series offers educational support as you assist with the everyday
                    needs of your loved one, as well as self-care techniques to improve your own
                    quality of life.
                  </p>
                  <div className="support-resources">
                    <div className="support-item">
                      <div className="support-icon">
                        <i className="fas fa-hands-helping" aria-hidden />
                      </div>
                      <div className="support-content">
                        <h4>Physical Care Training</h4>
                        <p>
                          Drain care, lifting, pain management, medication management, symptom/side
                          effect management, and identifying signs of infection.
                        </p>
                      </div>
                    </div>
                    <div className="support-item">
                      <div className="support-icon">
                        <i className="fas fa-heart" aria-hidden />
                      </div>
                      <div className="support-content">
                        <h4>Caregiver Self-Care</h4>
                        <p>
                          Nutrition, physical activity, stress management and coping, dealing with
                          fear of recurrence, and deep breathing/meditation.
                        </p>
                      </div>
                    </div>
                    <div className="support-item">
                      <div className="support-icon">
                        <i className="fas fa-comments" aria-hidden />
                      </div>
                      <div className="support-content">
                        <h4>Advocacy</h4>
                        <p>How to effectively communicate your loved one&apos;s needs to the cancer care team.</p>
                      </div>
                    </div>
                    <div className="support-item">
                      <div className="support-icon">
                        <i className="fas fa-user-friends" aria-hidden />
                      </div>
                      <div className="support-content">
                        <h4>Caregiver Stories</h4>
                        <p>Caregivers share their experiences through the ups and downs of their journey.</p>
                      </div>
                    </div>
                  </div>
                  <div className="resource-link-wrapper">
                    <a
                      href="https://www.cancer.org/treatment/caregivers/caregiver-support-videos.html"
                      className="resource-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-video" aria-hidden />
                      View Video Series
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="asco-resources" className="content-section">
            <div className="section-header">
              <h2>Essential Caregiver Resources</h2>
              <p>Comprehensive links to support services and information</p>
            </div>
            <div className="content-panel">
              <div className="resource-grid">
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-user-md fa-3x" style={{ color: "#e91e63" }} />
                  </div>
                  <h3>American Cancer Society Resources</h3>
                  <p>Comprehensive guides and resources for caregivers of cancer patients.</p>
                  <div className="resource-links">
                    <a
                      href="https://www.cancer.org/treatment/caregivers.html"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Caregiver Resources
                    </a>
                    <a
                      href="https://amp.cancer.org/treatment/caregivers/caregiver-resource-guide.html"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Caregiver Resource Guide
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-hospital fa-3x" style={{ color: "#1976d2" }} />
                  </div>
                  <h3>NCCN Patient Resources</h3>
                  <p>National Comprehensive Cancer Network resources for patients and caregivers.</p>
                  <div className="resource-links">
                    <a
                      href="https://www.nccn.org/patientresources/patient-resources"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Patient Resources
                    </a>
                    <a
                      href="https://www.nccn.org/patientresources/patient-resources/support-for-patients-caregivers"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Support for Patients &amp; Caregivers
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-file-pdf fa-3x" style={{ color: "#2e7d32" }} />
                  </div>
                  <h3>
                    Incorporating Family Caregivers Into Shared Decision-Making for Patients With
                    Cancer
                  </h3>
                  <p>
                    In a recent study published in JCO Oncology Practice, Steffensen et al examined
                    the process of shared decision-making (SDM)....
                  </p>
                  <div className="resource-links">
                    <a
                      href="https://ascopost.com/news/september-2025/incorporating-family-caregivers-into-shared-decision-making-for-patients-with-cancer/?utm_source=ONC-TAP-EN-091725&utm_medium=email&md5=a59c8f18d852462342f3c3f998d0e2d9&mkt_tok=ODI0LVhPRy0wNTQAAAGc-IujOAOOxsGWC1JaSIaXerQBFb_37EGiOQKuBp0MZ6LirimEulkqJ6f2MF4Vtuka5SqZcy5OOl1PavTLV14rUfmGbD2XZ4g028_aTXZ-iBt3mSVu"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-download" aria-hidden />
                      View Resource
                    </a>
                  </div>
                </div>
                <div className="resource-card">
                  <h3>NIH - Caregiving Toolkit to Support Caregivers:</h3>
                  <div className="resource-links">
                    <a
                      href="https://www.nia.nih.gov/toolkits/caregiving"
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" aria-hidden />
                      Caregiving Toolkit: Information and Resources to Support Caregivers | National
                      Institute on Aging
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="cancer-centers" className="content-section">
            <div className="section-header">
              <h2>Support Organizations</h2>
              <p>Organizations dedicated to supporting cancer caregivers</p>
            </div>
            <div className="content-panel">
              <div className="support-resources">
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-brain" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>The American Psychosocial Oncology Society</h3>
                    <p>
                      Has a hotline that both patients and caregivers can call to get advice for
                      emotional/mental health support resources in their community.
                    </p>
                    <div className="resource-link-wrapper">
                      <a href="tel:+18662674773" className="resource-link">
                        <i className="fas fa-phone" aria-hidden />
                        1-866-APOS-4-HELP
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-users" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>The Cancer Support Community</h3>
                    <p>
                      Provides online advice and information for cancer caregivers, and helpline and
                      support programs at local affiliates.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://cancersupportcommunity.org/"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        cancersupportcommunity.org
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-hand-holding-heart" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>CancerCare</h3>
                    <p>Hosts virtual and in-person support groups and workshops for cancer caregivers.</p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://cancercare.org/tagged/caregiving"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        cancercare.org/tagged/caregiving
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-home" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>The Home Alone Alliance</h3>
                    <p>
                      Offers video series tailored for family caregivers on mobility and wound care,
                      with more topics to come.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.aarp.org/ppi/info-2017/home-alone-alliance.html"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        aarp.org/ppi/info-2017/home-alone-alliance.html
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-hospital-alt" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>The National Cancer Institute</h3>
                    <p>
                      Provides a booklet on &quot;Caring for the Caregiver,&quot; that includes guidance
                      on making time for yourself, navigating complicated feelings, and asking for
                      help.
                    </p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://cancer.gov/publications/patient-education/caring-for-the-caregiver"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        cancer.gov/publications/patient-education/caring-for-the-caregiver
                      </a>
                    </div>
                  </div>
                </div>
                <div className="support-item">
                  <div className="support-icon">
                    <i className="fas fa-medkit" aria-hidden />
                  </div>
                  <div className="support-content">
                    <h3>CDC Resources for Caregivers</h3>
                    <p>Helpful resource information from the CDC for Caregivers to take care of themselves.</p>
                    <div className="resource-link-wrapper">
                      <a
                        href="https://www.cdc.gov/cancer/survivors/caregivers/caring-for-yourself.htm"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden />
                        CDC Caregiver Self-Care Resources
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="caregiver-bookshelf" className="content-section">
            <div className="section-header">
              <h2>Caregiver&apos;s Corner Bookshelf</h2>
              <p>Recommended reading materials for caregivers</p>
            </div>
            <div className="content-panel">
              <p className="mb-4">
                Share your inspirational reads with us (post on our FB page and they will be listed
                here).
              </p>
              <div className="resource-grid">
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-book-open fa-3x" style={{ color: "#e91e63" }} />
                  </div>
                  <h3>Dana Farber Cancer Center Recommendations</h3>
                  <p>Suggested books for caregivers from Dana Farber Cancer Center.</p>
                  <a
                    href="https://www.dana-farber.org/for-patients-and-families/caring-for-a-loved-one/suggested-reading/"
                    className="resource-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                    View Reading List
                  </a>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-book-reader fa-3x" style={{ color: "#1976d2" }} />
                  </div>
                  <h3>Caring Bridge Book List</h3>
                  <p>15 books for Caregivers recommended by Caring Bridge.</p>
                  <a
                    href="https://www.caringbridge.org/resources/books-for-caregivers/"
                    className="resource-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                    View Reading List
                  </a>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fab fa-amazon fa-3x" style={{ color: "#ff9900" }} />
                  </div>
                  <h3>Amazon Book Recommendations</h3>
                  <p>Highly rated books for cancer caregivers available on Amazon.</p>
                  <a
                    href="https://www.amazon.com/Things-Wish-Id-Known-Caregivers/dp/1938842278"
                    className="resource-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                    View on Amazon
                  </a>
                </div>
                <div className="resource-card">
                  <div className="resource-image">
                    <i className="fas fa-lightbulb fa-3x" style={{ color: "#2e7d32" }} />
                  </div>
                  <h3>Inspirational Books</h3>
                  <p>10 Inspirational Books for Patients and Families.</p>
                  <a
                    href="https://www.fifthseasonfinancial.com/blog/10-inspirational-books-for-cancer-patients-and-families/"
                    className="resource-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                    View Reading List
                  </a>
                </div>
              </div>
              <div className="resource-highlight mt-5">
                <div className="highlight-image">
                  <Image
                    src="https://m.media-amazon.com/images/I/51ZQ7tHfFNL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    alt="The American Cancer Society Complete Guide to Family Caregiving"
                    className="img-fluid"
                    width={291}
                    height={200}
                    sizes="(min-width: 900px) 200px, 60vw"
                  />
                </div>
                <div className="highlight-content">
                  <h3>An Essential Guide for Cancer Caregivers</h3>
                  <p>
                    Designed to cover a host of topics on caregiving, The American Cancer Society
                    Complete Guide to Family Caregiving, Second Edition gives caregivers detailed
                    information, helpful support, and practical answers to questions that may arise
                    while caring for a loved one facing cancer.
                  </p>
                  <div className="resource-link-wrapper">
                    <a
                      href="https://www.cancer.org/latest-news/an-essential-guide-for-cancer-caregivers.html"
                      className="resource-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-book" aria-hidden />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
