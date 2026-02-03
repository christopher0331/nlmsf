import type { Metadata } from "next";
import Image from "next/image";
import "./our-testimonials.css";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const researchTestimonials: Testimonial[] = [
  {
    quote:
      '"You are doing so much for so many" You should be proud of all you have accomplished within the Foundation."',
    name: "Dr. M. Druta",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/DR-Durta-150x150.jpg",
    imageAlt: "Dr. M. Druta",
  },
  {
    quote:
      '"NLMSF is recommended for patients and care givers looking for information on Leiomyosarcoma."',
    name: "Dr. Sant Chawla",
    role: "Sarcoma Onlcology Center",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/sant_chawla-150x150.jpg",
    imageAlt: "Dr. Sant Chawla",
  },
  {
    quote:
      "The NLSMF provides a vital link between the community, including LMS patients, and the oncology researchers who work tirelessly to help develop a better understanding of this rare disease, with the direct intent to provide sorely needed new therapeutic approaches. The LMS Research Roundtable process provides this unique and heretofore mission function, and for this reason we are so very grateful to Annie and Mitch Achee for providing the inspiration and resources needed to forge this connection.",
    name: "Dr. Raphael Pollock",
    role: "James Cancer Center, Ohio State Univ",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Dr-pollack.jpg",
    imageAlt: "Dr. Raphael Pollock",
  },
  {
    quote:
      "The LMS Roundtable offers the possibility to work with all researchers in the world dedicated to a rare tumor such as LMS - gathering the community of experts dedicated to LMS and hearing the patients' perspectives as well. It is an honor to lead the gynecological working group within the NLMSF-SPAEN International Research Roundtable - thank you NLMSF for launching this important initiative on behalf of patients and the research community.",
    name: "Dr. Roberta Sanfilippo",
    role: "Fondazione IRCCS Istituto",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2021/03/DrRobertaSanfilippo-150x150.jpg",
    imageAlt: "Dr. Roberta Sanfilippo",
  },
  {
    quote:
      '"You and Mitch are doing great things in the Foundation, and the Research Roundtable approach to taking things to the next level - this is a good thing!"',
    name: "Dr. S. Okuno",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/ScottOkuno.jpg",
    imageAlt: "Dr. S. Okuno",
  },
  {
    quote:
      '"I am very much engaged in understanding LMS and hoping to improve care. Annie and Mitch are such great patient advocates which I admire."',
    name: "Dr. Rebecca Gladdy",
    role: "Sinai Hospital, Toronto, Director of GI Sarcoma Clinical Research",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2021/02/gladdy-rebecca-150x150.jpg",
    imageAlt: "Dr. Rebecca Gladdy",
  },
  {
    quote:
      "No better way to advance LMS research - the Roundtable is an achievement to focus on LMS-specific study, and harness scrambled data with different histology's of various sarcomas - a clear signal for this disease type.",
    name: "Dr. Evan Rosenbaum",
    role: "Memorial Sloan Kettering",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2021/02/Dr-Rosenbaum-150x150.jpg",
    imageAlt: "Dr. Evan Rosenbaum",
  },
  {
    quote:
      "I strongly support he NLMSF in their efforts to fight LMS by brining together world-wide experts - this is a major achievement. Together we are stronger and smarter to fight this disease.",
    name: "Dr. W. J. Van Houdt",
    role: "Netherlands Cancer Institute",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Dr-Van-150x150.jpg",
    imageAlt: "Dr. W. J. Van Houdt",
  },
  {
    quote:
      "This is exciting - and the way the Research Roundtable has unfolded is the right approach.",
    name: "Dr. B. Van Tine",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2021/02/Brian-Van-Tine-MD-PhD.jpg",
    imageAlt: "Dr. B. Van Tine",
  },
  {
    quote:
      "Thank you so much for all you have done for us and for LMS research community! We really appreciate!",
    name: "Wantong Yao, PHD",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/WantongYeoPHD.jpg",
    imageAlt: "Wantong Yao, PHD",
  },
  {
    quote:
      "The essential benefit arising from Foundation's LMS Roundtable working groups is the opportunity to bring an assembly of researchers and clinicians into a conversation that spans basic research to clinical application. By working together we learn from each other's expertise and build future innovations in LMS patient care. I support the NLMSF's mission to support patients and families in the way that it does - in addition to supporting the research community. We are all working towards a better future for those diagnosed with LMS.",
    name: "Dr. Matthew Hemming",
    role: "Dana Farber Cancer Institute",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2021/02/Dr-Hemming-150x150.jpg",
    imageAlt: "Dr. Matthew Hemming",
  },
  {
    quote:
      '"I love the NLMSF - I love the patient programs held - your signature support advocacy to collaborate with sarcoma centers. LMS is common enough to have had a specific focus initiative- and the NLMSF was many steps ahead of the curve, to launch the LMS International Research Roundtable - to support patients in this way, and focus on LMS-specific research and support in the research landscape. Annie and Mitch are such a good team for the LMS Roundtable. They compliment each other with their unique strengths in moving forward to help patients and giving a special spotlight to LMS in particular."',
    name: "Dr Seth Pollack",
    role: "Northwestern Medicine",
    imageUrl:
      "https://nlmsf.org/wp-content/uploads/2020/06/seth-pollack-150x150.jpg",
    imageAlt: "Dr Seth Pollack",
  },
  {
    quote:
      "Dear Annie and Mitch - Thank YOU for supporting the cause You could have just done other stuff. But you choose to fight for this disease. it makes and will further make a difference!!",
    name: "Dr. Sebastian Bauer",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Sebastian-Bauer-7.jpg",
    imageAlt: "Dr. Sebastian Bauer",
  },
  {
    quote:
      "You have made a huge difference in the infrastructure of the NLMSF.. You should be proud of what you have done. Beverly and I congratulate you both! It is a great Foundation.",
    name: "Bruce and Beverly Shriver",
    role: "SARC Research Award Sponsor",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Bruce-150x150.jpg",
    imageAlt: "Bruce and Beverly Shriver",
  },
  {
    quote:
      "I think that the LMS Research Roundtable is a valuable model of brining clinicians and scientists together to discuss the state of LMS and to develop ideas for pushing the field forward.",
    name: "Dr. Arun Sing",
    role: "UCLA Ronald Reagan Medical Center",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Dr-Singh-150x150.jpg",
    imageAlt: "Dr. Arun Sing",
  },
  {
    quote: "Annie and Mitch! Thanks for all you for our patients.",
    name: "Dr Sandra D'Angelo",
    role: "Memorial Sloan Kettering",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/Dr-DAngelo-150x150.jpg",
    imageAlt: "Dr Sandra D'Angelo",
  },
];

