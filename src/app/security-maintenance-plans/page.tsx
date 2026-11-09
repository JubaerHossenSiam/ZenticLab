import type { Metadata } from "next";
import SecurityMaintenanceDesign from "@/components/designs/SecurityMaintenanceDesign";
export const metadata: Metadata = {
  title: "Security & Maintenance Plans",
  description: "Protect your website with regular updates, backups, and security maintenance.",
  alternates: { canonical: "https://zenticlab.com/security-maintenance-plans" },
};
export default function Page() {
  return <SecurityMaintenanceDesign />;
}
