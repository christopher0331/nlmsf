import type { Metadata } from "next";
import Image from "next/image";
import "./lms-count-me-in-project.css";

export const metadata: Metadata = {
  title: "LMS Count Me In Project | Patients Take Action | NLMSF",
  description:
    "Participate in the Broad Institute's LMS Count Me In Project at no cost. Share samples, medical records, and your LMS journey to accelerate leiomyosarcoma research.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function LmsCountMeInProjectPage() {
  return (
    <div className="lms-count-me-in-page">
      <section className="count-me-in-hero">
        <h2 className="count-me-in-section-title">Patients Take Action</h2>
        <div className="count-me-in-logo">
          <Image
            src="https://nlmsf.org/wp-content/uploads/2023/02/Coun-Me-In-Logo-1.png"
            alt="Count Me In logo"
            width={300}
            height={120}
          />
        </div>
        <h3 className="count-me-in-heading">
          <strong>Leiomyosarcoma</strong> <strong>Patients</strong>
        </h3>
      </section>

      <div className="count-me-in-content">
        <p>
          Would you like to personally help advance LMS research? Well now you can by participating in the Broad Institute&apos;s <strong><em>LMS Count Me In Project.</em></strong>
        </p>
        <p>
          The <strong><em>National Leiomyosarcoma Foundation</em></strong> is partnering with Count Me In to inform patients about this exciting project and to encourage them to participate at <strong>NO COST.</strong>
        </p>
        <p>
          Count Me In&apos;s LMS project is a non-profit initiative, bringing patients and researchers together, to accelerate discoveries in cancer research. The LMS project is supported by a grant from the <strong><em>National Cancer Institute</em></strong>.
        </p>
        <p>
          If you&apos;ve ever been diagnosed with LMS, you can join the LMS project by sharing your samples, copies of your medical records, and your experiences. Information collected and shared will be de-identified, before being shared widely with researchers to speed discoveries.
        </p>

        <h2 className="count-me-in-h2">How do you participate?</h2>
        <p>
          By giving permission to obtain your medical records, saliva, blood, and stored tissue samples, and providing information about your personal LMS journey.
        </p>
        <p>
          <strong><em>Visit </em></strong>
          <a href="https://lmsproject.org/" {...ext}><strong><em>https://lmsproject.org</em></strong></a>
          <strong><em> to learn more about participation.</em></strong>
        </p>
        <p>
          There is also a{" "}
          <a href="https://lmsproject.org/for-your-physician" {...ext}><strong>&quot;For Your Physician&quot;</strong> document</a>
          {" "}on the Count Me In website, with more information about the project to share with your Oncologist/Sarcoma Specialist.
        </p>
        <p>
          We hope that you will decide to participate in this exciting and very promising new Leiomyosarcoma research initiative, that holds great promise for a better understanding of LMS, to help pave the way for novel research and future survival treatments.
        </p>

        <blockquote className="count-me-in-quote">
          <p>&quot;With courage and dedication, we can inspire not only others, but ourselves&quot;.</p>
          <cite>Jeff, LMS Patient Perspective</cite>
        </blockquote>
      </div>
    </div>
  );
}
