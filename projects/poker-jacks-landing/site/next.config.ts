import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Relative asset paths so the static export works from file:// and under
  // a GitHub Pages project subpath (/landing-preview/) without a basePath.
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
