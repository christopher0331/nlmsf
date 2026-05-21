"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeroModal, {
  HeroCommunityModalContent,
  HeroSubscribeModalContent,
} from "@/components/HeroModal";

const HERO_IMG =
  "https://media.nlmsf.org/wp-content/uploads/2025/06/hero-section-1.png";
const DONATE_URL = "https://nlmsf.org/?form=DONATE";
const MAILCHIMP_ACTION =
  "https://nlmsf.us13.list-manage.com/subscribe/post?u=7882c1010a69171493a3bed4b&id=7958b212a8&f_id=00a19fedf0";

const btnOutline =
  "inline-block font-semibold text-sm py-2 px-5 rounded-md transition-all duration-300 border-2 border-white/75 cursor-pointer font-[inherit] text-white bg-white/15 hover:bg-white/25 hover:border-violet-100 hover:-translate-y-0.5";

const heroTextShadow =
  "[text-shadow:0_1px_3px_rgba(15,23,42,0.5),0_2px_8px_rgba(15,23,42,0.25)]";

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
            quality={75}
            className="object-cover object-[center_0%]"
            sizes="100vw"
          />
        </div>
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-[2]">
          <div
            className="relative z-10 max-w-[980px] mx-auto text-center px-4 py-6 md:py-8 rounded-2xl border border-violet-200/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(76,29,149,0.18)]"
            style={{
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.16) 100%), linear-gradient(145deg, rgba(107,70,193,0.28) 0%, rgba(76,29,149,0.23) 50%, rgba(49,27,98,0.26) 100%)",
            }}
          >
            <div className="inline-block py-2 px-6 bg-[#6b46c1]/36 backdrop-blur-sm rounded-full mb-6 text-xl border border-violet-200/32">
              <span className={`text-white font-medium ${heroTextShadow}`}>
                Supporting the LMS Community Since 1997
              </span>
            </div>
            <h1 className={`text-[3.05rem] font-bold leading-tight mb-6 text-white ${heroTextShadow}`}>
              National Leiomyosarcoma Foundation
            </h1>
            <p className={`text-xl text-white mb-8 max-w-[800px] mx-auto ${heroTextShadow}`}>
              Providing education, support, research funding and advocacy for
              the <br />
              Global LMS Community as we move forward in the quest for the cure.
            </p>
            <div className="flex flex-col gap-4 max-w-[1000px] mx-auto my-8 md:flex-row md:items-stretch">
              <div className="flex items-center rounded-lg py-4 px-6 border border-violet-200/22 bg-[#4c1d95]/22 backdrop-blur-sm shadow-[0_2px_14px_rgba(76,29,149,0.11)] md:flex-1 md:flex-col md:items-center md:text-center md:py-6 hover:bg-[#6b46c1]/27 transition-colors">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 ring-1 ring-violet-200/27">
                  <i className="fas fa-heart text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:flex-grow-0 md:mr-0 md:mb-5 md:text-center md:w-full">
                  <h3 className={`text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ${heroTextShadow}`}>
                    Support Research
                  </h3>
                  <p className={`text-sm text-white leading-snug m-0 md:mb-0 ${heroTextShadow}`}>
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
              <div className="flex items-center rounded-lg py-4 px-6 border border-violet-200/22 bg-[#4c1d95]/22 backdrop-blur-sm shadow-[0_2px_14px_rgba(76,29,149,0.11)] md:flex-1 md:flex-col md:items-center md:text-center md:py-6 hover:bg-[#6b46c1]/27 transition-colors">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 ring-1 ring-violet-200/27">
                  <i className="fas fa-envelope text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:flex-grow-0 md:mr-0 md:mb-5 md:text-center md:w-full">
                  <h3 className={`text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ${heroTextShadow}`}>
                    Stay Informed
                  </h3>
                  <p className={`text-sm text-white leading-snug m-0 md:mb-0 ${heroTextShadow}`}>
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
              <div className="flex items-center rounded-lg py-4 px-6 border border-violet-200/22 bg-[#4c1d95]/22 backdrop-blur-sm shadow-[0_2px_14px_rgba(76,29,149,0.11)] md:flex-1 md:flex-col md:items-center md:text-center md:py-6 hover:bg-[#6b46c1]/27 transition-colors">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-4 md:w-12 md:h-12 ring-1 ring-violet-200/27">
                  <i className="fab fa-facebook text-white text-base md:text-xl" style={{ margin: 0 }} aria-hidden />
                </div>
                <div className="flex-grow mr-6 text-left md:flex-grow-0 md:mr-0 md:mb-5 md:text-center md:w-full">
                  <h3 className={`text-base font-semibold text-white m-0 mb-1 md:text-lg md:mb-2 ${heroTextShadow}`}>
                    Join Community
                  </h3>
                  <p className={`text-sm text-white leading-snug m-0 md:mb-0 ${heroTextShadow}`}>
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
            <p className={`text-xl text-white mb-8 max-w-[800px] mx-auto ${heroTextShadow}`}>
              A guiding light for patients and caregivers facing a
              LeioMyoSarcoma diagnosis.
            </p>
          </div>
        </div>
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white text-3xl drop-shadow-[0_1px_4px_rgba(15,23,42,0.35)] transition-opacity duration-300 ${
            scrollArrowHidden ? "opacity-0 pointer-events-none" : ""
          }`}
          aria-hidden
        >
          <i className="fas fa-chevron-down block animate-hero-bounce" />
        </div>
      </section>

      <HeroModal
        open={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
        title="Stay informed"
        description="Subscribe to NLMSF news and community updates."
        iconClass="fas fa-envelope"
        titleId="subscribe-modal-title"
      >
        <div id="mc_embed_signup">
          <HeroSubscribeModalContent mailchimpAction={MAILCHIMP_ACTION} />
        </div>
      </HeroModal>

      <HeroModal
        open={communityOpen}
        onClose={() => setCommunityOpen(false)}
        title="Join our Facebook communities"
        description="Connect with patients, caregivers, and families in the LMS community."
        iconClass="fab fa-facebook-f"
        titleId="community-modal-title"
        maxWidthClass="max-w-[480px]"
      >
        <HeroCommunityModalContent />
      </HeroModal>
    </>
  );
}
