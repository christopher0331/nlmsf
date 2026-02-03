import type { Metadata } from "next";
import "./after-treatment.css";

export const metadata: Metadata = {
  title: "After Treatment | NLMSF",
  description:
    "Survivorship care planning guidance, care plan steps, and trusted resources for life after treatment.",
};

const carePlanInfo = [
  "Type of cancer",
  "If you underwent surgery, what procedures were done?",
  "If you received chemotherapy, what medications were received?",
  "If you received radiation therapy, what type of cancer was this done for?",
];

const relatedResources = [
  {
    title: "Facing Forward: Life After Cancer Treatment",
    url: "https://www.cancer.gov/publications/patient-education/facing-forward",
  },
  {
    title: "Facing Forward: Making a Difference in Cancer",
    url: "https://www.cancer.gov/publications/patient-education/make-a-difference",
  },
  {
    title: "Office of Cancer Survivorship",
    url: "http://cancercontrol.cancer.gov/ocs",
  },
  {
    title: "Springboard Beyond Cancer",
    url: "https://cancercontrol.cancer.gov/ocs",
  },
];

const planningModels = [
  {
    title: "Cancer.Net Survivorship Guidance",
    url: "https://www.cancer.net/survivorship/what-survivorship",
  },
  {
    title: "Follow-Up Medical Care – National Cancer Institute",
    url: "https://www.cancer.gov/about-cancer/coping/survivorship/follow-up-care",
  },
  {
    title: "Follow-Up Care After Cancer Treatment | Cancer.Net",
    url: "https://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco-cancer-treatment-and-survivorship-care-plans",
  },
  {
    title: "Updated Survivorship Care Planning Template",
    url: "https://www.canceradvocacy.org/news/an-updated-survivorship-care-planning-template-and-identifying-barriers-to-implementation/",
  },
];

export default function AfterTreatmentPage() {
  return (
    <main className="after-treatment-page">
      <section className="at-hero">
        <div className="at-hero-inner">
          <p className="at-eyebrow">Survivorship</p>
          <h1>After Treatment: Survivorship Care Planning</h1>
          <p>
            Survivorship Care Planning is the roadmap to a new normal of moving forward with living
            for the patient and their family. Studies show that putting a plan in place enhances
            survival and supports long-term wellbeing.
          </p>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>Who Is Involved in Survivorship Care Planning?</h2>
          <p>
            Survivorship Care Planning after treatment involves the oncologist and the oncology care
            team who have been part of the treatment journey. The team also includes the patient and
            family or caregivers supporting them throughout treatment.
          </p>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>Why Is Survivorship Care Important?</h2>
          <p>
            The good news is that the number of cancer survivors is growing, with an estimated 17
            million survivors living in the United States. Unfortunately, many face long-term
            effects of treatment with little guidance. The Institute of Medicine (IOM) found that
            survivors and their healthcare providers often lack guidance to address medical and
            psychosocial issues after treatment.
          </p>
          <p>
            The IOM recommends that after cancer therapy, each person should receive a treatment
            summary and a follow-up care plan. This plan should outline potential late effects,
            prevention and symptoms, screening recommendations, psychosocial and financial issues,
            healthy lifestyle guidance, genetic counseling, referrals, and support resources.
          </p>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>What Information Do I Need to Create a Care Plan?</h2>
          <p>
            The OncoLife Survivorship Care Plan is individualized based on a brief questionnaire. To
            create the most accurate plan, you may need to ask your oncology team for details of
            your cancer therapy:
          </p>
          <ul className="at-list">
            {carePlanInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>What Should I Do with the Plan?</h2>
          <p>
            Review your care plan with your healthcare team, including oncology and primary care.
            Every case is different, and risk varies based on the dose or technique used for
            radiation and chemotherapy. Discuss your plan with your oncology team to clarify your
            personal risk and follow-up needs.
          </p>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>Related Resources</h2>
          <p>Click titles for more information:</p>
          <div className="at-link-grid">
            {relatedResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="at-link-card"
              >
                <h3>{resource.title}</h3>
                <span>Visit resource</span>
              </a>
            ))}
          </div>
          <p className="at-note">
            Partnering with your oncologist and oncology care team is important for rebuilding
            quality of life after treatment with a survivorship care plan in place.
          </p>
        </div>
      </section>

      <section className="at-section">
        <div className="at-card">
          <h2>Survivorship Care Planning Models</h2>
          <p>
            Visit the following sites for guidance on navigating issues during and after treatment.
            These resources are helpful to review with your oncology and medical care team.
          </p>
          <ul className="at-resource-list">
            {planningModels.map((model) => (
              <li key={model.title}>
                <a href={model.url} target="_blank" rel="noopener noreferrer">
                  {model.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
