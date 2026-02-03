import type { Metadata } from "next";
import Image from "next/image";
import "./survivorship-resource-information-2.css";

export const metadata: Metadata = {
  title: "Survivorship Resource Information | NLMSF",
  description:
    "Survivorship resource links, NCCN and ASCO guidance, and survivorship clinic listings.",
};

const keyResources = [
  {
    title: "NCCN Guidelines: Survivorship (Cancer-Related Late & Long-Term Effects)",
    url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-crl-patient.pdf",
  },
  {
    title: "NCCN Guidelines: Survivorship (Healthy Lifestyle)",
    url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-hl-patient.pdf",
  },
  {
    title: "Journal of the National Comprehensive Cancer Network (NCCN)",
    url: "https://jnccn.org/view/journals/jnccn/11/5S/article-p640.xml",
  },
  {
    title: "NCCS Care Planning Template",
    url: "https://canceradvocacy.org/an-updated-survivorship-care-planning-template-and-identifying-barriers-to-implementation/",
  },
  {
    title: "NCCS Survivorship Planning Checklist",
    url: "https://canceradvocacy.org/resources/survivorship-checklist/",
  },
  {
    title: "ASCO – Cancer.Net Survivorship Care Planning Guidance",
    url: "https://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco-cancer-treatment-and-survivorship-care-plans",
  },
  {
    title: "ASCO – Key Components of Survivorship Care",
    url: "https://www.asco.org/practice-policy/cancer-care-initiatives/prevention-survivorship/survivorship/survivorship",
  },
  {
    title: "Survivorship Care Reimbursement Information",
    url: "https://www.asco.org/practice-policy/cancer-care-initiatives/prevention-survivorship/survivorship/survivorship-8",
  },
  {
    title: "Additional Survivorship Guidance (After Treatment)",
    url: "https://nlmsf.org/after-treatment/",
  },
];

