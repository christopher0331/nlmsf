import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./related-educational-videos.css";

export const metadata: Metadata = {
  title: "Related Educational Videos | NLMSF",
  description:
    "Educational recordings about circulating tumor DNA (ctDNA) testing and liquid biopsies for Leiomyosarcoma patients and healthcare providers.",
};

type VideoItem = {
  id: string;
  title: string;
  presenter: string;
  presenterTitle: string;
  date: string;
  description: string;
  url: string;
  initials: string;
};

const ctDnaVideos: VideoItem[] = [
  {
    id: "fhsyH8bJn-l",
    title: "Circulating Tumor DNA Status and Future Directions for Sarcoma",
    presenter: "Expert Panel",
    presenterTitle: "Multiple Institutions",
    date: "2023",
    description:
      "Panel discussion with experts including Dr. Nam Quoc Bui, Dr. Brian Compton, Dr. Elizabeth Davis, Dr. Erlinda Maria Gordon, Dr. Matthew Hemming, Dr. Elise Nasif, Dr. Joanna Pryzbyl, Dr. David Schulman and Dr. Jonathan Trent.",
    url: "https://www.youtube.com/watch?v=fhsyH8bJn-l",
    initials: "P",
  },
  {
    id: "4DdhdoP8BOQ",
    title: "The Role of Circulating Tumor DNA (ctDNA) in Leiomyosarcoma",
    presenter: "Dr. Kristin Ganjoo & Dr. Katie Baker",
    presenterTitle: "Stanford University & Natera/Signatera",
    date: "March 27, 2022",
    description:
      "Dr. Ganjoo and Dr. Baker discuss how circulating tumor DNA testing can be used in the management of Leiomyosarcoma.",
    url: "https://youtu.be/4DdhdoP8BOQ",
    initials: "KG",
  },
  {
    id: "Lhh_uvjK8uU",
    title:
      "Circulating DNA in Uterine Leiomyosarcoma and Benign Uterine Leiomyosarcomas",
    presenter: "Dr. Joanna Przybyl",
    presenterTitle: "The Research Institute of Montreal at McGill University",
    date: "February 24, 2022",
    description:
      "Dr. Przybyl presents research on using circulating DNA to differentiate between uterine LMS and benign conditions.",
    url: "https://youtu.be/Lhh_uvjK8uU",
    initials: "JP",
  },
  {
    id: "Gy2u7QRLuqU",
    title:
      "The Role of Nomograms in the Treatment of LMS and the Potential Future Impact of Circulating Tumor DNA",
    presenter: "Dr. Kenneth Cardona",
    presenterTitle: "Emory University Winship Cancer Institute, Atlanta, GA",
    date: "February 17, 2022",
    description:
      "Dr. Cardona discusses the role of nomograms and the potential impact of circulating tumor DNA on LMS treatment.",
    url: "https://youtu.be/Gy2u7QRLuqU",
    initials: "KC",
  },
  {
    id: "fqo32_wgRpU",
    title: "Current LMS/Sarcoma Research Projects and Perspectives on ctDNA",
    presenter: "Dr. Dale Shepherd",
    presenterTitle: "Cleveland Clinic, Cleveland, OH",
    date: "February 2, 2022",
    description:
      "Dr. Shepherd discusses current LMS/sarcoma research and the status of ctDNA applications for sarcoma.",
    url: "https://youtu.be/fqo32_wgRpU",
    initials: "DS",
  },
  {
    id: "a98XOq_BE6k",
    title: "ct-DNA Proof of Concept Research for Sarcoma",
    presenter: "Dr. Brian Crompton",
    presenterTitle: "Dana-Farber Cancer Institute, Boston, MA",
    date: "November 30, 2021",
    description:
      "Dr. Crompton presents proof-of-concept research on circulating tumor DNA for sarcoma.",
    url: "https://youtu.be/a98XOq_BE6k",
    initials: "BC",
  },
];

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="video-card emerald">
      <div className="youtube-badge">YouTube Podcast</div>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="video-link emerald"
      >
        <div className="video-thumbnail">
          <Image
            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            alt={`${video.title} - Video Thumbnail`}
            width={640}
            height={360}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
          />
          <i className="fas fa-play-circle video-play-icon" aria-hidden />
        </div>
      </a>
      <div className="presenter-info">
        <div className="presenter-avatar emerald">
          <span className="presenter-initial emerald">{video.initials}</span>
        </div>
        <div>
          <h5 className="presenter-name emerald">{video.presenter}</h5>
          <p className="presenter-title">{video.presenterTitle}</p>
        </div>
      </div>
      <h4 className="video-topic">{video.title}</h4>
      <p className="video-date">
        <i className="far fa-calendar" aria-hidden /> {video.date}
      </p>
      <p className="video-description">{video.description}</p>
      <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link emerald">
        <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
      </a>
    </article>
  );
}

