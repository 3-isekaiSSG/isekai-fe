export interface TabNavType {
  id: number
  title: string
  svgName: string
  url: string
}

export const tabNav: TabNavType[] = [
  {
    id: 1,
    title: '카테고리',
    svgName: 'category',
    url: '/category',
  },
  {
    id: 2,
    title: '선물하기',
    svgName: 'present',
    url: '/',
  },
  {
    id: 3,
    title: '홈',
    svgName: 'home',
    url: '/',
  },
  {
    id: 4,
    title: 'MY',
    svgName: 'my',
    url: '/myssg',
  },
  {
    id: 5,
    title: '최근본',
    svgName: 'prev',
    url: '/',
  },
]
