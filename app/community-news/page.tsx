import { permanentRedirect } from "next/navigation";

/** Redirect /community-news to /community-snapshot-news */
export default function CommunityNewsRedirect() {
  permanentRedirect("/community-snapshot-news");
}
