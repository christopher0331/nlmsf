import type { Metadata } from "next";
import Image from "next/image";
import "./transportation-lodging.css";

export const metadata: Metadata = {
  title: "Transportation & Lodging | NLMSF",
  description:
    "Transportation and lodging resources for patients and families, including local travel, distant travel, and lodging options.",
};

const localResources = [
  {
    title: "American Cancer Society's Road to Recovery",
    description:
      "Provides transportation to and from treatment for cancer patients who do not have a ride or are unable to drive themselves. Volunteer drivers donate their time and use their own vehicles so patients can receive the life-saving treatments they need.",
    details:
      "To obtain details and eligibility information, please contact the American Cancer Society directly at 1-800-227-2345 to be matched with a volunteer, and you can enter your zip code to check for programs in your area.",
    url: "https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html",
  },
  {
    title: "Rideshare Services",
    description:
      "Uber, Lyft, and the American Cancer Society are all available options for non-emergent, cancer patient transportation.",
    url: "https://health.usnews.com/health-care/patient-advice/articles/2018-10-10/lyft-and-uber-help-patients-make-it-to-medical-appointments",
  },
  {
    title: "U.S. Local and State Transit Links",
    description:
      "Find public transportation options in your area through the American Public Transportation Association's directory of local and state transit agencies.",
    url: "https://www.apta.com/research-technical-resources/public-transportation-links/",
  },
  {
    title: "Cancer Care News Transportation Support",
    description:
      "Access free transportation services for cancer patients and their families to reach medical appointments.",
    url: "https://cancercarenews.com/free-financial-help-for-cancer-patients/transportation-housing/",
  },
];

const distantResources = [
  {
    title: "AirCare Alliance (ACA)",
    description:
      "A national list of air carriers that assist cancer patients. Air Care Alliance provides the only site which lists all known volunteer pilot organizations flying for the public benefit.",
    url: "https://www.aircarealliance.org/",
  },
  {
    title: "Air Charity Network",
    description:
      "Serves all 50 states and its volunteer pilots utilize their own aircraft, fuel and time to provide free air transportation.",
    url: "https://aircharitynetwork.org/",
  },
  {
    title: "Angel Flight",
    description:
      "Arranges free transportation to medical treatment when commercial airlines cannot assist.",
    url: "https://angelflightsoars.org/",
  },
  {
    title: "Corporate Angel Network",
    description:
      "Arranges free travel on corporate jets for cancer patients, bone marrow donors and bone marrow recipients.",
    url: "https://corpangelnetwork.org/",
    note: "Call (914) 328-1313 to register within three weeks of a specific appointment.",
  },
];

const lodgingResources = [
  {
    title: "Joe's House",
    description:
      "Partners with lodging organizations that offer discounts to patients and family members when they travel for treatment.",
    url: "https://www.joeshouse.org/",
  },
  {
    title: "Hope Lodge",
    description:
      "The American Cancer Society offers Hope Lodge, a free place where cancer patients and their caregivers can stay when they must travel out of town for medical treatment.",
    url: "https://www.cancer.org/support-programs-and-services/patient-lodging/hope-lodge.html",
  },
  {
    title: "Hotel Lodging",
    description:
      "The American Cancer Society provides overnight assistance to cancer patients who must travel for outpatient treatment and need help with lodging.",
    url: "https://www.cancer.org/",
    note: "For more information, contact the American Cancer Society at 1-800-227-2345.",
  },
];

