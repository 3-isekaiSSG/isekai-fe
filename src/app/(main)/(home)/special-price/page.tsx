import Special from '@/components/special-price'
import TabList from '@/components/special-price/Tablist'

// TODO: 특가 상품 전체보기 API 요청

export default async function page() {
  const tabList = [
    {
      id: 0,
      title: '전체 보기',
      query: null,
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

  // 전체보기 > 대분류 가로 스크롤 + 배송 가로 스크롤 + 특가 상품 리스트
  // 쓱-특가 > 쓱특가 배너 + 약간다른 대분류 + 상품 리스트
  // 오늘의 장보기 > 오반장|전단행사|1+1 + 배송 3개 + 상품 리스트 2줄

  return (
    <div className="py-2.5 px-[16px]">
      <TabList tabList={tabList} />

      {/* 탭에 해당하는 컴포넌트 렌더링 */}
      <Special />
    </div>
  )
}
