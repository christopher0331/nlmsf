import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./home-page.css";

export const metadata: Metadata = {
  title: "Home (Legacy) | NLMSF",
  description:
    "Legacy home page: education, advocacy, support, and research for the LMS Community.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function HomeOrphanPage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Welcome to the National Leiomyosarcoma Foundation</h1>
        <p className="hero-tagline">
          Providing education, advocacy, support, and research for the LMS Community as we move forward in the quest for the cure.
        </p>
        <p className="hero-intro">
          Leiomyosarcoma is a rare cancer that originates in smooth tissue and can occur anywhere in the body. Research is under-funded and your donation makes a difference. Together, we are moving forward in search of a cure.
        </p>
      </section>

      <section className="home-hotline">
        <div className="home-hotline-inner">
          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2022/03/hotline-removebg-preview-150x150.png"
            alt=""
            className="home-hotline-img"
            width={150}
            height={150}
          />
          <div className="home-hotline-content">
            <h4>LMS Support Hotline</h4>
            <p>
              <a href="tel:3038083437">(303) 808-3437</a> or <a href="tel:3037830924">(303) 783-0924</a> for immediate assistance 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="home-powered-title">
        <h2>Powered By Purpose</h2>
      </section>

      <section className="home-three-col">
        <div className="home-col">
          <div className="home-col-content">
            <h2 className="newly-heading">NEWLY DIAGNOSED?</h2>
            <p>
              <strong>At the request of the NLMSF,</strong> an LMS survivor/NLMSF supporter wants you to know that there is hope and a way forward.
            </p>
            <div className="home-video-wrap">
              <iframe
                title="LMS: What you need to know"
                src="https://www.youtube.com/embed/ZXKPNfw8lkw?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2020/05/Heros-Among-Us-Photo-1024x683.jpg"
              alt="Heroes Among Us"
              width={1024}
              height={683}
            />
            <p>
              <strong style={{ color: "#a284ba" }}>LMS INTERNATIONAL RESEARCH ROUNDTABLE</strong>
              <br />
              <strong style={{ color: "#339966" }}>&quot;Where Purpose Meets Progress&quot;</strong>
            </p>
            <p>
              <a href="https://leiomyosarcoma.info/" {...ext}>Learn more</a> about our international initiative to drive LMS-specific research and global collaboration to advance treatment options and impact treatment strategies and outcomes for patients.
            </p>
            <div className="home-btn-center">
              <Link href="/open-research" className="home-btn">
                Opening Every Door For Research Together
              </Link>
            </div>
          </div>
        </div>

        <div className="home-col home-col-center">
          <Image
            src="https://media.nlmsf.org/wp-content/uploads/2020/05/cropped-Untitled-design-87.png"
            alt=""
            width={399}
            height={303}
          />
          <h2>
            Click <Link href="/nlmsf-programs" className="support-link">Here</Link> to View Our support Programs
          </h2>
          <p className="heart-help">We Have A Heart To Help!</p>
          <h4>Subscribe To The Weekly News Tracker Newsletters</h4>
          <form className="home-newsletter-form" action="#" method="post" aria-label="Newsletter signup">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email address"
            />
            <button type="submit">Send</button>
          </form>
          <div className="home-seals">
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2021/03/Top-rated-Seal.jpg"
              alt="Top rated"
              width={253}
              height={119}
            />
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2021/03/Seals.jpg"
              alt="Seals"
              width={111}
              height={111}
            />
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
              alt="GuideStar"
              width={167}
              height={122}
            />
          </div>
        </div>

        <div className="home-col">
          <div className="home-col-bg">
            <div className="home-video-wrap">
              <iframe
                title="Chandalyn NLMSF"
                src="https://www.youtube.com/embed/lXVRLYplcRI?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h2>Chandalyn Williams, Ph.D</h2>
            <blockquote>
              <p>NLMSF Board Member</p>
              <p><em>&quot;The NLMSF - A Guiding Light to Face the Journey&quot;</em></p>
            </blockquote>
            <h2>Tembi Locke, Actress</h2>
            <div className="home-video-wrap">
              <iframe
                title="Tembi Locke NLMSF"
                src="https://www.youtube.com/embed/azkHE80lvto?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <blockquote>
              <p>Tembi Locke-Actress produced a Netflix mini series based on her best selling memoir &quot;From Scratch&quot; which chronicles her LMS journey with her husband.</p>
            </blockquote>
            <p><strong>Tembi selected the NLMSF as the technical advisor resource for this project.</strong></p>
          </div>
        </div>
      </section>

      <section className="home-windows">
        <div className="home-windows-inner">
          <Link href="/patient-perspectives">
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2022/01/Windows-of-Hope.png"
              alt=""
              className="home-windows-img"
              width={553}
              height={270}
            />
          </Link>
          <div className="home-windows-content">
            <Link href="/patient-perspectives">
              <h3 className="home-windows-title">Windows of Hope - Patient Perspectives of Support</h3>
            </Link>
            <p>Learn how other Patients and Caregivers are living through LMS.</p>
            <div className="home-btn-center">
              <Link href="/patient-perspectives" className="home-btn">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-partners">
        <h1>Our Partners In Patient Advocacy and Support</h1>
        <div className="home-partners-track">
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-32-300x38.jpg" alt="" width={300} height={38} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/7-asco.jpg" alt="" width={300} height={80} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-36.jpg" alt="" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-3.png" alt="" width={200} height={80} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-34.jpg" alt="" width={200} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-37.jpg" alt="" width={200} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-35.jpg" alt="" width={200} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2021/02/ECOG-300x81.jpg" alt="ECOG" width={300} height={81} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-5-300x136.png" alt="" width={300} height={136} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-33.jpg" alt="" width={200} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2021/03/Pcori-300x68.jpg" alt="PCORI" width={300} height={68} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/cb0a477898aea87bc1af0e7ddeaea647-1.png" alt="" width={150} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-2-300x133.png" alt="" width={300} height={133} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-7.png" alt="" width={150} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-4.png" alt="" width={150} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/Sarcoma-Oncology-Center.jpg" alt="" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/12/lazarex.jpg" alt="Lazarex" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/download-6-300x71.png" alt="" width={300} height={71} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/05/unnamed-38.jpg" alt="" width={200} height={50} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/06/unnamed-63-300x44.jpg" alt="" width={300} height={44} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2020/11/unnamed-74-1-300x167.jpg" alt="" width={300} height={167} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2021/11/CountmeIn.jpg" alt="Count Me In" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2022/03/University-of-Mannheim.jpg" alt="University of Mannheim" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2022/03/USC.jpg" alt="USC" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2022/03/royal-marsden.jpg" alt="Royal Marsden" width={200} height={60} />
          <Image src="https://media.nlmsf.org/wp-content/uploads/2022/03/McGill.jpg" alt="McGill" width={200} height={60} />
        </div>
      </section>

      <footer className="home-footer-copy">
        <p>Copyright &#169; 2020 | All Rights Reserved | National LeioMyoSarcoma Foundation</p>
        <p>Nonprofit Website</p>
      </footer>
    </div>
  );
}
