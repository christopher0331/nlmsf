import type { Metadata } from "next";
import Image from "next/image";
import "./research-saves-lives.css";

export const metadata: Metadata = {
  title: "Research Saves Lives | NLMSF",
  description:
    "Learn how Pattern.org helps patients contribute to groundbreaking LMS research.",
};

export default function ResearchSavesLivesPage() {
  return (
    <main className="research-saves-lives-page">
      <section className="rsl-hero">
        <div className="rsl-hero-inner">
          <div className="rsl-hero-badge">Research Saves Lives</div>
          <h1>Research Saves Lives</h1>
          <p>
            The Rare Cancer Research Foundation (RCRF) united with the National Leiomyosarcoma
            Foundation in 2017. Through Pattern.org, patients can help drive pioneering LMS research
            by donating excess tumor tissue.
          </p>
        </div>
      </section>

      <section className="rsl-section">
        <div className="rsl-card">
          <p>
            Participating is straightforward—simply decide to provide your consent before your
            surgery through{" "}
            <a href="https://pattern.org" target="_blank" rel="noopener noreferrer">
              Pattern.org
            </a>
            . By opting to donate excess tumor tissue prior to your scheduled surgery, you play a
            vital role in advancing Leiomyosarcoma (LMS) research. Your tumor tissue will be
            dispatched to MIT’s Koch Institute, specifically the Boehm Lab, under the guidance of
            Dr. Jesse Boehm, the Principal Investigator. The lab’s primary emphasis will be on
            genomics and model derivation for leiomyosarcoma, with all research findings shared
            widely after de-identification.
          </p>
          <p>
            As a patient, you have the opportunity to play a crucial role in advancing rare cancer
            research by participating in initiatives such as Pattern.org.
          </p>
        </div>
      </section>

      <section className="rsl-section">
        <h2>Featured Videos</h2>
        <div className="rsl-video-grid">
          <article className="rsl-video-card">
            <a
              href="https://www.youtube.com/watch?feature=shared&v=vTw6ZPlUPfQ"
              target="_blank"
              rel="noopener noreferrer"
              className="rsl-video-thumb"
            >
              <Image
                src="https://img.youtube.com/vi/vTw6ZPlUPfQ/mqdefault.jpg"
                alt="Dr. Jesse Boehm on tissue donation with Pattern.org"
                width={640}
                height={360}
                sizes="(min-width: 900px) 420px, 100vw"
              />
              <span className="rsl-video-play">
                <i className="fas fa-play-circle" aria-hidden />
              </span>
            </a>
            <div className="rsl-video-body">
              <h3>Dr. Jesse Boehm on Tissue Donation</h3>
              <p>
                Dr. Jesse Boehm discusses the importance of tissue donation with Pattern.org for
                advancing LMS research.
              </p>
              <a
                href="https://www.youtube.com/watch?feature=shared&v=vTw6ZPlUPfQ"
                target="_blank"
                rel="noopener noreferrer"
                className="rsl-video-link"
              >
                Watch video
              </a>
            </div>
          </article>

          <article className="rsl-video-card">
            <a
              href="https://www.youtube.com/watch?v=UA04-R-D7_Q"
              target="_blank"
              rel="noopener noreferrer"
              className="rsl-video-thumb"
            >
              <Image
                src="https://img.youtube.com/vi/UA04-R-D7_Q/mqdefault.jpg"
                alt="Pattern.org step-by-step guide for patients"
                width={640}
                height={360}
                sizes="(min-width: 900px) 420px, 100vw"
              />
              <span className="rsl-video-play">
                <i className="fas fa-play-circle" aria-hidden />
              </span>
            </a>
            <div className="rsl-video-body">
              <h3>Step-by-Step Guide for Patients</h3>
              <p>A quick walkthrough for patients to participate with Pattern.org.</p>
              <a
                href="https://www.youtube.com/watch?v=UA04-R-D7_Q"
                target="_blank"
                rel="noopener noreferrer"
                className="rsl-video-link"
              >
                Watch guide
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="rsl-section">
        <div className="rsl-contact-card">
          <h2>Questions?</h2>
          <p>
            Should you have any inquiries regarding this program, feel free to reach out to Barbara
            Van Hare, President of Pattern.org. She is dedicated to addressing all your questions
            or concerns, ensuring your comfort and confidence in taking this significant stride
            forward in global Leiomyosarcoma (LMS) research.
          </p>
          <div className="rsl-contact-details">
            <a href="mailto:barbara@rcrf.org">barbara@rcrf.org</a>
            <span>844-472-7273 ext. 700</span>
          </div>
        </div>
      </section>
    </main>
  );
}
