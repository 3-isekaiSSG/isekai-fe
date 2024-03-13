import Banner from '@/components/home/Banner'
import EventCarousel from '@/components/home/EventCarousel'
import ItemSlider from '@/components/home/ItemSlider'
import CardSale from '@/components/home/CardSale'

export default function Home() {
  return (
    <main>
      <EventCarousel />
      <div className="h-[25px]" />
      <ItemSlider />
      <div className="h-[40px]" />
      {/* 유니버스 클럽 배너 */}
      <Banner />
      <div className="h-[40px]" />
      <CardSale />
    </main>
  )
}
