"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

type DropdownSection = {
  title: string;
  links: { label: string; href: string }[];
};

type DropdownItem = {
  label: string;
  sections: DropdownSection[];
};

const dropdownItems: DropdownItem[] = [
  {
    label: "Home",
    sections: [
      {
        title: "Home",
        links: [
          { label: "What is LMS", href: "#" },
          { label: "Mission", href: "#" },
          { label: "Goals", href: "#" },
          { label: "History", href: "#" },
          { label: "Who We Are", href: "#" },
          { label: "Accountability Reports", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Newly Diagnosed",
    sections: [
      {
        title: "Newly Diagnosed",
        links: [
          { label: "Accuracy of Pathology Report", href: "#" },
          { label: "Second Opinions", href: "#" },
          { label: "Genomic/Molecular Testing", href: "#" },
          { label: "ctDNA Testing", href: "#" },
          { label: "Types of Routine Testing", href: "#" },
          { label: "Current Chemotherapy Drugs", href: "#" },
          { label: "Sarcomna Centers of Excelence", href: "#" },
          { label: "Clinical Trial Information", href: "#" },
        ],
      },
      {
        title: "Support Resources",
        links: [
          { label: "Meal Help", href: "#" },
          { label: "Lodging Resources", href: "#" },
          { label: "Transportations Resources", href: "#" },
          { label: "Connect with a Clinical Program", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Managing LMS",
    sections: [
      {
        title: "In Treatment",
        links: [
          { label: "Programs and Resources", href: "#" },
          { label: "Financial Guidance", href: "#" },
          { label: "Health Insurance Guidance", href: "#" },
          { label: "Education Resource Information", href: "#" },
          { label: "Recorded Information", href: "#" },
          { label: "Count Me In Program", href: "#" },
          { label: "Tumor Donation for Research", href: "#" },
        ],
      },
      {
        title: "After Treatment",
        links: [
          { label: "Survivorship Care Planning", href: "#" },
          { label: "Integrative Medicine", href: "#" },
          { label: "Ongoing Education Support", href: "#" },
          { label: "Clinical Trials Information", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Caregiving Counts",
    sections: [
      {
        title: "Caregiving Counts",
        links: [
          { label: "Guidance/Information Sessions", href: "#" },
          { label: "Resources", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Research",
    sections: [
      {
        title: "Funded Research Projects",
        links: [
          { label: "Research Publications", href: "#" },
          { label: "Non-Uterin/Uterine", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Ways to Support",
    sections: [
      {
        title: "Ways to Support",
        links: [
          { label: "Research", href: "#" },
          { label: "Tributes", href: "#" },
          { label: "Testimonials", href: "#" },
        ],
      },
    ],
  },
];

export default function PaliativeCareClient() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = useCallback((index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  }, []);

  const closeDropdowns = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const dropdownList = useMemo(() => dropdownItems, []);

  return (
    <div className="paliative-care-page" onClick={closeDropdowns}>
      <section className="paliative-header">
        <div className="paliative-header-grid">
          <a href="https://nlmsf.org" className="paliative-logo" onClick={(event) => event.stopPropagation()}>
            <Image
              src="https://nlsmf.org/wp-content/uploads/2023/02/NLMSF-New-Round-Ribbon-Logo.jpg"
              alt="NLMSF logo"
              width={240}
              height={240}
            />
          </a>
          <div className="paliative-header-links">
            <a href="https://nlmsf.org" className="paliative-link" onClick={(event) => event.stopPropagation()}>
              Shop
            </a>
            <a href="https://nlmsf.org" className="paliative-link" onClick={(event) => event.stopPropagation()}>
              Volunteer
            </a>
          </div>
          <a href="#" className="paliative-cta" onClick={(event) => event.stopPropagation()}>
            Donate Once
          </a>
          <a href="#" className="paliative-cta" onClick={(event) => event.stopPropagation()}>
            Donate Monthly
          </a>
        </div>
      </section>

      <section className="paliative-nav" onClick={(event) => event.stopPropagation()}>
        <div className="paliative-nav-inner">
          {dropdownList.map((item, index) => (
            <div className="paliative-dropdown" key={item.label}>
              <button
                type="button"
                className="paliative-dropbtn"
                onClick={() => toggleDropdown(index)}
                aria-expanded={openDropdown === index}
              >
                {item.label}
                <span className="paliative-caret">▾</span>
              </button>
              {openDropdown === index ? (
                <div className="paliative-dropdown-content">
                  {item.sections.map((section) => (
                    <div className="paliative-dropdown-section" key={section.title}>
                      <h3>{section.title}</h3>
                      <div className="paliative-dropdown-links">
                        {section.links.map((link) => (
                          <a href={link.href} key={link.label}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="paliative-section">
        <h2>Palliative care:</h2>
        <p>
          Palliative care is a specialized form of support designed for individuals grappling with a significant illness. This
          comprehensive approach not only aids in the effective management of symptoms, pain, and treatment-related side effects but
          also provides invaluable assistance in navigating the emotional complexities associated with life-altering challenges.
        </p>
      </section>

      <section className="paliative-section">
        <h2>Palliative care and hospice distinctly diverge in their focus and scope:</h2>
        <p>
          Many people confuse palliative care with hospice care, but they are not the same. The goal of palliative care is to
          alleviate suffering and improve quality of life among people with serious illness. Palliative care specialists are experts
          in understanding and addressing the pain, symptoms, and stress that comes with such illness. They work with a person&apos;s
          existing medical team to enhance care by focusing on living their best life for as long as possible. Palliative care can be
          provided in the hospital, clinic, or home setting.
        </p>
        <p>
          Hospice care is an insurance benefit that focuses specifically on the care, comfort, and quality of life of a person with
          a serious illness who is approaching the end of life. Like palliative care, it provides comprehensive care for the patient
          and the family. A key difference is that patients and families receiving hospice tend to recognize that the illness is not
          responding to medical treatments as hoped. They and their doctors believe the person with illness has 6 months or less to
          live if the illness runs its natural course. For this reason, hospice patients and families may choose to forego
          additional treatments and instead focus on other priorities. Hospice provides support in the home, including pain and
          symptom management, plus emotional and spiritual support for both patients and families.
        </p>
      </section>

      <section className="paliative-section">
        <h2>As per the National Cancer Coalition Network:</h2>
        <p>
          The NCCN, supported by funding from the NCCN Foundation, has recently released updated guidelines for patients, now
          available for public access. Shared by the National Leiomyosarcoma Foundation:
        </p>
        <ul>
          <li>Fatigue and Cancer</li>
          <li>Palliative Care</li>
          <li>Distress During Cancer Care</li>
        </ul>
      </section>

      <section className="paliative-section">
        <h2>What you need to know about palliative care</h2>
        <ul className="paliative-questions">
          <li>What is palliative care?</li>
          <li>Who gives palliative care?</li>
          <li>What facets are encompassed within the realm of palliative care?</li>
          <li>At what junctures is palliative care integrated into the spectrum of cancer care?</li>
          <li>What avenues exist for individuals to access palliative care services?</li>
          <li>How does palliative care differ from hospice care?</li>
          <li>Who pays palliative care?</li>
          <li>Are there compelling research findings demonstrating the positive impact of palliative care?</li>
          <li>Does NCI support palliative care research?</li>
        </ul>
        <Image
          src="https://nlsmf.org/wp-content/uploads/2021/10/NLMSF_Logo_800x800-equal.png"
          alt="NLMSF logo"
          className="paliative-logo-inline"
          width={240}
          height={240}
        />
      </section>

      <section className="paliative-section">
        <h2>Additional resources for palliative care information</h2>
        <h3>Cancer.net (American Society of Clinical Oncology)</h3>
        <p>
          <a
            href="https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/what-palliative-care-"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/what-palliative-care-
          </a>
        </p>
      </section>

      <section className="paliative-section">
        <h2>Types of palliative care:</h2>
        <p>
          <a
            href="https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/types-palliative-care-"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cancer.net/coping-with-cancer/physical-emotional-and-social-effects-cancer/types-palliative-care-
          </a>
        </p>
      </section>

      <section className="paliative-section">
        <h2>Understanding Palliative Care:</h2>
        <p>
          <a
            href="https://www.cancer.org/content/dam/CRC/PDF/Public/7958.00.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cancer.org/content/dam/CRC/PDF/Public/7958.00.pdf
          </a>
        </p>
        <h2>Finding a Palliative Care program:</h2>
        <p>
          <a
            href="https://www.cancer.org/treatment/treatment-and-side-effects/palliative-care/how-to-find.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cancer.org/treatment/treatment-and-side-effects/palliative-care/how-to-find.html
          </a>
        </p>
      </section>

      <section className="paliative-section">
        <h2>Cancer Council:</h2>
        <p>
          <a
            href="https://www.cancer.org.au/cancer-information/treatment/palliative-care"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cancer.org.au/cancer-information/treatment/palliative-care
          </a>
        </p>
        <Image
          src="https://nlsmf.org/wp-content/uploads/2021/10/NLMSF_Logo_800x800-equal.png"
          alt="NLMSF logo"
          className="paliative-logo-inline"
          width={240}
          height={240}
        />
      </section>

      <section className="paliative-section">
        <h2>Elevating Palliative Care to a Standard of Excellence in Cancer Care.</h2>
        <p>Palliative care integration has become a cornerstone in the standard protocols of numerous sarcoma centers of excellence.</p>
        <p>Be sure to ask about Palliative Care services if they are not discussed by your sarcoma care team</p>
        <p>
          Palliative Care addresses the physical and emotional aspects of the cancer diagnosis and treatment – ranging from a broad
          range of issues integrating a patient&apos;s specific needs into care.
        </p>
      </section>

      <section className="paliative-section">
        <ul className="paliative-bullets">
          <li>Physical symptoms</li>
          <li>Emotional and Coping support</li>
          <li>Spiritual Needs</li>
          <li>Caregiver needs</li>
          <li>Practical needs</li>
          <li>Important individuals involved in cancer care</li>
          <li>Financial / legal concerns</li>
          <li>Insurance questions</li>
          <li>Employment concerns</li>
          <li>
            Help in guiding communication among family members, caregivers, and members of the oncology multidisciplinary team
          </li>
        </ul>
      </section>
    </div>
  );
}
