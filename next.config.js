/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    // loader: "akamai",
    domains: ["fs-strapi-assets.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
