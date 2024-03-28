/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://m.isekai-ssg.shop/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1,
  exclude: [
    '/exclude/review', // 페이지 주소 하나만 제외시키는 경우
    '/exclude/**', // 하위 주소 전체를 제외시키는 경우
  ],
  robotsTxtOptions: {
    // 정책 설정
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          'https://sui.ssgcdn.com/',
          'https://simg.ssgcdn.com/',
          'https://sitem.ssgcdn.com/',
          'https://m.ssg.com/page/',
        ],
      },
    ],
  },
}
