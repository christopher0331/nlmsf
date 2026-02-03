import type { Metadata } from "next";
import Image from "next/image";
import "./nlmsf-count-me-in-project-2023.css";

export const metadata: Metadata = {
  title: "NLMSF Count Me In Project 2023 | NLMSF",
  description:
    "Count Me In Project details, participation info, and resources for LMS patients and caregivers.",
};

export default function NlmsfCountMeInProject2023Page() {
  return (
    <div className="count-me-in-page">
      <div className="count-me-in-container">
        <Image
          src="https://nlsmf.org/wp-content/uploads/2021/11/CountmeIn.jpg"
          alt="Count Me In Project"
          className="count-me-in-hero-image"
          width={1200}
          height={800}
        />

        <p>
          The LMS PATIENT COMMUNITIES in the United State and Canada are in the &quot;driver&apos;s seat&quot; to accelerate new
          Research in an effort to advance increase treatments options for Leiomyosarcoma.
        </p>

        <p>The research data generated from the sample collection / data collection process with patients and caregivers will generate information on:</p>

        <ul>
          <li>
            Family connections to the disease (germline data analysis) that will shed light on new strategies for advancing research strategies and clinical trial design to facilitate acceleration of treatment advancements for this disease.
          </li>
          <li>
            Clinical Trial patients who either did well or did not do well on certain chemotherapy drug regimens will be evaluated for unmet needs in research and trial design to advance the field of finding viable treatment options to treat the disease through new research paradigms.
          </li>
          <li>
            Evaluation tumor response to repurpose drugs, working with the Broad Institute and their library of over 7,000 drugs for tumor response assessment that will shed light on needed research strategies going forward.
          </li>
        </ul>

        <p>
          “ For participants who opt in to receiving their shared learnings, Count Me In staff will send participants information on their own inherited and cancer-related genetic mutations. Sharing data with participants is a further step in direct engagement and provides patients with more benefits from participating in research. Count Me In plans to explore more opportunities to offer shared learnings across more cancer research projects in the future.
        </p>

        <p>
          <i>
            The Count Me Leiomyosarcoma Project is made possible by federal funding from the Cancer Moonshot, as part of the Participant Engagement and Cancer Genome Sequencing (PE-CGS) Network.
          </i>
        </p>

        <p>
          <i>- From the Count Me In Team</i>
        </p>

        <p>
          All volunteer patients who wish to participate and contribute to the Sarcoma Research going forward, have a unique opportunity to make all the difference. The project was launched in 2022 for continuation this year and beyond. De-Identified data will be carefully handled and only housed in the COUNT ME IN laboratory, through patients&apos; informed consent. Questions may be directed to Ben Zola, Project Coordinator:{" "}
          <b>
            <a href="mailto:bzola@broadinstitute.org">bzola@broadinstitute.org</a>
          </b>
          , The Count Me In Mission, History, and Milestones:{" "}
          <b>
            <a href="https://joincountmein.org/about-us" target="_blank" rel="noopener noreferrer">
              https://joincountmein.org/about-us
            </a>
          </b>
        </p>

        <p>
          Talk to your Oncologist / Sarcoma Specialist about participating in the COUNT ME IN PROJECT - and be a part of an exciting and very promising new Leiomyosarcoma research initiative funded by the National Institutes of Health, that holds great hope for the future direction of new research vistas and ultimately treatment strategies that will advance SURVIVORSHIP of this disease.
        </p>

        <p>
          For more information on the Count Me In Project for Leiomyosarcoma and learn more from the project and its management team as we as register for participation, email{" "}
          <b>
            <a href="mailto:info@lmsproject.org">info@lmsproject.org</a>
          </b>{" "}
          or visit{" "}
          <b>
            <a href="https://joincountmein.org" target="_blank" rel="noopener noreferrer">
              joincountmein.org
            </a>
          </b>
          .
        </p>

        <p>
          <strong>Additional Resources</strong>
        </p>
        <ul>
          <li>
            <a
              href="https://nlsmf.org/wp-content/uploads/2023/01/Leiomyosarcoma-NLF-Flyer-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leiomyosarcoma NLF Flyer
            </a>
          </li>
          <li>
            <a
              href="https://nlsmf.org/wp-content/uploads/2023/01/48.-ForYourPhysician_LMS_PE-CGS-updated-June-22.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Your Physician FAQs
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=EACPtT7cnK4" target="_blank" rel="noopener noreferrer">
              Count Me In Discussion with Ben Zola
            </a>
          </li>
        </ul>

        <p>
          <strong>Additional Resources</strong>
        </p>
        <ul>
          <li>
            <a
              href="https://nlsmf.org/wp-content/uploads/2023/01/Leiomyosarcoma-NLF-Flyer-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leiomyosarcoma NLF Flyer
            </a>
          </li>
          <li>
            <a
              href="https://nlsmf.org/wp-content/uploads/2023/01/48.-ForYourPhysician_LMS_PE-CGS-updated-June-22.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Your Physician FAQs
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=EACPtT7cnK4" target="_blank" rel="noopener noreferrer">
              Count Me In Discussion with Ben Zola
            </a>
          </li>
        </ul>

        <blockquote>
          &quot;With courage and dedication, we can inspire not only others, but also ourselves.&quot; - JEFF, an LMS Patient Perspective
        </blockquote>
      </div>
    </div>
  );
}
