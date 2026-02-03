"use client";

import { useCallback, useMemo, useState } from "react";

type FaqItem = {
  id: string;
  title: string;
  body: string;
};

const faqItems: FaqItem[] = [
  {
    id: "faq-p1",
    title: "What you need to know about palliative care",
    body:
      "Palliative care is specialized, team-based support focused on symptom relief, communication, and quality of life for people living with serious illness. It can be provided alongside curative or life-prolonging treatments at any stage.",
  },
  {
    id: "faq-p2",
    title: "What is palliative care?",
    body:
      "An extra layer of support that treats pain, symptoms, and stress, and helps with decision-making, care coordination, and emotional well-being for patients and families.",
  },
  {
    id: "faq-p3",
    title: "Who gives palliative care?",
    body:
      "Interdisciplinary teams that may include palliative medicine physicians, advanced practice providers, nurses, social workers, chaplains, psychologists, and other specialists. They work with your oncology and primary teams.",
  },
  {
    id: "faq-p4",
    title: "What facets are encompassed within palliative care?",
    body:
      "Pain and symptom management, emotional and coping support, spiritual care, caregiver support, practical and care navigation needs, financial/legal and employment concerns, and support for family and team communication.",
  },
  {
    id: "faq-p5",
    title: "When is palliative care integrated into cancer care?",
    body:
      "Anytime it can help—often early in the course of illness, at diagnosis, during active treatment, and through survivorship or advanced care. Many sarcoma centers include it as a standard part of care.",
  },
  {
    id: "faq-p6",
    title: "How do I access palliative care services?",
    body:
      "Ask your oncology team for a referral. Services are available in hospitals, clinics, and at home. If not discussed, bring it up and request an evaluation.",
  },
  {
    id: "faq-p7",
    title: "How does palliative care differ from hospice care?",
    body:
      "Palliative care can be provided at any stage alongside active treatment. Hospice focuses on comfort near the end of life (typically with a prognosis of six months or less) and prioritizes quality of life and goals of care.",
  },
  {
    id: "faq-p8",
    title: "Who pays for palliative care?",
    body:
      "Coverage varies by insurance and setting. Many services are covered by Medicare, Medicaid, and private insurers; check your plan benefits and ask providers about covered services and any out-of-pocket costs.",
  },
  {
    id: "faq-p9",
    title:
      "Is there evidence that palliative care helps? Does NCI support palliative care research?",
    body:
      "Studies show palliative care improves symptom control, patient and caregiver satisfaction, and can reduce healthcare burden. The National Cancer Institute supports research in palliative and supportive care across multiple programs.",
  },
];

