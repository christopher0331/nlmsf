import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./recorded-presentations.css";

export const metadata: Metadata = {
  title: "Recorded Presentations | NLMSF",
  description:
    "Education videos for patients and caregivers covering diagnosis, treatment, research, and caregiving.",
};

type VideoItem = {
  id: string;
  title: string;
  presenter: string;
  date: string;
  description?: string;
  url: string;
};

const clinicalTrialsVideos: VideoItem[] = [
  {
    id: "jVMw7irewYI",
    title: "General discussion about clinical trials and Peposertib (M3814) Trial",
    presenter: "Dr. Candace Haddox, Dana-Farber Cancer Institute and Harvard Medical School",
    date: "February 26, 2025",
    description:
      "Presentation of the novel Phase 1 Clinical Trial using Peposertib (M3814) and low dose Liposomal Doxorubicin in Patients with Metastatic Leiomyosarcoma and other Soft Tissue Sarcomas",
    url: "https://youtu.be/jVMw7irewYI",
  },
  {
    id: "h4mi-aJT1tk",
    title: "Zanzalintinib (XL092) Clinical Trial for Leiomyosarcoma",
    presenter: "Dr. Seth Pollack, Lurie Cancer Center, Northwestern University",
    date: "January 31, 2025",
    description:
      "Discussion of the Phase II Clinical Trial for Leiomyosarcoma patients with metastatic or surgically unresectable tumors using Zanzalintinib (XL092) (a Tyrosine Kinase Inhibitor)",
    url: "https://youtu.be/h4mi-aJT1tk",
  },
  {
    id: "EPeR4Wui3Bs",
    title: "STRASS 2/3 Clinical Trial for Retroperitoneal Leiomyosarcoma",
    presenter: "Dr. John Mullinax, Moffit Cancer Center",
    date: "January 2025",
    description:
      "Discussion of the STRASS 2/3 Clinical Trial for the Initial Treatment of Retroperitoneal Leiomyosarcoma and Liposarcoma",
    url: "https://youtu.be/EPeR4Wui3Bs",
  },
  {
    id: "kfOK0sNa4JQ",
    title: "Phase 1a/2 Clinical Trial of GI-102 for Advanced Sarcoma",
    presenter: "Dr. Vishu Avutu, Memorial Sloan Kettering Cancer Center",
    date: "August 2024",
    description:
      "GI-102 works by boosting the power of your immune system to find and kill cancer cells by blocking CTLA-4 and increasing immune cells through IL-2",
    url: "https://youtu.be/kfOK0sNa4JQ",
  },
  {
    id: "ioL0850rt7A",
    title: "Clinical Trials Perspectives: Panel Discussion",
    presenter: "Panel discussion by Sarcoma Medical Oncologists",
    date: "February 2024",
    url: "https://youtu.be/ioL0850rt7A",
  },
  {
    id: "AU46FmcSc3Y",
    title: "Lurbinectedin Clinical Trial Overview",
    presenter: "Dr. Gregory Cote, Massachusetts General Hospital",
    date: "August 8, 2023",
    description:
      "Dr. Cote provides a thorough overview of how clinical trials are done to bring new drugs such as Lurbinectedin to patients, and discusses his current clinical trial using Lurbinectedin with Doxorubicin",
    url: "https://youtu.be/AU46FmcSc3Y",
  },
];

const chemoVideos: VideoItem[] = [
  {
    id: "h6Ks9U7F5ek",
    title: "Sarcoma Treatmenting Counseling Program",
    presenter: "Dr. Mark Agulnik, City of Hope",
    date: "March 8, 2024",
    description:
      "An overview of the new City of Hope program to help sarcoma patients make the best treatment decisions, especially when considering clinical trials.",
    url: "https://youtu.be/h6Ks9U7F5ek",
  },
  {
    id: "zk6CNU11VE0",
    title: "The Use of Votrient in the Treatment of Sarcomas/Leiomyosarcoma",
    presenter: "Dr. Neeta Somaiah, Sarcoma Medical Oncologist, MD Anderson Cancer Center",
    date: "January 20, 2023",
    description: "Hosted by the NLMSF",
    url: "https://youtu.be/zk6CNU11VE0",
  },
];

