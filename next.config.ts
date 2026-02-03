import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ["image/avif"], // ✅ AVIF ONLY — no WebP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "outsourceimages.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
      {
        protocol: "https",
        hostname: "outsource-infotech.com",
      },
      {
        protocol: "https",
        hostname: "primeophoto.com",
      },
      {
        protocol: "https",
        hostname: "outsourceinfotech.com",
      },
    ],
  },
  experimental: {
    scrollRestoration: false,
  },

};

export default nextConfig;
