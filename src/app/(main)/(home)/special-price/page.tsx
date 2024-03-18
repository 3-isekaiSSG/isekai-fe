import Special from '@/components/special-price'
import TabList from '@/components/special-price/Tablist'

export default async function page() {
  const tabList = [
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
      <TabList tabList={tabList} />

      {/* 탭에 해당하는 컴포넌트 렌더링 */}
      <Special />
    </div>
  )
}
