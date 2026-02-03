import type { Metadata } from "next";
import Image from "next/image";
import "./survivorship-resources-2.css";

export const metadata: Metadata = {
  title: "Survivorship Resources | NLMSF",
  description:
    "Guidelines, planning tools, and survivorship resources from leading cancer centers.",
};

const nccnResources = [
  {
    title: "Survivorship Care for Cancer Related Late and Long-Term Effects",
    description:
      "Comprehensive guidelines from the National Comprehensive Cancer Network for managing late and long-term effects of cancer treatment.",
    url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-crl-patient.pdf",
    cta: "Access Guidelines PDF",
  },
  {
    title: "Survivorship Care for Healthy Living",
    description: "NCCN guidelines focused on maintaining health and wellness after cancer treatment.",
    url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-hl-patient.pdf",
    cta: "Access Guidelines PDF",
  },
  {
    title: "NCCN Guidelines for Survivorship Care (May 2013)",
    description: "Published in the Journal of the National Comprehensive Cancer Network.",
    url: "https://jnccn.org/view/journals/jnccn/11/5S/article-p640.xml",
    cta: "View Journal Article",
  },
];

const ascoResources = [
  {
    title: "Cancer.Net Survivorship Care Planning Guidance",
    description: "ASCO guidance and video resources for survivorship care planning.",
    url: "https://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco-cancer-treatment-and-survivorship-care-plans",
    cta: "View Planning Resources",
  },
];

const nccsResources = [
  {
    title: "An Updated Survivorship Care Planning Template",
    description:
      "NCCS resource on survivorship care planning templates and implementation strategies.",
    url: "https://canceradvocacy.org/an-updated-survivorship-care-planning-template-and-identifying-barriers-to-implementation/",
    cta: "Read More",
  },
  {
    title: "Cancer Survivorship Checklist",
    description:
      "NCCS survivorship planning checklist to help organize care after treatment.",
    url: "https://canceradvocacy.org/resources/survivorship-checklist/",
    cta: "Access Checklist",
  },
  {
    title: "NCCN Member Institutions",
    description:
      "A list of NCCN's 33 leading cancer centers across the USA devoted to patient care, research, and education.",
    url: "https://www.nccn.org/home/member-institutions",
    cta: "View Member Institutions",
  },
];

