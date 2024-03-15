import Banner from '@/components/home/Banner'
import HomeEventCarousel from '@/components/home/EventCarousel/HomeEventCarousel'
import ItemSlider from '@/components/home/ItemSlider'
import CardSale from '@/components/home/CardSale'
import SpecialItem from '@/components/home/SpecialItem'

// TODO: 인기있는 특가 상품 data Fetch
export default function Home() {
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
    <main>
      <HomeEventCarousel />
      <div className="h-[25px]" />
      <ItemSlider />
      <div className="h-[40px]" />
      {/* 유니버스 클럽 배너 */}
      <div className="mx-0 my-2.5 px-4 py-0">
        <Banner
          alt="상품권 3% 할인"
          src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202403/2024030817154429409723604972_653.jpg&w=750&h=0"
          priority
        />
      </div>
      <div className="h-[40px]" />
      <CardSale />
      <div className="h-[20px]" />
      {/* 특가 리스트 */}
      <SpecialItem data={data} />
    </main>
  )
}