const sarcomaCenters = [
  { name: "A Shelter for Cancer Families", url: "https://www.cancerfamilies.org/" },
  { name: "Boston Cancer Support Temporary Lodging", url: "https://www.bostoncancersupport.org/temporary-lodging/" },
  { name: "Cancer Care – Lodging for Traveling Cancer Patients", url: "https://www.cancercare.org/tagged/lodging" },
  { name: "Cancer Support Community – Free Air BnB Program", url: "https://www.cancersupportcommunity.org/cancer-support-helpline" },
  { name: "Abramson Cancer Center", url: "https://www.pennmedicine.org/cancer/navigating-cancer-care/support-services" },
  { name: "Brown Cancer Center", url: "https://uoflbrowncancercenter.org/area-lodging" },
  { name: "Catholic Medical Center", url: "https://www.catholicmedicalcenter.org/patients-visitors/visitor-information/local-amenities-and-lodging/hotels" },
  { name: "Cleveland Clinic – Taussig Cancer Institute", url: "https://my.clevelandclinic.org/departments/cancer/patient-education" },
  { name: "Dana Farber Cancer Institute", url: "https://www.dana-farber.org/for-patients-and-families/becoming-a-patient/planning-your-visit/places-to-stay-near-dana-farber/" },
  { name: "Duke Cancer Institute", url: "http://dukecancerinstitute.org/nearby-lodging" },
  { name: "Emory Winship Cancer Institute", url: "https://winshipcancer.emory.edu/patient-care/being-a-patient/lodging-and-restaurants.html" },
  { name: "Fox Chase Medical Center", url: "https://www.foxchase.org/locations/where-stay" },
  { name: "Seattle Cancer Care Alliance", url: "https://www.seattlecca.org/housing-information" },
  { name: "Johns Hopkins - Sidney Kimmel Cancer Center", url: "https://www.hopkinsmedicine.org/kimmel_cancer_center/patient_and_family_services/patient_information/planning_your_visit/housing.html" },
  { name: "Hillman Cancer Center - Univ. of Pittsburgh Medical Center", url: "https://www.shadysideinn.com/hotel-near/upmc-hillman-cancer-center/" },
  { name: "Cancer Horizons", url: "https://www.cancerhorizons.com/free-stuff/free-lodging/" },
  { name: "Knight Cancer Institute", url: "https://www.ohsu.edu/health/rood-family-pavilion" },
  { name: "Memorial Sloan Kettering Cancer Center", url: "https://www.mskcc.org/locations/visiting-us/accommodations" },
  { name: "MD Anderson", url: "https://www.tempstay.com/" },
  { name: "MD Anderson Lodging (PDF)", url: "https://www.mdanderson.org/content/dam/mdanderson/documents/patients-and-family/becoming-our-patient/getting-to-md-anderson/MDAndersonLodgingOther.pdf" },
  { name: "Moffitt Cancer Center", url: "https://moffitt.org/patient-family/lodging/" },
  { name: "Hope Lodge (Tampa)", url: "https://www.cancer.org/treatment/support-programs-and-services/patient-lodging/hope-lodge/tampa/staying-with-us.html" },
  { name: "Montefiore Medical Center", url: "https://www.montefiore.org/where-to-stay" },
  { name: "Northside Hospital", url: "https://www.joeshouse.org/lodging?&state=Georgia&cid=47" },
  { name: "Rogel Cancer Center – Michigan Medicine", url: "https://www.rogelcancercenter.org/support/patient-and-visitor-guide/directions-and-hotel-information" },
  { name: "Roswell Park Cancer Institute", url: "https://www.roswellpark.org/current-patients/directions-parking-lodging" },
  { name: "Stanford Medical Center", url: "https://stanfordhealthcare.org/for-patients-visitors/guest-services/where-to-stay.html" },
  { name: "Sylvester Cancer Center", url: "https://umiamihealth.org/international-patients/patient-information/transportation-,-a-,-accommodations" },
  { name: "UCLA Cancer Center", url: "https://www.uclahealth.org/lodging" },
  { name: "University of Colorado Health Sciences – Anschutz Cancer Pavilion", url: "https://www.joeshouse.org/" },
];