const cancerCenters = [
  {
    name: "Abramson Cancer Center",
    location: "Penn Med, Philadelphia, PA",
    url: "https://www.pennmedicine.org/cancer/navigating-cancer-care/programs-and-centers/survivorship",
  },
  {
    name: "Brown Cancer Center",
    location: "James Graham Brown",
    url: "https://uoflbrowncancercenter.org/cancer-services/types-cancer/survivorship-clinic",
  },
  {
    name: "Catholic Medical Center",
    location: "Manchester, NH",
    url: "https://www.catholicmedicalcenter.org/care-and-treatment/cancer/cancer-support-services",
  },
  {
    name: "Cleveland Clinic - Taussig Cancer Institute",
    location: "Cleveland, OH",
    url: "https://consultqd.clevelandclinic.org/for-cancer-survivorship-programs-the-evidence-is-in/",
  },
  {
    name: "Dana Farber Cancer Institute",
    location: "Boston, MA",
    url: "https://www.curetoday.com/publications/cure/2008/fall2008/dana-farbers-survivorship-clinic",
  },
  {
    name: "Duke Cancer Institute",
    location: "Durham, NC",
    url: "http://www.dukecancerinstitute.org/supportive-care-survivorship",
  },
  {
    name: "Emory Winship Cancer Institute",
    location: "Atlanta, GA",
    url: "http://news.emory.edu/stories/2012/08/hspub_cancer_survivorship/campus.html",
  },
  {
    name: "Fox Chase Cancer Center",
    location: "Philadelphia, PA",
    url: "https://www.foxchase.org/support/survivorship",
  },
  {
    name: "Fred Hutchinson Cancer Center",
    location: "Seattle, WA",
    url: "https://www.gleauty.com/US/Seattle/161518560679744/Fred-Hutch-Survivorship-Program",
  },
  {
    name: "Hillman Cancer Center",
    location: "UPMC, Pittsburgh, PA",
    url: "https://hillman.upmc.com/patients/support-services",
  },
  {
    name: "James Cancer Center",
    location: "Ohio State University, Columbus, OH",
    url: "https://cancer.osu.edu/",
  },
  {
    name: "Johns Hopkins - Sidney Kimmel Comprehensive Cancer Center",
    location: "Baltimore, MD",
    url: "https://www.hopkinsmedicine.org/kimmel_cancer_center/centers/cancer_survivorship/index.html",
  },
  {
    name: "Knight Cancer Institute",
    location: "Portland, OR",
    url: "https://www.ohsu.edu/xd/health/services/cancer/patients/survivorship/survivorship-teams.cfm",
  },
  {
    name: "Levine Cancer Institute",
    location: "Atrium Health, Charlotte, NC",
    url: "https://atriumhealth.org/medical-services/specialty-care/cancer-care/cancer-support-programs",
  },
  {
    name: "Mayo Clinic",
    location: "Rochester, MN; Scottsdale, AZ; Jacksonville, FL",
    url: "https://www.mayoclinic.org/departments-centers/oncology/cancer-survivorship-clinics/overview",
  },
  {
    name: "MD Anderson Cancer Center",
    location: "Houston, TX",
    url: "https://www.mdanderson.org/patients-family/life-after-cancer.html",
  },
  {
    name: "Memorial Sloan Kettering",
    location: "New York, NY",
    url: "https://www.mskcc.org/hcp-education-training/survivorship/survivorship-care-plan",
  },
  {
    name: "Minnesota Oncology Survivorship Program",
    location: "Twin Cities, MN",
    url: "https://mnoncology.com/for-patients/patient-resources/survivorship-program/",
  },
  {
    name: "Moffitt Cancer Center",
    location: "Tampa, FL",
    url: "https://moffitt.org/treatments/cancer-survivorship-clinic/",
  },
  {
    name: "Montefiore Einstein Medical Center",
    location: "Bronx, NY",
    url: "https://www.montefiore.org/follow-up-and-survivorship-services",
  },
  {
    name: "National Cancer Survivorship Center",
    location: "ACS/GW Cancer Institute",
    url: "https://www.cancer.org/health-care-professionals/national-cancer-survivorship-resource-center.html",
  },
  {
    name: "Northside Hospital",
    location: "Atlanta, GA",
    url: "https://www.northside.com/cancer-institute/support-survivorship",
  },
  {
    name: "Robert H. Lurie Cancer Center/Survivorship Institute",
    location: "Northwestern University, Chicago, IL",
    url: "https://www.cancer.northwestern.edu/cancer-care/survivorship/index.html",
  },
  {
    name: "Rogel Cancer Center",
    location: "University of Michigan, Ann Arbor, MI",
    url: "https://www.rogelcancercenter.org/sarcoma-survivorship",
  },
  {
    name: "Roswell Park Cancer Institute",
    location: "Buffalo, NY",
    url: "https://www.roswellpark.org/survivorship",
  },
  {
    name: "Stanford Health Care",
    location: "Stanford, CA",
    url: "https://stanfordhealthcare.org/medical-clinics/cancer-survivorship-program.html",
  },
  {
    name: "Sylvester Cancer Center",
    location: "Miami, FL",
    url: "https://umiamihealth.org/sylvester-comprehensive-cancer-center/survivorship-services",
  },
  {
    name: "UCLA Cancer Center",
    location: "Los Angeles, CA",
    url: "https://www.simmsmanncenter.ucla.edu/center_events/ucla-livestrong-cancer-survivorship-center-of-excellence-update-for-survivors-of-childhood-and-adult-cancers/",
  },
  {
    name: "Tri-Cities Cancer Center",
    location: "Kennewick, WA",
    url: "https://tccancer.org/survivorship/",
  },
  {
    name: "University of Colorado Health Sciences Cancer Center",
    location: "Aurora, CO",
    url: "http://www.ucdenver.edu/academics/colleges/medicalschool/centers/cancercenter/CancerCare/survivors/Pages/Survivorship.aspx",
  },
  {
    name: "University of Kansas Cancer Center",
    location: "Westwood, KS",
    url: "https://www.kucancercenter.org/cancer/cancer-types/bone-cancer-sarcoma/bone-cancer-survivorship",
  },
  {
    name: "University of Maryland - Greenbaum Comprehensive Cancer Center",
    location: "Baltimore, MD",
    url: "https://www.nursing.umaryland.edu/academics/pe/events/cancer-survivorship/",
  },
  {
    name: "University of North Carolina - Lineberger Comprehensive Cancer Center",
    location: "Chapel Hill, NC",
    url: "https://unclineberger.org/ccsp/survivorship/",
  },
  {
    name: "University of Texas - Southwestern Medical Center",
    location: "Dallas, TX",
    url: "https://utsouthwestern.pure.elsevier.com/en/publications/models-of-cancer-survivorship-health-care-moving-forward",
  },
  {
    name: "Vanderbilt-Ingram Cancer Center",
    location: "Nashville, TN",
    url: "https://www.vanderbilthealth.com/cancer/51427",
  },
  {
    name: "Virginia Commonwealth University - Massey Cancer Center",
    location: "Richmond, VA",
    url: "https://www.massey.vcu.edu/patient-care/survivorship/",
  },
  {
    name: "Wake Forest Baptist Health / Atrium Health",
    location: "Winston-Salem, NC",
    url: "https://www.wakehealth.edu/Locations/Facilities/Comprehensive-Cancer-Center/Cancer-Survivorship-Programs",
  },
  {
    name: "Yale Cancer Center",
    location: "Yale School of Medicine, New Haven, CT",
    url: "https://www.yalecancercenter.org/patient/specialty/survivorship/",
  },
];

