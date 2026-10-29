import Link from "next/link";
import { DEB_GATES_STORY_PATH } from "@/lib/deb-gates-story";

const pageClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#7e22ce] px-8 py-4 text-lg font-semibold text-[#7e22ce] no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce] sm:w-auto";

const cardClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#7e22ce] px-5 py-3 text-center text-sm font-semibold text-[#7e22ce] no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce]";

export default function ReadDebFullStoryLink({
  variant = "page",
}: {
  variant?: "page" | "card";
}) {
  return (
    <Link href={DEB_GATES_STORY_PATH} className={variant === "card" ? cardClass : pageClass}>
      <i className="fas fa-book-open" aria-hidden />
      Read Deb&apos;s full story
    </Link>
  );
}
