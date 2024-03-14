/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sui.ssgcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'simg.ssgcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'sitem.ssgcdn.com',
      },
    ],
  },
}

export default nextConfig
