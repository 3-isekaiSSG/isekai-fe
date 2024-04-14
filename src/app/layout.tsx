import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/colors.css'
import '@/styles/fonts.css'
import '@/styles/animations.css'
// import KakaoScript from '@/components/KakaoScript'
import RecoilRootWrapper from '@/components/RecoilRootWrapper'
import AuthProvider from '@/components/provider/AuthProvider'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
  }
}

export const metadata: Metadata = {
  title: {
    default: '믿고 사는 즐거움 SSG.COM',
    template: '%s, 믿고 사는 즐거움 SSG.COM',
  },
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
  openGraph: {
    images: [
      'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/open-graph-meta/ssg.png',
    ],
    title: '믿고 사는 즐거움 SSG.COM',
    siteName: '믿고 사는 즐거움 SSG.COM',
    description: '여기를 눌러 링크를 확인하세요.',
    url: 'http://m.isekai-ssg.shop',
    locale: 'ko-KR',
  },
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard font-regular">
        <RecoilRootWrapper>
          <AuthProvider>
            {children}
            {modal}
            <div id="modal-root" />
          </AuthProvider>
        </RecoilRootWrapper>
      </body>
      {/* <KakaoScript /> */}
    </html>
  )
}
