/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactRoot: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  ignoreDuringBuilds: [
    // Ignore the specified warnings during build.
    /Extra attributes from the server/,
  ],
};

module.exports = nextConfig;
