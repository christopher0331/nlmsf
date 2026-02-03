import type { Metadata } from "next";
import "./open-research.css";

export const metadata: Metadata = {
  title: "Opening Every Door - Together | NLMSF",
  description:
    "Become a monthly member investor in LMS research and survivorship.",
};

export default function OpenResearchPage() {
  return (
    <div className="open-research-page">
      <section className="open-research-hero">
        <div className="open-research-container">
          <img
            src="https://nlmsf.org/wp-content/uploads/2022/03/image1.jpg"
            alt="Open research hero"
            className="open-research-hero-image"
          />
        </div>
      </section>

      <section className="open-research-section">
        <div className="open-research-container">
          <div className="open-research-grid">
            <div className="open-research-card">
              <img
                src="https://nlmsf.org/wp-content/uploads/2022/03/image3.jpg"
                alt="Research laboratory"
                className="open-research-image"
              />
            </div>
            <div className="open-research-card">
              <img
                src="https://nlmsf.org/wp-content/uploads/2022/03/image2.jpg"
                alt="Research team"
                className="open-research-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="open-research-section">
        <div className="open-research-container">
          <div className="open-research-copy">
            <p>
              <strong>O P E N I N G &nbsp; E V E R Y &nbsp; D O O R - T O G E T H
              E R</strong>{" "}
              - Become a monthly member &quot;investor&quot; in LMS{" "}
              <strong>research....in</strong> LMS Survivorship! Investors are
              Champions of Hope for the future of surviving this form of cancer
              (sarcoma) - and <strong>ALL OF US ARE THE &quot;STAKEHOLDERS</strong>
              .&quot; $1 a day or $5 - 10 a month or any amount will make all the
              difference in the world toward accelerating research projects for
              Leiomyosarcoma!
            </p>
            <p>
              <strong className="open-research-highlight">
                The Foundation is doing everything it can to fund the best
                research
              </strong>{" "}
              - being the best stewards of all donations received. How are we
              doing that? By having our Foundation Executive Committee vet the
              incoming research grant proposals each year - a rigorous review
              process to make sure we are aiming for the best possible steps
              forward to accelerate the advancement of key research that will
              produce treatment option results.
            </p>
          </div>
        </div>
      </section>

      <section className="open-research-section">
        <div className="open-research-container">
          <img
            src="https://nlmsf.org/wp-content/uploads/2022/03/image4-768x544.jpg"
            alt="Clinical research"
            className="open-research-hero-image"
          />
        </div>
      </section>

      <section className="open-research-section">
        <div className="open-research-container">
          <div className="open-research-cta">
            <p className="open-research-cta-title">
              <strong>Let&apos;s ignite the fire for more LMS Research!</strong>
            </p>
            <p className="open-research-cta-body">
              <span className="open-research-cta-highlight">
                Please Help - &quot;All Hands on Deck&quot; Stakeholders! We
                need to lead the charge together! And &quot;Together We Can!&quot;
              </span>{" "}
              <a href="https://nlmsf.org/support/" target="_blank" rel="noopener noreferrer">
                https://nlmsf.org/support/
              </a>{" "}
              <span className="open-research-cta-highlight">and</span>{" "}
              <a href="https://nlmsf.org/donate/" target="_blank" rel="noopener noreferrer">
                https://nlmsf.org/donate/
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
