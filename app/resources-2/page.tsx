import type { Metadata } from "next";
import "./resources-2.css";

export const metadata: Metadata = {
  title: "Financial Assistance Resources | NLMSF",
  description:
    "Financial assistance resources, insurance guidance, and support organizations for cancer patients and caregivers.",
};

const keyTopics = [
  "Co-Pay Relief Program",
  "Government Programs",
  "Public and Nonprofit Hospitals",
  "Patient Assistant Programs",
  "Voluntary Organizations",
  "Personal Financial Planning",
  "Health Insurance Guidance",
  "Your Community",
];

const cfacOrganizations = [
  "American Cancer Society",
  "CancerCare",
  "CancerCare Co-Payment Assistance Foundation",
  "HealthWell Foundation",
  "Patient Access Network Foundation",
  "Patient Services Incorporated",
  "National Organization for Rare Disease",
  "Sarcoma Alliance (second opinion stipends)",
  "The Max Foundation",
];

const insuranceOptions = [
  {
    title: "State Health Insurance Marketplaces",
    description:
      "Find plans and possible financial assistance at HealthCare.gov.",
    link: "https://www.healthcare.gov/",
  },
  {
    title: "Medicare",
    description:
      "Federal health insurance program for eligible individuals, including those 65+ or receiving SSDI.",
    link: "https://www.medicare.gov/",
  },
  {
    title: "Medicaid",
    description:
      "State-administered federal program with eligibility that varies by state.",
    link: "https://www.medicaid.gov/",
  },
  {
    title: "COBRA",
    description:
      "Continue employer coverage after a qualifying event such as job loss.",
    link: "https://www.dol.gov/ebsa/COBRA.html",
  },
  {
    title: "Veterans Health Care",
    description: "Health care options through the Veterans Administration.",
    link: "https://www.va.gov/health",
  },
];

const insuranceSupportLinks = [
  {
    label: "ACS Health Insurance Assistance Service: 1-800-ACS-2345",
    link: "tel:+18002272345",
  },
  {
    label: "Triage Cancer Health Care Options Tool",
    link: "http://triagecancer.org/services/health-care-options/",
  },
  {
    label: "HealthCare.gov",
    link: "https://www.healthcare.gov/",
  },
];

const additionalResources = [
  {
    title: "Patient Guide: Managing the Cost of Cancer Care",
    description:
      "Cancer.net patient guide to financial help published by ASCO.",
    link: "https://www.cancer.net/sites/cancer.net/files/asco_answers_guide_caregiving.pdf",
  },
  {
    title: "Guide to Paying for Cancer Treatments",
    description:
      "The Simple Dollar guide on paying for cancer treatments, personal loans, and HSAs.",
    link: "https://www.thesimpledollar.com/paying-for-cancer-treatments-personal-loans/",
  },
  {
    title: "Dream Foundation",
    description:
      "Grants final dreams to adults with life-threatening illnesses.",
    link: "https://www.dreamfoundation.org/",
  },
  {
    title: "CFAC Coalition",
    description:
      "Coalition of organizations helping patients with financial challenges.",
    link: "http://www.cancerfac.org/",
  },
];

const insuranceChecklist = [
  "Read your insurance policy before chemotherapy and clarify coverage.",
  "Discuss costs with your oncologist and compare treatment options.",
  "Open, review, and file bills and insurance notices immediately.",
  "Pay COBRA premiums in full and on time.",
  "Track expenses and claims by category (submitted, paid).",
  "Pay by check and keep records with related bills.",
  "Ask if a case manager can be assigned to help coordinate care.",
];

const denialSteps = [
  "Resubmit claims and keep copies of all paperwork.",
  "Record names, dates, and conversation details with insurers.",
  "Ask your doctor’s billing office for help with disputes.",
  "Request supporting studies for treatments or medications.",
  "Contact a social worker or nurse on your care team for help.",
  "Consider external appeals and state consumer assistance programs.",
];

