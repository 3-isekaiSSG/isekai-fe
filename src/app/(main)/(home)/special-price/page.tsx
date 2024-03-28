import { Metadata } from 'next'
import Special from '@/components/special-price'
import TabList from '@/components/ui/Tablist'
import { TabListType } from '@/types/QueryTabList'

export const metadata: Metadata = {
  title: '특가',
}

export default async function Page() {
  const tabList: TabListType[] = [
    {
      id: 0,
      title: '전체 보기',
      query: 'all',
    },
    {
      id: 1,
      title: '쓱- 특가',
      query: 'happybuy',
    },
    {
      id: 2,
      title: '오늘의 장보기',
      query: 'obanjang',
    },
  ]

  return (
    <div className="py-2.5 px-[16px]">
      <TabList tabList={tabList} pathName="special-price" query="special" />

      {/* 탭에 해당하는 컴포넌트 렌더링 */}
      <Special />
    </div>
  )
}
