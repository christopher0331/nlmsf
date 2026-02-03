import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Survivor Tips | NLMSF",
  description:
    "Practical guidance for caregivers supporting someone with LMS — communication, advocacy, insurance, and self-care.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const TIPS = [
  { icon: "fa-clock", title: "Make Time for Yourself", desc: "Take time off, join a support group, talk with a counselor, and be nice to yourself." },
  { icon: "fa-search", title: "Find Meaning During Cancer Journey", desc: "Look at life in a new way, find purpose and value in your experience." },
  { icon: "fa-book", title: "Educate Yourself", desc: "Learn about Compassion Fatigue and seek support when needed." },
  { icon: "fa-border-all", title: "Set Emotional Boundaries", desc: "Establish healthy limits to protect your emotional wellbeing." },
  { icon: "fa-palette", title: "Find Outside Hobbies", desc: "Maintain activities that bring you joy and fulfillment outside of caregiving." },
  { icon: "fa-book-open", title: "Keep a Gratitude Journal", desc: "Document positive moments and things you're thankful for each day." },
  { icon: "fa-seedling", title: "Learn Resilience", desc: "Develop skills to bounce back from difficult experiences." },
  { icon: "fa-heart", title: "Accept Imperfection", desc: "Know we all make mistakes – no one is perfect." },
  { icon: "fa-water", title: "Express Your Feelings", desc: "Cry or express your feelings and find help with managing family conflicts that may occur." },
  { icon: "fa-bullseye", title: "Focus on What Matters", desc: "Focus on the things that are worth your time – let small stuff go." },
  { icon: "fa-award", title: "Acknowledge Your Efforts", desc: "Remind yourself that you are doing your best." },
  { icon: "fa-user", title: "Spend Time Alone", desc: "Take time to think about your own feelings and needs." },
  { icon: "fa-hands-helping", title: "Ask for Support", desc: "Request help with tasks – you do not always have to be the expert." },
  { icon: "fa-child", title: "Include Family Members", desc: "Allow teens/children to help out – it's good for them to feel they are contributing." },
];

