import type { NextConfig } from 'next'

const nextConfig: NextConfig= {
  output: 'export',
  basePath: process.env.GH_PAGES_DEPLOY ? '/ai-panel' : '',
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
}

export default nextConfig
