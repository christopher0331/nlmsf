import type { Metadata } from "next";
import TributesDirectoryClient from "./TributesDirectoryClient";

export const metadata: Metadata = {
  title: "Tribute Pages | NLMSF",
  description:
    "Honor and remember loved ones through our community tribute pages.",
};

export default function TributesDirectoryPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <TributesDirectoryClient />
    </main>
  );
}
