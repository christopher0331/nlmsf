import type { Metadata } from "next";
import Image from "next/image";
import "./events-staged-2.css";

export const metadata: Metadata = {
  title: "Patient and Family Education Programs | NLMSF",
  description:
    "Educational workshops and patient programs hosted by the National Leiomyosarcoma Foundation.",
};

export default function EventsStaged2Page() {
  return (
    <main className="events-staged-2-page">
      <div className="events-staged-2-content">
        <section className="events-staged-2-hero">
          <h1>Patient and Family Education Programs</h1>
          <p>
            <strong>
              The NLMSF collaborates annually with major sarcoma centers of
              excellence to bring important and special educational
              opportunities to the LMS Community. Listed are program
              collaborations current and past, (some recorded).
            </strong>
          </p>
          <p>
            <span>
              Note: Due to the COVID-19 health crisis, all five in-person LMS
              education programs originally scheduled in 2020 were postponed.
              More updates will be provided as available. However, special
              education programs are taking place by phone or online meeting
              within the new NLMSF Patient Caregiver Initiatives: NLMSF
              Patient-Caregiver Advocacy Roundtable and NLMSF Survivors Inspire
              Peer Network.
            </span>
          </p>
        </section>

        <section className="events-staged-2-section">
          <h2>
            EDUCATIONAL WORKSHOPS <br /> of the <br />
            National Leiomyosarcoma Foundation
          </h2>
          <Image
            src="https://nlmsf.org/wp-content/uploads/2020/07/image.png"
            alt="National Leiomyosarcoma Foundation workshops logo"
            width={474}
            height={123}
          />
        </section>

        <section className="events-staged-2-section">
          <div className="events-staged-2-grid">
            <div className="events-staged-2-card">
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/02/PatientCareAdvocacy.jpg"
                alt="Patient Care Advocacy"
                width={112}
                height={115}
              />
              <h3>Patients - Caregivers Advocacy Roundtable</h3>
              <p>
                <strong>First MONDAY of each month – 7 pm EDT</strong>
              </p>
              <p>
                <strong>
                  Join the Patient-Caregiver Advocacy Roundtable Virtual
                  Meeting
                </strong>
              </p>
              <p>
                <strong>
                  Guest Speakers featured for most meetings on topics selected
                  by participants
                </strong>
              </p>
            </div>
            <div className="events-staged-2-card">
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/02/SurvivorInspire.png"
                alt="Survivors Inspire Peer Network"
                width={211}
                height={191}
              />
              <h3>Survivors Inspire Peer Network</h3>
              <p>
                <strong>Third THURSDAY of each month – 7 pm EDT</strong>
              </p>
              <p>
                <strong>
                  Join the Survivors Inspire Peer Network Virtual Meeting
                </strong>
              </p>
              <p>
                <strong>
                  Guest speaker featured at not meetings on important topics
                  selected by participants.
                </strong>
              </p>
              <p>
                <strong>
                  Contact{" "}
                  <a href="mailto:annieachee@aol.com">annieachee@aol.com</a> or
                  call 303 808-3437 to join the virtual meetings. The NLMSF
                  Newsletters and FB Support Group will always announce
                  scheduled meetings and guest speakers for each meeting.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Leiomyosarcoma Education Videos for Patients and Caregivers</h2>
          <h3>TOPICS</h3>
          <ul className="events-staged-2-topics">
            <li>ABC’s of a New Diagnosis</li>
            <li>Basic Research</li>
            <li>Caregiving</li>
            <li>Chemotherapy and Targeted Agents</li>
            <li>Circulating Tumor DNA and Liquid Biopsies</li>
            <li>Clinical Trials</li>
            <li>Cutaneous Leiomyosarcoma</li>
            <li>General Information on Sarcoma Care – Multidisciplinary Approach</li>
            <li>Imaging/Radiology</li>
            <li>Immunotherapy</li>
            <li>
              The Microbiome (Gut Health) and its Impact on the Effectiveness of
              Chemotherapy Treatment
            </li>
            <li>Nutrition</li>
            <li>Pathology</li>
            <li>PECOMA</li>
            <li>
              How to Participate in Patient Centered Research - Count-Me-In /
              Pattern.org
            </li>
            <li>Radiation Therapy</li>
            <li>Sarculator</li>
            <li>Surgical Treatment</li>
            <li>Survivorship Care Planning</li>
            <li>
              Uterine Fibroids – What You Should Know Before Having Fibroid
              Surgery, Leiomyomas vs. Leiomyosarcoma
            </li>
          </ul>
        </section>

        <section className="events-staged-2-section">
          <h2>ABC&apos;s of a New Diagnosis</h2>
          <p>The ABC’s of a New Diagnosis 5/22/23 (Presented by the NLMSF)</p>
          <p>
            Video recording:{" "}
            <a href="https://youtu.be/9pnKTkzqOw0" target="_blank" rel="noopener noreferrer">
              https://youtu.be/9pnKTkzqOw0
            </a>
          </p>
          <p>
            Introduction to the ABC’s of a New Diagnosis 1/16/22 (Presented by
            the NLMSF)
          </p>
          <p>
            Video recording:{" "}
            <a href="https://youtu.be/BJBK8bJOOaw" target="_blank" rel="noopener noreferrer">
              https://youtu.be/BJBK8bJOOaw
            </a>
          </p>
        </section>

        <section className="events-staged-2-section">
          <h2>Basic Research</h2>
          <p>
            <a
              href="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Chudasamas-Presentation.svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Chudasamas-Presentation.svg"
                alt="Dr. Chudasama presentation"
                width={624}
                height={351}
              />
            </a>
          </p>
          <p>
            <strong>The Importance of Telemeres in Leiomyosarcoma</strong>{" "}
            presented by Dr. Priya Chudasama of Heibelberg University, Germany
            (7/19/2022) Hosted by the NLMSF.
          </p>
          <p>
            Video recording:{" "}
            <a
              href="https://www.youtube.com/watch?v=s5xJqpD0oMA"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youtube.com/watch?v=s5xJqpD0oMA
            </a>
          </p>
          <div className="events-staged-2-speaker-list">
            <p>LMS Connect Live 3/18/22 (Hosted by the NLMSF)</p>
            <p>
              Program Moderator{" "}
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Jonathan-Trent.jpg"
                alt="Dr. Jonathan Trent"
                width={175}
                height={219}
              />{" "}
              Jonathan Trent, MD, PhD
              <br />
              Sylvester Comprehensive Cancer Center, Miami University, Miami, FL
            </p>
            <p>Speakers:</p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Hemming-Photo.jpg"
                alt="Dr. Hemming"
                width={200}
                height={172}
              />{" "}
              Matthew Hemming, MD, PhD
              <br />
              Research Sarcoma Oncologist, Harvard Medical School/Dana-Farber
              Cancer Institute, Boston, MA
            </p>
            <p>
              Discusses his work to develop and interrogate much needed
              laboratory models of leiomyosarcoma.
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/04/Nicholas-Llosa-pic.jpg"
                alt="Dr. Nicholas Llosa"
                width={200}
                height={200}
              />{" "}
              Nicolas Llosa, MD
              <br />
              Research Medical Oncologist
              <br />
              Johns Hopkins University, Baltimore, MD
            </p>
            <p>
              Discusses his work to translate a better understanding of the
              immune microenvironment of LMS into improved immunotherapies for
              patients affected by this condition.
            </p>
            <p>
              Video recording:{" "}
              <a href="https://youtu.be/lgXPwxdB" target="_blank" rel="noopener noreferrer">
                https://youtu.be/lgXPwxdB
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Caregiving</h2>
          <p>
            Lararex Foundation’s Dr. Marya Shegog discusses “Caregiving Counts”
            8/20/22 (Hosted by the NLMSF)
          </p>
          <p>
            Video recording:{" "}
            <a href="https://youtu.be/EhYR2LHtSdU" target="_blank" rel="noopener noreferrer">
              https://youtu.be/EhYR2LHtSdU
            </a>
          </p>
        </section>

        <section className="events-staged-2-section">
          <h2>Chemotherapy and Targeted Agents</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/neeta_somaiah-photo.jpg.resize-200x300.jpg"
                alt="Neeta Somaiah"
                width={200}
                height={300}
              />{" "}
              Neeta Somaiah, MD
              <br />
              Sarcoma Medical Oncologist, MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              Current Treatment Options for Leiomyosarcoma (20 June 2024)
              <br />
              Hosted by the NLMSF.
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/09/download-300x300.png"
                alt="Elise Nassif"
                width={250}
                height={250}
              />{" "}
              Elise Nassif, MD, PhD.
              <br />
              Sarcoma Medical Oncologist, MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              How patient co-morbidities can impact chemotherapy treatment (14
              Apr 2023)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/qcwqPNfPkpA" target="_blank" rel="noopener noreferrer">
                https://youtu.be/qcwqPNfPkpA
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Jonathan-Trent.jpg"
                alt="Dr. Jonathan Trent"
                width={200}
                height={250}
              />{" "}
              Jonathan Trent, MD, PhD.
              <br />
              Sarcoma Medical Oncologist
              <br />
              Sylvester Comprehensive Cancer Center, Miami, FL
            </p>
            <p>
              The Use of Trabectedin in the Treatment of LMS (29 Jan 2023)
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/efuZXkaRncQ" target="_blank" rel="noopener noreferrer">
                https://youtu.be/efuZXkaRncQ
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/neeta_somaiah-photo.jpg.resize-200x300.jpg"
                alt="Neeta Somaiah"
                width={200}
                height={300}
              />{" "}
              Neeta Somaiah, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              The Use of Votrient in the Treatment of Sarcomas (Leiomyosarcoma)
              (20 Jan 23)
              <br />
              Hosted by the NLMSF.
              <br />
              <a href="https://youtu.be/zk6CNU11VE0" target="_blank" rel="noopener noreferrer">
                https://youtu.be/zk6CNU11VE0
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Circulating Tumor DNA and Liquid Biopsies</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <a href="https://youtu.be/fhsyH8bJn_I" target="_blank" rel="noopener noreferrer">
                <strong>
                  Circulating Tumor DNA Status and Future Directions for Sarcoma
                </strong>
              </a>{" "}
              Panel included Dr. Nam Quoc Bui, Dr. Brian Compton, Dr. Elizabeth
              Davis, Dr. Erlinda Maria Gordon, Dr. Matthew Hemming, Dr. Elise
              Nasif, Dr. Joanna Pryzbyl, Dr. David Schulman and Dr. Jonathan
              Trent.
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/02/Circulating-Tumor-DNA-ct-DNA-Panel-300x188.png"
                alt="ctDNA panel"
                width={300}
                height={188}
              />{" "}
              Hosted by the NLMSF. Video recording:{" "}
              <a
                href="https://www.youtube.com/watch?v=fhsyH8bJn-l"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/watch?v=fhsyH8bJn-l
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/02/Ganjoo-Photo.jpg"
                alt="Kristin Ganjoo"
                width={200}
                height={200}
              />{" "}
              Kristin Ganjoo, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              Stanford University Stanford, CA
            </p>
            <p>
              Katie Baker, PhD. Medical Science Liaison – Oncology at
              Natera/Signatera
            </p>
            <p>
              The Role of Circulating Tumor DNA (ctDNA) in Leiomyosarcoma
              (3/27/22)
              <br />
              Hosted by the NLMSF. Video Recording:{" "}
              <a href="https://youtu.be/4DdhdoP8BOQ" target="_blank" rel="noopener noreferrer">
                https://youtu.be/4DdhdoP8BOQ
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Joanna-Przybyl-Photo-300x300.jpg"
                alt="Joanna Przybyl"
                width={225}
                height={225}
              />{" "}
              Joanna Przybyl, PhD.
              <br />
              The Research Institute of Montreal at McGill University
              <br />
              Montreal, Canada
            </p>
            <p>
              Circulating DNA in Uterine Leiomyosarcoma and Benign Uterine
              Leiomyosarcomas Presented by Dr. Przybyl (2/24/2022)
              <br />
              Hosted by the NLMSF. Video Recording:{" "}
              <a href="https://youtu.be/Lhh_uvjK8uU" target="_blank" rel="noopener noreferrer">
                https://youtu.be/Lhh_uvjK8uU
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Cardonna-Photo.jpg"
                alt="Kenneth Cardona"
                width={200}
                height={252}
              />{" "}
              Kenneth Cardona, MD, FACS
              <br />
              Sarcoma Surgeon
              <br />
              Emory University Winship Cancer Institute Atlanta, GA
            </p>
            <p>
              The Role of Nomograms in the Treatment of LMS and the Potential
              Future Impact of Circulating Tumor DNA on the Treatment of LMS
              Presented by Dr. Cardona (2/17/22)
              <br />
              Hosted by the NLMSF. Video Recording:{" "}
              <a href="https://youtu.be/Gy2u7QRLuqU" target="_blank" rel="noopener noreferrer">
                https://youtu.be/Gy2u7QRLuqU
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/02/Dr-dale-shepard.jpg"
                alt="Dale Shepherd"
                width={215}
                height={268}
              />{" "}
              Dale Shepherd, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              Cleveland Clinic, Cleveland, OH
            </p>
            <p>
              Current LMS/Sarcoma research projects at the Cleveland Clinic and
              perspectives on the statue of ctDNA for Sarcoma/LMS application
              for the future – were do we stand now? (2/2/22)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/fqo32_wgRpU" target="_blank" rel="noopener noreferrer">
                https://youtu.be/fqo32_wgRpU
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/03/Photo-of-Brian-Crompton-300x258.jpg"
                alt="Brian Crompton"
                width={245}
                height={211}
              />{" "}
              Brian Crompton, MD
              <br />
              Dana-Farber Cancer Institute
              <br />
              Boston, MA
            </p>
            <p>
              ct-DNA Proof of Concept Research for Sarcoma (30 Nov 2021) Hosted
              by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/a98XOq_BE6k" target="_blank" rel="noopener noreferrer">
                https://youtu.be/a98XOq_BE6k
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Clinical Trials</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/03/Haddox-Photo.png"
                alt="Candace Haddox"
                width={215}
                height={184}
              />{" "}
              Candace Haddox, M.D.
              <br />
              Sarcoma Medical Oncologist
              <br />
              Dana-Farber Cancer Institute and Harvard Medical School
              <br />
              Boston, MA
            </p>
            <p>
              General discussion about clinical trials and presentation of the
              novel Phase 1 Clinical Trial using Peposertib (M3814) and low dose
              Liposomal Doxorubicin in Patients with Metastatic Leiomyosarcoma
              and other Soft Tissue Sarcomas for which she is the Principal
              Investigator. Presented 26 February 2025. (Hosted by the NLMSF)
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/jVMw7irewYI" target="_blank" rel="noopener noreferrer">
                https://youtu.be/jVMw7irewYI
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/02/pollack-photo.jpg"
                alt="Seth Pollack"
                width={175}
                height={245}
              />{" "}
              Seth Pollack, M.D.
              <br />
              Sarcoma Medical Oncologist
              <br />
              Lurie Cancer Center
              <br />
              Northwestern University
              <br />
              Chicago, IL
            </p>
            <p>
              Discussion of the Phase II Clinical Trial for Leiomyosarcoma
              patients with metastatic or surgically unresectable tumors using
              Zanzalintinib (XL092) (a Tyrosine Kinase Inhibitor (TKI)) being
              conducted at Northwestern University and currently enrolling
              patients. (31 January 2025)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/h4mi-aJT1tk" target="_blank" rel="noopener noreferrer">
                https://youtu.be/h4mi-aJT1tk
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/01/Mullinax-photo-2-300x300.jpg"
                alt="John Mullinax"
                width={200}
                height={200}
              />{" "}
              John Mullinax, MD
              <br />
              Sarcoma Surgical Oncologist
              <br />
              Moffit Cancer Center
              <br />
              Tampa, FL
            </p>
            <p>
              Discussion of the STRASS 2/3 Clinical Trial for the Initial
              Treatment of Retroperitoneal Leiomyosarcoma and Liposarcoma
              (January 2025)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/EPeR4Wui3Bs" target="_blank" rel="noopener noreferrer">
                https://youtu.be/EPeR4Wui3Bs
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/08/Avutu-Photo-300x300.jpg"
                alt="Vishu Avutu"
                width={200}
                height={200}
              />{" "}
              Vishu Avutu, MD
              <br />
              Medical Oncologist Memorial Sloan Kettering Cancer Center
              <br />
              New York, NY
            </p>
            <p>
              Phase 1a/2 Clinical Trial of GI-102 for Patients with Advanced
              Sarcoma (August 2024)
              <br />
              Hosted by the NLMSF.
            </p>
            <p>
              GI-102 works by boosting the power of your immune system to find
              and kill cancer cells. It takes the brakes off the immune response
              by blocking a protein called CTLA-4. GI-102 increases the number
              of immune cells through the use of a second protein called IL-2.
              It is given intravenously (by vein).
            </p>
            <p>
              Video recording:{" "}
              <a href="https://youtu.be/kfOK0sNa4JQ" target="_blank" rel="noopener noreferrer">
                https://youtu.be/kfOK0sNa4JQ
              </a>
            </p>
          </div>
          <div className="events-staged-2-speaker-list">
            <p>
              <a href="https://youtu.be/ioL0850rt7A" target="_blank" rel="noopener noreferrer">
                Clinical Trials Perspectives a Panel Discussion by Sarcoma
                Medical Oncologists
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/05/Clinical-Trials-Panel-Photo-300x169.png"
                alt="Clinical trials panel"
                width={600}
                height={338}
              />
            </p>
            <p>
              (February 2024) Hosted by the NLMSF
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/ioL0850rt7A" target="_blank" rel="noopener noreferrer">
                https://youtu.be/ioL0850rt7A
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/08/Cote-Photo-2.png"
                alt="Gregory Cote"
                width={253}
                height={253}
              />{" "}
              Dr. Gregory Cote, MD, PhD
              <br />
              Medical Oncologist at Massachusetts General Hospital, Boston MA
            </p>
            <p>
              Dr. Cote provides a thorough overview of how clinical trials are
              done to bring new drugs such as Lurbinectedin to patients. He also
              discusses his current clinical trial using Lurbinectedin in
              combination with Doxorubicin in the treatment of advanced
              Leiomyosarcoma. (8 August 2023) Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/AU46FmcSc3Y" target="_blank" rel="noopener noreferrer">
                https://youtu.be/AU46FmcSc3Y
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/11/Brian-Van-Tine-MD-PhD.jpg"
                alt="Brian Van Tine"
                width={230}
                height={249}
              />{" "}
              Brian Van Tine, MD, PhD
              <br />
              Sarcoma Medical Oncologist
              <br />
              The Siteman Cancer Center, Washington University
              <br />
              St. Louis, MO
            </p>
            <p>
              Dr. Van Tine discusses a new clinical trial: A Randomized Phase II
              Plus Ttial of Cabozantinib Combined with PD-1 and CTLA-4 Inhibition
              versus Cabozantinib in Metastatic Soft Tissue Sarcoma.
            </p>
            <p>
              He also gives updates on three on-going clinical trials for
              leiomyosarcoma patients. (20 July 2023) Hosted by the NLMSF.
            </p>
            <ol>
              <li>
                Unesbulin (PTC596) in Combination with Dacarbazine – a Phase III
                Trial for Patients with Advanced LMS (SUNRISE Trial)
              </li>
              <li>
                Pegylated Arginine Deiminase in Combination with Gemcitabine and
                Doxcetaxel Phase III Trial for Treatment of Soft Tissue Sarcomas
              </li>
              <li>
                Randomized Phase 2/3 Trial Using Olaparib Plus Temozolomide
                Versus Investigators Choice Treatment for Treatment of Advanced
                Uterine Leiomyosarcoma
                <br />
                Video recording:{" "}
                <a
                  href="https://www.youtube.com/watch?v=ZHpMtNTwSRw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/watch?v=ZHpMtNTwSRw
                </a>
              </li>
            </ol>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/11/Brian-Van-Tine-MD-PhD.jpg"
                alt="Brian Van Tine"
                width={230}
                height={249}
              />{" "}
              Brian Van Tine, MD, PhD
              <br />
              Sarcoma Medical Oncologist
              <br />
              The Siteman Cancer Center, Washington University
              <br />
              St. Louis, MO
            </p>
            <p>
              Updates on Three Promising Active LMS Clinical Trials (14 April
              2023)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/V80SxCwx_cE" target="_blank" rel="noopener noreferrer">
                https://youtu.be/V80SxCwx_cE
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/09/download-300x300.png"
                alt="Elise Nassif"
                width={240}
                height={240}
              />{" "}
              Elise Nassif, MD, PhD.
              <br />
              Sarcoma Medical Oncologist, MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              Clinical Trials in Soft Tissue Sarcoma: The Efficacy of Early –
              Phase Clinical Trials (21 Sep 2022) Hosted by the NLMSF.
            </p>
            <p>
              Video recording:{" "}
              <a href="https://youtu.be/vArSCfUnAbM" target="_blank" rel="noopener noreferrer">
                https://youtu.be/vArSCfUnAbM
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2021/11/Brian-Van-Tine-MD-PhD.jpg"
                alt="Brian Van Tine"
                width={230}
                height={249}
              />{" "}
              Brian Van Tine, MD, PhD
              <br />
              Medical Oncologist at the the Siteman Cancer Center, Washington
              University, St. Louis, MO
            </p>
            <p>
              <strong>
                Unesbulin, New Treatment for Leiomyosarcoma (Upcoming Clinical
                trial) Presented by Dr. Van Tine 6/28/22 (Hosted by the NLMSF)
              </strong>
            </p>
            <p>
              Video recording:{" "}
              <a href="https://youtu.be/HbwUvXcl7wg" target="_blank" rel="noopener noreferrer">
                https://youtu.be/HbwUvXcl7wg
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Ingham-Photo.jpg"
                alt="Matthew Ingham"
                width={280}
                height={229}
              />
              <br />
              Matthew Ingham, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              Herbert Irving Comprehensive Cancer Center
              <br />
              Columbia University Medical Center
              <br />
              New York, NY
            </p>
            <p>
              Discussion on New Treatment Approaches for LMS that are in
              Preclinical or Clinical Trials (8 Jun 2022) Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/mY2q7q5VOlA" target="_blank" rel="noopener noreferrer">
                https://youtu.be/mY2q7q5VOlA
              </a>
            </p>
            <p>His recent presentation at the ASCO Meeting:</p>
            <p>His ongoing clinical trials:</p>
            <p>
              ATX-101 in Advanced Dedifferentiated Liposarcoma and Leiomyosarcoma
              <br />
              <a
                href="https://clinicaltrials.gov/ct2/show/NCT05116683?term=NCT05116683&draw=2&rank=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://clinicaltrials.gov/ct2/show/NCT05116683?term=NCT05116683&draw=2&rank=1
              </a>
            </p>
            <p>
              A Phase II Clinical Trial Evaluating the Combination of Olaparib
              and Temozolomide for the Treatment of Advanced Uterine
              Leiomyosarcoma (Last updated August 24, 2022)
              <br />
              <a
                href="https://clinicaltrials.gov/ct2/show/NCT03880019"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://clinicaltrials.gov/ct2/show/NCT03880019
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/06/image14.jpg"
                alt="Gary Schwartz"
                width={230}
                height={173}
              />
              <br />
              Additionally, Dr. Ingham’s colleague, Gary Schwartz, MD discussed
              this trial as it is going into Phase III on this Onclive
              Presentatiion{" "}
              <a
                href="https://www.onclive.com/view/olaparib-temozolomide-shows-encouraging-efficacy-manageable-safety-in-uterine-leiomyosarcoma?fbclid=IwAR05Ks-v50HFqLBY6zgv"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.onclive.com/view/olaparib-temozolomide-shows-encouraging-efficacy-manageable-safety-in-uterine-leiomyosarcoma?fbclid=IwAR05Ks-v50HFqLBY6zgv
              </a>
            </p>
            <p>
              Dr. Schwartz also discussed this trial on this presentation.
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/62gyn3nt6Z8" target="_blank" rel="noopener noreferrer">
                https://youtu.be/62gyn3nt6Z8
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>General Information on Sarcoma Care - Multidisciplinary Approach</h2>
          <p>
            VANDERBILT SARCOMA CENTER EDUCATION VIDEO – with Dr. Elizabeth Davis
            – Patient learning hour about sarcoma and its treatment – multiple
            disciplinary treatment at Vanderbilt University (14 July 2022)
            <br />
            Co-hosted by the NLMSF.
            <br />
            Video recording:{" "}
            <a href="https://youtu.be/2FuOuLewaJl" target="_blank" rel="noopener noreferrer">
              https://youtu.be/2FuOuLewaJl
            </a>
          </p>
          <p>
            <Image
              src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Elizabeth-Davis-1-e1675618311784-150x150.webp"
              alt="Elizabeth Davis"
              width={250}
              height={250}
            />{" "}
            Elizabeth Davis, M.D., Vanderbilt Cancer Center, Nashville, KY
          </p>
          <p>
            Brief background on LMS
            <br />
            Treatment of LMS
            <br />
            1. Systemic
            <br />
            2. Importance of supportive care during and after systemic therapy
            <br />
            3. Clincal Trials on the horizon (20 Aug 2020) Hosted by the NLMSF
          </p>
          <p>
            Video recording:{" "}
            <a href="https://youtu.be/U-JW4GYi3tA" target="_blank" rel="noopener noreferrer">
              https://youtu.be/U-JW4GYi3tA
            </a>
          </p>
          <h4>UCLA – NLMSF Patient/Family LMS Education Symposium February 2017</h4>
          <p>
            <strong>Program:</strong>
          </p>
          <ol>
            <li>Developing Drugs for Rare Disease – Arun Singh, MD</li>
            <li>Leiomyosarcoma: Personalized Sarcoma Therapy – Fritz C. Eilber, MD</li>
            <li>Surgical Management of Uterine Leiomyosarcoma – Joshua G. Cohen, MD</li>
            <li>Radiation Therapy for Leiomyosarcoma – Anusha Kalbasi, MD</li>
            <li>Leiomyosarcoma: Immunotherapy Clinical Trials – Bartosz Chmielowski, MD</li>
            <li>
              Nutrition & Integrative Oncology for Leiomyosarcoma Patients -
              Carolyn Katzin, MS, CNS
            </li>
            <li>Leiomyosarcoma Patient Discussion Session – Sandra Brackert, NP</li>
          </ol>
          <p>
            Video recording:{" "}
            <a
              href="https://www.uclahealth.org/sarcoma/leiomyosarcoma-education-day"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.uclahealth.org/sarcoma/leiomyosarcoma-education-day
            </a>
          </p>
          <p>
            <strong>
              THE A B C’s OF A NEW DIAGNOSIS – THE
              https://youtu.be/2FuOuLewaJIMAYO CLINIC and the NLMSF present: The
              ABC’s of a Sarcoma Diagnosis
            </strong>
            <br />
            Video Recording:{" "}
            <a href="https://www.youtube.com/watch?v=nv2HP9TbaYA" target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/watch?v=nv2HP9TbaYA
            </a>
          </p>
        </section>

        <section className="events-staged-2-section">
          <h2>How to Participate in Patient Centered Research - Count-Me-In / Pattern.org</h2>
          <p>
            <Image
              src="https://nlmsf.org/wp-content/uploads/2023/02/Ben-Zhola-Photo-300x169.png"
              alt="Ben Zola"
              width={550}
              height={309}
            />
            <br />
            Count Me In LMS Project and how to participate discussed by Ben Zola
            the director of the project
          </p>
          <p>
            Video recording:{" "}
            <a href="https://youtu.be/EACPtT7cnK4" target="_blank" rel="noopener noreferrer">
              https://youtu.be/EACPtT7cnK4
            </a>
          </p>
        </section>

        <section className="events-staged-2-section">
          <h2>Imaging/Radiology</h2>
          <p>Imaging/radiology</p>
        </section>

        <section className="events-staged-2-section">
          <h2>Immunotherapy</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Meyers-Photo-240x300.jpg"
                alt="Christian Meyer"
                width={200}
                height={250}
              />{" "}
              Christian Meyer, MD, PhD
              <br />
              Sarcoma Medical Oncologist
              <br />
              The Johns Hopkins Cancer Institute Sarcoma Center
              <br />
              Baltiomore, MD
            </p>
            <p>
              Discussion of the American Society of Clinical Oncologists (ASCO)
              Publication – Immunotherapy in Sarcoma Current Data/Promising
              Strategies (26 August 2024)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/ogP5bVDSI3M" target="_blank" rel="noopener noreferrer">
                https://youtu.be/ogP5bVDSI3M
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/09/download-300x300.png"
                alt="Elise Nassif"
                width={225}
                height={225}
              />{" "}
              Elise Nassif, MD, PhD
              <br />
              Sarcoma Medical Oncologist
              <br />
              MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              Targeting the Molecular and Immunological Features of LMS (9 Jun
              2023)
              <br />
              Hosted by the NLMSF
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/qaYjM2GPYzk" target="_blank" rel="noopener noreferrer">
                https://youtu.be/qaYjM2GPYzk
              </a>
            </p>
            <p>
              Article that the presentation is based on:
              <br />
              <a
                href="https://www.mdpi.com/2072-8894/15/7/2099"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.mdpi.com/2072-8894/15/7/2099
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Jonathan-Trent.jpg"
                alt="Jonathan Trent"
                width={225}
                height={281}
              />{" "}
              Jonathan Trent, MD, PhD. Sylvester Comprehensive Cancer Center,
              Sarcoma Center, Miami, FL
            </p>
            <p>
              Current Status and Future Directions of Immunotherapies in Soft
              Tissue Sarcomas (28 Feb 2023)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/W9QnMxDOeQM" target="_blank" rel="noopener noreferrer">
                https://youtu.be/W9QnMxDOeQM
              </a>
            </p>
            <p>
              Article on this Topic:{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8945421/#B68-biomedicines-10-00573"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8945421/#B68-biomedicines-10-00573
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Meyers-Photo-240x300.jpg"
                alt="Christian Meyer"
                width={200}
                height={250}
              />{" "}
              Christian Meyer, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              The Johns Hopkins Sidney Kimmel Comprehensive Cancer Center
              Baltimore, MD
            </p>
            <p>
              Immunotherapy for Sarcoma: A Work in Progress – Dr. Meyer
              discusses his recent article published in the Journal of Clinical
              Oncology (4/14/2022)
              <br />
              Hosted by the NLMSF.
              <br />
              Video Recording:{" "}
              <a href="https://youtu.be/w9o46xJ0cvA" target="_blank" rel="noopener noreferrer">
                https://youtu.be/w9o46xJ0cvA
              </a>
            </p>
            <p>
              You can read his article here:{" "}
              <a href="https://ascopubs.org/doi/10.1200/JCO.21.01338" target="_blank" rel="noopener noreferrer">
                https://ascopubs.org/doi/10.1200/JCO.21.01338
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>
            The Microbiome (Gut Health) and it Impact on the Effectiveness of
            Chemotherapy Treatment
          </h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/09/download-300x300.png"
                alt="Elise Nassif"
                width={240}
                height={240}
              />{" "}
              Elise Nassif, MD, PhD.
              <br />
              Sarcoma Medical Oncologist
              <br />
              MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              The Microbiome (Gut Health) and it Impact on the Effectiveness of
              Chemotherapy Treatment (17 Feb 2023)
              <br />
              Hosted by the NLMSF
              <br />
              Video Recording:{" "}
              <a href="https://youtu.be/NtEdB4bno5E" target="_blank" rel="noopener noreferrer">
                https://youtu.be/NtEdB4bno5E
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Nutrition</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/06/Alison-Tierney-Photo.jpg"
                alt="Alison Tierney"
                width={205}
                height={205}
              />
              <br />
              Alison Tierney, MS, RD, CD, CSO
              <br />
              Licensed Cancer Dietician and Cancer Survivor
            </p>
            <p>
              Guidance on Diet during Chemo / During Clinical Trials and more .
              . . (22 May 2024)
              <br />
              Hosted by the NLMSF
            </p>
            <p>
              Ms. Tierney empowers those affected by cancer to conquer fears,
              take back control, and fully support their body before, during,
              and after cancer treatment.
            </p>
            <p>
              Video recording:{" "}
              <a href="https://www.youtube.com/watch?v=6z21Z6ls33c" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=6z21Z6ls33c
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Pathology</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/06/Dermawan-Photo.jpg"
                alt="Josephine Dermawan"
                width={200}
                height={250}
              />{" "}
              Josephine Dermawan, MD
              <br />
              Research Pathologist
              <br />
              Cleveland Clinic
              <br />
              Cleveland, OH
            </p>
            <p>
              Discuses her perspectives on pathology and her recent research
              publication. (May 2024)
              <br />
              Hosted by the NLMSF.
              <br />
              Video Recording:{" "}
              <a href="https://youtu.be/Ks30Ztm7QWQ" target="_blank" rel="noopener noreferrer">
                https://youtu.be/Ks30Ztm7QWQ
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Alexander-Lazar-Photo.jpg"
                alt="Alexander Lazar"
                width={175}
                height={265}
              />{" "}
              Alexander Lazar, M.D. Sarcoma Pathologist
              <br />
              MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              Basic Lecture on Pathology of Sarcoma (3 Aug 2020)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://www.youtube.com/watch?v=gjvcYEdOZmw" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=gjvcYEdOZmw
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>PEComa</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/08/Wagner-Andrew-300x258.jpg"
                alt="Andrew Wagner"
                width={200}
                height={172}
              />{" "}
              Andrew Wagner, MD
              <br />
              Dana Farber Cancer Institute, Boston, MA
            </p>
            <p>PEComa Research Updates and Q &amp; A</p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/08/Marco-Schito-_CGM5045-300x300.jpg"
                alt="Marco Schito"
                width={200}
                height={200}
              />{" "}
              Marco Schito, PhD
              <br />
              Director of C-Path’s CURE Drug Repurposing Collaboratory and an
              Adjunct Professor at the University of Arizona
            </p>
            <p>
              Repurposing Drugs for prospective advancement of treatment for
              PEComa – the patient toolkit to participate in this
              patient-driven initiative. (March 2024)
            </p>
            <p>
              Hosted by the NLMSF
              <br />
              Video recording:{" "}
              <a href="https://www.youtube.com/watch?v=yKp4zAo9TUU" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=yKp4zAo9TUU
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Patient Centered Research How You Can Participate</h2>
        </section>

        <section className="events-staged-2-section">
          <h2>Radiation Therapy</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2025/03/Guadagnolo-photo-2-200x300.jpg"
                alt="B. Ashleigh Guadagnolo"
                width={200}
                height={300}
              />{" "}
              B. Ashleigh Guadagnolo, MD, MPH, FASTRO
              <br />
              Radiation Oncologist
              <br />
              MD Anderson Cancer Center
              <br />
              Houston, TX
            </p>
            <p>
              Should Hypofractionated Radiation be Adopted as the Standard of
              Care for Extremity and Truncal Sarcomas (February 2025)
              <br />
              Hosted by the NLMSF
              <br />
              Video Recording:{" "}
              <a href="https://youtu.be/CV17JtEHWqM" target="_blank" rel="noopener noreferrer">
                https://youtu.be/CV17JtEHWqM
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/04/Anush-Kalbasi-Photo.jpg"
                alt="Anush Kalbasi"
                width={200}
                height={267}
              />{" "}
              Anush Kalbasi, MD
              <br />
              Radiation Oncologist
              <br />
              UCLA Department of Oncology and UCLA Comprehensive Cancer Center
              <br />
              Los Angeles, CA
            </p>
            <p>
              The Role of Radiation Oncology in LMS (5/15/2021)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/NuNNaaOV_9Q" target="_blank" rel="noopener noreferrer">
                https://youtu.be/NuNNaaOV_9Q
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Sarculator</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/05/Bigger-Dr-Bui-300x300.jpg"
                alt="Nam Bui"
                width={250}
                height={250}
              />{" "}
              Nam Bui, MD
              <br />
              Sarcoma Medical Oncologist
              <br />
              Stanford Cancer Institute
              <br />
              Stanford, CA
            </p>
            <p>
              The Sarculator Nomogram – What is It and What is Its Role in the
              Treatment of Patients with Localized Sarcomas in the Extremities
              and the Retroperitoneal (August 2024). Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://www.youtube.com/watch?v=V7Rn7ZBCTw8" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=V7Rn7ZBCTw8
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Surgical Treatment</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/04/Toloza-Photo-255x300.jpg"
                alt="Eric Toloza"
                width={220}
                height={259}
              />
            </p>
            <p>
              Eric Toloza, MD
              <br />
              Thoracic Surgeon
              <br />
              Moffitt Cancer Center
              <br />
              Tampa, FL
            </p>
            <p>
              Current Thoracic Surgical Procedures for Sarcoma Lung Metastases
              <br />
              Presented by Dr. Toloza on 4/12/2024. Hosted by the NLMSF.
            </p>
            <p>
              Video Recording:{" "}
              <a href="https://www.youtube.com/watch?v=OTpX1AryJAM" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=OTpX1AryJAM
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2024/04/Tseng-Photo.jpg"
                alt="William Tseng"
                width={200}
                height={263}
              />
            </p>
            <p>
              William Tseng, MD
              <br />
              City of Hope National Medical Center
              <br />
              Sarcoma Surgical Oncologist
            </p>
            <p>
              Retroperitoneal Leiomyosarcoma — Consensus Guidelines and Daily
              Practice presented by Dr. Tseng (8/22/22) Hosted by the NLMSF
            </p>
            <p>
              Video Recording:{" "}
              <a href="https://youtu.be/2FuOuLewaJI" target="_blank" rel="noopener noreferrer">
                https://youtu.be/2FuOuLewaJI
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2022/03/Brian-Kadrea.jpg"
                alt="Brian Kadera"
                width={250}
                height={250}
              />{" "}
              Brian Kadera, MD
              <br />
              Surgeon, Complex General Surgical Oncology,
              <br />
              Ronald Reagan UCLA Medical Center and Santa Monioca Medical Center
            </p>
            <p>
              Surgical Management of Leiomyosarcoma/Sarcoma (4/15/2021)
              <br />
              Hosted by the NLMSF.
            </p>
            <p>
              <iframe
                title="Dr Brian Kadera's Presentation"
                width="500"
                height="281"
                src="https://www.youtube.com/embed/MyZQrndW_5g?feature=oembed"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/02/Dr.-Aime-Crago-Photo-300x300.webp"
                alt="Aime Crago"
                width={250}
                height={250}
              />{" "}
              Aime Crago, MD
              <br />
              Sarcoma Surgical Oncologist, Memorial Sloan Kettering Cancer
              Center, New York, NY
              <br />
              Surgical Management of LMS (2 Nov 2020) Hosted by the NLMSF.
            </p>
            <p>
              <a href="https://youtu.be/WKGfH1M1be8" target="_blank" rel="noopener noreferrer">
                https://youtu.be/WKGfH1M1be8
              </a>
            </p>
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/04/Farma-Photo-224x300.jpg"
                alt="Jeffery Farma"
                width={224}
                height={300}
              />{" "}
              Jeffery Farma, MD
              <br />
              Sarcoma Surgeon
              <br />
              Fox Chase Medical Center
              <br />
              Philadelphia, PA
            </p>
            <p>
              Perspectives on Surgical Management of LMS/Sarcoma (4/2/2020)
              <br />
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/uVyMcPVAQyA" target="_blank" rel="noopener noreferrer">
                https://youtu.be/uVyMcPVAQyA
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>Survivorship Care Planning</h2>
          <div className="events-staged-2-speaker-list">
            <p>
              <Image
                src="https://nlmsf.org/wp-content/uploads/2023/01/Dr.-Nassos-Presentation-2.png"
                alt="Shelley Fuld Nasso presentation"
                width={800}
                height={450}
              />
            </p>
            <p>
              Survivorship Care Planning Presented by Shelley Fuld Nasso, MPP,
              CEO of the National Coalition for Cancer Survivorship (10/4/22)
              Hosted by the NLMSF.
              <br />
              Video recording:{" "}
              <a href="https://youtu.be/kwyZaw5-2yU" target="_blank" rel="noopener noreferrer">
                https://youtu.be/kwyZaw5-2yU
              </a>
            </p>
          </div>
        </section>

        <section className="events-staged-2-section">
          <h2>
            Uterine Fibroids - What You Should Know Before Having Fibroid
            Surgery
            <br />
            Leiomyomas vs. Leiomyosarcomas - A Clinical Dilemma
          </h2>
          <p>Uterine Fibroids – What You Should Know Before Having Surgery</p>
          <p>A Panel Experts discuss this topic. Hosted by the NLMSF.</p>
          <p>
            <a href="http://bit.ly/2K82sFO" target="_blank" rel="noopener noreferrer">
              http://bit.ly/2K82sFO
            </a>{" "}
            – Introductory brief about the medical panel presentation
            <br />
            Video recording:{" "}
            <a href="https://youtu.be/3d0FoUPv738" target="_blank" rel="noopener noreferrer">
              https://youtu.be/3d0FoUPv738
            </a>
          </p>
          <p>
            <Image
              src="https://nlmsf.org/wp-content/uploads/2023/12/Dr.-Laveaux-Photo-226x300.jpeg"
              alt="O. Sandra Madueke-Laveaux"
              width={226}
              height={300}
            />
          </p>
          <p>
            O. Sandra Madueke-Laveaux, M.D. Associate Professor of OB-GYN at the
            University of Chicago
          </p>
          <p>
            Dr. Laveaux discusses the clinical dilemma of differentiation
            between a leiomyosarcoma and a benign leiomyoma and her work to try
            to find a biomarker in a person’s blood to help distinguish
            pre-operatively between these two entities. (27 October 2023)
            <br />
            Hosted by the NLMSF.
            <br />
            Video recording:{" "}
            <a href="https://youtu.be/Ht-xPnnNuQY" target="_blank" rel="noopener noreferrer">
              https://youtu.be/Ht-xPnnNuQY
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
