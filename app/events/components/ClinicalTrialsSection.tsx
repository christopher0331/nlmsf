import Image from "next/image";

export default function ClinicalTrialsSection() {
  return (
    <section id="clinical-trials" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-orange-600">Clinical Trials</h2>
      <div className="rounded-xl border border-orange-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <i className="fas fa-flask" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Clinical Trial Information</h3>
            <p className="text-sm text-slate-500">
              Understanding and finding clinical trials for LMS
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos provide information about clinical trials for Leiomyosarcoma,
          including how to find appropriate trials, what to expect, and how to determine if
          a trial is right for you.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/jVMw7irewYI"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/jVMw7irewYI/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                CH
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">
                  Dr. Candace Haddox
                </h5>
                <p className="text-xs text-slate-500">
                  Dana-Farber Cancer Institute and Harvard Medical School, Boston, MA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Phase 1 Clinical Trial Using Peposertib and Liposomal Doxorubicin
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 26, 2025
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Haddox discusses a novel Phase 1 clinical trial using Peposertib (M3814)
              and low-dose Liposomal Doxorubicin for metastatic Leiomyosarcoma and other soft
              tissue sarcomas.
            </p>
            <a
              href="https://youtu.be/jVMw7irewYI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/h4mi-aJT1tk"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/h4mi-aJT1tk/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                SP
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Seth Pollack</h5>
                <p className="text-xs text-slate-500">
                  Lurie Cancer Center, Northwestern University, Chicago, IL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Phase II Clinical Trial Using Zanzalintinib (XL092)
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> January 31, 2025
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Pollack discusses a Phase II clinical trial for Leiomyosarcoma patients
              using Zanzalintinib, a Tyrosine Kinase Inhibitor, currently enrolling at
              Northwestern University.
            </p>
            <a
              href="https://youtu.be/h4mi-aJT1tk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/EPeR4Wui3Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/EPeR4Wui3Bs/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                JM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. John Mullinax</h5>
                <p className="text-xs text-slate-500">
                  Moffitt Cancer Center, Tampa, FL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              STRASS 2/3 Clinical Trial for Retroperitoneal Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> January 2025
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Mullinax discusses the STRASS 2/3 clinical trial for the initial treatment
              of retroperitoneal Leiomyosarcoma and Liposarcoma.
            </p>
            <a
              href="https://youtu.be/EPeR4Wui3Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/kfOK0sNa4JQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/kfOK0sNa4JQ/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                VA
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Vishu Avutu</h5>
                <p className="text-xs text-slate-500">
                  Memorial Sloan Kettering Cancer Center, New York, NY
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Phase 1a/2 Clinical Trial of GI-102 for Advanced Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Avutu discusses a Phase 1a/2 clinical trial of GI-102, which boosts the
              immune system by blocking CTLA-4 and increasing immune cells via IL-2, for
              advanced sarcoma patients.
            </p>
            <a
              href="https://youtu.be/kfOK0sNa4JQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/ioL0850rt7A"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/ioL0850rt7A/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                P
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Expert Panel</h5>
                <p className="text-xs text-slate-500">Multiple Institutions</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Clinical Trials Perspectives
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              A panel discussion by sarcoma medical oncologists on clinical trials for
              Leiomyosarcoma and other sarcomas.
            </p>
            <a
              href="https://youtu.be/ioL0850rt7A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/AU46FmcSc3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/AU46FmcSc3Y/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                GC
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Gregory Cote</h5>
                <p className="text-xs text-slate-500">
                  Massachusetts General Hospital, Boston, MA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Lurbinectedin in Combination with Doxorubicin for Advanced Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 8, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Cote provides an overview of clinical trials and discusses his trial
              using Lurbinectedin with Doxorubicin for advanced Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/AU46FmcSc3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=ZHpMtNTwSRw"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/ZHpMtNTwSRw/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                BV
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Brian Van Tine</h5>
                <p className="text-xs text-slate-500">
                  Siteman Cancer Center, Washington University, St. Louis, MO
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Cabozantinib with PD-1 and CTLA-4 Inhibition and Other Trials
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> July 20, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Van Tine discusses a Phase II trial of Cabozantinib with PD-1 and CTLA-4
              inhibition and updates on three ongoing trials: Unesbulin, Pegylated Arginine
              Deiminase, and Olaparib with Temozolomide.
            </p>
            <a
              href="https://www.youtube.com/watch?v=ZHpMtNTwSRw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/V80SxCwx_cE"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/V80SxCwx_cE/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                BV
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Brian Van Tine</h5>
                <p className="text-xs text-slate-500">
                  Siteman Cancer Center, Washington University, St. Louis, MO
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Updates on Three Promising Active LMS Clinical Trials
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 14, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Van Tine provides updates on three promising clinical trials for
              Leiomyosarcoma patients.
            </p>
            <a
              href="https://youtu.be/V80SxCwx_cE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/vArSCfUnAbM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/vArSCfUnAbM/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                EN
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Elise Nassif</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Efficacy of Early-Phase Clinical Trials in Soft Tissue Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> September 21, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Nassif discusses the efficacy of early-phase clinical trials in soft
              tissue sarcomas, including Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/vArSCfUnAbM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/HbwUvXcl7wg"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/HbwUvXcl7wg/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                BV
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Brian Van Tine</h5>
                <p className="text-xs text-slate-500">
                  Siteman Cancer Center, Washington University, St. Louis, MO
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Unesbulin, New Treatment for Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> June 28, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Van Tine discusses Unesbulin (PTC596) as a new treatment for Leiomyosarcoma
              in an upcoming clinical trial.
            </p>
            <a
              href="https://youtu.be/HbwUvXcl7wg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/mY2q7q5VOlA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/mY2q7q5VOlA/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                MI
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Matthew Ingham</h5>
                <p className="text-xs text-slate-500">
                  Herbert Irving Comprehensive Cancer Center, Columbia University Medical
                  Center, New York, NY
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              New Treatment Approaches for LMS in Preclinical or Clinical Trials
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> June 8, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Ingham discusses new treatment approaches for Leiomyosarcoma in preclinical
              and clinical trials, including ATX-101 and Olaparib with Temozolomide.
            </p>
            <a
              href="https://youtu.be/mY2q7q5VOlA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/62gyn3nt6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/62gyn3nt6Z8/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                GS
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Dr. Gary Schwartz</h5>
                <p className="text-xs text-slate-500">
                  Herbert Irving Comprehensive Cancer Center, Columbia University Medical
                  Center, New York, NY
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Olaparib and Temozolomide for Advanced Uterine Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 24, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Schwartz discusses a Phase II clinical trial evaluating Olaparib and
              Temozolomide for advanced uterine Leiomyosarcoma, moving to Phase III.
            </p>
            <a
              href="https://youtu.be/62gyn3nt6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/VTgeCwbEmkY"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/VTgeCwbEmkY/mqdefault.jpg"
                  alt="Clinical Trials Discussion - Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                VM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-orange-700">Varun Monga, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Medical Oncologist — UCSF, San Francisco, CA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Clinical Trials Discussion
            </h4>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Monga discusses clinical trials relevant to
              Leiomyosarcoma patients.
            </p>
            <a
              href="https://youtu.be/VTgeCwbEmkY"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
