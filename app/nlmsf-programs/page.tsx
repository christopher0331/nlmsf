import type { Metadata } from "next";
import Link from "next/link";
import "./nlmsf-programs.css";

export const metadata: Metadata = {
  title: "Our Programs | NLMSF",
  description:
    "NLMSF programs: Education, Support, Advocacy, Research. LMS Lifeline, Buddy Program, Patient Resources, Patient Programs, Count Me In, and Patients Take Action.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function NlmsfProgramsPage() {
  return (
    <div className="nlmsf-programs-page">
      <section className="programs-hero">
        <div className="programs-hero-inner">
          <h1 className="programs-hero-title">Our Programs</h1>
          <h4 className="programs-hero-tagline">&quot;We have what it takes to help each other!&quot;</h4>
          <div className="programs-hero-image">
            <img
              src="https://nlmsf.org/wp-content/uploads/2020/05/Heart-for-Home-Page.png"
              alt=""
              width={252}
              height={242}
              fetchPriority="high"
            />
          </div>
          <blockquote className="programs-hero-quote">
            <p>
              <strong>EDUCATION – SUPPORT – ADVOCACY – RESEARCH&nbsp;</strong>
            </p>
            <p>
              <strong>We want to inform, inspire and empower.</strong>
            </p>
          </blockquote>
        </div>
      </section>

      <section className="programs-quotes">
        <div className="programs-quotes-grid">
          <div className="quote-card">
            <div className="quote-card-image">
              <img
                src="https://nlmsf.org/wp-content/uploads/2021/02/Dr-pollack.jpg"
                alt="Dr. Raphael E Pollock"
                width={138}
                height={103}
              />
            </div>
            <h4 className="quote-card-title">
              Dr. Raphael E Pollock MD, PhD
              <br />
              Director, Ohio State University Comprehensive Cancer Center
              <br />
              KLOTZ Chair in Cancer Research
            </h4>
            <p className="quote-card-text">
              &quot;The NLSMF provides a vital link between the community, including LMS patients, and the oncology researchers who work tirelessly to help develop a better understanding of this rare disease, with the direct intent to provide sorely needed new therapeutic approaches. The LMS Research Roundtable process provides this unique and heretofore mission function, and for this reason we are so very grateful to Annie and Mitch Achee for providing the inspiration and resources needed to forge this connection.&quot;
            </p>
          </div>
          <div className="quote-card">
            <div className="quote-card-image">
              <img
                src="https://nlmsf.org/wp-content/uploads/elementor/thumbs/seth-pollack-oqlhk3iw8u04lvf23i0958v5joarkcur9y5bt2yjoi.jpg"
                alt="Seth Pollack"
                loading="lazy"
              />
            </div>
            <h4 className="quote-card-title">
              Seth Pollack, MD, Northwestern Medicine as Director of the Sarcoma Program of the Lurie Cancer Center
            </h4>
            <p className="quote-card-text">
              &quot;I love the NLMSF – I love the patient programs held – your signature support advocacy to collaborate with sarcoma centers. LMS is common enough to have had a specific focus initiative- and the NLMSF was many steps ahead of the curve, to launch the LMS International Research Roundtable – to support patients in this way, and focus on LMS-specific research and support in the research landscape. Annie and Mitch are such a good team for the LMS Roundtable. They compliment each other with their unique strengths in moving forward to help patients and giving a special spotlight to LMS in particular.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="programs-cards">
        <div className="programs-cards-row">
          <div className="program-card">
            <div className="program-card-image">
              <img
                src="https://nlmsf.org/wp-content/uploads/2020/05/3910322081536909718-128.png"
                alt=""
                width={128}
                height={128}
              />
            </div>
            <h3 className="program-card-title">LMS Lifeline/ Compass Connection</h3>
            <p className="program-card-desc">
              <a href="tel:3038083437">(303) 808-3437</a> or <a href="tel:3037830924">(303) 783-0924</a> for immediate assistance 24/7.
            </p>
          </div>

          <div className="program-card">
            <div className="program-card-image">
              <a href="https://nlmsf.org/lms-lifeline-buddy-program/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/07/3-buddy.jpg"
                  alt=""
                  width={564}
                  height={564}
                  loading="lazy"
                />
              </a>
            </div>
            <h3 className="program-card-title">
              <a href="https://nlmsf.org/lms-lifeline-buddy-program/" {...ext}>The Buddy Program</a>
            </h3>
            <p className="program-card-desc">Learn how other patients are living through LMS.</p>
            <div className="program-card-cta">
              <a href="https://nlmsf.org/lms-lifeline-buddy-program/" className="program-btn" {...ext}>
                <i className="fab fa-readme" aria-hidden /> Read More
              </a>
            </div>
          </div>

          <div className="program-card">
            <div className="program-card-image">
              <a href="https://nlmsf.org/resources/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/15016772371537355596-128.png"
                  alt=""
                  width={128}
                  height={128}
                  loading="lazy"
                />
              </a>
            </div>
            <h3 className="program-card-title">
              <a href="https://nlmsf.org/resources/" {...ext}>Patient Resources</a>
            </h3>
            <p className="program-card-desc">View our comprehensive list of resources, prepared especially for you!</p>
            <div className="program-card-cta">
              <a href="https://nlmsf.org/resources/" className="program-btn" {...ext}>Read More</a>
            </div>
          </div>

          <div className="program-card">
            <div className="program-card-image">
              <a href="https://nlmsf.org/events/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/mentor-icon-2895941_1280.png"
                  alt=""
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </a>
            </div>
            <h3 className="program-card-title">
              <a href="https://nlmsf.org/events/" {...ext}>Patient Programs</a>
            </h3>
            <p className="program-card-desc">Attend our programs to learn more on the latest research.</p>
            <div className="program-card-cta">
              <a href="https://nlmsf.org/events/" className="program-btn" {...ext}>Read More</a>
            </div>
          </div>

          <div className="program-card">
            <div className="program-card-image">
              <a href="https://mailchi.mp/4f2119f43f8b/nlmsf-news-tracker" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/unnamed-30.jpg"
                  alt=""
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </a>
            </div>
            <h3 className="program-card-title">
              <a href="https://mailchi.mp/4f2119f43f8b/nlmsf-news-tracker" {...ext}>Open to Hope Grief Support Group</a>
            </h3>
            <p className="program-card-desc">Support for Spouses and Children</p>
            <div className="program-card-cta">
              <a href="https://mailchi.mp/4f2119f43f8b/nlmsf-news-tracker" className="program-btn" {...ext}>Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="count-me-in">
        <div className="count-me-in-inner">
          <h1 className="count-me-in-title">Count Me In Project</h1>
          <div className="count-me-in-video">
            <iframe
              title="YouTube video player - Count Me In"
              width={640}
              height={360}
              src="https://www.youtube.com/embed/qF77K31u-ww?controls=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="count-me-in-text">
            <p>
              A description the Count Me In Project is found in the link provided below, along with a description of the NCI MyPart Network.
            </p>
            <p>
              The Count Me In Project is under the direction of Dr. Corrie Painter, PhD of the Broad Institute. Visit:{" "}
              <a href="https://leiomyosarcoma.info/mypart-network/" {...ext}>
                https://leiomyosarcoma.info/mypart-network/
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="patients-take-action-header">
        <div className="patients-take-action-header-inner">
          <h2 className="patients-take-action-title">Patients Take Action</h2>
        </div>
      </section>

      <section className="patients-take-action-cards">
        <div className="patients-take-action-grid">
          <div className="action-card">
            <div className="action-card-image">
              <a href="https://leiomyosarcoma.info/cancer-cell-line-project/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/Broad-Institute-.jpg"
                  alt=""
                  width={205}
                  height={52}
                  loading="lazy"
                />
              </a>
            </div>
            <h4 className="action-card-title">
              <a href="https://leiomyosarcoma.info/cancer-cell-line-project/" {...ext}>Cancer Cell Line Project</a>
            </h4>
            <p className="action-card-desc">
              New therapies for LMS can&apos;t be discovered until we systematically map the best drug targets. The Rare Cancer Dependency Map Initiative is creating patient models from living tissue from your consent to donate your tumor tissue prior to surgery.
            </p>
            <div className="action-card-cta">
              <a href="https://leiomyosarcoma.info/cancer-cell-line-project/" className="action-btn" {...ext}>Read More</a>
            </div>
          </div>

          <div className="action-card">
            <div className="action-card-image">
              <Link href="/be-a-successful-caregiver-advocate" className="action-card-img-link">
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-66.jpg"
                  alt=""
                  width={112}
                  height={115}
                  loading="lazy"
                />
              </Link>
            </div>
            <h4 className="action-card-title">
              <Link href="/be-a-successful-caregiver-advocate">Patient-Caregiver Advocacy Roundtable</Link>
            </h4>
            <p className="action-card-desc">
              Within the LMS community, everyone has a unique experience and sharing our narratives empowers the storyteller and all who listen.
            </p>
            <div className="action-card-cta">
              <Link href="/be-a-successful-caregiver-advocate" className="action-btn">Read More</Link>
            </div>
          </div>

          <div className="action-card">
            <div className="action-card-image">
              <a href="https://nlmsf.org/survivors-inspire/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/Add-a-little-bit-of-body-text-e1590858618737.png"
                  alt=""
                  width={211}
                  height={191}
                  loading="lazy"
                />
              </a>
            </div>
            <h4 className="action-card-title">
              <a href="https://nlmsf.org/survivors-inspire/" {...ext}>Survivors Inspire Peer Network</a>
            </h4>
            <p className="action-card-desc">
              A telecon network of survivors of the journey to share about end of treatment in particular tips, suggestions, new information from guest speakers from different sarcoma centers of excellence.
            </p>
            <div className="action-card-cta">
              <a href="https://nlmsf.org/survivors-inspire/" className="action-btn" {...ext}>Read More</a>
            </div>
          </div>

          <div className="action-card">
            <div className="action-card-image">
              <img
                src="https://nlmsf.org/wp-content/uploads/2021/03/CountmeIn.jpg"
                alt=""
                width={220}
                height={97}
                loading="lazy"
              />
            </div>
            <div className="action-card-image">
              <a href="https://leiomyosarcoma.info/mypart-network/" {...ext}>
                <img
                  src="https://nlmsf.org/wp-content/uploads/2020/05/unnamed-4.png"
                  alt=""
                  width={974}
                  height={322}
                  loading="lazy"
                />
              </a>
            </div>
            <h4 className="action-card-title">
              <a href="https://leiomyosarcoma.info/mypart-network/" {...ext}>MyPart Network</a>
            </h4>
            <p className="action-card-desc">
              The MyPART Network is coordinated through the NCI Center for Cancer Research (CCR). This program brings patients and their families together with healthcare providers, and researchers to work together.
            </p>
            <div className="action-card-cta">
              <a href="https://leiomyosarcoma.info/mypart-network/" className="action-btn" {...ext}>Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
