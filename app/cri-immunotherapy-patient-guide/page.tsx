import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImmunotherapyFaq from "./ImmunotherapyFaq";

export const metadata: Metadata = {
  title: "CRI Immunotherapy Patient Guide | NLMSF",
  description:
    "Essential information and latest research on cancer immunotherapy for leiomyosarcoma patients and caregivers.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const GLOSSARY_ITEMS = [
  { term: "Adjuvant therapies", def: "Additional cancer treatments given after the primary treatment, such as surgery, to lower the risk of recurrence. Immunotherapies are often used as adjuvant therapies." },
  { term: "Adoptive T-cell therapy", def: "A type of immunotherapy that enhances the natural cancer-fighting ability of your body's T cells by removing immune cells, growing and/or making changes to them outside of your body, and then re-infusing them back into your body." },
  { term: "Antibodies", def: "Proteins that bind to antigens on harmful invaders in your body (such as germs and viruses). They also mark cells for attack and destruction by other immune cells." },
  { term: "Antibody-drug conjugates (ADCs)", def: "A type of targeted cancer treatment in which a chemotherapy drug is attached to an antibody that delivers the drug directly to cancer cells." },
  { term: "Antigen", def: "Any substance (such as a protein) that causes the immune system to respond. Cancer cells often have antigens that the immune system can learn to recognize and attack." },
  { term: "B cells", def: "Cells that release antibodies to defend against harmful invaders in your body. Each B cell is programmed to make one specific antibody (such as an antibody to the common cold virus)." },
  { term: "Biomarkers", def: "Proteins or genes that provide a more detailed understanding of a tumor, its prognosis, and the potential response to treatment." },
  { term: "Biopsy", def: "A procedure in which a doctor removes a small sample of tissue. This sample is then examined under a microscope so that cellular abnormalities can be observed." },
  { term: "Bispecific antibodies", def: "Specially engineered proteins that can bind to two different targets at the same time to help the immune system attack cancer." },
  { term: "Cancer vaccines", def: "A type of immunotherapy that train the immune system to recognize and attack cancer. Some cancer vaccines prevent cancer, while others treat existing cancer." },
  { term: "Chemotherapy", def: "Often called \"chemo\", is a cancer treatment with drugs that kills fast-dividing cells. Chemotherapy can be used alone or with surgery, radiation, and/or immunotherapy." },
  { term: "Chimeric antigen receptor T-cells (CAR T-cells)", def: "A type of engineered T cell used in adoptive T-cell therapy. They have special receptors called CARs that recognize specific proteins on cancer cells and eliminate those cells." },
  { term: "Clinical trials", def: "An important part of medical research that form the basis for the approval of all new treatments. The primary goals of clinical trials are to figure out whether a treatment works and if it is safe." },
  { term: "Cytokines", def: "Messenger molecules that help control the growth and activity of your immune system cells and blood cells." },
  { term: "Genetic mutations", def: "Changes in your DNA sequence. Some genetic mutations are associated with some types of cancer, and some genetic mutations may indicate a better chance of response to a specific immunotherapy treatment." },
  { term: "Immune checkpoint inhibitors (ICIs)", def: "A type of immunotherapy used to \"release the brakes\" on the immune system, allowing your body to respond more aggressively to cancer. ICIs are a type of immunomodulator." },
  { term: "Immune system", def: "A highly evolved network of organs, cells, and molecules that helps defend your body against threats such as bacteria, viruses, and cancer." },
  { term: "Immune-related side effects (irAEs)", def: "Reactions that happen when the immune system becomes overactive and starts affecting healthy parts of the body. These side effects can impact organs like the skin, liver, lungs, or intestines and often need prompt treatment." },
  { term: "Immuno-oncology", def: "The study and development of cancer treatments that use your body's own immune system." },
  { term: "Immunomodulators", def: "Sometimes called immune modulators, are drugs that boost or modify how your immune system responds to cancer. They can enhance the activity of your immune cells or increase the production of signals (like cytokines) that help your body fight cancer more effectively." },
  { term: "Immunotherapy", def: "A form of cancer treatment that uses the power of the body's own immune system to prevent, control, and eliminate cancer. Immunotherapy can be used for many types of cancer, either alone or in combination with other treatment types." },
  { term: "Monoclonal antibodies", def: "A special type of protein designed to target antigens, or markers, located on the surface of cancer cells. Antibodies locate antigens and recruit immune cells to attack." },
  { term: "Neoadjuvant therapies", def: "Additional cancer treatments given before the primary treatment, such as surgery, to make the primary treatment more effective. Immunotherapies are often used as neoadjuvant therapies." },
  { term: "Oncolytic virus therapy", def: "A type of immunotherapy that uses a modified virus that can both cause tumor cells to self destruct and activate a greater immune response." },
  { term: "Personalized (or precision) medicine", def: "Uses information about a person's genes, proteins, and/or other factors to create a treatment plan for their specific cancer." },
  { term: "Proteins", def: "Molecules made up of amino acids. They are the basis of your body's structures, such as skin and hair, and of other substances such as enzymes, cytokines, and antibodies." },
  { term: "Radiation", def: "Radiation therapy uses high-energy particles or waves to destroy or damage cancer cells. It is one of the most common treatments for cancer and can be used alone or with other forms of treatment." },
  { term: "Recurrence", def: "A term used to describe the return or progression of cancer following treatment." },
  { term: "Remission", def: "Refers to a complete or partial disappearance of the signs and symptoms of cancer in response to treatment. It is a period in which the disease is considered under control." },
  { term: "Staging", def: "Used to determine the extent (or \"stage\") of cancer. It is based on whether a tumor is local to its area of origin or has spread to the lymph nodes or other parts of your body as well as how deeply it has invaded surrounding tissues." },
  { term: "T cells", def: "Cells that help identify and destroy infected or abnormal cells in your body. Some T cells directly kill their target cells, while others coordinate your immune response by signaling other immune cells." },
  { term: "Tumor", def: "An abnormal lump or mass of tissue. Tumors can be benign (non-cancerous) or malignant (cancerous)." },
  { term: "Tumor microenvironment (TME)", def: "Includes the cells, blood vessels, and other substances that surround and support a tumor. It can affect how the cancer grows and responds to treatment, including immunotherapy." },
];

