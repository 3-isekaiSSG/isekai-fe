import ImageBanner from '@/components/ImageBanner'
import HomeEventCarousel from '@/containers/home/HomeEventCarousel'
import ItemSlider from '@/components/home/ItemSlider'
import CardSale from '@/components/home/CardSale'
import SpecialItem from '@/containers/home/SpecialItem'
import Divider from '@/components/Divider'

export default async function Home() {
  return (
    <main>
      <HomeEventCarousel />
      <Divider height={25} unit="px" color="" />

      <ItemSlider />
      <Divider height={40} unit="px" color="" />

      <ImageBanner
        className="mx-0 my-2.5 px-4 py-0"
        alt="상품권 3% 할인"
        src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202403/2024030817154429409723604972_653.jpg&w=750&h=0"
        priority
      />
      <Divider height={40} unit="px" color="" />

      <CardSale />
      <Divider height={20} unit="px" color="" />

      <SpecialItem />
    </main>
  )
}
