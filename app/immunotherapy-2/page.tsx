import type { Metadata } from "next";
import Image from "next/image";
import "./immunotherapy-2.css";

export const metadata: Metadata = {
  title: "Immunotherapy in Sarcoma & LMS | NLMSF",
  description:
    "Evidence, clinical trials, and expert presentations on immunotherapy approaches for sarcoma and leiomyosarcoma.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function Immunotherapy2Page() {
  return (
    <main className="imm-page">
      {/* Hero */}
      <section className="imm-hero">
        <div className="imm-hero-content">
          <div className="imm-badge">
            <span className="imm-badge-dot" aria-hidden="true" />
            <span>Research Publication</span>
          </div>
          <h1>Immunotherapy in Sarcoma &amp; LMS</h1>
          <div className="imm-divider" />
          <p>
            Evidence, clinical trials, and expert presentations on immunotherapy
            approaches for sarcoma and leiomyosarcoma.
          </p>
          <div className="imm-tags">
            <span className="imm-tag indigo">
              <i className="fas fa-flask" aria-hidden /> Clinical Trials
            </span>
            <span className="imm-tag purple">
              <i className="fas fa-video" aria-hidden /> Expert Videos
            </span>
            <span className="imm-tag blue">
              <i className="fas fa-shield-alt" aria-hidden /> PD-L1/Checkpoint
            </span>
            <span className="imm-tag teal">
              <i className="fas fa-microscope" aria-hidden /> Sarcoma Research
            </span>
          </div>
        </div>
        <div className="imm-hero-decor decor-one" aria-hidden="true" />
        <div className="imm-hero-decor decor-two" aria-hidden="true" />
      </section>

      <div className="imm-container">
        {/* Nav */}
        <nav className="imm-nav">
          <h3>Jump to</h3>
          <a href="#overview">Overview</a>
          <a href="#lms-updates">LMS Updates &amp; Trials</a>
          <a href="#videos">Expert Videos</a>
          <a href="#foundations">Foundational Resources</a>
          <a href="#checkpoint">Checkpoint Inhibitors</a>
        </nav>

        {/* Overview */}
        <section id="overview" className="imm-section">
          <h2 className="imm-section-title purple">Overview</h2>
          <div className="imm-panel purple">
            <div className="imm-panel-header">
              <div className="imm-icon purple">
                <i className="fas fa-info-circle" aria-hidden />
              </div>
              <div>
                <h3>Immunotherapy for Sarcoma &amp; LMS</h3>
                <p>Curated links and resources for easy reading</p>
              </div>
            </div>
            <p className="imm-panel-text">
              Immunotherapy is an evolving area of cancer treatment that
              harnesses the body&apos;s own immune system to fight disease.
              Research into its application for sarcomas — including
              leiomyosarcoma — is advancing through clinical trials, checkpoint
              inhibitor studies, and novel vaccine approaches. Below you will
              find curated resources covering the latest findings, expert video
              presentations, and foundational information on immunotherapy in the
              sarcoma context.
            </p>
          </div>
        </section>

        {/* LMS Immunotherapy Updates / Clinical Trials */}
        <section id="lms-updates" className="imm-section">
          <h2 className="imm-section-title indigo">
            LMS Immunotherapy Updates &amp; Clinical Trials
          </h2>
          <div className="imm-panel indigo">
            <div className="imm-panel-header">
              <div className="imm-icon indigo">
                <i className="fas fa-flask" aria-hidden />
              </div>
              <div>
                <h3>Research &amp; Trial Results</h3>
                <p>Key publications and clinical trial data</p>
              </div>
            </div>

            <div className="imm-card-grid">
              <a
                href="https://clinicaltrials.gov/ct2/show/study/NCT03074318#contacts"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-capsules" aria-hidden />
                </div>
                <h4>Avelumab + Trabectedin</h4>
                <p>
                  Treating patients with liposarcoma or leiomyosarcoma that is
                  metastatic or cannot be removed by surgery.
                </p>
                <span className="imm-card-source">ClinicalTrials.gov · NCT03074318</span>
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/29308311"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-microscope" aria-hidden />
                </div>
                <h4>M2-Macrophage Infiltration &amp; PD-L1</h4>
                <p>
                  Increased infiltration of M2-macrophages, T-cells and PD-L1
                  expression in high-grade leiomyosarcomas supports
                  immunotherapeutic strategies.
                </p>
                <span className="imm-card-source">PubMed</span>
              </a>
              <a
                href="https://www.discovercarebelieve.org/app/uploads/2015/01/5688-PD-L1-and-Immunotherapy-White-Paper.pdf"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-file-alt" aria-hidden />
                </div>
                <h4>PD-L1 &amp; Immunotherapy Overview</h4>
                <p>
                  White paper covering PD-L1 biology and its role in
                  immunotherapy treatment approaches.
                </p>
                <span className="imm-card-source">Discover Care Believe</span>
              </a>
              <a
                href="https://www.fredhutch.org/en/news/releases/2017/immune-profiling-sarcomas-shows-susceptibility-immunotherapy.html"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-dna" aria-hidden />
                </div>
                <h4>Immune Profiling of Sarcomas</h4>
                <p>
                  First extensive immune profiling of sarcomas shows some likely
                  susceptible to immunotherapy.
                </p>
                <span className="imm-card-source">Fred Hutch</span>
              </a>
              <a
                href="https://www.onclive.com/web-exclusives/exceptional-responder-to-pembrolizumab-guides-immunotherapy-progress-in-leiomyosarcoma"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-star" aria-hidden />
                </div>
                <h4>Exceptional Responder to Pembrolizumab</h4>
                <p>
                  Guides immunotherapy progress in leiomyosarcoma based on an
                  exceptional response case.
                </p>
                <span className="imm-card-source">OncLive</span>
              </a>
              <a
                href="https://clinicalsarcomaresearch.biomedcentral.com/articles/10.1186/s13569-017-0077-3"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-bullseye" aria-hidden />
                </div>
                <h4>PRAME Overexpression</h4>
                <p>
                  Overexpressed PRAME is a potential immunotherapy target in
                  sarcoma subtypes.
                </p>
                <span className="imm-card-source">Clinical Sarcoma Research</span>
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/28440953"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-chart-bar" aria-hidden />
                </div>
                <h4>Nivolumab Phase 2 Study</h4>
                <p>
                  Immunotherapy with single-agent nivolumab for advanced
                  leiomyosarcoma of the uterus — results of a phase 2 study.
                </p>
                <span className="imm-card-source">PubMed</span>
              </a>
              <a
                href="https://www.news-medical.net/news/20170503/Study-suggests-how-existing-and-emerging-immunotherapy-treatments-could-be-successful-for-sarcomas.aspx"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-newspaper" aria-hidden />
                </div>
                <h4>Immunotherapy Promise for Sarcomas</h4>
                <p>
                  How existing and emerging immunotherapy treatments could be
                  successful for sarcomas, particularly LMS and pleomorphic
                  sarcoma.
                </p>
                <span className="imm-card-source">News Medical</span>
              </a>
            </div>
          </div>

          {/* Web Presentations sub-section */}
          <div className="imm-panel indigo imm-panel-sub">
            <div className="imm-panel-header">
              <div className="imm-icon indigo">
                <i className="fas fa-desktop" aria-hidden />
              </div>
              <div>
                <h3>Web Presentations</h3>
                <p>
                  Immunotherapy for sarcoma &amp; leiomyosarcoma
                </p>
              </div>
            </div>
            <div className="imm-card-grid cols-3">
              <a
                href="https://www.fredhutch.org/en/news/releases/2017/06/immune-responses-from-early-study-of-novel-sarcoma-vaccine.html"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-syringe" aria-hidden />
                </div>
                <h4>Novel Sarcoma Vaccine</h4>
                <p>Immune responses from early study of a novel sarcoma vaccine.</p>
                <span className="imm-card-source">Fred Hutch</span>
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/28440953"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-file-medical" aria-hidden />
                </div>
                <h4>Nivolumab for uLMS</h4>
                <p>
                  Phase 2 results for single-agent nivolumab in advanced uterine
                  leiomyosarcoma.
                </p>
                <span className="imm-card-source">PubMed</span>
              </a>
              <a
                href="https://clinicalsarcomaresearch.biomedcentral.com/articles/10.1186/s13569-017-0077-3"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-bullseye" aria-hidden />
                </div>
                <h4>PRAME in Sarcoma</h4>
                <p>
                  PRAME as a potential immunotherapy target across sarcoma subtypes.
                </p>
                <span className="imm-card-source">Clinical Sarcoma Research</span>
              </a>
            </div>
          </div>

          {/* CRI Webinars */}
          <div className="imm-panel indigo imm-panel-sub">
            <div className="imm-panel-header">
              <div className="imm-icon indigo">
                <i className="fas fa-broadcast-tower" aria-hidden />
              </div>
              <div>
                <h3>CRI Immunotherapy Webinars</h3>
                <p>Monthly webinar series from Cancer Research Institute</p>
              </div>
            </div>
            <p className="imm-panel-text">
              The full series of monthly immunotherapy webinars from Cancer
              Research Institute, covering the latest advances across cancer
              types.
            </p>
            <a
              href="https://www.cancerresearch.org/webinars"
              className="imm-cta-btn"
              {...ext}
            >
              <i className="fas fa-external-link-alt" aria-hidden />
              Browse CRI Webinars
            </a>
          </div>
        </section>

        {/* Expert Videos */}
        <section id="videos" className="imm-section">
          <h2 className="imm-section-title teal">Expert Videos</h2>
          <div className="imm-panel teal">
            <div className="imm-panel-header">
              <div className="imm-icon teal">
                <i className="fas fa-video" aria-hidden />
              </div>
              <div>
                <h3>Expert Presentations</h3>
                <p>
                  Key video presentations from Drs. Singh, Chmielowski, Wilky,
                  and George
                </p>
              </div>
            </div>
            <div className="imm-video-grid">
              <a
                href="https://www.youtube.com/watch?v=yyZffpH0SQE"
                className="imm-video-card"
                {...ext}
              >
                <div className="imm-video-thumb">
                  <Image
                    src="https://img.youtube.com/vi/yyZffpH0SQE/maxresdefault.jpg"
                    alt="Dr. Arun Singh — Early-Stage Trial of Immunotherapy"
                    width={480}
                    height={270}
                  />
                  <div className="imm-play-icon" aria-hidden="true">
                    <i className="fas fa-play" />
                  </div>
                </div>
                <div className="imm-video-body">
                  <h4>An Early-Stage Trial of Immunotherapy for Advanced Sarcomas</h4>
                  <p>Dr. Arun Singh · 2015</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=s_1hlQNOXEQ"
                className="imm-video-card"
                {...ext}
              >
                <div className="imm-video-thumb">
                  <Image
                    src="https://img.youtube.com/vi/s_1hlQNOXEQ/maxresdefault.jpg"
                    alt="Dr. Bartosz Chmielowski — LMS Immunotherapy Clinical Trials"
                    width={480}
                    height={270}
                  />
                  <div className="imm-play-icon" aria-hidden="true">
                    <i className="fas fa-play" />
                  </div>
                </div>
                <div className="imm-video-body">
                  <h4>Leiomyosarcoma: Immunotherapy Clinical Trials</h4>
                  <p>Dr. Bartosz Chmielowski · 2017</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=PR-sqscSt1I"
                className="imm-video-card"
                {...ext}
              >
                <div className="imm-video-thumb">
                  <Image
                    src="https://img.youtube.com/vi/PR-sqscSt1I/maxresdefault.jpg"
                    alt="Dr. Wilky — Immunotherapy Trial in Sarcoma"
                    width={480}
                    height={270}
                  />
                  <div className="imm-play-icon" aria-hidden="true">
                    <i className="fas fa-play" />
                  </div>
                </div>
                <div className="imm-video-body">
                  <h4>Dr. Wilky on Immunotherapy Trial in Sarcoma</h4>
                  <p>Dr. Breelyn Wilky · 2017</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=Zv-Zjf09haA"
                className="imm-video-card"
                {...ext}
              >
                <div className="imm-video-thumb">
                  <Image
                    src="https://img.youtube.com/vi/Zv-Zjf09haA/maxresdefault.jpg"
                    alt="Dr. Suzanne George — PD-1 Inhibitor in uLMS"
                    width={480}
                    height={270}
                  />
                  <div className="imm-play-icon" aria-hidden="true">
                    <i className="fas fa-play" />
                  </div>
                </div>
                <div className="imm-video-body">
                  <h4>Efficacy With PD-1 Inhibitor in Uterine Leiomyosarcoma</h4>
                  <p>Dr. Suzanne George · 2017</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Foundational Resources */}
        <section id="foundations" className="imm-section">
          <h2 className="imm-section-title blue">Foundational Resources</h2>
          <div className="imm-panel blue">
            <div className="imm-panel-header">
              <div className="imm-icon blue">
                <i className="fas fa-book-medical" aria-hidden />
              </div>
              <div>
                <h3>NCI &amp; CRI Resources</h3>
                <p>
                  Foundational information on immunotherapy from leading
                  institutions
                </p>
              </div>
            </div>
            <div className="imm-card-grid cols-3">
              <a
                href="https://www.cancer.gov/about-cancer/treatment/types/immunotherapy"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-landmark" aria-hidden />
                </div>
                <h4>Immunotherapy to Treat Cancer</h4>
                <p>
                  Comprehensive NCI resource on immunotherapy types, how they
                  work, and side effects.
                </p>
                <span className="imm-card-source">National Cancer Institute</span>
              </a>
              <a
                href="https://cancerresearch.org/immunotherapy/cancer-types/sarcoma"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-ribbon" aria-hidden />
                </div>
                <h4>Immunotherapy for Sarcoma</h4>
                <p>
                  How immunotherapy is changing the outlook for patients with
                  sarcoma.
                </p>
                <span className="imm-card-source">Cancer Research Institute</span>
              </a>
              <a
                href="https://www.cancerresearch.org/webinars"
                className="imm-card"
                {...ext}
              >
                <div className="imm-card-icon">
                  <i className="fas fa-broadcast-tower" aria-hidden />
                </div>
                <h4>CRI Monthly Webinars</h4>
                <p>
                  Monthly immunotherapy webinar series covering the latest
                  advances from CRI.
                </p>
                <span className="imm-card-source">Cancer Research Institute</span>
              </a>
            </div>
          </div>
        </section>

        {/* Checkpoint Inhibitors */}
        <section id="checkpoint" className="imm-section">
          <h2 className="imm-section-title purple">Checkpoint Inhibitors</h2>
          <div className="imm-panel purple">
            <div className="imm-panel-header">
              <div className="imm-icon purple">
                <i className="fas fa-shield-alt" aria-hidden />
              </div>
              <div>
                <h3>Checkpoint Inhibitors for LMS</h3>
                <p>
                  Currently being explored as a treatment approach for
                  leiomyosarcoma
                </p>
              </div>
            </div>
            <p className="imm-panel-text">
              Checkpoint inhibitors work by blocking proteins that prevent the
              immune system from attacking cancer cells. Researchers are actively
              investigating their use in leiomyosarcoma, with ongoing clinical
              trials evaluating their efficacy both as monotherapy and in
              combination with other agents.
            </p>
            <div className="imm-video">
              <iframe
                title="Checkpoint Inhibitors for LMS"
                src="https://www.youtube.com/embed/v9NBUeU3PG0?rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href="https://clinicaltrials.gov/search?cond=sarcoma&term=immunotherapy"
              className="imm-cta-btn"
              {...ext}
            >
              <i className="fas fa-search" aria-hidden />
              Search Immunotherapy Clinical Trials
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
