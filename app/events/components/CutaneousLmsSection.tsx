export default function CutaneousLmsSection() {
  return (
    <section id="cutaneous-lms" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-rose-600">Cutaneous Leiomyosarcoma</h2>
      <div className="rounded-xl border border-rose-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <i className="fas fa-allergies" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Cutaneous LMS Resources
            </h3>
            <p className="text-sm text-slate-500">
              Information on cutaneous Leiomyosarcoma
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos provide information about cutaneous Leiomyosarcoma, a rare subtype
          of LMS that affects the skin, including diagnosis and treatment options.
        </p>
        <div className="rounded-xl border border-rose-100 bg-white p-4 text-sm text-slate-500">
          No videos are currently available for this topic. Please check back later for
          updates.
        </div>
      </div>
    </section>
  );
}
