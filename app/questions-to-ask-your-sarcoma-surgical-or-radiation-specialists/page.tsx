import type { Metadata } from "next";
import Image from "next/image";
import "./questions.css";

export const metadata: Metadata = {
  title: "Questions to Ask Your Sarcoma Specialists | NLMSF",
  description:
    "Questions to ask your sarcoma specialist, surgeon, and radiation oncologist to support informed care decisions.",
};

export default function QuestionsToAskPage() {
  return (
    <main className="questions-page">
      <header className="questions-hero">
        <h1>Questions to Ask Your Sarcoma Surgical or Radiation Specialists</h1>
        <p>
          A guide to help you prepare for appointments and advocate for the care and
          answers you need.
        </p>
      </header>

      <section className="questions-section">
        <figure className="questions-image">
          <Image
            src="https://nlsmf.org/wp-content/uploads/2019/06/6b9eb851064817fc6670dbb6b548dc77-2.jpg"
            alt=""
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </figure>
      </section>

      <section className="questions-section">
        <h2>Questions To Ask During Appointments</h2>
        <figure className="questions-image">
          <Image
            src="https://nlsmf.org/wp-content/uploads/2016/05/medical-1006787_960_720-300x200.jpg"
            alt="medical-1006787_960_720"
            width={960}
            height={720}
            sizes="(min-width: 1024px) 600px, 100vw"
          />
        </figure>
      </section>

      <section className="questions-section">
        <h2>Questions to ask your Sarcoma Specialist</h2>
        <ol className="questions-list">
          <li>What stage is my tumor, and what is its mitotic rate?</li>
          <li>
            Should genomic testing or other advanced testing be done on my tumor now? If
            not, why not? If so, how do we get my tumor tested? <strong>(See Note Below)</strong>
          </li>
          <li>
            Do I need chemotherapy now? Is radiation therapy another option for me? What
            are the pros and cons of radiation therapy?
          </li>
          <li>Is immunotherapy a treatment option for me?</li>
          <li>
            What chemotherapy regimen do you feel is best for me – single agent or the
            combination of two or more agents? What gives me the best chance to attain No
            Evidence of Disease (NED) status and a lesser chance of a recurrence?
          </li>
          <li>
            Is one chemotherapy agent better than a combination to help reach NED status?
            Is targeted chemotherapy an option for me?
          </li>
          <li>
            I am interested in finding out all of my treatment options and the pros and
            cons of each in terms of the potential for a positive result, short-term and
            long-term, and the potential side effects of the different treatment options.
          </li>
          <li>
            How often will I be meeting with you during my treatment and what types of
            testing – blood work, imaging studies or biopsies — will be necessary?
          </li>
          <li>
            What are my treatment options if my tumor does not respond to the selected
            treatment protocol?
          </li>
          <li>
            Information for potential discussion with your oncology care team if applicable
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
            What if my tumor recurs locally or metastases develop after my initial
            treatment – what will my treatment options be then?
          </li>
          <li>
            I would like an Integrative Medicine consult in order to learn about proper
            nutrition and other complementary therapies during my chemotherapy treatment and
            after treatment (maintenance regimen).
          </li>
          <li>
            As I enter the treatment phase, how can I ensure that I get the ongoing support
            needed for myself and my caregiver/family members who are caring for me, in
            terms of emotional well-being (i.e. eliminate stress, anxiety during
            appointments etc.)?
          </li>
        </ol>
      </section>

      <section className="questions-section">
        <h2>Questions to Ask Your Sarcoma Surgeon if Surgery is Needed:</h2>
        <ol className="questions-list">
          <li>How many LMS cases have you seen and operated on?</li>
          <li>Based on my imaging studies, does it appear that my tumor is resectable?</li>
          <li>Based on my tumor location and biopsy results, what type of surgery is necessary?</li>
          <li>What further imaging studies or other tests, if any, are needed prior to my surgery?</li>
          <li>Will radiation therapy, chemotherapy, or both be recommended before or after my surgery?</li>
          <li>In proceeding with surgery, will my tumor tissue and/or blood samples be preserved?</li>
          <li>
            How will my tumor tissue or blood samples be preserved and stored and for how long? Where
            will they be housed?
          </li>
          <li>Will genomic testing or other advanced testing be done on my tumor?</li>
          <li>
            Does this decision need to made before the surgery so tissue samples can be obtained and
            processed appropriately? <strong>(See Note Below on Testing Your Tumor)</strong>
          </li>
          <li>
            Will a fresh and/or frozen tumor sample taken during the surgery be used for advanced
            testing or future research?{" "}
            <strong>
              Note the cancer cell line project:{" "}
              <a
                href="https://leiomyosarcoma.info/cancer-cell-line-project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://leiomyosarcoma.info/cancer-cell-line-project/
              </a>
            </strong>
          </li>
        </ol>
      </section>

      <section className="questions-section">
        <h2>Questions to Ask Your Surgeon After Your Surgery:</h2>
        <ol className="questions-list">
          <li>Were you able to completely resect my tumor with clear margins?</li>
          <li>
            Based on the surgical and pathology findings, what is the stage of my tumor and its
            mitotic score? What do these findings mean regarding my need for additional treatment?
          </li>
          <li>What are my treatment options now? Will chemotherapy, radiation therapy or both be needed?</li>
          <li>
            What type of genomic/molecular studies have been done or should be done on my tumor to
            help guide my treatment?
          </li>
          <li>
            What else can I do proactively to ensure that my tumor is available for all possible
            future testing and research efforts?
          </li>
        </ol>
      </section>

      <section className="questions-section">
        <p>
          Dr. Raphael Pollock, a sarcoma specialist and medical oncologist, explains the importance
          of surgery in treating sarcomas in the link below:
        </p>
        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/f06iN5D9gx8"
            title="Dr. Raphael Pollock on Sarcoma Surgery"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="questions-section">
        <h2>Questions to ask your Radiation Oncologist:</h2>
        <ol className="questions-list">
          <li>How many LMS patients have you treated?</li>
          <li>How will radiation treatment be done?</li>
          <li>Where will the treatments be done?</li>
          <li>How many treatments will I receive?</li>
          <li>How long will each individual treatment session last?</li>
          <li>
            What side effects can I expect during and immediately following the completion of the
            treatment?
          </li>
          <li>
            What long-term side effects or complications might I experience following this treatment?
          </li>
          <li>Will I need surgery or chemotherapy after my radiation treatment?</li>
          <li>
            What follow-up biopsies, lab testing or imaging studies will I need following this
            treatment, and for how long?
          </li>
          <li>
            How frequently will I have follow-up appointments with you following the treatment?
          </li>
        </ol>
      </section>

      <section className="questions-section">
        <figure className="questions-image">
          <Image
            src="https://nlsmf.org/wp-content/uploads/2016/05/Genome-en.svg_-300x129.png"
            alt="genome-en-svg"
            width={600}
            height={258}
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </figure>
        <h3 className="questions-note-title">
          <em>
            <strong>NOTE: TESTING YOUR TUMOR FOR CANCER-RELATED GENES:</strong>
          </em>
        </h3>
        <p className="questions-note">
          <em>
            Molecular/genomic testing for sarcoma-related genes may not be for everyone, but by
            staying informed and continuing to ask important questions about such testing
            availability allows you to self-advocate. Make sure that every avenue for testing your
            tumor tissue is explored – potentially making a difference in the cutting-edge
            treatment options and targeted therapies/immunotherapies that might be available to
            you.
          </em>
        </p>
      </section>
    </main>
  );
}