const sarculatorVideos: VideoItem[] = [
  {
    id: "V7Rn7ZBCTw8",
    title: "The Sarculator Nomogram",
    presenter: "Dr. Nam Bui, Stanford Cancer Institute",
    date: "August 2024",
    description:
      "What is It and What is Its Role in the Treatment of Patients with Localized Sarcomas in the Extremities and the Retroperitoneal",
    url: "https://www.youtube.com/watch?v=V7Rn7ZBCTw8",
  },
];

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="video-item">
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="video-thumb"
      >
        <Image
          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={`${video.title} - Video Thumbnail`}
          width={640}
          height={360}
          sizes="(min-width: 768px) 320px, 100vw"
        />
        <span className="video-play">
          <i className="fas fa-play-circle" aria-hidden />
        </span>
      </a>
      <div className="video-body">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-presenter">{video.presenter}</p>
        <p className="video-date">{video.date}</p>
        {video.description && <p className="video-description">{video.description}</p>}
        <a href={video.url} className="video-link" target="_blank" rel="noopener noreferrer">
          <span className="video-link-icon">
            <i className="fas fa-play" aria-hidden />
          </span>
          Watch Video
        </a>
      </div>
    </article>
  );
}

export default function RecordedPresentationsPage() {
  return (
    <main className="recorded-presentations-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-inner">
              <svg className="hero-badge-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.007 9.007 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Newly Diagnosed
            </span>
          </div>
          <h1>Education Videos for Patients and Caregivers</h1>
          <p>
            Expert video resources to help you understand your diagnosis, treatment options,
            and care journey.
          </p>
          <div className="hero-tags">
            <a href="#new-diagnosis" className="hero-tag tag-indigo">
              New Diagnosis
            </a>
            <a href="#clinical-trials" className="hero-tag tag-pink">
              Clinical Trials
            </a>
            <a href="#treatments" className="hero-tag tag-emerald">
              Treatments
            </a>
            <a href="#research" className="hero-tag tag-sky">
              Research
            </a>
            <a href="#caregiving" className="hero-tag tag-amber">
              Caregiving
            </a>
          </div>
        </div>
      </section>

      <div className="page-content">
        <aside className="sidebar-card">
          <div className="sidebar-section">
            <h3 className="sidebar-heading">
              <span className="sidebar-heading-icon">
                <i className="fas fa-video" aria-hidden />
              </span>
              Video Categories
            </h3>
            <div className="sidebar-links">
              <a href="#clinical-trials" className="sidebar-link tag-pink">
                Clinical Trials
              </a>
              <a href="#chemotherapy" className="sidebar-link tag-emerald">
                Chemotherapy &amp; Targeted Agents
              </a>
              <a href="#sarculator" className="sidebar-link tag-indigo">
                Sarculator
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">
              <span className="sidebar-heading-icon">
                <i className="fas fa-book" aria-hidden />
              </span>
              Resources
            </h3>
            <div className="sidebar-links neutral">
              <Link href="/newly-diagnosed/treatment-options" className="sidebar-link neutral">
                Treatment Options
              </Link>
              <Link href="/newly-diagnosed/find-a-specialist" className="sidebar-link neutral">
                Find a Specialist
              </Link>
              <Link href="/patient-stories" className="sidebar-link neutral">
                Patient Stories
              </Link>
              <Link href="/support-groups" className="sidebar-link neutral">
                Support Groups
              </Link>
            </div>
          </div>

          <div className="sidebar-section need-help">
            <div className="need-help-inner">
              <h4>Need Help?</h4>
              <p>
                Our patient navigators are here to guide you through your leiomyosarcoma journey.
              </p>
              <Link href="/contact" className="need-help-button">
                <i className="fas fa-phone" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>
        </aside>

        <div className="content-area">
          <div className="page-intro">
            <h2 className="page-intro-title">Leiomyosarcoma Educational Resources</h2>
            <p className="page-intro-text">
              These educational videos feature leading sarcoma experts discussing important topics
              related to leiomyosarcoma. Browse through our curated collections covering clinical
              trials, treatment options, research updates, and more to help guide you through your
              LMS journey.
            </p>
          </div>

          <section id="clinical-trials" className="video-section red-section">
            <h2 className="video-section-title">Clinical Trials</h2>
            <div className="video-grid">
              {clinicalTrialsVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          <section id="chemotherapy" className="video-section teal-section">
            <h2 className="video-section-title">Chemotherapy and Targeted Agents</h2>
            <div className="video-grid">
              {chemoVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>

          <section id="sarculator" className="video-section blue-section">
            <h2 className="video-section-title">Sarculator</h2>
            <div className="video-grid">
              {sarculatorVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
