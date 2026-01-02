import type { NextConfig } from "next";

const repoName = "yiroplay"; // ⚠️ nom EXACT du repo GitHub

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
