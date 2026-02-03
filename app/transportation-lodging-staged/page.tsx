import type { Metadata } from "next";
import "./transportation-lodging-staged.css";

export const metadata: Metadata = {
  title: "Transportation and Lodging Resources | NLMSF",
  description:
    "Transportation and lodging resources for cancer patients, including travel assistance and temporary lodging guides.",
};

const localTransportation = [
  {
    title: "American Cancer Society Road to Recovery",
    description:
      "Transportation assistance program provides rides to and from treatment for patients without a ride or who are unable to drive themselves. Volunteer drivers donate their time and use their own vehicles so patients can receive the life-saving treatments they need. Contact the American Cancer Society directly at 1-800-227-2345 to be matched with a volunteer and enter your zip code to check for programs in your area.",
    url: "https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html",
  },
  {
    title: "Uber, Lyft, and the American Cancer Society",
    description:
      "Uber, Lyft, and the American Cancer Society are available options for non-emergent, cancer patient transportation.",
    url: "https://health.usnews.com/health-care/patient-advice/articles/2018-10-10/lyft-and-uber-help-patients-make-it-to-medical-appointments",
  },
];

const distantTransportation = [
  {
    title: "AirCare Alliance",
    description: "A national list of air carriers that assist cancer patients.",
    url: "https://www.aircarealliance.org/getting-assistance/directory-of-groups/",
  },
  {
    title: "Southwest Airlines Medical Transportation Grant Program",
    description:
      "Offers complimentary roundtrip tickets to nonprofit hospitals and medical transportation organizations. Contact the social worker, travel concierge service, or patient assistance department of the hospital facility where you receive treatment.",
    url: "https://www.southwest.com/html/southwest-difference/community-involvement/charities/medical_transportation.html",
  },
  {
    title: "Corporate Angel Network (CAN)",
    description:
      "Arranges free travel on corporate jets for cancer patients, bone marrow donors, and bone marrow recipients if the program criteria are met. Call (914) 328-1313 to register within three weeks of a specific appointment at a recognized cancer treatment center.",
    url: "http://www.corpangelnetwork.org/#/home",
  },
  {
    title: "Mercy Medical Angels",
    description:
      "Provides free transportation nationwide to and from medical care for qualifying in-need individuals and their families.",
    url: "https://www.mercymedical.org/",
  },
  {
    title: "LifeLine Pilots (LLP)",
    description: "Facilitates free transportation for ongoing medical treatments, diagnosis and follow-up care.",
    url: "https://lifelinepilots.org/",
  },
  {
    title: "Air Care Alliance (ACA)",
    description:
      "Provides listings of nonprofit organizations nationwide that fly patients to treatments at no charge.",
    url: "https://www.aircarealliance.org/",
  },
  {
    title: "Air Charity Network",
    description:
      "Serves all 50 states and volunteer pilots provide free air transportation to medical facilities for citizens who are financially distressed.",
    url: "http://aircharitynetwork.org/",
  },
  {
    title: "Angel Flight Northeast",
    description:
      "A 501(c)3 nonprofit organization honored to serve courageous patients and their families who have an incredible will to live.",
    url: "http://www.angelflightne.org/",
  },
  {
    title: "Transportation Support Services",
    description:
      "Support services may include help with air and ground transportation for medical care, emotional support, help with returning to work, or financial assistance for child care and other needs.",
    url: "https://www.livestrong.org/we-can-help/planning-medical-care/transportation-and-other-cancer-support-services",
  },
];

const lodgingResources = [
  {
    title: "Joe's House",
    description:
      "Partners with lodging organizations that offer discounts to patients and family members when they travel for treatment.",
    url: "https://www.joeshouse.org/lodging",
  },
  {
    title: "Hope Lodge",
    description:
      "The American Cancer Society offers Hope Lodge, a free place where cancer patients and caregivers can stay when they must travel out of town for medical treatment.",
    url: "https://www.cancer.org/treatment/support-programs-and-services/patient-lodging/hope-lodge.html",
  },
  {
    title: "Hotel Lodging",
    description:
      "The American Cancer Society provides overnight assistance to cancer patients who must travel for outpatient treatment and need help with lodging. For more information, contact 1-800-227-2345.",
    url: "https://www.cancer.org/treatment/support-programs-and-services/patient-lodging.html",
  },
];

