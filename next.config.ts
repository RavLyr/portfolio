import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  turbopack: {
    root: process.env.DOCKER ? undefined : '/home/dhanxxi/ai-lab/projects/portfolio',
  },
};

export default nextConfig;
