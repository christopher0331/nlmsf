import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | NLMSF",
  description:
    "Support the National LeiomyoSarcoma Foundation. Your donation funds vital research and support for the LMS community. One-time, monthly, planned giving, and more.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative rounded-xl bg-white px-6 py-12 text-center shadow-sm mb-8 max-w-[1400px] mx-auto">
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(135deg, rgba(126, 34, 206, 0.05), rgba(67, 56, 202, 0.1))",
          }}
        />
        <div className="relative z-[2]">
          <div className="inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-sm font-semibold text-white mb-6" style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca)" }}>
            <i className="fas fa-hand-holding-heart" aria-hidden />
            <span>Support Our Mission</span>
          </div>
          <h1
            className="text-2xl font-bold leading-tight pb-1 mb-4 md:text-[3rem] md:leading-tight md:pb-1"
            style={{
              background: "linear-gradient(90deg, #7e22ce, #4338ca)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Help Shape the Future of Survival
          </h1>
          <p className="text-lg text-gray-600 max-w-[700px] mx-auto mb-8">
            Your donation directly funds vital research and support for the LMS community
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#donate-form" className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-gray-600 text-[0.95rem] font-medium no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white hover:-translate-y-0.5">
              <i className="fas fa-donate" aria-hidden />
              <span>Donate Now</span>
            </a>
            <a href="#ways-to-give" className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-gray-600 text-[0.95rem] font-medium no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white hover:-translate-y-0.5">
              <i className="fas fa-gift" aria-hidden />
              <span>Ways to Give</span>
            </a>
            <a href="#giving-circle" className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-gray-600 text-[0.95rem] font-medium no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white hover:-translate-y-0.5">
              <i className="fas fa-users" aria-hidden />
              <span>Giving Circle</span>
            </a>
            <a href="#planned-giving" className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-gray-600 text-[0.95rem] font-medium no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white hover:-translate-y-0.5">
              <i className="fas fa-hand-holding-usd" aria-hidden />
              <span>Planned Giving</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-2 grid grid-cols-1 gap-8 items-start lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="sticky top-20 lg:mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
            <h3 className="text-xl font-bold flex items-center gap-3 pb-3 mb-5 border-b-2 border-gray-100">
              <i className="fas fa-donate text-[#7e22ce]" aria-hidden />
              <span>Ways to Support</span>
            </h3>
            <ul className="list-none p-0 m-0 space-y-1">
              <li>
                <a href="#donate-form" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-hand-holding-heart text-[#7e22ce] text-lg transition-transform duration-300 hover:translate-x-1" aria-hidden />
                  <span>One-time &amp; Monthly Giving</span>
                </a>
              </li>
              <li>
                <a href="https://www.charitynavigator.org/about-us/cn-blog/1542-employee-match-programs-what-to-know-before-you-donate" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]" {...ext}>
                  <i className="fas fa-handshake text-[#7e22ce] text-lg" aria-hidden />
                  <span>Employee Match Programs</span>
                </a>
              </li>
              <li>
                <a href="#giving-circle" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-users text-[#7e22ce] text-lg" aria-hidden />
                  <span>The Giving Circle</span>
                </a>
              </li>
              <li>
                <a href="#power-of-giving" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-lightbulb text-[#7e22ce] text-lg" aria-hidden />
                  <span>The Power of Giving</span>
                </a>
              </li>
              <li>
                <a href="#ways-to-give" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-gift text-[#7e22ce] text-lg" aria-hidden />
                  <span>Alternative Giving Options</span>
                </a>
              </li>
              <li>
                <a href="#planned-giving" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-hand-holding-usd text-[#7e22ce] text-lg" aria-hidden />
                  <span>Securities &amp; Planned Giving</span>
                </a>
              </li>
              <li>
                <a href="#charity-navigator" className="flex items-center gap-3 rounded-md px-4 py-3 text-gray-600 no-underline transition-all duration-300 hover:bg-gray-100 hover:text-[#7e22ce]">
                  <i className="fas fa-star text-[#7e22ce] text-lg" aria-hidden />
                  <span>Charity Navigator Rating</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl p-6 text-white shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}>
            <h4 className="text-xl font-bold mb-4">Need Immediate Support?</h4>
            <p className="mb-5 leading-relaxed opacity-90">
              We&apos;re here to help you navigate through your LMS journey. Reach out to our team for personalized guidance and resources.
            </p>
            <Link href="/contact" className="block text-center rounded-lg bg-white px-5 py-3 font-semibold text-[#7e22ce] no-underline transition-all duration-300 hover:bg-white/90">
              Contact Us Today
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="min-w-0 space-y-16 pb-16 rounded-2xl bg-gradient-to-b from-slate-50/70 via-white to-violet-50/40 px-4 py-6 md:px-6 md:py-8">
          {/* Charity Navigator */}
          <section id="charity-navigator" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-star text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Charity Navigator 4-Star Rating
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">Transparency and accountability in charitable giving</p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50">
              <div className="flex flex-col gap-8 p-6 md:p-8 md:flex-row md:items-start md:gap-10">
                <div className="shrink-0 rounded-2xl px-8 py-10 text-center text-white shadow-xl min-w-[200px] ring-4 ring-amber-200/40" style={{ background: "linear-gradient(145deg, #fbbf24, #d97706)" }}>
                  <div className="flex justify-center gap-1 mb-4">
                    <i className="fas fa-star text-2xl drop-shadow-sm" aria-hidden />
                    <i className="fas fa-star text-2xl drop-shadow-sm" aria-hidden />
                    <i className="fas fa-star text-2xl drop-shadow-sm" aria-hidden />
                    <i className="fas fa-star text-2xl drop-shadow-sm" aria-hidden />
                  </div>
                  <span className="block text-4xl font-extrabold leading-none mb-1 tracking-tight">97%</span>
                  <span className="block text-sm font-semibold uppercase tracking-wider opacity-95">4-Star Rating</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug" style={{ color: "#4c1d95" }}>
                    The National LMS Foundation is a proud member, designated by CHARITY NAVIGATOR
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    The National Leiomyosarcoma Foundation has earned a 4/4 Star rating on Charity Navigator. This Charitable Organization is headquartered in Denver, CO.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-5 items-start rounded-xl border border-gray-100 bg-gradient-to-r from-violet-50/80 to-white p-5 transition-all duration-300 hover:shadow-md hover:border-violet-100">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#7e22ce]">
                        <i className="fas fa-handshake text-lg" aria-hidden />
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1.5">Employee Match Programs</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">What to Know Before You Donate - Learn how to maximize your impact through employer matching programs.</p>
                        <a href="https://www.charitynavigator.org/about-us/cn-blog/1542-employee-match-programs-what-to-know-before-you-donate" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>Learn More <i className="fas fa-external-link-alt text-xs" aria-hidden /></a>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start rounded-xl border border-gray-100 bg-gradient-to-r from-violet-50/80 to-white p-5 transition-all duration-300 hover:shadow-md hover:border-violet-100">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#7e22ce]">
                        <i className="fas fa-graduation-cap text-lg" aria-hidden />
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1.5">Giving 101</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">The more you know about donating to the cause of LMS Research advancements to accelerate treatment options.</p>
                        <a href="https://www.charitynavigator.org/about-us/donor-resources-and-tips" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>View Donor Resources <i className="fas fa-external-link-alt text-xs" aria-hidden /></a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-violet-200/60 bg-gradient-to-br from-violet-50 via-fuchsia-50/50 to-violet-50 p-6 text-center shadow-inner">
                    <p className="text-gray-700 text-base mb-4 leading-relaxed">
                      View our complete Charity Navigator profile to see our commitment to transparency and fiscal responsibility.
                    </p>
                    <a
                      href="https://www.charitynavigator.org/ein/841478257"
                      className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      style={{ background: "linear-gradient(135deg, #7e22ce, #4c1d95)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.4)" }}
                      {...ext}
                    >
                      View Our Charity Navigator Profile <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Donation Form */}
          <section id="donate-form" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-donate text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Donate to NLMSF
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">All contributions made to the NLMSF, a charitable non-profit 501(c)(3) organization, are tax-deductible.</p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50">
              <div className="flex flex-col gap-0">
                <div className="min-h-[700px] w-full bg-gray-50/50">
                  <iframe
                    title="Donate to NLMSF"
                    src="https://nlmsf.org/give/donations-tribute-funds?giveDonationFormInIframe=1"
                    className="w-full min-h-[700px] border-0"
                  />
                </div>
                <div className="rounded-b-2xl border-t border-gray-100 bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-5 text-center">
                  <p className="text-gray-600 text-sm md:text-base">Questions? Email Annie Achee at <a href="mailto:annieachee@aol.com" className="font-semibold text-[#7e22ce] no-underline hover:underline">annieachee@aol.com</a></p>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">Or call <a href="tel:+13037830924" className="font-semibold text-[#7e22ce] no-underline hover:underline">303-783-0924</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Your Gift Matters */}
          <section id="why-your-gift-matters" className="scroll-mt-24">
            <div className="overflow-hidden rounded-2xl border-l-4 border-[#7e22ce] border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50">
              <div className="p-6 md:p-10 lg:p-12" style={{ background: "linear-gradient(135deg, rgba(126, 34, 206, 0.03) 0%, transparent 50%)" }}>
                <h2
                  className="text-2xl font-bold mb-8 md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Why Your Gift Matters
                </h2>
                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                  <p>Leiomyosarcoma is not just a rare cancer. It&apos;s a devastating diagnosis that often comes with no warning — and no cure. Patients are told they have a disease most people have never heard of… and then they&apos;re told they may only have five years to live, if that.</p>
                  <p>Imagine being told that — imagine it&apos;s your spouse, your child, (there are 20 - 30 cases a year for kids) your parent, your friend. And then imagine realizing that there&apos;s almost no funding for research… that treatment options haven&apos;t changed in decades… that hope is hard to find, not because it&apos;s impossible, but because it&apos;s been neglected.</p>
                  <p>We can change that. But we need help.</p>
                  <p>Every donation — no matter how small — is a step toward hope. Toward longer lives. Toward better treatments. Toward one more birthday, one more hug, one more chance.</p>
                  <p className="font-semibold text-gray-900"><strong>Please, if you&apos;re listening — give.</strong> Give because you can. Give because someone with Leiomyosarcoma can&apos;t wait five more years for a cure that doesn&apos;t come. Give so that one day, no one has to hear the words, &apos;There&apos;s nothing more we can do.&apos;</p>
                </div>
              </div>
            </div>
          </section>

          {/* Power of Giving */}
          <section id="power-of-giving" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-lightbulb text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  The Power of Giving
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">Making a meaningful impact on LMS research and patient care</p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50">
              <div className="p-6 md:p-8">
                <div
                  className="rounded-xl border-l-4 border-[#7e22ce] pl-6 pr-6 py-6 mb-8"
                  style={{ background: "linear-gradient(135deg, rgba(126, 34, 206, 0.08), rgba(67, 56, 202, 0.12))" }}
                >
                  <blockquote className="text-lg md:text-xl italic text-gray-700 m-0 leading-relaxed">
                    &quot;We won&apos;t always know whose lives we have touched and made better for our having tried and cared, what is important is that we do care, and ACT!&quot;
                  </blockquote>
                  <cite className="block text-right font-semibold text-[#7e22ce] not-italic mt-3 text-base">— Charlotte Lunsford</cite>
                </div>
                <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                  <p>Giving Circles are a community-centered approach to philanthropy. Anywhere you are social, you can create a giving circle: work, friends, house of worship, school, a club, a team, a birthday celebration, etc.</p>
                  <p>The National LeioMyoSarcoma Foundation funds vital research and support for a very rare cancer. By creating a circle of giving in your community, you can have a profound impact on accelerating potential breakthroughs in research and treatment!</p>
                  <p>Every dollar matters; the collective power of investing in Leiomyosarcoma research can make a world of difference.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Giving Circle */}
          <section id="giving-circle" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-users text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  The Giving Circle
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">Community-centered giving</p>
            </header>
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50">
              <p className="text-gray-600 text-base leading-relaxed">
                Create a giving circle with friends, family, coworkers, or your community. Every dollar you raise together supports LMS research and survivorship through the National Leiomyosarcoma Foundation. To give as a group or learn more, <Link href="/contact" className="font-semibold text-[#7e22ce] no-underline hover:underline">contact us</Link>.
              </p>
            </div>
          </section>

          {/* Ways to Give */}
          <section id="ways-to-give" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-gift text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Other Ways to Give
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">Multiple options to support our mission</p>
            </header>
            <div className="space-y-8">
              {/* Just Giving */}
              <div className="overflow-hidden rounded-2xl border-l-4 border-[#7e22ce] border border-gray-200/80 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl hover:border-violet-200">
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <img src="https://nlmsf.org/wp-content/uploads/2021/02/JustGivings.jpg" alt="Just Giving" className="max-h-14 w-auto object-contain rounded-lg" />
                  <h3 className="text-xl font-bold text-gray-900">Just Giving</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  SIGN UP FOR JUST GIVING – and establish your account to fund LMS research through the National Leiomyosarcoma Foundation – founder of the International Research Roundtable for global research
                </p>
                <a href="https://www.justgiving.com/onesearch/pagecreation/charity?q=National%20Leiomyosarcoma%20Foundation&i=charities,campaigns&limit=20&pcid=34b06b92-2d25-4a18-b859-b9e" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                  Set Up Just Giving <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                </a>
              </div>

              {/* Car Donation */}
              <div className="overflow-hidden rounded-2xl border-l-4 border-[#7e22ce] border border-gray-200/80 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl hover:border-violet-200">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#7e22ce]">
                    <i className="fas fa-car text-xl" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">Donate Your Car or Real Estate</h3>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:items-start mb-6">
                  <img src="https://nlmsf.org/wp-content/uploads/2022/06/Cars.jpg" alt="CARS" className="max-w-full h-auto md:max-w-[220px] rounded-xl shadow-md shrink-0" />
                  <div className="text-gray-600 text-base leading-relaxed space-y-3">
                    <p><strong className="text-[#7e22ce]">Select the National Leiomyosarcoma Foundation</strong> — select state of Colorado; select &quot;health&quot; category and follow the procedures outlined by <span className="font-semibold text-[#7e22ce]">CARS</span>.</p>
                    <p>CARS makes donating your car easy. We take care of everything from the pick-up and sale to sending you the donation receipt and necessary tax documents. CARS is committed to treating every vehicle donor with gratitude and great service while delivering the highest possible returns to our partners.</p>
                    <p>You will be glad to have contributed to research for rare cancer – Leiomyosarcoma – in this way.</p>
                    <p className="text-gray-500 text-sm">Note: CARS is now accepting commercial land and real estate.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-gray-50/80 p-5 md:flex-row md:items-center">
                  <img src="https://nlmsf.org/wp-content/uploads/2022/06/HomeCars.png" alt="Home CARS" className="max-w-[150px] h-auto shrink-0" />
                  <div className="flex flex-col gap-2">
                    <a href="https://careasy.org/home" className="text-[#7e22ce] text-sm font-medium no-underline hover:underline" {...ext}>https://careasy.org/home</a>
                    <a href="https://careasy.org/choose-a-nonprofit" className="text-[#7e22ce] text-sm font-medium no-underline hover:underline" {...ext}>https://careasy.org/choose-a-nonprofit</a>
                    <a href="https://careasy.org/home#NP-donation-form" className="text-[#7e22ce] text-sm font-medium no-underline hover:underline" {...ext}>Donate A Car To Support A Nonprofit or Charity</a>
                    <a href="https://careasy.org/choose-a-nonprofit" className="text-[#7e22ce] text-sm font-medium no-underline hover:underline" {...ext}>Donate Your Car to Your Favorite Nonprofit or Charity</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Securities & Planned Giving */}
          <section id="planned-giving" className="scroll-mt-24">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }} aria-hidden>
                  <i className="fas fa-hand-holding-usd text-white text-sm" aria-hidden />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight md:text-[1.75rem]"
                  style={{
                    background: "linear-gradient(90deg, #7e22ce, #4338ca)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Securities &amp; Planned Giving
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg pl-12">Long-term support options for NLMSF</p>
            </header>
            <div className="space-y-8">
              {/* Securities Donations */}
              <div className="overflow-hidden rounded-2xl border border-blue-200/70 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, rgba(255,255,255,1) 40%)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <i className="fas fa-chart-line text-xl" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">Securities Donations</h3>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <img src="https://nlmsf.org/wp-content/uploads/2020/12/stocks.jpg" alt="Securities Donations" className="max-w-[200px] h-auto rounded-xl shadow-md shrink-0" />
                  <p className="text-gray-600 text-base leading-relaxed">
                    The National Leiomyosarcoma Foundation is equipped to receive donations of securities. Please contact your Financial Advisor for more information. When you are ready to give, you can contact Annie Achee at 303 808-3437 for more information.
                  </p>
                </div>
              </div>

              {/* Planned Giving */}
              <div className="overflow-hidden rounded-2xl border border-pink-200/70 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl" style={{ background: "linear-gradient(135deg, rgba(236, 72, 153, 0.06) 0%, rgba(255,255,255,1) 40%)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                    <i className="fas fa-heart text-xl" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">Planned Giving</h3>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <img src="https://nlmsf.org/wp-content/uploads/2020/12/planned-giving.jpg" alt="Planned Giving" className="max-w-[200px] h-auto rounded-xl shadow-md shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      When thinking about planned giving, please consider the impact of giving to the National Leiomyosarcoma Foundation. Please contact your Financial Advisor for more information, and we will be happy to work with you to set up your gift. You can contact Annie Achee at (303)808-3437, for more information.
                    </p>
                    <a href="https://plannedgiving.com/about-us/what-is-planned-giving/" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                      Learn About Planned Giving <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>

              {/* Donate Stock */}
              <div className="overflow-hidden rounded-2xl border border-teal-200/70 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl" style={{ background: "linear-gradient(135deg, rgba(13, 148, 136, 0.06) 0%, rgba(255,255,255,1) 40%)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <i className="fas fa-chart-line text-xl" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">Donate Stock</h3>
                </div>
                <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                  <p><strong className="text-gray-800">Ways to Fund Research:</strong> Your gift advances Leiomyosarcoma research and survivorship programs. You can always give directly through our main donation page:</p>
                  <p>
                    <a href="https://nlmsf.org/donate/" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                      Give to NLMSF Research &amp; Survivorship <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                    </a>
                  </p>
                  <p>There is also a new way to give: <strong>Donate Stock</strong> through DonateStock.com, directly to the National Leiomyosarcoma Foundation. It is already set up for you – your donation, your investment in research and rare cancer survivorship – supporting the researchers translates into acceleration of treatment options for all.</p>
                  <p>
                    <a href="https://donatestock.com/donate?fulltext=National+Leiomyosarcoma+Foundation&hiddenDuid=0803655f-ac91-4aa6-9d4a-75ae2e6d2ae7&hiddenSid=e694eec1-d39e-46c0-aef5-9508f81653a1" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                      Donate Stock to NLMSF via DonateStock.com <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                    </a>
                  </p>
                  <p>To see how your support is invested, review our yearly accountability reports to the LMS community:</p>
                  <p>
                    <a href="https://nlmsf.org/open-research/" className="font-semibold text-[#7e22ce] no-underline hover:underline" {...ext}>
                      View NLMSF Research Accountability &amp; Open Research Reports
                    </a>
                  </p>
                  <p className="italic text-gray-500">Every act of support helps promote longer lives and brighter tomorrows.</p>
                </div>
              </div>

              {/* eBay & Kroger */}
              <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-5">
                    <img src="https://nlmsf.org/wp-content/uploads/2020/12/ebay.jpg" alt="eBay" className="max-h-14 w-auto object-contain rounded-lg" />
                    <h3 className="text-xl font-bold text-gray-900">eBay Giving Works</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">The National Leiomyosarcoma Foundation is a recognized 501(c)(3) rare cancer nonprofit organization – Tax 141834266</p>
                  <a href="https://www.charity.ebay.com/charity/National-LeioMyoSarcoma-Foundation/200677" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                    Support Through eBay <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-5">
                    <img src="https://nlmsf.org/wp-content/uploads/2022/08/kroger.jpg" alt="Kroger" className="max-h-14 w-auto object-contain rounded-lg" />
                    <h3 className="text-xl font-bold text-gray-900">Support Through Kroger</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    <span className="font-semibold text-[#7e22ce]">SO EASY TO CONTRIBUTE TOWARD LMS RESEARCH THROUGH THE NATIONAL LEIOMYOSARCOMA FOUNDATION (NLMSF)</span> – 5% of your grocery bill will go to LMS Research IF the Foundation can receive at least $25 in quarterly grocery contributions – Kroger will send a payout to the NLMSF.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    <strong>REGISTER YOUR CARD WITH KROGER HERE</strong>: <a href="https://www.kroger.com/i/community/community-rewards" className="text-[#7e22ce] font-medium no-underline hover:underline" {...ext}>https://www.kroger.com/i/community/community-rewards</a> <strong>ON BEHALF OF THE NLMSF RESEARCH SUPPORT</strong>
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-6"><span className="font-semibold text-[#7e22ce]">KROGER Community Rewards Program: ORG No. KV246</span></p>
                  <a href="https://www.kroger.com/i/kroger-family-of-companies" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)", boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)" }} {...ext}>
                    Connect Your Kroger Account <i className="fas fa-external-link-alt text-sm opacity-90" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
