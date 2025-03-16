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
}

module.exports = nextConfig 