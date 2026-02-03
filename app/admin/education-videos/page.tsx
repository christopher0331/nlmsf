import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminEducationVideosClient from "./AdminEducationVideosClient";

export default async function AdminEducationVideosPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/education-videos");

  return <AdminEducationVideosClient />;
}
