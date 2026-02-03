import type { Metadata } from "next";
import "./transportation-to-distantappointments.css";

export const metadata: Metadata = {
  title: "Transportation to Distant Appointments | NLMSF",
  description:
    "Resources for long-distance travel assistance and transportation support for cancer patients.",
};

const primaryResources = [
  {
    title: "AirCare Alliance (ACA)",
    description:
      "A national list of air carriers that assist cancer patients. Air Care Alliance provides the only site which lists all known volunteer pilot organizations flying for the public benefit.",
    url: "https://www.aircarealliance.org/getting-assistance/directory-of-groups/",
  },
  {
    title: "Air Charity Network",
    description:
      "Serves all 50 states and volunteer pilots utilize their own aircraft, fuel, and time to provide free air transportation to medical facilities for citizens who are financially distressed.",
    url: "http://aircharitynetwork.org/",
  },
];

const angelAirlines = [
  {
    title: "Angel Flight East (AFE)",
    description:
      "Volunteer pilots use their own aircraft to take children and adults (for free) seeking medical treatment far from home.",
  },
  {
    title: "Angel Flight Northeast",
    description:
      "A 501(c)3 non-profit organization honored to serve courageous patients and their families who have an incredible will to live.",
    url: "http://www.angelflightne.org/",
  },
];

const additionalResources = [
  {
    title: "Cancer Care Services - Transportation Assistance",
    description: "Information on transportation assistance for cancer patients.",
    url: "https://cancercareservices.org/resources/transportation-assistance-for-cancer-patients/",
  },
  {
    title: "Cancer DriveLine Society (Vancouver Island only)",
    description: "Community Resource Hub link for Cancer DriveLine Society.",
    url: "https://onlineacademiccommunity.uvic.ca/communityresourcehub/2021/05/25/cancer-driveline-society/",
  },
  {
    title: "Corporate Angel Network",
    description:
      "Arranges free travel on corporate jets for cancer patients, bone marrow donors and bone marrow recipients. Call (914) 328-1313 to register within three weeks of a specific appointment at a recognized cancer treatment center.",
    url: "http://www.corpangelnetwork.org/#/home",
  },
  {
    title: "LifeLine Pilots (LLP)",
    description:
      "Facilitates free transportation for ongoing medical treatments, diagnosis and follow-up care.",
    url: "https://lifelinepilots.org/",
  },
  {
    title: "Mercy Medical Angels",
    description:
      "Provides free transportation nationwide to and from medical care for qualifying in-need individuals and their families.",
    url: "https://www.mercymedical.org/",
  },
  {
    title: "Patient Airlift Services (PALS)",
    description:
      "Comprehensive air and ground door-to-door transportation assistance across 43 states with a volunteer pilot team.",
  },
  {
    title: "Sarcoma OMA Foundation",
    description:
      "Provides travel-related financial assistance to patients seeking sarcoma-related medical care.",
  },
  {
    title: "Southwest Airlines Medical Transportation Grant Program",
    description:
      "Offers complimentary roundtrip tickets to nonprofit hospitals and medical transportation organizations. Contact the hospital social worker, travel concierge, or patient assistance department. Contact 214-792-1300.",
    url: "https://www.southwest.com/html/southwest-difference/community-involvement/charities/medical_transportation.html",
  },
  {
    title: "Transportation Support Services",
    description:
      "Support services may include help with air and ground transportation for medical care, emotional support, help with returning to work, or financial assistance for child care and other needs.",
    url: "https://www.livestrong.org/we-can-help/planning-medical-care/transportation-and-other-cancer-support-services",
  },
];

export default function TransportationToDistantAppointmentsPage() {
  return (
    <main className="distant-transport-page">
      <section className="dt-hero">
        <div className="dt-hero-inner">
          <p className="dt-eyebrow">Travel Assistance</p>
          <h1>Transportation to Distant Appointments</h1>
          <p>
            Long-distance travel for medical care can be overwhelming. Explore air and ground
            transportation resources that help patients reach specialized care when appointments
            are far from home.
          </p>
        </div>
      </section>

      <section className="dt-section">
        <div className="dt-card">
          <h2>Transportation to Distant Appointments</h2>
          <div className="dt-grid">
            {primaryResources.map((resource) => (
              <div key={resource.title} className="dt-resource">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  Visit resource
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dt-section">
        <div className="dt-card">
          <h2>Angel Airlines for Cancer Patients</h2>
          <p className="dt-intro">
            These programs focus on connecting patients with volunteer pilot networks or regional
            flight assistance.
          </p>
          <div className="dt-grid">
            {angelAirlines.map((resource) => (
              <div key={resource.title} className="dt-resource">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                {resource.url ? (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visit resource
                  </a>
                ) : (
                  <span className="dt-muted">Contact for availability</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dt-section">
        <div className="dt-card">
          <h2>Additional Transportation Resources</h2>
          <div className="dt-list">
            {additionalResources.map((resource) => (
              <div key={resource.title} className="dt-list-item">
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
                {resource.url ? (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                ) : (
                  <span className="dt-muted">Contact for details</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