const clinicLinks = [
  {
    name: "Abramson Cancer Center",
    url: "https://www.pennmedicine.org/cancer/navigating-cancer-care/programs-and-centers/survivorship",
  },
  {
    name: "Brown Cancer Center (James Graham Brown)",
    url: "https://uoflbrowncancercenter.org/cancer-services/types-cancer/survivorship-clinic",
  },
  {
    name: "Catholic Medical Center – Be Well Center",
    url: "https://www.catholicmedicalcenter.org/care-and-treatment/cancer/cancer-support-services",
  },
  {
    name: "Cleveland Clinic – Taussig Cancer Institute",
    url: "https://consultqd.clevelandclinic.org/for-cancer-survivorship-programs-the-evidence-is-in/",
  },
  {
    name: "Dana Farber Cancer Institute",
    url: "https://www.curetoday.com/publications/cure/2008/fall2008/dana-farbers-survivorship-clinic",
  },
  {
    name: "Duke Cancer Institute",
    url: "http://www.dukecancerinstitute.org/supportive-care-survivorship",
  },
  {
    name: "Emory Winship Cancer Institute",
    url: "http://news.emory.edu/stories/2012/08/hspub_cancer_survivorship/campus.html",
  },
  {
    name: "Fox Chase Cancer Center",
    url: "https://www.foxchase.org/support/survivorship/survivor-clinics",
  },
  {
    name: "Fred Hutchinson Cancer Center",
    url: "https://www.gleauty.com/US/Seattle/161518560679744/Fred-Hutch-Survivorship-Program",
  },
  {
    name: "Hillman Cancer Center – University of Pittsburgh Medical Center",
    url: "https://hillman.upmc.com/patients/support-services",
  },
  {
    name: "James Cancer Center – Ohio State Comprehensive Cancer Center",
    url: "https://cancer.osu.edu/",
  },
  {
    name: "Johns Hopkins – Sidney Kimmel Comprehensive Cancer Center",
    url: "https://www.hopkinsmedicine.org/kimmel_cancer_center/centers/cancer_survivorship/index.html",
  },
  {
    name: "Knight Cancer Institute",
    url: "https://www.ohsu.edu/xd/health/services/cancer/patients/survivorship/survivorship-teams.cfm",
  },
  {
    name: "Levine Cancer Institute",
    url: "https://atriumhealth.org/medical-services/specialty-care/cancer-care/cancer-support-programs",
  },
  {
    name: "Mayo Clinic",
    url: "https://www.mayoclinic.org/departments-centers/oncology/cancer-survivorship-clinics/overview",
  },
  {
    name: "MD Anderson Cancer Center",
    url: "https://www.mdanderson.org/patients-family/life-after-cancer.html",
  },
  {
    name: "Memorial Sloan Kettering",
    url: "https://www.mskcc.org/hcp-education-training/survivorship/survivorship-care-plan",
  },
  {
    name: "Minnesota Oncology Survivorship Program",
    url: "https://mnoncology.com/for-patients/patient-resources/survivorship-program/",
  },
  {
    name: "Moffitt Cancer Center",
    url: "https://moffitt.org/treatments/cancer-survivorship-clinic/",
  },
  {
    name: "Montefiore Medical Center",
    url: "https://www.montefiore.org/follow-up-and-survivorship-services",
  },
  {
    name: "National Cancer Survivorship Center – American Cancer Society / George Washington Univ. Cancer Institute",
    url: "https://www.cancer.org/health-care-professionals/national-cancer-survivorship-resource-center.html",
  },
  {
    name: "Northside Hospital",
    url: "https://www.northside.com/cancer-institute/support-survivorship",
  },
  {
    name: "Robert H. Lurie Cancer Center/Survivorship Institute – Northwestern University",
    url: "https://www.cancer.northwestern.edu/cancer-care/survivorship/index.html",
  },
  {
    name: "Rogel Cancer Center – Michigan Medicine - Sarcoma Survivorship Program",
    url: "https://www.rogelcancercenter.org/sarcoma-survivorship",
  },
  {
    name: "Roswell Park Cancer Institute/Comprehensive Cancer Center",
    url: "https://www.roswellpark.org/survivorship",
  },
  {
    name: "Stanford Health Care",
    url: "https://stanfordhealthcare.org/medical-clinics/cancer-survivorship-program.html",
  },
  {
    name: "Sylvester Cancer Center",
    url: "https://umiamihealth.org/sylvester-comprehensive-cancer-center/survivorship-services",
  },
  {
    name: "UCLA Cancer Center",
    url: "https://www.simmsmanncenter.ucla.edu/center_events/ucla-livestrong-cancer-survivorship-center-of-excellence-update-for-survivors-of-childhood-and-adult-cancers/",
  },
  {
    name: "Tri-Cities Cancer Center",
    url: "https://tccancer.org/survivorship/",
  },
  {
    name: "University of Colorado Health Sciences Cancer Center",
    url: "http://www.ucdenver.edu/academics/colleges/medicalschool/centers/cancercenter/CancerCare/survivors/Pages/Survivorship.aspx",
  },
  {
    name: "University of Kansas Cancer Center",
    url: "https://www.kucancercenter.org/cancer/cancer-types/bone-cancer-sarcoma/bone-cancer-survivorship",
  },
  {
    name: "University of Maryland – Greenbaum Comprehensive Cancer Center",
    url: "https://www.nursing.umaryland.edu/academics/pe/events/cancer-survivorship/",
  },
  {
    name: "University of North Carolina – Lineberger Comprehensive Cancer Center",
    url: "https://unclineberger.org/ccsp/survivorship/",
  },
  {
    name: "University of Texas – Southwestern Medical Center",
    url: "https://utsouthwestern.pure.elsevier.com/en/publications/models-of-cancer-survivorship-health-care-moving-forward",
  },
  {
    name: "Vanderbilt-Ingram Cancer Center",
    url: "https://www.vanderbilthealth.com/cancer/51427",
  },
  {
    name: "Virginia Commonwealth University – Massey Cancer Center",
    url: "https://www.massey.vcu.edu/patient-care/survivorship/",
  },
  {
    name: "Wake Forest Baptist Health / Baptist Health – Clemmons",
    url: "https://www.wakehealth.edu/Locations/Facilities/Comprehensive-Cancer-Center/Cancer-Survivorship-Programs",
  },
  {
    name: "Yale Cancer Center – Yale School of Medicine",
    url: "https://www.yalecancercenter.org/patient/specialty/survivorship/",
  },
];

export default function SurvivorshipResourceInformationTwoPage() {
  return (
    <main className="survivorship-resource-two-page">
      <section className="sri-hero">
        <div className="sri-hero-inner">
          <div className="sri-logo">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2021/03/Cancer-Survivorship.jpg"
              alt="Cancer survivorship"
              width={200}
              height={200}
            />
          </div>
          <p className="sri-eyebrow">Survivorship Resources</p>
          <h1>Survivorship Resource Information</h1>
          <p>
            Guidance and trusted resources for survivorship care planning, including NCCN and ASCO
            links as well as survivorship clinic directories.
          </p>
        </div>
      </section>

      <section className="sri-section">
        <div className="sri-card">
          <h2>NCCN, ASCO, and Survivorship Resources</h2>
          <div className="sri-link-grid">
            {keyResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sri-link-card"
              >
                <h3>{resource.title}</h3>
                <span>Visit resource</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sri-section">
        <div className="sri-card">
          <h2>Clinic and Program Resources</h2>
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
          <div className="sri-clinic-grid">
            {clinicLinks.map((clinic) => (
              <a
                key={clinic.name}
                href={clinic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sri-clinic-card"
              >
                <h3>{clinic.name}</h3>
                <span>Visit program</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
