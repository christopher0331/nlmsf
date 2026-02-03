import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminCommunityNewsClient from "./AdminCommunityNewsClient";

export default async function AdminCommunityNewsPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/community-news");

  return <AdminCommunityNewsClient />;
}
