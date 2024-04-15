'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { isOptionToastState, postOptionsIdCountAtom } from '@/states/optionAtom'
import { OptionCategoryType } from '@/types/OptionType'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import { addCartMember } from '@/utils/addCartMemberApi'
import { addCartNonMember } from '@/utils/addCartNonMemberApi'
import LikeBtn from '../Buttons/LikeBtn'
import NoOption from '../ProductsOption/NoOption'
import OptionCheck from '../ProductsOption/OptionCheck'
import { OptionModal } from '../ProductsOption/OptionModal'
import Toast from '../Toast'

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
  const { data: session, status } = useSession()

  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [toast, setToast] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const [isOptionToast, setIsOptionToast] = useRecoilState(isOptionToastState)

  const postOptionsIdCount = useRecoilValue(postOptionsIdCountAtom)
  const resetData = useResetRecoilState(postOptionsIdCountAtom)

  const handleAddCart = async () => {
    setIsOptionToast(false)
    const dataToSend = postOptionsIdCount.map(({ optionsId, count }) => ({
      optionsId,
      count,
    }))

    if (dataToSend.length === 0) {
      setMessage('상품 옵션을 선택하세요.')
    } else {
      if (status === 'authenticated') {
        await addCartMember(dataToSend, session)
      } else {
        await addCartNonMember(dataToSend)
      }
      resetData()
      setMessage('장바구니에 상품을 담았습니다.')
      setIsToggle(false)
    }
    setToast(true)
  }

  const handleBuyNow = async () => {
    console.log('바로구매')
  }

  if (isToggle)
    return (
      <div className="z-[1200] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
        <div className="flex justify-around h-full -mt-px">
          <button
            type="button"
            onClick={handleAddCart}
            className="w-6/12 bg-[color:var(--m-colors-cart)] text-[17px] text-[color:var(--m-colors-white)] tracking-[-0.3px]"
          >
            장바구니
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
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

        {toast && (
          <Toast setToast={setToast} message={message} position="bottom" />
        )}
      </div>
    )

  return (
    <div className="z-[999] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        {/* TODO: 데이터 수정 */}
        <div className="w-[54px] flex items-center justify-center">
          <LikeBtn itemId={code} isLiked={false} likeDivision="products" />
        </div>
        <button
          type="button"
          onClick={() => setIsToggle(true)}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          구매하기
        </button>
      </div>

      {toast && (
        <Toast setToast={setToast} message={message} position="bottom" />
      )}

      {isOptionToast && (
        <Toast
          setToast={setIsOptionToast}
          message="<span>이 상품은 옵션이 있는 상품입니다. <br/> 상품상세에서 옵션을 선택해주세요.</span>"
          position="bottom"
        />
      )}
    </div>
  )
}
