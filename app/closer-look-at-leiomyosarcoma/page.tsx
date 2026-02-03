import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Closer Look at Leiomyosarcoma | NLMSF",
  description:
    "Comprehensive guide to leiomyosarcoma diagnosis, treatment options, genomic profiling, and circulating tumor DNA testing. Empowering patients and families.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function CloserLookAtLeiomyosarcomaPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="text-center py-12 px-6 md:px-8 rounded-xl shadow-md border border-blue-200 mb-8 max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, #eff6ff, #eef2ff)",
        }}
      >
        <div className="inline-flex items-center bg-white rounded-full py-2 px-4 shadow-sm mb-4 font-semibold text-[#6a3ea1]">
          <i className="fas fa-microscope text-[#8b5cf6] mr-2" aria-hidden />
          Comprehensive Guide
        </div>
        <h1
          className="text-2xl md:text-4xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(135deg, #6a3ea1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Closer Look at Leiomyosarcoma
        </h1>
        <div
          className="w-16 h-0.5 rounded mx-auto my-6"
          style={{ background: "linear-gradient(135deg, #6a3ea1, #8b5cf6)" }}
          aria-hidden
        />
        <p className="text-xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
          Empowering Sarcoma Treatment Decisions through Genomic Profiling of Tumor Tissue
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span
            className="inline-flex items-center py-2 px-4 rounded-full font-semibold text-sm text-white shadow"
            style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
          >
            <i className="fas fa-user-md mr-2" aria-hidden /> Collaborative Approach
          </span>
          <span
            className="inline-flex items-center py-2 px-4 rounded-full font-semibold text-sm text-white shadow"
            style={{ background: "linear-gradient(135deg, #6366f1, #4338ca)" }}
          >
            <i className="fas fa-dna mr-2" aria-hidden /> Genomic Profiling
          </span>
          <span
            className="inline-flex items-center py-2 px-4 rounded-full font-semibold text-sm text-white shadow"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #7c3aed)" }}
          >
            <i className="fas fa-heart mr-2" aria-hidden /> Patient & Family Focused
          </span>
        </div>
      </section>

      {/* Intro panel */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 py-6 px-6 mb-8 max-w-[1400px] mx-auto">
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong className="text-[#6a3ea1] font-bold">A Collaborative Approach with Patients and Their Families</strong>
          <br />
          This comprehensive guide provides detailed insights into leiomyosarcoma diagnosis, treatment options, and the latest advances in genomic profiling and circulating tumor DNA testing. Our goal is to empower patients and their families with the knowledge needed to make informed treatment decisions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          From initial diagnostic procedures to cutting-edge precision oncology approaches, this resource covers the full spectrum of leiomyosarcoma care. We&apos;ve compiled information from leading medical institutions and research studies to provide you with the most current and comprehensive information available.
        </p>
        <p className="text-gray-600 leading-relaxed mb-0">
          Whether you&apos;re newly diagnosed, exploring treatment options, or seeking to understand the latest research developments, this guide serves as your comprehensive resource for understanding leiomyosarcoma and the evolving landscape of sarcoma treatment.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <nav className="bg-white rounded-xl shadow-md p-6 border border-gray-200" aria-label="Page contents">
            <h3 className="text-xl font-bold text-[#6a3ea1] mb-4 pb-2 border-b-2 border-gray-200">
              Page Contents
            </h3>
            <div className="flex flex-col gap-1">
              <a href="#webmd-resource" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                WebMD Resource
              </a>
              <a href="#diagnostic-approaches" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                Diagnostic Approaches
              </a>
              <a href="#imaging-tests" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                Imaging Tests
              </a>
              <a href="#treatment-options" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                Treatment Options
              </a>
              <a href="#medical-terminology" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                Medical Terminology
              </a>
              <a href="#ctdna-testing" className="block py-3 px-4 text-gray-600 no-underline font-medium rounded-lg hover:bg-gray-100 hover:text-[#6a3ea1] transition-colors">
                ctDNA Testing
              </a>
            </div>
          </nav>
        </aside>

        <div className="min-w-0 bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
          {/* WebMD Reference */}
          <section id="webmd-resource" className="mb-12 scroll-mt-24">
            <div
              className="rounded-xl p-6 md:p-8 border border-sky-500 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-external-link-alt text-sky-500 text-2xl" aria-hidden />
                <h2 className="text-xl md:text-2xl font-bold text-sky-900 m-0">WebMD Resource</h2>
              </div>
              <p className="text-sky-900 text-lg mb-6">
                Exploring Imaging Tests, Biopsies, Treatment Options, and Ongoing Care
              </p>
              <a
                href="https://www.webmd.com/cancer/leiomyosarcoma-diagnosis"
                className="inline-flex items-center gap-2 bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold no-underline hover:bg-sky-600 transition-colors"
                {...ext}
              >
                <i className="fas fa-link" aria-hidden /> View WebMD Leiomyosarcoma Diagnosis Guide
              </a>
            </div>
          </section>

          {/* Diagnostic Approaches */}
          <section id="diagnostic-approaches" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#6a3ea1] mb-4 flex items-center gap-3">
              <i className="fas fa-stethoscope text-[#8b5cf6]" aria-hidden />
              Comprehensive Insights into Diagnostic Approaches
            </h2>
            <p className="text-gray-600 italic mb-8 text-lg">
              The following tests and procedures may be used to detect and diagnose soft tissue cancer:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#6a3ea1]">
                <h3 className="text-lg font-bold text-[#6a3ea1] mb-3 flex items-center gap-3">
                  <i className="fas fa-clipboard-list text-[#8b5cf6]" aria-hidden />
                  Medical History and Physical Exam
                </h3>
                <p className="text-gray-600 leading-relaxed m-0">
                  By now you will have had discussions with your oncologist about your medical history, any recent illnesses, injuries, new symptoms of note, medications you are taking, and family history information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#6a3ea1]">
                <h3 className="text-lg font-bold text-[#6a3ea1] mb-3 flex items-center gap-3">
                  <i className="fas fa-vial text-[#8b5cf6]" aria-hidden />
                  Blood Tests
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tests are not used to diagnose soft tissue sarcoma, but rather for signs of disease and assessment of your general health. Blood tests may be used to assess the response to drug treatment. Abnormal levels of certain chemicals in the blood can also be an assessment of the cancer having spread elsewhere in the body.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-[#8b5cf6] my-4">
                  <h4 className="font-semibold text-[#6a3ea1] mb-2">Comprehensive Metabolic Panel</h4>
                  <p className="text-gray-600 text-sm leading-relaxed m-0">
                    A comprehensive metabolic panel may involve testing up to 14 different chemicals in your blood. Deviations from normal levels can be indicative of cancer or other health concerns. This panel assesses chemicals originating from various organs, including the liver and bones.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-[#8b5cf6]">
                  <h4 className="font-semibold text-[#6a3ea1] mb-2">Complete Blood Count and Differential (CBC)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed m-0">
                    CBC measures the quantity of different blood cells present in a blood sample, including white blood cells.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#6a3ea1]">
                <h3 className="text-lg font-bold text-[#6a3ea1] mb-3 flex items-center gap-3">
                  <i className="fas fa-user-md text-[#8b5cf6]" aria-hidden />
                  Physical Examination
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A comprehensive physical examination will be conducted to detect any signs of disease, such as lumps or other abnormal findings. A lump or bump should not be dismissed but rather evaluated to rule out the possibility of it being a form of sarcoma.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#6a3ea1] mb-2">Educational Videos:</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.youtube.com/watch?v=cKgi-XnVFVI" className="inline-flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md font-medium text-sm no-underline hover:bg-red-700 transition-colors" {...ext}>
                      <i className="fab fa-youtube" aria-hidden /> Sarcoma Information Brief 1
                    </a>
                    <a href="https://www.youtube.com/watch?v=188TWJsAFlk" className="inline-flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md font-medium text-sm no-underline hover:bg-red-700 transition-colors" {...ext}>
                      <i className="fab fa-youtube" aria-hidden /> Sarcoma Information Brief 2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Imaging Tests */}
          <section id="imaging-tests" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#6a3ea1] mb-6 flex items-center gap-3">
              <i className="fas fa-x-ray text-[#8b5cf6]" aria-hidden />
              Imaging Tests for Leiomyosarcoma
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "fa-x-ray", title: "X-ray", desc: "Basic imaging technique for initial assessment and detection of abnormalities." },
                { icon: "fa-cube", title: "Computed Tomography (CT) Scan", desc: "Employed to investigate the suspected area for the presence of tumors and to ascertain whether the cancer has extended beyond its initial origin. A non-invasive, painless technique utilizing X-ray imaging to peer inside the body. Multiple images taken from various angles generate cross-sectional images of soft tissue, organs, blood vessels, and bones." },
                { icon: "fa-magnet", title: "Magnetic Resonance Imaging (MRI) Scan", desc: "Utilized to capture intricate, detailed images of the body's internal structures." },
                { icon: "fa-atom", title: "PET-CT Scan", desc: "This diagnostic modality combines a PET scan with a CT scan to discern potential cancer cell presence. During the examination, a mildly radioactive substance, in conjunction with a glucose solution, is administered. Cancer cells exhibit a swifter glucose absorption rate compared to healthy cells." },
                { icon: "fa-wave-square", title: "Ultrasound Imaging", desc: "This method employs sound waves to produce visual representations of organs, veins, and arteries." },
                { icon: "fa-syringe", title: "Needle Biopsy or Incisional Biopsy", desc: "Involves the collection of tissue samples either via a needle or through a surgical incision in the skin, which are subsequently examined for the presence of cancer cells." },
                { icon: "fa-heartbeat", title: "Angiogram", desc: "Utilizes X-rays to examine blood vessels and assess blood flow, detecting potential blockages or leaks. A contrast agent is introduced through a catheter to evaluate the condition of the blood vessels." },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 shadow border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-white text-xl" style={{ background: "linear-gradient(135deg, #6a3ea1, #8b5cf6)" }}>
                    <i className={`fas ${card.icon}`} aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[#6a3ea1] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed m-0">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Options */}
          <section id="treatment-options" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#6a3ea1] mb-6 flex items-center gap-3">
              <i className="fas fa-medkit text-[#8b5cf6]" aria-hidden />
              Treatments for Leiomyosarcoma
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "fa-cut", title: "Surgery", desc: "This involves tumor resection, a surgical procedure to remove the tumor along with a wide margin of healthy tissue around it. This margin is extended beyond the tumor to minimize the chances of recurrence. Surgery, with an emphasis on achieving a broad margin, has historically proven to be the most effective and preferred method of treating leiomyosarcoma." },
                { icon: "fa-radiation", title: "Radiation Therapy", desc: "Radiation therapy is employed in some cases of leiomyosarcoma to target the tumor and destroy cancer cells while striving to preserve the function of nearby organs." },
                { icon: "fa-pills", title: "Chemotherapy", desc: "Chemotherapy drugs, such as gemcitabine-docetaxel, are commonly used to combat and eradicate leiomyosarcoma cells. Other drugs, like trabectedin, may also be considered. Multiple drug options and combinations exist, and discussing these choices with a sarcoma specialist is advisable." },
                { icon: "fa-bullseye", title: "Targeted Drug Therapy", desc: "Targeted drug therapy is designed to address specific molecular characteristics of the cancer. Pazopanib, an oral therapy approved for leiomyosarcoma, is frequently utilized in conjunction with chemotherapy and/or radiation therapy as part of a comprehensive leiomyosarcoma treatment strategy." },
                { icon: "fa-shield-virus", title: "Immunotherapy", desc: "Immunotherapy is an innovative treatment approach that harnesses certain aspects of the body's immune system to combat cancer. While it is on the horizon for leiomyosarcoma, further research and development are required to establish its efficacy in treating this particular type of cancer." },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 shadow border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 text-white text-xl">
                    <i className={`fas ${card.icon}`} aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-600 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed m-0">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Medical Terminology */}
          <section id="medical-terminology" className="mb-12 scroll-mt-24">
            <div
              className="rounded-xl p-6 md:p-8 border border-sky-500 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-book-medical text-sky-500 text-2xl" aria-hidden />
                <h2 className="text-xl md:text-2xl font-bold text-sky-900 m-0">Medical Terminology Resource</h2>
              </div>
              <p className="font-semibold text-sky-900 mb-3">A Cancer Glossary for Your Reference</p>
              <p className="text-sky-900 leading-relaxed mb-6">
                The National Cancer Institute (NCI) provides a comprehensive guide encompassing over 8,000 cancer-related terms. The NCI Dictionary serves as a user-friendly resource, aiding patients and their families in enhancing their understanding of complex medical articles.
              </p>
              <a
                href="https://www.cancer.gov/publications/dictionaries/cancer-terms/"
                className="inline-flex items-center gap-2 bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold no-underline hover:bg-sky-600 transition-colors"
                {...ext}
              >
                <i className="fas fa-external-link-alt" aria-hidden /> NCI Dictionary of Cancer Terms
              </a>
            </div>
          </section>

          {/* ctDNA Testing */}
          <section id="ctdna-testing" className="mb-12 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#6a3ea1] mb-6 flex items-center gap-3">
              <i className="fas fa-dna text-[#8b5cf6]" aria-hidden />
              Clinical Circulating Tumor DNA Testing for Precision Oncology
            </h2>
            <div className="mb-6">
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10101787/"
                className="inline-flex items-center gap-2 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold no-underline hover:bg-red-700 transition-colors"
                {...ext}
              >
                <i className="fas fa-file-medical" aria-hidden /> View Research Article
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-[#6a3ea1] mb-4">Research Summary</h3>
              <p className="text-gray-600 leading-relaxed m-0">
                ctDNA testing requires a minimum safety resolution through clinical validation to ensure its clinical utility. The testing requires cooperation between multi-disciplinary experts to provide meaningful and reliable results. Establishing a proper clinical validation guideline for ctDNA will enable access to better cancer treatment and reliable testing in the future.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-[#6a3ea1] mb-4">Key Findings</h3>
              <ul className="list-none pl-0 space-y-2">
                {[
                  "Research results suggest that ctDNA, assayed by a widely available sequencing approach, may be useful as a biomarker for a subset of patients with uterine and extrauterine LMS.",
                  "Higher levels of ctDNA correlate with tumor size and disease progression.",
                  "Liquid biopsies may assist in guiding treatment decisions, monitoring response to systemic therapy, surveying for disease recurrence, and differentiating benign and malignant smooth muscle tumors.",
                  "LMS is frequently a clinically aggressive disease, and patients are at high risk for local and metastatic relapse after initial complete resection.",
                ].map((item, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold before:text-[#6a3ea1]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-[#6a3ea1] mb-4">Potential Clinical Uses of ctDNA in LMS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Differentiation", desc: "ctDNA may be able to differentiate benign smooth muscle neoplasms, such as leiomyoma, from LMS." },
                  { title: "Adjuvant Therapy Guidance", desc: "Should ctDNA levels bear prognostic significance for tumors that are at highest risk of recurrence or identify the presence of residual disease, their measurement may help guide clinical decisions regarding adjuvant therapies." },
                  { title: "Treatment Response", desc: "ctDNA levels may be a useful indicator of response to systemic therapy and provide an early indication for switching or intensifying treatment regimens used in this disease." },
                ].map((card) => (
                  <div key={card.title} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#8b5cf6]">
                    <h4 className="font-semibold text-[#6a3ea1] mb-2">{card.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed m-0">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-6 md:p-8 border-l-4 border-amber-500 mb-6"
              style={{
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
              }}
            >
              <blockquote className="m-0">
                <p className="text-lg italic text-amber-900 mb-4 leading-relaxed">
                  &quot;Together with technologic improvements in sensitivity and throughput, these initial reports that identify ctDNA in LMS may quickly evolve to transform clinical practice.&quot;
                </p>
                <cite className="text-amber-900 font-semibold not-italic">– Dr. Matt Hemming, UMASS General Hospital, Worcester, Mass. (2019)</cite>
              </blockquote>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-[#6a3ea1] mb-3">Expert Panel Discussion</h3>
              <p className="text-gray-600 mb-2 font-medium">Assessing Circulating Tumor DNA: Current Status and Future Prospects in Sarcoma Research</p>
              <p className="text-gray-600 text-sm mb-4">
                Panel includes Dr. Nam Quoc Bui, Dr. Brian Compton, Dr. Elizabeth Davis, Dr. Erlinda Maria Gordon, Dr. Matthew Hemming, Dr. Elise Nasif, Dr. Joanna Pryzbyl, Dr. David Schulman and Dr. Jonathan Trent. (2023)
              </p>
              <a
                href="https://www.youtube.com/watch?v=fhsyH8bJn_I"
                className="inline-flex items-center gap-2 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold no-underline hover:bg-red-700 transition-colors"
                {...ext}
              >
                <i className="fab fa-youtube" aria-hidden /> Watch Panel Presentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
