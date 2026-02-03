import type { Metadata } from "next";
import "./treatment-options.css";

export const metadata: Metadata = {
  title: "Treatment Options | NLMSF",
  description:
    "Comprehensive information about soft tissue sarcoma treatment approaches, including surgery, radiation, chemotherapy, and targeted therapies.",
};

const specialists = [
  {
    title: "Orthopedic Surgeon",
    description:
      "Specializes in diseases of the bones, muscles, and joints (for sarcomas in the arms and legs).",
  },
  {
    title: "Surgical Oncologist",
    description:
      "Treats cancer with surgery (for sarcomas in the abdomen and retroperitoneum).",
  },
  {
    title: "Thoracic Surgeon",
    description: "Treats diseases of the lungs and chest (for sarcomas in the chest).",
  },
  { title: "Medical Oncologist", description: "Treats cancer with medicines like chemotherapy." },
  { title: "Radiation Oncologist", description: "Treats cancer with radiation therapy." },
  {
    title: "Physiatrist",
    description: "Rehabilitation doctor who treats injuries or illnesses affecting mobility.",
  },
];

const chemoDrugs = [
  "Doxorubicin (Adriamycin)",
  "Ifosfamide (Ifex)",
  "Gemcitabine (Gemzar)",
  "Docetaxel (Taxotere)",
  "Dacarbazine (DTIC)",
  "Epirubicin (Ellence)",
  "Temozolomide (Temodar)",
  "Vinorelbine (Navelbine)",
];

const treatmentFactors = [
  "The type, location, and stage of the cancer",
  "Your overall physical health",
  "Possible side effects of each treatment",
  "Likelihood of controlling the cancer and/or relieving symptoms",
  "Your preferences and goals",
];

