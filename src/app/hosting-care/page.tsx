import type { Metadata } from "next";
import HostingCareDesign from "@/components/designs/HostingCareDesign";
export const metadata: Metadata = {
  title: { absolute: "Website Hosting & Care Plans in Bangladesh | Zentic Lab" },
  description:
    "Keep your website fast, safe and up to date. Choose hosting, content updates or security care. Take only what you need, one plan or all.",
  alternates: { canonical: "https://zenticlab.com/hosting-care" },
};
export default function Page() {
  return <HostingCareDesign />;
}
