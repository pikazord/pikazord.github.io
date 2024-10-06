/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
