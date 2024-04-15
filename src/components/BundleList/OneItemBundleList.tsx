/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
// import Link from 'next/link'
import { BundleCardType } from '@/types/BundleType'
import GetCartBtn from '../Buttons/GetCartBtn'
import LikeBtn from '../Buttons/LikeBtn'

const getBundleCardItem = async (
  code: number,
): Promise<BundleCardType | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/bundles/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getBundleCardItem', err)
    return undefined
  }
}

export default async function ItemList({ code }: { code: number }) {
  // const item = await getBundleCardItem(code)
  const item = undefined

  return (
    <div className="pt-2.5 pb-5">
      <div
        className="relative"
        //  href={`/bundles/${item?.code}`}
      >
        {/* <Image
          src={item?.imgUrl || ''}
          alt={item?.outerName || ''}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        {item?.buyCount && (
          <div className="absolute flex items-center flex-row min-w-0 max-h-6 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] mr-1 px-2 py-2 left-0 top-0">
            <span className="w-full text-xs font-medium">
              {item?.buyCount.toLocaleString('ko-KR')}개 구매중
            </span>
          </div>
        )} */}
      </div>

      <div className="relative w-full">
        <div
        //  href={`/bundles/${item?.code}`}
        >
          <div className="pr-[84px] pt-3 text-left">
            <p className="text-base leading-[1.2] overflow-hidden text-ellipsis whitespace-pre-line text-[color:var(--m-colors-gray900)] font-medium mb-1">
              {/* <span className="pr-1 font-bold">{item.vender}</span> */}
              {/* {item?.outerName} */}
            </p>

            <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1">
              <span className="text-[0px]">판매가격</span>
              {/* {item?.minPrice.toLocaleString('ko-KR')}원 */}
              <span aria-label="부터">~</span>
            </p>
          </div>
        </div>

        <div className="absolute z-10 right-0 top-1.5">
          <div className="flex">
            {/* <LikeBtn
              itemId={item?.code || 0}
              isLiked={false}
              likeDivision="BUNDLE_PRODUCT"
            />
            <GetCartBtn code={item?.code || 0} bundle /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
