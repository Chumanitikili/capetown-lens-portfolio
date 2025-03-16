/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@styles': './styles',
    };
    return config;
  },
  // Add basePath if your site is not served from the root
  // basePath: '',
  // Add assetPrefix if your assets are served from a different domain
  // assetPrefix: '',
  // Ensure proper handling of static files
  distDir: '.next',
  generateEtags: true,
  compress: true,
  // Add proper error handling
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
}

module.exports = nextConfig 