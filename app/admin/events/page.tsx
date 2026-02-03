import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminEventsClient from "./AdminEventsClient";

export default async function AdminEventsPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/events");

  return <AdminEventsClient />;
}
