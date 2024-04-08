'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isOptionToastState } from '@/states/optionAtom'
import { OptionCategoryType } from '@/types/OptionType'
import { getOptionsToParent } from '@/utils/optionApi'
import Toast from '../Toast'

export default function GetCartBtn({
  code,
  optionAllData,
}: {
  code: number
  optionAllData: OptionCategoryType[]
}) {
  const router = useRouter()
  const [toast, setToast] = useState<boolean>(false)
  const setOptionToast = useSetRecoilState<boolean>(isOptionToastState)

  // TODO: 회원 로직 다시짜기 일단 비회원
  const handleCart = async () => {
    if (optionAllData[0].category === '옵션없음') {
      const optionsId = await getOptionsToParent('products', code)
      await fetch(`${process.env.NEXT_PUBLIC_API}/carts/non-member`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          optionsId,
          count: 1,
        }),
        credentials: 'include',
      })
    } else {
      setOptionToast(true)
      router.push(`/products/${code}`)
    }
  }

  return (
    <>
      <button
        aria-label="장바구니 담기"
        onClick={handleCart}
        type="button"
        className="flex items-center justify-center align-middle w-7 h-7"
      >
        <svg
          className="w-5 h-5 inline-block leading-[1em] align-middle"
          viewBox="0 0 24 24"
          focusable="false"
          name="CartIcon"
        >
          <rect
            x="6"
            y="8.40002"
            width="14.4"
            height="1.2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
            fill="currentColor"
          />
          <path
            d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {toast && (
        <Toast
          setToast={setToast}
          message="장바구니에 상품을 담았습니다."
          position="bottom"
        />
      )}
    </>
  )
}