const temporaryLodging = [
  { title: "A Shelter for Cancer Families", url: "https://www.cancerfamilies.org/" },
  {
    title: "Boston Cancer Support Temporary Lodging",
    url: "https://www.bostoncancersupport.org/temporary-lodging/",
  },
  {
    title: "Cancer Care - Lodging for Traveling Cancer Patients",
    url: "https://www.cancercare.org/tagged/lodging",
  },
  {
    title: "Cancer Support Community - Free Air BnB Program",
    url: "https://www.cancersupportcommunity.org/cancer-support-helpline",
  },
  {
    title: "Abramson Cancer Center",
    url: "https://www.pennmedicine.org/cancer/navigating-cancer-care/support-services",
  },
  { title: "Brown Cancer Center", url: "https://uoflbrowncancercenter.org/area-lodging" },
  {
    title: "Catholic Medical Center",
    url: "https://www.catholicmedicalcenter.org/patients-visitors/visitor-information/local-amenities-and-lodging/hotels",
  },
  {
    title: "Cleveland Clinic - Taussig Cancer Institute",
    url: "https://my.clevelandclinic.org/departments/cancer/patient-education",
  },
  {
    title: "Dana Farber Cancer Institute",
    url: "https://www.dana-farber.org/for-patients-and-families/becoming-a-patient/planning-your-visit/places-to-stay-near-dana-farber/",
  },
  { title: "Duke Cancer Institute", url: "http://dukecancerinstitute.org/nearby-lodging" },
  {
    title: "Emory Winship Cancer Institute",
    url: "https://winshipcancer.emory.edu/patient-care/being-a-patient/lodging-and-restaurants.html",
  },
  { title: "Fox Chase Medical Center", url: "https://www.foxchase.org/locations/where-stay" },
  { title: "Seattle Cancer Care Alliance", url: "https://www.seattlecca.org/housing-information" },
  {
    title: "Johns Hopkins - Sidney Kimmel Cancer Center",
    url: "https://www.hopkinsmedicine.org/kimmel_cancer_center/patient_and_family_services/patient_information/planning_your_visit/housing.html",
  },
  {
    title: "Hillman Cancer Center - UPMC",
    url: "https://www.shadysideinn.com/hotel-near/upmc-hillman-cancer-center/",
  },
  { title: "Cancer Horizons", url: "https://www.cancerhorizons.com/free-stuff/free-lodging/" },
  { title: "Knight Cancer Institute", url: "https://www.ohsu.edu/health/rood-family-pavilion" },
  {
    title: "Memorial Sloan Kettering Cancer Center",
    url: "https://www.mskcc.org/locations/visiting-us/accommodations",
  },
  { title: "MD Anderson", url: "https://www.tempstay.com/" },
  {
    title: "MD Anderson Lodging",
    url: "https://www.mdanderson.org/content/dam/mdanderson/documents/patients-and-family/becoming-our-patient/getting-to-md-anderson/MDAndersonLodgingOther.pdf",
  },
  {
    title: "Moffitt Cancer Center",
    url: "https://moffitt.org/patient-family/lodging/",
  },
  {
    title: "Hope Lodge (Tampa)",
    url: "https://www.cancer.org/treatment/support-programs-and-services/patient-lodging/hope-lodge/tampa/staying-with-us.html",
  },
  { title: "Montefiore Medical Center", url: "https://www.montefiore.org/where-to-stay" },
  { title: "Northside Hospital", url: "https://www.joeshouse.org/lodging?&state=Georgia&cid=47" },
  {
    title: "Rogel Cancer Center - Michigan Medicine",
    url: "https://www.rogelcancercenter.org/support/patient-and-visitor-guide/directions-and-hotel-information",
  },
  {
    title: "Roswell Park Cancer Institute",
    url: "https://www.roswellpark.org/current-patients/directions-parking-lodging",
  },
  {
    title: "Stanford Medical Center",
    url: "https://stanfordhealthcare.org/for-patients-visitors/guest-services/where-to-stay.html",
  },
  {
    title: "Sylvester Cancer Center",
    url: "https://umiamihealth.org/international-patients/patient-information/transportation-,-a-,-accommodations",
  },
  { title: "UCLA Cancer Center", url: "https://www.uclahealth.org/lodging" },
  {
    title: "University of Colorado Health Sciences - Anschutz Cancer Pavilion",
    url: "https://www.joeshouse.org/",
  },
  {
    title: "University of Kansas Cancer Center",
    url: "https://www.kucancercenter.org/patients-caregivers/becoming-our-patient/travel-lodging",
  },
  {
    title: "University of Maryland - Greenbaum Comprehensive Cancer Center",
    url: "https://www.umms.org/ummc/patients-visitors/for-visitors/hotels",
  },
  { title: "University of Michigan Health - Cancer Center", url: "http://www.med.umich.edu/hotels/" },
  {
    title: "University of North Carolina - Lineberger Comprehensive Cancer Center",
    url: "https://www.cancer.org/treatment/support-programs-and-services/patient-lodging.html",
  },
  {
    title: "University of Texas - Southwestern Medical Center",
    url: "https://comfyhouston.com/md-anderson-short-term-furnished-apartments/",
  },
  {
    title: "Vanderbilt-Ingham Cancer Center",
    url: "https://www.vanderbilthealth.com/information/guest-services",
  },
  {
    title: "Virginia Commonwealth University - Massey Cancer Center",
    url: "https://www.massey.vcu.edu/patient-care/resources/lodging/",
  },
  {
    title: "Wake Forest Baptist Health/Baptist Health - Clemmons",
    url: "https://www.wakehealth.edu/About-Us/Careers/International-Services/Housing",
  },
  {
    title: "Yale Cancer Center - Yale School of Medicine",
    url: "https://www.yalemedicine.org/departments/yale-cancer-center/resources_and_support.html",
  },
];

export default function TransportationLodgingStagedPage() {
  return (
    <main className="transportation-lodging-page">
      <section className="tls-hero">
        <div className="tls-hero-inner">
          <p className="tls-eyebrow">Support Resources</p>
          <h1>Transportation &amp; Lodging Support</h1>
          <p>
            Explore transportation options for local and distant appointments, along with lodging
            resources and temporary housing guides.
          </p>
        </div>
      </section>

      <section className="tls-section">
        <div className="tls-card">
          <h2>Transportation to Local Appointments</h2>
          <ul className="tls-list">
            {localTransportation.map((resource) => (
              <li key={resource.title}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
                <p>{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tls-section">
        <div className="tls-card">
          <h2>Transportation to Distant Appointments</h2>
          <ul className="tls-list">
            {distantTransportation.map((resource) => (
              <li key={resource.title}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
                <p>{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tls-section">
        <div className="tls-card">
          <h2>Cancer Patient Lodging</h2>
          <ul className="tls-list">
            {lodgingResources.map((resource) => (
              <li key={resource.title}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
                <p>{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tls-section">
        <div className="tls-card">
          <h2>Sarcoma Center Temporary Lodging Guide</h2>
          <div className="tls-link-grid">
            {temporaryLodging.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tls-link-card"
              >
                <h3>{resource.title}</h3>
                <span>Visit resource</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
