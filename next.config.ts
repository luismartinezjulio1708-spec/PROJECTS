import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: 'https://bpds-nextjs-luis-2026.s3.us-east-1.amazonaws.com',
};

export default nextConfig;
