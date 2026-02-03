"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Member = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
};

export default function OurBoardClient() {
  const medicalBoardMembers = useMemo<Member[]>(
    () => [
      {
        id: "winan-van-houdt",
        name: "Winan van Houdt, M.D.",
        role:
          "Surgical Oncologist\nNetherlands Cancer Institute / Antoni van Leeuwenhoek Hospital\nAmsterdam, Netherlands",
        imageUrl: "https://nlmsf.org/wp-content/uploads/2025/12/Winan-van-Houdt.png",
        bio:
          "Dr. van Houdt specializes in surgery for limb, trunk, retroperitoneal, and intra-abdominal sarcomas. He leads multiple international research projects dedicated to advancing sarcoma care and improving patient outcomes worldwide.",
      },
      {
        id: "arun-singh",
        name: "Arun Singh, M.D.",
        role:
          "Sarcoma Medical Oncologist\nUCLA Jonsson Comprehensive Cancer Center\nLos Angeles, CA",
        imageUrl: "https://nlmsf.org/wp-content/uploads/2025/12/Arun-Singh.png",
        bio:
          "Dr. Singh treats patients with bone and soft tissue sarcomas and conducts clinical trials on novel therapies and mechanisms of disease at one of the leading sarcoma programs in the United States.",
      },
      {
        id: "matthew-ingham",
        name: "Matthew Ingham, M.D.",
        role:
          "Sarcoma Medical Oncologist\nNYU Perlmutter Cancer Center\nNew York, NY",
        imageUrl: "https://nlmsf.org/wp-content/uploads/2025/12/Matt-Ingham.png",
        bio:
          "Dr. Ingham specializes in the clinical care and translational research of sarcomas and connective tissue malignancies, bridging cutting-edge science with direct patient care.",
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
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="nlmsf-member-image"
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
            {activeMember ? <p>{activeMember.bio}</p> : null}
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
