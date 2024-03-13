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
    url: '/Ranking',
  },
  {
    id: 4,
    title: '명품',
    url: '/명품',
  },
  {
    id: 5,
    title: '뷰티',
    url: '/뷰티',
  },
  {
    id: 6,
    title: '패션',
    url: '/패션',
  },
  {
    id: 7,
    title: 'SSG.TV',
    url: '/SSG.TV',
  },
  {
    id: 8,
    title: '브랜드',
    url: '/브랜드',
  },
]
