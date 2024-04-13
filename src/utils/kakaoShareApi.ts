interface KakaoData {
  title: string | undefined
  imgUrl: string | null
  redirectUrl: string
}

export const shareToKakao = ({ title, imgUrl, redirectUrl }: KakaoData) => {
  const { Kakao } = window

  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.KAKAO_SHARE_KEY)
  }

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description: title,
      imageUrl: imgUrl || 'public/svgs/ssgLogo.svg ',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: redirectUrl,
        webUrl: redirectUrl,
      },
    },
    // social: {
    //   likeCount: 286,
    //   commentCount: 45,
    //   sharedCount: 845,
    // },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          mobileWebUrl: redirectUrl,
          webUrl: redirectUrl,
        },
      },
    ],
  })
}
