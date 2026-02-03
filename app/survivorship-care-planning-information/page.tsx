import type { Metadata } from "next";
import "./survivorship-care-planning-information.css";

export const metadata: Metadata = {
  title: "Survivorship Care Planning Information | NLMSF",
  description:
    "Survivorship care planning information and a directory of survivorship care clinics.",
};

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

export default function SurvivorshipCarePlanningInformationPage() {
  return (
    <main className="survivorship-info-page">
      <section className="sip-hero">
        <div className="sip-hero-inner">
          <p className="sip-eyebrow">Survivorship Care Planning</p>
          <h1>Survivorship Care Planning Information</h1>
          <p>
            The 2016 Commission on Cancer Program Standards required accredited cancer centers to
            deliver treatment summaries and care plans to an increasing percentage of patients.
            An overview of care plans can be found at{" "}
            <a
              href="https://blueprintsofhope.org/survivorship-care-plan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueprints of Hope
            </a>
            .
          </p>
        </div>
      </section>

      <section className="sip-section">
        <div className="sip-card">
          <h2>Clinic and Program Resources</h2>
          <p>
            The following list provides survivorship care clinic and program resources for patients
            and caregivers.
          </p>
          <div className="sip-grid">
            {clinicLinks.map((clinic) => (
              <a
                key={clinic.name}
                href={clinic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sip-link-card"
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
