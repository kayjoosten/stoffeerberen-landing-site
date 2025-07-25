/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable API routes
  // output: 'export',  // Commented out to allow API routes
  images: {
    unoptimized: true, // Keep for consistency
  },
  // Ensure API routes are handled properly
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig 