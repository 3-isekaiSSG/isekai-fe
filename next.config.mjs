/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sui.ssgcdn.com',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // CSS 로더 설정
          'css-loader',
          // PostCSS 로더 설정
          'postcss-loader',
        ],
      },
    ],
  },
}

export default nextConfig
