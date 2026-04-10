import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "royallakesgolfcc.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
