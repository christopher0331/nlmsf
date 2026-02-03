import type { Metadata } from "next";
import "./scattered-light-spring-songfest.css";

export const metadata: Metadata = {
  title: "Scattered Light Spring Songfest | NLMSF",
  description:
    "Fundraising event honoring Jon Rosenblum and supporting leiomyosarcoma research.",
};

export default function ScatteredLightSpringSongfestPage() {
  return (
    <main className="songfest-page">
      <section className="songfest-hero">
        <div className="songfest-hero-inner">
          <p className="songfest-eyebrow">Scattered Light Spring Songfest</p>
          <h1>S C A T T E R E D&nbsp;&nbsp;L I G H T&nbsp;&nbsp;S P R I N G&nbsp;&nbsp;S O N G F E S T</h1>
          <div className="songfest-meta">
            <span>Madison, Wisconsin</span>
            <span>Sunday, March 9, 2025</span>
          </div>
          <p className="songfest-subtitle">
            Hosted by the Rosenblum Family
          </p>
        </div>
      </section>

      <section className="songfest-section">
        <div className="songfest-card">
          <h2>Honoring Jon Rosenblum</h2>
          <p>
            Jon Rosenblum has been fighting metastatic leiomyosarcoma for over 2.5 years. What felt
            like a calf strain from a 6 AM YMCA basketball game became a fight for survival. The
            cancer, first discovered in the calf, had metastasized to over two dozen places around
            the body.
          </p>
          <p>
            An incredible team that has at times included Dr. Howard Bailey and Dr. Ryan Matteson
            at the Carbone Cancer Center at UW-Madison, Dr. Brian Van Tine at the Siteman Cancer
            Center at Washington University in St. Louis, and Dr. Steven Robinson at the Mayo
            Clinic in Rochester, sprung into action, providing access to the most innovative
            treatments.
          </p>
        </div>
      </section>

      <section className="songfest-section">
        <div className="songfest-card songfest-highlight">
          <h2>Celebrating Life and Research</h2>
          <p>
            The very special event this evening — Scattered Light Spring Songfest in Madison,
            Wisconsin on Sunday, March 9, 2025 — celebrates springtime, the joys of life, Jon’s
            continued fight, and the doctors, nurses, researchers, and care staff that have made it
            possible.
          </p>
          <p>
            Leiomyosarcoma (LMS) is a very rare cancer. When it metastasizes and spreads around the
            body, it is often aggressive and incurable. Because of its rarity, funding and
            resources are the most significant barrier to finding a cure. We’re fundraising to help
            change that. Funds donated will be used to support researchers on the cutting edge of
            LMS to better treat this rare cancer.
          </p>
        </div>
      </section>

      <section className="songfest-section">
        <div className="songfest-card">
          <h2>Support the NLMSF Mission</h2>
          <p>
            Please send your donations to the National Leiomyosarcoma Foundation — the first
            organization to have ever supported patients and research in the United States since
            1997. Incorporated as a 501(c)(3) in 2001, it is now a global entity with 140+ researchers
            in support of the LMS Research Initiatives.
          </p>
          <p>
            The Foundation has received a 97% level Charity Navigator recognition reflecting its
            integrity in stewardship of donations received on behalf of leiomyosarcoma research.
          </p>
        </div>
      </section>

      <section className="songfest-section">
        <div className="songfest-card songfest-cta">
          <h2>Online Donation Links</h2>
          <div className="songfest-links">
            <a href="https://nlmsf.org/?form=DONATE" target="_blank" rel="noopener noreferrer">
              Website Donation Form
            </a>
            <a href="https://nlmsf.org/?form=FUNFYYQXWCA" target="_blank" rel="noopener noreferrer">
              Social Media Donation Link
            </a>
          </div>
          <div className="songfest-address">
            <h3>Checks may be sent to:</h3>
            <p>NLMSF</p>
            <p>1685 So. Colorado Blvd, Unit S, Suite 447</p>
            <p>Denver, CO 80222</p>
          </div>
        </div>
      </section>

      <section className="songfest-section">
        <div className="songfest-card songfest-closing">
          <p>
            This evening honors so many: The Researchers are the Heroes Among Us and the Patients
            and their families and friends are the Champions of Hope for the acceleration of
            research and treatment options for the immediate and long term future of survivorship
            of this disease. Your donation honors Jon, the research clinicians/physician scientists
            helping Jon, as well as the global leiomyosarcoma community through the International
            Leiomyosarcoma Research Roundtable of the National Leiomyosarcoma Foundation.
          </p>
          <div className="songfest-banner">Honor and Celebrate Jon This Evening!</div>
        </div>
      </section>
    </main>
  );
}
