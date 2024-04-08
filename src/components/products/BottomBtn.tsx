'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { postOptionIdCountAtom } from '@/states/optionAtom'
import { OptionCategoryType } from '@/types/OptionType'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import LikeBtn from '../Buttons/LikeBtn'
import NoOption from '../ProductsOption/NoOption'
import OptionCheck from '../ProductsOption/OptionCheck'
import { OptionModal } from '../ProductsOption/OptionModal'

export default function BottomBtn({
  code,
  optionAllData,
  productDiscount,
  productData,
}: {
  code: number
  optionAllData: OptionCategoryType[]
  productDiscount?: DiscountType
  productData?: CardDetailType
}) {
  const { data: session } = useSession()
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const optionCount = useRecoilValue(postOptionIdCountAtom)

  /** 비회원 담기 */
  const nonMemberAddCart = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/carts/non-member`, {
      method: 'post',
      body: JSON.stringify(optionCount),
    })
  }
  /** 회원 담기 */
  const memberAddCart = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/carts/non-member`, {
      method: 'post',
      body: JSON.stringify(optionCount),
    })
  }
  const handleCart = () => {
    if (session) {
      memberAddCart()
    } else {
      nonMemberAddCart()
    }
  }

  if (isToggle)
    return (
      <div className="z-[1200] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
        <div className="flex justify-around h-full -mt-px">
          <button
            type="button"
            onClick={handleCart}
            className="w-6/12 bg-[color:var(--m-colors-cart)] text-[17px] text-[color:var(--m-colors-white)] tracking-[-0.3px]"
          >
            장바구니
          </button>
          <button
            type="button"
            className="w-6/12 bg-[color:var(--m-colors-primary)] text-[17px] text-[color:var(--m-colors-white)] tracking-[-0.3px]"
          >
            바로구매
          </button>
        </div>
        <OptionModal setIsOpen={setIsToggle}>
          {optionAllData[0].category === '옵션없음' ? (
            <NoOption
              productDiscount={productDiscount}
              productData={productData}
            />
          ) : (
            <OptionCheck
              optionAllData={optionAllData}
              productDiscount={productDiscount}
              productData={productData}
            />
          )}
        </OptionModal>
      </div>
    )

  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        {/* TODO: 데이터 수정 */}
        <div className="w-[54px] flex items-center justify-center">
          <LikeBtn itemId={code} isLiked={false} likeDivision={0} />
        </div>
        <button
          type="button"
          onClick={() => setIsToggle(true)}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          구매하기
        </button>
      </div>
    </div>
  )
}