export default function CriImmunotherapyPatientGuidePage() {
  return (
    <main className="font-sans text-gray-700 leading-relaxed">
      {/* Hero */}
      <section
        className="hero relative overflow-hidden rounded-2xl border border-blue-200 px-8 py-16 text-center shadow-lg mb-12"
        style={{
          background: "linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #f0f9ff 100%)",
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
        }}
      >
        <div
          className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-hero-glow"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="badge relative z-10 mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
          <i className="fas fa-microscope mr-2 text-blue-600" aria-hidden />
          <span className="font-medium text-gray-700">Education</span>
        </div>
        <h1
          className="hero-title relative z-10 m-0 mb-6 text-3xl font-black md:text-4xl lg:text-5xl"
          style={{
            background: "linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Immunotherapy
        </h1>
        <div className="hero-image-container relative z-10 my-6">
          <Image
            src="https://nlsmf.org/wp-content/uploads/2025/08/immunotherapy.png"
            alt="Immunotherapy"
            className="hero-immunotherapy-image mx-auto max-h-[250px] w-auto max-w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            width={1200}
            height={800}
          />
        </div>
        <div
          className="divider relative z-10 mx-auto my-8 h-1 w-24 rounded"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
            boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
          }}
          aria-hidden
        />
        <p className="hero-description relative z-10 mx-auto max-w-[700px] text-lg text-gray-600">
          Essential information and latest research on cancer immunotherapy for leiomyosarcoma patients and caregivers.
        </p>
        <div className="feature-tags relative z-10 mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            <i className="fas fa-syringe mr-2" aria-hidden />
            Immunotherapy
          </div>
          <div className="flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            <i className="fas fa-vial mr-2" aria-hidden />
            Research
          </div>
          <div className="flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">
            <i className="fas fa-book-medical mr-2" aria-hidden />
            Resources
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 pb-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="sidebar-container order-2 lg:order-1 sticky top-24 h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <nav className="sidebar-nav mb-6">
            <h3 className="sidebar-title mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-violet-700">
              Quick Navigation
            </h3>
            <ul className="nav-list list-none p-0 m-0 space-y-1">
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#immunotherapy-guide" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  CRI Patient Guide
                </a>
              </li>
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#what-is" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  What is Immunotherapy
                </a>
              </li>
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#research" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Molecular Research
                </a>
              </li>
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#faq" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Patient FAQ
                </a>
              </li>
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#treatment" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Treatment Options
                </a>
              </li>
              <li className="nav-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a href="#glossary" className="nav-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Medical Glossary
                </a>
              </li>
            </ul>
          </nav>
          <div className="sidebar-resources mb-6">
            <h3 className="sidebar-title mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-violet-700">
              Additional Resources
            </h3>
            <ul className="resource-list list-none p-0 m-0 space-y-1">
              <li className="resource-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <a
                  href="https://www.nccn.org/guidelines/category_1"
                  className="resource-link block font-medium text-gray-600 no-underline hover:text-violet-700"
                  {...ext}
                >
                  NCCN Guidelines
                </a>
              </li>
              <li className="resource-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <Link href="/clinical-trials-research-information" className="resource-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Clinical Trials
                </Link>
              </li>
              <li className="resource-item border-l-4 border-transparent pl-3 transition-colors hover:border-violet-600 hover:bg-violet-50">
                <Link href="/leiomyosarcoma-support-group" className="resource-link block font-medium text-gray-600 no-underline hover:text-violet-700">
                  Support Groups
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="sidebar-cta rounded-xl p-6 text-white mt-8"
            style={{
              background: "linear-gradient(135deg, #7e22ce, #4338ca)",
            }}
          >
            <h3 className="cta-title mb-3 border-b border-white/20 pb-2 text-base font-semibold text-white">
              Need Support?
            </h3>
            <p className="cta-text mb-5 text-sm text-white/95">
              Connect with our community for personalized guidance on immunotherapy options.
            </p>
            <Link
              href="/contact"
              className="cta-button inline-block rounded-md bg-white px-5 py-3 font-medium text-violet-700 no-underline transition-all hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div
          className="content-container order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8"
          style={{
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            className="absolute left-0 right-0 top-0 h-1"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #06b6d4)",
            }}
            aria-hidden
          />

          <div className="content-grid mb-12 grid gap-8 md:grid-cols-2">
            {/* Left column */}
            <div className="content-column flex flex-col gap-6">
              <section id="immunotherapy-guide" className="content-section scroll-mt-24">
                <h2
                  className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  CRI Patient Guide
                </h2>
                <div className="resource-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300">
                  <h3 className="card-title m-0 mb-3 text-lg font-bold text-gray-800">
                    A Patient&apos;s Guide to Cancer Immunotherapy
                  </h3>
                  <p className="resource-link mb-4">
                    <a
                      href="/documents/CRI_Patients-Guide-25.pdf"
                      className="font-medium text-blue-600 no-underline hover:underline"
                      {...ext}
                    >
                      Download Guide (PDF)
                    </a>
                  </p>
                  <p className="resource-description m-0 mb-2 text-gray-600">
                    <em>Hope in Action</em> is a clear, compassionate resource for patients, caregivers, and loved ones. It explains what immunotherapy is, how it works, what to expect during treatment, and how to get support.
                  </p>
                </div>
              </section>

              <section id="what-is" className="content-section scroll-mt-24">
                <h2
                  className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  What is Immunotherapy?
                </h2>
                <div className="info-box rounded-xl border border-slate-200 border-l-4 border-l-indigo-500 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)" }}>
                  <p className="m-0">Immunotherapy uses a person&apos;s own immune system to fight cancer. It can boost or change how the immune system works to find and attack cancer cells.</p>
                  <p className="source-citation m-0 mt-2 text-right italic text-slate-500">– American Cancer Society</p>
                </div>
              </section>

              <section id="research" className="content-section scroll-mt-24">
                <h2
                  className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  LMS Research
                </h2>
                <div className="research-box rounded-xl border border-slate-200 border-l-4 border-l-emerald-500 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)" }}>
                  <h4 className="research-title m-0 mb-2 text-base font-semibold text-gray-800">
                    Targeting Molecular Features of Leiomyosarcoma
                  </h4>
                  <p className="research-authors m-0 mb-3 italic text-gray-500 text-sm">
                    Cope BM, Traweek RS, Lazcano R, et al.
                  </p>
                  <div className="research-links flex flex-wrap gap-4">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/37046760/"
                      className="inline-block rounded-md bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 no-underline transition-all hover:bg-emerald-100 hover:-translate-y-0.5"
                      {...ext}
                    >
                      PubMed Study
                    </a>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/books/NBK551667/"
                      className="inline-block rounded-md bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 no-underline transition-all hover:bg-emerald-100 hover:-translate-y-0.5"
                      {...ext}
                    >
                      NCBI Reference
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column - FAQ */}
            <div className="content-column flex flex-col gap-6">
              <section id="faq" className="content-section scroll-mt-24">
                <h2
                  className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Patient FAQ
                </h2>
                <ImmunotherapyFaq />
              </section>
            </div>
          </div>

          {/* Full-width Sarcoma Research */}
          <section id="treatment" className="content-section full-width mb-12 scroll-mt-24">
            <h2
              className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Sarcoma Immunotherapy Research
            </h2>
            <div className="research-overview mb-6">
              <p className="research-summary rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-base font-medium leading-relaxed text-gray-800">
                Currently, there are three FDA-approved immunotherapy options for patients with sarcoma, and many more are being investigated in clinical trials. Several other immunotherapies have shown effectiveness in clinical trials and could become approved for patients in the near future.
              </p>
            </div>
            <div className="research-links-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="research-link-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md">
                <h4 className="research-card-title m-0 mb-3 text-base font-semibold text-blue-800">
                  Cancer Research Institute - Sarcoma
                </h4>
                <p className="research-card-description m-0 mb-4 text-sm leading-relaxed text-gray-500">
                  Comprehensive overview of FDA-approved immunotherapy options and ongoing clinical trials for sarcoma patients.
                </p>
                <a
                  href="https://www.cancerresearch.org/immunotherapy-by-cancer-type/sarcoma"
                  className="research-card-link inline-block rounded-md px-4 py-2 text-sm font-medium text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
                  {...ext}
                >
                  View Resource
                </a>
              </div>
              <div className="research-link-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md">
                <h4 className="research-card-title m-0 mb-3 text-base font-semibold text-blue-800">
                  ASCO: Current Data and Promising Approaches
                </h4>
                <p className="research-card-description m-0 mb-4 text-sm leading-relaxed text-gray-500">
                  Sarcoma is characterized by numerous subtypes each with unique biology/immune microenvironment; therefore, a histology-specific approach is required.
                </p>
                <a
                  href="https://ascopubs.org/doi/10.1200/EDBK_432234"
                  className="research-card-link inline-block rounded-md px-4 py-2 text-sm font-medium text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
                  {...ext}
                >
                  Read Study
                </a>
              </div>
              <div className="research-link-card rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md">
                <h4 className="research-card-title m-0 mb-3 text-base font-semibold text-blue-800">
                  American Cancer Society - Soft Tissue Sarcoma
                </h4>
                <p className="research-card-description m-0 mb-4 text-sm leading-relaxed text-gray-500">
                  Immunotherapy medicines help the immune system recognize and destroy cancer cells more effectively. General sarcoma drugs and symptoms information.
                </p>
                <a
                  href="https://www.cancer.org/cancer/types/soft-tissue-sarcoma/treating/immunotherapy.html"
                  className="research-card-link inline-block rounded-md px-4 py-2 text-sm font-medium text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
                  {...ext}
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* Glossary */}
          <section id="glossary" className="content-section scroll-mt-24">
            <h2
              className="section-title mb-8 border-b-2 pb-4 text-2xl font-extrabold"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Cancer Research Institute&apos;s Glossary of Medical Terms
            </h2>
            <p className="glossary-intro mb-12 text-center text-lg italic text-gray-500">
              Essential medical terminology found in research studies and publications to help you better understand immunotherapy and cancer treatment.
            </p>
            <div className="glossary-grid mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GLOSSARY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="glossary-item relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-0.5 transition-transform duration-300 hover:scale-x-100"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                    }}
                  />
                  <h4 className="glossary-term m-0 mb-3 text-lg font-bold leading-snug text-blue-800">
                    {item.term}
                  </h4>
                  <p className="glossary-definition m-0 text-sm leading-relaxed text-gray-600 md:text-base">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
            <div className="glossary-source rounded-xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 p-8 text-center">
              <p className="m-0 text-gray-600 text-sm md:text-base">
                <em>Source: Cancer Research Institute - Hope in Action: A Patient&apos;s Guide to Cancer Immunotherapy</em>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
