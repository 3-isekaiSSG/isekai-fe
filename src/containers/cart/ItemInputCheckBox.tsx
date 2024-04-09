/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useRecoilState } from 'recoil'
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState)
  // const isChecked = checkedItems[type]?.some(
  //   (checkedItem) => checkedItem.id === data.id,
  // )

  const handleChange = async (e) => {
    const isChecked = e.target.checked
    console.log(data)
    console.log(type)

    console.log(isChecked)
    console.log(Boolean(data.checked) || false)
    if (isChecked) {
      // const updatedItems = {
      //   ...checkedItems,
      //   [type]: checkedItems[type]?.filter((i) => i.cartId !== data.cartId),
      // }
      // setCheckedItems(updatedItems)
      updateUncheckApi(data.cartId)
    } else {
      // const updatedItems = {
      //   ...checkedItems,
      //   [type]: [...checkedItems[type], data],
      // }
      // setCheckedItems(updatedItems)
      // updateCheckApi(data.cartId)
    }
  }

  return (
    <span className={styles['input-span']}>
      <input
        className={styles.blind}
        type="checkbox"
        id={data.id.toString()}
        name={data.id.toString()}
        checked={Boolean(data.checked)}
        onChange={handleChange}
        data-tracking-value="선택"
      />
      <label htmlFor={data.id.toString()}>
        <span className={styles.blind}>선택</span>
      </label>
    </span>
  )
}
