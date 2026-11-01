import type { Metadata } from "next";
import SecurityMaintenanceDesign from "@/components/designs/SecurityMaintenanceDesign";
export const metadata: Metadata = {
  title: "Security & Maintenance Plans",
  description: "Protect your website with regular updates, backups, and security maintenance.",
};
export default function Page() {
  return <SecurityMaintenanceDesign />;
}
