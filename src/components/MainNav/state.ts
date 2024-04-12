export interface NavType {
  id: number
  title: string
  url: string
}

export const NavItems: NavType[] = [
  {
    id: 1,
    title: '홈',
    url: '/',
  },
  {
    id: 2,
    title: '특가',
    url: '/special-price',
  },
  {
    id: 3,
    title: '베스트',
    url: '/ranking',
  },
  {
    id: 4,
    title: '명품',
    url: '/category/%EB%AA%85%ED%92%88',
  },
  {
    id: 5,
    title: '뷰티',
    url: '/category/%EB%B7%B0%ED%8B%B0',
  },
  {
    id: 6,
    title: '패션',
    url: '/category/%ED%8C%A8%EC%85%98%EC%9D%98%EB%A5%98',
  },
  {
    id: 7,
    title: 'SSG.TV',
    url: '',
  },
  {
    id: 8,
    title: '브랜드',
    url: '',
  },
]
