import type { Metadata } from "next";
import Image from "next/image";
import "./second-opinions-2.css";

export const metadata: Metadata = {
  title: "Second Opinions for LMS Patients | NLMSF",
  description:
    "Understanding the importance of second opinions for rare cancers like Leiomyosarcoma and how to navigate the process effectively.",
};

export default function SecondOpinionsTwoPage() {
  return (
    <main className="second-opinions-2-page">
      <section className="so2-hero">
        <div className="hero-decoration hero-decoration-1" aria-hidden />
        <div className="hero-decoration hero-decoration-2" aria-hidden />

        <div className="hero-content">
          <span className="resource-badge">Patient Resource</span>
          <h1 className="hero-title">Second Opinions for LMS Patients</h1>
          <p className="hero-description">
            Understanding the importance of second opinions for rare cancers like Leiomyosarcoma
            and how to navigate the process effectively.
          </p>
          <div className="hero-cta">
            <a href="#resources" className="btn btn-primary">
              Find Resources <i className="fas fa-arrow-right" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <div className="so2-layout">
        <aside className="sidebar page-nav">
          <h3 className="sidebar-title">On This Page</h3>
          <div className="nav-section">
            <a href="#introduction" className="nav-link">
              Introduction
            </a>
          </div>
          <div className="nav-section section-diagnosis">
            <a href="#why-seek" className="nav-link">
              Why a Second Opinion?
            </a>
          </div>
          <div className="nav-section section-treatment">
            <a href="#patient-profiles" className="nav-link">
              Patient Profiles
            </a>
          </div>
          <div className="nav-section section-treatment">
            <a href="#relationships" className="nav-link">
              Doctor Relationships
            </a>
          </div>
          <div className="nav-section section-during">
            <a href="#advantages" className="nav-link">
              Advantages
            </a>
          </div>
          <div className="nav-section section-during">
            <a href="#sarcoma-specific" className="nav-link">
              Sarcoma Considerations
            </a>
          </div>
          <div className="nav-section section-after">
            <a href="#feedback" className="nav-link">
              Giving Feedback
            </a>
          </div>
          <div className="nav-section section-after">
            <a href="#resources" className="nav-link">
              Resources
            </a>
          </div>
        </aside>

        <div className="second-opinions-content">
          <div id="introduction" className="intro-card">
            <p>
              Seeking a second opinion is an important step for many cancer patients, especially
              those with rare cancers like Leiomyosarcoma (LMS). This page provides essential
              information about why patients seek second opinions, how to navigate the process, and
              resources available to help.
            </p>
          </div>

          <div className="main-content">
            <div id="second-opinion" className="content-section advantages-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-clipboard-check" aria-hidden />
                </div>
                <h2 className="section-title">Getting a Second Opinion</h2>
              </div>
              <div className="section-content">
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-clipboard-check" aria-hidden />
                    </div>
                    <div className="card-title">
                      <h3>When to Get a Second Opinion</h3>
                    </div>
                  </div>
                  <ul className="check-list">
                    <li>After initial diagnosis, before starting treatment</li>
                    <li>If you&apos;re unsure about your treatment plan</li>
                    <li>If your cancer isn&apos;t responding to treatment</li>
                    <li>Before undergoing major surgery</li>
                    <li>If you&apos;re considering a clinical trial</li>
                  </ul>
                </div>

                <p>
                  Many insurance plans cover second opinions, and some even require them before
                  certain treatments. Check with your insurance provider about their policy on
                  second opinions.
                </p>

                <div className="tip-box">
                  <div className="tip-header">
                    <i className="fas fa-lightbulb" aria-hidden />
                    <h4>Tip: Prepare for Your Second Opinion</h4>
                  </div>
                  <p>Before your appointment, gather all your medical records, including:</p>
                  <ul className="bullet-list">
                    <li>Pathology reports</li>
                    <li>Imaging studies (CT scans, MRIs, etc.)</li>
                    <li>Lab results</li>
                    <li>Current treatment plan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="faqs" className="content-section faqs-section">
              <div className="section-header">
                <div className="icon-wrapper">
                  <i className="fas fa-question" aria-hidden />
                </div>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
              <div className="section-content">
                <div className="info-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <i className="fas fa-info-circle" aria-hidden />
                    </div>
                    <div className="card-title">
                      <h3>Questions About Seeking a Second Opinion</h3>
                      <p>Key considerations for sarcoma patients</p>
                    </div>
                  </div>

                  <div className="accordion">
                    <details open>
                      <summary>When should I seek a second opinion for sarcoma cancer?</summary>
                      <p>
                        Empower yourself by considering a second opinion if you need sarcoma cancer
                        timing advice, want a fresh perspective on your diagnosis, or are exploring
                        new sarcoma cancer care options.
                      </p>
                    </details>
                    <details>
                      <summary>
                        How can I determine the right time for a second opinion on sarcoma cancer?
                      </summary>
                      <p>
                        Expert review in sarcoma cancer is particularly crucial when there are
                        uncertainties about your diagnosis or when you&apos;re evaluating different
                        treatment strategies. It&apos;s a key step in ensuring you&apos;re on the right
                        path.
                      </p>
                    </details>
                    <details>
                      <summary>
                        What factors indicate the need for a second opinion for sarcoma cancer?
                      </summary>
                      <p>
                        There are several factors that may indicate the need for a second opinion for
                        sarcoma cancer. These include seeking a diagnosis update, wanting a different
                        perspective on your care options, or needing clarification on your current
                        treatment. Recognizing these signs can help you make informed decisions about
                        your health.
                      </p>
                    </details>
                    <details>
                      <summary>How often should I get a second opinion for sarcoma cancer?</summary>
                      <p>
                        Consider a second opinion if there is a significant change in your condition
                        or if you require an expert review timing for sarcoma cancer to evaluate new,
                        potentially beneficial sarcoma cancer care options.
                      </p>
                    </details>
                    <details>
                      <summary>What should I expect from a second opinion for sarcoma cancer?</summary>
                      <p>
                        Expect a detailed review of your sarcoma cancer timing advice, with insights
                        that might affect your diagnosis update and sarcoma cancer care options.
                      </p>
                    </details>
                    <details>
                      <summary>Why is it essential to get a second opinion for sarcoma cancer?</summary>
                      <p>
                        It&apos;s essential to confirm the accuracy of your sarcoma cancer diagnosis
                        check and ensure that you are considering all possible sarcoma cancer care
                        options.
                      </p>
                    </details>
                  </div>

                  <h4>Additional FAQ Resources</h4>
                  <ul className="bullet-list">
                    <li>
                      <a
                        href="https://www.stanfordchildrens.org/en/landing/second-opinion/faq.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stanford Health Care: FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dana-farber.org/appointments-second-opinions/second-opinion-program/faq"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dana-Farber Cancer Institute: Online Second Opinion FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pennmedicine.org/for-patients-and-visitors/find-a-program-or-service/connected-health/virtual-second-opinions/frequently-asked-questions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Penn Medicine: Virtual Second Opinions FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="section-title">Expert Video Resources on Second Opinions</h2>
            <div className="video-resources">
              <div className="video-resource-card">
                <div className="card-header">
                  <div className="icon-circle icon-purple">
                    <i className="fas fa-video" aria-hidden />
                  </div>
                  <h3>Expert Videos on Second Opinions</h3>
                </div>
                <p>
                  Leading sarcoma experts discuss the importance of second opinions for pathology
                  reports and how they can significantly impact your treatment plan.
                </p>

                <div className="video-grid">
                  <div className="video-item">
                    <div className="video-thumbnail">
                      <a
                        href="https://www.youtube.com/watch?v=govsZ9Lre4E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-link"
                      >
                        <Image
                          src="https://i.ytimg.com/vi/govsZ9Lre4E/hqdefault.jpg"
                          alt="Seeking a Second Opinion Before Sarcoma Treatment Begins"
                          className="thumbnail-img"
                          width={480}
                          height={360}
                          sizes="(min-width: 768px) 320px, 100vw"
                        />
                        <div className="play-button">
                          <i className="fas fa-play-circle" aria-hidden />
                        </div>
                      </a>
                    </div>
                    <div className="video-info">
                      <h4>Seeking a Second Opinion Before Sarcoma Treatment Begins</h4>
                      <p className="video-quote">
                        "With sarcoma, it is important to get the diagnosis right and to ensure that
                        the first thing done is the right thing." - Dr. George Demetri
                      </p>
                    </div>
                  </div>

                  <div className="video-item">
                    <div className="video-thumbnail">
                      <a
                        href="https://www.youtube.com/watch?v=q9KmGBZg9pI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-link"
                      >
                        <Image
                          src="https://i.ytimg.com/vi/q9KmGBZg9pI/hqdefault.jpg"
                          alt="Second Opinions for Sarcoma Patients"
                          className="thumbnail-img"
                          width={480}
                          height={360}
                          sizes="(min-width: 768px) 320px, 100vw"
                        />
                        <div className="play-button">
                          <i className="fas fa-play-circle" aria-hidden />
                        </div>
                      </a>
                    </div>
                    <div className="video-info">
                      <h4>Second Opinions for Sarcoma Patients</h4>
                      <p className="video-desc">
                        Dr. Richard Gorlick discusses the importance of second opinions in sarcoma
                        diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="why-seek" className="content-section reasons-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-question-circle" aria-hidden />
                  </div>
                  <h2 className="section-title">Why a Second Opinion?</h2>
                </div>
                <div className="section-content">
                  <p>Multiple factors justify patients to seek a second medical opinion.</p>

                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-chart-pie" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3 id="research-findings">Research Findings</h3>
                        <p>Statistical insights</p>
                      </div>
                    </div>

                    <p>
                      From 17% to 68% of the patients, according to different authors Philip et al.
                      (2010); Mellink et al. (2003), ask for second medical opinion to confirm
                      diagnosis or treatment (Mellink et al., 2003). Nearly half (46%) of cancer
                      patients sought a second medical opinion due to treatment complications (Tam
                      et al., 2005).
                    </p>
                  </div>

                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-list-ul" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3 id="common-reasons">Common Reasons</h3>
                        <p>Why patients seek another perspective</p>
                      </div>
                    </div>

                    <p>
                      Your reason for getting a second doctor to weigh in on your cancer diagnosis
                      and care may be as simple as wanting as much information as possible. But you
                      may also want another opinion to:
                    </p>

                    <ul className="bullet-list">
                      <li>Make sure your diagnosis is right</li>
                      <li>Find out more about the type, stage, and location of your cancer</li>
                      <li>Talk to a doctor with expertise in your cancer</li>
                      <li>Explore other treatment options</li>
                      <li>See what clinical trials might work for you</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="relationships" className="content-section relationships-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-handshake" aria-hidden />
                  </div>
                  <h2 className="section-title">Patient-Oncologist Relationships</h2>
                </div>
                <div className="section-content">
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-heart" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3 id="discussing-second-opinion">The Emotional Contract</h3>
                        <p>Trust and communication dynamics</p>
                      </div>
                    </div>

                    <p id="managing-relationships">
                      The patient-oncologist relationship should carry inherent elements of trust,
                      loyalty, intimacy and dependency, which belong to the emotional contract
                      between patient and physician. The major predictor for loyalty and mutual
                      commitment to treatment success are trust and satisfaction (DiMatteo, 2003;
                      Platonova et al., 2008).
                    </p>
                  </div>
                </div>
              </div>

              <div id="advantages" className="content-section advantages-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-plus-circle" aria-hidden />
                  </div>
                  <h2 className="section-title">Advantages of a Second Opinion</h2>
                </div>
                <div className="section-content">
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-check-double" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3 id="treatment-options">Benefits for Patients</h3>
                        <p>Clinical and psychological advantages</p>
                      </div>
                    </div>

                    <p id="second-perspective">
                      The impact of second medical opinion in the oncology treatment pathway is
                      currently being debated. Second medical opinion may involve potential
                      advantages or disadvantages for patients, physicians, and society.
                    </p>

                    <p>
                      Patients can benefit from a second medical opinion, resulting in improved
                      diagnosis or better treatments, or can benefit psychologically being enabled
                      to act more autonomously and exercise some control and freedom of choice (Axon
                      et al., 2008).
                    </p>
                  </div>
                </div>
              </div>

              <div id="sarcoma-specific" className="content-section feedback-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-heartbeat" aria-hidden />
                  </div>
                  <h2 className="section-title">Why It Matters for Sarcoma</h2>
                </div>
                <div className="section-content">
                  <p>
                    If you have a suspicious mass that could be sarcoma – regardless of body
                    location – a sarcoma expert should see it first. Here&apos;s why:
                  </p>

                  <div className="steps-list">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4 id="centers-of-excellence">You might avoid surgery</h4>
                        <p>
                          Our advanced diagnostic techniques may determine whether your tumor is
                          benign, in which case you may not need any surgery, not even for a biopsy.
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Some treatments should begin before tumor removal</h4>
                        <p>
                          Preoperative therapies like chemotherapy and radiation therapy are often
                          used to prevent tumor cells from spreading and to improve surgeons&apos;
                          ability to remove it entirely, with clear margins. If your tumor is already
                          removed before coming to a specialized center, your treatment choices may
                          be limited.
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4 id="rare-cancer-expertise">Sarcoma tumors are unique</h4>
                        <p>
                          Sarcoma tumors have a fragile outer capsule that contains the cancer cells
                          into a mass. If the outer capsule is damaged during biopsy or an operation
                          to remove it, cancer cells can "spill" from the tumor, allowing them to
                          spread or regrow. In addition, microscopic cancer cells often infiltrate
                          beyond what appears to be the edges of the tumor and these tumors often
                          occur near critical blood vessels and organs. Sarcoma tumors should be
                          biopsied and/or removed only by a highly skilled and experienced surgeon
                          who specializes in this rare cancer.
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Less-invasive biopsy</h4>
                        <p>
                          Core needle biopsy that&apos;s guided by imaging such as ultrasound or
                          computed tomography (CT) reduces the risk for cancer cells to spill from
                          the tumor. This helps reduce the chance that the tumor will recur or that a
                          patient would need more drastic surgery, such as amputation. Image-guided
                          core biopsy takes only minutes with little or no discomfort.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="note-box">
                    <p>
                      <em>
                        "They&apos;re very rare, and not every practitioner is experienced in dealing
                        with these types of tumors. Some hospitals may have never seen certain types
                        of sarcomas before."
                      </em>{" "}
                      — Jeffrey M. Farma, MD, FACS, Surgical Oncologist
                    </p>
                  </div>

                  <div className="statistic-box">
                    <p>
                      "It&apos;s crucial to see a physician at an NCI-designated comprehensive cancer
                      center. You will be seen by a multidisciplinary team who specializes in
                      sarcoma and can determine the best treatment plan for your specific disease."
                    </p>
                  </div>

                  <p>
                    Seeking a Sarcoma Specialist at a Sarcoma Centers of Excellence is most
                    important. Obtaining a second opinion to ensure that the diagnosis is correct, is
                    always encouraged, to ensure that the appropriate treatment protocol is
                    established. This Sarcoma Centers Directory can be found here:{" "}
                    <a
                      href="https://www.sarc.org/sarcoma-centers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div id="feedback" className="content-section feedback-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-comments" aria-hidden />
                  </div>
                  <h2 className="section-title">Giving Feedback to Your Care Team</h2>
                </div>
                <div className="section-content">
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-file-medical" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3 id="giving-feedback">Communication</h3>
                        <p>Between healthcare providers</p>
                      </div>
                    </div>

                    <p>
                      A complete visit report should be, directly and/or through the patient,
                      referred to the oncologist who will treat the patient. Consultation between
                      both physicians with the patient can be most valuable for a team approach to
                      treatment considerations/strategies.
                    </p>

                    <p>The general practitioner could be informed of this process, if needed.</p>
                  </div>
                </div>
              </div>

              <div id="conclusions" className="content-section relationships-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-check-circle" aria-hidden />
                  </div>
                  <h2 className="section-title">Conclusions</h2>
                </div>
                <div className="section-content">
                  <div className="info-card">
                    <div className="card-header">
                      <div className="card-icon">
                        <i className="fas fa-thumbs-up" aria-hidden />
                      </div>
                      <div className="card-title">
                        <h3>Final Thoughts</h3>
                        <p>The value of second opinions</p>
                      </div>
                    </div>

                    <p>
                      Second medical opinion is an important step and an opportunity for cancer
                      patients and also for the oncologists, in particular cases to ensure correct
                      treatment strategy and not to overtreat the condition.
                    </p>
                  </div>
                </div>
              </div>

              <div id="resources" className="content-section partnerships-section">
                <div className="section-header">
                  <div className="icon-wrapper">
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </div>
                  <h2 className="section-title">Second Opinion Resources</h2>
                </div>
                <div className="section-content">
                  <h3 id="resource-centers">IMPORTANT VIRTUAL SECOND OPINION RESOURCE CENTERS</h3>

                  <div className="resources-grid">
                    <div className="resource-card">
                      <h4>OSUCCC – James Cancer Center (Online Second Opinion)</h4>
                      <p>
                        <strong>Collaboration with the National Leiomyosarcoma Foundation.</strong>{" "}
                        Online second opinion oncology requests from The James Cancer Center at Ohio
                        State.
                      </p>
                      <ul className="bullet-list">
                        <li>
                          <a
                            href="https://cancer.osu.edu/second-opinion"
                            className="text-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn more about the online second opinion program
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=rzWFiGjLo4I"
                            className="text-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Should you get an online second opinion? | OSUCCC – James (video)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://cancer.osu.edu/for-patients-and-caregivers/international-and-out-of-state-patients-guide/services/second-opinion"
                            className="text-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Online Second Opinion - Cancer Experts | OSUCCC – James
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="resource-card">
                      <h4>ColumbiaDoctors</h4>
                      <p>
                        Included Health helps ColumbiaDoctors deliver its second opinions by
                        gathering your medical records and history.
                      </p>
                      <a
                        href="https://www.columbiadoctors.org/patients/get-second-opinion"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details <i className="fas fa-arrow-right" aria-hidden />
                      </a>
                    </div>

                    <div className="resource-card">
                      <h4>Dana Farber Cancer Institute</h4>
                      <p>
                        Online Second Opinion program powered by Included Health. Typically takes
                        5-7 business days after medical records have been received.
                      </p>
                      <a
                        href="https://www.dana-farber.org/appointments-second-opinions/second-opinion-program/get-started"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get started <i className="fas fa-arrow-right" aria-hidden />
                      </a>
                    </div>

                    <div className="resource-card">
                      <h4>Stanford Medicine</h4>
                      <p>
                        The Stanford Medicine Online Second Opinion program offers you easy access to
                        their world-class doctors.
                      </p>
                      <a
                        href="https://stanfordhealthcare.org/second-opinion/overview.html"
                        className="resource-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more <i className="fas fa-arrow-right" aria-hidden />
                      </a>
                    </div>
                  </div>

                  <h3>Additional Resources</h3>
                  <ul className="bullet-list">
                    <li>
                      <strong>MD Anderson Cancer Center:</strong> Second Opinion Pathology.{" "}
                      <a
                        href="https://www.mdanderson.org/for-physicians/refer-a-patient/second-opinion-pathology.html"
                        className="text-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </li>
                  </ul>

                  <h3>How to Get a Second Opinion</h3>
                  <p>
                    Most insurance companies/employer insurance coverage will reimburse the cost of
                    a second-opinion consultation for cancer and many insurers require a second
                    opinion before covering some treatment costs. Patients can ask their treating
                    physician to send their pathology slides or related materials directly to the
                    Included Health sites listed above.
                  </p>

                  <div className="note-box">
                    <p>
                      Contact the National Leiomyosarcoma Foundation for more information:
                      <br />
                      <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="conclusion-card">
                <p>
                  Second opinions are a crucial part of the LMS patient journey, providing confidence
                  in diagnosis and treatment plans while potentially opening the door to specialized
                  expertise and clinical trials.
                </p>
                <div className="cta-wrapper" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
