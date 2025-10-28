/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,     // extra runtime checks in dev
  swcMinify: true,           // fast compiler (default on Vercel)
  // If you’ll load images from external sites, list them here:
  images: {
    remotePatterns: [
      // { protocol: 'https', hostname: 'static-images.domain.com' },
    ],
  },
  // Ensures Vercel can bundle the server output cleanly
  output: 'standalone',
};

module.exports = nextConfig;
