/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns:[{
      hostname: "rickandmortyapi.com"
    }]
  }
}

module.exports = nextConfig
