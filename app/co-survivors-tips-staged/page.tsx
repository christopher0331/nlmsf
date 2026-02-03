import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Survivors Tips | NLMSF",
  description:
    "Tips for co-survivors: understanding pity vs compassion, self-care, and support. ASCO Cancer.Net caregiver resources.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function CoSurvivorsTipsStagedPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="text-center py-10 px-6 rounded-xl shadow-md border border-indigo-200 mb-8 max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, #eff6ff, #eef2ff)",
        }}
      >
        <h1
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            background: "linear-gradient(to right, #7e22ce, #4338ca)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Co-Survivors Tips
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practical guidance for co-survivors supporting someone with cancer — self-care, empathy, and support.
        </p>
      </section>

      <div className="max-w-[800px] mx-auto px-4 md:px-6 pb-12">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Co-Survivors can fall into 2 categories:</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Those who act out of pity and sorrow</strong> lead to sympathy which can result in ignoring their own needs, putting themselves at risk for Compassion Fatigue.
            </p>
            <p>
              <strong>Those who act out of compassion</strong> and recognize the importance of caring for themselves as well as caring for others are more driven by empathy, which is the ability to understand and share the feelings of another. Although most of us experience sympathy for others in need, when combined with empathy it will ensure that both the survivor and the co-survivors needs are met.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tips for the co-survivor:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li><strong>Make time for yourself</strong> — time off, join a group/talk with a counselor, be nice to yourself</li>
            <li><strong>Find meaning during Cancer Journey</strong> — look at life in a new way, find purpose/value</li>
            <li><strong>Educate yourself about Compassion Fatigue</strong> — seek support</li>
            <li>Set emotional boundaries</li>
            <li>Find outside hobbies</li>
            <li>Keep a gratitude journal</li>
            <li>Learn resilience</li>
            <li>Know we all make mistakes – no one is perfect</li>
            <li>Cry or express your feelings — find help with managing family conflicts that may occur</li>
            <li>Focus on the things that are worth your time — let small stuff go</li>
            <li>Remind yourself that you are doing your best</li>
            <li>Spend time alone to think about your own feelings</li>
            <li>Ask for support with tasks — you do not always have to be the expert</li>
            <li>Allow teens/children to help out — good for them to feel they are contributing</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-violet-500 pl-4 my-8 italic text-gray-700 text-lg">
          &quot;How well people manage their lives marked by illness depends not on the nature of the illness, but on the strength of their conviction that life is worth living no matter what complications are imposed on it.&quot;
        </blockquote>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2">ASCO – Cancer.Net Article to support Caregivers in a stressful time:</h3>
          <a
            href="https://www.cancer.net/blog/2020-06/if-you-have-self-doubt-when-caring-loved-one-with-cancer?cmpid=ks_net_blog_dcnews_-_all_06-05-20_blog"
            className="text-violet-600 font-medium hover:underline break-all"
            {...ext}
          >
            https://www.cancer.net/blog/2020-06/if-you-have-self-doubt-when-caring-loved-one-with-cancer
          </a>
        </div>
      </div>
    </main>
  );
}
