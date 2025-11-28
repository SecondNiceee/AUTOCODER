/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
