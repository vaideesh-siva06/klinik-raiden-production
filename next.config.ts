import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], 
  },

  env: {
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    MONGO_URI: process.env.MONGO_URI
  },
};

export default nextConfig;