const patientTestimonials: Testimonial[] = [
  {
    quote:
      "I am so glad that Dr. Shepard came through to answer my question, through your efforts to make it happen. Annie, you have so much integrity and warmth in the way you live and give to others.",
    name: "Robin K",
    role: "Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      "I was diagnosed with LMS just one week ago. Annie Achee and her husband called me and spent about 45 minutes telling me what to expect, what questions to ask and the kind of specialists I would need. It was the most valuable 45 minutes of my life so far. Prior to that I was frantically trying to learn all I could online. Their help was beyond invaluable. My stress level went down dramatically. Now I feel prepared for what is coming and that I am set up for care with an excellent team of specialists at the Cleveland Clinic.",
    name: "David Matanic",
    role: "LMS Patient",
  },
  {
    quote:
      "Thank you 100x's over, thank you. I have been praying and asking God to send me someone good and kind to help me Thank you both for all your doing. Only wish you could be with me and hold my hand. Your wonderful! Thank you. Sincerely, Mary & Steve Lloyd",
    name: "Mary",
    role: "LMS Patient",
  },
  {
    quote:
      '"Annie and Mitch are both so special, and make me want to live in this world. I love you guys and NLMSF."',
    name: "Sharon",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      "NLMSF: Thank you so much for your kind words and your recommendations regarding speakers and your great passion and commitment got us to the finish line in pulling this Rare Cancer / Sarcoma Webinar program together. All is possible with our team work. I am so thrilled to finally after all this time collaborate on a webinar program together. I know that we will both work hard to create more opportunities to offer programs on LMS.",
    name: "Carolyn",
    role: "Cancer Care",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"We are all interconnected through one big LIFE, Annie, so it is each of our duty to be mutually supportive. Looking forward to your new and useful insights."',
    name: "ED",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"NLMSF is a wonderful place to help you feel that you are not alone in your LMS journey. You will have access to knowledge, practical tips, resources, and, best of all, contact with others who may be newly diagnosed or long term thrivers. It is very powerful to know there are others who are many years into their LMS journey, and are leading happy, productive lives."',
    name: "Cathie",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"Thank you so much with all of your help, if my situation is getting worst, I will contact you to ask for help again. Here is Canada, it is so different to Us, and in Vancouver, we dont have many options. In my heart, I am always thinking of you and all of your help to me- a person you never know, but you work hard to help."',
    name: "Hanna",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      "Annie Thanks for your warm words for me and for my country. Yaacov is getting all the best treatment that our country can offer, but now its only a miracle or a new medicine that can help. I feel lucky to have you in my life.ng that might help. will be very grateful.",
    name: "Edith",
    role: "Wife of an LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"Dear Annie and Mitch, Thank you so very much for your Godly service, direction, precious time, and great knowledge. You have given me a new perspective. You are an awesome duo and I am grateful for your wonderful work."',
    name: "Darlene",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"In 2012, I was diagnosed with leiomyosarcoma, but had never heard of it. God allowed me to be part of something that changed how I wanted to fight this. I learned that I must fight and teach as many people as I can that are fighting cancer. You\'re not alone. Annie Achee has been my life coach through this. If I\'m concerned about any treatment, I can call her for guidance. Thank you for your love and support."',
    name: "Pamela",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"NLMSF is a wonderful place to help you feel that you are not alone in your LMS journey. You will have access to knowledge, practical tips, resources, and, best of all, contact with others who may be newly diagnosed or long term thrivers. It is very powerful to know there are others who are many years into their LMS journey, and are leading happy, productive lives."',
    name: "Sharon",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"From the bottom of our hearts, thanks for all the great work that you do for LMS. It is clear that your organization goes above and beyond the call of duty. I admire the work and the diligent efforts to research and aid in moving forward in the quest for a cure. You can be assured that your efforts are greatly appreciated by our friends and families. You are an inspiration to us all."',
    name: "Evan",
    role: "Caregiver",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"In 2012, I was diagnosed with leiomyosarcoma, but had never heard of it. God allowed me to be part of something that changed how I wanted to fight this. I learned that I must fight and teach as many people as I can that are fighting cancer. You\'re not alone. Annie Achee has been my life coach through this. If I\'m concerned about any treatment, I can call her for guidance. Thank you for your love and support."',
    name: "Pamela",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"I found NLMSF 3 years after my diagnosis of LMS; wish I\'d found them sooner. The resources and information they provide is so helpful and the foundation\'s commitment to furthering research on this disease is vital."',
    name: "Michelle",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart-150x150.jpg",
    imageAlt: "Purple heart",
  },
  {
    quote:
      '"Thank you NLMSF and Annie for your support and giving me information to get under the best hospital and doctor care"',
    name: "Christina",
    role: "LMS Patient",
    imageUrl: "https://nlmsf.org/wp-content/uploads/2021/02/purple-heart.jpg",
    imageAlt: "Purple heart",
  },
];

