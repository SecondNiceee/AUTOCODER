/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

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

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
    cssChunking: false,
  },
};

export default nextConfig;
