/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (
    config,
  ) => {
    config.resolve.alias = {
      '~/external': path.resolve(process.cwd(), '.nxtmdoc'),
      ...config.resolve.alias,
    }
    return config
  },
}

module.exports = nextConfig;
