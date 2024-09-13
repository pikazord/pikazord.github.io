/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: 'docs',
  images: { unoptimized: true }
};

export default nextConfig;
