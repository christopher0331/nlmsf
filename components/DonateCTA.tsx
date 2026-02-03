import Link from "next/link";

type Props = {
  /** Optional tribute name for memo line: "put [name] in the memo line" */
  tributeName?: string;
};

const MAILING_ADDRESS = {
  name: "National LeioMyoSarcoma Foundation",
  line1: "1685 S Colorado Blvd.",
  line2: "Unit S, Suite 447",
  city: "Denver, CO",
  zip: "80222",
};

export default function DonateCTA({ tributeName }: Props) {
  return (
    <section
      className="rounded-xl border-2 border-[#7e22ce]/20 bg-gradient-to-br from-violet-50/80 to-fuchsia-50/50 p-6 shadow-md md:p-8"
      aria-label="Make a Donation"
    >
      <div className="mx-auto max-w-[640px]">
        <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
          Make a Donation
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Help our organization by donating today! All donations go directly to making a difference for our cause.
        </p>

        <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-[#7e22ce] md:text-lg">
          How to donate to LMS research
        </h4>
        <p className="mb-4 text-gray-700 leading-relaxed">
          To make an offline donation toward this cause, follow these steps:
        </p>
        <ol className="mb-6 list-decimal space-y-2 pl-5 text-gray-700 leading-relaxed">
          <li>
            Write a check payable to &quot;National LeioMyoSarcoma Foundation.&quot;
            {tributeName ? (
              <> If the donation is in memory or honor of someone, please put <strong>{tributeName}</strong> in the memo line.</>
            ) : (
              <> If the donation is in memory or honor of someone, please put the name in the memo line.</>
            )}
          </li>
          <li>
            Mail your check to:
          </li>
        </ol>

        <address className="mb-6 not-italic rounded-lg border border-[#7e22ce]/20 bg-white/60 p-4 text-gray-800">
          <strong className="text-gray-900">{MAILING_ADDRESS.name}</strong>
          <br />
          {MAILING_ADDRESS.line1}
          <br />
          {MAILING_ADDRESS.line2}
          <br />
          {MAILING_ADDRESS.city} {MAILING_ADDRESS.zip}
        </address>

        <p className="text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}
          >
            <i className="fas fa-donate" aria-hidden />
            Donate online
          </Link>
        </p>
      </div>
    </section>
  );
}
