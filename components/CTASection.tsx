import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-16 px-6 text-center text-white md:py-12 md:px-4"
      style={{
        background: "linear-gradient(135deg, #6d28d9 0%, #5a4da0 50%, #7e22ce 100%)",
      }}
      aria-label="Join our mission"
    >
      <div className="max-w-[720px] mx-auto">
        <div>
          <h2 className="text-2xl font-extrabold m-0 mb-3 leading-tight text-white md:text-[1.65rem]">
            Join Our Mission To Support The LMS Community
          </h2>
          <p className="text-[1.15rem] text-[#f3e8ff] m-0 mb-6 leading-normal">
            Your support makes a real difference in the lives of patients and families affected by LMS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-block py-3.5 px-7 text-base font-semibold no-underline rounded-[10px] bg-white text-[#6d28d9] border-0 transition-all duration-200 hover:bg-[#faf5ff] hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-block py-3.5 px-7 text-base font-semibold no-underline rounded-[10px] bg-transparent text-white border-2 border-white/60 transition-all duration-200 hover:border-white hover:bg-white/15 hover:-translate-y-0.5"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
