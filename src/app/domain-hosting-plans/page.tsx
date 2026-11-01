import type { Metadata } from "next";
import DomainHostingDesign from "@/components/designs/DomainHostingDesign";
export const metadata: Metadata = {
  title: "Domain & Hosting Plans",
  description: "Compare reliable hosting plans for your website, with help from our team in Dhaka.",
};
export default function Page() {
  return <DomainHostingDesign />;
}
