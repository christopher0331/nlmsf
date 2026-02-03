"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_SRC =
  "https://nlsmf.org/wp-content/uploads/2023/10/NLMSF-Logo-Updated-30-Apr-2023.png";
const PHONE = "(303) 808-3437";
const DONATE_URL = "https://nlmsf.org/?form=DONATE";

const FONT_HEADER = "font-['Quicksand',ui-sans-serif,system-ui,sans-serif]";
const TOP_BAR = "w-full bg-white border-b border-gray-200 h-[50px] relative z-[5] box-border";
const CONTAINER_HEADER = "max-w-full w-full mx-auto pl-4 pr-10 flex items-center justify-between box-border relative lg:px-8 min-h-full";
const LOGO_SPACE = "flex-[0_0_25%] max-w-[200px]";
const NAVBAR = "w-full bg-white z-[200] relative border-b border-gray-200 shadow-sm py-3 min-h-[80px] box-border overflow-visible lg:py-4 lg:min-h-[96px] flex items-center";
const LOGO_SPANNING = "absolute top-0 left-4 z-[202] bg-transparent flex items-center w-[clamp(120px,20vw,200px)] h-[clamp(100px,40vw,140px)]";
const LOGO_IMG = "w-full h-auto max-h-[clamp(180px,12vw,120px)] object-contain lg:max-h-[clamp(100px,15vw,140px)]";
const DESKTOP_NAV = "hidden lg:flex lg:items-center lg:flex-grow lg:justify-center lg:w-full lg:ml-[clamp(150px,15vw,180px)]";
const MENU = "flex list-none m-0 p-0 gap-2 flex-wrap justify-center w-full";
const MENU_ITEM = "relative flex justify-center";
const MENU_LINK = "py-2 px-2.5 text-[#333] font-medium text-[clamp(0.85rem,2vw,0.95rem)] no-underline rounded transition-all duration-200 whitespace-nowrap bg-transparent border-0 cursor-pointer hover:bg-[#6a3ea1] hover:text-white";
const MENU_LINK_DROPDOWN = "py-2 pl-2.5 pr-[1.1rem] text-[#333] font-medium text-[clamp(0.85rem,2vw,0.95rem)] no-underline rounded transition-all duration-200 whitespace-nowrap bg-transparent border-0 cursor-pointer hover:bg-[#6a3ea1] hover:text-white relative inline-flex items-center gap-0.5 hover:[&>svg]:border-white";
/* Dropdown sits flush under header: top bar 50px + navbar min-height (80px / 96px lg) */
const DROPDOWN_WRAPPER_BASE = "fixed left-0 right-0 w-full flex justify-center opacity-0 pointer-events-none transition-[opacity] duration-300 delay-100 z-[1000] top-[130px] lg:top-[146px]";
const DROPDOWN_WRAPPER_OPEN = "!opacity-100 !pointer-events-auto";
const DROPDOWN_PANEL = "relative w-full max-w-[1280px] bg-white border-t-2 border-[#6a3ea1] border-b border-gray-200 shadow-lg mx-auto max-h-[calc(100vh-146px)] overflow-y-auto py-6 px-4 box-border";
const DROPDOWN_CONTENT = "p-0 flex flex-col items-center max-w-full mx-auto";
const DROPDOWN_CATEGORIES = "flex flex-wrap gap-6 justify-center py-4 px-2 w-full box-border";
const CATEGORY_COLUMN = "flex-[1_1_150px] min-w-[120px] max-w-[200px] p-2";
const CATEGORY_TITLE = "text-[0.95rem] font-semibold text-[#6a3ea1] mb-3 uppercase tracking-wide pb-2 border-b-2 border-[#6a3ea1] text-center";
const CATEGORY_LINKS = "list-none p-0 m-0";
const DROPDOWN_LINK = "block py-2 px-2 text-[#333] text-[0.95rem] font-medium no-underline transition-all duration-200 leading-snug text-center hover:text-[#6a3ea1] hover:bg-[#6a3ea1]/5 rounded";
const DROPDOWN_TITLE = "text-[1.3rem] font-bold text-[#6a3ea1] mb-4 pb-2 border-b-2 border-[#6a3ea1]";
const DROPDOWN_SECTION = "mb-6";
const DROPDOWN_ROW = "flex flex-wrap gap-4 mb-4";
const DROPDOWN_COLUMN = "flex-1 min-w-[160px]";
const DONATE_BTN = "inline-block py-2 px-5 bg-red-600 text-white font-semibold text-sm no-underline rounded-full transition-all duration-200 shadow-sm uppercase tracking-wide leading-normal hover:bg-red-700 hover:shadow-md hover:-translate-y-px max-lg:my-4 max-lg:text-center max-lg:py-3 max-lg:px-4";
const ACTIONS = "flex items-center gap-2 flex-wrap max-lg:hidden";
const PHONE_LINK = "flex items-center text-[#6a3ea1] text-sm font-medium no-underline transition-colors duration-200 hover:text-[#7d52b5]";
const PHONE_ICON = "mr-1.5";
const MOBILE_TOGGLE = "block lg:!hidden bg-gradient-to-br from-[#6a3ea1] to-[#4b2e83] border-0 rounded-[20%] p-3 cursor-pointer z-[2000] absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg";
const MOBILE_NAV_BASE = "fixed top-0 left-0 w-full h-screen bg-white z-[1999] -translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto shadow-lg pb-8";
const MOBILE_NAV_OPEN = "translate-x-0";
const MOBILE_HEADER = "flex items-center justify-between p-4 border-b border-gray-200";
const MOBILE_LOGO_IMG = "w-[160px] h-auto";
const MOBILE_CLOSE = "flex items-center justify-center bg-gradient-to-br from-[#6a3ea1] to-[#4b2e83] border-0 rounded-[10%] w-12 h-12 cursor-pointer z-[2001] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg";
const MOBILE_CONTACT = "p-4 flex flex-col gap-2 border-b border-gray-200";
const MOBILE_PHONE = "flex items-center text-[#6a3ea1] text-sm font-medium no-underline";
const MOBILE_DONATE = "inline-block py-2 px-5 bg-red-600 text-white font-semibold text-sm no-underline rounded-full text-center uppercase hover:bg-red-700";
const MOBILE_MENU = "p-4";
const MOBILE_LINK = "block py-3 text-[#333] font-semibold text-base no-underline uppercase bg-transparent border-0 w-full text-left cursor-pointer hover:text-[#6a3ea1]";
const MOBILE_SUBMENU_WRAPPER = "hidden pl-4";
const MOBILE_SUBMENU_WRAPPER_OPEN = "block pl-4";
const MOBILE_CATEGORY = "mb-4";
const MOBILE_CATEGORY_TITLE = "text-[0.9rem] font-semibold text-[#6a3ea1] mb-2 uppercase border-b-2 border-[#6a3ea1] pb-1";
const MOBILE_SUBMENU = "list-none p-0 m-0";
const MOBILE_SUBMENU_LINK = "block py-2 text-[#333] text-sm font-medium no-underline hover:text-[#6a3ea1] hover:bg-[#6a3ea1]/5";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width={10} height={10} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M1 3L5 7L9 3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeDesktop = useCallback(() => setDesktopDropdown(null), []);
  const closeDropdowns = useCallback(() => {
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, []);
  const toggleDesktop = (key: string) =>
    setDesktopDropdown((prev) => (prev === key ? null : key));
  const toggleMobile = (key: string) =>
    setMobileDropdown((prev) => (prev === key ? null : key));
  const handleDropdownLinkClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("a")) {
        closeDesktop();
      }
    },
    [closeDesktop],
  );

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileNavOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (desktopDropdown == null) return;
      const target = e.target as HTMLElement;
      if (!target.closest("[data-has-dropdown]") && !target.closest("[data-dropdown-panel]")) closeDesktop();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeDesktop, desktopDropdown]);

  useEffect(() => {
    if (desktopDropdown == null) return;
    const handleScroll = () => {
      closeDesktop();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [closeDesktop, desktopDropdown]);

  useEffect(() => {
    closeDropdowns();
  }, [closeDropdowns, pathname]);

  return (
    <div className={FONT_HEADER}>
      <div className={LOGO_SPANNING}>
        <Link href="/">
          <Image
            src={LOGO_SRC}
            alt="NLMSF Logo"
            width={200}
            height={140}
            className={LOGO_IMG}
            style={{ height: 140, width: "auto" }}
            priority
          />
        </Link>
      </div>

      <div className={TOP_BAR}>
        <div className={CONTAINER_HEADER}>
          <div className={LOGO_SPACE} />
          <div className={ACTIONS}>
            <a href="tel:+13038083437" className={PHONE_LINK}>
              <span className={PHONE_ICON}>
                <PhoneIcon />
              </span>
              <span>{PHONE}</span>
            </a>
            <a href={DONATE_URL} className={DONATE_BTN}>
              Donate Now
            </a>
          </div>
        </div>
      </div>

      <div className={NAVBAR}>
        <div className={CONTAINER_HEADER}>
          <nav className={DESKTOP_NAV}>
            <ul className={MENU}>
              <li className={MENU_ITEM}>
                <Link href="/" className={MENU_LINK}>
                  HOME
                </Link>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "patients" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("patients");
                  }}
                >
                  PATIENTS
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "patients" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>PATIENTS</h3>
                      <div className={DROPDOWN_CATEGORIES}>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Understanding LMS
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/what-is-lms"
                                className={DROPDOWN_LINK}
                              >
                                What is LMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/abcs-of-new-diagnosis"
                                className={DROPDOWN_LINK}
                              >
                                ABC&apos;s of New Diagnosis
                              </Link>
                            </li>
                            <li>
                              <a
                                href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/sarcoma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={DROPDOWN_LINK}
                              >
                                Medical Terminology
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Diagnosis & Treatment
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/pathology-report-accuracy"
                                className={DROPDOWN_LINK}
                              >
                                Pathology Report Accuracy
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/molecular-tumor-testing"
                                className={DROPDOWN_LINK}
                              >
                                Genomic/Molecular Testing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/staging-lms-tumors"
                                className={DROPDOWN_LINK}
                              >
                                Tumor Grading and Staging
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/second-opinions-2"
                                className={DROPDOWN_LINK}
                              >
                                Second Opinions
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/treatment-options"
                                className={DROPDOWN_LINK}
                              >
                                Treatment Options
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/clinical-trials-research-information"
                                className={DROPDOWN_LINK}
                              >
                                Clinical Trials
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/related-educational-videos"
                                className={DROPDOWN_LINK}
                              >
                                ctDNA Impact
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Your Care Team
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/find-a-sarcoma-specialist"
                                className={DROPDOWN_LINK}
                              >
                                Find a Sarcoma Center Near You
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/oncology-care-team"
                                className={DROPDOWN_LINK}
                              >
                                Your Oncology Care Team
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/palliative-care"
                                className={DROPDOWN_LINK}
                              >
                                Palliative Care
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Patient Resources
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/patient-perspectives"
                                className={DROPDOWN_LINK}
                              >
                                Patient Perspectives
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/patient-driven-research"
                                className={DROPDOWN_LINK}
                              >
                                Patient Power: Patients Drive Research
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/cri-immunotherapy-patient-guide"
                                className={DROPDOWN_LINK}
                              >
                                CRI Immunotherapy Patient Guide
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chemo-corner"
                                className={DROPDOWN_LINK}
                              >
                                Chemo Corner
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chemo-and-dental-care"
                                className={DROPDOWN_LINK}
                              >
                                Chemo and Dental Care
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/psychosocial-guidance"
                                className={DROPDOWN_LINK}
                              >
                                Psychosocial Guidance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/nutrition-and-physical-activity"
                                className={DROPDOWN_LINK}
                              >
                                Nutrition and Physical Activity
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Support Resources
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/financial-assistance-2"
                                className={DROPDOWN_LINK}
                              >
                                Financial Guidance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/health-insurance-guidance"
                                className={DROPDOWN_LINK}
                              >
                                Health Insurance Guidance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/health-insurance-deep-dive"
                                className={DROPDOWN_LINK}
                              >
                                Health Insurance Deep Dive
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/transportation-lodging"
                                className={DROPDOWN_LINK}
                              >
                                Transportation and Lodging
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Education & Updates
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/events"
                                className={DROPDOWN_LINK}
                              >
                                Recorded Presentations
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/news-tracker"
                                className={DROPDOWN_LINK}
                              >
                                Newsletters
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/community-snapshot-news"
                                className={DROPDOWN_LINK}
                              >
                                In the News: Snapshot
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "survivorship" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("survivorship");
                  }}
                >
                  SURVIVORSHIP
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "survivorship" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>SURVIVORSHIP</h3>
                      <div className={DROPDOWN_SECTION}>
                        <div className={DROPDOWN_ROW}>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/survivorship-care-planning-2"
                              className={DROPDOWN_LINK}
                            >
                              Survivorship Care Planning
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/survivorship-resources-2"
                              className={DROPDOWN_LINK}
                            >
                              Survivorship Resources
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "caregiving" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("caregiving");
                  }}
                >
                  CAREGIVING COUNTS
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "caregiving" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>
                        CAREGIVING COUNTS
                      </h3>
                      <div className={DROPDOWN_SECTION}>
                        <div className={DROPDOWN_ROW}>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/caregiver-traits-2"
                              className={DROPDOWN_LINK}
                            >
                              Caregiver Traits
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/co-survivor-tips"
                              className={DROPDOWN_LINK}
                            >
                              Tips for Caregivers
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/resource-support"
                              className={DROPDOWN_LINK}
                            >
                              Resources/Guidance
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/caregivers-corner"
                              className={DROPDOWN_LINK}
                            >
                              Caregiver Corner
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "involved" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("involved");
                  }}
                >
                  GET INVOLVED
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "involved" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>GET INVOLVED</h3>
                      <div className={DROPDOWN_SECTION}>
                        <div className={DROPDOWN_ROW}>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/volunteer"
                              className={DROPDOWN_LINK}
                            >
                              Volunteer
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/donate"
                              className={DROPDOWN_LINK}
                            >
                              Donate
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/gift-shop"
                              className={DROPDOWN_LINK}
                            >
                              Shop to Support
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "about" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("about");
                  }}
                >
                  ABOUT US
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "about" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>ABOUT US</h3>
                      <div className={DROPDOWN_SECTION}>
                        <div className={DROPDOWN_ROW}>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/mission"
                              className={DROPDOWN_LINK}
                            >
                              Mission/History
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/our-board"
                              className={DROPDOWN_LINK}
                            >
                              Our Board
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/medical-advisory-board"
                              className={DROPDOWN_LINK}
                            >
                              Medical Advisory Board
                            </Link>
                          </div>
                          <div className={DROPDOWN_COLUMN}>
                            <Link
                              href="/testimonials"
                              className={DROPDOWN_LINK}
                            >
                              Testimonials
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-has-dropdown
                className={`${MENU_ITEM} ${desktopDropdown === "research" ? "open" : ""}`}
              >
                <button
                  type="button"
                  className={MENU_LINK_DROPDOWN}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDesktop("research");
                  }}
                >
                  RESEARCH
                  <ChevronDown className="shrink-0 text-[#6a3ea1]" />
                </button>
                <div data-dropdown-panel className={`${DROPDOWN_WRAPPER_BASE} ${desktopDropdown === "research" ? DROPDOWN_WRAPPER_OPEN : ""}`}>
                  <div className={DROPDOWN_PANEL} onClick={handleDropdownLinkClick}>
                    <div className={DROPDOWN_CONTENT}>
                      <h3 className={DROPDOWN_TITLE}>RESEARCH</h3>
                      <div className={DROPDOWN_CATEGORIES}>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Research Publication Updates
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/general-sarcoma"
                                className={DROPDOWN_LINK}
                              >
                                General Sarcoma
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/uterine-lms"
                                className={DROPDOWN_LINK}
                              >
                                Uterine LMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/non-uterine"
                                className={DROPDOWN_LINK}
                              >
                                Non-Uterine LMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/immunotherapy-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={DROPDOWN_LINK}
                              >
                                Immunotherapy
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/research-initiaves"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={DROPDOWN_LINK}
                              >
                                Research Initiatives
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/open-research"
                                className={DROPDOWN_LINK}
                              >
                                Open Research
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Research Funding
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/research-funding-2"
                                className={DROPDOWN_LINK}
                              >
                                Funded Projects
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>Education</h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/related-educational-videos"
                                className={DROPDOWN_LINK}
                              >
                                Related Educational Videos
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className={CATEGORY_COLUMN}>
                          <h4 className={CATEGORY_TITLE}>
                            Research Initiatives
                          </h4>
                          <ul className={CATEGORY_LINKS}>
                            <li>
                              <Link
                                href="/international-research-roundtable"
                                className={DROPDOWN_LINK}
                              >
                                International LMS Research Roundtable
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={MENU_ITEM}>
                <Link href="/tributes-directory" className={MENU_LINK}>
                  TRIBUTE PAGES
                </Link>
              </li>
              <li className={MENU_ITEM}>
                <Link href="/contact" className={MENU_LINK}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={MOBILE_TOGGLE}
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block relative w-3.5 h-0.5 my-0 mx-0 transition-all duration-300 before:content-[''] before:absolute before:left-0 before:w-3.5 before:h-0.5 before:bg-white before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:w-3.5 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
                mobileNavOpen
                  ? "bg-transparent before:top-0 before:translate-y-0 before:rotate-45 after:top-0 after:translate-y-0 after:-rotate-45"
                  : "bg-white before:-top-2 after:-bottom-2"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`${MOBILE_NAV_BASE} ${mobileNavOpen ? MOBILE_NAV_OPEN : ""}`}
        id="mobile-nav"
      >
        <div className={MOBILE_HEADER}>
          <Link href="/">
            <Image
              src={LOGO_SRC}
              alt="NLMSF Logo"
              width={160}
              height={112}
              className={MOBILE_LOGO_IMG}
              style={{ width: 160, height: "auto" }}
              priority
            />
          </Link>
          <button
            type="button"
            className={MOBILE_CLOSE}
            onClick={() => {
              setMobileNavOpen(false);
              setMobileDropdown(null);
            }}
            aria-label="Close menu"
          >
            <span className="block relative w-6 h-6">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white rotate-45" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white -rotate-45" />
            </span>
          </button>
        </div>
        <div className={MOBILE_CONTACT}>
          <a href="tel:+13038083437" className={MOBILE_PHONE}>
            <PhoneIcon />
            <span>{PHONE}</span>
          </a>
          <a href={DONATE_URL} className={MOBILE_DONATE}>
            Donate Now
          </a>
        </div>
        <nav className={MOBILE_MENU}>
          <ul className="list-none p-0 m-0">
            <li>
              <Link
                href="/"
                className={MOBILE_LINK}
                onClick={() => setMobileNavOpen(false)}
              >
                HOME
              </Link>
            </li>
            <MobileDropdown
              label="PATIENTS"
              open={mobileDropdown === "patients"}
              onToggle={() => toggleMobile("patients")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Understanding LMS
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/what-is-lms"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      What is LMS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/abcs-of-new-diagnosis"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      ABC&apos;s of New Diagnosis
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/sarcoma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={MOBILE_SUBMENU_LINK}
                    >
                      Medical Terminology
                    </a>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Diagnosis & Treatment
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/pathology-report-accuracy"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Pathology Report Accuracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/molecular-tumor-testing"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Genomic/Molecular Testing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/staging-lms-tumors"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Tumor Grading and Staging
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/second-opinions-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Second Opinions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatment-options"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Treatment Options
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clinical-trials-research-information"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Clinical Trials Research Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/related-educational-videos"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      ctDNA Impact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Your Care Team
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/find-a-sarcoma-specialist"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Find a Sarcoma Center Near You
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oncology-care-team"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Your Oncology Care Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/palliative-care"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Palliative Care
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Patient Resources
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/patient-perspectives"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Patient Perspectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/patient-driven-research"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Patient Power: Patients Drive Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cri-immunotherapy-patient-guide"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      CRI Immunotherapy Patient Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chemo-corner"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Chemo Corner
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chemo-and-dental-care"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Chemo and Dental Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/psychosocial-guidance"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Psychosocial Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nutrition-and-physical-activity"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Nutrition and Physical Activity
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Support Resources
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/financial-assistance-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Financial Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/health-insurance-guidance"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Health Insurance Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/health-insurance-deep-dive"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Health Insurance Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/transportation-lodging"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Transportation and Lodging
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Education & Updates
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/events"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Recorded Presentations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news-tracker"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Newsletters
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community-snapshot-news"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      In the News: Snapshot
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <MobileDropdown
              label="SURVIVORSHIP"
              open={mobileDropdown === "survivorship"}
              onToggle={() => toggleMobile("survivorship")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/survivorship-care-planning-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Survivorship Care Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/survivorship-resources-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Survivorship Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <MobileDropdown
              label="CAREGIVING COUNTS"
              open={mobileDropdown === "caregiving"}
              onToggle={() => toggleMobile("caregiving")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/caregiver-traits-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Caregiver Traits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/co-survivor-tips"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Tips for Caregivers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resource-support"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Resources/Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/caregivers-corner"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Caregivers Corner
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <MobileDropdown
              label="GET INVOLVED"
              open={mobileDropdown === "involved"}
              onToggle={() => toggleMobile("involved")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/volunteer"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/donate"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gift-shop"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Shop to Support
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <MobileDropdown
              label="ABOUT US"
              open={mobileDropdown === "about"}
              onToggle={() => toggleMobile("about")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/mission"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Mission/History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-board"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Our Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/medical-advisory-board"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Medical Advisory Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <MobileDropdown
              label="RESEARCH"
              open={mobileDropdown === "research"}
              onToggle={() => toggleMobile("research")}
              onLinkClick={() => setMobileNavOpen(false)}
            >
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Research Publication Updates
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/general-sarcoma"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      General Sarcoma
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uterine-lms"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Uterine LMS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/non-uterine"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Non-Uterine LMS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/immunotherapy-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Immunotherapy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Research Funding
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/research-funding-2"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Funded Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>Education</h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/related-educational-videos"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Related Educational Videos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={MOBILE_CATEGORY}>
                <h4 className={MOBILE_CATEGORY_TITLE}>
                  Research Initiatives
                </h4>
                <ul className={MOBILE_SUBMENU}>
                  <li>
                    <Link
                      href="/international-research-roundtable"
                      className={MOBILE_SUBMENU_LINK}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      International LMS Research Roundtable
                    </Link>
                  </li>
                </ul>
              </div>
            </MobileDropdown>

            <li>
              <Link
                href="/tributes-directory"
                className={MOBILE_LINK}
                onClick={() => setMobileNavOpen(false)}
              >
                TRIBUTE PAGES
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={MOBILE_LINK}
                onClick={() => setMobileNavOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function MobileDropdown({
  label,
  open,
  onToggle,
  onLinkClick,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="relative">
      <button
        type="button"
        className={`${MOBILE_LINK} pr-8 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border-[#6a3ea1] after:border-r-[1.5px] after:border-b-[1.5px] after:border-l-0 after:border-t-0 after:transition-transform after:duration-200 ${open ? "after:rotate-[-135deg]" : "after:rotate-45"}`}
        onClick={onToggle}
      >
        {label}
      </button>
      <div className={open ? MOBILE_SUBMENU_WRAPPER_OPEN : MOBILE_SUBMENU_WRAPPER}>{children}</div>
    </li>
  );
}
