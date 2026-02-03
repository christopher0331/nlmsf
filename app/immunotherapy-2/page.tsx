import type { Metadata } from "next";
import "./immunotherapy-2.css";

export const metadata: Metadata = {
  title: "Immunotherapy in Sarcoma & LMS | NLMSF",
  description:
    "Evidence, clinical trials, and expert presentations on immunotherapy approaches for sarcoma and leiomyosarcoma.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function Immunotherapy2Page() {
  return (
    <div className="immunotherapy-2-page">
      <section className="wp-hero">
        <div className="wp-hero-inner">
          <span className="wp-hero-badge">NLMSF Knowledge Hub</span>
          <h1 className="wp-hero-title">Immunotherapy in Sarcoma &amp; LMS</h1>
          <p className="wp-hero-sub">
            Evidence, clinical trials, and expert presentations on immunotherapy approaches for sarcoma and leiomyosarcoma.
          </p>
        </div>
      </section>

      <div className="immunotherapy-2-layout">
        <aside className="wp-sidebar">
          <nav className="wp-nav" aria-label="On this page">
            <a className="wp-nav-link" href="#intro">Overview</a>
            <a className="wp-nav-link" href="#lms-updates">LMS Immunotherapy Updates</a>
            <a className="wp-nav-link" href="#videos">Expert Videos</a>
            <a className="wp-nav-link" href="#foundations">CRI &amp; Foundational Resources</a>
            <a className="wp-nav-link" href="#checkpoint">Checkpoint Inhibitors</a>
          </nav>
          <div className="wp-sidebar-cta">
            <h4>Clinical Trials</h4>
            <p>Search sarcoma immunotherapy trials.</p>
            <a className="wp-cta-btn" href="https://clinicaltrials.gov/search?cond=sarcoma&term=immunotherapy" {...ext}>
              Find Trials
            </a>
          </div>
        </aside>

        <div className="content-container">
          <section id="intro" className="section">
            <h2 className="section-title gradient-text">Immunotherapy for Sarcoma &amp; LMS</h2>
            <p className="muted">Below are curated links and resources for easy reading.</p>
          </section>

          <section id="lms-updates" className="section">
            <h2 className="section-title gradient-text">LMS Immunotherapy Updates / Clinical Trials</h2>
            <div className="card" id="lms-updates-card">
              <div className="lms-updates-inner">
                <p className="lms-updates-heading"><strong>LMS IMMUNOTHERAPY UPDATES/CLINICAL TRIALS</strong></p>

                <h4><strong><a href="https://cancerresearch.org/immunotherapy/cancer-types/sarcoma" {...ext}>How is Immunotherapy Changing the Outlook for Patients with Sarcoma?</a></strong></h4>

                <p><strong><a href="https://clinicaltrials.gov/ct2/show/study/NCT03074318#contacts" {...ext}>Avelumab and Trabectedin in Treating Patients With Liposarcoma or Leiomyosarcoma That is Metastatic or Cannot Be Removed by Surgery</a></strong></p>
                <p><strong><a href="https://www.ncbi.nlm.nih.gov/pubmed/29308311" {...ext}>Increased infiltration of M2-macrophages, T-cells and PD-L1 expression in high-grade leiomyosarcomas supports immunotherapeutic strategies</a></strong></p>

                <p><strong><a href="https://www.youtube.com/watch?v=yyZffpH0SQE" {...ext}>An Early-Stage Trial of Immunotherapy for Advanced Sarcomas</a></strong> — video by Dr. Arun Singh, 2015</p>

                <p><strong><a href="https://www.cancerresearch.org/we-are-cri/home/cancer-types/sarcoma" {...ext}>CRI – Sarcoma Immunotherapy – Cancer Research Institute</a></strong></p>

                <p><strong><a href="https://www.news-medical.net/news/20170503/Study-suggests-how-existing-and-emerging-immunotherapy-treatments-could-be-successful-for-sarcomas.aspx" {...ext}>Current and ongoing immunotherapy treatments hold promise for sarcomas – in particular, these studies are looking at Leiomyosarcomas and pleomorphic sarcoma</a></strong></p>

                <p><strong><a href="https://www.youtube.com/watch?v=s_1hlQNOXEQ" {...ext}>Leiomyosarcoma: Immunotherapy Clinical Trials</a></strong> — video by Dr. Bartosz Chmielowski, 2017</p>
                <p><strong><a href="https://www.youtube.com/watch?v=PR-sqscSt1I" {...ext}>Dr. Wilky on Immunotherapy Trial in Sarcoma</a></strong> — by Dr. Wilky, 2017</p>
                <p><strong><a href="https://www.youtube.com/watch?v=Zv-Zjf09haA" {...ext}>Efficacy With PD-1 Inhibitor in Uterine Leiomyosarcoma</a></strong> — video by Dr. Suzanne George, 2017</p>

                <p><strong><a href="https://www.onclive.com/web-exclusives/exceptional-responder-to-pembrolizumab-guides-immunotherapy-progress-in-leiomyosarcoma" {...ext}>Exceptional Responder to Pembrolizumab Guides Immunotherapy Progress in Leiomyosarcoma</a></strong></p>
                <p><strong><a href="https://www.fredhutch.org/en/news/releases/2017/immune-profiling-sarcomas-shows-susceptibility-immunotherapy.html" {...ext}>First extensive immune profiling of sarcomas shows some likely susceptible to immunotherapy</a></strong></p>

                <p><strong><a href="https://www.cancer.gov/about-cancer/treatment/types/immunotherapy" {...ext}>Immunotherapy to Treat Cancer</a></strong></p>
                <p><strong><a href="https://www.discovercarebelieve.org/app/uploads/2015/01/5688-PD-L1-and-Immunotherapy-White-Paper.pdf" {...ext}>PD-L1 and Immunotherapy – An overview</a></strong></p>

                <h3 className="lms-subheading"><strong>Web presentations on Immunotherapy for Sarcoma / Leiomyosarcoma:</strong></h3>
                <p><strong><a href="https://www.fredhutch.org/en/news/releases/2017/06/immune-responses-from-early-study-of-novel-sarcoma-vaccine.html" {...ext}>Immune responses from early study of novel sarcoma vaccine</a></strong></p>
                <p><strong><a href="https://www.ncbi.nlm.nih.gov/pubmed/28440953" {...ext}>Immunotherapy with single-agent nivolumab for advanced leiomyosarcoma of the uterus: Results of a phase 2 study</a></strong></p>
                <p><strong><a href="https://clinicalsarcomaresearch.biomedcentral.com/articles/10.1186/s13569-017-0077-3" {...ext}>Overexpressed PRAME is a potential immunotherapy target in sarcoma subtypes</a></strong></p>

                <h2 className="lms-h2"><strong><a href="https://www.cancerresearch.org/webinars" {...ext}>Cancer immunotherapy webinars</a></strong></h2>
                <p>The full series of monthly immunotherapy webinars from Cancer Research Institute.</p>

                <h3 className="lms-subheading"><strong>Below is a video explanation of Checkpoint Inhibitors which is currently being explored for LMS.</strong></h3>
                <div className="video-wrap">
                  <iframe
                    title="Checkpoint Inhibitors for LMS"
                    src="https://www.youtube.com/embed/v9NBUeU3PG0?rel=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="videos" className="section">
            <h2 className="section-title gradient-text">Expert Videos</h2>
            <p className="muted">Key presentations referenced above from Drs. Singh, Chmielowski, Wilky, and George.</p>
          </section>

          <section id="foundations" className="section">
            <h2 className="section-title gradient-text">Foundational Resources</h2>
            <ul className="resource-list">
              <li><a className="resource-link" href="https://www.cancer.gov/about-cancer/treatment/types/immunotherapy" {...ext}>NCI: Immunotherapy to Treat Cancer</a></li>
              <li><a className="resource-link" href="https://cancerresearch.org/immunotherapy/cancer-types/sarcoma" {...ext}>CRI: Immunotherapy for Sarcoma</a></li>
            </ul>
          </section>

          <section id="checkpoint" className="section">
            <h2 className="section-title gradient-text">Checkpoint Inhibitors</h2>
            <p className="muted">Background video and context provided in the section above.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
