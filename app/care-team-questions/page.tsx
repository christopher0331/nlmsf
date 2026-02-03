import type { Metadata } from "next";
import Link from "next/link";
import "./care-team-questions.css";

export const metadata: Metadata = {
  title: "Care Team Questions | NLMSF",
  description:
    "Essential questions to ask your healthcare team throughout your LMS journey. Prepare for appointments, diagnosis, treatment, and survivorship.",
};

export default function CareTeamQuestionsPage() {
  return (
    <div className="care-team-questions-page">
      <section className="hero-container blue-light-bg">
        <div className="hero-badge pill">
          <i className="fas fa-clipboard-list" aria-hidden />
          <span>Patient Resources</span>
        </div>
        <h1 className="hero-headline">Care Team Questions</h1>
        <p className="hero-tagline">
          Essential questions to ask your healthcare team throughout your LMS journey
        </p>
        <div className="hero-features">
          <div className="feature-badge">
            <span>Important Questions</span>
          </div>
          <div className="feature-badge">
            <i className="fas fa-user-md" aria-hidden />
            <span>For Medical Team</span>
          </div>
        </div>
      </section>

      <div className="page-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Navigation</h2>
          <ul className="sidebar-nav-list">
            <li className="sidebar-nav-item">
              <a href="#preparing-appointment" className="sidebar-nav-link indigo">
                <span className="nav-icon">
                  <i className="fas fa-calendar-check" aria-hidden />
                </span>
                Preparing for Appointment
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#initial-diagnosis" className="sidebar-nav-link purple">
                <span className="nav-icon">
                  <i className="fas fa-clipboard-check" aria-hidden />
                </span>
                Initial Diagnosis
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#treatment-planning" className="sidebar-nav-link blue">
                <span className="nav-icon">
                  <i className="fas fa-tasks" aria-hidden />
                </span>
                Treatment Planning
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#during-treatment" className="sidebar-nav-link teal">
                <span className="nav-icon">
                  <i className="fas fa-heartbeat" aria-hidden />
                </span>
                During Treatment
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#after-treatment" className="sidebar-nav-link amber">
                <span className="nav-icon">
                  <i className="fas fa-chart-line" aria-hidden />
                </span>
                After Treatment
              </a>
            </li>
          </ul>
          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Quick Help</h3>
            <div className="quick-help">
              <div className="help-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="help-details">
                  <strong>LMS Lifeline</strong>
                  <a href="tel:3038083437" className="text-link">
                    303-808-3437
                  </a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-envelope" aria-hidden />
                <div className="help-details">
                  <strong>Contact Us</strong>
                  <Link href="/contact" className="text-link">
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="container">
          <div className="hero-container blue-light-bg">
            <div className="hero-overlay light" aria-hidden />
            <div className="hero-content">
              <div className="hero-badge pill">
                <i className="fas fa-info-circle" aria-hidden />
                Patient Guide
              </div>
              <h2 className="hero-headline">Questions to Ask Your Care Team</h2>
              <p className="hero-tagline">
                Empower yourself with the right questions to understand your LMS diagnosis and
                treatment options.
              </p>
              <div className="hero-cta-container">
                <Link href="/contact" className="hero-cta primary">
                  <i className="fas fa-envelope" aria-hidden />
                  Contact a Navigator
                </Link>
                <Link href="/resources" className="hero-cta secondary">
                  <i className="fas fa-book" aria-hidden />
                  View Resources
                </Link>
              </div>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="intro-section">
              <h2 className="section-title">Questions to Ask Your Care Team</h2>
              <p className="section-description">
                Having a list of questions prepared for your healthcare team can help you better
                understand your diagnosis, treatment options, and care plan. The following
                questions are organized by treatment phase to help guide your conversations with
                your care team.
              </p>
              <div className="info-alert">
                <i className="fas fa-info-circle" aria-hidden />
                <div>
                  <strong>Pro Tip:</strong> Consider bringing a friend or family member to
                  appointments to take notes, or ask your doctor if you can record the conversation
                  for future reference.
                </div>
              </div>
            </div>

            <section className="question-section indigo" id="preparing-appointment">
              <div className="section-header">
                <i className="fas fa-calendar-check" aria-hidden />
                <h3>Preparing for Your Oncology Appointment</h3>
              </div>
              <p className="section-intro">
                Being well-prepared for your oncology appointments can help you make the most of
                your time with your care team. These steps will help you stay organized and
                informed.
              </p>
              <div className="info-alert">
                <i className="fas fa-info-circle" aria-hidden />
                <div>
                  <strong>Note:</strong> You and your caregiver are integral parts of your oncology
                  care team, contributing to shared decision-making in your treatment plan and
                  ongoing management.
                </div>
              </div>
              <div className="question-list">
                <div className="question-item">
                  <h4>Research and Resources</h4>
                  <ul>
                    <li>
                      Stay updated on the latest treatment options for Leiomyosarcoma (LMS). New
                      treatments are constantly emerging.
                    </li>
                    <li>
                      Start with the Foundation&apos;s resources, which compile extensive research on
                      your behalf.
                    </li>
                    <li>
                      Contact our <strong>LMS Lifeline Hotline</strong> (available 24/7) for
                      support: <a href="tel:3038083437" className="text-link">303-808-3437</a>.
                    </li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Medication List</h4>
                  <ul>
                    <li>
                      Create or update a list of all medications, including prescription drugs,
                      over-the-counter medications, and supplements.
                    </li>
                    <li>
                      Share this list with your doctor to ensure no medications interfere with your
                      treatment plan.
                    </li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Symptom Tracking</h4>
                  <ul>
                    <li>Keep a journal to track symptoms or changes resulting from your treatment.</li>
                    <li>
                      Note the day, time, duration, severity, and possible triggers (e.g., stress)
                      of symptoms.
                    </li>
                    <li>
                      Share with your sarcoma specialist whether symptoms are improving or
                      worsening and how they impact your life.
                    </li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Palliative Care</h4>
                  <ul>
                    <li>Ask for palliative care if it hasn&apos;t been offered.</li>
                    <li>
                      Understand what palliative care involves to fully utilize its support during
                      your treatment journey.
                    </li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Appointment Planning</h4>
                  <ul>
                    <li>
                      Prepare in advance: lay out clothes, make breakfast, and pack essentials the
                      night before.
                    </li>
                    <li>
                      Arrange transportation, as appointments can be exhausting. Consider bringing a
                      family member or friend to take notes.
                    </li>
                    <li>
                      Explore transport services for wheelchair users, or check for free ride
                      programs like{" "}
                      <a
                        href="https://www.cancertherapyadvisor.com"
                        className="text-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Uber/Lyft for cancer patients
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="question-section purple" id="initial-diagnosis">
              <div className="section-header">
                <i className="fas fa-clipboard-check" aria-hidden />
                <h3>Initial Diagnosis Questions</h3>
              </div>
              <p className="section-intro">
                These questions are helpful when you first receive your LMS diagnosis and are
                beginning to understand your condition.
              </p>
              <div className="question-list">
                <div className="question-item">
                  <h4>About My Diagnosis</h4>
                  <ul>
                    <li>What type of Leiomyosarcoma do I have and where is it located?</li>
                    <li>What stage and grade is my cancer?</li>
                    <li>Has my cancer spread to other parts of my body?</li>
                    <li>What tests have been done, and what do the results mean?</li>
                    <li>Should I get a second opinion? Can you recommend someone?</li>
                    <li>Will I need additional tests before treatment begins?</li>
                    <li>Do you recommend genetic or molecular testing of my tumor?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>About My Care Team</h4>
                  <ul>
                    <li>Who will be coordinating my overall care?</li>
                    <li>Which specialists will be part of my care team?</li>
                    <li>How often will I meet with each specialist?</li>
                    <li>How do I contact someone on my care team in an emergency?</li>
                    <li>Do you have experience treating LMS specifically?</li>
                    <li>Is there a patient navigator or nurse coordinator who can help me?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="question-section blue" id="treatment-planning">
              <div className="section-header">
                <i className="fas fa-tasks" aria-hidden />
                <h3>Treatment Planning Questions</h3>
              </div>
              <p className="section-intro">
                Once your diagnosis is confirmed, these questions can help you understand your
                treatment options and make informed decisions.
              </p>
              <div className="question-list">
                <div className="question-item">
                  <h4>About Treatment Options</h4>
                  <ul>
                    <li>What are all my treatment options?</li>
                    <li>What treatment plan do you recommend and why?</li>
                    <li>What is the goal of this treatment (cure, control, comfort)?</li>
                    <li>What are the benefits and risks of each treatment option?</li>
                    <li>How will we know if the treatment is working?</li>
                    <li>Are there clinical trials I should consider?</li>
                    <li>Should I get treatment at a specialized sarcoma center?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>About Surgery (if applicable)</h4>
                  <ul>
                    <li>What type of surgery do you recommend?</li>
                    <li>What will be removed during surgery?</li>
                    <li>Will you need to take a margin of healthy tissue?</li>
                    <li>What are the possible complications of surgery?</li>
                    <li>How long will I be in the hospital?</li>
                    <li>What will recovery be like?</li>
                    <li>Will I need rehabilitation after surgery?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>About Radiation (if applicable)</h4>
                  <ul>
                    <li>Why do you recommend radiation therapy?</li>
                    <li>Will it be given before or after surgery?</li>
                    <li>How many sessions will I need?</li>
                    <li>What side effects might I experience?</li>
                    <li>How will radiation affect my daily activities?</li>
                    <li>What can I do to manage side effects?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>About Chemotherapy (if applicable)</h4>
                  <ul>
                    <li>Which chemotherapy drugs will I receive?</li>
                    <li>How will they be administered?</li>
                    <li>How many cycles will I need?</li>
                    <li>What side effects should I expect?</li>
                    <li>How will we manage these side effects?</li>
                    <li>Will I be able to work during treatment?</li>
                    <li>Should I consider fertility preservation before starting?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="question-section teal" id="during-treatment">
              <div className="section-header">
                <i className="fas fa-heartbeat" aria-hidden />
                <h3>During Treatment Questions</h3>
              </div>
              <p className="section-intro">
                These questions are helpful while you&apos;re actively undergoing treatment to monitor
                progress and manage side effects.
              </p>
              <div className="question-list">
                <div className="question-item">
                  <h4>Monitoring Treatment</h4>
                  <ul>
                    <li>How will we know if the treatment is working?</li>
                    <li>What tests will be done to monitor my progress?</li>
                    <li>How often will I have scans or other tests?</li>
                    <li>What side effects require immediate medical attention?</li>
                    <li>What symptoms should prompt me to call you right away?</li>
                    <li>Are there any activities I should avoid during treatment?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Managing Side Effects</h4>
                  <ul>
                    <li>What can I do to manage pain?</li>
                    <li>How can I manage nausea, fatigue, or other side effects?</li>
                    <li>
                      Are there supportive care services available (nutrition, physical therapy,
                      etc.)?
                    </li>
                    <li>Should I change my diet during treatment?</li>
                    <li>Can I exercise during treatment? What types are recommended?</li>
                    <li>
                      Are there complementary therapies that might help with side effects?
                    </li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Practical Concerns</h4>
                  <ul>
                    <li>Will I need help at home during treatment?</li>
                    <li>Are there resources to help with transportation to appointments?</li>
                    <li>What resources are available to help with the cost of treatment?</li>
                    <li>Can you connect me with a social worker to discuss support services?</li>
                    <li>Are there support groups you recommend?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="question-section amber" id="after-treatment">
              <div className="section-header">
                <i className="fas fa-chart-line" aria-hidden />
                <h3>After Treatment Questions</h3>
              </div>
              <p className="section-intro">
                These questions are important as you complete your initial treatment and transition
                to survivorship.
              </p>
              <div className="question-list">
                <div className="question-item">
                  <h4>Follow-up Care</h4>
                  <ul>
                    <li>How often will I need follow-up appointments?</li>
                    <li>What tests will I need and how often?</li>
                    <li>What symptoms might indicate a recurrence?</li>
                    <li>What is my risk of recurrence?</li>
                    <li>Will I receive a survivorship care plan?</li>
                    <li>Which doctor should I see for follow-up care?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Long-term Effects</h4>
                  <ul>
                    <li>What long-term side effects might I experience from my treatment?</li>
                    <li>How will these be monitored and managed?</li>
                    <li>Are there late effects I should watch for years after treatment?</li>
                    <li>How might my treatment affect my long-term health?</li>
                    <li>Will I need any rehabilitation services?</li>
                  </ul>
                </div>
                <div className="question-item">
                  <h4>Returning to Normal Life</h4>
                  <ul>
                    <li>When can I return to work or normal activities?</li>
                    <li>Are there any activities I should avoid?</li>
                    <li>What can I do to stay as healthy as possible?</li>
                    <li>Should I follow a special diet or exercise program?</li>
                    <li>Are there support groups for LMS survivors?</li>
                    <li>How can I connect with other LMS survivors?</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="cta-section">
              <h3>Need Help Preparing for Your Appointments?</h3>
              <p>
                Our patient navigators can help you prepare for discussions with your healthcare
                team and ensure you get the information you need.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button">
                  <i className="fas fa-envelope" aria-hidden />
                  <span>Contact a Patient Navigator</span>
                </Link>
                <Link href="/abcs-of-new-diagnosis" className="cta-button secondary">
                  <i className="fas fa-arrow-right" aria-hidden />
                  <span>Explore ABC&apos;s of Newly Diagnosed</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
