import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    MONGO_URI: process.env.MONGO_URI
  },
};

export default nextConfig;
