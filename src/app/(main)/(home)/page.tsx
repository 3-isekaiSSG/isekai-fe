import EventCarousel from '@/components/home/EventCarousel'
import ItemSlider from '@/components/home/ItemSlider'

export default function Home() {
  return (
    <main>
      <EventCarousel />
      <div className="h-[25px]" />
      <ItemSlider />
      <div className="h-[25px]" />
    </main>
  )
}
