"use client";

import Link from "next/link";
import Image from "next/image";
import { clinicianTestimonials, patientTestimonials } from "@/app/testimonials/data";

const experts = clinicianTestimonials.filter((t) => t.homepageDisplay);
const patients = patientTestimonials.filter((t) => t.homepageDisplay);

function ExpertCard({ t }: { t: (typeof experts)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl border border-indigo-100 shadow-sm p-5 mx-3 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-indigo-100 flex items-center justify-center">
          {t.imageUrl ? (
            <Image src={t.imageUrl} alt={t.name} width={44} height={44} className="object-cover w-full h-full" />
          ) : (
            <span className="text-indigo-700 font-bold text-lg">{t.name.charAt(0)}</span>
          )}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 leading-tight">{t.name}</p>
          {t.institution && <p className="text-xs text-indigo-600 italic leading-tight">{t.institution}</p>}
          <p className="text-xs text-slate-400">Research Expert</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 italic">&ldquo;{t.text.replace(/^[""]|[""]$/g, "")}&rdquo;</p>
    </div>
  );
}

function PatientCard({ t }: { t: (typeof patients)[0] }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-purple-100 shadow-sm p-5 mx-3 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600 font-bold text-lg">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 leading-tight">{t.name}</p>
          <p className="text-xs text-slate-400">Patient &amp; Family</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 italic">&ldquo;{t.text.replace(/^[""]|[""]$/g, "")}&rdquo;</p>
    </div>
  );
}

export default function TestimonialsScrollSection() {
  const expertDoubled = [...experts, ...experts];
  const patientDoubled = [...patients, ...patients];

  return (
    <section className="w-full bg-gradient-to-b from-[#f5f3ff] to-white py-14 overflow-hidden">
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-experts {
          animation: marquee-ltr 45s linear infinite;
        }
        .marquee-patients {
          animation: marquee-ltr 38s linear infinite;
        }
        .marquee-experts:hover,
        .marquee-patients:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">Voices from the Community</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">What People Say About NLMSF</h2>
        </div>
        <Link
          href="/testimonials"
          className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
        >
          View All <i className="fas fa-arrow-right text-xs" aria-hidden />
        </Link>
      </div>

      {/* Expert row */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-6 mb-3 max-w-[1280px] mx-auto">
          <i className="fas fa-user-md mr-1.5" aria-hidden /> Research Experts &amp; Clinicians
        </p>
        <div className="overflow-hidden">
          <div className="flex marquee-experts" style={{ width: "max-content" }}>
            {expertDoubled.map((t, i) => (
              <ExpertCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Patient row */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest px-6 mb-3 max-w-[1280px] mx-auto">
          <i className="fas fa-heart mr-1.5" aria-hidden /> Patients &amp; Caregivers
        </p>
        <div className="overflow-hidden">
          <div className="flex marquee-patients" style={{ width: "max-content" }}>
            {patientDoubled.map((t, i) => (
              <PatientCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
