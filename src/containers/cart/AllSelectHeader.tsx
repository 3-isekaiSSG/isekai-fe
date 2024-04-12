'use client'

import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import Toast from '@/components/Toast'
import {
  cartState,
  checkedItemsState,
  isAllCheckedState,
} from '@/states/cartAtom'
import { CartItemsType } from '@/types/cartType'
import { deleteMoreCart, updateCheckApi, updateUncheckApi } from './action'
import styles from './cart.module.css'

export default function AllSelectHeader({
  cartData,
}: {
  cartData?: CartItemsType
}) {
  const [toast, setToast] = useState<boolean>(false)

  const [cart, setCart] = useRecoilState(cartState)
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState)
  const resetCheckedItems = useResetRecoilState(checkedItemsState)
  const isAllChecked = useRecoilValue(isAllCheckedState)
  console.log(2, cart, checkedItems)

  const handleAllCheck = async () => {
    if (isAllChecked.ssg && isAllChecked.post) {
      resetCheckedItems()

      Promise.all([
        ...cart.ssg.map((item) => updateUncheckApi(item.cartId)),
        ...cart.post.map((item) => updateUncheckApi(item.cartId)),
      ])
    } else {
      setCheckedItems((prev) => ({
        ...prev,
        ssg: [...cart.ssg],
        post: [...cart.post],
      }))

      Promise.all([
        ...cart.ssg.map((item) => updateCheckApi(item.cartId)),
        ...cart.post.map((item) => updateCheckApi(item.cartId)),
      ])
    }
  }

  const handleDelete = async () => {
    const cartIds = [
      ...checkedItems.ssg.map((item) => item.cartId),
      ...checkedItems.post.map((item) => item.cartId),
    ]
    setToast(true)
    deleteMoreCart(cartIds)
  }

  useEffect(() => {
    if (cartData) {
      setCart({ ssg: cartData.ssg, post: cartData.post })

      const filteredSSG = cartData.ssg.filter((item) => item.checked === 1)
      const filteredPost = cartData.post.filter((item) => item.checked === 1)
      setCheckedItems({ ssg: filteredSSG, post: filteredPost })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData])

  return (
    <>
      {toast && (
        <Toast
          setToast={setToast}
          message="장바구니에서 상품을 삭제했습니다."
          position="bottom"
        />
      )}
      <div className="flex justify-between items-center text-[13px] text-[color:var(--m-colors-gray800)] tracking-[-0.3px] gap-2.5 px-4 py-2.5 scroll-mt-[50px]">
        <div className="flex items-center">
          <span className={styles['input-span']}>
            <input
              className={styles.blind}
              type="checkbox"
              id="check-all"
              name="check-all"
              checked={isAllChecked.ssg && isAllChecked.post}
              onChange={handleAllCheck}
              data-tracking-value="전체선택"
            />
            <label htmlFor="check-all">
              <span className={styles.blind}>모든상품전체선택</span>
            </label>
          </span>
          <label htmlFor="check-all" className="inline-block leading-[1.4]">
            전체
          </label>

          <button
            type="button"
            onClick={handleDelete}
            className="inline-block leading-[1.4] relative ml-2 pl-2 before:content-[''] before:absolute before:-translate-y-2/4 before:w-px before:h-4 before:bg-neutral-200 before:left-0 before:top-2/4"
          >
            <span>선택 삭제</span>
          </button>
          <span className="inline-block leading-[1.4] relative ml-2 pl-2 before:content-[''] before:absolute before:-translate-y-2/4 before:w-px before:h-4 before:bg-neutral-200 before:left-0 before:top-2/4">
            선택 상품만 보기
            <span
              className={`inline-block leading-[1.4] w-[26px] h-4 ml-1 ${styles.switch}`}
            >
              <input type="checkbox" />
            </span>
          </span>
        </div>
      </div>
    </>
  )
}