const faqs = [
  {
    question:
      "What are my best/most effective choices of treatment based on the location of my tumor and if it has spread to other sites in my body?",
    answer:
      "Treatment options depend on the tumor's location, size, stage, and whether it has metastasized. For localized sarcomas, surgery is often the primary treatment, potentially followed by radiation or chemotherapy. If the cancer has spread, systemic treatments like chemotherapy, targeted therapy, or immunotherapy may be recommended. Discuss with your multidisciplinary team to tailor a plan based on your specific case.",
  },
  {
    question:
      "Finding a sarcoma center near me - how can I be helped to find a sarcoma specialist?",
    answer:
      "You can find a sarcoma specialist through the SARC Sarcoma Centers Directory at sarctrials.org. Additionally, contact the National Leiomyosarcoma Foundation or organizations like the Sarcoma Alliance for referrals to sarcoma centers of excellence near you.",
  },
  {
    question:
      "Who is my oncology care team at a sarcoma center vs. a community provider setting?",
    answer:
      "At a sarcoma center, your care team typically includes a multidisciplinary team (MDT) with medical, surgical, and radiation oncologists, pathologists, radiologists, and nurse coordinators, plus support staff like social workers and dieticians. In a community setting, you may have a general oncologist and fewer specialized professionals, potentially limiting access to sarcoma-specific expertise.",
  },
  {
    question: "Could I seek a second opinion and if so how can I proceed to obtain a second opinion?",
    answer:
      "Yes, seeking a second opinion is recommended to confirm your diagnosis and treatment plan. Contact a sarcoma center or use services like Included Health, Dana-Farber, or Stanford Medicine’s online second opinion programs. Gather your medical records (pathology reports, imaging, etc.) and check with your insurance for coverage.",
  },
  {
    question:
      "Will genomic/molecular testing (and tell me the difference) of my tumor be possible and will it be retested if I have a recurrence?",
    answer:
      "Genomic testing analyzes the tumor’s DNA for broad genetic changes, while molecular testing targets specific molecules or pathways. Both are often possible and can guide targeted therapies. If a recurrence occurs, retesting is typically recommended to identify any new mutations, as the tumor’s profile may change.",
  },
  {
    question:
      "Should I be considering a clinical trial ahead of standard of care? What are the pros and cons?",
    answer:
      "Clinical trials can offer access to cutting-edge treatments but may involve unproven therapies with uncertain outcomes. Pros include potential for better results and contributing to research; cons include possible side effects and logistical challenges. Discuss with your oncologist to weigh trials against standard treatments like surgery or chemotherapy.",
  },
  {
    question:
      "How can I find help for financial assistance for medical bills, treatment costs, and other life management needs based on my inability to maintain my employment?",
    answer:
      "Contact social workers at your sarcoma center or organizations like the Sarcoma Alliance or CancerCare for financial aid resources. Programs like Medicaid, hospital charity care, or nonprofit grants can help. For life management, explore local support groups or services through the American Cancer Society.",
  },
  {
    question:
      "Where can I find help to address health insurance issues and impediments to treatment? Am I eligible to apply for disability insurance?",
    answer:
      "Hospital social workers or patient navigators can assist with insurance issues. Organizations like Triage Cancer offer free guidance on insurance and disability. You may be eligible for Social Security Disability Insurance (SSDI) if your condition prevents work; contact the Social Security Administration or a legal advocate for help.",
  },
  {
    question:
      "How do I improve my potential for best outcomes during treatment and after treatment is completed?",
    answer:
      "Work with a sarcoma center’s multidisciplinary team, adhere to your treatment plan, and maintain open communication with your doctors. Post-treatment, follow surveillance schedules, adopt a healthy lifestyle (nutrition, exercise), and seek integrative medicine support to optimize recovery and reduce recurrence risk.",
  },
  {
    question:
      "What happens after treatment is completed - next steps to stay connected for check-ups and what will that entail?",
    answer:
      "After treatment, you’ll enter a surveillance phase with regular check-ups, including physical exams, imaging (e.g., CT, MRI), and blood tests to monitor for recurrence. Frequency varies but is typically every 3-6 months initially. Stay in touch with your oncology team for ongoing support.",
  },
  {
    question:
      "How do I seek integrative medicine support – for nutrition, exercise, general physical and emotional support during and after treatment?",
    answer:
      "Ask your sarcoma center for integrative medicine services, which may include dieticians, physical therapists, and counselors. Organizations like the American Cancer Society offer resources for nutrition and exercise programs. Emotional support can be found through support groups or therapists specializing in oncology.",
  },
  {
    question:
      "What complementary therapies are appropriate for me to see during treatment – oncological massage possibly and what is the difference between a regular massage and an oncological massage?",
    answer:
      "Complementary therapies like oncological massage, acupuncture, or yoga may help manage symptoms. Oncological massage is tailored for cancer patients, using gentle techniques to avoid complications like lymphedema, unlike regular massage. Consult your oncologist and seek therapists trained in oncology-specific care.",
  },
  {
    question:
      "Is there supportive guidance for my family/caregiver to help me get through treatment and after treatment what happens next?",
    answer:
      "Sarcoma centers often provide caregiver support through social workers, support groups, or counseling. Organizations like CancerCare and the American Cancer Society offer caregiver resources. Post-treatment, caregivers can help with follow-up appointments and emotional support, guided by your care team.",
  },
  {
    question:
      "How often do I have to be exposed to imaging studies in the first year, second year, and thereafter?",
    answer:
      "Imaging frequency depends on your sarcoma type and stage. Typically, in the first year, imaging (e.g., CT, MRI) occurs every 3-4 months; in the second year, every 4-6 months; and thereafter, every 6-12 months. Your oncologist will customize the schedule based on your risk of recurrence.",
  },
];

