import type { Metadata } from "next";
import BusinessDesign from "@/components/designs/BusinessDesign";
export const metadata: Metadata = {
  title: { absolute: "Business Website Development in Bangladesh | Zentic Lab" },
  description:
    "Look trusted online and get more leads. We build custom, fast and secure websites for agencies, consultants and professionals.",
  alternates: { canonical: "https://zenticlab.com/services/business" },
};
export default function Page() {
  return <BusinessDesign />;
}