export default function RelatedEducationalVideosPage() {
  return (
    <main className="related-videos-page">
      <section className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon">
              <i className="fas fa-dna" aria-hidden />
            </div>
            <span>Patient Resources</span>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">ctDNA Recordings</span>
          </h1>
          <div className="hero-divider" />
          <div className="hero-features">
            <span className="feature-tag">
              <i className="fas fa-flask" aria-hidden /> Research
            </span>
            <span className="feature-tag">
              <i className="fas fa-vial" aria-hidden /> Testing
            </span>
            <span className="feature-tag">
              <i className="fas fa-heartbeat" aria-hidden /> Monitoring
            </span>
          </div>
          <p className="hero-description">
            Educational recordings about circulating tumor DNA (ctDNA) testing and liquid biopsies
            for Leiomyosarcoma patients and healthcare providers.
          </p>
        </div>
      </section>

      <div className="main-content-wrapper">
        <aside className="sidebar">
          <div className="sidebar-navigation">
            <h3 className="sidebar-title">ctDNA Resources</h3>
            <ul className="sidebar-links">
              <li className="sidebar-link-item active">
                <a href="#circulating-tumor-dna" className="sidebar-link">
                  <i className="fas fa-angle-right" aria-hidden /> Liquid Biopsy Research
                </a>
              </li>
              <li className="sidebar-link-item">
                <a href="#understanding-ctdna" className="sidebar-link">
                  <i className="fas fa-angle-right" aria-hidden /> Understanding ctDNA
                </a>
              </li>
              <li className="sidebar-link-item">
                <a href="#patient-resources" className="sidebar-link">
                  <i className="fas fa-angle-right" aria-hidden /> Patient Resources
                </a>
              </li>
              <li className="sidebar-link-item">
                <a href="#clinical-trials" className="sidebar-link">
                  <i className="fas fa-angle-right" aria-hidden /> Related Clinical Trials
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-cta">
            <div className="cta-gradient">
              <h4>Join Our Research Community</h4>
              <p>Help advance LMS research by joining our community or making a donation.</p>
              <a
                href="https://nlmsf.org/donate/"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Research
              </a>
            </div>
          </div>
        </aside>

        <div className="main-content">
          <section id="circulating-tumor-dna" className="content-section">
            <h2 className="section-title emerald">Circulating Tumor DNA and Liquid Biopsies</h2>
            <div className="content-panel emerald">
              <div className="panel-header">
                <div className="icon-circle emerald">
                  <i className="fas fa-vial" aria-hidden />
                </div>
                <div>
                  <h3>Liquid Biopsy Research</h3>
                  <p>Advancements in ctDNA testing for LMS</p>
                </div>
              </div>
              <p className="panel-text">
                These videos discuss the emerging field of circulating tumor DNA (ctDNA) testing
                and liquid biopsies, which offer potential for less invasive monitoring of
                Leiomyosarcoma.
              </p>
              <div className="videos-grid">
                {ctDnaVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </section>

          <section id="understanding-ctdna" className="content-section">
            <h2 className="section-title emerald">Understanding ctDNA</h2>
            <div className="content-panel emerald">
              <p className="panel-text">
                Learn how ctDNA testing works, why it matters, and how it may impact monitoring
                and treatment planning for sarcoma patients.
              </p>
            </div>
          </section>

          <section id="patient-resources" className="content-section">
            <h2 className="section-title emerald">Patient Resources</h2>
            <div className="content-panel emerald">
              <p className="panel-text">
                Explore NLMSF resources that can help you navigate testing, treatment decisions,
                and clinical trial options.
              </p>
              <div className="resources-links">
                <Link href="/personal-advocacy">Personal Advocacy</Link>
                <Link href="/psychosocial-guidance">Psychosocial Guidance</Link>
                <Link href="/questions-to-ask-your-sarcoma-surgical-or-radiation-specialists">
                  Questions to Ask Your Specialists
                </Link>
              </div>
            </div>
          </section>

          <section id="clinical-trials" className="content-section">
            <h2 className="section-title emerald">Related Clinical Trials</h2>
            <div className="content-panel emerald">
              <p className="panel-text">
                Looking for active or upcoming trials? Start with our education videos and then
                visit the clinical trials resources to learn more about eligibility and next
                steps.
              </p>
              <div className="resources-links">
                <Link href="/recorded-presentations">Recorded Presentations</Link>
                <Link href="/events">Education Videos Library</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
