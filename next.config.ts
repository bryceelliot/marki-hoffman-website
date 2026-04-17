import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'assets-listings.rew.ca' },
      { protocol: 'https', hostname: 'ddfcdn.realtor.ca' },
    ],
  },
};

export default nextConfig;
