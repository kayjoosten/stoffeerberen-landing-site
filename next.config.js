/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Dit zorgt voor static export
  images: {
    unoptimized: true, // Nodig voor static export
  },
}

module.exports = nextConfig 