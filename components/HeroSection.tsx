"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMG =
  "https://media.nlmsf.org/wp-content/uploads/2025/06/hero-section-1.png";
const DONATE_URL = "https://nlmsf.org/?form=DONATE";
const MAILCHIMP_ACTION =
  "https://nlmsf.us13.list-manage.com/subscribe/post?u=7882c1010a69171493a3bed4b&id=7958b212a8&f_id=00a19fedf0";

const btnOutline =
  "inline-block font-semibold text-sm py-2 px-5 rounded-md transition-all duration-300 border-2 border-white cursor-pointer font-[inherit] text-white bg-white/15 hover:bg-white/25 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:-translate-y-0.5";

export default function HeroSection() {
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [scrollArrowHidden, setScrollArrowHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollArrowHidden(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative py-20 text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="NLMSF Hero Image"
            fill
            priority
            className="object-cover object-[center_0%]"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0.25), rgba(0,0,0,0.15))",
          }}
        />
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-[2]">
          <div className="relative z-10 max-w-[980px] mx-auto text-center px-4">
            <div className="inline-block py-2 px-6 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-xl">
              <span className="text-white font-medium">
                Supporting the LMS Community Since 1997
              </span>
            </div>
            <h1 className="text-[2.7rem] font-bold leading-tight mb-6">
              National Leiomyosarcoma Foundation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-[800px] mx-auto">
              Providing education, support, research funding and advocacy for
              the <br />
              Global LMS Community as we move forward in the quest for the cure.
            </p>
            <div className="flex flex-col gap-4 max-w-[1000px] mx-auto my-8 md:flex-row md:items-stretch">
              <div className="flex items-center rounded-lg py-4 px-6 border border-white/20 backdrop-blur-sm md:flex-1 md:flex-col md:text-center md:py-6">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 md:mx-auto">
                  <i className="fas fa-heart text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:mr-0 md:mb-5 md:text-center">
                  <h3 className="text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ">
                    Support Research
                  </h3>
                  <p className="text-sm text-white leading-snug m-0 opacity-90  md:mb-0">
                    Help push research forward for Leiomyosarcoma treatments
                  </p>
                </div>
                <Link
                  href="/donate"
                  className={btnOutline}
                >
                  Donate Now
                </Link>
              </div>
              <div className="flex items-center rounded-lg py-4 px-6 border border-white/20 backdrop-blur-sm md:flex-1 md:flex-col md:text-center md:py-6">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 md:mx-auto">
                  <i className="fas fa-envelope text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:mr-0 md:mb-5 md:text-center">
                  <h3 className="text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ">
                    Stay Informed
                  </h3>
                  <p className="text-sm text-white leading-snug m-0 opacity-90  md:mb-0">
                    Receive the latest research news and community updates
                  </p>
                </div>
                <button
                  type="button"
                  className={btnOutline}
                  onClick={() => setSubscribeOpen(true)}
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center rounded-lg py-4 px-6 border border-white/20 backdrop-blur-sm md:flex-1 md:flex-col md:text-center md:py-6">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 md:mx-auto">
                  <i className="fab fa-facebook text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:mr-0 md:mb-5 md:text-center">
                  <h3 className="text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ">
                    Join Community
                  </h3>
                  <p className="text-sm text-white leading-snug m-0 opacity-90  md:mb-0">
                    Connect with our Facebook support group
                  </p>
                </div>
                <button
                  type="button"
                  className={btnOutline}
                  onClick={() => setCommunityOpen(true)}
                >
                  Join Now
                </button>
              </div>
            </div>
            <br />
            <p className="text-xl text-white/90 mb-8 max-w-[800px] mx-auto">
              A guiding light for patients and caregivers facing a
              LeioMyoSarcoma diagnosis.
            </p>
          </div>
        </div>
        <div
          className={`absolute bottom-48 left-1/2 -translate-x-1/2 z-20 text-white text-3xl opacity-90 transition-opacity duration-300 ${
            scrollArrowHidden ? "opacity-0 pointer-events-none" : ""
          }`}
          aria-hidden
        >
          <i className="fas fa-chevron-down block animate-hero-bounce" />
        </div>
      </section>

      {/* Subscribe Modal */}
      <div
        id="subscribeModal"
        className="fixed inset-0 z-[9999] justify-center items-center bg-black/60"
        style={{ display: subscribeOpen ? "flex" : "none" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-modal-title"
      >
        <div className="bg-white text-gray-800 py-6 px-8 rounded-xl max-w-[400px] w-[90%] shadow-xl relative text-center">
          <button
            type="button"
            className="absolute top-4 right-4 text-lg font-bold cursor-pointer text-gray-500 hover:text-black transition-colors bg-transparent border-0 py-1 px-1 leading-none"
            onClick={() => setSubscribeOpen(false)}
            aria-label="Close subscribe modal"
          >
            ×
          </button>
          <div id="mc_embed_signup">
            <form
              action={MAILCHIMP_ACTION}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2 id="subscribe-modal-title" className="mb-3">
                  Subscribe
                </h2>
                <div className="text-right text-sm text-gray-500 mb-2">
                  <span className="text-red-600">*</span> indicates required
                </div>
                <div className="mb-4 text-left">
                  <label
                    htmlFor="mce-EMAIL"
                    className="block font-semibold text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email w-full py-2 px-3 border border-gray-300 rounded-md text-base box-border"
                    id="mce-EMAIL"
                    placeholder="your@email.com"
                    required
                    defaultValue=""
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div aria-hidden="true" style={{ position: "absolute", left: -5000 }}>
                  <input
                    type="text"
                    name="b_7882c1010a69171493a3bed4b_7958b212a8"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button w-full py-3 px-6 bg-gradient-to-r from-[#4a90e2] to-[#6a3ea1] text-white border-0 rounded-full font-semibold text-base cursor-pointer hover:opacity-90 transition-opacity"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Community Modal */}
      <div
        id="communityModal"
        className="fixed inset-0 z-[9999] justify-center items-center bg-black/60"
        style={{ display: communityOpen ? "flex" : "none" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="community-modal-title"
      >
        <div className="bg-white text-gray-800 py-6 px-8 rounded-xl max-w-[400px] w-[90%] shadow-xl relative text-center">
          <button
            type="button"
            className="absolute top-4 right-4 text-lg font-bold cursor-pointer text-gray-500 hover:text-black transition-colors bg-transparent border-0 py-1 px-1 leading-none"
            onClick={() => setCommunityOpen(false)}
            aria-label="Close community modal"
          >
            ×
          </button>
          <h3 id="community-modal-title" className="mb-3">
            Join Our Facebook Communities
          </h3>
          <p className="mb-6 text-gray-600 text-base">
            Select a group below to connect with others in the LMS community:
          </p>
          <ul
            id="communityButtons"
            className="list-none m-0 p-0 flex flex-col gap-4 text-left"
          >
            <li>
              <a
                href="https://www.facebook.com/groups/leiomyosarcomasupportgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#4a90e2] to-[#6a3ea1] text-white py-3 px-6 rounded-full text-base font-bold no-underline shadow-[0_4px_12px_rgba(74,144,226,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)]"
              >
                NLMSF Leiomyosarcoma Support Group
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/cancerleiomyosarcoma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#4a90e2] to-[#6a3ea1] text-white py-3 px-6 rounded-full text-base font-bold no-underline shadow-[0_4px_12px_rgba(74,144,226,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)]"
              >
                Stand Up to Leiomyosarcoma
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/573285557042465/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#4a90e2] to-[#6a3ea1] text-white py-3 px-6 rounded-full text-base font-bold no-underline shadow-[0_4px_12px_rgba(74,144,226,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)]"
              >
                Cancer Sucks - Leiomyosarcoma
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
