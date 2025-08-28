import type { NextConfig } from 'next'

// basePath + images: 
// - https://github.com/vercel/next.js/discussions/34173#discussioncomment-5833611
// - https://github.com/vercel/next.js/issues/81259

const nextConfig: NextConfig= {
  output: 'export',
  basePath: process.env.GH_PAGES_DEPLOY ? '/ai-panel' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
}

export default nextConfig
