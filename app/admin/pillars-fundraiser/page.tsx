import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminPillarsFundraiserClient from "./AdminPillarsFundraiserClient";

export default async function AdminPillarsFundraiserPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/pillars-fundraiser");

  return <AdminPillarsFundraiserClient />;
}
