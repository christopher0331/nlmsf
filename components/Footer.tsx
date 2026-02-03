import Link from "next/link";

const FOOTER_FONT =
  "font-[Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif]";

export default function Footer() {
  return (
    <footer
      className={`border-t border-gray-200 bg-white py-10 ${FOOTER_FONT}`}
    >
      <div className="flex flex-col max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-10 w-full max-w-[1000px] mx-auto mb-10 max-[992px]:pb-4 md:grid-cols-4 md:gap-10 sm:gap-[30px]">
          <div className="shrink-0">
            <h3 className="text-base font-semibold text-[#6a3ea1] mb-4 m-0">
              Quick Links
            </h3>
            <ul className="list-none p-0 m-0 leading-[1.8]">
              <li className="mb-4">
                <Link
                  href="/"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/our-board"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/what-is-lms"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  What is LMS?
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Support
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <h3 className="text-base font-semibold text-[#6a3ea1] mb-4 m-0">
              Support
            </h3>
            <ul className="list-none p-0 m-0 leading-[1.8]">
              <li className="mb-4">
                <a
                  href="tel:+13038083437"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  24/7 Hotline
                </a>
              </li>
              <li className="mb-4">
                <Link
                  href="/financial-assistance-2"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Resources
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/what-is-lms"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <h3 className="text-base font-semibold text-[#6a3ea1] mb-4 m-0">
              Get Involved
            </h3>
            <ul className="list-none p-0 m-0 leading-[1.8]">
              <li className="mb-4">
                <Link
                  href="/donate"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Donate
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/volunteer"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Volunteer
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/news-tracker"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="shrink-0">
            <h3 className="text-base font-semibold text-[#6a3ea1] mb-4 m-0">
              Connect
            </h3>
            <ul className="list-none p-0 m-0 leading-[1.8]">
              <li className="mb-4">
                <a
                  href="https://www.facebook.com/groups/1329603747125818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4b5563] no-underline text-base leading-normal transition-colors duration-200 hover:text-violet-500"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="h-px bg-gray-200 mx-auto mb-[30px] w-[90%] max-w-[1000px] block clear-both"
          aria-hidden
        />

        <div className="flex justify-between items-center flex-wrap max-w-[1000px] mx-auto px-5 pb-5 clear-both text-sm max-[992px]:flex-col max-[992px]:text-center max-[992px]:gap-4">
          <div>
            <p className="m-0 text-[#6a3ea1]">
              © 2025 National LeioMyoSarcoma Foundation. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 max-[992px]:justify-center max-md:flex-col max-md:items-center max-md:gap-3">
            <Link
              href="/privacy"
              className="text-[#4b5563] no-underline transition-colors duration-200 hover:text-violet-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#4b5563] no-underline transition-colors duration-200 hover:text-violet-500"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="text-[#4b5563] no-underline transition-colors duration-200 hover:text-violet-500"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <p className="m-0 text-[#4b5563]">
              24/7 Support Hotline:{" "}
              <a
                href="tel:+13038083437"
                className="text-[#6a3ea1] font-semibold no-underline transition-colors duration-200 hover:text-violet-500"
              >
                (303) 808-3437
              </a>
            </p>
          </div>

          <div>
            <p className="m-0 text-[#4b5563]">
              Web Development & SEO by{" "}
              <a
                href="https://reactivlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4b5563] no-underline transition-colors duration-200 hover:text-violet-500"
              >
                Reactiv Labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
