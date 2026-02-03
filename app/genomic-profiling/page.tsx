import type { Metadata } from "next";
import "./genomic-profiling.css";

export const metadata: Metadata = {
  title: "Genomic Profiling | NLMSF",
  description:
    "What is genomic profiling? Genetics vs. genomics in cancer, advanced genomic testing, who benefits, and the mechanism of precision cancer care.",
};

export default function GenomicProfilingPage() {
  return (
    <div className="genomic-profiling-page">
      {/* Hero */}
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">NLMSF Knowledge Hub</span>
            <h1 className="nlmsf-hero-title">What is Genomic Profiling?</h1>
            <p className="nlmsf-hero-subtitle">
              Genomic profiling represents a method employed to decipher the intricate genetic makeup associated with an individual person or a specific cell type, illuminating the intricate interplay of their genes among themselves and within their environment.
            </p>
          </div>
        </div>
      </section>

      <div className="nlmsf-page-wrapper">
        <div className="nlmsf-content-section">
          <div className="nlmsf-content-container">
            {/* Distinguishing Between Genetic and Genomic Testing */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">Distinguishing Between Genetic and Genomic Testing in Cancer</h2>
              <p className="genomic-lead">
                Within the realm of these complex subjects, the distinction between genetics and genomics is relatively straightforward. Genetics pertains to an individual&apos;s inherent genetic composition, while genomics predominantly concerns itself with unraveling the molecular composition of tumors.
              </p>
            </section>

            {/* Advanced genomic testing */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">Advanced genomic testing</h2>
              <p className="genomic-muted">
                Reviewed by{" "}
                <a href="https://www.cancercenter.com/physician-directory/maurie-markman" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                  Maurie Markman, MD
                </a>
                , President, Medicine &amp; Science – City of Hope Cancer Center – APRIL 21, 2022.
              </p>
              <p className="genomic-lead">
                Advanced genomic testing stands as a dedicated endeavor aimed at unveiling the DNA aberrations potentially propelling the growth of a distinct tumor. The revelation of genomic mutations unique to your particular cancer offers clinicians vital clues for formulating treatment strategies tailored to{" "}
                <a href="https://www.cancercenter.com/treatment-options/precision-medicine/targeted-therapy" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                  target these specific mutations
                </a>
                .
              </p>
            </section>

            {/* The Evolution of Cancer Care */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">The Evolution of Cancer Care</h2>
              <p className="genomic-lead">
                Traditionally, cancer care centered on classifying the disease based on its anatomical location, with treatment strategies following a generalized approach. In recent years, however, a profound shift has occurred as researchers and medical professionals discovered the distinct behaviors of tumors even within the same cancer type. Some cancers exhibit similarities to previously unrelated types. Genomic testing scrutinizes a tumor&apos;s unique profile, permitting physicians to consider therapeutic approaches that were previously unexplored.
              </p>
            </section>

            {/* Who Stands to Benefit? */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">Who Stands to Benefit?</h2>
              <p className="genomic-lead">
                Precision cancer care is an evolving science, and advanced genomic testing is not appropriate for every patient. Even when the test is recommended, it may not produce results that lead directly to a treatment plan. The analyses may help doctors consider more precise therapies in many cases, but not all mutations can be matched with known treatment options.
              </p>
              <p className="genomic-lead">
                Doctors may recommend the tests to patients whose cancer did not adequately respond to a treatment plan prescribed for their tumor, whether it was a particular{" "}
                <a href="https://www.cancercenter.com/treatment-options/chemotherapy" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                  chemotherapy
                </a>{" "}
                regimen,{" "}
                <a href="https://www.cancercenter.com/treatment-options/radiation-therapy" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                  radiation
                </a>{" "}
                and/or{" "}
                <a href="https://www.cancercenter.com/treatment-options/surgery" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                  surgery
                </a>
                . The tests may also be appropriate for patients with certain rare cancers or other unusual circumstances, to offer further options or clarity in the search for a more targeted treatment plan.
              </p>
            </section>

            {/* The Mechanism */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">The Mechanism</h2>
              <p className="genomic-lead">
                Should you and your oncologist determine that you are an appropriate candidate for genomic testing, the process unfolds as follows:
              </p>
              <ol className="genomic-list">
                <li>
                  A{" "}
                  <a href="https://www.cancercenter.com/diagnosing-cancer/diagnostic-procedures/biopsy" className="nlmsf-link" target="_blank" rel="noopener noreferrer">
                    biopsy
                  </a>{" "}
                  is performed on your tumor.
                </li>
                <li>Cancer cells are meticulously isolated and extracted from the biopsy, with their DNA subsequently subjected to sequencing in a laboratory setting.</li>
                <li>State-of-the-art equipment scrutinizes the sequenced genetic profile for irregularities that dictate the tumor&apos;s functionality.</li>
                <li>Laboratory analysis assesses whether these irregularities correspond to known mutations, thereby suggesting potential treatment options that might not have been previously considered.</li>
                <li>If a match is identified, your oncologist may leverage the results to propose treatments previously employed to target analogous mutations.</li>
                <li>Your oncologist will elucidate the findings and discuss potential novel treatment avenues, collaboratively formulating a tailored treatment plan that aligns with your specific circumstances.</li>
                <li>If you or your caregivers seek further insight, we provide resources and educational support on this evolving domain of medical science.</li>
              </ol>
            </section>

            {/* The Promise of Advanced Genomic Testing */}
            <section className="genomic-section">
              <h2 className="nlmsf-section-title">The Promise of Advanced Genomic Testing</h2>
              <p className="genomic-lead">
                Recent advancements have pushed the boundaries even further, with genomic tests scrutinizing the cancer itself. These highly targeted evaluations meticulously investigate the DNA profile of the patient&apos;s tumor, seeking genetic irregularities that can be matched with drug therapies that may not have previously been contemplated.
              </p>
              <p className="genomic-lead">
                This paradigm shift embraces the essence of precision cancer care, moving beyond the one-size-fits-all approach that can lead to unnecessary and potentially harmful treatments. Instead, advanced genomic testing focuses its attention on a single individual—the patient undergoing tumor testing—paving the way for truly personalized and tailored cancer care.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
