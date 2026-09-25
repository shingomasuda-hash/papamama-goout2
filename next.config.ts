import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [390, 430, 640, 750, 828, 1080],
    imageSizes: [96, 128, 256, 384],
  },
  poweredByHeader: false,
};

export default nextConfig;
