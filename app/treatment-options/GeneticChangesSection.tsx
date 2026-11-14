/**
 * "Understanding the Genetic Changes in Leiomyosarcoma" (AACR Project GENIE
 * study summary), sent by Annie Achee (Oct 15, 2026). Text is verbatim from
 * her Google Doc.
 */

const STUDY_PDF = "https://ar.iiarjournals.org/content/anticanres/46/7/3845.full.pdf";
export const NIH_GENETIC_TESTING_FACT_SHEET =
  "https://www.cancer.gov/about-cancer/causes-prevention/genetics/genetic-testing-fact-sheet";

const TOP_GENES = [
  { gene: "TP53", pct: 50.3 },
  { gene: "RB1", pct: 17.9 },
  { gene: "ATRX", pct: 15.9 },
];

export default function GeneticChangesSection() {
  return (
    <section id="genetic-changes" className="to-section">
      <div className="to-section-header indigo">
        <h2>Understanding the Genetic Changes in Leiomyosarcoma</h2>
      </div>
      <div className="to-panel">
        <div className="to-type-card">
          <h4>Leiomyosarcoma: An AACR Project Genie Study</h4>
          <p>
            This study analyzed 1,017 tumors from 957 LMS patients. Most genomic mutations were
            driven by the primary tumor: TP53 (50.3%), RB1 (17.9%), and ATRX (15.9%) followed by
            KMT2D, MED12, NOTCH1, ATM, PTEN, ROS1, FAT1, BRCA2, and NOTCH3. However, metastatic
            samples showed enrichment of IGF2 and AXIN1 alterations.
          </p>
          <p>
            These findings suggest follow-up investigations of IGF2 and AXIN1 alterations in the
            metastasis process.{" "}
            <a href={STUDY_PDF} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </div>

        <h3>A Patient-Friendly Research Summary</h3>
        <p>
          <strong>Study:</strong> Leiomyosarcoma: An AACR Project GENIE Study
        </p>

        <h4>What was this research about?</h4>
        <p>
          Leiomyosarcoma is a rare and often aggressive cancer that develops in smooth muscle
          tissue. One of the challenges researchers face is understanding why some tumors grow,
          return after treatment, or spread to other parts of the body.
        </p>
        <p>
          In this study, researchers examined genetic information from 1,017 tumor samples
          representing 957 patients with leiomyosarcoma.
        </p>
        <p>
          Their goal was to better understand which genetic alterations are most commonly found in
          LMS tumors and whether certain changes may be associated with metastatic disease —
          cancer that has spread beyond its original location.
        </p>

        <h4>What did researchers discover?</h4>
        <p>Researchers identified several genes that were frequently altered in LMS tumors.</p>
        <figure className="to-type-card" aria-label="Most frequently reported genetic alterations">
          <h5>Most frequently reported genetic alterations</h5>
          <div style={{ display: "grid", gap: "0.6rem", marginTop: "0.75rem" }}>
            {TOP_GENES.map(({ gene, pct }) => (
              <div
                key={gene}
                style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr 3.5rem", alignItems: "center", gap: "0.75rem" }}
              >
                <strong>{gene}</strong>
                <div style={{ background: "#eef2ff", borderRadius: 9999, height: "0.85rem", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${(pct / 60) * 100}%`,
                      height: "100%",
                      borderRadius: 9999,
                      background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    }}
                  />
                </div>
                <span>{pct}%</span>
              </div>
            ))}
          </div>
          <figcaption style={{ marginTop: "0.75rem", fontSize: "0.85rem", fontStyle: "italic" }}>
            Percentages reported in the study summary; they do not indicate an individual
            patient&apos;s risk.
          </figcaption>
        </figure>

        <h4>What do these genes do?</h4>
        <ul>
          <li>
            <strong>TP53:</strong> Helps protect cells from becoming cancerous by responding to DNA
            damage. Changes in this gene can allow abnormal cells to continue growing.
          </li>
          <li>
            <strong>RB1:</strong> Helps control when cells divide. When this gene is disrupted,
            cancer cells may multiply more easily.
          </li>
          <li>
            <strong>ATRX:</strong> Plays a role in maintaining chromosome structure and genetic
            stability. Changes in ATRX may help researchers understand how some LMS tumors develop
            and survive.
          </li>
        </ul>
        <p>
          Researchers also identified alterations in several other genes, including MED12, ATM,
          PTEN, and BRCA2, among others.
        </p>
        <p>
          These findings reinforce an important message: Leiomyosarcoma is not genetically
          identical in every patient. Different tumors may have different genetic characteristics,
          which could eventually help guide more individualized approaches to treatment.
        </p>

        <h4>An especially interesting finding: What happens when LMS spreads?</h4>
        <p>
          Researchers observed that two genes, IGF2 and AXIN1, had alterations that were more
          frequently represented in metastatic tumor samples.
        </p>
        <h5>Why is this important?</h5>
        <ul>
          <li>IGF2 is involved in signals that help cells grow and survive.</li>
          <li>AXIN1 helps regulate a cell-signaling pathway involved in growth and development.</li>
        </ul>
        <p>
          The findings raise an important scientific question: Could changes involving these genes
          contribute to the ability of LMS cells to spread or survive in other parts of the body?
        </p>
        <p>
          Researchers do not yet know the answer. The study identified an association, but it did
          not prove that these alterations cause metastasis.
        </p>
        <p>This discovery gives scientists two potentially valuable areas for further investigation.</p>

        <h4>What does this mean for patients and families?</h4>
        <p>
          Although this research does not immediately change treatment recommendations, it
          represents another step toward understanding the biology of leiomyosarcoma.
        </p>
        <p>The findings may help researchers:</p>
        <ol>
          <li>Better understand the genetic differences among LMS tumors.</li>
          <li>Investigate why certain tumors become metastatic.</li>
          <li>Identify biological pathways that might eventually become treatment targets.</li>
          <li>Explore how tumor genetic profiling could contribute to more personalized cancer care.</li>
        </ol>
        <p>
          It is important to understand that having one of these genetic alterations does not
          automatically predict whether a patient&apos;s cancer will spread or how they will respond
          to treatment.
        </p>
        <p>
          Additional research is necessary before these discoveries can be used to make clinical
          decisions.
        </p>

        <h4>Questions patients may wish to ask their oncologist</h4>
        <ul>
          <li>Has my tumor undergone comprehensive genomic or molecular profiling?</li>
          <li>Were alterations in TP53, RB1, ATRX, or other genes identified?</li>
          <li>Could any of my tumor&apos;s genetic findings help determine eligibility for a clinical trial?</li>
          <li>Would additional molecular testing be useful if my disease progresses?</li>
        </ul>

        <h4>The take-home message</h4>
        <p>Every research discovery helps build a clearer picture of leiomyosarcoma.</p>
        <p>
          By studying the genetic characteristics of nearly 1,000 patients, researchers are
          identifying patterns that may help explain how LMS develops and spreads.
        </p>
        <p>
          While these findings are still exploratory, they offer new directions for research aimed
          at understanding metastatic disease and identifying future therapeutic opportunities.
        </p>
        <p>
          For patients and families, the hope is that a deeper understanding of LMS biology will
          eventually lead to more precise treatments, better outcomes, and improved survivorship.
        </p>

        <div className="to-type-card">
          <h4>A Final Thought From the National Leiomyosarcoma Foundation</h4>
          <p>
            Research such as this reminds us why continued investment in understanding the biology
            of leiomyosarcoma is so important.
          </p>
          <p>
            Each discovery brings us closer to identifying the vulnerabilities of this complex
            cancer and, ultimately, developing more effective treatment strategies.
          </p>
          <p>
            Hope grows through research, collaboration, and the determination to find better
            answers for every patient facing leiomyosarcoma.
          </p>
        </div>

        <p>
          <em>
            Source:{" "}
            <a href={STUDY_PDF} target="_blank" rel="noopener noreferrer">
              Leiomyosarcoma: An AACR Project GENIE Study
            </a>{" "}
            — Anticancer Research, 2026.
          </em>
        </p>
        <p>
          Learn more about genetic testing:{" "}
          <a href={NIH_GENETIC_TESTING_FACT_SHEET} target="_blank" rel="noopener noreferrer">
            Genetic Testing Fact Sheet (National Cancer Institute)
          </a>
        </p>
      </div>
    </section>
  );
}
