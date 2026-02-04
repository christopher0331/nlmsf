"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const NAV_OFFSET = 100;

export default function PatientDrivenResearchClient() {
  const navTargets = useMemo(
    () => [
      "count-me-in",
      "pattern-org",
      "cure-id",
      "patient-initiatives",
      "cmi-details",
      "cmi-news",
      "who-can-join",
    ],
    [],
  );

  const setActiveLink = useCallback(() => {
    const scrollPosition = window.scrollY;
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      ".page-nav .nav-link",
    );
    let activeId = "";

    navTargets.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      const sectionTop = section.offsetTop - NAV_OFFSET;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeId = sectionId;
      }
    });

    navLinks.forEach((link) => link.classList.remove("active"));
    if (activeId) {
      const activeLink = document.querySelector<HTMLAnchorElement>(
        `.page-nav .nav-link[href="#${activeId}"]`,
      );
      if (activeLink) activeLink.classList.add("active");
    }
  }, [navTargets]);

  useEffect(() => {
    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
    return () => window.removeEventListener("scroll", setActiveLink);
  }, [setActiveLink]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
        behavior: "smooth",
      });
    },
    [],
  );

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <div className="patient-driven-research-page">
      <div className="hero">
        <div className="badge">
          <i className="fas fa-microscope" aria-hidden />
          <span>Patient Participation</span>
        </div>
        <h1 className="hero-title">Patient-Driven Research</h1>
        <div className="hero-divider"></div>
        <p className="hero-description">
          Patients play a vital role in advancing LMS research through direct
          participation and advocacy. Learn how your involvement can help
          accelerate discoveries and improve treatment options.
        </p>

        <div className="feature-tags">
          <div className="feature-tag">
            <i className="fas fa-dna" aria-hidden />
            Research
          </div>
          <div className="feature-tag">
            <i className="fas fa-users" aria-hidden />
            Advocacy
          </div>
          <div className="feature-tag">
            <i className="fas fa-hospital" aria-hidden />
            Treatment
          </div>
        </div>
      </div>

      <div className="hero-partner-logo">
        <Image
          src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.14.18-PM.png"
          alt="Partnering with Patients"
          width={240}
          height={240}
        />
      </div>

      <div className="container">
        <button
          type="button"
          className="page-nav-toggle"
          onClick={toggleNav}
          aria-expanded={navOpen}
        >
          Jump to Section
        </button>
        <div className="pdr-layout">
          <nav className={`page-nav${navOpen ? " is-open" : ""}`}>
            <div className="nav-section section-introduction">
              <a href="#count-me-in" className="nav-link" onClick={handleNavClick}>
                Count Me In Project
              </a>
              <a href="#pattern-org" className="nav-link" onClick={handleNavClick}>
                Pattern.org
              </a>
              <a href="#cure-id" className="nav-link" onClick={handleNavClick}>
                CURE ID Initiative
              </a>
            </div>

            <div className="nav-section section-participation">
              <a
                href="#patient-initiatives"
                className="nav-link"
                onClick={handleNavClick}
              >
                Patient-Driven Initiatives
              </a>
              <a href="#cmi-details" className="nav-link" onClick={handleNavClick}>
                Count Me In Details
              </a>
              <a href="#cmi-news" className="nav-link" onClick={handleNavClick}>
                Latest Updates
              </a>
              <a href="#who-can-join" className="nav-link" onClick={handleNavClick}>
                Who Can Join
              </a>
            </div>
          </nav>

          <main className="pdr-content-section">
            <section id="count-me-in">
              <div className="research-initiative-card cmi-section">
                <div className="research-section-header">
                  <h2 className="section-title">The COUNT ME IN PROJECT</h2>
                  <div className="subtitle-wrapper">
                    <p className="section-subtitle">
                      A patient-partnered initiative to accelerate LMS research
                    </p>
                  </div>
                </div>

                <div className="research-content">
                  <p>
                    The International LMS Research Roundtable is in its 6th year
                    of collaborative success to move research forward in a
                    unique way - with four workgroups focused throughout the
                    year, reporting each and every year on current progress to
                    the Roundtable membership. Working with MD Anderson is an
                    added bonus, along with CURE ID for Repurposed Drug
                    initiative collaboration with the NLMSF:
                  </p>

                  <div className="highlight-box">
                    <p className="highlight-text">RESEARCH SAVES LIVES!</p>
                    <p className="highlight-text">SURVIVORSHIP IS IMPACTED!</p>
                  </div>

                  <a
                    href="https://docs.google.com/document/d/1X8Z9J5Z9Z9Z9/edit"
                    className="document-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Count Me In Project Handout - 4-12-24
                  </a>

                  <p>
                    The National Leiomyosarcoma Foundation is partnering with
                    Count Me In to inform patients about this exciting project
                    and to encourage them to participate at NO COST. The Count
                    Me In LMS project is a non-profit initiative, bringing
                    patients and researchers together to accelerate discoveries
                    in cancer research. The LMS project is a database / natural
                    history database, supported by a grant from the National
                    Cancer Institute. For more detailed information:{" "}
                    <a
                      href="http://www.lmsproject.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      www.lmsproject.org
                    </a>
                  </p>

                  <div className="new-development">
                    <h3>New Development - Now in 2024 for Uterine LMS</h3>
                    <p>
                      Learn more updates on the CMI - NLMSF Uterine LMS Pilot
                      Program that needs direct patient advocacy along with the
                      regular Count Me in Project - both are important to learn
                      more about / ask questions.
                    </p>
                  </div>

                  <div className="highlight-box">
                    <h3>Update: LMS Project Webinar (Count Me In) — 2025</h3>
                    <p>
                      Dr. Suzanne George and the CMI LMS Project team share
                      updates on the LMS Project, the <strong>uLMS pilot</strong>
                      , and the collaboration with the{" "}
                      <strong>NIH LMS SPORE</strong> program. NLMSF has
                      co-funded support for the past 4 years and continues to do
                      so.
                    </p>
                    <div className="video-link">
                      <a
                        href="https://youtu.be/IuSRMS3lGw8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="document-link"
                      >
                        Watch the update on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pattern-org">
              <div className="research-initiative-card pattern-section">
                <div className="research-section-header">
                  <div className="section-title-row">
                    <h2 className="section-title">
                      RARE CANCER RESEARCH FOUNDATION / Pattern.org
                    </h2>
                    <Image
                      className="section-title-logo"
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.13.59-PM.png"
                      alt="Pattern.org"
                      width={240}
                      height={240}
                    />
                  </div>
                  <div className="links-wrapper">
                    <a
                      href="https://rarecancer.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      https://rarecancer.org/
                    </a>
                    <span className="link-separator">and</span>
                    <a
                      href="https://pattern.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      https://pattern.org/
                    </a>
                  </div>
                  <div className="subtitle-wrapper">
                    <p className="section-subtitle">
                      Research Matters / Research Saves Lives!
                    </p>
                  </div>
                </div>

                <div className="research-content">
                  <p>
                    The Rare Cancer Research Foundation and the National
                    Leiomyosarcoma Foundation joined forces in 2017 to offer
                    patients the opportunity to advance research through their
                    decision to donate tumor tissue ahead of a scheduled surgery
                    to extract the LMS tumor.
                  </p>

                  <p>
                    Pattern.org is the patient powered platform empowering
                    patients to advocate for the acceleration of research
                    initiative through contributing tumor tissue samples, where
                    clinical data will be derived for global research access -
                    note: de-identified clinical data.
                  </p>

                  <blockquote className="research-quote">
                    &quot;By contributing your tumor tissue through a surgery,
                    biopsy, or fluid drain you make it possible for researchers
                    to make a working copy of your cancer type that will
                    continually grow in a laboratory. This copy is called a
                    &quot;model&quot; and it makes it easy for researchers to
                    study your cancer type and test treatment ideas. Simply put,
                    by sharing your tumor tissue, you make it possible for
                    researchers to make faster progress on critical cancer
                    research.&quot;
                    <cite>- Pattern.org</cite>
                  </blockquote>

                  <div className="quote-illustration">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.09.38-PM.png"
                      alt="Pattern.org patient contribution illustration"
                      width={640}
                      height={360}
                    />
                  </div>
                  <div className="quote-gallery">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.13.59-PM.png"
                      alt="Pattern.org process screenshot 1"
                      width={640}
                      height={360}
                    />
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.14.18-PM.png"
                      alt="Pattern.org process screenshot 2"
                      width={640}
                      height={360}
                    />
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/Screenshot-2025-10-02-at-3.14.30-PM.png"
                      alt="Pattern.org process screenshot 3"
                      width={640}
                      height={360}
                    />
                  </div>
                  <p>
                    Improving patient outcomes and advancing not only research,
                    but survivorship of leiomyosarcoma is the goal of patients
                    directly impacting research in this way.
                  </p>

                  <p>
                    Pattern.org is a revolutionary platform through the Rare
                    Cancer Research Foundation, with the highest standards of
                    privacy and security, that empowers patients to donate
                    de-identified live tumor tissue samples and clinical data
                    directly to the global research community – to enable
                    researchers to:
                  </p>

                  <ul className="research-benefits">
                    <li>have more information about the disease</li>
                    <li>more tools and resources to amplify data</li>
                    <li>enhance informed treatment decisions</li>
                  </ul>

                  <div className="highlight-box">
                    <h3>An LMS Biobank is established:</h3>
                    <ul className="research-benefits">
                      <li>
                        to break down silos of institutional biobanks that
                        fracture data collection efforts
                      </li>
                      <li>
                        to build a shared resource across the country for the
                        LMS Patient Community
                      </li>
                      <li>
                        Data harmonized across leading sarcoma centers of
                        excellence creates an open source data commons
                      </li>
                      <li>
                        Create the ability to explore Repurposing Drugs research
                        for LMS
                      </li>
                    </ul>
                    <p>
                      This revolutionizes the ability to promote rapid
                      advancement of scientific discovery!
                    </p>
                  </div>

                  <div className="call-to-action">
                    <p>
                      TOGETHER WE CAN ALL COME TOGETHER TO ACCELERATE LMS
                      RESEARCH, ADVANCE LMS TREATMENT OPTIONS, AND ENHANCE
                      SURVIVORSHIP!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cure-id">
              <div className="research-initiative-card cure-id-section">
                <div className="research-section-header">
                  <h2 className="section-title">
                    CURE ID PATIENT INFORMATION TOOL KIT
                  </h2>
                  <div className="subtitle-wrapper">
                    <p className="section-subtitle">
                      help researchers identify drugs for repurposing in the
                      treatment of LMS
                    </p>
                  </div>
                </div>

                <div className="research-content">
                  <div className="cure-id-image">
                    <Image
                      src="https://media.nlmsf.org/wp-content/uploads/2025/10/cure-id.png"
                      alt="CURE ID"
                      width={240}
                      height={240}
                    />
                  </div>
                  <div className="highlight-box">
                    <h3>CURE ID REPURPOSED DRUG TOOL KIT FOR PATIENTS</h3>
                    <p>The Repurposed Drug Initiative</p>
                  </div>

                  <p>
                    The NLMSF in collaborative partnership with CURE ID, will be
                    launching the Repurposed Drug initiative for Leiomyosarcoma
                    patients to participate for a patient registry of
                    de-identified data that will be analyzed against drugs
                    approved by the FDA. This promotes the potential for
                    advancing new treatment options for LMS.
                  </p>

                  <p>
                    Drug repurposing refers to the identification of clinically
                    approved drugs with the known safety profiles and defined
                    pharmacokinetic properties for new indications. Despite the
                    advances in oncology research, cancers are still associated
                    with the most unmet medical needs.
                  </p>

                  <p>
                    Tumor biomarkers associated with the different outcomes,
                    such as the anticancer response or toxicity, can be used in
                    the future, together with a patient&apos;s genetic profile, to
                    personalize their treatment.
                  </p>

                  <p>
                    Read this Nov. 2023 article on the topic in the British
                    Journal of Cancer:{" "}
                    <a href="#" className="document-link">
                      Unlocking hidden potential: advancements, approaches, and
                      obstacles in repurposing drugs for cancer therapy
                    </a>
                    .
                  </p>

                  <div className="contact-info">
                    <h3>CURE ID Resources</h3>
                    <ul>
                      <li>
                        Guidance from CURE ID for the Repurposing Drug
                        Initiative Partnership with the NLMSF:{" "}
                        <a
                          className="document-link"
                          href="https://docs.google.com/document/d/1mJPJ5MsYuyCv_sg0Ru0K9QExWiJsJLOt/edit?usp=sharing&ouid=108192603532095592800&rtpof=true&sd=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open guidance document
                        </a>
                      </li>
                      <li>
                        How-to guide:{" "}
                        <a
                          className="document-link"
                          href="https://cure.ncats.io/resources/guides"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://cure.ncats.io/resources/guides
                        </a>
                      </li>
                      <li>
                        FAQs and Videos (see Case Report Demonstration Videos →
                        Rare Cancers (Sarcoma)):{" "}
                        <a
                          className="document-link"
                          href="https://cure.ncats.io/resources/faqs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://cure.ncats.io/resources/faqs
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="highlight-box highlight-box-lime">
                    <p>
                      The NLMSF has also launched a complementary LMS Workgroup
                      for Repurposed Drugs using Leiomyosarcoma cell line (from
                      tumor tissue) processing — for drugs approved by the FDA
                      for drug response exploration. This initiative includes
                      collaborative partnership with: the Fred Hutchinson
                      Cancer Center, MD Anderson Cancer Center and UMass General
                      in Massachusetts.
                    </p>
                    <p>
                      <strong>
                        Such research has great potential to help ANY SARCOMA
                        SUBTYPE IN THE FUTURE.
                      </strong>
                    </p>
                  </div>

                  <p>
                    More information on the CRDC/NLMSF program will be
                    forthcoming in late April and the platform finalized in
                    May, along with an information video from CURE ID.
                    Preliminary information here... or contact{" "}
                    <a href="mailto:annieachee@aol.com" className="email-link">
                      annieachee@aol.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="patient-initiatives">
              <div className="research-initiative-card pattern-details-section">
                <div className="research-section-header">
                  <h2 className="section-title">
                    PATIENT-DRIVEN RESEARCH Initiatives
                  </h2>
                </div>

                <div className="research-content">
                  <h3 className="subsection-title">Pattern.org</h3>

                  <p>
                    In 2017, the Rare Cancer Research Foundation (RCRF) joined
                    forces with the National Leiomyosarcoma Foundation. Through
                    RCRF&apos;s patient-driven initiative, Pattern.org,
                    leiomyosarcoma patients can contribute directly to
                    groundbreaking LMS research. There is a transformative
                    impact of tissue donation on rare sarcoma research and
                    patients play a crucial role in this process.
                  </p>

                  <p>
                    Participating is simple - just make the decision to provide
                    your consent before your surgery through Pattern.org. By
                    agreeing to donate your excess tumor tissue at Pattern.org
                    before your scheduled surgery, you can significantly
                    contribute to advancing research on Leiomyosarcoma (LMS).
                    Your tumor tissue will be sent to MIT&apos;s Koch Institute,
                    specifically the Boehm Lab, led by Dr. Jesse Boehm, the
                    Principal Investigator. The lab&apos;s primary focus will be on
                    genomics and cell line model development for
                    leiomyosarcoma, and all research findings after
                    de-identification will be made available to researchers
                    globally.
                  </p>

                  <div className="video-link">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="video-icon"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" fill="currentColor"></path>
                    </svg>
                    <a href="#" className="document-link">
                      Check out this video from Dr. Jesse Boehm discussing the
                      importance of tissue donation with Pattern.org
                    </a>
                  </div>

                  <p>
                    As a patient, YOU can become an integral contributor to
                    furthering rare cancer research through initiatives like
                    Pattern.org.
                  </p>

                  <div className="contact-info">
                    <p>
                      For any questions about this program, contact Barbara Van
                      Hare, President of Pattern.org. She will be happy to
                      answer all questions or possible concerns so that you feel
                      comfortable with participating in this GIANT step forward
                      for global LMS research:
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:barbara@rcrf.org"
                        className="email-link"
                      >
                        barbara@rcrf.org
                      </a>{" "}
                      / Phone: 844-472-7273 extension 700.
                    </p>
                  </div>

                  <div className="video-link">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="video-icon"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" fill="currentColor"></path>
                    </svg>
                    <a href="#" className="document-link">
                      Click here to watch a quick step-by-step guide for
                      patients to easily participate with Pattern.org
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="cmi-details">
              <div className="research-initiative-card cmi-details-section">
                <div className="research-section-header">
                  <h2 className="section-title">THE COUNT ME IN LMS PROJECT</h2>
                  <div className="subtitle-wrapper">
                    <p className="section-subtitle">
                      Count Me In Gives LMS Patients a Way to Impact Future
                      Treatments
                    </p>
                  </div>
                </div>

                <div className="research-content">
                  <div className="highlight-box">
                    <h3>YOU can help accelerate new treatments for LMS!</h3>
                  </div>

                  <p>
                    In early 2022, we will have a greater impact in our future
                    through a project called Count Me In. This non-profit
                    organization will collect samples and information from
                    anyone who has ever had LMS in the United States and
                    Canada—with appropriate privacy protections—and release the
                    anonymous data publicly so that researchers can share their
                    ideas on new, more effective ways to treat LMS.
                  </p>

                  <p className="emphasis-text">
                    All you do is sign a consent and the rest is taken care of!
                  </p>

                  <p>
                    Count Me In started in 2015 as a project run by the Broad
                    Institute and Dana-Farber Cancer Institute (which has a
                    sarcoma center) for metastatic breast cancer patients.
                  </p>

                  <p>Here is what The Leiomyosarcoma Count Me In project will do:</p>
                  <ul className="research-benefits">
                    <li>
                      Ask LMS patients in the United States and Canada to submit
                      samples of their tumors so they can undergo molecular and
                      genomic research at the Broad Institute.
                    </li>
                    <li>
                      Use this research to produce a large set of data that can
                      be provided to researchers. Because LMS is so rare, this
                      data will first help researchers to gain a better
                      understanding of the disease—then expanded knowledge to
                      work on better treatments.
                    </li>
                    <li>
                      Provide you information about your individual data AT NO
                      COST (available for patients who live in the United
                      States, except New York; not available for Canadians).
                    </li>
                  </ul>

                  <blockquote className="research-quote">
                    <p>
                      &quot;We&apos;ve been working closely with a committee of 10
                      LMS patients and caregivers to provide input and feedback
                      on the project design. As the project launches and gets
                      going, we will have more opportunities for members of the
                      community to get involved with providing feedback and
                      input on the project and we will share those as they&apos;re
                      available. After we launch the project in early 2022,
                      participants can provide questions or comments on their
                      experience in the project through surveys and reaching
                      out to the team.&quot;
                    </p>
                    <cite>- Taylor Custer of Count Me In</cite>
                  </blockquote>

                  <p>
                    Patients will have two chances to learn more about their DNA
                    from the project, one for tumor DNA and one for germline or
                    normal DNA.
                  </p>

                  <blockquote className="research-quote">
                    <p>
                      &quot;If a participant elects during the consent process to
                      share archive tissue samples with the project and the
                      tumor sample is successfully sequenced, we can share
                      information from the genomic sequencing of the tumor
                      sample back with the participant. Participants can choose
                      whether or not to receive this information about their
                      tumor sample during the consent process. The information
                      about a participant&apos;s tumor is intended to highlight
                      how participant sample(s) are contributing to research
                      and will not have implications for their treatment or
                      prognosis,&quot;
                    </p>
                    <cite>Cusher explained</cite>
                  </blockquote>

                  <p>
                    However, regulatory restrictions prohibit the sharing of
                    results with participants in New York and Canada.
                  </p>

                  <blockquote className="research-quote">
                    <p>
                      &quot;The project is also partnering with Invitae in order
                      to sequence and share information on germline DNA (or
                      &quot;normal&quot; DNA) from saliva samples. During the
                      project, participants will be able to decide if they would
                      like to provide an additional saliva sample to learn more
                      about their normal DNA and speak with a genetic counselor
                      to understand these results,&quot;
                    </p>
                    <cite>Cusher added</cite>
                  </blockquote>

                  <p>
                    &quot;If a participant chooses not to participate in this
                    process, the data will not be shared with Invitae. This
                    process is not available for participants in Canada, as
                    Invitae is not licensed to provide genetic counseling
                    services there.&quot;
                  </p>

                  <p>
                    More information on the Count Me In model and other projects
                    can be found at{" "}
                    <a
                      href="https://joincountmein.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      joincountmein.org
                    </a>
                    .
                  </p>

                  <div className="cta-box">
                    <p>
                      To make sure you are notified about when you can sign up,
                      go to{" "}
                      <a
                        href="https://joincountmein.org/lms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="section-link"
                      >
                        https://joincountmein.org/lms
                      </a>
                      .
                    </p>
                    <p>
                      Need more information? The Count Me In staff welcomes
                      questions and comments through email at{" "}
                      <a
                        href="mailto:info@lmsproject.org"
                        className="email-link"
                      >
                        info@lmsproject.org
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cmi-news">
              <div className="research-initiative-card cmi-news-section">
                <div className="research-section-header">
                  <h2 className="section-title">Great News!</h2>
                </div>

                <div className="research-content">
                  <p>
                    As you may remember late last year the Broad Institute (a
                    joint Harvard and MIT research institute) agreed to add
                    Leiomyosarcoma patients to its Count Me In Project.
                  </p>

                  <p>
                    The Goal of the Count Me In Project is to partner with
                    patients with leiomyosarcoma around the United States and
                    Canada in order to study their cancer using cutting-edge
                    genomic and molecular research studies performed at the
                    Broad Institute, and to leverage technology to allow
                    patients to participate in these studies regardless of
                    where they are treated.
                  </p>

                  <p>
                    They will generate a large dataset that includes genomic,
                    clinical, molecular, and patient-reported information that
                    can be shared with the biomedical community in order to
                    accelerate discoveries and better therapies for this
                    disease. Cancer is not a single disease, and each medical
                    record, tumor, and patient&apos;s story holds part of the
                    puzzle. Our goal is to help the research community better
                    understand the landscape of leiomyosarcoma and accelerate
                    discoveries by making data more readily available.
                  </p>

                  <p>
                    In addition, the Count Me In Team will study approaches to
                    engaging with the LMS community and work directly with
                    patients to improve our methods. We will focus on hearing
                    from groups that have been historically left out of
                    research, like rural and underrepresented participants. What
                    we learn together will help improve future patient-partnered
                    studies and increase the diversity of patients we partner
                    with in an evidence-based way, to ensure that new insights
                    are relevant to and benefit as many patients as possible.
                  </p>

                  <p>
                    The LMS-specific COUNT ME IN project has just created a
                    webpage{" "}
                    <a
                      href="https://joincountmein.org/lms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      https://joincountmein.org/lms
                    </a>{" "}
                    with more details about the project which is going to start
                    enrolling patients in early 2022. There is a button on the
                    webpage where patients can sign-up to be notified when they
                    can enroll in the project.
                  </p>

                  <p>
                    This a great opportunity for all LMS patients to
                    participate in a project that has great potential to help
                    improve the understanding of our tumor and lead to more
                    focused basic science and translational research with the
                    goal of developing more targeted treatment options for LMS
                    patients and hopefully improved survival.
                  </p>

                  <p>
                    We encourage all LMS patients to take advantage of the
                    opportunity to participate in this groundbreaking project.
                  </p>

                  <div className="signature">
                    <p>Mitchell D. Achee, M.D.</p>
                    <p>COUNT ME IN Patient Advisory Committee</p>
                    <p>National Leiomyosarcoma Foundation Representative</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="who-can-join">
              <div className="research-initiative-card who-can-join-section">
                <div className="research-section-header">
                  <h2 className="section-title">Who Can Join?</h2>
                </div>

                <div className="research-content">
                  <p>
                    If you&apos;ve ever been diagnosed with LMS, you can join the
                    LMS project by sharing your samples, copies of your medical
                    records, and your experiences. Information collected and
                    shared will be de-identified before being shared widely with
                    researchers to speed discoveries. All patient information
                    is de-identified.
                  </p>

                  <h3 className="subsection-title">How Do You Participate?</h3>
                  <p>
                    You participate by giving the project permission to obtain
                    your medical records, saliva, blood and stored tissue
                    samples, and providing information about your personal LMS
                    journey.{" "}
                    <a
                      href="https://joincountmein.org/lms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="section-link"
                    >
                      Click here to learn more...
                    </a>
                  </p>

                  <div className="highlight-box">
                    <p>
                      By consenting to share tumor tissue, ahead of a scheduled
                      surgery, patients can make a real impact. De-identified
                      tumor tissue will be sent to Dr. Jesse Boehm, head of this
                      research initiative at the Koch Institute of MIT and
                      Barbara Van Hare, Director of Patient Research and
                      Advocacy Liaison, to help scientists develop next
                      generation cancer models, which will be made widely
                      available to the research community. Using these models,
                      researchers can identify cancer&apos;s key points of
                      vulnerability and accelerate drug development.
                    </p>
                    <p>
                      Contact Annie Achee at{" "}
                      <a href="tel:3038083437" className="phone-link">
                        303-808-3437
                      </a>{" "}
                      for details. The RCRF website:{" "}
                      <a
                        href="https://rarecancer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="section-link"
                      >
                        https://rarecancer.org/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
