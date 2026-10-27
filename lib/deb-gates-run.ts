/**
 * Deb Gates run — homepage card and /deb-gates-run/.
 *
 * Christopher must approve this wording and confirm Deb's permission before merge.
 *
 * TODO(christopher): do not flip these on with empty or guessed values.
 * - showEventDetails: event name, date, location, and distance, once Deb confirms them.
 * - showPhoto: a photo Deb has permitted. Never a stock image or someone else's photo.
 * - donateHref: confirm the NLMSF FundraiseUp form, or replace the URL.
 *   Do not point this at Joseph Jang's campaign (FUNRBJGPJSK) or the GoFundMe page.
 */
export const DEB_GATES_RUN = {
  path: "/deb-gates-run/",
  showEventDetails: false,
  showPhoto: false,
  eventName: "",
  eventDate: "",
  eventLocation: "",
  photoSrc: "",
  photoAlt: "",
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
