import { Metadata } from 'next'
import TabList from '@/components/TabList'
import Special from '@/containers/special-price'
import { TabListType } from '@/types/QueryTabList'

export const metadata: Metadata = {
  title: '특가',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
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
      <TabList
        tabList={tabList}
        pathName="special-price"
        searchParams={searchParams}
        query="special"
      />

      <Special searchParams={searchParams} />
    </div>
  )
}
