"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["newly-diagnosed-video", "diagnosis", "treatment", "resources"];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("newly-diagnosed-video");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let currentId = SECTION_IDS[0];

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <nav className="what-lms-nav">
      <h3 className="what-lms-nav-title">Page Contents</h3>
      <div className="what-lms-nav-section newly-diagnosed">
        <a
          href="#newly-diagnosed-video"
          onClick={handleClick("newly-diagnosed-video")}
          className={activeId === "newly-diagnosed-video" ? "active" : undefined}
        >
          Newly Diagnosed
        </a>
      </div>
      <div className="what-lms-nav-section diagnosis">
        <a
          href="#diagnosis"
          onClick={handleClick("diagnosis")}
          className={activeId === "diagnosis" ? "active" : undefined}
        >
          Diagnosis
        </a>
      </div>
      <div className="what-lms-nav-section treatment">
        <a
          href="#treatment"
          onClick={handleClick("treatment")}
          className={activeId === "treatment" ? "active" : undefined}
        >
          Treatment
        </a>
      </div>
      <div className="what-lms-nav-section resources">
        <a
          href="#resources"
          onClick={handleClick("resources")}
          className={activeId === "resources" ? "active" : undefined}
        >
          Resources
        </a>
      </div>
    </nav>
  );
}
