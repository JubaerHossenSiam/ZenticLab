import type { Metadata } from "next";
import HomeDesign from "@/components/designs/HomeDesign";
export const metadata: Metadata = {
  title: "Zentic Lab | Websites for Businesses in Bangladesh",
  description: "Professional e-commerce and business websites, hosting, and website care in Bangladesh.",
  alternates: { canonical: "https://zenticlab.com/" },
};
export default function Page() {
  return <HomeDesign />;
}