export default function TransportationLodgingPage() {
  return (
    <main className="transportation-lodging-page">
      <section className="tl-hero">
        <div className="tl-badge">
          <span className="tl-badge-icon" aria-hidden="true" />
          <span>Patient &amp; Family Support</span>
        </div>
        <h1 className="tl-hero-title">Transportation &amp; Lodging</h1>
        <div className="tl-feature-tags">
          <span className="tl-feature-tag">Local Transportation</span>
          <span className="tl-feature-tag">Travel Assistance</span>
          <span className="tl-feature-tag">Lodging Options</span>
        </div>
        <p className="tl-hero-description">
          Finding transportation and lodging for medical appointments can be challenging. Explore
          resources to help with local and distant travel needs, as well as temporary housing
          options.
        </p>
      </section>

      <section className="tl-layout">
        <aside className="tl-sidebar">
          <h3 className="tl-sidebar-title">Transportation &amp; Lodging Resources</h3>
          <ul className="tl-sidebar-links">
            <li>
              <a href="#local-transportation" className="tl-sidebar-link">
                Local Transportation
              </a>
            </li>
            <li>
              <a href="#distant-transportation" className="tl-sidebar-link">
                Distant Transportation
              </a>
            </li>
            <li>
              <a href="#lodging" className="tl-sidebar-link">
                Patient Lodging
              </a>
            </li>
            <li>
              <a href="#sarcoma-lodging" className="tl-sidebar-link">
                Sarcoma Center Lodging
              </a>
            </li>
          </ul>

          <div className="tl-sidebar-section">
            <h4>Quick Help</h4>
            <div className="tl-help-item">
              <strong>American Cancer Society</strong>
              <a href="tel:+18002272345">800-227-2345</a>
            </div>
            <div className="tl-help-item">
              <strong>Corporate Angel Network</strong>
              <a href="tel:+19143281313">914-328-1313</a>
            </div>
            <div className="tl-help-item">
              <a
                href="https://www.mdanderson.org/content/dam/mdanderson/documents/patients-and-family/becoming-our-patient/getting-to-md-anderson/MDAndersonLodgingOther.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Lodging Guide
              </a>
            </div>
          </div>

          <div className="tl-sidebar-section">
            <h4>Featured Resource</h4>
            <div className="tl-featured-resource">
              <Image
                src="https://nlsmf.org/wp-content/uploads/2021/05/hope-lodge.jpg"
                alt="Hope Lodge"
                className="tl-featured-image"
                width={320}
                height={200}
              />
              <h5>Hope Lodge</h5>
              <p>
                The American Cancer Society offers free lodging for cancer patients and their
                caregivers when traveling for treatment at 31 locations nationwide.
              </p>
              <a
                href="https://www.cancer.org/treatment/support-programs-and-services/patient-lodging/hope-lodge.html"
                className="tl-resource-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find a Location
              </a>
            </div>
          </div>

          <div className="tl-sidebar-section">
            <h4>Contact Us</h4>
            <div className="tl-contact-item">
              <strong>Phone</strong>
              <a href="tel:+13037830924">303-783-0924</a>
              <a href="tel:+13038083437">303-808-3437</a>
            </div>
            <div className="tl-contact-item">
              <strong>Email</strong>
              <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
            </div>
            <div className="tl-contact-item">
              <strong>Address</strong>
              <p>1685 So. Colorado Blvd, Unit S, Suite 447, Denver, CO 80222</p>
            </div>
          </div>

          <div className="tl-sidebar-section">
            <h4>Support Our Mission</h4>
            <div className="tl-donate">
              <a href="https://nlmsf.org/donate/" className="tl-donate-link">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2021/01/donate-circle.jpg"
                  alt="Donate to NLMSF"
                  width={120}
                  height={120}
                />
                <span>Donate Today</span>
              </a>
              <p>Help Shape the Future of Survival</p>
            </div>
          </div>
        </aside>

        <div className="tl-content">
          <section id="local-transportation" className="tl-section">
            <div className="tl-section-header">
              <h2>Transportation to Local Appointments</h2>
              <p>Resources for getting to and from medical appointments in your local area.</p>
            </div>
            <div className="tl-panel tl-panel-blue">
              <div className="tl-resource-list">
                {localResources.map((resource) => (
                  <div key={resource.title} className="tl-resource-item">
                    <div className="tl-resource-content">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      {resource.details ? <p>{resource.details}</p> : null}
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tl-info-box tl-info-blue">
                <h4>Need Help Finding Transportation?</h4>
                <p>
                  Contact the American Cancer Society at{" "}
                  <a href="tel:+18002272345">1-800-227-2345</a> for assistance in finding
                  transportation options in your area.
                </p>
              </div>
            </div>
          </section>

          <section id="distant-transportation" className="tl-section">
            <div className="tl-section-header">
              <h2>Transportation to Distant Appointments</h2>
              <p>Resources for traveling to medical appointments that require long-distance travel.</p>
            </div>
            <div className="tl-panel tl-panel-indigo">
              <div className="tl-resource-grid">
                {distantResources.map((resource) => (
                  <div key={resource.title} className="tl-resource-card">
                    <h4>{resource.title}</h4>
                    <p>{resource.description}</p>
                    {resource.note ? <p className="tl-note">{resource.note}</p> : null}
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </div>
                ))}
              </div>
              <div className="tl-info-box tl-info-indigo">
                <h4>Planning Ahead</h4>
                <p>
                  Many of these services require advance notice. It&apos;s recommended to contact
                  them as soon as you know your travel dates for medical appointments.
                </p>
              </div>
            </div>
          </section>

          <section id="lodging" className="tl-section">
            <div className="tl-section-header">
              <h2>Cancer Patient Lodging</h2>
              <p>Resources for finding temporary housing during cancer treatment.</p>
            </div>
            <div className="tl-panel tl-panel-green">
              <div className="tl-resource-list">
                {lodgingResources.map((resource) => (
                  <div key={resource.title} className="tl-resource-item">
                    <div className="tl-resource-content">
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      {resource.note ? <p>{resource.note}</p> : null}
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="sarcoma-lodging" className="tl-subsection">
              <h3>Sarcoma Center Temporary Lodging Guide</h3>
              <p>
                Many cancer centers offer lodging assistance or have partnerships with nearby
                accommodations. Contact the patient services department at your treatment center for
                specific information.
              </p>
              <div className="tl-centers-grid">
                {sarcomaCenters.map((center) => (
                  <a
                    key={center.name}
                    href={center.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tl-center-item"
                  >
                    {center.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
