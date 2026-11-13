import type { Metadata } from "next";
import SecurityMaintenanceDesign from "@/components/designs/SecurityMaintenanceDesign";
export const metadata: Metadata = {
  title: { absolute: "Website Security & Maintenance Plans | Zentic Lab" },
  description:
    "Get monthly software updates, backups and security checks. Choose Essential Care or Complete Care with 24/7 monitoring.",
  alternates: { canonical: "https://zenticlab.com/security-maintenance-plans" },
};
export default function Page() {
  return <SecurityMaintenanceDesign />;
}
