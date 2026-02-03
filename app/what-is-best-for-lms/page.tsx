import type { Metadata } from "next";
import Image from "next/image";
import "./what-is-best-for-lms.css";

export const metadata: Metadata = {
  title: "What Is Best for LMS | NLMSF",
  description:
    "Key information on leiomyosarcoma treatment approaches, surgical options, chemotherapy, and clinical tools like nomograms and Sarculator.",
};

export default function WhatIsBestForLmsPage() {
  return (
    <main className="best-lms-page">
      <section className="best-lms-hero">
        <div className="best-lms-hero-media" aria-hidden="true">
          <Image
            src="https://nlmsf.org/wp-content/uploads/2020/06/cropped-unnamed-52.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="best-lms-hero-content">
          <h1>What is best for LMS</h1>
          <p>
            A concise overview of treatment approaches, primary and secondary therapies, and
            decision-support tools for leiomyosarcoma.
          </p>
        </div>
      </section>

      <section className="best-lms-section">
        <h2>How do you fight leiomyosarcoma?</h2>
        <p>
          The primary approach for treating leiomyosarcomas involves surgical excision, encompassing
          the complete removal of the tumor and surrounding tissue through resection. Depending on
          the tumor&apos;s location, surgical procedures may incorporate specific reconstructive
          techniques.
        </p>
        <div className="best-lms-card">
          <h3>Surgery</h3>
          <p>
            Opting for surgery stands as the optimal choice for treating LMS. Complete tumor removal
            offers a promising chance for curing LMS. However, if residual cancer cells persist,
            there is an increased risk of cancer recurrence, either at the original site or in
            other parts of the body.
          </p>
        </div>
      </section>

      <section className="best-lms-section">
        <h2>Leiomyosarcoma treatment options?</h2>
        <p>
          The primary treatment for leiomyosarcoma involves surgery, with radiation therapy and
          chemotherapy frequently utilized alongside surgical intervention. Surgical procedures for
          leiomyosarcoma exhibit significant variability, contingent on factors such as tumor
          location and size. Jan 24, 2022.
        </p>
      </section>

      <section className="best-lms-section">
        <h2>What constitutes the primary treatment for leiomyosarcoma?</h2>
        <div className="best-lms-card">
          <h3>Chemotherapy</h3>
          <p>
            Chemotherapy, a potent drug treatment, employs powerful chemicals to eradicate cancer
            cells. This approach may be advised if complete surgical removal of leiomyosarcoma is
            not feasible or if the cancer has metastasized to other regions of the body. Apr 27,
            2023.
          </p>
          <p>
            First-line therapy for metastatic and/or unresectable leiomyosarcoma includes
            anthracycline or gemcitabine based regimens, which provide a median progression-free
            survival time of about 5 months and overall survival time between 14-16 months. Effective
            later-line therapies are limited. Mar 8, 2023.
          </p>
        </div>
      </section>

      <section className="best-lms-section">
        <h2>What constitutes the secondary treatment for leiomyosarcoma?</h2>
        <div className="best-lms-card">
          <h3>Trabectedin</h3>
          <p>
            EU-approved as a second-line treatment, demonstrating efficacy in leiomyosarcomas,
            liposarcomas, myxoid liposarcomas, and potential clinical benefits in various histological
            types (Demetri 2015; Le Cesne 2005; Samuels 2013; Yovine 2004) as of Oct 12, 2016.
          </p>
        </div>
      </section>

      <section className="best-lms-section">
        <h2>Utilizing Nomograms and Sarculator for Non-uterine and Uterine Leiomyosarcoma</h2>
        <div className="best-lms-card">
          <p>
            Memorial Sloan Kettering information on:{" "}
            <a
              href="https://www.mskcc.org/nomograms/uterine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uterine Leiomyosarcoma Nomogram Overall Survival Probability Following Surgery
            </a>
            .
          </p>
          <p>
            Our uterine leiomyosarcoma nomogram is a tool designed to predict the likelihood of
            survival at five years after undergoing surgery to remove the uterine leiomyosarcoma, a
            type of uterine cancer. It is not appropriate for patients who have not had surgical
            treatment for uterine leiomyosarcoma.
          </p>
          <p>
            Results produced by this tool are based on data from patients treated at MSK, a large
            research institution with surgeons who perform a high volume of uterine cancer
            procedures. This tool has been externally validated using data from patients treated at
            large, international sarcoma centers (see{" "}
            <a
              href="https://www.mskcc.org/nomograms/uterine/post_op"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supporting Publications
            </a>
            ). All results must be understood in the context of each patient&apos;s specific treatment
            plan. Patients and caregivers using this tool should discuss the result with the
            patient&apos;s physician.
          </p>
          <p>
            To gather the information required to use this nomogram, use{" "}
            <a
              href="https://www.mskcc.org/nomograms/uterine/post_op/worksheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              the worksheet
            </a>
            .
          </p>
        </div>
      </section>

      <section className="best-lms-section">
        <h2>Sarculator</h2>
        <div className="best-lms-card">
          <p>
            This application is tailored for medical professionals and is not intended for making
            clinical decisions, as the clinical efficacy of the two models is yet to be established.
            However, it serves as an informative tool to enhance physicians&apos; predictive
            capabilities.
          </p>
          <p>There are two kinds of predictions:</p>
          <ol>
            <li>
              RPS: 7 years of global survival (GS) and 7 years of disease-free survival (DFS) on
              patients with retroperitoneal area primary resected.
            </li>
            <li>
              STS: global survival at 5 and 10 years and accumulated incidence of distant metastasis
              on patients with resected primary limb sarcoma.
            </li>
          </ol>
          <p>
            For additional details, visit{" "}
            <a href="https://www.sarculator.com/" target="_blank" rel="noopener noreferrer">
              https://www.sarculator.com/
            </a>{" "}
            and explore further research articles on nomogram utilization within the sarcoma
            medical community at{" "}
            <a
              href="https://ascopubs.org/doi/10.1200/JCO.2017.35.15_suppl.11016"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ascopubs.org/doi/10.1200/JCO.2017.35.15_suppl.11016
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
