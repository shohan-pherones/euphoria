/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "https://www.pexels.com/",
      },
      {
        protocol: "https",
        hostname: "https://s1.gifyu.com/",
      },
    ],
  },
};

module.exports = nextConfig;
