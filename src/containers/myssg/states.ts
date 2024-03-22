export interface BenefitType {
  id: number
  title: string
  url: string
  contents: string[]
}

interface EventType {
  id: number
  title: string
  image: string
  description: string
}

export interface LinkType {
  id: number
  title: string
  url?: string
  description?: string
}

export interface LinkListContents extends LinkType {
  details?: LinkType[]
}

// export const BenefitList: BenefitType[] = [
//   {
//     id: 0,
//     title: '미가입자 공지사항 1',
//     description: 'MYSSG_메인|배너|배너_클릭'
//   },
//   {
//     id: 1,
//     description:
//   }
// ]

export const BenefitList: BenefitType[] = [
  {
    id: 0,
    title: '미가입자 공지사항 1',
    url: 'https://m.ssg.com/membership/gate.ssg',
    contents: [' ', '최대7%쿠폰 5장+스타벅스 별 더블적립 받기'],
  },
  {
    id: 1,
    title: '미가입자 공지사항 2',
    url: 'https://m.ssg.com/membership/gate.ssg',
    contents: ['유니버스클럽 가입하고', '최대 8만원 혜택받기'],
  },
  {
    id: 2,
    title: '미가입자 공지사항 3',
    url: 'https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?custFitInfoId=2',
    contents: ['맞춤정보 등록하고 상품 &amp; 리뷰 추천 받기', ' '],
  },
]

export const MyssgEventList: EventType[] = [
  {
    id: 0,
    title: '유니버스 클럽 시작하기1',
    image:
      'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png',
    description: '지금 가입 안 하면 손해 가입만 해도 3만원 드려요',
  },
  {
    id: 1,
    title: '유니버스 클럽 시작하기2',
    image:
      'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png',
    description: '10초만에 가입하고 즉시 3만원 받으세요',
  },
]

export const Links: LinkListContents[] = [
  {
    id: 0,
    title: '나의 주문관리',
    details: [
      {
        id: 0,
        title: '주문/배송조회',
        url: 'https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_주문배송조회',
      },
      {
        id: 1,
        title: '구매 내역',
        url: 'https://m.ssg.com/myssg/productMng/purchaseList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_온라인매장구매내역',
      },
      {
        id: 2,
        title: '항공권 예약조회',
        url: 'https://m-triip.ssg.com/flight/myssg/rsvtList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_항공권예약조회',
      },
      {
        id: 3,
        title: '호텔 예약조회',
        url: 'https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_호텔예약조회',
      },
      {
        id: 4,
        title: '선물함',
        url: 'https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_선물함',
      },
      {
        id: 5,
        title: '자주구매 상품',
        url: 'https://m.ssg.com/myssg/productMng/frequentlyOrderItem.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_자주구매상품',
      },
      {
        id: 6,
        title: '정기배송 설정 관리',
        url: 'https://pay.ssg.com/m/myssg/perdc-shpp-mng.ssg',
        description: 'MYSSG|M_MY_SSG_카테고리_정기배송설정관리',
      },
    ],
  },
  {
    id: 1,
    title: '나의 혜택 관리',
    details: [
      {
        id: 0,
        title: '쿠폰',
        url: 'https://m.ssg.com/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_쿠폰',
      },
      {
        id: 1,
        title: 'SSG MONEY',
        url: 'https://member.ssg.com/m/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList',
        description: 'MYSSG|M_MY_SSG_카테고리_SSGMONEY',
      },
      {
        id: 2,
        title: '신세계포인트',
        url: 'https://member.ssg.com/m/myssg/moneyMng/spointMain.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_신세계포인트',
      },
      {
        id: 3,
        title: '미식 MONEY',
        url: 'https://member.ssg.com/m/myssg/moneyMng/pinmoneySavedMain.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_미식MONEY',
      },
      {
        id: 4,
        title: '맘키즈 클럽 관리',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/manageBenefit.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_맘키즈클럽관리',
      },
      {
        id: 5,
        title: 'SSG VOUCHER',
        url: 'https://member.ssg.com/m/myssg/moneyMng/ssgVoucherSavedMain.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_SSG VOUCHER',
      },
    ],
  },
  {
    id: 2,
    title: '나의 활동관리',
    details: [
      {
        id: 0,
        title: '좋아요',
        url: 'https://m.ssg.com/myssg/myClip/main.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_MY클립',
      },
      {
        id: 1,
        title: '상품 리뷰',
        url: 'https://m.ssg.com/myssg/activityMng/pdtEvalList.ssg?_mpop=new&amp;quick=pdtEvalList&amp;tabDiv=item',
        description: 'MYSSG|M_MY_SSG_카테고리_내상품평',
      },
      {
        id: 2,
        title: '새벽배송 알비백 관리',
        url: 'https://pay.ssg.com/m/myssg/orderInfoCoolerBagInfo.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_새벽배송알비백관리',
      },
      {
        id: 3,
        title: '이벤트 참여현황',
        url: 'https://m.ssg.com/myssg/activityMng/eventEntryStatusList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_이벤트참여현황',
      },
      {
        id: 4,
        title: 'e-mail 답변확인',
        url: 'https://m.ssg.com/myssg/activityMng/counselList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_EMAIL답변확인',
      },
      {
        id: 5,
        title: '상품 Q&A',
        url: 'https://m.ssg.com/myssg/activityMng/postngQna.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_상품Q&A',
      },
      {
        id: 6,
        title: '입고알림내역',
        url: 'https://m.ssg.com/myssg/activityMng/itemNotiList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_입고알림내역',
      },
      {
        id: 7,
        title: '우르르 앵콜내역',
        url: 'https://m.ssg.com/myssg/activityMng/urrEncoreList?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_우르르앵콜내역',
      },
      {
        id: 8,
        title: '행사알림내역',
        url: 'https://m.ssg.com/myssg/activityMng/eventNotiList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_행사알림내역',
      },
    ],
  },
  {
    id: 3,
    title: '나의 정보관리',
    details: [
      {
        id: 0,
        title: '회원정보 변경',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/password.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_회원정보변경',
      },
      {
        id: 1,
        title: '비밀번호 변경',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/changePwd.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_비밀번호변경',
      },
      {
        id: 2,
        title: '배송지 관리',
        url: 'https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_배송지관리',
      },
      {
        id: 3,
        title: '맞춤정보 관리',
        url: 'https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_맞춤정보관리',
      },
      {
        id: 4,
        title: '마케팅 정보 수신 동의',
        url: 'https://member.ssg.com/m/member/infoRcvAgree.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_마케팅정보수신동의',
      },
      {
        id: 5,
        title: '개인정보 제3자 제공 동의',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/infoUtlAgree.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_개인정보제3자제공동의',
      },
      {
        id: 6,
        title: '제휴 멤버십 관리',
        url: 'https://member.ssg.com/m/myssg/alln/membership.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_제휴멤버십관리',
      },
      {
        id: 7,
        title: '로그인 정보 관리',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/manageLoginInfo.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_자동로그인 관리',
      },
      {
        id: 8,
        title: 'SNS 연결 설정',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/main.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_SNS연결설정',
      },
      {
        id: 9,
        title: '회원 탈퇴',
        url: 'https://member.ssg.com/m/myssg/myinfoMng/withdrawMember.ssg?_mpop=new',
        description: 'MYSSG|M_MY_SSG_카테고리_회원탈퇴',
      },
      {
        id: 10,
        title: '개인정보 관리',
        url: 'https://m.ssg.com/myssg/personalDeleteInfo.ssg',
        description: 'MYSSG|M_MY_SSG_카테고리_개인정보관리',
      },
    ],
  },
]
