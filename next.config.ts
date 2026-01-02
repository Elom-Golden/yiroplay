import type { NextConfig } from "next";

const repoName = "yiroplay";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },

  // ✅ accessible côté navigateur
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
  },
};

export default nextConfig;
