import type { Metadata } from "next";
import DomainHostingDesign from "@/components/designs/DomainHostingDesign";
export const metadata: Metadata = {
  title: { absolute: "Domain & Hosting Plans in Bangladesh | Zentic Lab" },
  description:
    "A .com domain, fast hosting and free SSL, all set up by us. The domain is registered in your name, and the price stays the same every year.",
  alternates: { canonical: "https://zenticlab.com/domain-hosting-plans" },
};
export default function Page() {
  return <DomainHostingDesign />;
}
