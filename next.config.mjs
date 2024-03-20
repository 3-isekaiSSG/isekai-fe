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
  async redirects() {
    return [
      {
        source: `/category/%ED%8C%A8%EC%85%98%EC%9D%98%EB%A5%98`,
        destination: '/fashion',
        permanent: true,
      },
      {
        source: '/category/%EB%B7%B0%ED%8B%B0',
        destination: '/beauty',
        permanent: true,
      },
      {
        source: '/category/%EB%AA%85%ED%92%88',
        destination: '/luxury',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API}/:path*`,
      },
    ]
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
