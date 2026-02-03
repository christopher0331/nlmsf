import type { Metadata } from "next";
import TestimonialsClient, { type Testimonial } from "./TestimonialsClient";
import "./testimonials.css";

export const metadata: Metadata = {
  title: "Testimonials | NLMSF",
  description:
    "Stories and experiences from patients, caregivers, and clinicians supporting the LMS community.",
};

const clinicianTestimonials: Testimonial[] = [
  {
    name: "Dr. M. Druta",
    text:
      "\"You are doing so much for so many\" You should be proud of all you have accomplished within the Foundation.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/DR-Durta-150x150.jpg",
  },
  {
    name: "Dr. Sant Chawla",
    text:
      "\"NLMSF is recommended for patients and care givers looking for information on Leiomyosarcoma.\"",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/sant_chawla-150x150.jpg",
  },
  {
    name: "Dr. Raphael Pollock",
    text:
      "The NLMSF provides a vital link between the community, including LMS patients, and the oncology researchers who work tirelessly to help develop a better understanding of this rare disease, with the direct intent to provide sorely needed new therapeutic approaches. The LMS Research Roundtable process provides this unique and heretofore mission function, and for this reason we are so very grateful to Annie and Mitch Achee for providing the inspiration and resources needed to forge this connection.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-pollack.jpg",
  },
  {
    name: "Dr. Roberta Sanfilippo",
    text:
      "The LMS Roundtable offers the possibility to work with all researchers in the world dedicated to a rare tumor such as LMS - gathering the community of experts dedicated to LMS and hearing the patients' perspectives as well. It is an honor to lead the gynecological working group within the NLMSF-SPAEN International Research Roundtable - thank you NLMSF for launching this important initiative on behalf of patients and the research community.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/DrRobertaSanfilippo-150x150.jpg",
  },
  {
    name: "Dr. S. Okuno",
    text:
      "\"You and Mitch are doing great things in the Foundation, and the Research Roundtable approach to taking things to the next level - this is a good thing!\"",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/ScottOkuno.jpg",
  },
  {
    name: "Dr. Rebecca Gladdy",
    text:
      "\"I am very much engaged in understanding LMS and hoping to improve care. Annie and Mitch are such great patient advocates which I admire.\"",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/gladdy-rebecca-150x150.jpg",
  },
  {
    name: "Dr. Evan Rosenbaum",
    text:
      "No better way to advance LMS research - the Roundtable is an achievement to focus on LMS-specific study, and harness scrambled data with different histology's of various sarcomas - a clear signal for this disease type.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-Rosenbaum-150x150.jpg",
  },
  {
    name: "Dr. W. J. Van Houdt",
    text:
      "I strongly support the NLMSF in their efforts to fight LMS by bringing together world-wide experts - this is a major achievement. Together we are stronger and smarter to fight this disease.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-Van-150x150.jpg",
  },
  {
    name: "Dr. B. Van Tine",
    text:
      "This is exciting - and the way the Research Roundtable has unfolded is the right approach.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Brian-Van-Tine-MD-PhD.jpg",
  },
  {
    name: "Wantong Yao, PHD",
    text:
      "Thank you so much for all you have done for us and for LMS research community! We really appreciate!",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/WantongYeoPHD.jpg",
  },
  {
    name: "Dr. Matthew Hemming",
    text:
      "The essential benefit arising from Foundation's LMS Roundtable working groups is the opportunity to bring an assembly of researchers and clinicians into a conversation that spans basic research to clinical application. By working together we learn from each other's expertise and build future innovations in LMS patient care. I support the NLMSF's mission to support patients and families in the way that it does - in addition to supporting the research community. We are all working towards a better future for those diagnosed with LMS.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-Hemming-150x150.jpg",
  },
  {
    name: "Dr Seth Pollack",
    text:
      "I love the NLMSF - I love the patient programs held - your signature support advocacy to collaborate with sarcoma centers. LMS is common enough to have had a specific focus initiative- and the NLMSF was many steps ahead of the curve, to launch the LMS International Research Roundtable - to support patients in this way, and focus on LMS-specific research and support in the research landscape. Annie and Mitch are such a good team for the LMS Roundtable. They compliment each other with their unique strengths in moving forward to help patients and giving a special spotlight to LMS in particular.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2020/06/seth-pollack-150x150.jpg",
  },
  {
    name: "Dr. Sebastian Bauer",
    text:
      "Dear Annie and Mitch - Thank YOU for supporting the cause You could have just done other stuff. But you choose to fight for this disease. It makes and will further make a difference!!",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Sebastian-Bauer-7.jpg",
  },
  {
    name: "Bruce and Beverly Shriver",
    text:
      "You have made a huge difference in the infrastructure of the NLMSF. You should be proud of what you have done. Beverly and I congratulate you both! It is a great Foundation.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Bruce-150x150.jpg",
  },
  {
    name: "Dr. Arun Singh",
    text:
      "I think that the LMS Research Roundtable is a valuable model of bringing clinicians and scientists together to discuss the state of LMS and to develop ideas for pushing the field forward.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-Singh-150x150.jpg",
  },
  {
    name: "Dr Sandra D'Angelo",
    text: "Annie and Mitch! Thanks for all you for our patients.",
    type: "Research Clinician",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/Dr-DAngelo-150x150.jpg",
  },
];

