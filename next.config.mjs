/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/pikazord.github.io',
  output: "export",
  reactStrictMode: true,
  distDir: 'docs',
  images: { unoptimized: true }
};

export default nextConfig;
