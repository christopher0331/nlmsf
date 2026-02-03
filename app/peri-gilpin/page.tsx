import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./peri-gilpin.css";

export const metadata: Metadata = {
  title: "Peri Gilpin | NLMSF",
  description:
    "Peri Gilpin, star of Frasier and Scorpion, shares her family's experience with leiomyosarcoma and the importance of advocacy and the National Leiomyosarcoma Foundation.",
};

export default function PeriGilpinPage() {
  return (
    <div className="peri-gilpin-page">
      <section className="peri-hero">
        <div className="peri-hero-inner">
          <div className="peri-image-wrap">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2020/03/peri-197x300-1.jpg"
              alt="Peri Gilpin"
              width={197}
              height={300}
              decoding="async"
            />
          </div>
          <div className="peri-hero-content">
            <h1 className="peri-title">Peri Gilpin</h1>
            <p className="peri-subtitle">Star of Hit NBC Comedy &quot;Frasier&quot; and CBS Drama &quot;Scorpion&quot;</p>
          </div>
        </div>
      </section>

      <div className="peri-content">
        <p>
          My family has been touched by Leiomyosarcoma, not once, but twice. I know the heartbreak of this rare disease, and I believe that being aware of what to look for and asking the right questions is so important on this journey.
        </p>
        <p>
          When my mom was diagnosed years ago, there wasn&apos;t as much information out there about this specific form of cancer. The doctors discovered it in her spine, where it had lain for years, undetected. She lost at least two vertebrae during her first emergency surgery. Many years later, my sister went through the same thing! She went into the hospital due to terrible pain and was sent to get an MRI. She had to be rushed to another hospital and had two vertebrae removed. My sister&apos;s prognosis, however, was better than my mom&apos;s because doctors knew what to look for, based on family history.
        </p>
        <p>
          Doctors won&apos;t always make the connection or know everything about your family history, so you need to be an advocate for yourself and your loved ones and research all that you can. My mom said, &quot;Make friends with your cancer,&quot; and that is so true.
        </p>
        <p>
          When you&apos;re doing your research, check out the National Leiomyosarcoma Foundation and their websites to see what they can offer in terms of patient support and advocacy, funding efforts for LMS treatment advancements, and medical research information.
        </p>
        <p className="peri-cta">
          <Link href="/">Visit the National Leiomyosarcoma Foundation</Link>
        </p>
      </div>
    </div>
  );
}
