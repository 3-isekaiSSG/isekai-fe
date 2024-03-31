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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}

export default nextConfig