export default function CoSurvivorTipsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="text-center py-8 px-5 rounded-xl border border-gray-200 shadow-sm mb-6 max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
        }}
      >
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 py-1.5 px-2.5 rounded-full text-sm font-medium mb-2">
          <span aria-hidden>🤝</span>
          <span>Patient & Caregiver Support</span>
        </div>
        <h1
          className="text-2xl md:text-[2.6rem] font-extrabold tracking-tight my-3"
          style={{
            background: "linear-gradient(90deg, #7e22ce, #4338ca)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Co‑Survivor Tips
        </h1>
        <p className="text-gray-900 max-w-[70ch] mx-auto text-base leading-relaxed">
          Practical guidance for caregivers supporting someone with LMS — communication, advocacy, insurance, and self‑care.
        </p>
        <div
          className="h-0.5 w-40 mx-auto my-4 rounded opacity-70"
          style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca, #059669)" }}
          aria-hidden
        />
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <span className="inline-block py-1 px-2.5 rounded-full text-xs font-bold text-gray-900 bg-violet-100 border border-violet-300">
            Advocacy
          </span>
          <span className="inline-block py-1 px-2.5 rounded-full text-xs font-bold text-gray-900 bg-blue-100 border border-blue-300">
            Communication
          </span>
          <span className="inline-block py-1 px-2.5 rounded-full text-xs font-bold text-gray-900 bg-teal-100 border border-teal-300">
            Self‑Care
          </span>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto py-8 px-4 md:px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr]">
        <aside className="sticky top-24 max-md:static">
          <nav className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 max-w-[260px]" aria-label="On this page">
            <h3 className="text-base font-extrabold text-gray-900 mb-3">On this page</h3>
            <ul className="list-none p-0 m-0 space-y-0">
              <li>
                <a href="#co-survivor-intro" className="block py-2 px-4 pl-4 border-l-4 border-blue-500 text-gray-600 no-underline font-medium text-sm rounded-r hover:bg-gray-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  Understanding Co‑Survivors
                </a>
              </li>
              <li>
                <a href="#caregiver-advocacy" className="block py-2 px-4 pl-4 border-l-4 border-purple-500 text-gray-600 no-underline font-medium text-sm rounded-r hover:bg-gray-50 hover:text-purple-600 hover:border-purple-600 transition-colors">
                  Caregiver Advocacy
                </a>
              </li>
              <li>
                <a href="#co-survivor-tips" className="block py-2 px-4 pl-4 border-l-4 border-indigo-500 text-gray-600 no-underline font-medium text-sm rounded-r hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                  Essential Tips
                </a>
              </li>
              <li>
                <a href="#additional-resources" className="block py-2 px-4 pl-4 border-l-4 border-teal-500 text-gray-600 no-underline font-medium text-sm rounded-r hover:bg-gray-50 hover:text-teal-600 hover:border-teal-600 transition-colors">
                  Additional Resources
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 text-sm mb-2">Need Caregiver Support?</h4>
              <p className="text-gray-600 text-sm mb-3">We can help with guidance, resources, and connections.</p>
              <div className="flex flex-col gap-2">
                <a href="https://nlmsf.org/support/" className="inline-flex justify-center items-center py-2 px-4 bg-violet-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-violet-700 transition-colors" {...ext}>
                  Get Support
                </a>
                <a href="https://nlmsf.org/contact-us/" className="inline-flex justify-center items-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm no-underline hover:bg-gray-50 transition-colors" {...ext}>
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </aside>

        <div className="min-w-0 space-y-10">
          {/* Understanding Co-Survivors */}
          <section id="co-survivor-intro" className="scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 pb-3 border-b-2 border-violet-500 inline-block">
                Understanding Co-Survivors
              </h2>
              <p className="text-gray-600 text-lg">The vital role of those who support cancer patients</p>
            </div>
            <div
              className="rounded-xl p-6 shadow-md border border-violet-200 mb-6"
              style={{
                background: "linear-gradient(to right, #faf5ff, #f3e8ff)",
                borderLeftWidth: "4px",
                borderLeftColor: "#9333ea",
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 w-full md:w-[200px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://nlmsf.org/wp-content/uploads/2020/06/unnamed-58.jpg" alt="Co-Survivors Supporting Cancer Patients" className="w-full rounded-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">What Makes a Co-Survivor?</h3>
                  <p className="text-gray-600 mb-4">Co-Survivors can fall into 2 categories:</p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0 text-rose-600">
                        <i className="fas fa-heart-broken text-xl" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Those Who Act Out of Pity and Sorrow</h4>
                        <p className="text-gray-600 text-sm m-0">This leads to sympathy which can result in ignoring their own needs, putting themselves at risk for Compassion Fatigue.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center shrink-0 text-violet-600">
                        <i className="fas fa-heart text-xl" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Those Who Act Out of Compassion</h4>
                        <p className="text-gray-600 text-sm m-0">These co-survivors recognize the importance of caring for themselves as well as caring for others. They are more driven by empathy, which is the ability to understand and share the feelings of another. Although most of us experience sympathy for others in need, when combined with empathy it will ensure that both the survivor and the co-survivors needs are met.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Caregiver Advocacy */}
          <section id="caregiver-advocacy" className="scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 pb-3 border-b-2 border-violet-500 inline-block">
                Caregivers as Partners in Advocacy: Standing Strong Together
              </h2>
              <p className="text-gray-600 text-lg">Key ways caregivers can strengthen communication, care coordination, and survivorship</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
              <ul className="pl-5 text-gray-900 leading-relaxed space-y-2 list-disc">
                <li><strong>Be the Second Set of Eyes & Ears</strong> – take notes, track details, ask follow‑up questions.</li>
                <li><strong>Encourage Open Communication</strong> – help the patient feel heard.</li>
                <li><strong>Navigate Insurance & Logistics</strong> – paperwork, authorizations, appeals.</li>
                <li><strong>Support Survivorship Planning</strong> – encourage wellness strategies for both patient & caregiver.</li>
                <li><strong>Emotional Anchor</strong> – offer reassurance in stressful moments.</li>
                <li><strong>Protect Your Own Well‑Being</strong> – seek respite, counseling, or peer support.</li>
                <li><strong>Team Advocacy</strong> – approach the journey as a united front.</li>
              </ul>
              <div className="mt-4 bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg">
                <em>&quot;Caregivers are not only companions, but essential partners in advocacy. Together, you create the strongest voice for better care and better outcomes.&quot;</em>
              </div>
            </div>
          </section>

          {/* Essential Tips */}
          <section id="co-survivor-tips" className="scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 pb-3 border-b-2 border-violet-500 inline-block">
                Essential Tips for Co-Survivors
              </h2>
              <p className="text-gray-600 text-lg">Practical guidance to support your caregiving journey</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {TIPS.map((tip) => (
                  <div key={tip.title} className="bg-gray-50 rounded-lg p-4 shadow border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all border-t-4 border-t-violet-500">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-3">
                      <i className={`fas ${tip.icon}`} aria-hidden />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">{tip.title}</h4>
                    <p className="text-gray-600 text-sm m-0 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-violet-400 pl-4 my-6 italic text-gray-700">
                <p className="m-0">&quot;How well people manage their lives marked by illness depends not on the nature of the illness, but on the strength of their conviction that life is worth living no matter what complications are imposed on it.&quot;</p>
              </blockquote>
            </div>
          </section>

          {/* Additional Resources */}
          <section id="additional-resources" className="scroll-mt-24">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 pb-3 border-b-2 border-violet-500 inline-block">
                Additional Resources
              </h2>
              <p className="text-gray-600 text-lg">Expert guidance for co-survivors facing challenges</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start pt-4 border-t border-gray-200">
                <div className="shrink-0 w-full md:w-[200px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.cancer.net/sites/cancer.net/files/styles/blog_image/public/2020-06/Caregiver-Self-Doubt-Blog-June-2020-750x375.jpg" alt="Caregiver Self-Doubt" className="w-full rounded-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">ASCO – Cancer.Net Article to Support Caregivers</h3>
                  <p className="text-gray-600 text-sm mb-4">If you have self-doubt when caring for a loved one with cancer, you&apos;re not alone. This article provides valuable insights and practical advice for managing the emotional challenges of caregiving.</p>
                  <a href="https://www.cancer.net/blog/2020-06/if-you-have-self-doubt-when-caring-loved-one-with-cancer" className="inline-flex items-center gap-2 bg-violet-600 text-white py-2 px-4 rounded-md font-semibold text-sm no-underline hover:bg-violet-700 transition-colors" {...ext}>
                    <i className="fas fa-external-link-alt text-xs" aria-hidden /> Read Full Article
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related Co-Survivor Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 shadow border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all border-t-4 border-t-violet-500 flex flex-col">
                    <div className="text-violet-600 text-3xl mb-3">
                      <i className="fas fa-book-medical" aria-hidden />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Caregiver Resource Guide</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Comprehensive guide from the American Cancer Society with practical advice for caregivers.</p>
                    <a href="https://www.cancer.org/treatment/caregivers/caregiver-resource-guide.html" className="inline-flex items-center gap-2 bg-violet-600 text-white py-2 px-4 rounded-md font-semibold text-sm no-underline hover:bg-violet-700 transition-colors mt-auto" {...ext}>
                      <i className="fas fa-external-link-alt text-xs" aria-hidden /> View Guide
                    </a>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 shadow border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all border-t-4 border-t-blue-500 flex flex-col">
                    <div className="text-blue-600 text-3xl mb-3">
                      <i className="fas fa-users" aria-hidden />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Support Groups</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Connect with other co-survivors to share experiences and coping strategies.</p>
                    <a href="https://www.cancercare.org/support_groups" className="inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md font-semibold text-sm no-underline hover:bg-blue-700 transition-colors mt-auto" {...ext}>
                      <i className="fas fa-external-link-alt text-xs" aria-hidden /> Find Groups
                    </a>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 shadow border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all border-t-4 border-t-emerald-500 flex flex-col">
                    <div className="text-emerald-600 text-3xl mb-3">
                      <i className="fas fa-video" aria-hidden />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Caregiver Support Videos</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Watch helpful videos on managing the challenges of caregiving.</p>
                    <a href="https://www.cancer.org/treatment/caregivers/caregiver-support-videos.html" className="inline-flex items-center gap-2 bg-emerald-600 text-white py-2 px-4 rounded-md font-semibold text-sm no-underline hover:bg-emerald-700 transition-colors mt-auto" {...ext}>
                      <i className="fas fa-external-link-alt text-xs" aria-hidden /> Watch Videos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
