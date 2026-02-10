import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.68:3000",
  ],
};

export default nextConfig;

