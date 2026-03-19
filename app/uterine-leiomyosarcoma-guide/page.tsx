import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Know About Uterine Leiomyosarcoma | NLMSF",
  description:
    "Essential information about uterine leiomyosarcoma (uLMS) including treatment, follow-up care, recurrence, novel therapies, staging, and the morcellation safety warning.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export default function UterineLeiomyosarcomaGuidePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mb-8 max-w-[1400px] rounded-xl border border-pink-200 px-6 py-12 text-center shadow-md md:px-8"
        style={{ background: "linear-gradient(135deg, #fdf2f8, #eef2ff)" }}
      >
        <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
          <i className="fas fa-ribbon mr-2 text-pink-600" aria-hidden />
          <span className="font-medium text-gray-700">Patient Guide</span>
        </div>
        <h1
          className="mb-4 text-2xl font-extrabold md:text-4xl"
          style={{
            background: "linear-gradient(to right, #be185d, #7e22ce)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          What to Know About Uterine Leiomyosarcoma
        </h1>
        <div
          className="mx-auto my-6 h-1 w-16 rounded"
          style={{ background: "linear-gradient(to right, #be185d, #7e22ce)" }}
          aria-hidden
        />
        <p className="mx-auto mb-0 max-w-[750px] text-lg text-gray-600">
          Essential information for patients and caregivers about uterine LMS — treatment, follow-up, recurrence management, emerging therapies, and critical safety warnings.
        </p>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 pb-16 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[240px_1fr]">
        {/* Sidebar nav */}
        <aside className="sticky top-24 max-md:static">
          <nav className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm" aria-label="Page contents">
            <h3 className="mb-5 border-b-2 border-gray-100 pb-2 text-lg font-bold text-gray-900">
              On This Page
            </h3>
            <div className="flex flex-col gap-1">
              <a href="#overview" className="block border-l-4 border-pink-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-pink-600 hover:text-pink-600">Overview</a>
              <a href="#primary-treatment" className="block border-l-4 border-violet-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-violet-600 hover:text-violet-600">Primary Treatment</a>
              <a href="#follow-up" className="block border-l-4 border-blue-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-blue-600 hover:text-blue-600">Follow-Up</a>
              <a href="#recurrence" className="block border-l-4 border-teal-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-teal-600 hover:text-teal-600">Recurrent Disease</a>
              <a href="#novel-therapies" className="block border-l-4 border-indigo-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-indigo-600 hover:text-indigo-600">Novel Therapies</a>
              <a href="#nci-resources" className="block border-l-4 border-purple-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-purple-600 hover:text-purple-600">NCI Resources</a>
              <a href="#morcellation" className="block border-l-4 border-red-500 py-2 pl-4 text-sm font-medium text-gray-600 no-underline transition-colors hover:border-red-600 hover:text-red-600">Morcellation Warning</a>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          {/* Overview */}
          <section id="overview" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-pink-200 pb-2 text-xl font-bold text-pink-700 md:text-2xl">
              Overview
            </h2>
            <div
              className="rounded-xl border border-pink-200 p-6 shadow-md"
              style={{ background: "linear-gradient(to right, #fdf2f8, #fce7f3)" }}
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-500">
                  <i className="fas fa-ribbon text-sm text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="m-0 text-xl font-bold">Uterine Leiomyosarcoma (uLMS)</h3>
                  <p className="m-0 mt-1 text-sm text-gray-600">A rare and aggressive uterine malignancy</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Uterine sarcomas are rare and heterogeneous malignant mesenchymal tumors, representing only <strong>1% to 3%</strong> of gynecological cancers and <strong>3% to 7%</strong> of uterine malignancies, with an annual global incidence of <strong>0.5 to 3.3 cases per 100,000 women</strong>.
                </p>
                <p>
                  These tumors are the most lethal among uterine malignancies, exhibiting a 5-year overall survival rate of <strong>25% to 70%</strong>, depending on histologic subtype and stage. Uterine leiomyosarcoma is the predominant subtype, accounting for <strong>60%–70%</strong> of cases.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S1048891X25011120"
                  className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white no-underline transition-colors hover:bg-pink-700"
                  {...ext}
                >
                  2025 Science Direct Update <i className="fas fa-external-link-alt text-xs" aria-hidden />
                </a>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-pink-200 bg-white shadow-sm">
                <div className="border-b border-pink-100 px-4 py-3">
                  <h4 className="m-0 text-base font-semibold text-pink-700">Understanding uLMS: Expert Video</h4>
                </div>
                <div className="relative h-0 pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/KzPj_xrz334"
                    title="Uterine Sarcoma Care"
                    className="absolute left-0 top-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Primary Treatment */}
          <section id="primary-treatment" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-violet-200 pb-2 text-xl font-bold text-violet-700 md:text-2xl">
              Primary Treatment
            </h2>
            <div className="rounded-xl border border-violet-200 bg-white p-6 shadow-sm">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Treatment decisions for uterine leiomyosarcoma are complex and often based on limited and controversial evidence. For resectable disease, <strong>early and complete resection is the cornerstone of management</strong>, as surgery is currently the only curative option for uterine leiomyosarcoma.
                </p>
                <p>
                  In cases of unresectable, metastatic, or recurrent disease, a <strong>multimodal treatment strategy</strong> including surgery, chemotherapy, and radiotherapy (RT) is recommended. Centralized management in referral centers is advised.
                </p>
              </div>
            </div>
          </section>

          {/* Follow-Up */}
          <section id="follow-up" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-700 md:text-2xl">
              Follow-Up
            </h2>
            <div className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
                <i className="fas fa-exclamation-circle mt-0.5 shrink-0 text-xl text-blue-600" aria-hidden />
                <p className="m-0 text-sm text-blue-900">
                  Due to the aggressive nature of uterine leiomyosarcoma and the high risk of recurrence, diligent clinical and radiological follow-up is essential. Patients must be educated on the symptoms of recurrence and the need for timely medical consultation.
                </p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Clinical follow-up, including a comprehensive history and physical examination, is recommended <strong>every 3 to 4 months</strong> during the first 2 to 3 years, then <strong>every 6 to 12 months</strong> thereafter.
                </p>
                <p>
                  Radiological monitoring with <strong>contrast-enhanced CT</strong> of the chest, abdomen, and pelvis is recommended at regular intervals.
                </p>
              </div>
            </div>
          </section>

          {/* Recurrent Disease */}
          <section id="recurrence" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-teal-200 pb-2 text-xl font-bold text-teal-700 md:text-2xl">
              Treatment of Recurrent Disease
            </h2>
            <div className="rounded-xl border border-teal-200 bg-white p-6 shadow-sm">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Recurrent uterine leiomyosarcoma often presents as abdominal/pelvic disease or isolated lung metastases. Managing recurrent uterine leiomyosarcoma requires a <strong>tailored, patient-centered approach</strong>, similar to that used in the advanced/metastatic setting.
                </p>
                <p>
                  This multidisciplinary approach integrates systemic chemotherapy and/or loco-regional treatment based on the recurrence site, local resectability, prior therapies, and disease-free interval.
                </p>
              </div>
            </div>
          </section>

          {/* Novel Therapies */}
          <section id="novel-therapies" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-indigo-200 pb-2 text-xl font-bold text-indigo-700 md:text-2xl">
              Novel Therapeutic Agents &amp; Future Perspectives
            </h2>
            <div
              className="rounded-xl border border-indigo-200 p-6 shadow-sm"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.03), rgba(255,255,255,1) 50%)" }}
            >
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Advances in multi-omics and molecular insights offer promising avenues for personalized treatment in uterine leiomyosarcoma. Potential approaches under investigation include:
                </p>
                <ul className="list-none space-y-2 p-0">
                  {[
                    "Anti-angiogenic agents",
                    "Immune checkpoint inhibitors",
                    "Agents targeting HER-2 (human epidermal growth factor receptor 2)",
                    "PARP inhibitors",
                    "Novel combination regimens",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-gray-500">
                  However, designing prospective clinical trials for uterine leiomyosarcoma faces challenges due to its rarity.
                </p>
              </div>
            </div>
          </section>

          {/* NCI Resources */}
          <section id="nci-resources" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-purple-200 pb-2 text-xl font-bold text-purple-700 md:text-2xl">
              National Cancer Institute Resources
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 border-t-4 border-t-violet-600 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <i className="fas fa-hospital text-xl text-violet-600" aria-hidden />
                  <h3 className="m-0 text-base font-semibold text-gray-900">NCI — Leiomyosarcoma</h3>
                </div>
                <p className="m-0 mb-3 text-sm text-gray-500">Rare soft tissue tumor overview from the National Cancer Institute</p>
                <a
                  href="https://www.cancer.gov/pediatric-adult-rare-tumor/rare-tumors/rare-soft-tissue-tumors/leiomyosarcoma"
                  className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 no-underline hover:underline"
                  {...ext}
                >
                  View Resource <i className="fas fa-arrow-right text-xs" aria-hidden />
                </a>
              </div>
              <div className="rounded-xl border border-gray-200 border-t-4 border-t-violet-600 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <i className="fas fa-layer-group text-xl text-violet-600" aria-hidden />
                  <h3 className="m-0 text-base font-semibold text-gray-900">Staging &amp; Treatment</h3>
                </div>
                <p className="m-0 mb-3 text-sm text-gray-500">NCI uterine sarcoma treatment PDQ for patients</p>
                <a
                  href="https://www.cancer.gov/types/uterine/patient/uterine-sarcoma-treatment-pdq"
                  className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 no-underline hover:underline"
                  {...ext}
                >
                  View Resource <i className="fas fa-arrow-right text-xs" aria-hidden />
                </a>
              </div>
              <div className="rounded-xl border border-gray-200 border-t-4 border-t-violet-600 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <i className="fas fa-clipboard-list text-xl text-violet-600" aria-hidden />
                  <h3 className="m-0 text-base font-semibold text-gray-900">FIGO Surgical Staging</h3>
                </div>
                <p className="m-0 mb-3 text-sm text-gray-500">MSD Manual — FIGO staging of uterine sarcoma</p>
                <a
                  href="https://www.msdmanuals.com/professional/multimedia/table/figo-surgical-staging-of-uterine-sarcoma-leiomyosarcoma-and-endometrial-stromal-sarcoma"
                  className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 no-underline hover:underline"
                  {...ext}
                >
                  View Resource <i className="fas fa-arrow-right text-xs" aria-hidden />
                </a>
              </div>
            </div>
          </section>

          {/* Morcellation Warning */}
          <section id="morcellation" className="mb-12 scroll-mt-24">
            <h2 className="mb-6 border-b-2 border-red-200 pb-2 text-xl font-bold text-red-700 md:text-2xl">
              <i className="fas fa-exclamation-triangle mr-2" aria-hidden />
              Laparoscopic Power Morcellators — Safety Warning
            </h2>

            <div className="mb-6 rounded-xl border-2 border-red-300 bg-red-50 p-6 shadow-md">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600">
                  <i className="fas fa-exclamation text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="m-0 text-lg font-bold text-red-900">Important Patient Alert</h3>
                  <p className="m-0 mt-1 text-sm text-red-700">Read carefully and discuss with your provider</p>
                </div>
              </div>
              <div className="space-y-4 text-red-900 leading-relaxed">
                <p>
                  <strong>Read more and make sure you discuss thoroughly with your provider if this procedure is introduced and suggested to you. This information is posted as an important warning alert.</strong>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">FDA Update (May 26, 2023)</h3>
                <p>
                  The FDA issued final guidance: <em>Non-Clinical Performance Assessment of Tissue Containment Systems Used During Power Morcellation Procedures</em>. This guidance provides recommendations to help manufacturers comply with special controls related to non-clinical performance data for gynecologic and general use laparoscopic power morcellation containment systems.
                </p>
                <p>
                  Laparoscopic power morcellators are <strong>Class II medical devices</strong> used during laparoscopic (minimally invasive) surgeries to cut tissue into smaller pieces so the tissue can be removed through a small incision site (typically 2 cm or less). These devices are commonly used in hysterectomy and myomectomy procedures.
                </p>
                <a
                  href="https://www.fda.gov/medical-devices/surgery-devices/laparoscopic-power-morcellators"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white no-underline transition-colors hover:bg-gray-900"
                  {...ext}
                >
                  FDA: Laparoscopic Power Morcellators <i className="fas fa-external-link-alt text-xs" aria-hidden />
                </a>
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">Key Warnings from Medical Organizations</h3>

                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                  <h4 className="m-0 mb-2 font-bold text-red-900">ACOG — Uterine Morcellation for Presumed Leiomyomas</h4>
                  <p className="m-0 text-sm text-red-800">
                    Leiomyosarcoma cannot be reliably diagnosed preoperatively; thus, there is a risk that a woman with a presumed leiomyoma may have a malignancy that may be spread through morcellation, leading to a <strong>potentially worsened prognosis</strong>.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                  <h4 className="m-0 mb-2 font-bold text-red-900">No. 371 — Morcellation During Gynaecologic Surgery</h4>
                  <p className="m-0 text-sm text-red-800">
                    Women should be counselled that in the case of unexpected uterine (sarcoma, endometrial), cervical, and/or tubo-ovarian cancer, the use of a morcellator is associated with <strong>increased risk of tumour dissemination</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related pages */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/uterine-lms"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 no-underline shadow-sm transition-colors hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700"
            >
              <i className="fas fa-flask text-sm" aria-hidden />
              Uterine LMS Research Hub
            </Link>
            <Link
              href="/abcs-of-new-diagnosis"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 no-underline shadow-sm transition-colors hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700"
            >
              <i className="fas fa-arrow-left text-sm" aria-hidden />
              ABC&apos;s of New Diagnosis
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
