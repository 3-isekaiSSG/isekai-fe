'use client'

import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { allItemsPriceState, checkedItemsPriceState } from '@/states/cartAtom'
import { CartDeliveryType } from '@/types/cartType'
import { updateCheckApi, updateUncheckApi } from './action'
import styles from './cart.module.css'

export default function ItemInputCheckBox({
  data,
  itemPrice,
}: {
  data: CartDeliveryType
  itemPrice: number
}) {
  const setCheckedItemsPriceState = useSetRecoilState(checkedItemsPriceState)
  const setAllItemsPriceState = useSetRecoilState(allItemsPriceState)
  const [isChecked, setIsChecked] = useState<boolean>(Boolean(data.checked))

  const handleChange = async () => {
    setIsChecked(!isChecked)

    if (isChecked) {
      await updateUncheckApi(data.cartId)
    } else {
      await updateCheckApi(data.cartId)
    }
  }

  useEffect(() => {
    setAllItemsPriceState((prev) => {
      const index = prev.findIndex((item) => item.cartId === data.cartId)

      if (index >= 0) {
        const updatedItems = [...prev]
        updatedItems[index] = {
          ...updatedItems[index],
          count: data.count,
          price: itemPrice,
        }
        return updatedItems
      }

      return [
        ...prev,
        { cartId: data.cartId, count: data.count, price: itemPrice },
      ]
    })

    if (isChecked) {
      setCheckedItemsPriceState((prev) => {
        const index = prev.findIndex((item) => item.cartId === data.cartId)

        if (index >= 0) {
          const updatedItems = [...prev]
          updatedItems[index] = {
            ...updatedItems[index],
            count: data.count,
            price: itemPrice,
          }
          return updatedItems
        }

        return [
          ...prev,
          { cartId: data.cartId, count: data.count, price: itemPrice },
        ]
      })
    } else {
      setCheckedItemsPriceState((prev) => {
        return prev.filter((item) => item.cartId !== data.cartId)
      })
    }
  }, [
    data.cartId,
    data.count,
    isChecked,
    itemPrice,
    setAllItemsPriceState,
    setCheckedItemsPriceState,
  ])

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
