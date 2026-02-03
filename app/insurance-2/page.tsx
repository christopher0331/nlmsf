import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./insurance-2.css";

export const metadata: Metadata = {
  title: "Health Insurance Guidance | NLMSF",
  description:
    "Resources for disability benefits, Medicare, Medicaid, COBRA, appealing denials, and managing health insurance during cancer treatment.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function Insurance2Page() {
  return (
    <div className="insurance-2-page">
      <section className="hero">
        <div className="badge">
          <i className="fas fa-heartbeat" aria-hidden />
          <span>Patient &amp; Family Support</span>
        </div>
        <h1 className="hero-title">Health Insurance Guidance</h1>
        <div className="feature-tags">
          <div className="feature-tag">
            <i className="fas fa-file-medical" aria-hidden />
            <span>Insurance Options</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-shield-alt" aria-hidden />
            <span>Coverage Appeals</span>
          </div>
          <div className="feature-tag">
            <i className="fas fa-user-md" aria-hidden />
            <span>Disability Benefits</span>
          </div>
        </div>
        <p className="hero-description">
          Navigating health insurance can be complex, especially during cancer treatment. Find resources to help you understand your options, appeal denials, and access disability benefits.
        </p>
      </section>

      <div className="page-layout">
        <aside className="sidebar">
          <h3 className="sidebar-title">Insurance Resources</h3>
          <ul className="sidebar-links">
            <li><a href="#disability-benefits" className="sidebar-link"><i className="fas fa-file-medical-alt" aria-hidden /><span>Disability Benefits</span></a></li>
            <li><a href="#local-resources" className="sidebar-link"><i className="fas fa-map-marker-alt" aria-hidden /><span>Local Resources</span></a></li>
            <li><a href="#ssdi-basics" className="sidebar-link"><i className="fas fa-info-circle" aria-hidden /><span>SSDI Basics</span></a></li>
            <li><a href="#insurance-options" className="sidebar-link"><i className="fas fa-list-alt" aria-hidden /><span>Insurance Options</span></a></li>
            <li><a href="#communicating" className="sidebar-link"><i className="fas fa-comments" aria-hidden /><span>Communicating with Insurers</span></a></li>
            <li><a href="#appeals" className="sidebar-link"><i className="fas fa-gavel" aria-hidden /><span>Appealing Denials</span></a></li>
            <li><a href="#checklist" className="sidebar-link"><i className="fas fa-tasks" aria-hidden /><span>Insurance Checklist</span></a></li>
            <li><a href="#denver-cta" className="sidebar-link denver-link"><i className="fas fa-map-marked-alt" aria-hidden /><span>Denver Resources</span></a></li>
          </ul>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Quick Help</h3>
            <div className="quick-help">
              <div className="help-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="help-details">
                  <strong>Medicare Helpline</strong>
                  <a href="tel:+18006334227">800-633-4227</a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="help-details">
                  <strong>SHIP Helpline</strong>
                  <a href="tel:+18778392675">877-839-2675</a>
                </div>
              </div>
              <div className="help-item">
                <i className="fas fa-file-pdf" aria-hidden />
                <div className="help-details">
                  <a href="https://www.cancersupportcommunity.org/sites/default/files/uploads/living-with-cancer/topics/resource/tips_for_appealing_a_denial_of_coverage.pdf" {...ext}>Download Appeal Tips</a>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Featured Resource</h3>
            <div className="featured-resource">
              <Image
                src="https://media.nlmsf.org/wp-content/uploads/2021/05/Triage-Cancer.jpg"
                alt="Triage Cancer"
                className="featured-image"
                width={240}
                height={240}
              />
              <h4>Triage Cancer</h4>
              <p>Offers free education on the practical and legal issues that may impact individuals diagnosed with cancer and their caregivers.</p>
              <a href="https://triagecancer.org/" className="resource-button" {...ext}>Visit Website</a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-subtitle">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone" aria-hidden />
                <div className="contact-details">
                  <strong>Phone</strong>
                  <a href="tel:+13037830924">303-783-0924</a>
                  <a href="tel:+13038083437">303-808-3437</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden />
                <div className="contact-details">
                  <strong>Email</strong>
                  <a href="mailto:annieachee@aol.com">annieachee@aol.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" aria-hidden />
                <div className="contact-details">
                  <strong>Address</strong>
                  <p>1685 So. Colorado Blvd, Unit S, Suite 447, Denver, CO 80222</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section cta-section">
            <h3 className="sidebar-subtitle">Support Our Mission</h3>
            <div className="donate-cta">
              <a href="https://nlmsf.org/donate/" className="donate-link" {...ext}>
                <Image
                  src="https://media.nlmsf.org/wp-content/uploads/2021/01/donate-circle.jpg"
                  alt="Donate to NLMSF"
                  className="donate-image"
                  width={240}
                  height={240}
                />
                <span className="donate-text">Donate Today</span>
              </a>
              <p>Help Shape the Future of Survival</p>
            </div>
          </div>

          <div className="sidebar-section social-section">
            <h3 className="sidebar-subtitle">Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/groups/1329603747125818/" className="social-link" {...ext}><i className="fab fa-facebook-f" aria-hidden /></a>
              <a href="https://twitter.com/nationallmsf" className="social-link" {...ext}><i className="fab fa-twitter" aria-hidden /></a>
              <a href="https://www.youtube.com/channel/UCeDSK4og69Q78GP-SsKpIQg" className="social-link" {...ext}><i className="fab fa-youtube" aria-hidden /></a>
            </div>
          </div>
        </aside>

        <div className="content-container">
          <div id="disability-benefits" className="content-section">
            <div className="section-header">
              <h2>Disability Benefits for LMS Patients</h2>
              <p>Information about Social Security Disability Insurance (SSDI) and Compassionate Allowances</p>
            </div>
            <div className="content-panel blue">
              <h3>LMS and Disability Benefits</h3>
              <div className="resource-grid">
                <div className="resource-card">
                  <i className="fas fa-file-alt" aria-hidden />
                  <h4>Leiomyosarcoma and Social Security Disability Benefits</h4>
                  <a href="https://www.disability-benefits-help.org/compassionate-allowances/leiomyosarcoma" className="resource-link" {...ext}>Learn More</a>
                </div>
                <div className="resource-card">
                  <i className="fas fa-clipboard-check" aria-hidden />
                  <h4>Compassionate Allowance for Leiomyosarcoma</h4>
                  <a href="https://secure.ssa.gov/apps10/poms.nsf/lnx/0423022961" className="resource-link" {...ext}>Learn More</a>
                </div>
                <div className="resource-card">
                  <i className="fas fa-balance-scale" aria-hidden />
                  <h4>Medical-Vocational Allowance Approval</h4>
                  <a href="https://www.ssdrc.com/prem8.html" className="resource-link" {...ext}>Learn More</a>
                </div>
                <div className="resource-card">
                  <i className="fas fa-question-circle" aria-hidden />
                  <h4>What is Social Security&apos;s Medical Vocational Allowance?</h4>
                  <a href="https://www.disability-benefits-help.org/glossary/medical-vocational-allowance" className="resource-link" {...ext}>Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div id="local-resources" className="content-section">
            <div className="content-panel purple">
              <h3>Local Resources for Insurance Help</h3>
              <p>Medicare and Medicaid questions, long term care, your State Health Insurance Assistance Program (SHIP) provides free counseling on all these issues:</p>
              <div className="contact-highlight">
                <div className="contact-item">
                  <i className="fas fa-phone-alt" aria-hidden />
                  <div className="contact-info"><strong>SHIP Helpline:</strong><a href="tel:8778392675">877-839-2675</a></div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-globe" aria-hidden />
                  <div className="contact-info"><strong>Medicare.gov:</strong><a href="https://www.medicare.gov/" {...ext}>Visit Website</a></div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt" aria-hidden />
                  <div className="contact-info"><strong>Medicare Helpline:</strong><a href="tel:8006334227">800-633-4227</a></div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt" aria-hidden />
                  <div className="contact-info"><strong>Medicare Rights Center:</strong><a href="tel:8003334114">800-333-4114</a></div>
                </div>
              </div>
            </div>
          </div>

          <div id="ssdi-basics" className="content-section">
            <div className="section-header">
              <h2>Social Security Disability Insurance (SSDI) Basics</h2>
              <p className="highlight-text"><i className="fas fa-info-circle" aria-hidden /> A reminder of helpful information about Social Security Disability guidance</p>
            </div>
            <div className="content-panel">
              <p>If you have been contributing to Social Security long enough and recently enough, if your disability makes it impossible for you to work, and if the disability looks like it will last for a year or longer, you can qualify for Social Security Disability. Your doctor will have to write a statement describing your disability for Social Security.</p>
              <div className="resource-list bulleted">
                <ul>
                  <li>No matter how young you are, SSDI pays full benefits – the full amount you would receive if you had reached full retirement age.</li>
                  <li>When you reach full retirement age, your benefits continue as normal Social Security retirement benefits.</li>
                  <li>If it&apos;s possible for you to work part-time, you can do that to supplement your income up to the limit Social Security sets. (The limit changes each year.)</li>
                  <li>There is a waiting period of five full months between your last day of work and your first monthly SSDI check. Ideally, your employer or your state will provide some kind of short-term disability payments during this time.</li>
                  <li>After you receive SSDI for 24 months, you will be eligible for Medicare regardless of your age.</li>
                  <li>Normally COBRA health insurance lasts only 18 months. Future SSDI recipients who ask promptly for an extension will receive it automatically – but you must ask. You&apos;ll need to have COBRA or find private health insurance to cover the 30-month waiting period for Medicare.</li>
                  <li>You can return to work any time you feel able to. Just let SSDI know. There is a trial period to make sure you can handle working again.</li>
                </ul>
              </div>
              <p>If you have not worked long enough to qualify for SSDI, and if your assets are low, you might qualify for Supplemental Security Income instead. SSI provides immediate eligibility for Medicaid. You can return to work if you feel able; just let SSI know.</p>
              <p>The Social Security Administration has the official word. There are answers to just about any question a person has. It&apos;s actually pretty understandable, but it&apos;s very spread out over page after page of specific answers for specific situations.</p>
              <div className="resource-links-grid">
                <a href="https://www.ssa.gov/benefits/disability/" className="resource-link-item" {...ext}><i className="fas fa-external-link-alt" aria-hidden /><span>SSA Disability Benefits</span></a>
                <a href="https://www.ssa.gov/disability/professionals/bluebook/" className="resource-link-item" {...ext}><i className="fas fa-external-link-alt" aria-hidden /><span>Disability Evaluation Under Social Security</span></a>
                <a href="https://secure.ssa.gov/ICON/main.jsp" className="resource-link-item" {...ext}><i className="fas fa-external-link-alt" aria-hidden /><span>Find a Social Security Office</span></a>
                <a href="https://secure.ssa.gov/apps10/poms/images/SSA4/G-SSA-4734-U8-1.pdf" className="resource-link-item" {...ext}><i className="fas fa-file-pdf" aria-hidden /><span>SSA Forms</span></a>
                <a href="https://www.ssa.gov/redbook/eng/overview-disability.htm" className="resource-link-item" {...ext}><i className="fas fa-external-link-alt" aria-hidden /><span>Red Book - Guide to Work Incentives</span></a>
                <a href="https://www.disabilitysecrets.com/resources/ssdi/an-overview-social-security-disability-insurance-ssdi.htm" className="resource-link-item" {...ext}><i className="fas fa-external-link-alt" aria-hidden /><span>Overview of SSDI</span></a>
              </div>
            </div>
          </div>

          <div id="insurance-options" className="content-section">
            <div className="section-header">
              <h2>How Do I Get Health Insurance?</h2>
              <p>If you do not have health insurance, below are some options that might be available to you.</p>
            </div>
            <div className="resource-grid">
              <div className="resource-card">
                <i className="fas fa-shopping-cart" aria-hidden />
                <h4>State Health Insurance Marketplaces</h4>
                <p>Marketplaces provide one location for people to learn about private and some public health insurance plans available to them.</p>
                <a href="https://www.healthcare.gov/" className="resource-link" {...ext}>Visit HealthCare.gov</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-id-card" aria-hidden />
                <h4>Medicare</h4>
                <p>A federal health insurance program for individuals 65+ or those with disabilities.</p>
                <a href="https://www.medicare.gov/" className="resource-link" {...ext}>Visit Medicare.gov</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-hand-holding-medical" aria-hidden />
                <h4>Medicaid</h4>
                <p>A federal health insurance program with eligibility criteria and benefits that vary from state to state.</p>
                <a href="https://www.medicaid.gov/" className="resource-link" {...ext}>Visit Medicaid.gov</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-briefcase-medical" aria-hidden />
                <h4>COBRA</h4>
                <p>If you have health insurance coverage through your employer or a spouse&apos;s employer, COBRA may allow you to maintain that coverage.</p>
                <p className="note">Consult your benefits manager for details.</p>
              </div>
              <div className="resource-card">
                <i className="fas fa-medal" aria-hidden />
                <h4>Veterans</h4>
                <p>You may be eligible to receive health care through the Veterans Administration.</p>
                <a href="https://www.va.gov/health/" className="resource-link" {...ext}>Visit VA.gov</a>
              </div>
              <div className="resource-card">
                <i className="fas fa-ribbon" aria-hidden />
                <h4>Health Insurance for Cancer Patients</h4>
                <p>ACS Health Insurance Assistance Service: 1-800-ACS-2345</p>
                <a href="https://triagecancer.org/cancer-health-insurance-finances-cost" className="resource-link" {...ext}>Visit Triage Cancer</a>
              </div>
            </div>
          </div>

          <div id="communicating" className="content-section">
            <div className="content-panel green">
              <h3>Communicating with Your Health Insurance Company</h3>
              <p>If you have health insurance, it&apos;s important to learn about the specifics of your policy, including:</p>
              <div className="resource-list bulleted">
                <ul>
                  <li>What&apos;s covered</li>
                  <li>Deductibles (what you must pay out-of-pocket before your insurance company will begin to cover claims)</li>
                  <li>Co-payments or co-pays (a dollar amount set by your insurance provider required to be paid by a patient each time care or a drug is received)</li>
                  <li>Other out-of-pocket costs</li>
                  <li>How to best use your insurance benefits</li>
                </ul>
              </div>
              <p>A good place to start is with your health insurance card. Your insurance card will have numbers you can call to learn more about your policy. Many health insurance companies offer insurance case managers to assist insured individuals diagnosed with cancer. These trained individuals (often registered nurses or licensed social workers) will follow your case closely, helping to coordinate care and insurance benefits.</p>
              <p>Contact your insurance company to ask if they will assign you a case manager. Learning more about what your policy does and does not cover will help you better work with your insurer to make sure you receive all the benefits and coverage to which you are entitled. You will also be better prepared to deal with any questions or disputes you may encounter.</p>
            </div>
          </div>

          <div id="appeals" className="content-section">
            <div className="section-header"><h2>Appealing Insurance Denials</h2></div>
            <div className="content-panel">
              <p>It is not unusual for claims to be denied or for insurers to say they will not cover a test, procedure or service that your doctor ordered. However, you can appeal your health insurance company&apos;s decision and you may be able to get the decision overturned.</p>
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Check with your health care team</h4>
                    <p>See if there is someone on staff who can help you with the appeal process.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Contact the medication manufacturer</h4>
                    <p>If the appeal is for coverage of a specific medication, some manufacturers may be able to help you with your appeal.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Stay calm and courteous</h4>
                    <p>If you choose to file the appeal yourself, remember that courtesy and a cool head will increase your chances of success.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Consider an external appeal</h4>
                    <p>If your appeal is denied, you can ask for a final decision in writing and then file an external appeal with an independent organization.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Seek additional help</h4>
                    <p>You can request help from your state&apos;s Consumer Assistance Program, your state&apos;s insurance agency, or the Department of Labor.</p>
                  </div>
                </div>
              </div>
              <div className="resource-highlight">
                <Image
                  src="https://media.nlmsf.org/wp-content/uploads/2021/05/Triage-Cancer.jpg"
                  alt="Triage Cancer Logo"
                  className="resource-icon"
                  width={240}
                  height={240}
                />
                <div className="resource-content">
                  <h4>From TRIAGE CANCER – When an Insurance Co. Denies a Claim</h4>
                  <p>Helpful guidance for patients/caregivers: <a href="https://vimeo.com/499714526" {...ext}>Watch Video</a></p>
                </div>
              </div>
              <div className="cta-box">
                <a href="https://www.cancersupportcommunity.org/sites/default/files/uploads/living-with-cancer/topics/resource/tips_for_appealing_a_denial_of_coverage.pdf" className="cta-button" {...ext}>
                  <i className="fas fa-download" aria-hidden /> Download Tips for Appealing a Denial of Coverage
                </a>
              </div>
            </div>
          </div>

          <div id="checklist" className="content-section">
            <div className="section-header">
              <h2>Insurance Guidance: Reminders</h2>
              <p>To get the most out of your coverage, you&apos;ll need to keep track of all the paperwork, as well as the conversations and transactions that take place between you and your insurance provider.</p>
            </div>
            <div className="content-panel blue">
              <h3>Insurance Management Checklist</h3>
              <p>This convenient checklist can be used to help you manage your insurance information during your cancer care:</p>
              <div className="checklist">
                {[
                  "Read your insurance policy before chemotherapy and try to determine what your plan will cover. Discuss costs with your oncologist—often there will be several effective treatment options that may vary in costs and coverage.",
                  "Open, review and file bills and insurance notices immediately. If you have COBRA coverage, pay premiums in full and on time.",
                  "Create a system for recording your expenses and claims by filing things under categories like \"submitted\" and \"paid.\"",
                  "Pay by check so you have a record, and attach any canceled checks to the related bill and file them.",
                  "See if your insurance company has assigned you a case manager. If so, keep him or her informed about your treatment. If your claim is denied resubmit it. Make copies of any paperwork you send to your provider. Record names, dates and conversations you have with your insurance company in a notebook.",
                  "Request that your doctor, hospital and/or cancer treatment center provide scientific studies to your insurance company to demonstrate the effectiveness of your treatments.",
                  "Contact your Medicaid office prior to receiving treatments to see if you are eligible for reimbursements, or check with pharmaceutical companies to see if there's a reimbursement specialist who can help you.",
                ].map((text, i) => (
                  <div key={i} className="checklist-item">
                    <div className="checklist-number">{i + 1}</div>
                    <div className="checklist-content"><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <div className="tip-box">
                <h4><i className="fas fa-lightbulb" aria-hidden /> Need Help?</h4>
                <p>Ask to speak to a nurse navigator, social worker or financial advocate. Every hospital has at least one of these pros available, and they can help you resolve a multitude of frustrating issues. You can also reach out to organizations that help with health care issues like insurance denials and medical debt. <a href="https://www.copatient.com/" {...ext}>CoPatient</a> and <a href="https://www.patientadvocate.org/" {...ext}>Patient Advocate Foundation</a> are two such organizations.</p>
              </div>
            </div>
          </div>

          <div id="denver-cta" className="content-section denver-cta">
            <div className="content-panel special">
              <h3>Denver Community Support</h3>
              <p>If you&apos;re in the Denver area, we can connect you with local resources and support groups.</p>
              <Link href="/denver-support" className="cta-button">
                <i className="fas fa-map-marker-alt" aria-hidden /> Denver Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
