import Link from 'next/link'
import { PiCaretRightThin } from 'react-icons/pi'
import ItemList from '@/components/BundleList/OneItemBundleList'
import ImageBanner from '@/components/ImageBanner'
import MiniTitle from '@/components/MiniTitle'
import { getBundleList } from '@/utils/bundleApi'

export default async function SpecialItem() {
  const homeSpecialData = await getBundleList()

  return (
    <section className="mx-4 my-0">
      <MiniTitle title="가장 인기 있는 특가 상품이에요!" description="" />

      <Link href="/special-price?special=happybuy">
        <ImageBanner
          className=""
          alt="쓱특가 강력추천"
          src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
          priority={false}
        />
      </Link>

      <div>
        {homeSpecialData.map((item) => (
          <ItemList key={item.id} code={item.code} />
        ))}
      </div>

      <div className="mb-10">
        <Link
          className="flex w-full h-10 justify-center items-center shadow-[rgb(207,207,207)_0px_0px_0px_1px_inset] text-[color:var(--m-colors-gray900)] text-sm font-medium"
          href={{
            pathname: '/special-price',
            query: { special: 'happybuy' },
          }}
        >
          쓱-특가 더보기 <PiCaretRightThin color="gray" />
        </Link>
      </div>
    </section>
  )
}
