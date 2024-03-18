import SpecialItem from '../home/SpecialItem'

export default function SpecialAll() {
  // TODO: 특가 리스트 API 받아오기

  const data = [
    {
      id: 0,
      bundleId: 111,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `인기 과일/채소 행사
~32% 할인`,
      minPrice: 18900,
      isLiked: false,
    },
    {
      id: 1,
      bundleId: 222,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `클렌징 오일 / 폼+토너+앰플
쓱1DAY, ~58% OFF`,
      minPrice: 18900,
      isLiked: false,
    },
    {
      id: 2,
      bundleId: 333,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `온 가족 신발로 추천
추가 쿠폰 혜택`,
      minPrice: 18900,
      isLiked: false,
    },
  ]

  return (
    <>
      <div>대분류 리스트</div>
      <div>배송 리스트</div>
      <div>
        <SpecialItem data={data} />
      </div>
    </>
  )
}
