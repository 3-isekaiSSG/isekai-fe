'use client'

import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { checkedItemsState } from '@/states/cartAtom'
import { CartDeliveryType } from '@/types/cartType'
import { updateCheckApi, updateUncheckApi } from './action'
import styles from './cart.module.css'

export default function ItemInputCheckBox({
  data,
  type,
}: {
  data: CartDeliveryType
  type: 'post' | 'ssg'
}) {
  const checkedItems = useRecoilValue(checkedItemsState)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleChange = async () => {
    setIsChecked(!isChecked)

    if (data.checked) {
      await updateUncheckApi(data.cartId)
    } else {
      await updateCheckApi(data.cartId)
    }
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
