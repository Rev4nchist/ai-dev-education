/** @type {import('next').NextConfig} */
const nextConfig = {
  // This option turns off the detection of external links when using Image component
  images: {
    unoptimized: true,
  },
  // Enable React strict mode for better development practices
  reactStrictMode: true,
};

module.exports = nextConfig; 