import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "outsourceimages.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }, // FIXED
      { protocol: "https", hostname: "outsource-infotech.com" },
      { protocol: "https", hostname: "primeophoto.com" },
      { protocol: "https", hostname: "outsourceinfotech.com" },
    ],
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
