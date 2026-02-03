import type { Metadata } from "next";
import Image from "next/image";
import "./uterine-lms-information.css";

export const metadata: Metadata = {
  title: "Uterine LMS Information | NLMSF",
  description:
    "Diagnostic and interventional imaging information, authorship, and staging definitions for uterine leiomyosarcoma.",
};

const stagingRows = [
  { stage: "I", definition: "Tumor limited to uterus" },
  { stage: "IA", definition: "< 5 cm" },
  { stage: "IB", definition: "> 5 cm" },
  { stage: "II", definition: "Tumor extends to the pelvis" },
  { stage: "IIA", definition: "Adnexal involvement" },
  { stage: "IIB", definition: "Tumor extends to involve other pelvic tissues" },
  {
    stage: "III",
    definition: "Tumor invades abdominal tissues (more than just protruding into the abdomen)",
  },
  { stage: "IIIA", definition: "One site" },
  { stage: "IIIB", definition: "More than one site" },
  { stage: "IIIC", definition: "Metastasis to the pelvis and/or para-aortic lymph nodes" },
  { stage: "IV", definition: "" },
  { stage: "IVA", definition: "Invasion of the bladder and/or rectum" },
  { stage: "IVB", definition: "Distant metastasis" },
];

export default function UterineLmsInformationPage() {
  return (
    <main className="uterine-lms-info-page">
      <section className="uli-hero">
        <div className="uli-hero-inner">
          <p className="uli-eyebrow">Uterine LMS</p>
          <h1>Uterine Leiomyosarcoma Information</h1>
          <p>Diagnostic and interventional imaging highlights and staging reference.</p>
        </div>
      </section>

      <section className="uli-section">
        <div className="uli-card">
          <h2>Diagnostic and Interventional Imaging</h2>
          <p>
            <a
              href="https://www.sciencedirect.com/journal/diagnostic-and-interventional-imaging/vol/100/issue/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Volume 100, Issue 10
            </a>
            , October 2019, Pages 619-634
          </p>
          <div className="uli-cover">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2023/09/1-s2.0-S2211568419X00091-cov200h.gif"
              alt="Diagnostic and Interventional Imaging cover"
              width={151}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className="uli-section">
        <div className="uli-card">
          <div className="uli-authors">
            <p>S. Sun</p>
            <p>P.A. Bonaffini</p>
            <p>S. Nougaret</p>
            <p>L. Fournier</p>
            <p>A. Dohan</p>
            <p>J. Chong</p>
            <p>J. Smith</p>
            <p>H. Addley</p>
            <p>C. Reinhold</p>
          </div>
          <h2 className="uli-heading">Uterine Leiomyosarcoma</h2>
          <div className="uli-body">
            <p>
              From Elsevier Research. Uterine leiomyomas, sometimes incorrectly colloquially
              referred to as uterine fibroids, are the most frequently encountered benign myomatous
              tumors of the uterus, being observed in up to 20-40% of reproductive-age women and
              70-80% of perimenopausal women. In addition, these benign tumors may become symptomatic
              in 20-50% of patients and subsequently produce pelvic pain, subfertility or abnormal
              uterine bleeding, requiring gynecologic hospitalization in about 30% of affected women.
            </p>
            <p>
              On the malignant spectrum, uterine sarcomas tend to occur in an older patient
              population when compared to leiomyomas, and only account for 3-7% of all uterine
              malignancies. They often present with the same symptoms as leiomyomas and thus cannot
              reliably be distinguished clinically.
            </p>
            <p>
              Leiomyosarcomas (LMSs) are the most common uterine sarcomas, with an estimated annual
              incidence of 0.5-7/100,000 per women, followed by endometrial stromal sarcomas with an
              annual incidence of 1-2/million per women. Given that leiomyomas may currently be
              managed with minimally invasive treatment, it is particularly important to distinguish
              them preoperatively from confounding malignant entities such as LMSs. This is aimed to
              avoid inadvertent dissemination by laparoscopic, which should not be the treatment of
              choice, or delaying diagnosis with conservative management such as uterine artery
              embolization.
            </p>
            <p>
              The misdiagnosis of a LMS for a benign leiomyoma could result in treatment delays and
              greater morbidity, given its poor prognosis and high propensity to locally recur and
              metastasize. On the basis of the FIGO 2009 classification, up to 68% of LMSs are
              diagnosed as stage I and only up to 22% are diagnosed as stage IV. Therefore, the
              imaging characteristics of the primary lesion, rather than secondary signs of
              malignancy, will ultimately help in differential diagnosis and drive treatment
              stratification. On average, 5-year survival rates range from 46-53%. Additionally,
              LMSs also have a 50-70% rate of recurrence, with up to 40% occurring in the lungs and
              up to 13% in the pelvis.
            </p>
          </div>
        </div>
      </section>

      <section className="uli-section">
        <div className="uli-card">
          <h2>FIGO 2009 Staging for Uterine LMS</h2>
          <div className="uli-table">
            <div className="uli-table-header">
              <span>Stage</span>
              <span>Definition</span>
            </div>
            {stagingRows.map((row) => (
              <div key={row.stage} className="uli-table-row">
                <span className="uli-stage">{row.stage}</span>
                <span>{row.definition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
