interface ThemeItem {
  id: number
  image: string
  title: string
  redirect_url: string
}

interface CategoryType {
  id: number
  categoryId: number
  title: string
  count?: number
}

export interface CategoryLType extends CategoryType {
  categoryM?: CategoryMType[]
}

export interface CategoryMType extends CategoryType {
  isColor?: boolean
  isMain?: boolean
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

export const CATEGORY: CategoryLType[] = [
  {
    id: 0,
    categoryId: 0,
    title: '패션의류',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '상품 전체보기',
      },
      {
        id: 2,
        categoryId: 0,
        title: '여성트렌드패션',
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 1,
    categoryId: 1,
    title: '패션잡화',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '상품 전체보기',
        isColor: true,
        isMain: false,
      },
      {
        id: 2,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 2,
    categoryId: 2,
    title: '명품',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 3,
    categoryId: 3,
    title: '뷰티',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 4,
    categoryId: 4,
    title: '스포츠/레저',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 5,
    categoryId: 5,
    title: '생활/주방',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 6,
    categoryId: 6,
    title: '가구/인테리어',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  {
    id: 7,
    categoryId: 7,
    title: '유아동',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: 'test',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: 'test',
      },
    ],
  },
  {
    id: 8,
    categoryId: 8,
    title: '디지털/렌탈',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: 'test',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: 'test',
      },
    ],
  },
  {
    id: 9,
    categoryId: 9,
    title: '여행/e쿠폰/<br />문구/도서',
    count: 2,
    categoryM: [
      {
        id: 0,
        categoryId: 0,
        title: '여성트렌드패션',
        isColor: true,
      },
      {
        id: 1,
        categoryId: 0,
        title: '여성브랜드패션',
      },
    ],
  },
  { id: 10, categoryId: 10, title: '신선식품' },
  { id: 11, categoryId: 11, title: '가공/건강식품' },
  { id: 12, categoryId: 12, title: '반려동물' },
]
