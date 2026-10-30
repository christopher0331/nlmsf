/**
 * Deb Gates run — homepage card and /deb-gates-run/.
 *
 * showEventDetails stays off until a confirmed event name, date, and location
 * exist. Do not invent them.
 *
 * showPhoto is the race-day photo supplied for this page. It shows two people.
 * Alt text and the caption must not name them or attach a specific event or
 * date. It is not a portrait, so the homepage card does not crop it into an avatar.
 *
 * donateHref stays on the NLMSF FundraiseUp form.
 * Do not point this at Joseph Jang's campaign (FUNRBJGPJSK) or the GoFundMe page.
 */
export const DEB_GATES_RUN = {
  path: "/deb-gates-run/",
  showEventDetails: false,
  showPhoto: true,
  eventName: "",
  eventDate: "",
  eventLocation: "",
  photoSrc: "/images/deb-gates/deb-race-day.webp",
  photoAlt: "Deb Gates and her mother Mimi with finisher medals and race bibs on race day.",
  photoWidth: 300,
  photoHeight: 209,
  photoCaption:
    "Deb and her mother Mimi on race day; Mimi is also a sarcoma survivor (Desmoid Tumor.)",
  logoSrc: "/images/deb-gates/champions-of-hope.webp",
  logoAlt:
    "Champions of Hope logo: Hope Drives Change, for LMS / Sarcoma Research.",
  logoWidth: 285,
  logoHeight: 291,
  logoCaption: "Champions of Hope",
  donateHref:
    "/donate/?form=DONATE&utm_source=deb-gates-run&utm_medium=website&utm_campaign=deb-gates-run",
} as const;

export function debGatesEventReady(): boolean {
  return (
    DEB_GATES_RUN.showEventDetails &&
    DEB_GATES_RUN.eventName.trim().length > 0 &&
    DEB_GATES_RUN.eventDate.trim().length > 0
  );
}

export function debGatesPhotoReady(): boolean {
  return (
    DEB_GATES_RUN.showPhoto &&
    DEB_GATES_RUN.photoSrc.trim().length > 0 &&
    DEB_GATES_RUN.photoAlt.trim().length > 0
  );
}
