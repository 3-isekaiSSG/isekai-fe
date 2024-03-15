import Link from 'next/link'
import { SpacialItemType } from '@/types/productType'
import Image from 'next/image'
import MiniTitle from '../MiniTitle'
import Banner from '../Banner'

function ItemList({ data }: { data: SpacialItemType[] }) {
  return data.map((item) => {
    const priceToString = item.minPrice.toLocaleString('ko-KR')

    return (
      <li key={item.id} className="pt-2.5 pb-5">
        <Link href={`/products/${item.bundleId}`}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="pr-[84px] pt-3 text-left">
            <p className="text-base leading-[1.2] overflow-hidden text-ellipsis whitespace-pre-line text-[color:var(--m-colors-gray900)] font-medium mb-1">
              <span className="pr-1 font-bold">{item.vender}</span>
              {item.title}
            </p>
            <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1">
              <span className="text-[0px]">판매가격</span>
              {priceToString}원<span aria-label="부터">~</span>
            </p>
          </div>
        </Link>
      </li>
    )
  })
}

export default function SpecialItem({ data }: { data: SpacialItemType[] }) {
  return (
    <div className="mx-4 my-0">
      <div className="pt-4">
        <MiniTitle title="가장 인기 있는 특가 상품이에요!" description="" />
      </div>
      <div />
      <div className="mt-2.5">
        <Link href="/special-price">
          <Banner
            alt="쓱특가 강력추천"
            src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
            priority={false}
          />
        </Link>
      </div>

      {/* 특가 list */}
      <ul>
        <ItemList data={data} />
      </ul>

      {/* TODO: 특가의 쓱-특가 탭이 열린 페이지로 이동 */}
      <div className="mb-10">
        <Link
          className="flex w-full h-10 justify-center items-center shadow-[rgb(207,207,207)_0px_0px_0px_1px_inset] text-[color:var(--m-colors-gray900)] text-sm font-medium"
          href="/special-price"
        >
          쓱-특가 더보기 {'>'}
        </Link>
      </div>
    </div>
  )
}
