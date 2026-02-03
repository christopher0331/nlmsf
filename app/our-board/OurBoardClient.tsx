"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Member = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string[];
};

export default function OurBoardClient() {
  const medicalBoardMembers = useMemo<Member[]>(
    () => [
      {
        id: "winan-van-houdt",
        name: "Winan van Houdt, M.D.",
        role:
          "Surgical Oncologist\nNetherlands Cancer Institute / Antoni van Leeuwenhoek Hospital\nAmsterdam, Netherlands",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/12/Winan-van-Houdt.png",
        bio: [
          "Dr. van Houdt specializes in surgery for limb, trunk, retroperitoneal, and intra-abdominal sarcomas. He leads multiple international research projects dedicated to advancing sarcoma care and improving patient outcomes worldwide.",
        ],
      },
      {
        id: "arun-singh",
        name: "Arun Singh, M.D.",
        role:
          "Sarcoma Medical Oncologist\nUCLA Jonsson Comprehensive Cancer Center\nLos Angeles, CA",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/12/Arun-Singh.png",
        bio: [
          "Dr. Singh treats patients with bone and soft tissue sarcomas and conducts clinical trials on novel therapies and mechanisms of disease at one of the leading sarcoma programs in the United States.",
        ],
      },
      {
        id: "matthew-ingham",
        name: "Matthew Ingham, M.D.",
        role:
          "Sarcoma Medical Oncologist\nNYU Perlmutter Cancer Center\nNew York, NY",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/12/Matt-Ingham.png",
        bio: [
          "Dr. Ingham specializes in the clinical care and translational research of sarcomas and connective tissue malignancies, bridging cutting-edge science with direct patient care.",
        ],
      },
    ],
    [],
  );

  const leadershipMembers = useMemo<Member[]>(
    () => [
      {
        id: "annie-achee",
        name: "Annie Achee",
        role: "President and Research Liaison",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/01/AnnieAchee.jpg",
        bio: [
          "I am devoted to the mission and goals of the Foundation, since its inception in 1999 through the vision of Mr. Edmund Hoag.",
          "My aim is to preserve his legacy by continuing the focus he had from the beginning: patient-centric programs and initiatives to promote support and advocacy within the LMS Community.",
          "My dedication and commitment to this is unwavering - to faithfully serve the Champions of Hope - the patients; and promote collaborative relationships and partnerships with the Research Community - the Heroes Among us.",
          "Ms. Achee is a member of the following oncology organizations: Connective Tissue Oncology Society (CTOS), American Society of Clinical Oncologists (ASCO), European Society of Medical Oncologists (ESMO), American Association of Cancer Research (AACR), ECOG-ACIN.",
        ],
      },
      {
        id: "lynne-greco-forges",
        name: "Lynne Greco Forges",
        role: "NLMSF Treasurer",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/01/LynneGreco.jpg",
        bio: [
          "I was diagnosed with uterine leiomyosarcoma in 2015. I have undergone numerous surgeries and chemotherapies. Throughout this time, I have done all I can to maintain a positive attitude. This, along with my strong faith and an excellent team of doctors, has carried me through.",
          "I enjoyed a 32-year career in Purchasing for various steel companies in Pittsburgh, PA. I love spending time with family and friends, cooking, reading, working on my house, spending time outdoors, yoga, walking and biking. I do a lot of volunteer work and do as much as possible to help others.",
          "The NLMSF has been such a great resource for me, being Treasurer is the least I can do to show my appreciation.",
        ],
      },
    ],
    [],
  );

  const medicalLeadershipMembers = useMemo<Member[]>(
    () => [
      {
        id: "mitchell-achee",
        name: "Mitchell D. Achee, M.D.",
        role: "Medical Director",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2024/09/Mitch-Achees-Photo-.jpg",
        bio: [
          "An LMS survivor, diagnosed in 2011. A retired Board Certified Diagnostic Radiologist in practice for 40 years.",
          'I wish to "pay it forward" to the LMS Community through assisting in answering general questions about the disease and explaining the results of a patient\'s imaging studies to help the patient and their family have a better understanding of their disease, and thereby be able to ask the right questions of their sarcoma care team.',
          "Dr. Achee is a member of the following oncology organizations: Connective Tissue Oncology Society (CTOS), American Society of Clinical Oncologists (ASCO), European Society of Medical Oncologists (ESMO), American Association of Cancer Research (AACR), ECOG-ACIN.",
        ],
      },
    ],
    [],
  );

  const outreachMembers = useMemo<Member[]>(
    () => [
      {
        id: "alex-aguilera",
        name: "Alex Aguilera",
        role: "Community Outreach",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/06/Alex-Aguilera.jpeg",
        bio: [
          "I am a dedicated professional with a diverse background in technology and community engagement, currently contributing to innovative projects at Deloitte. With a passion for leveraging technology for positive impact, I am honored to serve as a Board Member of the NLMSF, where I support the sarcoma community through advocacy, education, and research initiatives.",
          "I am actively engaged in thought leadership, having discussed advancements in agriculture autonomy on The Road to Autonomy® podcast and contributed to impactful initiatives like Yes San Francisco in collaboration with the World Economic Forum, Deloitte, Salesforce, and The San Francisco Chamber of Commerce.",
          'My message to the sarcoma community is one of resilience and collaboration: "Together, we can drive meaningful change and inspire hope through action."',
        ],
      },
      {
        id: "dale-ayscue",
        name: "Dale Ayscue",
        role: "Community Outreach",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2022/07/asy-284x300.jpg",
        bio: [
          "I am a survivor of sarcoma for the past 13 years. I also have a FB group - Sarcoma (Cancer) Awareness to help others and pay it forward, and now as a Board Member of the NLMSF, I feel even more empowered to support patients and their families.",
          "I have appreciated the NLMSF's approach and professional integrity in the work being done for support, education, and research on behalf of the sarcoma community and I am happy to be a part.",
          "I am still employed, and I am a grandfather of 2 granddaughters. I am also an amputee of my left leg because of sarcoma cancer.",
          '"Hope is the only thing stronger than fear." is my message to all.',
        ],
      },
      {
        id: "david-boles",
        name: "David Boles",
        role: "Community Outreach",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2022/02/Selfie-300x233.jpg",
        bio: [
          "As the husband of a recently deceased ULMS patient, I can think of no better way to honor my wife than to support the work of NLMSF. After receiving a diagnosis with LMS, you are literally in for the fight of your life.",
          "Most of us do not have a medical background, but need to get up-to-speed quickly to make good choices for treatments that will increase chances for survival. That is where this group can help.",
          "Then, there is the emotional side to treatments. Side effects, reactions and appointments place an enormous amount of stress on the patient and caregiver. Reading the medical disclosure for treatments can be overwhelming. You need someone who hears your concerns and provides some first-hand experience.",
          "You will be told everyone is different. That is true, but you still need a sense for what lies ahead, what to look for and where to turn for help. I have joined the NLMSF to support their mission and purpose - I believe in their genuine efforts to help others through comprehensive websites, newsletters, patient programs and more.",
        ],
      },
      {
        id: "greg-lee",
        name: "Greg Lee",
        role: "Community Outreach",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/08/image-219x300.png",
        bio: [
          "I was diagnosed with LMS in 2020 and with metastatic LMS in 2021. I have an assistant professor of Computer Science in the Jodrey School of Computer Science at Acadia University in Nova Scotia, Canada.",
          "I am now applying machine learning techniques to search for patient features (e.g., biomarkers) that help predict which treatments are best, to be applied on an individual level. My past research involved predicting who was most likely to give a charitable gift to a given organization. I worked with smaller data sets (which we often run into with LMS) but still produced accurate models. I'm hoping to produce similar LMS prediction models.",
          "I am a Cancer Immunotherapy Coordinator for patients interested in going to Germany for Dendritic Cell Therapy treatment.",
          "I am happy to be a part of the NLMSF Foundation, as I feel they are a special group to advocate for the LMS Community.",
          "I am married to my wonderful wife Melissa and we have 3 children and it's for them that I'm doing this research.",
        ],
      },
      {
        id: "jim-matthews",
        name: "Jim Matthews",
        role: "Community Awareness Coordinator",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/01/JimMatthews-300x300.jpg",
        bio: [
          "I hail from New Jersey, and am a graduate in Economics from Seton Hall University. I am long time survivor, having been diagnosed in 1996 and treated at Memorial Sloan Kettering in NY. I was one of the original members of the National Leiomyosarcoma Foundation, having attend their first HugFest in Lancaster, PA.",
          "I am blessed with a loving family and blessed to be affiliated with the NLMSF.",
          "I believe in the goodness of my fellow board members and want to help the LMS Community through collaborative Foundation support and advocacy in to honor the legacy of Mr. Edmund Hoag and his board members - carrying on their original mission of supporting the LMS patients and their families.",
        ],
      },
      {
        id: "chandalyn-williams",
        name: "Chandalyn Williams",
        role: "Community Outreach",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/BM-300x300.jpg",
        bio: [
          "Chandalyn Williams is a highly motivated and experienced executive professional, regarded for her ability to deliver outstanding results with the highest degree of expertise and professionalism.",
          "She holds a Bachelor of Arts degree in Business Administration and Communication Management from Jones International University, graduating Cum Laude; a Master of Business Administration from Texas Woman's University and; is currently within one year of completing her Doctorate of Business Administration at Trident International University.",
          "Chandalyn has served as an inpatient volunteer with M. D. Anderson Cancer Center, advocated on public platforms such as Rare Disease Day at the Texas State Capitol and led annual 5K Run/Walks for over nine years in support of Leiomyosarcoma (LMS) Cancer research.",
          '"When my mother, Cynthia Solomon Holmes, was diagnosed on April 8, 2010 with Leiomyosarcoma (LMS) after visiting her doctor for a persistent cough, I was not prepared for how my world as I knew it would be turned upside down. Watching my mother fight this disease with the strength and vigor I knew to be her was an overwhelmingly painful experience. I felt physically helpless – but I knew how to pray. For her, my family and me. Following only a three-month battle with this dragon, my mother succumbed to the disease, passing away at the age of 52. I vowed to turn my personal tragedy into something that could be triumph for others who are faced with this disease through the creation of The Cynthia Solomon Holmes Foundation. I pray that through my efforts, individuals are inspired to support those battling this disease and in the daily fight for their right to live!" ~ Chandalyn Williams',
        ],
      },
    ],
    [],
  );

  const supportMembers = useMemo<Member[]>(
    () => [
      {
        id: "christopher-hancock",
        name: "Christopher Hancock",
        role: "Technology Coordinator",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2021/01/chrisHeadshot-300x300.png",
        bio: [
          "Owner of Reactiv Labs.",
          "My early days as a Marine Corps machine gunner instilled resilience, precision, and a collaborative mindset that inform my work today.",
          "For the past two years, I've served on the board of the National Leiomyosarcoma Foundation. My journey began in 2018 when my late mother, Shannen Shapiro - after bravely battling LMS - introduced me to Annie Achee, NLMSF's president. Working alongside Annie and Mitch, whose tireless dedication fuels the mission's success, I'm committed to driving real change for everyone affected by this disease.",
          "Outside of Reactiv Labs and NLMSF, I'm a father to two daughters, ages 7 and 4, and a lifelong learner, always exploring new ways technology can create positive impact.",
        ],
      },
      {
        id: "kelly-murphy",
        name: "Kelly Murphy",
        role: "Technical Advisor",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/08/kelly_murphy-1-scaled.jpeg",
        bio: [
          "At 34, while building a career as a data scientist with a passion for discovery, I was diagnosed with retroperitoneal leiomyosarcoma. Since then, I have endured surgery, radiation, chemotherapy, and the loss of my ability to have children, but I refuse to let this disease take my purpose.",
          "Together with my partner, I founded Light in the Dark, an AI-driven effort to uncover new treatments and bring hope to others facing LMS. Partnering with NLMSF is the first step in turning this vision into reality.",
          "My journey has been painful and turbulent, yet it has ignited an unshakable resolve: to fight not only for my life but for every life touched by this disease. I am determined to ensure no one walks this road alone and to help light the path toward a cure.",
        ],
      },
      {
        id: "jacqueline-sebany",
        name: "Jacqueline (Jacque) Sebany",
        role: "Brand Strategy Coordinator",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2022/01/Jacque-Sebany.png",
        bio: [
          "Jacqueline (Jacque) Sebany is the Chief Experience Officer for Shift'd - a marketing and payments consulting brand.",
          "Prior to becoming a marketing consultant, she was the Chief Marketing & Digital Officer at the American Diabetes Association (ADA). She was responsible for optimizing the marketing infrastructure to create efficient and effective campaigns, elevate the brand presence and bring fresh innovative ways to grow revenue and emotional connections between the ADA brand and the diabetes community.",
          "Jacque has also served as Vice President of Digital Content at the American Heart Association (AHA).",
          "Jacque has over 25 years' experience across the entire spectrum of Marketing and Digital: front-end development, brand/marketing strategy, direct response marketing (including mail, email, mobile, social), project management (waterfall & agile), UX/UI and content strategy.",
          "She has worked across a broad spectrum of organizations in addition to AHA, including FedEx, The US Department of Treasury, Bahamas Ministry of Tourism, Golds Gym, Hyatt Hotels and multiple Consumer Package Good Brands.",
          "Jacque holds a degree in Fashion and Interior Design and is a passionate creative who uses her design talents to transform organizations and brand experiences. She is very enthused and inspired to work with the National Leiomyosarcoma Foundation - as a Community Awareness Ambassador to advance the mission, vision, and purpose of the NLMSF.",
        ],
      },
      {
        id: "taylor-tomlinson",
        name: "Taylor Tomlinson",
        role: "Technical Advisor",
        imageUrl: "https://nlsmf.org/wp-content/uploads/2025/09/taylor-tomlinson.webp",
        bio: [
          "Taylor brings more than a decade of digital marketing leadership at top global commercial real estate and investment management firms, where she has shaped strategic, data-driven campaigns from concept through execution.",
          "As a digital marketing operations leader, she blends advanced analytics, agile methodologies, and seamless technology integration to drive measurable gains in lead generation, asset visibility, and investor engagement.",
          "Throughout her career, Taylor has spearheaded digital transformation efforts—streamlining marketing processes, modernizing tech stacks, and establishing robust performance-measurement frameworks.",
          "She holds a Bachelor's degree from the University of Michigan and completed coursework at the University of Chicago Booth School of Business.",
          "Taylor's advocacy is deeply personal: after her mother, Terri Obos Danahey, lost her eight-year battle with leiomyosarcoma in 2025, Taylor dedicates her skills and expertise to furthering the mission of the National Leiomyosarcoma Foundation - honoring her mother's legacy by advancing research, awareness, and support.",
        ],
      },
    ],
    [],
  );

  const [activeMember, setActiveMember] = useState<Member | null>(null);

  const closeModal = useCallback(() => {
    setActiveMember(null);
    document.body.style.overflow = "";
  }, []);

  const openModal = useCallback((member: Member) => {
    setActiveMember(member);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!activeMember) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeMember, closeModal]);

  return (
    <div className="our-board-page">
      <div className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Meet Our Team</span>

            <h1 className="nlmsf-hero-title">Our Board</h1>

            <div className="nlmsf-hero-description">
              <p>
                The National Leiomyosarcoma Foundation consists of dedicated
                volunteer Board members who are fully committed to upholding the
                foundation&apos;s vision and mission.
              </p>
              <p>
                Our Board members are here to serve patients, families, and
                caregivers. They are dedicated to addressing your questions and
                providing timely assistance when needed. Their primary focus
                remains advocating for and representing the LMS community&apos;s
                interests.
              </p>
              <p>
                Each Board member has a personal connection to LMS, whether
                through their own experience as a survivor or as a family member
                supporting a loved one through their journey with this rare
                cancer.
              </p>
            </div>

            <h2 className="nlmsf-hero-title">Our Global Priorities</h2>
            <ul className="priorities">
              <li>
                Support Patients, Families, Caregivers through
                <ul>
                  <li>Strong Advocacy</li>
                  <li>Comprehensive Education</li>
                  <li>Resource Assistance</li>
                </ul>
              </li>
              <li>
                Build Community Awareness and Engagement to garner support for
                Research
              </li>
              <li>
                Collaborate with the global research community to advance and
                accelerate:
                <ul>
                  <li>Clinical trials</li>
                  <li>Treatment Options</li>
                </ul>
              </li>
              <li>
                Partner with organizations and foundations to address the LMS
                community&apos;s unmet needs.
              </li>
              <li>
                Strive to improve patient outcomes by meeting the challenges of
                the LMS diagnosis and treatment journey-enhancing quality of
                life and survivorship.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nlmsf-content-section">
        <div className="nlmsf-content-container our-board-layout">
          <aside className="nlmsf-sidebar">
            <div className="nlmsf-sidebar-container">
              <div className="nlmsf-sidebar-navigation">
                <h3 className="nlmsf-sidebar-title">Medical Board Members</h3>
                <ul className="nlmsf-sidebar-nav-list">
                  {medicalBoardMembers.map((member) => (
                    <li key={member.id}>
                      <a
                        href={`#${member.id}`}
                        className="nlmsf-sidebar-link nlmsf-sidebar-link-leadership"
                      >
                        {member.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="nlmsf-sidebar-container">
              <div className="nlmsf-sidebar-navigation">
                <h3 className="nlmsf-sidebar-title">Our Board Members</h3>

                <h4 className="nlmsf-category-title nlmsf-category-title-leadership">
                  Leadership
                </h4>
                <ul className="nlmsf-sidebar-nav-list">
                  <li>
                    <a
                      href="#annie-achee"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-leadership"
                    >
                      Annie Achee
                    </a>
                  </li>
                  <li>
                    <a
                      href="#lynne-greco-forges"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-leadership"
                    >
                      Lynne Greco Forges
                    </a>
                  </li>
                </ul>

                <h4 className="nlmsf-category-title nlmsf-category-title-medical">
                  Medical
                </h4>
                <ul className="nlmsf-sidebar-nav-list">
                  <li>
                    <a
                      href="#mitchell-achee"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-medical"
                    >
                      Mitchell D. Achee, M.D.
                    </a>
                  </li>
                </ul>

                <h4 className="nlmsf-category-title nlmsf-category-title-outreach">
                  Community Outreach
                </h4>
                <ul className="nlmsf-sidebar-nav-list">
                  <li>
                    <a
                      href="#alex-aguilera"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      Alex Aguilera
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dale-ayscue"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      Dale Ayscue
                    </a>
                  </li>
                  <li>
                    <a
                      href="#david-boles"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      David Boles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#greg-lee"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      Greg Lee
                    </a>
                  </li>
                  <li>
                    <a
                      href="#jim-matthews"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      Jim Matthews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#chandalyn-williams"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-outreach"
                    >
                      Chandalyn Williams
                    </a>
                  </li>
                </ul>

                <h4 className="nlmsf-category-title nlmsf-category-title-support">
                  Support &amp; Services
                </h4>
                <ul className="nlmsf-sidebar-nav-list">
                  <li>
                    <a
                      href="#christopher-hancock"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-support"
                    >
                      Christopher Hancock
                    </a>
                  </li>
                  <li>
                    <a
                      href="#kelly-murphy"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-support"
                    >
                      Kelly Murphy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#jacqueline-sebany"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-support"
                    >
                      Jacqueline Sebany
                    </a>
                  </li>
                  <li>
                    <a
                      href="#taylor-tomlinson"
                      className="nlmsf-sidebar-link nlmsf-sidebar-link-support"
                    >
                      Taylor Tomlinson
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nlmsf-resources">
                <h4 className="nlmsf-resources-title">Additional Resources</h4>
                <ul className="nlmsf-resources-list">
                  <li>
                    <Link
                      href="/resources/community-support"
                      className="nlmsf-resources-link"
                    >
                      Community Support Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/clinical-trials"
                      className="nlmsf-resources-link"
                    >
                      Clinical Trials Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/patient-resources"
                      className="nlmsf-resources-link"
                    >
                      Patient Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="nlmsf-board-content">
            <div className="medical-board-header">
              <h2>Medical Board</h2>
              <p>
                World-renowned sarcoma experts who guide our research priorities
                and ensure clinical accuracy
              </p>
            </div>

            <div className="nlmsf-members-grid medical-board-grid">
              {medicalBoardMembers.map((member) => (
                <div
                  key={member.id}
                  id={member.id}
                  className="nlmsf-member-grid-card nlmsf-member-medical"
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className="nlmsf-member-image"
                    width={240}
                    height={240}
                  />
                  <h3 className="nlmsf-member-name">{member.name}</h3>
                  <p className="nlmsf-member-role">
                    {member.role.split("\n").map((line, index) => (
                      <span key={`${member.id}-role-${index}`}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <button
                    className="nlmsf-read-more nlmsf-read-more-medical"
                    onClick={() => openModal(member)}
                    type="button"
                  >
                    Read Full Bio
                  </button>
                </div>
              ))}
            </div>

            <div className="board-section-header">
              <h2>Our Board</h2>
            </div>

            <div className="nlmsf-testimonial-section nlmsf-section-leadership">
              <h3 className="nlmsf-section-title">Leadership</h3>
              <div className="nlmsf-members-grid">
                {leadershipMembers.map((member) => (
                  <div
                    key={member.id}
                    id={member.id}
                    className="nlmsf-member-grid-card nlmsf-member-leadership"
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="nlmsf-member-image"
                      width={240}
                      height={240}
                    />
                    <h3 className="nlmsf-member-name">{member.name}</h3>
                    <p className="nlmsf-member-role">{member.role}</p>
                    <button
                      className="nlmsf-read-more nlmsf-read-more-leadership"
                      onClick={() => openModal(member)}
                      type="button"
                    >
                      Read Full Bio
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="nlmsf-testimonial-section nlmsf-section-medical">
              <h3 className="nlmsf-section-title">Medical</h3>
              <div className="nlmsf-members-grid">
                {medicalLeadershipMembers.map((member) => (
                  <div
                    key={member.id}
                    id={member.id}
                    className="nlmsf-member-grid-card nlmsf-member-medical"
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="nlmsf-member-image"
                      width={240}
                      height={240}
                    />
                    <h3 className="nlmsf-member-name">{member.name}</h3>
                    <p className="nlmsf-member-role">{member.role}</p>
                    <button
                      className="nlmsf-read-more nlmsf-read-more-medical"
                      onClick={() => openModal(member)}
                      type="button"
                    >
                      Read Full Bio
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="nlmsf-testimonial-section nlmsf-section-outreach">
              <h3 className="nlmsf-section-title">Community Outreach</h3>
              <div className="nlmsf-members-grid">
                {outreachMembers.map((member) => (
                  <div
                    key={member.id}
                    id={member.id}
                    className="nlmsf-member-grid-card nlmsf-member-outreach"
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="nlmsf-member-image"
                      width={240}
                      height={240}
                    />
                    <h3 className="nlmsf-member-name">{member.name}</h3>
                    <p className="nlmsf-member-role">{member.role}</p>
                    <button
                      className="nlmsf-read-more nlmsf-read-more-outreach"
                      onClick={() => openModal(member)}
                      type="button"
                    >
                      Read Full Bio
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="nlmsf-testimonial-section nlmsf-section-support">
              <h3 className="nlmsf-section-title">Support &amp; Services</h3>
              <div className="nlmsf-members-grid">
                {supportMembers.map((member) => (
                  <div
                    key={member.id}
                    id={member.id}
                    className="nlmsf-member-grid-card nlmsf-member-support"
                  >
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="nlmsf-member-image"
                      width={240}
                      height={240}
                    />
                    <h3 className="nlmsf-member-name">{member.name}</h3>
                    <p className="nlmsf-member-role">{member.role}</p>
                    <button
                      className="nlmsf-read-more nlmsf-read-more-support"
                      onClick={() => openModal(member)}
                      type="button"
                    >
                      Read Full Bio
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`nlmsf-modal${activeMember ? " active" : ""}`}>
        <div className="nlmsf-modal-content">
          <button
            className="nlmsf-modal-close"
            aria-label="Close"
            onClick={closeModal}
            type="button"
          >
            ×
          </button>
          <div className="nlmsf-modal-header">
            <h2 id="modal-member-name">
              {activeMember ? activeMember.name : ""}
            </h2>
            <div className="nlmsf-modal-title" id="modal-member-title">
              {activeMember
                ? activeMember.role.split("\n").map((line, index) => (
                    <span key={`modal-role-${index}`}>
                      {line}
                      <br />
                    </span>
                  ))
                : null}
            </div>
          </div>
          <div className="nlmsf-modal-body" id="modal-member-content">
            {activeMember
              ? activeMember.bio.map((paragraph, index) => (
                  <p key={`${activeMember.id}-bio-${index}`}>{paragraph}</p>
                ))
              : null}
          </div>
        </div>
        <button
          className="nlmsf-modal-backdrop"
          aria-hidden="true"
          onClick={closeModal}
          type="button"
        />
      </div>
    </div>
  );
}
