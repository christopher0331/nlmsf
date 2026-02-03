import type { Metadata } from "next";
import "./resource-support-staged-2.css";

export const metadata: Metadata = {
  title: "Resource Support | NLMSF",
  description: "Caregiver support resources, video series, and helpful links.",
};

const caregiverLinks = [
  {
    label: "American Cancer Society Caregivers",
    url: "https://www.cancer.org/treatment/caregivers.html",
  },
  {
    label: "American Cancer Society (AMP)",
    url: "https://amp.cancer.org/treatment/caregivers.html",
  },
  {
    label: "Caregiver Resource Guide (ACS)",
    url: "https://www.cancer.org/treatment/caregivers/caregiver-resource-guide.html",
  },
  {
    label: "NCCN Patient Resources",
    url: "https://www.nccn.org/patientresources/patient-resources",
  },
  {
    label: "NCCN Support for Patients & Caregivers",
    url: "https://www.nccn.org/patientresources/patient-resources/support-for-patients-caregivers",
  },
  {
    label: "ASCO Answers Guide: Caregiving (PDF)",
    url: "https://www.cancer.net/sites/cancer.net/files/asco_answers_guide_caregiving.pdf",
  },
  {
    label: "Cancer Horizons Caregivers",
    url: "https://www.cancerhorizons.com/caregivers/",
  },
];

const supportOrgs = [
  {
    title: "American Psychosocial Oncology Society",
    description:
      "Hotline for patients and caregivers to find emotional and mental health support resources.",
    linkLabel: "1-866-APOS-4-HELP",
    linkUrl: "tel:+18662674773",
  },
  {
    title: "Cancer Support Community",
    description:
      "Online advice, helpline, and local affiliate support programs for caregivers.",
    linkLabel: "cancersupportcommunity.org",
    linkUrl: "https://cancersupportcommunity.org/",
  },
  {
    title: "CancerCare",
    description: "Virtual and in-person support groups and workshops for caregivers.",
    linkLabel: "cancercare.org/tagged/caregiving",
    linkUrl: "https://cancercare.org/tagged/caregiving",
  },
  {
    title: "Home Alone Alliance",
    description:
      "Video series for family caregivers on mobility and wound care, with more topics to come.",
    linkLabel: "aarp.org/ppi/info-2017/home-alone-alliance.html",
    linkUrl: "https://www.aarp.org/ppi/info-2017/home-alone-alliance.html",
  },
  {
    title: "National Cancer Institute",
    description:
      "Booklet on Caring for the Caregiver with guidance on self-care and asking for help.",
    linkLabel: "cancer.gov/publications/patient-education/caring-for-the-caregiver",
    linkUrl: "https://cancer.gov/publications/patient-education/caring-for-the-caregiver",
  },
  {
    title: "American Cancer Society",
    description:
      "Guide for caregivers and family members, including self-care and navigating insurance.",
    linkLabel: "Caregiver Resource Guide",
    linkUrl: "https://www.cancer.org/treatment/caregivers/caregiver-resource-guide.html",
  },
  {
    title: "CDC Caregiver Self-Care Resources",
    description: "Helpful resource information for caregivers to take care of themselves.",
    linkLabel: "CDC caregiver self-care",
    linkUrl: "https://www.cdc.gov/cancer/survivors/caregivers/caring-for-yourself.htm",
  },
  {
    title: "American Cancer Society Video Series",
    description: "Video series for caregivers and families.",
    linkLabel: "Caregiver support videos",
    linkUrl: "https://www.cancer.org/treatment/caregivers/caregiver-support-videos.html",
  },
];

const bookshelfLinks = [
  {
    label: "Dana Farber suggested reading",
    url: "https://www.dana-farber.org/for-patients-and-families/caring-for-a-loved-one/suggested-reading/",
  },
  {
    label: "Caring Bridge: 15 books for caregivers",
    url: "https://www.caringbridge.org/resources/books-for-caregivers/",
  },
  {
    label: "Amazon book list",
    url: "https://www.amazon.com/Things-Wish-Id-Known-Caregivers/dp/1938842278",
  },
  {
    label: "10 Inspirational Books for Patients and Families",
    url: "https://www.fifthseasonfinancial.com/blog/10-inspirational-books-for-cancer-patients-and-families/",
  },
  {
    label: "An Essential Guide for Cancer Caregivers",
    url: "https://www.cancer.org/latest-news/an-essential-guide-for-cancer-caregivers.html",
  },
];

export default function ResourceSupportStagedPage() {
  return (
    <main className="resource-support-staged-page">
      <section className="rss-hero">
        <div className="rss-hero-badge">Caregiver Support</div>
        <h1>Resource Support</h1>
        <p>
          Curated resources, caregiver education, and trusted organizations to support you and your
          loved ones through every stage of the cancer journey.
        </p>
      </section>

      <section className="rss-section">
        <div className="rss-card">
          <h2>Caregiver Support Video Series from Cancer.Net</h2>
          <p>
            This video series offers educational support as you assist with the everyday needs of
            your loved one, as well as self-care techniques to improve your own quality of life.
          </p>
          <ul className="rss-list">
            <li>
              <strong>Physical Care Training:</strong> drain care, lifting, pain management,
              medication management, symptom/side effect management, and identifying signs of
              infection.
            </li>
            <li>
              <strong>Caregiver Self-Care:</strong> nutrition, physical activity, stress management
              and coping, dealing with fear of recurrence, and deep breathing/meditation.
            </li>
            <li>
              <strong>Advocacy:</strong> how to effectively communicate your loved one&apos;s needs
              to the cancer care team.
            </li>
            <li>
              <strong>Caregiver Stories:</strong> caregivers share their experiences through the ups
              and downs of their journey.
            </li>
          </ul>
          <a
            href="https://www.cancer.org/treatment/caregivers/caregiver-support-videos.html"
            className="rss-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Video Series
          </a>
        </div>
      </section>

      <section className="rss-section">
        <h2 className="rss-section-title">Essential Caregiver Links</h2>
        <div className="rss-grid">
          {caregiverLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="rss-link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              <i className="fas fa-arrow-up-right-from-square" aria-hidden />
            </a>
          ))}
        </div>
      </section>

      <section className="rss-section">
        <h2 className="rss-section-title">Support Organizations</h2>
        <div className="rss-grid rss-grid-2">
          {supportOrgs.map((org) => (
            <div key={org.title} className="rss-card rss-card-outline">
              <h3>{org.title}</h3>
              <p>{org.description}</p>
              <a href={org.linkUrl} target="_blank" rel="noopener noreferrer">
                {org.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="rss-section">
        <h2 className="rss-section-title">Caregiver&apos;s Corner Bookshelf</h2>
        <p className="rss-subtitle">
          Share your inspirational reads with us (post on our FB page and they will be listed
          here).
        </p>
        <div className="rss-grid rss-grid-2">
          {bookshelfLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="rss-card rss-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              <i className="fas fa-book-open" aria-hidden />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
