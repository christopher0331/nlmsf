import { permanentRedirect } from "next/navigation";

/** Redirect /caregiver-traits to /caregiver-traits-2 */
export default function CaregiverTraitsRedirect() {
  permanentRedirect("/caregiver-traits-2");
}
