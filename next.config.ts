import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primary.jwwb.nl",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "scontent-mia3-2.xx.fbcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.friidrett.no",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "paw.princeton.edu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.teamnor.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