export default function Resources2Page() {
  return (
    <main className="resources-2-page">
      <section className="r2-hero">
        <div className="r2-hero-inner">
          <p className="r2-hero-kicker">Financial Assistance</p>
          <h1>Financial Assistance Resources</h1>
          <p>
            The Cancer Financial Assistance Coalition (CFAC) is a consortium of organizations that
            help patients manage financial challenges that can emerge as a result of a cancer
            diagnosis.
          </p>
          <a
            href="https://youtube.com/watch?time_continue=1&v=P5tsdOm-U0I&embeds_referring_euri=https%3A%2F%2Fnlmsf.org%2F&source_ve_path=Mjg2NjY"
            target="_blank"
            rel="noopener noreferrer"
            className="r2-hero-button"
          >
            Watch the CFAC Video
          </a>
        </div>
      </section>

      <section className="r2-section">
        <h2>Overview</h2>
        <p>
          Patient Advocacy/Support organizations, such as Sarcoma Alliance, offer financial
          assistance or reimbursement for certain expenses connected to second opinion medical
          appointments—up to $500 upon meeting eligibility requirements. Advocacy support
          organizations may offer various programs and services to assist with cancer care expenses.
          Organizations offer different types of assistance with their own eligibility/regulatory
          parameters. Additionally, there is no guarantee that funds would always be available.
          Funds are limited and the amount of funding varies, therefore each should be contacted for
          specific information.
        </p>
        <div className="r2-pill-grid">
          {keyTopics.map((topic) => (
            <span key={topic} className="r2-pill">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="r2-section">
        <h2>CFAC Coalition Organizations</h2>
        <div className="r2-card">
          <ul className="r2-list">
            {cfacOrganizations.map((org) => (
              <li key={org}>{org}</li>
            ))}
          </ul>
          <p className="r2-note">
            Go to{" "}
            <a href="http://www.cancerfac.org/" target="_blank" rel="noopener noreferrer">
              cancerfac.org
            </a>{" "}
            for more information.
          </p>
        </div>
      </section>

      <section className="r2-section">
        <h2>Insurance Options</h2>
        <div className="r2-grid">
          {insuranceOptions.map((option) => (
            <div key={option.title} className="r2-card r2-card-border">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="r2-section">
        <h2>Insurance Assistance & Live Help</h2>
        <div className="r2-card">
          <p className="r2-callout">
            For more direct / LIVE help, call: <strong>888-793-9355</strong>
          </p>
          <div className="r2-link-list">
            {insuranceSupportLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith("tel:") ? undefined : "_blank"}
                rel={item.link.startsWith("tel:") ? undefined : "noopener noreferrer"}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="r2-section">
        <h2>Additional Resources</h2>
        <div className="r2-grid">
          {additionalResources.map((resource) => (
            <div key={resource.title} className="r2-card r2-card-border">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                Visit resource
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="r2-section">
        <h2>Communicating With Your Health Insurance Company</h2>
        <div className="r2-card">
          <p>
            If you have health insurance, it’s important to learn about the specifics of your
            policy, including what&apos;s covered, deductibles, co-payments, and other out-of-pocket
            costs. Contact your insurance company to ask if a case manager can be assigned to help
            coordinate care and benefits.
          </p>
          <h3>Insurance Guidance – Reminders</h3>
          <ul className="r2-list">
            {insuranceChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="r2-section">
        <h2>Appealing Insurance Denials</h2>
        <div className="r2-card">
          <p>
            It is not unusual for claims to be denied. You can appeal your health insurance
            company’s decision and may be able to get the decision overturned. If your appeal is
            denied, you still have options including external appeals through independent reviewers.
          </p>
          <ul className="r2-list">
            {denialSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="r2-note">
            Need help? Ask to speak to a nurse navigator, social worker, or financial advocate. You
            can also contact organizations that help with insurance denials and medical debt, such
            as CoPatient and the Patient Advocate Foundation.
          </p>
        </div>
      </section>
    </main>
  );
}
