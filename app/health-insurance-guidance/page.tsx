import type { Metadata } from "next";
import "./health-insurance-guidance.css";

export const metadata: Metadata = {
  title: "Health Insurance Guidance | NLMSF",
  description:
    "Understanding your insurance rights and coverage options when dealing with cancer.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function HealthInsuranceGuidancePage() {
  return (
    <div className="health-insurance-guidance-page">
      <section className="hig-hero-section">
        <div className="hero-top-elements">
          <div className="category-pill">
            <span className="pill-icon" aria-hidden>📋</span>
            <span className="pill-text">Newly Diagnosed</span>
          </div>
        </div>

        <h1 className="hero-title">Health Insurance Guidance</h1>

        <p className="hero-description">
          Understanding your insurance rights and coverage options when dealing with cancer.
        </p>

        <div className="action-buttons">
          <a href="#rights" className="action-button blue-button">
            <span className="button-icon" aria-hidden>📑</span> Your Rights
          </a>
          <a href="#costs" className="action-button teal-button">
            <span className="button-icon" aria-hidden>💵</span> Cost Limits
          </a>
          <a href="#benefits" className="action-button green-button">
            <span className="button-icon" aria-hidden>✅</span> Essential Benefits
          </a>
        </div>

        <div className="hero-footer">
          <div className="participation-note">
            <span className="note-icon" aria-hidden>ℹ️</span> You have rights and protections under the Affordable Care Act
          </div>
        </div>
      </section>

      <div className="hig-page-layout">
        <aside className="hig-sidebar">
          <div className="sidebar-container">
            <h2 className="sidebar-title">Insurance Guide</h2>

            <div className="sidebar-sections">
              <h3 className="section-header">KEY SECTIONS</h3>

              <a href="#rights" className="sidebar-section-link">
                <span className="sidebar-icon blue-icon">▸</span>
                Your Rights
              </a>

              <a href="#costs" className="sidebar-section-link">
                <span className="sidebar-icon teal-icon">▸</span>
                Cost Limits
              </a>

              <a href="#financial-help" className="sidebar-section-link">
                <span className="sidebar-icon green-icon">▸</span>
                Financial Help
              </a>

              <a href="#mental-health" className="sidebar-section-link">
                <span className="sidebar-icon purple-icon">▸</span>
                Mental Health
              </a>

              <a href="#senior-costs" className="sidebar-section-link">
                <span className="sidebar-icon red-icon">▸</span>
                Senior Drug Costs
              </a>

              <a href="#benefits" className="sidebar-section-link">
                <span className="sidebar-icon green-icon">▸</span>
                Essential Benefits
              </a>
            </div>

            <div className="healthcare-resources">
              <a href="https://healthcare.gov" className="healthcare-link" {...ext}>
                <span className="link-icon" aria-hidden>🔗</span>
                Healthcare.gov
              </a>
            </div>
          </div>
        </aside>

        <div className="hig-content-area">
          <section id="rights" className="content-section blue-section">
            <h2 className="section-title">Your Rights as a Cancer Patient</h2>

            <div className="section-content">
              <p className="content-text">
                Health plans* have to help pay for your cancer treatment. You have rights as a cancer patient under the Affordable Care Act:
              </p>

              <ul className="benefits-list">
                <li>Your insurance cannot be canceled because you have cancer.</li>
                <li>You cannot be denied insurance if you have cancer.</li>
                <li>Children with cancer cannot be turned down for coverage.</li>
                <li>
                  If you qualify and want to take part in a clinical trial, your health plan must help pay for routine costs associated with approved clinical trials. A trial may help you get new cancer treatments.
                </li>
              </ul>
            </div>
          </section>

          <section id="costs" className="content-section teal-section">
            <h2 className="section-title">Limits on How Much You Have to Pay</h2>

            <div className="section-content">
              <p className="content-text">
                The Affordable Care Act has rules about the most you have to pay out-of-pocket for the medical care you get from your doctors and the hospitals that participate in your plan. These protections are available even if you have cancer:
              </p>

              <ul className="benefits-list">
                <li>There is no dollar limit on how much an insurance company spends on covered expenses for your health care. Annual and lifetime limits have gone away.</li>
                <li>If you are sick, you cannot be charged more for health insurance.</li>
                <li>Your out-of-pocket costs will be limited. There&apos;s a maximum amount, or cap, on how much you&apos;ll have to spend on copays, coinsurance, and deductibles.</li>
              </ul>

              <div className="info-panel blue-panel">
                <p className="panel-text">
                  If you enroll in a health plan through your state&apos;s Marketplace or have a health plan from your employer that covers medical and pharmacy costs – check the spending caps for the year you are needing information as these are your spending caps or maximums:
                </p>
                <ul className="panel-list">
                  <li>If you are single, your out-of-pocket costs for in-network care are capped at $8,150 per year.</li>
                  <li>For a family, the cap is $ ______ for one year.</li>
                </ul>
              </div>

              <div className="info-cards">
                <div className="info-card blue-card">
                  <a href="https://enroll.anthem.com/" className="card-link" {...ext}>
                    <h3 className="card-title">The Affordable Care Act</h3>
                    <p className="card-text">Learn about your coverage rights through the American Cancer Society resources</p>
                  </a>
                </div>
                <div className="info-card green-card">
                  <a
                    href="https://support.conquer.org/page/143988/donate/1?ea.tracking.id=RKD_search&utm_term=american%20cancer%20society&utm_source=bing&utm_medium=cpc&utm_campaign=fy24_cqr_evergreen_cpc&msclkid=84c88059a15a11a3190ce693cc02fbb7"
                    className="card-link"
                    {...ext}
                  >
                    <h3 className="card-title">Affordable Care Act Plans</h3>
                    <p className="card-text">Explore $0 preventive care with no deductible or out-of-pocket costs</p>
                  </a>
                </div>
                <div className="info-card purple-card">
                  <a
                    href="https://www.mutualofomaha.com/promo/dlp/cancer-heart-attack-stroke/463032?gclid=db08481dbfd51db876fa2ed7d28dea84&gclsrc=3p.ds&invsrc=can-bing-pm&lead_srcurl=can-bing-pm&msclkid=db08481dbfd51db876fa2ed7d28dea84&utm_campaign=Cancer%20Generic%20%28Microsoft%29%20-%20Phrase%20Match&utm_content=__iv_p_1_g_1186374798429853_w_kwd-74148709555602%3Aloc-4085_h_44557_ii__d_c_v__n_o_c__l__t__e__r__vi__&utm_medium=cpc&utm_source=bing&utm_term=cancer%20insurance"
                    className="card-link"
                    {...ext}
                  >
                    <h3 className="card-title">Cancer Insurance Coverage</h3>
                    <p className="card-text">Coverage options for cancer, heart attack & stroke, help to pay medical & non-medical expenses</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="financial-help" className="content-section green-section">
            <h2 className="section-title">Financial Help Options</h2>

            <div className="section-content">
              <ul className="benefits-list">
                <li>
                  <strong className="highlight-text">Tax Credits and Subsidies:</strong> You might be able to get financial help to pay for some costs if you&apos;re buying insurance through your state&apos;s Marketplace. Both tax credits and cost-sharing subsidies are available to people with qualifying incomes. Check on healthcare.gov to find out.
                </li>
                <li>
                  <strong className="highlight-text">Medicaid:</strong> You might qualify for Medicaid, even if you haven&apos;t qualified in the past. Some states have expanded Medicaid to cover more people. Check with your state&apos;s Marketplace to find out if your state is one of those.
                </li>
              </ul>
            </div>
          </section>

          <section id="mental-health" className="content-section purple-section">
            <h2 className="section-title">Mental Health Support During Cancer Treatment</h2>

            <div className="section-content">
              <p className="content-text">
                Many people have depression and anxiety during cancer treatment. You can get depression screening at no extra cost. Health plans sold on state Marketplaces, through the individual market, and through small employers must cover mental health services. While employers with more than 50 employees don&apos;t have to cover mental health services, most do.
              </p>

              <p className="content-text">
                In addition, mental health services must be provided under the same terms and conditions as other health care services. Health plans can no longer provide more limited mental health benefits than they do for other health care benefits. How much you pay for your care will depend on the plan you enroll in.
              </p>

              <div className="note-panel purple-note">
                <p className="note-text">You can also get these services through Medicare and Medicaid.</p>
              </div>
            </div>
          </section>

          <section id="senior-costs" className="content-section red-section">
            <h2 className="section-title">Savings on Cancer Drug Costs for Seniors</h2>

            <div className="section-content">
              <p className="content-text">
                If you are on Medicare Part D, the Affordable Care Act is eliminating the so-called &quot;donut hole.&quot; That&apos;s a gap in your prescription drug coverage. Prior to the Affordable Care Act, that made you pay the full cost of meds once you reached the annual drug-spending limit. Now, you pay only 25% of the costs of both covered brand name and generic drugs while in the donut hole.
              </p>
            </div>
          </section>

          <section id="benefits" className="content-section green-section">
            <h2 className="section-title">Essential Health Benefits</h2>

            <div className="section-content">
              <p className="content-text">
                If you buy health insurance through your state&apos;s Marketplace, on the individual market, or get them from an employer with fewer than 50 employees, your plan must cover certain essential health benefits. You may need some of these services as a cancer patient, including:
              </p>

              <div className="benefits-grid">
                <div className="benefit-item">Chronic disease care</div>
                <div className="benefit-item">Emergency care</div>
                <div className="benefit-item">Hospital Care</div>
                <div className="benefit-item">Lab services</div>
                <div className="benefit-item">Mental health services</div>
                <div className="benefit-item">Outpatient treatment</div>
                <div className="benefit-item">Prescription drug coverage</div>
                <div className="benefit-item">Rehabilitation services</div>
              </div>

              <div className="warning-note">
                <p className="note-text">
                  <span className="bold-text">Be aware:</span> Each state determines exactly what must be covered under these categories. Individual health plans may add to those minimum requirements. It&apos;s important to read the plan&apos;s summary of benefits to see what your costs will be before you enroll. While large employers are not required to cover the essential health benefits, nearly all do.
                </p>
              </div>
            </div>
          </section>

          <section className="footnote-section">
            <div className="footnote-content">
              <p className="footnote-text">
                * Grandfathered health plans, those that existed before the Affordable Care Act was passed and have not significantly changed, are not required to offer some of these protections, such as bans on pre-existing conditions or annual limits on benefits. Check with your insurance company or HR department to find out if you&apos;re in a grandfathered plan. In addition, short-term health plans do not have to offer these benefits or protections. Short-term health policies are those in effect for less than 12 months, although they can be renewed for up to 3 years.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
