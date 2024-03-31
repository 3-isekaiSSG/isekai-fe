import Divider from '@/components/Divider'
import ImageBanner from '@/components/ImageBanner'
import CardSale from '@/containers/home/CardSale'
import HomeEventCarousel from '@/containers/home/HomeEventCarousel'
import ItemSlider from '@/containers/home/ItemSlider'
import SpecialItem from '@/containers/home/SpecialItem'

export default async function Home() {
  return (
    <main>
      <HomeEventCarousel />
      <Divider height={6} color="" />

      <ItemSlider />
      <Divider height={10} color="" />

      <ImageBanner
        className="mx-0 my-2.5 px-4 py-0"
        alt="상품권 3% 할인"
        src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202403/2024030817154429409723604972_653.jpg&w=750&h=0"
        priority
      />
      <Divider height={10} color="" />

      <CardSale />
      <Divider height={5} color="" />

      <SpecialItem />
    </main>
  )
}
