import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/designs/Footer";
import "./designs.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zentic Lab — Your Partner in Digital Growth",
    template: "%s | Zentic Lab",
  },
  description:
    "Professional e-commerce and business websites, hosting, and website care in Bangladesh.",
  applicationName: "Zentic Lab",
  icons: {
    icon: { url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* ColorZilla can inject cz-shortcut-listen before hydration. Tolerate body
          attribute differences while keeping descendant hydration checks active. */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <Script id="zenticlab-analytics" strategy="afterInteractive">
          {`(() => {
            if (!["zenticlab.com", "www.zenticlab.com"].includes(window.location.hostname)) return;

            const measurementId = "G-LQCSN7KRPL";
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () { window.dataLayer.push(arguments); };
            window.gtag("js", new Date());
            window.gtag("config", measurementId);

            const tag = document.createElement("script");
            tag.async = true;
            tag.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
            document.head.appendChild(tag);
          })();`}
        </Script>
      </body>
    </html>
  );
}
