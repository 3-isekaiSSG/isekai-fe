interface ThemeItem {
  id: number
  image: string
  title: string
  redirect_url: string
}

export interface CategoryMType {
  colored: boolean
  categoryMId: number
  mediumName: string
}

export interface CategoryLMType {
  categoryMList: CategoryMType[]
  categoryLId: number
  largeName: string
}

export const THEME_ITEMS: ThemeItem[] = [
  {
    id: 1,
    image: '/images/themelist/1.png',
    title: 'SHINSEGAE GOLF',
    redirect_url: 'https://m-shinsegaemall.ssg.com/page/dept/golf_shop',
  },
  {
    id: 2,
    image: '/images/themelist/2.png',
    title: 'SSG랜더스',
    redirect_url: 'https://ssglanders.mfamily.ssg.com',
  },
  {
    id: 3,
    image: '/images/themelist/3.png',
    title: '갤러리',
    redirect_url: 'https://m.ssg.com/disp/category.ssg?dispCtgId=6000237091',
  },
  {
    id: 4,
    image: '/images/themelist/4.png',
    title: '건강식품전문관 BIOPUBLIC',
    redirect_url: 'https://biopublic.mblossom.ssg.com/',
  },
  {
    id: 5,
    image: '/images/themelist/5.png',
    title: '와인픽업',
    redirect_url: 'https://m.ssg.com/page/winepickup.ssg',
  },
  {
    id: 6,
    image: '/images/themelist/6.png',
    title: '신선직송',
    redirect_url: 'https://m.ssg.com/page/farmersmarket',
  },
  {
    id: 7,
    image: '/images/themelist/7.png',
    title: '중소상공인 상생관',
    redirect_url: 'https://m.ssg.com/page/sbmarket.ssg',
  },
  {
    id: 8,
    image: '/images/themelist/8.png',
    title: '라이프매거진',
    redirect_url: 'https://m.ssg.com/contents/lifeMagazineMain.ssg',
  },
  {
    id: 9,
    image: '/images/themelist/9.png',
    title: '유아동 LITTLE SSG',
    redirect_url: 'https://m.ssg.com/page/ssgbaby/main.ssg',
  },
  {
    id: 10,
    image: '/images/themelist/10.png',
    title: "반려동물 Molly's SSG",
    redirect_url: 'https://m.ssg.com/page/ssgpet/main.ssg',
  },
]
