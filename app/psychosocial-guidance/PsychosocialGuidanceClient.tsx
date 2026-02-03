"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
  sectionClass: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "challenges", label: "Common Challenges", sectionClass: "section-challenges" },
  { id: "support-types", label: "Types of Support", sectionClass: "section-support" },
  { id: "counseling", label: "Counseling Options", sectionClass: "section-counseling" },
  { id: "nlmsf-support", label: "NLMSF Support Programs", sectionClass: "section-nlmsf" },
  { id: "contact", label: "Contact & Resources", sectionClass: "section-resources" },
];

export default function PsychosocialGuidanceClient() {
  const [activeId, setActiveId] = useState<string>("challenges");
  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));

      for (const section of sections) {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveId(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      return;
    }
    const offsetTop = target.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <main className="psychosocial-guidance-page">
      <div className="hero">
        <div className="badge">
          <i className="fas fa-heart" aria-hidden />
          <span>Support &amp; Wellbeing</span>
        </div>

        <h1 className="hero-title">Psychosocial Support</h1>

        <div className="divider" />

        <p className="hero-description">
          Understanding and addressing the emotional, psychological, and social challenges
          faced by patients and caregivers
        </p>

        <div className="feature-tags">
          <div className="feature-tag purple">
            <i className="fas fa-user-friends" aria-hidden />
            <span>Patient Support</span>
          </div>
          <div className="feature-tag rose">
            <i className="fas fa-hands-helping" aria-hidden />
            <span>Caregiver Resources</span>
          </div>
          <div className="feature-tag indigo">
            <i className="fas fa-comment-dots" aria-hidden />
            <span>Counseling</span>
          </div>
        </div>
      </div>

      <div className="intro-panel">
        <p>
          <strong>Psychosocial Support for LMS Patients and Caregivers</strong>
          <br />
          A cancer diagnosis affects not only physical health but also emotional,
          psychological, and social wellbeing. Both patients and caregivers may experience
          a range of psychosocial challenges throughout the cancer journey.
        </p>
        <p>
          It is normal to need extra help when dealing with cancer. Studies show that
          people with cancer who have social and resource support report better quality of
          life. However, many who could benefit from support services don&apos;t use them
          because they don&apos;t know about them or how to find them.
        </p>
        <p>
          This page provides information about common psychosocial challenges and the
          various types of support available to help patients and caregivers navigate
          these challenges.
        </p>
      </div>

      <div className="page-layout">
        <aside className="page-nav">
          <h3 className="sidebar-title">Page Contents</h3>
          {navItems.map((item) => (
            <div key={item.id} className={`nav-section ${item.sectionClass}`}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeId === item.id ? "active" : ""}`}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            </div>
          ))}
        </aside>

        <div className="main-content">
          <section id="challenges" className="content-section">
            <h2 className="section-title purple">Common Psychosocial Challenges</h2>

            <div className="content-panel purple">
              <div className="panel-header">
                <div className="icon-circle purple">
                  <i className="fas fa-brain" aria-hidden />
                </div>
                <div>
                  <h3>Challenges Faced by Patients and Caregivers</h3>
                  <p>Common emotional and social issues experienced during the cancer journey</p>
                </div>
              </div>
              <div className="panel-text">
                <p>
                  Both patients and caregivers may experience various psychosocial challenges
                  throughout the cancer journey. These can include:
                </p>

                <div className="challenges-grid">
                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-sad-tear" aria-hidden />
                    </div>
                    <p>Trouble coping with having cancer</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-user-friends" aria-hidden />
                    </div>
                    <p>Feeling apart from family and friends</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-home" aria-hidden />
                    </div>
                    <p>Changes in how a family gets along and works together</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-tasks" aria-hidden />
                    </div>
                    <p>Problems with making decisions</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-hiking" aria-hidden />
                    </div>
                    <p>Concern about not being able to do what you enjoy</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-briefcase" aria-hidden />
                    </div>
                    <p>Problems working or going back to work</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-money-bill-wave" aria-hidden />
                    </div>
                    <p>Worries about money</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-hospital" aria-hidden />
                    </div>
                    <p>Stress about making choices about care</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-comment-alt" aria-hidden />
                    </div>
                    <p>Problems talking about how you are feeling</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-venus-mars" aria-hidden />
                    </div>
                    <p>Changes in how you feel about your body and sexual self</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-cloud-rain" aria-hidden />
                    </div>
                    <p>Grief</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-redo" aria-hidden />
                    </div>
                    <p>Fear of the cancer coming back</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-heartbeat" aria-hidden />
                    </div>
                    <p>Fear of death and dying</p>
                  </div>

                  <div className="challenge-card">
                    <div className="challenge-icon">
                      <i className="fas fa-hand-holding-heart" aria-hidden />
                    </div>
                    <p>Concerns about being able to provide good care for a person with cancer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="note-box">
              <div className="note-icon">
                <i className="fas fa-info-circle" aria-hidden />
              </div>
              <div className="note-content">
                <h4>Important to Know</h4>
                <p>
                  Some people have more specific mood changes, such as anxiety, depression and
                  distress. If you need help, there are teams of experts available who understand
                  how cancer affects a person and their loved ones.
                </p>
              </div>
            </div>
          </section>

          <section id="support-types" className="content-section">
            <h2 className="section-title indigo">Types of Psychosocial Support</h2>

            <div className="content-panel indigo">
              <div className="panel-header">
                <div className="icon-circle indigo">
                  <i className="fas fa-hands-helping" aria-hidden />
                </div>
                <div>
                  <h3>Understanding Available Support</h3>
                  <p>Various types of support services that can help patients and caregivers</p>
                </div>
              </div>
              <div className="panel-text">
                <p>
                  Psychosocial support can include various services provided by trained
                  professionals who understand how cancer affects patients and their loved ones:
                </p>
                <ul className="bullet-list indigo">
                  <li>
                    <strong>Counseling:</strong> One-on-one or group sessions with mental health
                    professionals
                  </li>
                  <li>
                    <strong>Education:</strong> Information about cancer, treatment, and coping
                    strategies
                  </li>
                  <li>
                    <strong>Spiritual Support:</strong> Guidance from chaplains or pastoral
                    counselors
                  </li>
                  <li>
                    <strong>Group Support:</strong> Connecting with others who are going through
                    similar experiences
                  </li>
                  <li>
                    <strong>Resource Navigation:</strong> Help finding practical resources and
                    services
                  </li>
                </ul>
                <p>
                  These services may be provided by psychiatrists, psychologists, social workers,
                  psychiatric clinical nurse specialists or nurse practitioners, licensed
                  counselors, or pastoral counselors. They can help you deal with personal issues
                  and refer you to other types of support if needed.
                </p>
                <p>
                  Think about the kinds of problems you have, how much your emotions bother you,
                  and how you have coped in the past. This will help you decide which services can
                  best help you. You should also talk to your cancer care team about any
                  psychosocial problems you are having, so they can help you find the right
                  support.
                </p>
              </div>
            </div>
          </section>

          <section id="counseling" className="content-section">
            <h2 className="section-title rose">Counseling Options</h2>

            <div className="counseling-options">
              <div className="counseling-card individual">
                <div className="counseling-header">
                  <div className="counseling-icon">
                    <i className="fas fa-user" aria-hidden />
                  </div>
                  <h3>Individual Counseling</h3>
                </div>
                <div className="counseling-content">
                  <p>
                    One-on-one counseling might be a good option if your feelings are keeping you
                    from doing your normal activities. In counseling, you can talk with a trained
                    professional about your worries and concerns. Having cancer or having a loved
                    one with cancer is a different experience for each person. Individual
                    counseling gives you a chance to focus on your own feelings and concerns.
                  </p>
                  <h4>Individual counseling can help you:</h4>
                  <ul className="benefit-list">
                    <li>Focus on what you are most bothered by</li>
                    <li>Learn ways to cope with your cancer and changes in your life</li>
                    <li>Deal with symptoms from your cancer and treatment</li>
                    <li>
                      Figure out how to handle changes, such as end of treatment or if your cancer
                      comes back
                    </li>
                    <li>Figure out how best to deal with family issues</li>
                    <li>Deal with strong feelings</li>
                    <li>Talk about your concerns about intimacy and sexuality</li>
                  </ul>
                </div>
              </div>

              <div className="counseling-card couples">
                <div className="counseling-header">
                  <div className="counseling-icon">
                    <i className="fas fa-users" aria-hidden />
                  </div>
                  <h3>Couples or Family Counseling</h3>
                </div>
                <div className="counseling-content">
                  <p>
                    Couples or family counseling may be a healthy option as well. This may help a
                    couple or family figure out what problems they are having by hearing from each
                    other, and better understanding family member perspectives.
                  </p>
                  <p>
                    Learning why you or your family members act in certain ways are key to dealing
                    with it. A counselor can offer guidance and assistance in family communication
                    - to improve how they express feelings and help resolve conflicts. This can
                    help the family come up with ideas about how they can better work and interact
                    together. A win-win for everyone!
                  </p>
                </div>
              </div>

              <div className="counseling-card group">
                <div className="counseling-header">
                  <div className="counseling-icon">
                    <i className="fas fa-comments" aria-hidden />
                  </div>
                  <h3>Group Counseling</h3>
                </div>
                <div className="counseling-content">
                  <p>
                    Some people may also join group counseling. People who have the same kinds of
                    concerns meet to share what they have been going through and support each
                    other. Groups are led by a counselor and have more structure than a support
                    group.
                  </p>
                  <p>
                    Counseling, either one-on-one or group, may also be helpful for children or
                    caregivers of a person with cancer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="nlmsf-support" className="content-section">
            <h2 className="section-title purple">NLMSF Support Programs</h2>

            <div className="nlmsf-programs">
              <div className="program-card group-discussions">
                <div className="program-icon">
                  <i className="fas fa-users" aria-hidden />
                </div>
                <div className="program-content">
                  <h3>Patient-Driven / Caregiver-Driven Group Discussions</h3>
                  <p>
                    The National Leiomyosarcoma Foundation offers Patient-Driven /
                    Caregiver-Driven Group discussions regarding shared experiences, tips to
                    cope, and much more in terms of better understanding. Patients relating to
                    patients, who have the same kinds of concerns, meeting to share what they have
                    been going through and support each other, is a way to build individual
                    resilience and strength in the coping journey of the diagnosis and treatment
                    pathway.
                  </p>
                  <p>
                    Invited special guest speakers share their expertise on psychosocial topics
                    during group discussions at times as well.
                  </p>
                </div>
              </div>

              <div className="program-card buddy-program">
                <div className="program-icon">
                  <i className="fas fa-hands-helping" aria-hidden />
                </div>
                <div className="program-content">
                  <h3>LMS LIFE LINE "BUDDY PROGRAM"</h3>
                  <p>
                    One on One Patient or Caregiver MATCH UP PROGRAM: Connect with someone who
                    understands what you're going through. Our informal buddy program pairs you
                    with another patient or caregiver who has experienced similar challenges.
                  </p>
                  <div className="program-cta">
                    <p>
                      Sign up for personalized mentoring support: provide your profile for a close
                      match up and send to:{" "}
                      <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="content-section">
            <h2 className="section-title teal">Contact &amp; Resources</h2>

            <div className="contact-card">
              <div className="contact-header">
                <i className="fas fa-phone" aria-hidden />
                <h3>LMS LIFELINE SUPPORT HOTLINE</h3>
              </div>
              <div className="contact-info">
                <p>Reach out to our 24/7 support hotline:</p>
                <div className="contact-details">
                  <div className="contact-person">
                    <span className="contact-name">Annie Achee</span>
                  </div>
                  <div className="contact-methods">
                    <a href="tel:3038083437" className="contact-phone">
                      <i className="fas fa-phone-alt" aria-hidden />
                      <span>303-808-3437</span>
                    </a>
                    <a href="mailto:annieachee@aol.com" className="contact-email">
                      <i className="fas fa-envelope" aria-hidden />
                      <span>annieachee@aol.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="resources-note">
              <p>
                Remember that seeking help is a sign of strength, not weakness. Many people with
                cancer find that professional support helps them cope with their emotions and
                challenges in ways they couldn&apos;t on their own.
              </p>
              <p>
                Talk to your healthcare team about what resources might be right for you, or reach
                out to NLMSF directly for personalized guidance.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
