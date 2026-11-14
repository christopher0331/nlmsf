import type { Metadata } from "next";
import Link from "next/link";

/**
 * "THE GIFT OF GIVING . . . to PAY IT FORWARD in SURVIVORSHIP", from Annie
 * Achee (Nov 4, 2026). Her text, with typos fixed.
 */

const PAGE_TITLE = "The Gift of Giving | Pay It Forward in Survivorship | NLMSF";
const PAGE_DESCRIPTION =
  "The Gift of Giving is more than a contribution — it is an investment in hope, progress, and the future of survivorship. Year-round ways to give to the National Leiomyosarcoma Foundation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "https://nlmsf.org/gift-of-giving/" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://nlmsf.org/gift-of-giving/",
  },
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const gradientText = {
  background: "linear-gradient(90deg, #7e22ce, #4338ca)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

type GivingOption = {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  body: string[];
  tagline?: string[];
  link?: { href: string; label: string; external?: boolean };
};

const OPTIONS: GivingOption[] = [
  {
    id: "qcd",
    icon: "fa-piggy-bank",
    title: "Qualified Charitable Distributions (QCDs)",
    body: [
      "If you are 70½ or older, you may be eligible to make a tax-advantaged charitable gift directly from your IRA.",
    ],
  },
  {
    id: "daf",
    icon: "fa-hand-holding-usd",
    title: "Donor-Advised Funds (DAFs)",
    subtitle: "Make a Difference Through Strategic Giving",
    body: [
      "If you have a Donor-Advised Fund, consider recommending a grant to the National Leiomyosarcoma Foundation (NLMSF). Your charitable giving can help accelerate critical LMS research, advance scientific discoveries, support clinical trial awareness, and bring greater hope to patients and families facing leiomyosarcoma.",
    ],
  },
  {
    id: "matching",
    icon: "fa-briefcase",
    title: "Employer Matching Gifts",
    body: [
      "Your employer can advise you on whether your charitable contribution can be matched, to possibly double your impact in advancing/accelerating LMS Research.",
    ],
  },
  {
    id: "giving-circle",
    icon: "fa-users",
    title: "Giving Circles",
    subtitle: "The power of giving together . . .",
    body: [
      "Create or join with family members, friends, colleagues, or fellow advocates who share a passion for making a difference in the lives of those impacted by Leiomyosarcoma.",
      "By pooling individual contributions, even modest gifts can become a meaningful collective investment in advancing LMS research, supporting scientific discovery, expanding patient resources, and bringing hope to the LMS community.",
    ],
    tagline: [
      "One shared purpose. Many generous hearts. A lasting impact.",
      "Your circle of giving can help move research forward and pay hope forward.",
    ],
    link: { href: "/donate/#giving-circle", label: "About Giving Circles" },
  },
  {
    id: "planned-giving",
    icon: "fa-scroll",
    title: "Planned Giving",
    body: [
      "Consider a legacy of giving by including the NLMSF in your estate plans (trusts and wills).",
    ],
    link: { href: "/donate/#planned-giving", label: "Planned giving details" },
  },
  {
    id: "stock",
    icon: "fa-chart-line",
    title: "Stock and Appreciated Securities",
    body: [
      "Consider making a meaningful investment in the future of Leiomyosarcoma (LMS) research by donating appreciated stocks or other securities to the National Leiomyosarcoma Foundation. A gift of stock may offer potential tax advantages while helping advance critical research, accelerate scientific discoveries, and bring renewed hope to the LMS community.",
    ],
    link: {
      href: "https://donatestock.com/donate?fulltext=National+Leiomyosarcoma+Foundation&hiddenDuid=0803655f-ac91-4aa6-9d4a-75ae2e6d2ae7&hiddenSid=e694eec1-d39e-46c0-aef5-9508f81653a1",
      label: "Donate stock via DonateStock.com",
      external: true,
    },
  },
  {
    id: "workplace",
    icon: "fa-building",
    title: "Workplace Giving",
    body: [
      "Supporting the NLMSF's efforts to fund annual research grants through employer payroll deductions or workplace charitable giving campaigns is an impactful way to \u201cPay It Forward\u201d for Patient Survivorship through amplified research funding.",
    ],
  },
];

export default function GiftOfGivingPage() {
  return (
    <main className="pb-12">
      <section className="relative mx-auto mb-8 max-w-[1400px] rounded-xl bg-white px-6 py-12 text-center shadow-sm">
        <div
          className="absolute inset-0 z-[1] rounded-xl"
          style={{ background: "linear-gradient(135deg, rgba(126, 34, 206, 0.05), rgba(67, 56, 202, 0.1))" }}
        />
        <div className="relative z-[2]">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca)" }}
          >
            <i className="fas fa-gift" aria-hidden />
            <span>Paying It Forward in Survivorship</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl pb-1 text-2xl font-bold leading-tight md:text-[2.75rem] md:leading-tight" style={gradientText}>
            The Gift of Giving as a Champion of Hope for Survivorship
          </h1>
          <p className="mx-auto mb-8 max-w-[760px] text-lg text-gray-600">
            Together, we can turn the power of giving into progress toward better treatments and move
            forward faster in the Quest for the Cure!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/donate/#donate-form"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}
            >
              <i className="fas fa-heart" aria-hidden />
              Give Today
            </Link>
            <a
              href="#year-round-giving"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#7e22ce] px-6 py-3 text-base font-semibold text-[#7e22ce] no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white"
            >
              Year-Round Giving
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] space-y-10 px-4 md:px-6">
        <section className="overflow-hidden rounded-2xl border border-l-4 border-gray-200/80 border-l-[#7e22ce] bg-white shadow-lg shadow-gray-200/50">
          <div className="space-y-5 p-6 text-base leading-relaxed text-gray-700 md:p-10 md:text-lg">
            <h2 className="m-0 text-2xl font-bold md:text-[1.75rem]" style={gradientText}>
              Paying It Forward in Survivorship
            </h2>
            <p className="m-0">
              The Gift of Giving is more than a contribution — it is an investment in hope, progress,
              and the future of survivorship. A personal gift is being a Champion of Hope in
              Survivorship with the opportunity to help someone in the struggle and challenge of their
              treatment journey to experience that same hope.
            </p>
            <p className="m-0">
              Together, we can help bring our LMS/SARCOMA Community closer to a future with more
              survivors, stronger support, and greater possibilities for everyone affected by this
              disease.
            </p>
          </div>
        </section>

        <section id="year-round-giving" className="scroll-mt-24">
          <header className="mb-6 text-center">
            <h2 className="m-0 text-2xl font-bold md:text-[1.75rem]" style={gradientText}>
              Year-Round Giving for Consideration
            </h2>
            <p className="m-0 mt-2 text-lg font-semibold text-gray-600">
              Together, We Can Make a Greater Difference!
            </p>
          </header>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {OPTIONS.map((o) => (
              <article
                key={o.id}
                id={o.id}
                className="flex scroll-mt-24 flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md shadow-gray-200/50"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}
                    aria-hidden
                  >
                    <i className={`fas ${o.icon} text-sm text-white`} />
                  </span>
                  <div>
                    <h3 className="m-0 text-lg font-bold leading-snug text-gray-900">{o.title}</h3>
                    {o.subtitle ? (
                      <p className="m-0 text-sm font-medium text-[#7e22ce]">{o.subtitle}</p>
                    ) : null}
                  </div>
                </div>
                <div className="flex-1 space-y-3 text-[0.95rem] leading-relaxed text-gray-600">
                  {o.body.map((b, i) => (
                    <p key={i} className="m-0">
                      {b}
                    </p>
                  ))}
                  {o.tagline ? (
                    <p className="m-0 font-semibold italic text-[#4c1d95]">
                      {o.tagline.map((t, i) => (
                        <span key={i} className="block">
                          {t}
                        </span>
                      ))}
                    </p>
                  ) : null}
                </div>
                {o.link ? (
                  o.link.external ? (
                    <a
                      href={o.link.href}
                      {...ext}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7e22ce] no-underline hover:underline"
                    >
                      {o.link.label} <i className="fas fa-external-link-alt text-xs" aria-hidden />
                    </a>
                  ) : (
                    <Link
                      href={o.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7e22ce] no-underline hover:underline"
                    >
                      {o.link.label} <span aria-hidden>→</span>
                    </Link>
                  )
                ) : null}
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm italic text-gray-500">
            Please consult your financial or tax advisor to determine which giving options may be
            right for you.
          </p>
        </section>

        <section className="rounded-2xl p-8 text-center text-white shadow-lg md:p-10" style={{ background: "linear-gradient(135deg, #6b46c1, #4c1d95)" }}>
          <p className="m-0 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Together, we can help bring our LMS/SARCOMA Community closer to a future with more
            survivors, stronger support, and greater possibilities for everyone affected by this
            disease.
          </p>
          <p className="m-0 mt-5 text-xl font-bold md:text-2xl">
            Thank you for considering how you can Pay It Forward in Survivorship.
          </p>
          <p className="m-0 mt-2 text-lg font-semibold text-amber-200">
            Your generosity makes a difference!
          </p>
          <p className="m-0 mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/85">
            &ldquo;Paying It Forward in Survivorship&rdquo; speaks to the generosity, gratitude, and
            hope that are so much a part of the survivorship journey and what the Gift of Giving
            really means to patients.
          </p>
          <Link
            href="/donate/#donate-form"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#4c1d95] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <i className="fas fa-heart" aria-hidden />
            Give Today
          </Link>
        </section>
      </div>
    </main>
  );
}
