"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";

const NAV_OFFSET = 80;

export default function NutritionAndPhysicalActivityClient() {
  const navTargets = useMemo(
    () => [
      "nutrition-overview",
      "acs-guidelines",
      "resources",
      "physical-activity",
      "videos",
    ],
    [],
  );

  const setActiveLink = useCallback(() => {
    const scrollPosition = window.scrollY;
    navTargets.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      const sectionTop = section.offsetTop - NAV_OFFSET;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector<HTMLAnchorElement>(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, [navTargets]);

  useEffect(() => {
    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
    return () => window.removeEventListener("scroll", setActiveLink);
  }, [setActiveLink]);

  const handleNavClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="nutrition-activity-page">
      {/* Hero Component */}
      <div className="hero">
        <div className="badge">
          <i className="fas fa-apple-alt" aria-hidden />
          <span>Wellness & Survivorship</span>
        </div>

        <h1 className="hero-title">Nutrition & Physical Activity</h1>

        <div className="divider"></div>

        <p className="hero-description">Building blocks of enhancing survivorship for patients and caregivers</p>

        <div className="feature-tags">
          <div className="feature-tag emerald">
            <i className="fas fa-carrot" aria-hidden />
            <span>Nutrition</span>
          </div>
          <div className="feature-tag amber">
            <i className="fas fa-running" aria-hidden />
            <span>Physical Activity</span>
          </div>
          <div className="feature-tag blue">
            <i className="fas fa-heartbeat" aria-hidden />
            <span>Survivorship</span>
          </div>
        </div>
      </div>

      <div className="motto-banner">
        <div className="motto-item">
          <span className="motto-text">COURAGE</span>
        </div>
        <div className="motto-item">
          <span className="motto-text">HOPE</span>
        </div>
        <div className="motto-item">
          <span className="motto-text">RESILIENCE</span>
        </div>
        <div className="motto-item">
          <span className="motto-text">STRENGTH</span>
        </div>
      </div>

      <div className="intro-panel">
        <p>
          <strong>The Building Blocks of Enhancing Survivorship</strong>
          <br />
          Proper nutrition and regular physical activity are essential components of cancer care and survivorship. This page
          provides guidance from trusted sources including the American Cancer Society, the American Institute for Cancer
          Research, MD Anderson Cancer Center, and healthcare professionals to help patients and caregivers make informed choices
          about nutrition and exercise during and after cancer treatment.
        </p>
        <p>
          These resources can help you understand how nutrition and physical activity can support your body through treatment,
          recovery, and long-term survivorship, potentially improving your quality of life and treatment outcomes.
        </p>
      </div>

      <div className="nutrition-layout">
        {/* Sidebar Navigation */}
        <div className="page-nav">
          <h3 className="sidebar-title">Page Contents</h3>

          <div className="nav-section section-overview">
            <a href="#nutrition-overview" className="nav-link" onClick={handleNavClick}>
              Nutrition Overview
            </a>
          </div>

          <div className="nav-section section-acs">
            <a href="#acs-guidelines" className="nav-link" onClick={handleNavClick}>
              ACS Guidelines
            </a>
          </div>

          <div className="nav-section section-resources">
            <a href="#resources" className="nav-link" onClick={handleNavClick}>
              Nutritional Resources
            </a>
          </div>

          <div className="nav-section section-activity">
            <a href="#physical-activity" className="nav-link" onClick={handleNavClick}>
              Physical Activity
            </a>
          </div>

          <div className="nav-section section-videos">
            <a href="#videos" className="nav-link" onClick={handleNavClick}>
              Videos & Guides
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <section id="nutrition-overview" className="content-section">
            <h2 className="section-title emerald">Nutrition and Cancer Treatment</h2>

            <div className="content-panel emerald">
              <div className="panel-header">
                <div className="icon-circle emerald">
                  <i className="fas fa-seedling" aria-hidden />
                </div>
                <div>
                  <h3>The Role of Nutrition in Cancer Care</h3>
                  <p>How proper nutrition supports treatment and recovery</p>
                </div>
              </div>
              <div className="panel-text">
                <p>
                  Nutrition plays a vital role in cancer at all stages - prevention or risk reduction, treatment, and
                  post-treatment. Experts from MD Anderson Cancer Center emphasize that proper nutrition is essential throughout the
                  cancer journey.
                </p>
                <p>
                  Both the American Cancer Society (ACS) and the American Institute of Cancer Research (AICR) advise a plant-based
                  diet. A plant-based, whole food diet emphasizes vegetables, fruits, whole grains, legumes, nuts, and seeds,
                  providing essential nutrients that support healing and recovery.
                </p>
              </div>
            </div>
          </section>

          <section id="savor-program" className="content-section">
            <h2 className="section-title teal">SAVOR Health Partnership</h2>

            <div className="savor-program-card">
              <div className="savor-header">
                <div className="savor-content">
                  <h3>Learn about SAVOR - A Customized Patient Nutrition Program</h3>
                  <p className="savor-description">
                    A customized patient nutrition program that can support patients, families, and caregivers. A recorded
                    presentation for Patients and Families / Caregivers to be posted soon.
                  </p>
                </div>
              </div>
              <div className="savor-video">
                <div className="savor-video-inner">
                  <iframe
                    src="https://www.youtube.com/embed/5vtL6v5FV9Y"
                    title="SAVOR Health Nutrition Program Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="savor-infographic">
                <Image
                  src="https://nlsmf.org/wp-content/uploads/2025/12/1765933344411blob.png"
                  alt="SAVOR Health nutrition program infographic"
                  width={1200}
                  height={800}
                />
              </div>

              <div className="savor-details">
                <div className="savor-highlight">
                  <h4>A New Customized Nutrition Program for Every Patient!</h4>
                  <p>This is a great help to families and caregivers!</p>
                </div>

                <div className="savor-partnership">
                  <h4>The National LMS Foundation has partnered with SAVOR:</h4>
                  <p>Learn about this program that can be accessed anytime, and from your phone as well!</p>
                </div>

                <div className="savor-portal">
                  <a
                    href="https://adnlmsf.savorhealth.com/portal/"
                    className="savor-portal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                    <span>Access the SAVOR Health / NLMSF Partnership Portal</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="acs-guidelines" className="content-section">
            <h2 className="section-title blue">American Cancer Society Guidelines</h2>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-battery-full" aria-hidden />
                </div>
                <h3>Keep Up Your Strength</h3>
                <p>Proper nutrition helps maintain energy levels during treatment</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-balance-scale" aria-hidden />
                </div>
                <h3>Maintain Weight</h3>
                <p>Helps maintain weight and your body&apos;s store of nutrients</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt" aria-hidden />
                </div>
                <h3>Tolerate Treatment</h3>
                <p>Better tolerate treatment side effects</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-virus-slash" aria-hidden />
                </div>
                <h3>Lower Infection Risk</h3>
                <p>Reduces risk of infection during treatment</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-heart" aria-hidden />
                </div>
                <h3>Support Healing</h3>
                <p>Promotes healing and recovery processes</p>
              </div>
            </div>

            <div className="note-box">
              <div className="note-icon">
                <i className="fas fa-lightbulb" aria-hidden />
              </div>
              <div className="note-content">
                <h4>Nutrition Tip</h4>
                <p>
                  Eating well during cancer treatment is about more than just following a diet. It&apos;s about making choices that help
                  your body stay strong and resilient. Talk to your healthcare team about specific nutritional needs based on your
                  treatment plan.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className="content-section">
            <h2 className="section-title amber">Nutritional Resources</h2>

            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-logo">
                  <Image
                    src="https://via.placeholder.com/100x50.png?text=ACS+Logo"
                    alt="American Cancer Society"
                    className="resource-image"
                    width={240}
                    height={240}
                  />
                </div>
                <div className="resource-content">
                  <h3>American Cancer Society</h3>
                  <p>Comprehensive guidelines on nutrition for people receiving cancer treatment</p>
                  <a
                    href="https://www.cancer.org/treatment/survivorship-during-and-after-treatment/staying-active/nutrition.html"
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Nutrition for the Person Getting Cancer Treatment</span>
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-logo">
                  <Image
                    src="https://via.placeholder.com/100x50.png?text=AICR+Logo"
                    alt="American Institute for Cancer Research"
                    className="resource-image"
                    width={240}
                    height={240}
                  />
                </div>
                <div className="resource-content">
                  <h3>American Institute for Cancer Research</h3>
                  <p>Detailed guidebook on nutrition for cancer patients during treatment</p>
                  <a
                    href="https://www.medschool.lsuhsc.edu/lungcancer/docs/nutrition-during-cancer-treatment_Cancer%20Survivor%20Series%20Booklet_American%20Institute%20for%20Cancer%20Research%20AICR.pdf"
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Nutrition During Cancer Treatment Guidebook</span>
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-logo">
                  <Image
                    src="https://via.placeholder.com/100x50.png?text=MD+Anderson"
                    alt="MD Anderson Cancer Center"
                    className="resource-image"
                    width={240}
                    height={240}
                  />
                </div>
                <div className="resource-content">
                  <h3>MD Anderson Cancer Center</h3>
                  <p>Essential nutritional information for patients and caregivers</p>
                  <a
                    href="https://www.mdanderson.org/treatment-options/nutrition.html"
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Nutrition Basics for Patients and Caregivers</span>
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="resource-card">
                <div className="resource-logo">
                  <Image
                    src="https://via.placeholder.com/100x50.png?text=MD+Anderson"
                    alt="MD Anderson Cancer Center"
                    className="resource-image"
                    width={240}
                    height={240}
                  />
                </div>
                <div className="resource-content">
                  <h3>MD Anderson Cancer Center</h3>
                  <p>Guidelines for both nutrition and physical activity for cancer survivors</p>
                  <a
                    href="https://www.mdanderson.org/content/dam/mdanderson/documents/patients-and-family/diagnosis-and-treatment/cancer-treatment/nutrition-and-physical-activity-guidelines-cancer-survivors.pdf"
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Survivorship: Nutrition and Physical Activity Guidelines</span>
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="physical-activity" className="content-section">
            <h2 className="section-title amber">Physical Activity for Cancer Patients</h2>

            <div className="content-panel amber">
              <div className="panel-header">
                <div className="icon-circle amber">
                  <i className="fas fa-running" aria-hidden />
                </div>
                <div>
                  <h3>The Importance of Exercise During and After Treatment</h3>
                  <p>How physical activity supports recovery and survivorship</p>
                </div>
              </div>
              <div className="panel-text">
                <p>
                  Physical activity is an important part of overall health and can provide specific benefits during and after cancer
                  treatment. Regular exercise, tailored to your abilities and condition, can help manage side effects, improve
                  energy levels, and enhance quality of life.
                </p>

                <div className="resource-highlight">
                  <div className="resource-icon">
                    <i className="fas fa-dumbbell" aria-hidden />
                  </div>
                  <div className="resource-info">
                    <h4>Cancer Research UK: Exercise and Cancer</h4>
                    <p>Comprehensive guide on exercise benefits and recommendations for cancer patients</p>
                    <a
                      href="https://www.cancerresearchuk.org/about-cancer/coping/physically/exercise-guidelines"
                      className="highlight-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Exercise And Cancer | Cancer Research UK | Coping Physically
                      <i className="fas fa-arrow-right" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="activity-benefits">
              <h3>Benefits of Physical Activity</h3>
              <div className="activity-grid">
                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-battery-three-quarters" aria-hidden />
                  </div>
                  <div className="activity-text">
                    <h4>Reduces Fatigue</h4>
                    <p>Regular activity can help reduce treatment-related fatigue</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-brain" aria-hidden />
                  </div>
                  <div className="activity-text">
                    <h4>Improves Mood</h4>
                    <p>Exercise releases endorphins that can boost mental wellbeing</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-heartbeat" aria-hidden />
                  </div>
                  <div className="activity-text">
                    <h4>Strengthens Heart</h4>
                    <p>Helps maintain cardiovascular health during treatment</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-bone" aria-hidden />
                  </div>
                  <div className="activity-text">
                    <h4>Maintains Strength</h4>
                    <p>Helps preserve muscle mass and bone density</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="videos" className="content-section">
            <h2 className="section-title rose">Videos & Educational Resources</h2>

            <div className="video-resources">
              <div className="video-card">
                <div className="video-thumbnail">
                  <div className="play-button">
                    <i className="fas fa-play" aria-hidden />
                  </div>
                  <Image
                    src="https://via.placeholder.com/640x360.png?text=Alison+Tierney+Video"
                    alt="Alison Tierney Nutrition Video"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="video-details">
                  <h3>Cancer Nutrition Guidance with Alison Tierney</h3>
                  <p className="video-presenter">Alison Tierney, Licensed Cancer Dietitian</p>
                  <p className="video-description">
                    Alison Tierney empowers cancer patients with dietary guidance to support their body before, during, and after
                    treatment.
                  </p>
                  <a href="#" className="video-link">
                    Watch Video <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="video-card">
                <div className="video-thumbnail">
                  <div className="play-button">
                    <i className="fas fa-play" aria-hidden />
                  </div>
                  <Image
                    src="https://via.placeholder.com/640x360.png?text=Mayo+Clinic+Video"
                    alt="Mayo Clinic Living with Cancer Guide"
                    width={640}
                    height={360}
                  />
                </div>
                <div className="video-details">
                  <h3>Mayo Clinic Living with Cancer Guide</h3>
                  <p className="video-presenter">Mayo Clinic</p>
                  <p className="video-description">
                    Comprehensive coping strategies for physical well-being and survivorship quality of life for patients and
                    caregivers.
                  </p>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/cancer/in-depth/cancer-survivor/art-20045524"
                    className="video-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Videos <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            <div className="additional-resources">
              <h3 className="subsection-title">Additional Resources</h3>

              <div className="resources-list">
                <a
                  href="https://www.cancer.net/survivorship/healthy-living/nutrition-recommendations-during-and-after-treatment"
                  className="resource-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-utensils" aria-hidden />
                  <span>Cancer.Net: Nutrition Recommendations During and After Treatment</span>
                </a>
                <a
                  href="https://www.cancer.gov/about-cancer/treatment/side-effects/appetite-loss/nutrition-pdq"
                  className="resource-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-apple-alt" aria-hidden />
                  <span>National Cancer Institute: Nutrition in Cancer Care</span>
                </a>
                <a
                  href="https://www.livestrong.org/we-can-help/healthy-living-after-treatment/nutrition-after-treatment"
                  className="resource-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-carrot" aria-hidden />
                  <span>LIVESTRONG: Nutrition After Treatment</span>
                </a>
                <a
                  href="https://www.acsm.org/blog-detail/acsm-blog/2019/11/25/exercise-guidelines-cancer-survivors-infographic"
                  className="resource-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-dumbbell" aria-hidden />
                  <span>American College of Sports Medicine: Exercise Guidelines for Cancer Survivors</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
