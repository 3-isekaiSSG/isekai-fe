export interface BenefitType {
  id: number
  title: string
  contents: string
  description: string
}

export interface EventType {
  id: number
  image: string
  title: string
  description: string
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

export const MyssgEventList: EventType[] = [
  {
    id: 0,
    image:
      'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png',
    title: '유니버스 클럽 시작하기1',
    description: '지금 가입 안 하면 손해 가입만 해도 3만원 드려요',
  },
  {
    id: 1,
    image:
      'https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png',
    title: '유니버스 클럽 시작하기2',
    description: '10초만에 가입하고 즉시 3만원 받으세요',
  },
]
