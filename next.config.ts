import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // allow all paths from Cloudinary
      },
    ],
  },

  env: {
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    MONGO_URI: process.env.MONGO_URI,
  },
};

export default nextConfig;
