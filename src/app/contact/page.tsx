import type { Metadata } from "next";
import ContactDesign from "@/components/designs/ContactDesign";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Zentic Lab about your website project through WhatsApp or email. Based in Mirpur, Dhaka.",
};
export default function Page() {
  return <ContactDesign />;
}
