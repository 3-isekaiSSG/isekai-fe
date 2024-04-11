import TabList from '@/components/TabList'
import Ranking from '@/containers/ranking'
import { TabListType } from '@/types/QueryTabList'

export default function RankingPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const tabList: TabListType[] = [
    {
      id: 0,
      title: '전체 베스트',
      query: 'all',
    },
    {
      id: 1,
      title: '실시간 베스트',
      query: 'realtime',
    },
    {
      id: 2,
      title: '장보기 상품',
      query: 'grocery',
    },
    {
      id: 3,
      title: '백화점 상품',
      query: 'depart',
    },
  ]
  return (
    <div className="py-2.5 px-[16px]">
      <TabList
        tabList={tabList}
        pathName="ranking"
        searchParams={searchParams}
        query="ranking"
      />

      <Ranking />
    </div>
  )
}
