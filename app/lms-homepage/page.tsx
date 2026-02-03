import { permanentRedirect } from "next/navigation";

export default function LmsHomepageRedirect() {
  permanentRedirect("/");
}
