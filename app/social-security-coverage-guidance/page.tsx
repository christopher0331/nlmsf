import type { Metadata } from "next";
import "./social-security-coverage-guidance.css";

export const metadata: Metadata = {
  title: "Social Security Coverage Guidance | NLMSF",
  description:
    "Guidance on SSDI, Compassionate Allowances, insurance tips, and appealing denials.",
};

export default function SocialSecurityCoverageGuidancePage() {
  return (
    <main className="ssg-page">
      <section className="nlmsf-hero ssg-hero">
        <div className="nlmsf-hero-badge">
          <span className="nlmsf-hero-icon" aria-hidden>
            🛡️
          </span>
          <span className="nlmsf-hero-badge-text">Benefits • Insurance • Appeals</span>
        </div>
        <h1 className="nlmsf-hero-title">Social Security Coverage Guidance</h1>
        <p className="nlmsf-hero-subtitle">
          Plain-language guidance and trusted resources on Social Security Disability Insurance
          (SSDI), Compassionate Allowances, insurance tips, and how to appeal denials.
        </p>
        <div className="nlmsf-hero-divider" />
        <div className="nlmsf-hero-tags">
          <span className="tag tag-purple">SSDI</span>
          <span className="tag tag-blue">Compassionate Allowances</span>
          <span className="tag tag-teal">Insurance &amp; Appeals</span>
        </div>
      </section>

      <div className="ssg-layout">
        <aside className="nlmsf-sidebar">
          <nav className="sidebar-nav" aria-label="Social Security Coverage Guidance">
            <h3 className="sidebar-heading">On this page</h3>
            <ul className="sidebar-list">
              <li>
                <a href="#overview" className="sidebar-link">
                  Overview &amp; Key Resources
                </a>
              </li>
              <li>
                <a href="#compassionate-allowances" className="sidebar-link">
                  Compassionate Allowances
                </a>
              </li>
              <li>
                <a href="#insurance-reminders" className="sidebar-link">
                  Insurance Reminders
                </a>
              </li>
              <li>
                <a href="#appeals" className="sidebar-link">
                  Appealing Denials
                </a>
              </li>
              <li>
                <a href="#contact" className="sidebar-link">
                  Contact NLMSF
                </a>
              </li>
            </ul>
          </nav>

          <div className="sidebar-cta">
            <h4 className="cta-title">Need Help Now?</h4>
            <p className="cta-text">Our team can point you to the right benefits and assistance.</p>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href="https://nlmsf.org/support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Support
              </a>
              <a
                className="btn btn-outline"
                href="https://nlmsf.org/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </aside>

        <main className="nlmsf-content">
          <section id="overview" className="section-card section-purple">
            <h2 className="section-title">How to Secure Social Security Disability for Cancer</h2>
            <p className="section-intro">
              If you have a cancer diagnosis and cannot work, these resources explain eligibility,
              fast-track options like Compassionate Allowances, and the medical evidence needed to
              support your claim.
            </p>
            <div className="links-grid">
              <div className="link-card">
                <h3 className="link-title">Triage Cancer – Disability Insurance</h3>
                <p className="link-desc">
                  Understand disability insurance types, applying and appealing, how benefits
                  coordinate, and legal protections.
                </p>
                <a
                  className="link-url"
                  href="https://triagecancer.org/disability-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Triage Cancer
                </a>
              </div>
              <div className="link-card">
                <h3 className="link-title">SSA – Compassionate Allowances</h3>
                <p className="link-desc">
                  Conditions that may qualify for expedited SSDI/SSI decisions.
                </p>
                <a
                  className="link-url"
                  href="https://www.ssa.gov/compassionateallowances/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Compassionate Allowances
                </a>
              </div>
              <div className="link-card">
                <h3 className="link-title">General: Triage Cancer Resources</h3>
                <p className="link-desc">
                  Straightforward, accurate information about health and disability insurance,
                  Medicaid/Medicare, finances, estate planning, and more.
                </p>
                <a
                  className="link-url"
                  href="https://triagecancer.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  triagecancer.org
                </a>
              </div>
            </div>
          </section>

          <section id="compassionate-allowances" className="section-card section-blue">
            <h2 className="section-title">Compassionate Allowances Program</h2>
            <p className="section-intro">
              The SSA’s Compassionate Allowances (CAL) program helps the agency quickly identify
              conditions that, by definition, meet standards for disability benefits.
            </p>
            <ul className="checklist">
              <li>Search the CAL conditions list to see if your diagnosis may qualify.</li>
              <li>Submit comprehensive medical evidence with your application.</li>
              <li>Ask your oncology team for documentation aligned to SSA criteria.</li>
            </ul>
            <div className="note">
              <strong>Tip:</strong> If your CAL request is initially missed or denied, you may
              resubmit with clarifying records and physician letters.
            </div>
          </section>

          <section id="insurance-reminders" className="section-card section-teal">
            <h2 className="section-title">Insurance Guidance: Reminders</h2>
            <ol className="numbered">
              <li>
                Read your insurance policy before chemotherapy and try to determine what your plan
                will cover. Discuss costs with your oncologist.
              </li>
              <li>
                Open, review, and file bills and insurance notices immediately. If you have COBRA
                coverage, pay premiums in full and on time.
              </li>
              <li>
                Create a system for recording expenses and claims, filed under categories like
                “submitted” and “paid.”
              </li>
              <li>
                Pay by check or use a traceable method and attach confirmations to the related bill.
              </li>
              <li>
                Ask if your insurer assigned a case manager and keep them informed. If your claim is
                denied, resubmit it and keep copies and notes.
              </li>
              <li>
                Request that your doctor, hospital, and/or treatment center provide peer-reviewed
                studies to demonstrate effectiveness.
              </li>
              <li>
                Contact your Medicaid office and ask pharmaceutical companies about reimbursement
                specialists. If confused, ask a nurse navigator, social worker, or financial
                advocate.
              </li>
            </ol>
            <p className="section-intro">
              Hospitals typically have staff who can help resolve issues, locate interpreters,
              explain consent forms, and find help for co-pays or costly drugs. Organizations such as
              CoPatient and the Patient Advocate Foundation also assist with denials and medical
              debt.
            </p>
          </section>

          <section id="appeals" className="section-card section-purple">
            <h2 className="section-title">Appealing Insurance Denials</h2>
            <p className="section-intro">
              It’s common for insurers to initially deny coverage for tests, procedures, or
              services. You can appeal decisions and may get them overturned.
            </p>
            <ul className="bullets">
              <li>Check whether your clinic has a staff member who can assist with the appeal.</li>
              <li>If medication coverage is denied, some manufacturers may help with appeals.</li>
              <li>Be courteous and precise, and document everything.</li>
              <li>
                If an internal appeal is denied, request a final written decision and file an
                external appeal.
              </li>
              <li>
                Contact your state Consumer Assistance Program, insurance department, or Department
                of Labor for more help.
              </li>
            </ul>
            <div className="video-card">
              <h3 className="link-title">Video: When an Insurance Company Denies a Claim</h3>
              <a
                className="link-url"
                href="https://vimeo.com/499714526"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on Vimeo
              </a>
            </div>
          </section>

          <section id="contact" className="section-card section-blue">
            <h2 className="section-title">Contact the National LMS Foundation</h2>
            <p className="section-intro">
              We’re here to provide additional guidance and connect you with support resources.
            </p>
            <div className="cta-inline">
              <a
                className="btn btn-primary"
                href="https://nlmsf.org/support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Help
              </a>
              <a
                className="btn btn-outline"
                href="https://nlmsf.org/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}
