import type { Metadata } from "next";
import "./survivorship-3.css";

export const metadata: Metadata = {
  title: "Survivorship Guidance | NLMSF",
  description:
    "Survivorship guidance, resources, care planning links, and clinics at sarcoma centers of excellence.",
};

const tips = [
  "Prioritize self-care: allocate time for yourself, join a support group, or talk with a counselor.",
  "Seek meaning in the cancer journey: reevaluate life, discover new purposes, and find value in the experience.",
  "Educate yourself about compassion fatigue and reach out for support.",
  "Establish emotional boundaries and maintain healthy balance.",
  "Pursue outside interests and hobbies beyond the caregiving role.",
  "Maintain a gratitude journal and reflect on positives.",
  "Develop resilience and acknowledge imperfections.",
  "Express your emotions and ask for help managing family conflicts.",
  "Prioritize your time and focus on what matters most.",
  "Acknowledge your best efforts and remember you’re doing your best.",
  "Reflect in solitude to process your emotions.",
  "Request assistance with tasks; you don’t have to be the expert.",
  "Involve teens and children so they can contribute and feel included.",
];

const survivorshipResources = [
  {
    title: "NCCN Guidelines for Survivorship Care",
    links: [
      {
        label: "Survivorship (Cancer-Related Late & Long-Term Effects)",
        url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-crl-patient.pdf",
      },
      {
        label: "Survivorship (Healthy Lifestyle)",
        url: "https://www.nccn.org/patients/guidelines/content/PDF/survivorship-hl-patient.pdf",
      },
    ],
  },
  {
    title: "Journal of the National Comprehensive Cancer Network (NCCN)",
    links: [
      {
        label: "JNCCN article",
        url: "https://jnccn.org/view/journals/jnccn/11/5S/article-p640.xml",
      },
    ],
  },
  {
    title: "National Coalition for Cancer Survivorship Care Planning (NCCS)",
    links: [
      {
        label: "Updated survivorship care planning template",
        url: "https://canceradvocacy.org/an-updated-survivorship-care-planning-template-and-identifying-barriers-to-implementation/",
      },
      {
        label: "Survivorship planning checklist",
        url: "https://canceradvocacy.org/resources/survivorship-checklist/",
      },
    ],
  },
  {
    title: "ASCO – Cancer.Net Survivorship Care Planning Guidance",
    links: [
      {
        label: "Follow-up care after cancer treatment",
        url: "https://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco-cancer-treatment-and-survivorship-care-plans",
      },
      {
        label: "Key Components of Survivorship Care",
        url: "https://www.asco.org/practice-policy/cancer-care-initiatives/prevention-survivorship/survivorship",
      },
      {
        label: "Survivorship Care Reimbursement Information",
        url: "https://www.asco.org/practice-policy/cancer-care-initiatives/prevention-survivorship/survivorship/survivorship-8",
      },
    ],
  },
  {
    title: "Additional NLMSF Resources",
    links: [
      {
        label: "Survivorship resources (After Treatment)",
        url: "https://nlmsf.org/after-treatment/",
      },
      {
        label: "Blueprints of Hope care plan resources",
        url: "https://www.blueprintsofhope.org",
      },
    ],
  },
];