export default function TreatmentOptionsPage() {
  return (
    <main className="treatment-options-page">
      <section className="to-hero">
        <div className="to-badge">
          <span className="to-badge-dot" aria-hidden="true" />
          <span>Medical Information</span>
        </div>
        <h1 className="to-hero-title">Treatment Options</h1>
        <p className="to-hero-description">
          Comprehensive information about soft tissue sarcoma treatment approaches, including
          surgery, radiation, chemotherapy, and targeted therapies.
        </p>
        <div className="to-feature-tags">
          <span className="to-feature-tag">Medical Team</span>
          <span className="to-feature-tag">Surgery</span>
          <span className="to-feature-tag">Therapies</span>
        </div>
      </section>

      <section className="to-layout">
        <aside className="to-sidebar">
          <div className="to-sidebar-section">
            <h3 className="to-sidebar-title">Treatment Navigation</h3>
            <ul className="to-nav-links">
              <li>
                <a href="#overview">General Information</a>
              </li>
              <li>
                <a href="#medical-team">Medical Team</a>
              </li>
              <li>
                <a href="#surgery">Surgery</a>
              </li>
              <li>
                <a href="#radiation">Radiation</a>
              </li>
              <li>
                <a href="#chemotherapy">Chemotherapy</a>
              </li>
              <li>
                <a href="#targeted-therapy">Targeted Therapy</a>
              </li>
              <li>
                <a href="#treatment-plan">Treatment Planning</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="to-sidebar-cta">
            <h4>Find A Sarcoma Specialist</h4>
            <p>
              Connect with experienced doctors who specialize in treating leiomyosarcoma and other
              soft tissue sarcomas.
            </p>
            <a href="/find-a-sarcoma-specialist" className="to-cta-button">
              Specialist Directory
            </a>
          </div>
        </aside>

        <div className="to-content">
          <section id="overview" className="to-section">
            <h2 className="to-section-title">How Soft Tissue Sarcomas Are Treated</h2>
            <div className="to-note">
              <p>
                This information is adapted from medical resources including the American Cancer
                Society&apos;s Cancer Information Database. It is intended to help you and your family
                make informed decisions together with your medical team.
              </p>
              <p className="to-note-highlight">
                The treatment information in this section is not official policy of the National
                Leiomyosarcoma Foundation and is not intended as medical advice to replace the
                expertise and judgment of your cancer care team.
              </p>
            </div>
            <div className="to-banner">
              Your doctor may suggest treatment options different from these general guidelines.
              Don&apos;t hesitate to ask questions about your specific treatment plan.
            </div>
          </section>

          <section id="medical-team" className="to-section">
            <div className="to-section-header teal">
              <h2>The Multidisciplinary Care Team</h2>
            </div>
            <div className="to-panel">
              <p>
                Multidisciplinary care (MDC) can be broadly defined as an integrated team approach
                to health care in which medical and allied health care professionals consider all
                relevant treatment options and develop an individual treatment plan for each patient
                collaboratively.
              </p>
              <p>
                Sarcoma care can be complex. Due to the large number and range of healthcare
                providers who may be involved, there is a potential for poor communication and poor
                coordination of care. MDC has been identified as a key enabler in the provision of
                high-quality treatment and care for cancer patients.
              </p>
              <p>
                Multidisciplinary teams (MDTs) aim at improving communication, coordination, and
                decision-making between the care professionals.
              </p>
              <p className="to-emphasis">
                Multidisciplinary care teams are a requirement of sarcoma centers of excellence.
              </p>
              <p>
                SARC Sarcoma Centers Directory -{" "}
                <a href="https://sarctrials.org/sarcoma-centers/" target="_blank" rel="noopener noreferrer">
                  Sarcoma Centers of Excellence
                </a>
              </p>

              <div className="to-info-box">
                <h4>Core Members of the Multidisciplinary Sarcoma Team</h4>
                <ul>
                  <li>Medical Oncologist</li>
                  <li>Surgical Oncologist</li>
                  <li>Radiation Oncologist</li>
                  <li>Pathologist</li>
                  <li>Diagnostic Radiologist</li>
                  <li>Nurse Coordinator</li>
                </ul>
                <p>
                  These members meet to discuss each patient to determine the best course of
                  treatment. Nurse coordinators often bring patient information and concerns to the
                  meeting.
                </p>
              </div>

              <p>Other professionals involved in the overall care of the patient may include:</p>
              <ul className="to-checklist">
                <li>Occupational and Physical Therapists</li>
                <li>Social Workers</li>
                <li>Integrative Medicine Doctors</li>
                <li>Dieticians</li>
                <li>Palliative Care Doctors</li>
              </ul>
            </div>
          </section>

          <section id="surgery" className="to-section">
            <div className="to-section-header purple">
              <h2>Surgery</h2>
            </div>
            <div className="to-panel">
              <p className="to-emphasis">
                The only way to cure a soft tissue sarcoma is to remove it with surgery, so surgery
                is part of the treatment for all soft tissue sarcomas whenever possible.
              </p>
              <p>
                It is important that your surgeon and other doctors are experienced in the
                treatment of sarcomas. These are difficult tumors to treat and require both
                experience and expertise. Studies have shown that patients with sarcomas have better
                outcomes when they are treated at specialized cancer centers that have experience in
                sarcoma treatment.
              </p>

              <div className="to-info-box">
                <h4>Surgical Outcomes</h4>
                <p>Surgery aims to remove the tumor along with a margin of normal tissue around it.</p>
                <ul>
                  <li>The size and location of the tumor</li>
                  <li>The grade of the tumor</li>
                  <li>Whether clean margins can be achieved</li>
                  <li>The experience of the surgical team</li>
                </ul>
              </div>

              <p>
                After surgery, if the original tumor was surgically removed with clean margins and
                there are no signs of any other LMS, doctors might suggest either:
              </p>
              <ul className="to-checklist">
                <li>Wait &amp; Watch approach with regular monitoring</li>
                <li>Adjuvant treatment with chemotherapy and/or radiation</li>
              </ul>
            </div>
          </section>

          <section id="radiation" className="to-section">
            <div className="to-section-header teal">
              <h2>Radiation Therapy</h2>
            </div>
            <div className="to-panel">
              <p>Radiation therapy uses high-energy rays or particles to kill cancer cells.</p>
              <ul>
                <li>
                  <strong>Before surgery</strong> (neoadjuvant) to shrink the tumor and make it
                  easier to remove
                </li>
                <li>
                  <strong>After surgery</strong> (adjuvant) to kill any remaining cancer cells
                </li>
                <li>
                  <strong>As the main treatment</strong> if surgery is not possible
                </li>
                <li>
                  <strong>To help relieve symptoms</strong> such as pain in advanced cancer
                </li>
              </ul>

              <div className="to-type-card">
                <h4>Types of Radiation Therapy</h4>
                <div className="to-type-item">
                  <h5>External Beam Radiation</h5>
                  <p>
                    Most common type of radiation therapy, where radiation is focused from a
                    machine outside the body.
                  </p>
                  <ul>
                    <li>3D Conformational Radiation Therapy - most commonly used</li>
                    <li>Intensity-Modulated Radiation Therapy (IMRT)</li>
                    <li>Stereotactic Body Radiation Therapy (SBRT)</li>
                  </ul>
                </div>
                <div className="to-type-item">
                  <h5>Brachytherapy</h5>
                  <p>
                    Internal radiation using radioactive material placed directly into or near the
                    tumor.
                  </p>
                </div>
              </div>

              <div className="to-callout">
                Side effects of radiation therapy can include skin changes, fatigue, and effects on
                nearby organs. Discuss potential side effects with your radiation oncologist before
                beginning treatment.
              </div>

              <div className="to-links">
                <a
                  href="https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/radiation-therapy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radiation Therapy for Soft Tissue Sarcomas | American Cancer Society
                </a>
                <a
                  href="https://www.practicalradonc.org/article/S1879-8500(21)00118-1/fulltext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ASTRO Clinical Practice Guideline - Practical Radiation Oncology
                </a>
              </div>
            </div>
          </section>

          <section id="chemotherapy" className="to-section">
            <div className="to-section-header indigo">
              <h2>Chemotherapy</h2>
            </div>
            <div className="to-panel">
              <p>
                Chemotherapy uses anti-cancer drugs that are typically given intravenously or taken
                by mouth. These drugs enter the bloodstream and reach all areas of the body, making
                this treatment potentially useful for cancers that have spread beyond the original
                site.
              </p>
              <p>Chemotherapy might be given:</p>
              <ul>
                <li>
                  <strong>Before surgery</strong> (neoadjuvant chemotherapy) to try to shrink the
                  tumor
                </li>
                <li>
                  <strong>After surgery</strong> (adjuvant chemotherapy) to lower the risk of the
                  cancer coming back
                </li>
                <li>
                  <strong>As the main treatment</strong> for metastatic sarcoma that has spread to
                  other parts of the body
                </li>
              </ul>

              <div className="to-info-box">
                <h4>Common Chemotherapy Drugs for Soft Tissue Sarcoma</h4>
                <ul>
                  {chemoDrugs.map((drug) => (
                    <li key={drug}>{drug}</li>
                  ))}
                </ul>
                <p>These drugs are often used in combination to improve effectiveness.</p>
              </div>

              <div className="to-callout">
                Side effects of chemotherapy depend on the specific drugs, doses, and duration of
                treatment. Common side effects may include hair loss, mouth sores, loss of appetite,
                nausea and vomiting, fatigue, and increased risk of infections.
              </div>
            </div>
          </section>

          <section id="targeted-therapy" className="to-section">
            <div className="to-section-header purple">
              <h2>Targeted Therapy</h2>
            </div>
            <div className="to-panel">
              <p>
                Targeted therapy drugs specifically target certain genes, proteins, or the tissue
                environment that contributes to cancer growth and survival. These drugs are
                different from chemotherapy drugs, which attack all rapidly dividing cells.
              </p>
              <div className="to-type-card">
                <h4>Types of Targeted Therapy for Soft Tissue Sarcoma</h4>
                <div className="to-type-item">
                  <h5>Tyrosine Kinase Inhibitors</h5>
                  <p>
                    Drugs like pazopanib (Votrient) target blood vessel formation and other
                    pathways. It may be used for certain advanced soft tissue sarcomas after
                    chemotherapy.
                  </p>
                </div>
                <div className="to-type-item">
                  <h5>mTOR Inhibitors</h5>
                  <p>
                    Sirolimus (Rapamune) and other mTOR inhibitors may be effective against some
                    types of soft tissue sarcomas.
                  </p>
                </div>
                <div className="to-type-item">
                  <h5>HDAC Inhibitors</h5>
                  <p>
                    For specific sarcoma subtypes, drugs that inhibit histone deacetylases (HDACs)
                    may be effective.
                  </p>
                  <details className="to-details">
                    <summary>Learn More About HDAC Inhibitors</summary>
                    <div className="to-details-content">
                      <p>
                        HDAC inhibitors (Histone Deacetylase inhibitors) are a class of compounds
                        that interfere with the function of histone deacetylases, enzymes that
                        remove acetyl groups from histones, thereby regulating gene expression.
                      </p>
                      <h6>Key Points on HDAC Inhibitors:</h6>
                      <ol>
                        <li>
                          <strong>Mechanism of Action</strong>: HDAC inhibitors block deacetylation,
                          promoting histone acetylation, which relaxes chromatin and enhances gene
                          expression.
                        </li>
                        <li>
                          <strong>Therapeutic Applications</strong>: Used in cancer treatment (e.g.,
                          cutaneous T-cell lymphoma) and under research for neurological and
                          inflammatory conditions.
                        </li>
                        <li>
                          <strong>Examples</strong>: FDA-approved agents include Vorinostat,
                          Romidepsin, Belinostat, and Panobinostat.
                        </li>
                        <li>
                          <strong>Challenges</strong>: Non-specificity can lead to side effects such
                          as fatigue, nausea, and thrombocytopenia.
                        </li>
                      </ol>
                    </div>
                  </details>
                </div>
              </div>
              <p>
                Research into targeted therapies for soft tissue sarcomas continues to evolve.
                Clinical trials may offer access to newer targeted therapy options.
              </p>
            </div>
          </section>

          <section id="immunotherapy" className="to-section">
            <div className="to-section-header teal">
              <h2>Immunotherapy</h2>
            </div>
            <div className="to-panel">
              <p>
                Immunotherapy is a cancer treatment that boosts the body&apos;s immune system to fight
                cancer cells. It uses drugs or other substances to enhance immune responses,
                targeting cancer more precisely than traditional therapies. It can be used alone or
                with other treatments.
              </p>
              <div className="to-links">
                <a
                  href="https://www.cancerresearch.org/cancer-types/sarcoma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immunotherapy for Sarcoma - Cancer Research Institute
                </a>
                <a
                  href="https://leiomyosarcoma.info/immunotherapy-updates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immunotherapy Updates - Leiomyosarcoma.info
                </a>
              </div>
            </div>
          </section>

          <section id="treatment-plan" className="to-section">
            <div className="to-section-header blue">
              <h2>Treatment Planning</h2>
            </div>
            <div className="to-panel">
              <p>
                After a sarcoma is found and staged, your team will recommend one or several
                treatment options. This decision is important, so take time and think about all of
                the choices.
              </p>
              <div className="to-info-box">
                <h4>Factors to Consider When Choosing a Treatment Plan</h4>
                <ul>
                  {treatmentFactors.map((factor) => (
                    <li key={factor}>{factor}</li>
                  ))}
                </ul>
              </div>
              <div className="to-quote">
                &ldquo;It is important to discuss all of your treatment options, including their
                goals and possible side effects, with your doctors to help make the decision that
                best fits your needs.&rdquo;
              </div>
              <p>
                It&apos;s very important to ask questions if there is anything you&apos;re not sure about.
                You may want to seek a second opinion. A second opinion can provide more information
                and help you feel more confident about the chosen treatment plan. Some insurance
                companies require a second opinion before they will agree to pay for treatments.
              </p>
            </div>
          </section>

          <section id="faqs" className="to-section">
            <div className="to-section-header pink">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="to-panel">
              <div className="to-faqs">
                {faqs.map((faq) => (
                  <details key={faq.question} className="to-faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