export default function SurvivorshipResourcesTwoPage() {
  return (
    <main className="survivorship-resources-two-page">
      <section className="sr2-hero">
        <div className="sr2-badge-container">
          <div className="sr2-badge">
            <span className="sr2-badge-icon" aria-hidden="true" />
            <span>Resources</span>
          </div>
        </div>
        <h1 className="sr2-hero-title">Survivorship Resources</h1>
        <p className="sr2-hero-description">
          Access vital resources to help navigate the cancer survivorship journey, including
          guidelines, planning tools, and support from leading cancer centers nationwide.
        </p>
        <div className="sr2-feature-tags">
          <span className="sr2-feature-tag">NCCN Guidelines</span>
          <span className="sr2-feature-tag">NCCS Guidance</span>
          <span className="sr2-feature-tag">Survivorship Planning</span>
          <span className="sr2-feature-tag">Cancer Center Resources</span>
        </div>
      </section>

      <section className="sr2-layout">
        <aside className="sr2-sidebar">
          <div className="sr2-sidebar-section">
            <h3 className="sr2-sidebar-title">
              <span className="sr2-sidebar-icon" aria-hidden="true" />
              Page Navigation
            </h3>
            <ul className="sr2-nav-links">
              <li>
                <a href="#nccn-guidelines" className="sr2-nav-link">
                  <span className="sr2-nav-icon purple" aria-hidden="true" />
                  NCCN Guidelines
                </a>
              </li>
              <li>
                <a href="#nccs-resources" className="sr2-nav-link">
                  <span className="sr2-nav-icon teal" aria-hidden="true" />
                  NCCS Resources
                </a>
              </li>
              <li>
                <a href="#asco-resources" className="sr2-nav-link">
                  <span className="sr2-nav-icon blue" aria-hidden="true" />
                  ASCO Resources
                </a>
              </li>
              <li>
                <a href="#cancer-centers" className="sr2-nav-link">
                  <span className="sr2-nav-icon green" aria-hidden="true" />
                  Cancer Centers
                </a>
              </li>
              <li>
                <a href="https://nlmsf.org/after-treatment/" className="sr2-nav-link">
                  <span className="sr2-nav-icon amber" aria-hidden="true" />
                  After Treatment
                </a>
              </li>
            </ul>
          </div>

          <div className="sr2-sidebar-cta">
            <h4>Need Personal Guidance?</h4>
            <p>Our team can help connect you with survivorship resources tailored to your needs.</p>
            <a href="/contact" className="sr2-cta-button">
              Contact Us
            </a>
          </div>
        </aside>

        <div className="sr2-content-container">
          <div className="sr2-survivors-banner">
            <Image
              src="https://nlsmf.org/wp-content/uploads/2025/08/EmpoweringSurvivors.png"
              alt="Empowering Survivors"
              className="sr2-banner-image"
              width={300}
              height={150}
            />
            <Image
              src="https://nlsmf.org/wp-content/uploads/2025/08/empoweringSurvivorsButterfly.png"
              alt="Empowering Survivors Butterfly"
              className="sr2-banner-image"
              width={300}
              height={150}
            />
          </div>

          <div className="sr2-section-header">
            <h2>Resources for Cancer Survivorship</h2>
            <p>
              Access comprehensive guidelines, planning tools, and support resources to help
              navigate life after cancer treatment.
            </p>
          </div>

          <div className="sr2-resources-grid">
            <div className="sr2-resource-column" id="nccn-guidelines">
              <div className="sr2-resource-section">
                <h3 className="sr2-resource-section-title">NCCN Guidelines in Survivorship Care</h3>
                <ul className="sr2-resource-list">
                  {nccnResources.map((resource) => (
                    <li key={resource.title} className="sr2-resource-item">
                      <div className="sr2-resource-title">{resource.title}</div>
                      <div className="sr2-resource-description">{resource.description}</div>
                      <a
                        href={resource.url}
                        className="sr2-resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.cta}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sr2-resource-section" id="asco-resources">
                <h3 className="sr2-resource-section-title">ASCO Survivorship Resources</h3>
                <ul className="sr2-resource-list">
                  {ascoResources.map((resource) => (
                    <li key={resource.title} className="sr2-resource-item">
                      <div className="sr2-resource-title">{resource.title}</div>
                      <div className="sr2-resource-description">{resource.description}</div>
                      <a
                        href={resource.url}
                        className="sr2-resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.cta}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sr2-resource-column" id="nccs-resources">
              <div className="sr2-resource-section">
                <h3 className="sr2-resource-section-title">
                  National Coalition For Cancer Survivorship Resources
                </h3>
                <div className="sr2-resource-logo">
                  <Image
                    src="https://nlsmf.org/wp-content/uploads/2025/06/1749690111357blob.png"
                    alt="NCCS logo"
                    width={220}
                    height={120}
                  />
                </div>
                <ul className="sr2-resource-list">
                  {nccsResources.map((resource) => (
                    <li key={resource.title} className="sr2-resource-item">
                      <div className="sr2-resource-title">{resource.title}</div>
                      <div className="sr2-resource-description">{resource.description}</div>
                      <a
                        href={resource.url}
                        className="sr2-resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.cta}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sr2-note-box">
            <p>
              For additional resource guidance and information, visit the second section in the
              Survivorship webpage:{" "}
              <a href="https://nlmsf.org/after-treatment/" target="_blank" rel="noopener noreferrer">
                After Treatment
              </a>
              .
            </p>
          </div>

          <div className="sr2-section-header" id="cancer-centers">
            <h2>Cancer Centers with Survivorship Programs</h2>
            <p>
              The 2016 Commission on Cancer Program Standards required accredited cancer centers to
              deliver treatment summaries and care plans to an increasing percentage of patients. An
              overview of care plans can be found at{" "}
              <a
                href="https://blueprintsofhope.org/survivorship-care-plan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blueprints of Hope
              </a>
              .
            </p>
            <p className="sr2-note-inline">
              This is not an all-inclusive list. Check with your cancer treatment center regarding
              their survivorship care resources.
            </p>
          </div>

          <div className="sr2-centers-grid">
            {cancerCenters.map((center) => (
              <div key={center.name} className="sr2-center-card">
                <div className="sr2-center-name">{center.name}</div>
                <div className="sr2-center-location">{center.location}</div>
                <a
                  href={center.url}
                  className="sr2-center-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Survivorship Program
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
