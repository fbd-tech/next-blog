/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: process.env.ALLOWED_IMAGE_HOST.split(',')
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/1',
      },
    ]
  },
}

module.exports = nextConfig
