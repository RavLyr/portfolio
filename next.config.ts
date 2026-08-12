import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  turbopack: {
    root: '/home/dhanxxi/ai-lab/projects/portfolio',
  },
};

export default nextConfig;
