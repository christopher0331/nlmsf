import type { Metadata } from "next";
import Link from "next/link";
import "./leiomyosarcoma-support-group.css";
import FaqSection from "./FaqSection";

export const metadata: Metadata = {
  title: "LMS Support Group | Leiomyosarcoma Support Groups & Resources | NLMSF",
  description:
    "Connecting patients, survivors, and caregivers with LMS support groups, peer programs, educational resources, and 24/7 LIFELINE hotline.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "National Leiomyosarcoma Foundation",
  alternateName: "NLMSF",
  url: "https://nlmsf.org",
  description: "The National Leiomyosarcoma Foundation offers comprehensive support groups and resources for individuals affected by Leiomyosarcoma.",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+3038083437", contactType: "Support Hotline", hoursAvailable: "24/7" },
    { "@type": "ContactPoint", email: "annieachee@aol.com", contactType: "General Information" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I get matched with a Buddy in the LIFELINE program?", acceptedAnswer: { "@type": "Answer", text: "Complete our confidential form describing your diagnosis, treatment stage, and specific concerns. Our team will carefully match you with a trained buddy who has a similar experience. Matches are typically made within 3-5 business days." } },
    { "@type": "Question", name: "What can I expect when I call the 24/7 LIFELINE Support Hotline?", acceptedAnswer: { "@type": "Answer", text: "Your call will be answered by a trained volunteer who understands the LMS journey. They can provide emotional support, information about resources, and practical guidance. All conversations are confidential." } },
    { "@type": "Question", name: "How can I participate in the genomic and molecular tumor testing programs?", acceptedAnswer: { "@type": "Answer", text: "Speak with your oncologist about your interest in genomic testing. The NLMSF can provide information about partner programs like Perthera, CERTIS, Boston Gene, and the Broad Institute." } },
    { "@type": "Question", name: "Are there costs associated with NLMSF support programs?", acceptedAnswer: { "@type": "Answer", text: "Most NLMSF support services are provided at no cost to patients and caregivers. Some specialized genomic testing programs may have costs, though financial assistance might be available." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nlmsf.org" },
    { "@type": "ListItem", position: 2, name: "Support", item: "https://nlmsf.org/support" },
    { "@type": "ListItem", position: 3, name: "Support Groups", item: "https://nlmsf.org/leiomyosarcoma-support-group" },
  ],
};

export default function LeiomyosarcomaSupportGroupPage() {
  return (
    <div className="lms-support-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hero">
        <div className="hero-container">
          <div className="badge-container">
            <div className="badge">
              <i className="fas fa-users" aria-hidden />
              <span>Support Community</span>
            </div>
          </div>
          <h1 className="hero-title">LMS Support Group</h1>
          <p className="hero-description">
            Connecting patients, survivors, and caregivers with resources, peers, and professional support for the Leiomyosarcoma journey
          </p>
          <div className="feature-tags">
            <div className="feature-tag">
              <i className="fas fa-phone-alt" aria-hidden />
              <span>24/7 Support</span>
            </div>
            <div className="feature-tag">
              <i className="fas fa-users" aria-hidden />
              <span>Peer Connection</span>
            </div>
            <div className="feature-tag">
              <i className="fas fa-book-medical" aria-hidden />
              <span>Education</span>
            </div>
            <div className="feature-tag">
              <i className="fas fa-flask" aria-hidden />
              <span>Research</span>
            </div>
          </div>
          <div className="hero-lifeline">
            <div className="lifeline-box">
              <div className="lifeline-content">
                <h3>LMS LIFELINE Support Hotline</h3>
                <p>24/7 access to immediate support and assistance</p>
                <a href="tel:3038083437" className="lifeline-phone">303-808-3437</a>
              </div>
            </div>
          </div>
          <div className="hero-button-container">
            <div className="button-card">
              <div className="button-icon">
                <i className="fas fa-hands-helping" aria-hidden />
              </div>
              <div className="button-info">
                <h3>Connect with a Peer</h3>
                <p>Join our Lifeline Buddy Program for one-on-one support</p>
              </div>
              <a href="#support-groups" className="btn-outline">Learn More</a>
            </div>
            <div className="button-card">
              <div className="button-icon">
                <i className="fab fa-facebook" aria-hidden />
              </div>
              <div className="button-info">
                <h3>Join Our Community</h3>
                <p>Connect with others in our Facebook support groups</p>
              </div>
              <a href="#support-groups" className="btn-outline">Join Groups</a>
            </div>
            <div className="button-card">
              <div className="button-icon">
                <i className="fas fa-calendar-alt" aria-hidden />
              </div>
              <div className="button-info">
                <h3>Upcoming Events</h3>
                <p>Virtual and in-person support and education sessions</p>
              </div>
              <Link href="/education-videos" className="btn-outline">View Calendar</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="sidebar-icon"><i className="fas fa-compass" aria-hidden /></span>
              <span>Page Navigation</span>
            </h3>
            <ul className="nav-links">
              <li><a href="#intro" className="nav-link"><span className="nav-icon"><i className="fas fa-info-circle" aria-hidden /></span><span>Introduction</span></a></li>
              <li><a href="#buddy-program" className="nav-link"><span className="nav-icon"><i className="fas fa-handshake" aria-hidden /></span><span>One-on-One Support</span></a></li>
              <li><a href="#facebook-groups" className="nav-link"><span className="nav-icon"><i className="fas fa-comments" aria-hidden /></span><span>Group Support Networks</span></a></li>
              <li><a href="#educational" className="nav-link"><span className="nav-icon"><i className="fas fa-graduation-cap" aria-hidden /></span><span>Educational Resources</span></a></li>
              <li><a href="#specialized" className="nav-link"><span className="nav-icon"><i className="fas fa-heart" aria-hidden /></span><span>Specialized Support</span></a></li>
              <li><a href="#research" className="nav-link"><span className="nav-icon"><i className="fas fa-microscope" aria-hidden /></span><span>Research Participation</span></a></li>
              <li><a href="#partnerships" className="nav-link"><span className="nav-icon"><i className="fas fa-handshake" aria-hidden /></span><span>Our Partnerships</span></a></li>
              <li><a href="#testimonials" className="nav-link"><span className="nav-icon"><i className="fas fa-quote-left" aria-hidden /></span><span>Community Voices</span></a></li>
              <li><a href="#faq" className="nav-link"><span className="nav-icon"><i className="fas fa-question-circle" aria-hidden /></span><span>FAQ</span></a></li>
            </ul>
          </div>
        </aside>

        <div className="content-container">
          <div className="content-section" id="intro">
            <div className="section-header">
              <h2>Support for Your LMS Journey</h2>
            </div>
            <p className="section-intro">
              The National Leiomyosarcoma Foundation offers various support groups designed to connect, inform, and empower individuals affected by Leiomyosarcoma. Whether you&apos;re newly diagnosed, a long-term survivor, or a caregiver, we provide ways to connect with others who understand your journey.
            </p>
          </div>

          <div className="content-section" id="support-types">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-users" aria-hidden /></span>
              <h2>Support Group Types</h2>
            </div>
            <div className="support-grid">
              <div className="support-type-card">
                <div className="support-type-icon"><i className="fas fa-user-friends" aria-hidden /></div>
                <h3>One-on-One Support</h3>
                <p>Connect individually with peers and professionals who understand your journey</p>
              </div>
              <div className="support-type-card">
                <div className="support-type-icon"><i className="fas fa-comments" aria-hidden /></div>
                <h3>Online Communities</h3>
                <p>Join virtual support groups to share experiences and find support anytime</p>
              </div>
              <div className="support-type-card">
                <div className="support-type-icon"><i className="fas fa-map-marker-alt" aria-hidden /></div>
                <h3>Regional Groups</h3>
                <p>Meet with others in your area for in-person connection and support</p>
              </div>
              <div className="support-type-card">
                <div className="support-type-icon"><i className="fas fa-hands-helping" aria-hidden /></div>
                <h3>Specialized Support</h3>
                <p>Access programs tailored to specific needs like caregiving and bereavement</p>
              </div>
            </div>
          </div>

          <div className="content-section" id="support-groups">
            <span id="buddy-program" aria-hidden />
            <span id="facebook-groups" aria-hidden />
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-comments" aria-hidden /></span>
              <h2>Available Support Groups</h2>
            </div>
            <div className="support-table-container">
              <table className="support-table">
                <thead>
                  <tr>
                    <th>Support Group</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Connect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="group-name"><i className="fas fa-user-friends" aria-hidden /><span>LMS LIFELINE Buddy Program</span></td>
                    <td>One-on-One</td>
                    <td>Peer-to-peer patient match program for personalized support</td>
                    <td><a href="https://nlmsf.org/lms-lifeline-buddy-program/" className="table-link" {...ext}>Request Match</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-user-md" aria-hidden /><span>Connect With a Clinician</span></td>
                    <td>Professional</td>
                    <td>Access volunteer sarcoma specialists who answer questions about treatment options</td>
                    <td><a href="https://nlmsf.org/connect-with-clinician" className="table-link" {...ext}>Ask Question</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fab fa-facebook" aria-hidden /><span>NLMSF Facebook Group</span></td>
                    <td>Online</td>
                    <td>Official foundation support community for patients and caregivers</td>
                    <td><a href="https://www.facebook.com/groups/nlmsf" className="table-link" {...ext}>Join Group</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fab fa-facebook" aria-hidden /><span>Stand Up to LMS</span></td>
                    <td>Online</td>
                    <td>Advocacy and support network focused on empowerment</td>
                    <td><a href="https://www.facebook.com/groups/standuptolms" className="table-link" {...ext}>Join Group</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fab fa-facebook" aria-hidden /><span>Cancer Sucks - LMS</span></td>
                    <td>Online</td>
                    <td>Candid discussion and emotional support community</td>
                    <td><a href="https://www.facebook.com/groups/cancersuckslms" className="table-link" {...ext}>Join Group</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-mountain" aria-hidden /><span>Rocky Mountain LMS Support</span></td>
                    <td>Regional</td>
                    <td>Colorado, Wyoming, Nebraska patient-caregiver connection</td>
                    <td><a href="https://nlmsf.org/rocky-mountain" className="table-link" {...ext}>Contact Group</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-flask" aria-hidden /><span>LMS Clinical Trials Perspectives</span></td>
                    <td>Discussion</td>
                    <td>Bi-monthly peer-to-peer discussion about clinical trials experiences</td>
                    <td><a href="https://nlmsf.org/clinical-trials-perspective" className="table-link" {...ext}>Join Discussion</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-book-medical" aria-hidden /><span>LMS ABC&apos;s Support Group</span></td>
                    <td>Educational</td>
                    <td>For new and recurring diagnoses: managing, asking questions, and coping</td>
                    <td><Link href="/abcs-of-new-diagnosis" className="table-link">Learn More</Link></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-hands-helping" aria-hidden /><span>Caregiving Counts</span></td>
                    <td>Caregiver</td>
                    <td>Support specifically for caregivers of LMS patients</td>
                    <td><Link href="/caregivers-corner" className="table-link">Get Support</Link></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-tasks" aria-hidden /><span>Survivorship &amp; Coping Workshops</span></td>
                    <td>Collaborative</td>
                    <td>Patient-caregiver team discussions for sharing experiences</td>
                    <td><a href="https://nlmsf.org/caregiver-workshops" className="table-link" {...ext}>Find Workshop</a></td>
                  </tr>
                  <tr>
                    <td className="group-name"><i className="fas fa-dove" aria-hidden /><span>Open to Hope</span></td>
                    <td>Bereavement</td>
                    <td>Support for families who have lost a loved one to LMS</td>
                    <td><a href="https://www.opentohope.com/" className="table-link" {...ext}>Visit Website</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section" id="educational">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-graduation-cap" aria-hidden /></span>
              <h2>Educational Resources</h2>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-podcast" aria-hidden /></div>
              <div className="resource-content">
                <h3>Recorded Programs &amp; Podcasts</h3>
                <p>Access our library of educational content at your convenience:</p>
                <ul className="resource-list">
                  <li><a href="https://nlmsf.org/podcasts-wellbeing" className="resource-link" {...ext}>Podcasts for Wellbeing</a> - Addressing anxiety, caregiving support, and more</li>
                  <li><a href="https://nlmsf.org/research-recordings" className="resource-link" {...ext}>Research Community Recordings</a> - Insights on clinical trials, research updates, and treatment advances</li>
                  <li><a href="https://nlmsf.org/lms-live" className="resource-link" {...ext}>LMS LIVE - Research in Review</a> - Latest research with opportunities to ask questions</li>
                </ul>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-chalkboard-teacher" aria-hidden /></div>
              <div className="resource-content">
                <h3>Educational Programs</h3>
                <p>Join our interactive learning opportunities:</p>
                <ul className="resource-list">
                  <li><Link href="/abcs-of-new-diagnosis" className="resource-link">LMS ABC&apos;s of the Challenging Diagnosis</Link> - For new and recurring diagnoses: managing, coping, and asking the right questions</li>
                  <li><a href="https://nlmsf.org/clinical-trials-perspective" className="resource-link" {...ext}>LMS Clinical Trials Patient/Caregiver Perspectives</a> - Bi-monthly peer discussion group</li>
                  <li><a href="https://nlmsf.org/symposia" className="resource-link" {...ext}>Virtual &amp; In-Person Education Symposia</a> - Updates on treatments, trials, research, and integrative medicine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section" id="specialized">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-heart" aria-hidden /></span>
              <h2>Specialized Support Services</h2>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-hands-helping" aria-hidden /></div>
              <div className="resource-content">
                <h3>Caregiver Support</h3>
                <p>Resources specifically for those supporting loved ones with LMS:</p>
                <ul className="resource-list">
                  <li><Link href="/caregivers-corner" className="resource-link">Caregiving Counts</Link> - Guidance and support from experienced caregivers</li>
                  <li><a href="https://nlmsf.org/caregiver-workshops" className="resource-link" {...ext}>Survivorship and Coping Workshops</a> - Patient-caregiver team discussions for sharing experiences and coping strategies</li>
                </ul>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-dove" aria-hidden /></div>
              <div className="resource-content">
                <h3>Bereavement Support</h3>
                <p>Compassionate resources for families experiencing loss:</p>
                <ul className="resource-list">
                  <li><a href="https://www.opentohope.com/" className="resource-link" {...ext}>Open to Hope</a> - Support group for spouses, families, and children when a loved one passes from this disease</li>
                </ul>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-clipboard-check" aria-hidden /></div>
              <div className="resource-content">
                <h3>Survivorship Care Planning</h3>
                <p>Guidance for life after treatment:</p>
                <ul className="resource-list">
                  <li><a href="https://nlmsf.org/survivorship-care" className="resource-link" {...ext}>Personalized Care Planning</a> - One-on-one planning that begins with you and continues with your oncology care team</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section" id="research">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-microscope" aria-hidden /></span>
              <h2>Research Participation Opportunities</h2>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-dna" aria-hidden /></div>
              <div className="resource-content">
                <h3>Genomic and Molecular Testing</h3>
                <p>Contribute to research while informing your treatment options:</p>
                <ul className="resource-list">
                  <li><a href="https://www.perthera.com/" className="resource-link" {...ext}>Perthera</a> - Precision oncology solutions</li>
                  <li><a href="https://certisoncology.com/" className="resource-link" {...ext}>CERTIS</a> - Patient-derived cancer models</li>
                  <li><a href="https://www.bostongene.com/" className="resource-link" {...ext}>Boston Gene</a> - Molecular profiling</li>
                  <li><a href="https://www.broadinstitute.org/" className="resource-link" {...ext}>Broad Institute of MIT/Harvard</a> - Advanced genetic research</li>
                </ul>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-icon"><i className="fas fa-clipboard-list" aria-hidden /></div>
              <div className="resource-content">
                <h3>Patient-Driven Research Initiatives</h3>
                <p>Help advance LMS research through these collaborative programs:</p>
                <ul className="resource-list">
                  <li><a href="https://joincountmein.org/lms" className="resource-link" {...ext}>Count Me In Project</a> - Partnership with NLMSF for patient-driven data and tissue sample sharing</li>
                  <li><a href="https://www.rarecancerresearchfoundation.org/" className="resource-link" {...ext}>Rare Cancer Research Foundation</a> - Collaboration with NLMSF</li>
                  <li><Link href="/international-research-roundtable" className="resource-link">International LMS Research Roundtable</Link> - Connecting global researchers with patient voices (currently in its 7th year)</li>
                  <li><a href="https://nlmsf.org/repurposing" className="resource-link" {...ext}>Repurposing Drug Workgroup for LMS</a> - With the Hemming Lab, W. Yao Lab, CURE ID, and TRACER Project</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section" id="partnerships">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-handshake" aria-hidden /></span>
              <h2>Our Partnerships</h2>
            </div>
            <p className="section-intro">
              NLMSF is proud to be part of these collaborative efforts to improve care and outcomes for LMS patients:
            </p>
            <div className="partner-grid">
              <div className="partner-item">
                <h4>ECOG ACRIN Workgroups</h4>
                <ul>
                  <li>Sarcoma Workgroup</li>
                  <li>Cardiovascular Workgroup</li>
                  <li>Patient Advocacy Workgroup</li>
                </ul>
              </div>
              <div className="partner-item">
                <h4>Global Networks</h4>
                <ul>
                  <li>Sarcoma Patient Advocacy Global Network (SPAGN)</li>
                  <li>NORD Rare Cancer Coalition</li>
                  <li>Sarcoma Coalition (Co-founder)</li>
                </ul>
              </div>
              <div className="partner-item">
                <h4>State Initiatives</h4>
                <ul>
                  <li>Colorado Palliative Cancer Taskforce</li>
                  <li>Colorado Survivorship Taskforce</li>
                  <li>Colorado Cancer Coalition</li>
                </ul>
              </div>
              <div className="partner-item">
                <h4>Allied Organizations</h4>
                <ul>
                  <li>Sarcoma Alliance</li>
                  <li>Sarcoma Foundation of America</li>
                  <li>Patient Advocacy Consensus Group</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section" id="testimonials">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-quote-left" aria-hidden /></span>
              <h2>Community Voices</h2>
            </div>
            <div className="testimonial-carousel">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>&quot;The NLMSF Buddy Program connected me with someone who truly understood what I was going through. Having someone to talk to who had been through the same treatments made all the difference in my journey.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <span className="author-name">Maria S.</span>
                  <span className="author-title">LMS Survivor, 3 years</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>&quot;As a caregiver, I felt lost and overwhelmed until I found the Caregiving Counts program. The guidance from other caregivers helped me navigate this difficult journey and better support my wife.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <span className="author-name">Robert T.</span>
                  <span className="author-title">Caregiver</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>&quot;The Facebook groups have been my lifeline. Being able to connect with others who understand exactly what you&apos;re going through at any time of day or night has helped me feel less alone in this fight.&quot;</p>
                </div>
                <div className="testimonial-author">
                  <span className="author-name">David K.</span>
                  <span className="author-title">LMS Patient</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section" id="faq">
            <div className="section-header">
              <span className="section-icon"><i className="fas fa-question-circle" aria-hidden /></span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FaqSection />
          </div>
        </div>
      </div>
    </div>
  );
}