const clinics = [
  { name: "Abramson Cancer Center", url: "https://www.pennmedicine.org/cancer/navigating-cancer-care/programs-and-centers/survivorship" },
  { name: "Brown Cancer Center (James Graham Brown)", url: "https://uoflhealth.org/locations/brown-cancer-center" },
  { name: "Catholic Medical Center – Be Well Center", url: "https://www.catholicmedicalcenter.org/care-and-treatment/cancer/cancer-support-services" },
  { name: "Cleveland Clinic – Taussig Cancer Institute", url: "https://consultqd.clevelandclinic.org/for-cancer-survivorship-programs-the-evidence-is-in/" },
  { name: "Dana Farber Cancer Institute", url: "https://www.curetoday.com/view/dana-farbers-survivorship-clinic" },
  { name: "Duke Cancer Institute", url: "https://www.curetoday.com/view/dana-farbers-survivorship-clinic" },
  { name: "Emory Winship Cancer Institute", url: "https://news.emory.edu/stories/2012/08/hspub_cancer_survivorship/campus.html" },
  { name: "Fox Chase Cancer Center", url: "https://www.foxchase.org/support/survivorship/survivor-clinics" },
  { name: "Fred Hutchinson Cancer Center", url: "https://www.fredhutch.org/en/patient-care/survivorship-programs.html" },
  { name: "Hillman Cancer Center – UPMC", url: "https://hillman.upmc.com/patients/support-services" },
  { name: "James Cancer Center – Ohio State", url: "https://cancer.osu.edu/" },
  { name: "Johns Hopkins – Sidney Kimmel Comprehensive Cancer Center", url: "https://www.hopkinsmedicine.org/kimmel-cancer-center" },
  { name: "Knight Cancer Institute", url: "https://www.ohsu.edu/knight-cancer-institute/cancer-survivorship-teams" },
  { name: "Levine Cancer Institute", url: "https://atriumhealth.org/medical-services/specialty-care/cancer-care/cancer-support-programs" },
  { name: "Mayo Clinic", url: "https://www.mayoclinic.org/departments-centers/oncology/cancer-survivorship-clinics/overview" },
  { name: "MD Anderson Cancer Center", url: "https://www.mdanderson.org/patients-family/life-after-cancer.html" },
  { name: "Memorial Sloan Kettering", url: "https://www.mskcc.org/hcp-education-training/survivorship/survivorship-care-plan" },
  { name: "Minnesota Oncology Survivorship Program", url: "https://mnoncology.com/for-patients/patient-resources/survivorship-program/" },
  { name: "Moffitt Cancer Center", url: "https://www.moffitt.org/patient-family/cancer-survivorship/cancer-survivorship-program" },
  { name: "Montefiore Medical Center", url: "https://www.cancer.montefioreeinstein.org/navigating-care/support/survivorship" },
  { name: "National Cancer Survivorship Center (ACS/GW)", url: "https://www.cancer.org/health-care-professionals/national-cancer-survivorship-resource-center.html" },
  { name: "Northside Hospital", url: "https://www.northside.com/services/cancer-institute/support-and-survivorship" },
  { name: "Robert H. Lurie Cancer Center – Northwestern", url: "https://www.cancer.northwestern.edu/cancer-care/survivorship/index.html" },
  { name: "Rogel Cancer Center – Michigan Medicine", url: "https://www.rogelcancercenter.org/sarcoma-survivorship" },
  { name: "Roswell Park Comprehensive Cancer Center", url: "https://www.roswellpark.org/survivorship" },
  { name: "Stanford Health Care", url: "https://stanfordhealthcare.org/medical-clinics/cancer-survivorship-program.html" },
  { name: "Sylvester Cancer Center", url: "https://umiamihealth.org/sylvester-comprehensive-cancer-center/survivorship-services" },
  { name: "UCLA Cancer Center", url: "https://www.simmsmanncenter.ucla.edu/center_events/ucla-livestrong-cancer-survivorship-center-of-excellence-update-for-survivors-of-childhood-and-adult-cancers/" },
  { name: "Tri-Cities Cancer Center", url: "https://www.providence.org/locations/kadlec/tri-cities-cancer-center" },
  { name: "University of Colorado Health Sciences Cancer Center", url: "https://medschool.cuanschutz.edu/colorado-cancer-center" },
  { name: "University of Kansas Cancer Center", url: "https://www.kucancercenter.org/cancer/cancer-types/bone-cancer-sarcoma/bone-cancer-survivorship" },
  { name: "University of Maryland – Greenbaum Comprehensive Cancer Center", url: "https://www.nursing.umaryland.edu/academics/pe/events/cancer-survivorship/" },
  { name: "University of North Carolina – Lineberger Comprehensive Cancer Center", url: "https://unclineberger.org/survivorship/" },
  { name: "University of Texas – Southwestern Medical Center", url: "https://utsouthwestern.elsevierpure.com/en/publications/models-of-cancer-survivorship-health-care-moving-forward" },
  { name: "Vanderbilt-Ingram Cancer Center", url: "https://www.vanderbilthealth.com/service-line/cancer-care" },
  { name: "Virginia Commonwealth University – Massey Cancer Center", url: "" },
  { name: "Wake Forest Baptist Health – Baptist Health Clemmons", url: "https://www.wakehealth.edu/locations/facilities/comprehensive-cancer-center/cancer-survivorship-programs" },
  { name: "Yale Cancer Center – Yale School of Medicine", url: "https://www.yalecancercenter.org/patient/specialty/survivorship/" },
];

export default function SurvivorshipThreePage() {
  return (
    <main className="survivorship-three-page">
      <section className="s3-hero">
        <div className="s3-hero-inner">
          <p className="s3-eyebrow">Survivorship</p>
          <h1>Co‑Survivors: Patients and Caregivers, United as a Team in the Fight</h1>
          <p>
            Co‑Survivors can be classified into two categories: those who act out of pity and sorrow
            may elicit sympathy but can neglect their own well‑being and risk compassion fatigue;
            those who act out of compassion recognize the importance of self‑care alongside caring
            for others and are driven by empathy.
          </p>
        </div>
      </section>

      <section className="s3-section">
        <div className="s3-card">
          <h2>Tips for Co‑Survivors</h2>
          <ul className="s3-list">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="s3-section">
        <div className="s3-quote">
          “How well people manage their lives marked by illness depends not on the nature of the
          illness, but on the strength of their conviction that life is worth living no matter what
          complications are imposed on it.”
        </div>
      </section>

      <section className="s3-section">
        <div className="s3-card">
          <h2>Survivorship Care Planning Resources</h2>
          <div className="s3-resource-grid">
            {survivorshipResources.map((group) => (
              <div key={group.title} className="s3-resource-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s3-section">
        <div className="s3-card">
          <h2>Survivorship Care Clinics at Sarcoma Centers of Excellence</h2>
          <div className="s3-clinic-grid">
            {clinics.map((clinic) => (
              <div key={clinic.name} className="s3-clinic-card">
                <h3>{clinic.name}</h3>
                {clinic.url ? (
                  <a href={clinic.url} target="_blank" rel="noopener noreferrer">
                    Visit program
                  </a>
                ) : (
                  <span className="s3-muted">Link not available</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
