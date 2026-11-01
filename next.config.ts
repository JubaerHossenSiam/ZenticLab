import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/:page.html", destination: "/:page" },
    ];
  },
};

export default nextConfig;