export const metadata: Metadata = {
  title: "Our Testimonials | NLMSF",
  description:
    "Testimonials from research clinicians, patients, and caregivers in support of the NLMSF.",
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">{testimonial.quote}</p>
      <div className="testimonial-meta">
        {testimonial.imageUrl ? (
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.imageAlt || testimonial.name}
            className="testimonial-image"
            width={240}
            height={240}
          />
        ) : null}
        <div>
          <p className="testimonial-name">{testimonial.name}</p>
          {testimonial.role ? (
            <p className="testimonial-role">{testimonial.role}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function OurTestimonialsPage() {
  return (
    <div className="our-testimonials-page">
      <section className="testimonials-hero">
        <div className="testimonials-hero-content">
          <Image
            src="https://nlmsf.org/wp-content/uploads/elementor/thumbs/Screenshot-2024-01-10-6.58.23-PM-1-qi4u77wu3fofs05fwqd3f5ydh0vp5qdj60ryo9w9z8.png"
            alt="Testimonials banner"
            className="testimonials-hero-image"
            width={1200}
            height={800}
          />
          <h1 className="testimonials-hero-title">
            Testimonials from the Research and Patient Communities in Support of
            the NLMSF
          </h1>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-section-title">
          Research Clinicians Testimonials
        </h2>
        <div className="testimonials-grid">
          {researchTestimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.quote.slice(0, 12)}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-section-title">Patient Testimonials</h2>
        <div className="testimonials-grid">
          {patientTestimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.quote.slice(0, 12)}`}
              testimonial={testimonial}
            />
          ))}
          <div className="testimonial-card testimonial-card--image">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2021/03/MorePatientTest.jpg"
              alt="More patient testimonials"
              className="testimonial-image-full"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-note">
          <p>
            Hi Annie Thanks for your warm words for me and for my country. Yaacov
            is getting all the best treatment that our country can offer, but
            now its only a miracle or a new medicine that can help. But I feel
            lucky to have you in my life and if you know about anything that
            might help. will be very grateful.
          </p>
          <p className="testimonials-note-signoff">Love Edith</p>
        </div>
      </section>
    </div>
  );
}
