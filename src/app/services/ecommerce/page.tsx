import type { Metadata } from "next";
import EcommerceDesign from "@/components/designs/EcommerceDesign";
export const metadata: Metadata = {
  title: { absolute: "E-Commerce Website Development in Bangladesh | Zentic Lab" },
  description:
    "Sell online to customers all over Bangladesh. We build custom, fast and secure e-commerce websites. You manage products and orders yourself.",
  alternates: { canonical: "https://zenticlab.com/services/ecommerce" },
};
export default function Page() {
  return <EcommerceDesign />;
}
