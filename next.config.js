/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "tradesmith-strapi-content.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
