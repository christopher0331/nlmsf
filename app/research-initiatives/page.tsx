import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./research-initiatives.css";

export const metadata: Metadata = {
  title: "Research Initiatives | NLMSF",
  description:
    "Accelerating LMS research through collaboration between scientists and patient communities.",
};

export default function ResearchInitiativesPage() {
  return (
    <main className="research-initiatives-page">
      <section className="ri-hero">
        <div className="ri-hero-inner">
          <div className="ri-hero-badge">Research</div>
          <h1 className="ri-hero-title">Research Initiatives</h1>
          <p className="ri-hero-sub">
            Where Purpose Meets Progress — accelerating LMS research through collaboration between
            scientists and patient communities.
          </p>
          <div className="ri-hero-ctas">
            <a
              href="https://nlmsf.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="ri-btn ri-btn-primary"
            >
              Donate Now
            </a>
            <a
              href="https://nlmsf.org/support/"
              target="_blank"
              rel="noopener noreferrer"
              className="ri-btn ri-btn-outline"
            >
              Support NLMSF
            </a>
          </div>
        </div>
        <div className="ri-hero-decor" aria-hidden />
      </section>

      <div className="ri-layout">
        <aside className="ri-sidebar">
          <nav className="ri-side-nav" aria-label="Research Initiatives Navigation">
            <a href="#introduction" className="ri-side-link">
              Introduction
            </a>
            <a href="#roundtable" className="ri-side-link">
              International LMS Research Roundtable
            </a>
            <a href="#lms-information" className="ri-side-link">
              LMS Information
            </a>
            <a href="#position-paper" className="ri-side-link">
              Position Paper
            </a>
            <a href="#publications" className="ri-side-link">
              Research Publications
            </a>
            <a href="#general-sarcoma" className="ri-side-link">
              General Sarcoma
            </a>
            <a href="#voices" className="ri-side-link">
              Voices
            </a>
            <a href="#funding-news" className="ri-side-link">
              Funding &amp; News
            </a>
            <a href="#collaborators" className="ri-side-link">
              Collaborators
            </a>
            <a href="#seals" className="ri-side-link">
              Seals
            </a>
          </nav>
          <div className="ri-side-cta">
            <h3>Support LMS Research</h3>
            <p>Your gift fuels collaborative research and survivorship programs.</p>
            <a
              href="https://nlmsf.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="ri-btn ri-btn-primary ri-w-full"
            >
              Donate Now
            </a>
          </div>
        </aside>

        <div className="ri-main">
          <section className="ri-section" id="introduction">
            <h2 className="ri-section-title gradient-purple">Introduction</h2>
            <div className="ri-card">
              <p>
                <em>
                  “<strong>Where Purpose Meets Progress</strong> – accelerating progress for
                  Leiomyosarcoma research, through advancing collaborative priorities of the research
                  community and the patient communities served by the NLMSF.”
                </em>
              </p>
            </div>
            <div className="ri-note ri-note-green">
              <p>
                <strong>Dedication:</strong> This website is dedicated to Gilles Frydman and to all
                the contributors of the original Leiomyosarcoma.info website (listed{" "}
                <a
                  href="https://leiomyosarcoma.info/contributors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                ) who provided a valuable compass to guide LMS patients, caregivers, and families.
              </p>
              <p>
                This research site is also dedicated to the heroes among us — patients and families —
                and the researchers who work tirelessly to better understand this rare and complex
                sarcoma, advancing treatment options and improving survivorship.
              </p>
            </div>
          </section>

          <section className="ri-section" id="roundtable">
            <h2 className="ri-section-title gradient-indigo">International LMS Research Roundtable</h2>
            <div className="ri-card">
              <div className="ri-logos">
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2024/08/NLMSF-Logo-Updated-30-Apr-2023-300x297.png"
                  alt="NLMSF Logo"
                  width={300}
                  height={297}
                  sizes="(min-width: 900px) 180px, 45vw"
                />
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2023/03/Globe-blue.jpg"
                  alt="Globe Blue"
                  width={300}
                  height={200}
                  sizes="(min-width: 900px) 180px, 45vw"
                />
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2023/03/SPAGN-Logo.png"
                  alt="SPAGN Logo"
                  width={300}
                  height={200}
                  sizes="(min-width: 900px) 180px, 45vw"
                />
              </div>
              <p>
                A global initiative bringing together the Sarcoma Research Community for a
                collaborative focus on the future of Leiomyosarcoma investigational research and
                clinical trials with a mission of:
              </p>
              <ul>
                <li>Bringing together sarcoma experts for a focused meeting only on Leiomyosarcoma.</li>
                <li>
                  Discussing and understanding the current state of LMS with its research, diagnosis,
                  and treatment challenges.
                </li>
                <li>
                  Developing work plans to close gaps and improve precision LMS research and
                  patient-treatment protocols — SEE PUBLICATION:{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Publication
                  </a>
                </li>
                <li>
                  Advising and directing the NLMSF on LMS precision research projects, including
                  solicitation and funding of grant proposals.
                </li>
              </ul>
              <h3 className="ri-subtitle">Current Roundtable Workgroups</h3>
              <ul>
                <li>LMS Cell Lines / PDX Models</li>
                <li>Multiomics</li>
                <li>Gynecologic / STUMP</li>
                <li>Clinical Trials Assessment</li>
                <li>Imaging Strategies and Radiomics</li>
              </ul>
            </div>
          </section>

          <section className="ri-section" id="lms-information">
            <h2 className="ri-section-title gradient-indigo">Leiomyosarcoma Information</h2>
            <div className="ri-grid">
              <div className="ri-card ri-hover">
                <h3>What is Leiomyosarcoma (LMS)?</h3>
                <p>
                  <a
                    href="http://nlmsf.org/what-is-leiomyosarcoma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read overview on NLMSF.org
                  </a>
                </p>
                <p>
                  <a
                    href="https://leiomyosarcoma.info/uterine-leiomyosarcoma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uterine sarcoma and uterine leiomyosarcoma
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="ri-section" id="position-paper">
            <h2 className="ri-section-title gradient-teal">Unmet Needs &amp; Future Perspectives</h2>
            <div className="ri-grid">
              <div className="ri-card ri-hover">
                <div className="ri-card ri-center">
                  <Image
                    src="https://leiomyosarcoma.info/wp-content/uploads/2021/03/Cancers.png"
                    alt="Cancers diagram"
                    width={300}
                    height={220}
                    sizes="(min-width: 900px) 220px, 60vw"
                  />
                </div>
                <h3>NLMSF &amp; SPAEN Position Paper</h3>
                <p>
                  Unmet Medical Needs and Future Perspectives for Leiomyosarcoma Patients — a
                  position paper from the National Leiomyosarcoma Foundation (NLMSF) and Sarcoma
                  Patients EuroNet (SPAEN).
                </p>
                <p>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7924026/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more (NIH/PMC)
                  </a>
                </p>
              </div>

              <div className="ri-card ri-person">
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2021/07/Berndt-Kasper-150x150.jpg"
                  alt="Bernd Kasper, MD, PhD"
                  width={150}
                  height={150}
                  sizes="150px"
                />
                <div className="ri-person-info">
                  <h4>Principal Author: Bernd Kasper, MD, PhD</h4>
                  <p>
                    Professor, Universitätsmedizin Mannheim | NLMSF–SPAEN Executive Committee |
                    International LMS Research Roundtable
                  </p>
                  <p>
                    <a
                      href="https://tarpswg.org/meet-the-experts/bernd-kasper-2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      About Dr. Kasper
                    </a>
                  </p>
                  <hr />
                  <p>
                    <strong>What Clinical Trials are Needed for LMS?</strong>
                  </p>
                  <p>
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/35275323/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kasper 2022 — Research Update (PDF)
                    </a>
                  </p>
                </div>
              </div>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/10/pub-med-logo.jpg"
                alt="PubMed"
                className="ri-badge-logo"
                width={260}
                height={140}
                sizes="(min-width: 900px) 220px, 60vw"
              />
            </div>
          </section>

          <section className="ri-section" id="publications">
            <h2 className="ri-section-title gradient-pink">Comprehensive Research Publications</h2>
            <div className="ri-card ri-hover">
              <div className="ri-grid-2">
                <div className="ri-pub">
                  <div className="ri-person-sm">
                    <Image
                      src="https://leiomyosarcoma.info/wp-content/uploads/2022/01/Dr.-Rebecca-Gladdy-280x300.jpg"
                      alt="Rebecca Gladdy, MD, PhD"
                      width={280}
                      height={300}
                      sizes="(min-width: 900px) 120px, 35vw"
                    />
                    <div className="ri-person-text">
                      <strong>Rebecca Gladdy, MD, PhD</strong>
                      <div>
                        <a
                          href="https://tarpswg.org/meet-the-experts/rebecca-gladdy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          About Dr. Gladdy
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>
                    <strong>
                      Lineage-defined leiomyosarcoma subtypes emerge years before diagnosis and
                      determine patient survival
                    </strong>
                  </p>
                  <p>
                    <a
                      href="https://www.nature.com/articles/s41467-021-24677-6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nature Communications (2021)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="ri-section" id="general-sarcoma">
            <h2 className="ri-section-title gradient-blue">General Sarcoma Information</h2>
            <div className="ri-card ri-hover ri-center">
              <p>
                <a
                  href="https://www.cancer.org/cancer/soft-tissue-sarcoma/about/key-statistics.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarcoma statistics — American Cancer Society
                </a>
              </p>
            </div>
          </section>

          <section className="ri-section" id="voices">
            <h2 className="ri-section-title gradient-purple">Voices from the Research Community</h2>
            <div className="ri-grid">
              <div className="ri-card ri-quote">
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2021/01/ScottOkuno.jpg"
                  alt="Scott Okuno, MD"
                  width={240}
                  height={240}
                  sizes="120px"
                />
                <h3>Scott Okuno, MD — Professor of Oncology, Mayo Clinic</h3>
                <p>
                  “We are continuously updating this website to provide information on advances in
                  Leiomyosarcoma research as well as the numerous collaborations that are occurring.
                  The NLMSF has additional resources about Leiomyosarcoma on the NLMSF.org site. We
                  are interested in your feedback as we continue to strive to improve sharing of
                  Leiomyosarcoma information.”
                </p>
              </div>
              <div className="ri-card ri-quote">
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2021/01/SethPollack.jpg"
                  alt="Seth Pollack, MD"
                  width={240}
                  height={240}
                  sizes="120px"
                />
                <h3>Seth Pollack, MD — Director, Sarcoma Program, Lurie Cancer Center</h3>
                <p>
                  “I love the NLMSF – I love the patient programs held – your signature support
                  advocacy to collaborate with sarcoma centers. LMS is common enough to have had a
                  specific focus initiative — and the NLMSF was many steps ahead of the curve to
                  launch the LMS International Research Roundtable — to support patients in this
                  way, and focus on LMS-specific research and support in the research landscape.”
                </p>
              </div>
              <div className="ri-card ri-quote">
                <Image
                  src="https://leiomyosarcoma.info/wp-content/uploads/2021/06/Arun-Singh-e1623906159259.jpg"
                  alt="Arun Singh, MD"
                  width={240}
                  height={240}
                  sizes="120px"
                />
                <h3>Arun Singh, MD — Associate Professor, Sarcoma Service, UCLA</h3>
                <p>
                  “The National Leiomyosarcoma Foundation is an important organization that strives
                  to gather a critical mass of patients, scientists, patient advocates and physicians
                  to learn more about this rare disease. Within the NLMSF, the LMS Research Roundtable
                  organizes cutting-edge research and strives to innovate the ways that this disease
                  is treated.”
                </p>
              </div>
            </div>
          </section>

          <section className="ri-section" id="funding-news">
            <h2 className="ri-section-title gradient-amber">Funding &amp; Collaborative News</h2>
            <div className="ri-card ri-hover">
              <h3>University of Michigan to lead multi-site $12M grant to study rare sarcoma</h3>
              <p>
                “We recognized that to effectively study a rare cancer we had to assemble an
                outstanding international team from premier sarcoma centers,” said principal
                investigator Scott Schuetze, MD, PhD.
              </p>
              <p>
                <a
                  href="https://www.newswise.com/articles/u-m-to-lead-multi-site-12m-grant-to-study-rare-type-of-sarcoma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the announcement
                </a>
              </p>
              <p>
                The NLMSF is proud to have committed to a five-year funding pledge of support for
                this LMS-specific research, and pleased that Dr. Mitch Achee (LMS survivor and
                physician) was selected to be a member of the External Advisory Board for the SPORE.
                He will lead the engagement of the LMS patient advocate group for this initiative.
              </p>
              <p>— Annie Achee, NLMSF</p>
            </div>
          </section>

          <section className="ri-section" id="collaborators">
            <h2 className="ri-section-title gradient-teal">NLMSF Collaborators</h2>
            <div className="ri-logos">
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/unnamed-4.jpg"
                alt="Collaborator logo 1"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/unnamed-5.jpg"
                alt="Collaborator logo 2"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/unnamed-2-300x37.png"
                alt="Collaborator logo 3"
                width={300}
                height={37}
                sizes="(min-width: 900px) 220px, 60vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/download.jpg"
                alt="Collaborator logo 4"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/unnamed-3.jpg"
                alt="Collaborator logo 5"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/unnamed.png"
                alt="Collaborator logo 6"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2017/09/download-e1644218800705.png"
                alt="Collaborator logo 7"
                width={220}
                height={120}
                sizes="(min-width: 900px) 180px, 45vw"
              />
            </div>
          </section>

          <section className="ri-section" id="seals">
            <h2 className="ri-section-title gradient-indigo">Charity &amp; GuideStar Seals</h2>
            <div className="ri-logos small">
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2021/03/Charity-Seals.jpg"
                alt="Charity Seals"
                width={280}
                height={180}
                sizes="(min-width: 900px) 200px, 60vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
                alt="GuideStar Seal"
                width={280}
                height={180}
                sizes="(min-width: 900px) 200px, 60vw"
              />
              <Image
                src="https://leiomyosarcoma.info/wp-content/uploads/2021/03/Top-rated-Seal.jpg"
                alt="Top-Rated Seal"
                width={280}
                height={180}
                sizes="(min-width: 900px) 200px, 60vw"
              />
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
