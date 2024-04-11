'use client'

import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  allItemsPriceState,
  checkedItemsPriceState,
  checkedItemsState,
} from '@/states/cartAtom'
import { ChildOptionsType } from '@/types/OptionType'
import { CartDeliveryType } from '@/types/cartType'
import { updateCheckApi, updateUncheckApi } from './action'
import styles from './cart.module.css'

export default function ItemInputCheckBox({
  data,
  itemPrice,
  originPrice,
  type,
  thumbnail = '',
  seller = '',
  productName = '',
  optionData,
}: {
  data: CartDeliveryType
  itemPrice: number
  originPrice: number
  type: 'ssg' | 'post'
  thumbnail?: string
  seller?: string
  productName?: string
  optionData: ChildOptionsType[]
}) {
  const checkedItems = useRecoilValue(checkedItemsState)
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
    setIsChecked(
      checkedItems[type].some(
        (checkedItem) => checkedItem.cartId === data.cartId,
      ),
    )
  }, [checkedItems, data, type])

  useEffect(() => {
    setAllItemsPriceState((prev) => {
      const index = prev[type].findIndex((item) => item.cartId === data.cartId)
      if (index >= 0) {
        const updatedItemsType = [...prev[type]]
        updatedItemsType[index] = {
          ...updatedItemsType[index],
          ...data,
          buyPrice: itemPrice,
          originPrice,
          seller,
          productName,
          optionData,
          thumbnail,
        }
        return { ...prev, [type]: updatedItemsType }
      }
      return {
        ...prev,
        [type]: [
          ...prev[type],
          {
            ...data,
            buyPrice: itemPrice,
            originPrice,
            seller,
            productName,
            optionData,
            thumbnail,
          },
        ],
      }
    })

    if (isChecked) {
      setCheckedItemsPriceState((prev) => {
        const index = prev[type].findIndex(
          (item) => item.cartId === data.cartId,
        )
        if (index >= 0) {
          const updatedItemsType = [...prev[type]]
          updatedItemsType[index] = {
            ...updatedItemsType[index],
            ...data,
            buyPrice: itemPrice,
            originPrice,
            seller,
            productName,
            optionData,
            thumbnail,
          }
          return { ...prev, [type]: updatedItemsType }
        }
        return {
          ...prev,
          [type]: [
            ...prev[type],
            {
              ...data,
              buyPrice: itemPrice,
              originPrice,
              seller,
              productName,
              optionData,
              thumbnail,
            },
          ],
        }
      })
    } else {
      setCheckedItemsPriceState((prev) => {
        const updatedItemsType = prev[type].filter(
          (item) => item.cartId !== data.cartId,
        )
        return {
          ...prev,
          [type]: updatedItemsType,
        }
      })
    }
  }, [
    data,
    isChecked,
    itemPrice,
    optionData,
    originPrice,
    productName,
    seller,
    setAllItemsPriceState,
    setCheckedItemsPriceState,
    thumbnail,
    type,
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
