import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The local preview uses 127.0.0.1; Next dev otherwise blocks its scripts.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
