"use client";

import Image from "next/image";
import { useState } from "react";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    const first = parts[0];
    const last = parts[parts.length - 1];
    return (first[0] ?? "") + (last[0] ?? "");
  }
  return name.slice(0, 2).toUpperCase();
}

type AdvisorCardProps = {
  name: string;
  position: string;
  institution: string;
  img: string;
};

export function AdvisorCard({ name, position, institution, img }: AdvisorCardProps) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(name);

  return (
    <div className="nlmsf-advisor-card">
      <div className="nlmsf-advisor-image-container">
        <div className="nlmsf-advisor-image-placeholder">
          {!imgError ? (
            <Image
              src={img}
              alt=""
              decoding="async"
              width={120}
              height={120}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="nlmsf-advisor-initials" aria-hidden>
              {initials}
            </span>
          )}
        </div>
      </div>
      <div className="nlmsf-advisor-content">
        <h3 className="nlmsf-advisor-name">{name}</h3>
        <p className="nlmsf-advisor-position">{position}</p>
        <p className="nlmsf-advisor-institution">
          {institution.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < institution.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
