/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  cartState,
  checkedItemsState,
  isAllCheckedState,
  selectAllState,
} from '@/states/cartAtom'
import { CartItemsType } from '@/types/cartType'
import styles from './cart.module.css'

export default function AllSelectHeader({
  cartData,
}: {
  cartData?: CartItemsType
}) {
  // const setCart = useSetRecoilState(cartState)
  // const setCheckedItems = useSetRecoilState(checkedItemsState)
  const [cart, setCart] = useRecoilState(cartState)
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState)

  // const [isSelectAll, setSelectAll] = useRecoilState(selectAllState)
  // const [isAllChecked, setIsAllChecked] = useRecoilState(isAllCheckedState)
  // const handleAllCheckChange = () => {
  //   // 전체 선택 또는 전체 해제
  // }

  useEffect(() => {
    if (cartData) {
      setCart({ ssg: cartData.ssg, post: cartData.post })

      const filteredSSG = cartData.ssg.filter((item) => item.checked === 1)
      const filteredPost = cartData.post.filter((item) => item.checked === 1)
      setCheckedItems({ ssg: filteredSSG, post: filteredPost })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData])

  // console.log('cartState', cart)
  // console.log('checkedItems', checkedItems)

  return (
    <div className="flex justify-between items-center text-[13px] text-[color:var(--m-colors-gray800)] tracking-[-0.3px] gap-2.5 px-4 py-2.5 scroll-mt-[50px]">
      <div className="flex items-center">
        <span className={styles['input-span']}>
          <input
            className={styles.blind}
            type="checkbox"
            id="check-all"
            name="check-all"
            // checked={isAllChecked}
            // onChange={handleAllCheckChange}
            data-tracking-value="전체선택"
          />
          <label htmlFor="check-all">
            <span className={styles.blind}>모든상품전체선택</span>
          </label>
        </span>
        <label htmlFor="check-all" className="inline-block leading-[1.4]">
          전체
        </label>

        {/* TODO: 장바구니 상품 전체 선택 / 해제 */}
        <button
          type="button"
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
  )
}
