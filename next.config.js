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
        destination: '/post/params/page/1',
      },
      {
        source: '/page/:page',
        destination: '/post/params/page/:page',
      },
      {
        source: '/category/:category',
        destination: '/post/params/category/:category/page/1',
      },
      {
        source: '/category/:category/page/:page',
        destination: '/post/params/category/:category/page/:page',
      },
    ]
  },
}

module.exports = nextConfig
