import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '믿고 사는 즐거움 SSG.COM',
  description:
    '신세계 그룹의 온라인 쇼핑 플랫폼, SSG.COM. 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village가 SSG.COM 이라는 이름으로 하나가 되었어요.',
  authors: [],
  keywords: [
    '신세계몰',
    'SSG.COM',
    '오직 이마트 쓱배송만!',
    '고객센터',
    '신세계백화점',
    '이마트몰',
    '트레이더스',
    '신세계라이브쇼핑',
    'S.I. Village',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard">{children}</body>
    </html>
  )
}
