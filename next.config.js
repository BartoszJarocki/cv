/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  output: "export",

  // Optimize images
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Compress output
  compress: true,

  // Enable SWC minification
  swcMinify: true,

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig
