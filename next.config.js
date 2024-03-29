/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "http",
        hostname: "img.freepik.com",
      },
    ],
  },
};

module.exports = nextConfig;
