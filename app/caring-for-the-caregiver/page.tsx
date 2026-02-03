import { permanentRedirect } from "next/navigation";

/** Redirect /caring-for-the-caregiver to /caregivers-corner */
export default function CaringForTheCaregiverRedirect() {
  permanentRedirect("/caregivers-corner");
}
