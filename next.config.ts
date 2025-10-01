import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        "*.prisma": ["prisma generate"],
      },
    },
  },
};

export default nextConfig;
