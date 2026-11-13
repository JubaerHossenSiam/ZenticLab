import type { Metadata } from "next";
import ServicesDesign from "@/components/designs/ServicesDesign";
export const metadata: Metadata = {
  title: { absolute: "Website Development Services in Bangladesh | Zentic Lab" },
  description:
    "See our e-commerce and business website services. Each package includes a logo, custom design, content writing and a fast, secure website. See starting prices.",
  alternates: { canonical: "https://zenticlab.com/services" },
};
export default function Page() {
  return <ServicesDesign />;
}
