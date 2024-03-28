import Link from 'next/link'
import ImageBanner from '@/components/ImageBanner'
import MiniTitle from '@/components/MiniTitle'
import ItemList from '@/components/ui/OneItemBundleList'
import { IdListType } from '@/types/productType'

/** TODO: 홈 특가 데이터 */
// const getBundleData = async () => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

export default async function SpecialItem() {
  // const homeSpecialData = await getBundleData()
  const homeSpecialData: IdListType[] = [
    {
      id: 0,
      bundleId: 0,
    },
    {
      id: 1,
      bundleId: 1,
    },
    {
      id: 2,
      bundleId: 2,
    },
  ]

  return (
    <section className="mx-4 my-0">
      <MiniTitle title="가장 인기 있는 특가 상품이에요!" description="" />

      <Link href="/special-price">
        <ImageBanner
          className=""
          alt="쓱특가 강력추천"
          src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
          priority={false}
        />
      </Link>

      {/* 특가 list */}
      <div>
        {homeSpecialData.map((itemId) => (
          <ItemList key={itemId.id} itemId={itemId.bundleId} />
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
          쓱-특가 더보기 {'>'}
        </Link>
      </div>
    </section>
  )
}