const patientTestimonials: Testimonial[] = [
  {
    name: "Catharine",
    text: "You and Mitch are heroes to our family.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Rebecca",
    text: "\"Thank you, you both are a light where there is fog.\"",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "David Matanic",
    text:
      "I was diagnosed with LMS just one week ago. Annie Achee and her husband called me and spent about 45 minutes telling me what to expect, what questions to ask and the kind of specialists I would need. It was the most valuable 45 minutes of my life so far. Prior to that I was frantically trying to learn all I could online. Their help was beyond invaluable. My stress level went down dramatically. Now I feel prepared for what is coming and that I am set up for care with an excellent team of specialists at the Cleveland Clinic.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Mary",
    text:
      "Thank you 100x's over, thank you. I have been praying and asking God to send me someone good and kind to help me. Thank you both for all your doing. Only wish you could be with me and hold my hand. You're wonderful! Thank you. Sincerely, Mary & Steve Lloyd",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Sharon",
    text:
      "Annie and Mitch are both so special, and make me want to live in this world. I love you guys and NLMSF.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Carolyn",
    text:
      "NLMSF: Thank you so much for your kind words and your recommendations regarding speakers and your great passion and commitment got us to the finish line in pulling this Rare Cancer / Sarcoma Webinar program together. All is possible with our team work. I am so thrilled to finally after all this time collaborate on a webinar program together. I know that we will both work hard to create more opportunities to offer programs on LMS.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "ED",
    text:
      "We are all interconnected through one big LIFE, Annie, so it is each of our duty to be mutually supportive. Looking forward to your new and useful insights.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Cathie",
    text:
      "NLMSF is a wonderful place to help you feel that you are not alone in your LMS journey. You will have access to knowledge, practical tips, resources, and, best of all, contact with others who may be newly diagnosed or long term thrivers. It is very powerful to know there are others who are many years into their LMS journey, and are leading happy, productive lives.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Hanna",
    text:
      "Thank you so much with all of your help, if my situation is getting worst, I will contact you to ask for help again. Here is Canada, it is so different to US, and in Vancouver, we dont have many options. In my heart, I am always thinking of you and all of your help to me- a person you never know, but you work hard to help.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Edith",
    text:
      "Annie thanks for your warm words for me and for my country. Yaacov is getting all the best treatment that our country can offer, but now its only a miracle or a new medicine that can help. I feel lucky to have you in my life.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Darlene",
    text:
      "Dear Annie and Mitch, thank you so very much for your Godly service, direction, precious time, and great knowledge. You have given me a new perspective. You are an awesome duo and I am grateful for your wonderful work.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Pamela",
    text:
      "In 2012, I was diagnosed with leiomyosarcoma, but had never heard of it. God allowed me to be part of something that changed how I wanted to fight this. I learned that I must fight and teach as many people as I can that are fighting cancer. You're not alone. Annie Achee has been my life coach through this. If I'm concerned about any treatment, I can call her for guidance. Thank you for your love and support.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Sharon",
    text:
      "NLMSF is a wonderful place to help you feel that you are not alone in your LMS journey. You will have access to knowledge, practical tips, resources, and, best of all, contact with others who may be newly diagnosed or long term thrivers. It is very powerful to know there are others who are many years into their LMS journey, and are leading happy, productive lives.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Evan",
    text:
      "From the bottom of our hearts, thanks for all the great work that you do for LMS. It is clear that your organization goes above and beyond the call of duty. I admire the work and the diligent efforts to research and aid in moving forward in the quest for a cure. You can be assured that your efforts are greatly appreciated by our friends and families. You are an inspiration to us all.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Michelle",
    text:
      "I found NLMSF 3 years after my diagnosis of LMS; wish I'd found them sooner. The resources and information they provide is so helpful and the foundation's commitment to furthering research on this disease is vital.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Christina",
    text:
      "Thank you NLMSF and Annie for your support and giving me information to get under the best hospital and doctor care.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
  {
    name: "Emily",
    text:
      "Thank you so much for your note. You two make our whole family feel enfolded in your care and love. We are so grateful for you.",
    type: "Patient",
    imageUrl: "https://nlsmf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="nlmsf-testimonials-page">
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Patient Stories</span>
            <h1 className="nlmsf-hero-title">Testimonials</h1>
            <div className="nlmsf-hero-description">
              <p>
                Read stories and experiences from patients, caregivers, and medical professionals
                who have worked with the National Leiomyosarcoma Foundation.
              </p>
              <p>
                These testimonials reflect the impact of NLMSF&apos;s dedication to providing support,
                education, and resources to the LMS community, as well as our commitment to
                advancing research initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nlmsf-content-section">
        <div className="nlmsf-content-container nlmsf-layout">
          <aside className="nlmsf-sidebar">
            <div className="nlmsf-sidebar-navigation">
              <h3 className="nlmsf-sidebar-title">Testimonial Categories</h3>
              <ul className="nlmsf-sidebar-menu">
                <li className="nlmsf-sidebar-item">
                  <a href="#research-clinicians" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">👨‍⚕️</span>
                    <span>Research Clinicians</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="#patients" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">💜</span>
                    <span>Patient Stories</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="nlmsf-sidebar-resources">
              <h3 className="nlmsf-sidebar-title">Related Resources</h3>
              <ul className="nlmsf-sidebar-menu">
                <li className="nlmsf-sidebar-item">
                  <a href="/patient-perspectives" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">📝</span>
                    <span>Patient Perspectives</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="/our-board" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">👥</span>
                    <span>Meet Our Board</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="/medical-advisory-board" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">🔬</span>
                    <span>Medical Advisors</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="nlmsf-sidebar-cta">
              <h3 className="nlmsf-sidebar-cta-title">Share Your Story</h3>
              <p className="nlmsf-sidebar-cta-text">
                Has NLMSF made a difference in your journey? We&apos;d love to hear your story and share
                it with others who might benefit from your experiences.
              </p>
              <a href="/contact" className="nlmsf-sidebar-cta-button">
                Submit Your Testimonial
              </a>
            </div>
          </aside>

          <TestimonialsClient
            clinicianTestimonials={clinicianTestimonials}
            patientTestimonials={patientTestimonials}
          />
        </div>
      </section>
    </main>
  );
}
