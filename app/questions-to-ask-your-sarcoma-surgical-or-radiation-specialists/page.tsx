import type { Metadata } from "next";
import Image from "next/image";
import "./questions.css";

export const metadata: Metadata = {
  title: "Questions to Ask Your Sarcoma Specialists | NLMSF",
  description:
    "Questions to ask your sarcoma specialist, surgeon, and radiation oncologist to support informed care decisions.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Questions to Ask Your Sarcoma Surgical or Radiation Specialists",
  description:
    "Questions to ask your sarcoma specialist, surgeon, and radiation oncologist to support informed care decisions.",
  url: "https://nlmsf.org/questions-to-ask-your-sarcoma-surgical-or-radiation-specialists/",
  publisher: {
    "@type": "Organization",
    name: "National Leiomyosarcoma Foundation",
    url: "https://nlmsf.org",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Leiomyosarcoma",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Patients and Caregivers",
  },
};

export default function QuestionsToAskPage() {
  return (
    <main className="qta-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="qta-hero">
        <div className="qta-hero-content">
          <div className="qta-badge">
            <span className="qta-badge-dot" aria-hidden="true" />
            <span>Patient Advocacy</span>
          </div>
          <h1>Questions to Ask Your Sarcoma Specialists</h1>
          <div className="qta-divider" />
          <p>
            A guide to help you prepare for appointments and advocate for the care
            and answers you need.
          </p>
          <div className="qta-tags">
            <span className="qta-tag blue">Sarcoma Specialist</span>
            <span className="qta-tag indigo">Surgeon</span>
            <span className="qta-tag purple">Radiation Oncologist</span>
          </div>
        </div>
        <div className="qta-hero-decor decor-one" aria-hidden="true" />
        <div className="qta-hero-decor decor-two" aria-hidden="true" />
      </section>

      {/* Hero image */}
      <div className="qta-container">
        <div className="qta-hero-img">
          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2019/06/6b9eb851064817fc6670dbb6b548dc77-2.jpg"
            alt="Doctor consulting with patient about sarcoma treatment"
            width={1200}
            height={800}
            sizes="(min-width: 900px) 860px, 100vw"
            priority
          />
        </div>

        {/* Nav */}
        <nav className="qta-nav">
          <h3>On This Page</h3>
          <a href="#specialist">Questions for Your Sarcoma Specialist</a>
          <a href="#surgeon-pre">Questions for Your Surgeon (Pre-Surgery)</a>
          <a href="#surgeon-post">Questions After Surgery</a>
          <a href="#video">Expert Video: Surgery in Sarcomas</a>
          <a href="#radiation">Questions for Your Radiation Oncologist</a>
          <a href="#testing">Note: Testing Your Tumor</a>
        </nav>

        {/* Section 1: Sarcoma Specialist */}
        <section id="specialist" className="qta-section">
          <h2 className="qta-section-title blue">
            Questions to Ask Your Sarcoma Specialist
          </h2>
          <div className="qta-panel blue">
            <div className="qta-panel-header">
              <div className="qta-icon blue">
                <i className="fas fa-user-md" aria-hidden />
              </div>
              <div>
                <h3>During Your Oncology Appointments</h3>
                <p>Understanding your diagnosis, treatment options, and next steps</p>
              </div>
            </div>
            <ol className="qta-list">
              <li>What stage is my tumor, and what is its mitotic rate?</li>
              <li>
                Should genomic testing or other advanced testing be done on my tumor
                now? If not, why not? If so, how do we get my tumor tested?{" "}
                <strong>(See Note Below)</strong>
              </li>
              <li>
                Do I need chemotherapy now? Is radiation therapy another option for
                me? What are the pros and cons of radiation therapy?
              </li>
              <li>Is immunotherapy a treatment option for me?</li>
              <li>
                What chemotherapy regimen do you feel is best for me — single agent
                or the combination of two or more agents? What gives me the best
                chance to attain No Evidence of Disease (NED) status and a lesser
                chance of a recurrence?
              </li>
              <li>
                Is one chemotherapy agent better than a combination to help reach NED
                status? Is targeted chemotherapy an option for me?
              </li>
              <li>
                I am interested in finding out all of my treatment options and the
                pros and cons of each in terms of the potential for a positive
                result, short-term and long-term, and the potential side effects.
              </li>
              <li>
                How often will I be meeting with you during my treatment and what
                types of testing — blood work, imaging studies or biopsies — will be
                necessary?
              </li>
              <li>
                What are my treatment options if my tumor does not respond to the
                selected treatment protocol?
              </li>
              <li>
                Information for potential discussion with your oncology care team
                from the American Society of Clinical Oncology:{" "}
                <a
                  href="https://ascopubs.org/doi/10.1200/EDBK_157450?fbclid=IwAR3fScbvUKX9k4SiVeGk6PUE2pB2TmvgMp9bPDBK4HWHHk51UgvFuqDjeDQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Local Ablative Therapies to Metastatic Soft Tissue Sarcoma
                </a>
              </li>
              <li>
                What if my tumor recurs locally or metastases develop after my
                initial treatment — what will my treatment options be then?
              </li>
              <li>
                I would like an Integrative Medicine consult in order to learn about
                proper nutrition and other complementary therapies during my
                chemotherapy treatment and after treatment (maintenance regimen).
              </li>
              <li>
                As I enter the treatment phase, how can I ensure that I get the
                ongoing support needed for myself and my caregiver/family members in
                terms of emotional well-being?
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: Surgeon (Pre) */}
        <section id="surgeon-pre" className="qta-section">
          <h2 className="qta-section-title indigo">
            Questions to Ask Your Sarcoma Surgeon
          </h2>
          <div className="qta-panel indigo">
            <div className="qta-panel-header">
              <div className="qta-icon indigo">
                <i className="fas fa-procedures" aria-hidden />
              </div>
              <div>
                <h3>Before Your Surgery</h3>
                <p>Preparing for the surgical procedure and tissue preservation</p>
              </div>
            </div>
            <ol className="qta-list">
              <li>How many LMS cases have you seen and operated on?</li>
              <li>
                Based on my imaging studies, does it appear that my tumor is
                resectable?
              </li>
              <li>
                Based on my tumor location and biopsy results, what type of surgery
                is necessary?
              </li>
              <li>
                What further imaging studies or other tests, if any, are needed prior
                to my surgery?
              </li>
              <li>
                Will radiation therapy, chemotherapy, or both be recommended before
                or after my surgery?
              </li>
              <li>
                In proceeding with surgery, will my tumor tissue and/or blood samples
                be preserved?
              </li>
              <li>
                How will my tumor tissue or blood samples be preserved and stored and
                for how long? Where will they be housed?
              </li>
              <li>
                Will genomic testing or other advanced testing be done on my tumor?
              </li>
              <li>
                Does this decision need to be made before the surgery so tissue
                samples can be obtained and processed appropriately?{" "}
                <strong>(See Note Below on Testing Your Tumor)</strong>
              </li>
              <li>
                Will a fresh and/or frozen tumor sample taken during the surgery be
                used for advanced testing or future research?{" "}
                <strong>
                  Note the cancer cell line project:{" "}
                  <a
                    href="https://leiomyosarcoma.info/cancer-cell-line-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leiomyosarcoma.info/cancer-cell-line-project
                  </a>
                </strong>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 3: Surgeon (Post) */}
        <section id="surgeon-post" className="qta-section">
          <div className="qta-panel indigo">
            <div className="qta-panel-header">
              <div className="qta-icon indigo">
                <i className="fas fa-notes-medical" aria-hidden />
              </div>
              <div>
                <h3>After Your Surgery</h3>
                <p>Understanding results and planning next steps</p>
              </div>
            </div>
            <ol className="qta-list">
              <li>
                Were you able to completely resect my tumor with clear margins?
              </li>
              <li>
                Based on the surgical and pathology findings, what is the stage of my
                tumor and its mitotic score? What do these findings mean regarding my
                need for additional treatment?
              </li>
              <li>
                What are my treatment options now? Will chemotherapy, radiation
                therapy or both be needed?
              </li>
              <li>
                What type of genomic/molecular studies have been done or should be
                done on my tumor to help guide my treatment?
              </li>
              <li>
                What else can I do proactively to ensure that my tumor is available
                for all possible future testing and research efforts?
              </li>
            </ol>
          </div>
        </section>

        {/* Video */}
        <section id="video" className="qta-section">
          <h2 className="qta-section-title teal">Expert Video</h2>
          <div className="qta-panel teal">
            <div className="qta-panel-header">
              <div className="qta-icon teal">
                <i className="fas fa-video" aria-hidden />
              </div>
              <div>
                <h3>Surgery in Treating Sarcomas</h3>
                <p>Dr. Raphael Pollock explains the importance of surgery</p>
              </div>
            </div>
            <div className="qta-video">
              <iframe
                src="https://www.youtube.com/embed/f06iN5D9gx8"
                title="Dr. Raphael Pollock on Sarcoma Surgery"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Section 4: Radiation */}
        <section id="radiation" className="qta-section">
          <h2 className="qta-section-title purple">
            Questions for Your Radiation Oncologist
          </h2>
          <div className="qta-panel purple">
            <div className="qta-panel-header">
              <div className="qta-icon purple">
                <i className="fas fa-radiation-alt" aria-hidden />
              </div>
              <div>
                <h3>Radiation Therapy</h3>
                <p>Understanding the process, timeline, and side effects</p>
              </div>
            </div>
            <ol className="qta-list">
              <li>How many LMS patients have you treated?</li>
              <li>How will radiation treatment be done?</li>
              <li>Where will the treatments be done?</li>
              <li>How many treatments will I receive?</li>
              <li>How long will each individual treatment session last?</li>
              <li>
                What side effects can I expect during and immediately following the
                completion of the treatment?
              </li>
              <li>
                What long-term side effects or complications might I experience
                following this treatment?
              </li>
              <li>
                Will I need surgery or chemotherapy after my radiation treatment?
              </li>
              <li>
                What follow-up biopsies, lab testing or imaging studies will I need
                following this treatment, and for how long?
              </li>
              <li>
                How frequently will I have follow-up appointments with you following
                the treatment?
              </li>
            </ol>
          </div>
        </section>

        {/* Note: Testing */}
        <section id="testing" className="qta-section">
          <div className="qta-callout">
            <div className="qta-callout-header">
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2016/05/Genome-en.svg_-300x129.png"
                alt="Genome illustration"
                width={300}
                height={129}
                className="qta-callout-img"
              />
              <h3>Note: Testing Your Tumor for Cancer-Related Genes</h3>
            </div>
            <p>
              Molecular/genomic testing for sarcoma-related genes may not be for
              everyone, but by staying informed and continuing to ask important
              questions about such testing availability allows you to self-advocate.
              Make sure that every avenue for testing your tumor tissue is explored —
              potentially making a difference in the cutting-edge treatment options
              and targeted therapies/immunotherapies that might be available to you.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
