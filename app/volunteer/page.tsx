import type { Metadata } from "next";
import Image from "next/image";
import "./volunteer.css";

export const metadata: Metadata = {
  title: "Volunteer | NLMSF",
  description:
    "Join the NLMSF volunteer team and help make a difference through community support, fundraising, and awareness.",
};

const galleryImages = [
  "https://nlmsf.org/wp-content/uploads/2020/07/unnamed-64.jpg",
  "https://nlmsf.org/wp-content/uploads/2020/07/unnamed-65.jpg",
  "https://nlmsf.org/wp-content/uploads/2020/07/unnamed-62.jpg",
  "https://nlmsf.org/wp-content/uploads/2020/07/unnamed-63.jpg",
  "https://nlmsf.org/wp-content/uploads/2021/03/Support-group.jpeg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_1809.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_2716.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_2988.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_3116.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_3118.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_3128.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_3146.jpg",
  "https://nlmsf.org/wp-content/uploads/2025/11/IMG_3189.jpg",
];

export default function VolunteerPage() {
  return (
    <main className="volunteer-page">
      <section className="vol-hero">
        <div className="vol-badge">
          <span className="vol-badge-dot" aria-hidden="true" />
          <span>Join Our Team</span>
        </div>
        <h1 className="vol-hero-title">Volunteer</h1>
        <div className="vol-hero-divider" />
        <p className="vol-hero-description">
          Join the NLMSF TEAM and bring your ideas, creativity, commitment, and enthusiasm to help
          make a difference for the LMS Community.
        </p>
        <div className="vol-feature-tags">
          <span className="vol-feature-tag">Community</span>
          <span className="vol-feature-tag">Ideas</span>
          <span className="vol-feature-tag">Support</span>
        </div>
      </section>

      <section className="vol-layout">
        <aside className="vol-sidebar">
          <div className="vol-sidebar-section">
            <h3 className="vol-sidebar-title">Ways to Help</h3>
            <ul className="vol-nav-links">
              <li>
                <a href="#team-ambassador">Become an Ambassador</a>
              </li>
              <li>
                <a href="#fundraising">Fundraising</a>
              </li>
              <li>
                <a href="#social-media">Social Media</a>
              </li>
              <li>
                <a href="#donate">Contribute</a>
              </li>
            </ul>
          </div>

          <div className="vol-sidebar-cta">
            <h4>Contact Us Today</h4>
            <p>Reach out to join our volunteer team and help make a difference for the LMS Community.</p>
            <a href="tel:3038083437" className="vol-cta-button">
              Call Annie: 303-808-3437
            </a>
          </div>
        </aside>

        <div className="vol-content">
          <section className="vol-intro">
            <h2 className="vol-section-title">You Can Help</h2>
            <p className="vol-intro-text">
              The National Leiomyosarcoma Foundation (NLMSF TEAM) embraces a dedicated and committed
              volunteer community of active LMS patients/survivors, caregivers, families, friends,
              co-workers, advocates/supporters who all contribute to the mission and purpose of the
              Foundation.
            </p>
            <div className="vol-intro-banner">
              <p>
                We encourage you to join the NLMSF TEAM - bring your ideas, creativity, commitment,
                and enthusiasm to help make a difference for the LMS Community.
              </p>
              <p className="vol-banner-highlight">&quot;Many hands make light work for small projects.&quot;</p>
              <p>
                We are a caring, genuine group that only wants to do the best for patients and their
                families. Together we make an impact for the better!
              </p>
            </div>
          </section>

          <section id="team-ambassador" className="vol-section">
            <div className="vol-section-header purple">
              <h2>Become a Foundation Community Ambassador</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-image">
                <Image src="/images/ambassador.jpg" alt="NLMSF Community Ambassador" width={400} height={300} />
              </div>
              <div className="vol-text">
                <h3>Be a Volunteer Foundation Community Ambassador</h3>
                <p>
                  Help the Foundation with a small project or initiate a project you feel
                  passionate about doing, based on your time and availability.
                </p>

                <div className="vol-highlight-box">
                  <h4>Who Can Be a Community Ambassador?</h4>
                  <ul className="vol-feature-list">
                    <li>LMS patients and survivors</li>
                    <li>Caregivers and family members</li>
                    <li>Friends and coworkers</li>
                    <li>Students and young professionals</li>
                    <li>Anyone passionate about making a difference</li>
                  </ul>
                </div>

                <p>
                  The Foundation has at least 50 fundraising ideas to share. Students and young
                  professionals can also be Community Ambassadors to help raise awareness and LMS
                  research funding.
                </p>

                <div className="vol-spotlight">
                  <div className="vol-spotlight-image">
                    <Image
                      src="https://nlmsf.org/wp-content/uploads/2025/11/bonnie-shaw-fundraising.jpg"
                      alt="Community Ambassador fundraiser Bonnie Shaw"
                      width={320}
                      height={220}
                    />
                  </div>
                  <div className="vol-spotlight-text">
                    <h4>Community Ambassador Spotlight: Bonnie Shaw</h4>
                    <p>
                      Bonnie has led multiple creative fundraising initiatives for NLMSF, rallying
                      her community to support patients, families, and research. Her dedication and
                      energy are a powerful example of how one Community Ambassador can make a
                      meaningful impact.
                    </p>
                  </div>
                </div>

                <div className="vol-contact-box">
                  <h4>Ready to Become a Community Ambassador?</h4>
                  <p>
                    Contact Annie at <a href="tel:3038083437">303-808-3437</a> or email{" "}
                    <a href="mailto:annieachee@aol.com">annieachee@aol.com</a> to join our team or for
                    more information.
                  </p>
                </div>
              </div>
            </div>

            <div className="vol-gallery">
              <h4 className="vol-gallery-title">Community Ambassador Moments</h4>
              <div className="vol-gallery-track">
                {galleryImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`NLMSF Community Ambassador event ${index + 1}`}
                    width={220}
                    height={140}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="education-programs" className="vol-section">
            <div className="vol-section-header blue">
              <h2>Attend Patient Education Programs</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-text">
                <h3>Patient Education Programs</h3>
                <p>
                  Throughout the year, the NLMSF hosts various educational programs for patients,
                  caregivers, and medical professionals. These events provide valuable information
                  about LMS treatments, research developments, and support resources.
                </p>

                <div className="vol-info-box">
                  <h4>Upcoming Events</h4>
                  <p>
                    Check our Patient Education page for calendar updates on upcoming programs and
                    events that you can attend or help organize.
                  </p>
                  <a href="/patient-education" className="vol-action-button">
                    View Education Calendar
                  </a>
                </div>

                <h4>Ways to Help With Education Programs:</h4>
                <ul className="vol-feature-list">
                  <li>Assist with event planning and coordination</li>
                  <li>Help with registration and check-in</li>
                  <li>Share your personal story as a speaker</li>
                  <li>Distribute educational materials</li>
                  <li>Provide technical support for virtual events</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fundraising" className="vol-section">
            <div className="vol-section-header teal">
              <h2>Fundraising Opportunities</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-text">
                <h3>Create a Fundraising Project</h3>
                <p>
                  Think of a project at church, school, work, or club affiliation, in connection with
                  a holiday to make it a festive fundraising effort. Fall is a great time to launch
                  a fundraising project.
                </p>

                <div className="vol-highlight-box vol-highlight-special">
                  <h4>July 15th is LMS Awareness Day</h4>
                  <p>
                    A fundraising event on this day would highlight awareness of LMS. Contact Annie
                    for the Ideas List to help you get started.
                  </p>
                </div>

                <h4>Fundraising Project Ideas:</h4>
                <div className="vol-card-grid">
                  <div className="vol-idea-card">
                    <div className="vol-card-icon">🏃</div>
                    <h5>5K Run/Walk</h5>
                    <p>Organize a community race with registration fees benefiting NLMSF.</p>
                  </div>
                  <div className="vol-idea-card">
                    <div className="vol-card-icon">🍽️</div>
                    <h5>Dinner Fundraiser</h5>
                    <p>Host a dinner event with ticket sales supporting LMS research.</p>
                  </div>
                  <div className="vol-idea-card">
                    <div className="vol-card-icon">🎁</div>
                    <h5>Holiday Gift Wrap</h5>
                    <p>Offer gift wrapping services during holiday seasons for donations.</p>
                  </div>
                </div>

                <div className="vol-cta-box">
                  <p>For a complete list of fundraising ideas or to discuss your own creative project:</p>
                  <a href="mailto:annieachee@aol.com" className="vol-action-button">
                    Contact Annie for Ideas
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="social-media" className="vol-section">
            <div className="vol-section-header indigo">
              <h2>Social Media Participation</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-text">
                <h3>Be a Facebook/Twitter Participant</h3>
                <p>
                  Connect with patients, supporters, and Foundation board members on social media.
                  See information updates posted about research articles, news, and updates.
                </p>

                <div className="vol-social-links">
                  <a href="https://www.facebook.com/groups/1329603747125818/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="https://twitter.com/nationallmsf" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>

                <h4>How You Can Help on Social Media:</h4>
                <ul className="vol-feature-list">
                  <li>Share NLMSF posts to increase awareness</li>
                  <li>Help moderate online support groups</li>
                  <li>Create engaging content about LMS research and events</li>
                  <li>Respond to questions from new patients and families</li>
                  <li>Share your personal story to inspire others</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="spreading-word" className="vol-section">
            <div className="vol-section-header amber">
              <h2>Spreading the Word</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-image">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2025/08/1754263335367blob.png"
                  alt="Spreading the Word Initiative"
                  width={360}
                  height={260}
                />
              </div>
              <div className="vol-text">
                <h3>Be a Part of &quot;Spreading the Word&quot;</h3>
                <p>
                  Help reach out to the Non-Sarcoma Community Providers where you live with doctors,
                  nurse navigators, and P.A.'s involved in your care.
                </p>

                <div className="vol-contact-box">
                  <h4>Get Your Small Tool Kit</h4>
                  <div className="vol-toolkit">
                    <div className="vol-toolkit-image">
                      <Image
                        src="https://nlmsf.org/wp-content/uploads/2025/08/IMG_6693-preview-scaled.jpeg"
                        alt="Small Tool Kit Instructions"
                        width={240}
                        height={160}
                      />
                    </div>
                    <div className="vol-toolkit-text">
                      <p>
                        Reach out to Annie at <a href="tel:3038083437">303-808-3437</a> to discuss how
                        to help in this initiative - we have your small tool kit to get you
                        started.
                      </p>
                      <p>
                        <strong>See the image for detailed instructions on how to use your tool kit effectively.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <h3>The Golf Ball Project</h3>
                <div className="vol-highlight-box vol-highlight-special">
                  <h4>If You See a Lump or a Bump – Could it Be Sarcoma?</h4>
                  <p>
                    Learn all about this initiative by the NLMSF and the Sarcoma Coalition
                    initiative started in 2020 and jump on board to help us help others in the
                    future. We can do this together and pay it forward.
                  </p>
                </div>

                <div className="vol-golf-card">
                  <Image
                    src="https://nlmsf.org/wp-content/uploads/2025/08/1754263381045blob.png"
                    alt="Sarcoma Awareness Card"
                    width={260}
                    height={180}
                  />
                  <p className="vol-caption">
                    <em>The card shown above contains the same information as the instructions below.</em>
                  </p>
                </div>

                <div className="vol-golf-instructions">
                  <h4>What is it? Could it be a Sarcoma?</h4>
                  <div>
                    <h5>LUMPS and BUMPS of any size on any part of the body.</h5>
                    <p className="vol-warning">Do not ignore - a possible red flag.</p>
                  </div>
                  <div>
                    <p>
                      A lump or bump can be deep or subcutaneous and may be painful. It may change
                      size over time, be persistent, or involve deep tissue.
                    </p>
                  </div>
                  <div>
                    <h5>Be Alert</h5>
                    <p>
                      An in-depth consultation and evaluation is necessary to eliminate the
                      potential for possibly overlooking a form of Sarcoma. Delays in treatment can
                      be critical.
                    </p>
                  </div>
                  <div className="vol-best-practice">
                    <h5>Imaging / Biopsy is the best practice</h5>
                    <p>MRI imaging is best; ultrasound at a minimum initially.</p>
                    <p>
                      Biopsy or surgical intervention will reveal whether or not there is a sarcoma.
                      Consult with a Sarcoma Specialist if it is.
                    </p>
                  </div>
                </div>

                <h4>Educational Resources:</h4>
                <div className="vol-video-links">
                  <a href="https://www.youtube.com/watch?v=188TWJsAFlk" target="_blank" rel="noopener noreferrer">
                    Dr. Robert Grimer - Golf Ball Approach
                  </a>
                  <a href="https://www.youtube.com/watch?v=vHcb1B_HzgE" target="_blank" rel="noopener noreferrer">
                    When to Suspect a Sarcoma
                  </a>
                  <a href="https://www.youtube.com/watch?v=61rBFlWg-2w" target="_blank" rel="noopener noreferrer">
                    Accurately Diagnosis Sarcoma
                  </a>
                </div>

                <div className="vol-cta-box">
                  <h4>Become a &quot;Boots on the Ground&quot; Ambassador</h4>
                  <p>
                    As a patient or family member/caregiver, if you would like to be the boots on
                    the ground ambassador for this initiative:
                  </p>
                  <div className="vol-contact-buttons">
                    <a href="mailto:annieachee@aol.com" className="vol-action-button">
                      Email Annie
                    </a>
                    <a href="tel:3038083437" className="vol-action-button secondary">
                      Call 303-808-3437
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="donate" className="vol-section">
            <div className="vol-section-header purple">
              <h2>Contribute to Research</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-text">
                <h3>Invest in Research Breakthroughs To Advance Treatment</h3>
                <p>
                  It is all about the present and the future of Leiomyosarcoma research breakthroughs
                  to advance treatment options and extend survival for patients.
                </p>

                <div className="vol-quote">
                  All donations are investment &quot;gifts&quot; directed to LMS research – lighting the way
                  to the discovery that can turn into clinical care treatment options... &quot;gifts&quot; that
                  keep on giving!
                </div>

                <h4>Honor Someone Special</h4>
                <p>
                  It is easy to make a contribution to research in honor or tribute for someone who
                  has been a special part of your life.
                </p>

                <div className="vol-cta-box">
                  <p>
                    Through investing in LMS Research, patients, families, and friends come together
                    to support and contribute to the Foundation&apos;s funding of important LMS research
                    projects.
                  </p>
                  <a href="/donate" className="vol-action-button">
                    Donate Today
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="regional-volunteer" className="vol-section">
            <div className="vol-section-header amber">
              <h2>Regional Volunteer Opportunities</h2>
            </div>
            <div className="vol-section-body">
              <div className="vol-text">
                <h3>Get Involved in Your Region</h3>
                <p>
                  The NLMSF supports volunteer opportunities across the United States, with regional
                  coordinators who can help you get involved in your local area:
                </p>

                <div className="vol-resource-card">
                  <h4>Local Patient Support Groups</h4>
                  <p>
                    Help coordinate and facilitate support group meetings for LMS patients and
                    caregivers in your community.
                  </p>
                  <a href="#" className="vol-card-link">
                    Find Local Groups
                  </a>
                </div>

                <div className="vol-resource-card">
                  <h4>Regional Awareness Events</h4>
                  <p>
                    Participate in events across the country to raise awareness about LMS and
                    support patient education.
                  </p>
                  <a href="#" className="vol-card-link">
                    View Calendar
                  </a>
                </div>

                <div className="vol-resource-card">
                  <h4>Medical Center Partnerships</h4>
                  <p>
                    Support our partnerships with sarcoma centers of excellence nationwide by
                    helping distribute educational materials and resources to patients.
                  </p>
                  <a href="#" className="vol-card-link">
                    Join Program
                  </a>
                </div>

                <div className="vol-callout">
                  <p>
                    No matter where you live, you can make a difference. Contact our National
                    Volunteer Coordinator for information about opportunities in your region.
                  </p>
                  <a href="tel:3038083437" className="vol-action-button">
                    Call: 303-808-3437
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
