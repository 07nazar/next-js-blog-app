/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'variety.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

module.exports = nextConfig;
