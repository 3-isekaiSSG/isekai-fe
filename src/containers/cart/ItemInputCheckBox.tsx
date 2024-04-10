'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { checkedItemsState } from '@/states/cartAtom'
import { CartDeliveryType } from '@/types/cartType'
// import { updateCheckApi, updateUncheckApi } from './action'
import styles from './cart.module.css'

export default function ItemInputCheckBox({
  data,
  type,
}: {
  data: CartDeliveryType
  type: 'post' | 'ssg'
}) {
  // const [isChecked, setIsChecked] = useState<boolean>(Boolean(data.checked))
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState)
  const [isChecked, setIsChecked] = useState(
    checkedItems[type]?.some((i) => i.cartId === data.cartId),
  )

  // FIXME: 체크 API 안됨 -> 프론트 로직으로 체크
  const handleChange = async () => {
    if (isChecked) {
      const updatedItems = {
        ...checkedItems,
        [type]: checkedItems[type]?.filter((i) => i.cartId !== data.cartId),
      }
      setCheckedItems(updatedItems)
      // await updateUncheckApi(data.cartId)
    } else {
      const updatedItems = {
        ...checkedItems,
        [type]: [...checkedItems[type], data],
      }
      setCheckedItems(updatedItems)
      // await updateCheckApi(data.cartId)
    }
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    setIsChecked(checkedItems[type]?.some((i) => i.cartId === data.cartId))
  }, [checkedItems, data.cartId, type])

  return (
    <span className={styles['input-span']}>
      <input
        className={styles.blind}
        type="checkbox"
        id={data.cartId.toString()}
        name={data.cartId.toString()}
        checked={isChecked}
        onChange={handleChange}
        data-tracking-value="선택"
      />
      <label htmlFor={data.cartId.toString()}>
        <span className={styles.blind}>선택</span>
      </label>
    </span>
  )
}
