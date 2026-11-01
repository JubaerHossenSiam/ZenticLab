import type { Metadata } from "next";
import HostingCareDesign from "@/components/designs/HostingCareDesign";
export const metadata: Metadata = {
  title: "Hosting & Care",
  description: "Keep your website fast, secure, and up to date with Zentic Lab hosting and website care.",
};
export default function Page() {
  return <HostingCareDesign />;
}