export default function PalliativeCareClient() {
  const [openId, setOpenId] = useState<string>("faq-p1");
  const toggleOpen = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  }, []);

  const faqList = useMemo(() => faqItems, []);

  return (
    <div className="palliative-care-page">
      <section className="wp-hero">
        <div className="wp-hero-inner">
          <div className="wp-hero-badge">Support &amp; Quality of Life</div>
          <h1 className="wp-hero-title">Palliative Care</h1>
          <p className="wp-hero-sub">
            Specialized, team-based support to reduce symptoms and stress,
            improve quality of life, and help you live as well as possible—at
            any stage of illness.
          </p>
        </div>
      </section>

      <div className="content-container content-grid">
        <aside className="wp-sidebar">
          <nav className="wp-nav" aria-label="Palliative Care Navigation">
            <a className="wp-nav-link" href="#intro">
              Introduction
            </a>
            <a className="wp-nav-link" href="#palliative-vs-hospice">
              Palliative vs. Hospice
            </a>
            <a className="wp-nav-link" href="#nccn">
              NCCN Guidelines
            </a>
            <a className="wp-nav-link" href="#facets">
              What It Addresses
            </a>
            <a className="wp-nav-link" href="#when">
              When To Integrate
            </a>
            <a className="wp-nav-link" href="#access">
              How To Access
            </a>
            <a className="wp-nav-link" href="#research">
              Research &amp; Evidence
            </a>
            <a className="wp-nav-link" href="#resources">
              Additional Resources
            </a>
          </nav>
          <div className="wp-sidebar-cta">
            <h3>Need Support?</h3>
            <p>
              Ask your sarcoma care team about palliative care services and how
              they can support you and your family.
            </p>
            <a
              className="wp-cta-btn"
              href="https://nlmsf.org/support/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support NLMSF
            </a>
          </div>
        </aside>

        <main>
          <section id="intro" className="section">
            <h2 className="section-title gradient-text">Palliative Care</h2>
            <p className="lead">
              Palliative care is a specialized, team-based approach for those
              living with a serious illness. It focuses on relieving symptoms,
              pain, and treatment-related side effects while helping patients
              and families navigate the emotional and practical challenges that
              can arise—at any stage of illness.
            </p>
          </section>

          <section id="palliative-vs-hospice" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #22c55e 100%)",
              }}
            >
              Palliative Care vs. Hospice
            </h3>
            <div className="grid two">
              <article className="card">
                <h4 className="card-title">Palliative Care</h4>
                <p>
                  The goal is to alleviate suffering and improve quality of life
                  for people with serious illness. Specialists address pain,
                  symptoms, and stress, working alongside your existing medical
                  team—in the hospital, clinic, or at home—to help you live your
                  best life for as long as possible.
                </p>
              </article>
              <article className="card">
                <h4 className="card-title">Hospice Care</h4>
                <p>
                  Hospice is an insurance benefit for people approaching the end
                  of life (typically with a prognosis of six months or less if
                  the illness runs its natural course). It provides
                  comprehensive support focused on comfort, goals, and quality
                  of life—often at home—for both patients and families.
                </p>
              </article>
            </div>
          </section>

          <section id="nccn" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
              }}
            >
              NCCN Patient Guidelines
            </h3>
            <p className="muted">
              Shared by the National Leiomyosarcoma Foundation; publicly
              accessible resources from the NCCN Foundation.
            </p>
            <ul className="checklist">
              <li>Fatigue and Cancer</li>
              <li>Palliative Care</li>
              <li>Distress During Cancer Care</li>
              <li>What you need to know about palliative care</li>
              <li>What is palliative care?</li>
              <li>Who gives palliative care?</li>
            </ul>
          </section>

          <section id="facets" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)",
              }}
            >
              What Does Palliative Care Address?
            </h3>
            <div className="grid three">
              <div className="pill">Physical symptoms</div>
              <div className="pill">Emotional and coping support</div>
              <div className="pill">Spiritual needs</div>
              <div className="pill">Caregiver needs</div>
              <div className="pill">Practical needs</div>
              <div className="pill">Important individuals in care</div>
              <div className="pill">Financial and legal concerns</div>
              <div className="pill">Insurance questions</div>
              <div className="pill">Employment concerns</div>
              <div className="pill">Family and team communication</div>
            </div>
          </section>

          <section id="when" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",
              }}
            >
              When Is Palliative Care Integrated?
            </h3>
            <p>
              Palliative care can be integrated at any time during cancer
              care—from diagnosis through survivorship—whenever symptom
              management, decision support, or psychosocial care could help.
              Many sarcoma centers of excellence include palliative care as a
              standard part of their protocols.
            </p>
          </section>

          <section id="access" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
              }}
            >
              How Do I Access Palliative Care?
            </h3>
            <p>
              Ask your oncology team for a referral to a palliative care
              service. It can be provided in hospitals, clinics, and at home. If
              it is not discussed during your visits, be sure to ask about it—
              palliative care is about living well while you receive cancer
              treatment.
            </p>
          </section>

          <section id="research" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
              }}
            >
              Research &amp; Evidence
            </h3>
            <p>
              There is growing evidence that palliative care improves symptoms,
              quality of life, and care satisfaction for patients and families.
              The National Cancer Institute (NCI) supports palliative care
              research across many domains.
            </p>
          </section>

          <section id="sarcoma-palliative-info" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #22c55e 100%)",
              }}
            >
              Palliative Care Information for Sarcoma
            </h3>
            <p className="lead" style={{ marginTop: "8px" }}>
              PALLIATIVE CARE — WHAT SHOULD PATIENTS AND FAMILIES/CAREGIVERS
              KNOW TO HELP DURING TREATMENT
            </p>
            <p>
              <a
                href="https://hogonext.com/how-to-access-palliative-care-for-sarcoma/"
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                How to Access Palliative Care for Sarcoma — HogoNext
              </a>
            </p>
          </section>

          <section id="resources" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)",
              }}
            >
              Additional Resources
            </h3>
            <ul className="resource-list">
              <li>
                <a
                  href="https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/what-palliative-care-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Cancer.net (American Society of Clinical Oncology): What is
                  Palliative Care
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/types-palliative-care-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Cancer.net: Types of Palliative Care
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.org/content/dam/CRC/PDF/Public/7958.00.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  American Cancer Society: Understanding Palliative Care (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.org/treatment/treatment-and-side-effects/palliative-care/how-to-find.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  American Cancer Society: Finding a Palliative Care Program
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.org.au/cancer-information/treatment/palliative-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Cancer Council Australia: Palliative Care
                </a>
              </li>
            </ul>
          </section>

          <section id="faq" className="section">
            <h3
              className="subheading"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #6366f1 100%)",
              }}
            >
              Palliative Care FAQ
            </h3>
            <p className="faq-hint" id="faq-instructions">
              Tip: Click any question below to expand and view the answer.
            </p>
            <div
              className="faq-accordion"
              role="region"
              aria-label="Palliative Care FAQ"
              aria-describedby="faq-instructions"
            >
              {faqList.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <div className="faq-item" key={item.id}>
                    <button
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={item.id}
                      id={`${item.id}-trigger`}
                      type="button"
                      onClick={() => toggleOpen(item.id)}
                    >
                      <span className="faq-marker" aria-hidden="true"></span>
                      <span className="faq-title">{item.title}</span>
                      <svg
                        className="faq-chevron"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 8l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id={item.id}
                      className={`faq-panel${isOpen ? " is-open" : ""}`}
                      role="region"
                      aria-labelledby={`${item.id}-trigger`}
                    >
                      <div className="faq-panel-inner">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
