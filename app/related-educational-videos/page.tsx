import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./related-educational-videos.css";

export const metadata: Metadata = {
  title: "ctDNA Recordings | NLMSF",
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
  customImage?: string;
};

const ctDnaVideos: VideoItem[] = [
  {
    id: "1GWZejubPNo",
    title:
      "Current Status of Circulating Tumor DNA for Sarcomas — Discussion by a Panel of Experts",
    presenter: "Expert Panel — Five Institutions",
    presenterTitle:
      "Dana-Farber, Stanford, Princess Margaret, James Cancer Center & McGill University",
    date: "November 2025",
    description:
      "Five leading physician-scientists discuss the current landscape of ctDNA and liquid biopsy research in sarcoma and leiomyosarcoma. The panel covers the unique challenges of detecting ctDNA in soft tissue sarcomas, emerging evidence that ctDNA levels can predict recurrence before imaging, and novel assay approaches — including tracking structural variants — that may enable earlier intervention for high-risk patients.",
    url: "https://www.youtube.com/watch?v=1GWZejubPNo",
    initials: "P",
  },
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
    customImage: "/images/nlmsf_logo_no_background-removebg-preview.png",
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

const featured = ctDnaVideos[0];
const rest = ctDnaVideos.slice(1);

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rev-card group"
    >
      <div className="rev-thumb">
        <Image
          src={video.customImage ?? `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={video.title}
          width={640}
          height={360}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="rev-play">
          <i className="fas fa-play" aria-hidden />
        </div>
      </div>
      <div className="rev-body">
        <h3 className="rev-title">{video.title}</h3>
        <p className="rev-presenter">{video.presenter}</p>
        <p className="rev-inst">{video.presenterTitle}</p>
        <p className="rev-date">
          <i className="far fa-calendar-alt" aria-hidden /> {video.date}
        </p>
        <p className="rev-desc">{video.description}</p>
      </div>
    </a>
  );
}

export default function RelatedEducationalVideosPage() {
  return (
    <main className="rev-page">
      <section className="rev-hero">
        <div className="rev-hero-inner">
          <span className="rev-badge">
            <i className="fas fa-dna" aria-hidden /> Patient Resources
          </span>
          <h1>ctDNA Recordings</h1>
          <p>
            Educational recordings about circulating tumor DNA (ctDNA) testing and
            liquid biopsies for Leiomyosarcoma patients and healthcare providers.
          </p>
          <div className="rev-tags">
            <span><i className="fas fa-flask" aria-hidden /> Research</span>
            <span><i className="fas fa-vial" aria-hidden /> Testing</span>
            <span><i className="fas fa-heartbeat" aria-hidden /> Monitoring</span>
          </div>
        </div>
      </section>

      {/* Featured / latest video */}
      <section className="rev-featured">
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rev-featured-link group"
        >
          <div className="rev-featured-thumb">
            <Image
              src={featured.customImage ?? `https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`}
              alt={featured.title}
              width={1280}
              height={720}
              sizes="(min-width: 768px) 60vw, 100vw"
              priority
            />
            <div className="rev-play rev-play-lg">
              <i className="fas fa-play" aria-hidden />
            </div>
          </div>
          <div className="rev-featured-body">
            <span className="rev-latest-tag">Latest</span>
            <h2>{featured.title}</h2>
            <p className="rev-featured-presenter">{featured.presenter}</p>
            <p className="rev-featured-inst">{featured.presenterTitle}</p>
            <p className="rev-featured-date">
              <i className="far fa-calendar-alt" aria-hidden /> {featured.date}
            </p>
            <p className="rev-featured-desc">{featured.description}</p>
          </div>
        </a>
      </section>

      {/* Video grid */}
      <section className="rev-grid-section">
        <h2 className="rev-section-heading">More ctDNA &amp; Liquid Biopsy Recordings</h2>
        <div className="rev-grid">
          {rest.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="rev-resources">
        <div className="rev-res-card">
          <h3>Understanding ctDNA</h3>
          <p>
            Learn how ctDNA testing works, why it matters, and how it may impact
            monitoring and treatment planning for sarcoma patients.
          </p>
        </div>
        <div className="rev-res-card">
          <h3>Patient Resources</h3>
          <p>
            Explore NLMSF resources to navigate testing, treatment decisions, and
            clinical trial options.
          </p>
          <div className="rev-res-links">
            <Link href="/personal-advocacy">Personal Advocacy</Link>
            <Link href="/psychosocial-guidance">Psychosocial Guidance</Link>
            <Link href="/questions-to-ask-your-sarcoma-surgical-or-radiation-specialists">
              Questions to Ask Your Specialists
            </Link>
          </div>
        </div>
        <div className="rev-res-card">
          <h3>Related Clinical Trials</h3>
          <p>
            Looking for active or upcoming trials? Visit our clinical trials
            resources to learn about eligibility and next steps.
          </p>
          <div className="rev-res-links">
            <Link href="/recorded-presentations">Recorded Presentations</Link>
            <Link href="/events">Education Videos Library</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
