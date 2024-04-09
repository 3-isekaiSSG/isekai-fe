'use client'

import { useRecoilState } from 'recoil'
import { checkedItemsState } from '@/states/cartAtom'
import { CartDeliveryType } from '@/types/cartType'
import styles from './cart.module.css'

export default function ItemInputCheckBox({
  data,
  type,
}: {
  data: CartDeliveryType
  type: 'post' | 'ssg'
}) {
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState)
  const isChecked = checkedItems[type]?.some(
    (checkedItem) => checkedItem.id === data.id,
  )

  const handleChange = async () => {
    if (isChecked) {
      const updatedItems = {
        ...checkedItems,
        [type]: checkedItems[type]?.filter((i) => i.cartId !== data.cartId),
      }
      setCheckedItems(updatedItems)

      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_API}/carts/unchecked/${data.cartId}`,
          {
            method: 'patch',
            credentials: 'include',
            cache: 'no-store',
          },
        )
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('unchecked', err)
      }
    } else {
      const updatedItems = {
        ...checkedItems,
        [type]: [...checkedItems[type], data],
      }
      setCheckedItems(updatedItems)

      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_API}/carts/checked/${data.cartId}`,
          {
            method: 'patch',
            credentials: 'include',
            cache: 'no-store',
          },
        )
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('checked', err)
      }
    }
  }

  return (
    <span className={styles['input-span']}>
      <input
        className={styles.blind}
        type="checkbox"
        id={data.id.toString()}
        name={data.id.toString()}
        checked={isChecked}
        onChange={handleChange}
        data-tracking-value="선택"
      />
      <label htmlFor={data.id.toString()}>
        <span className={styles.blind}>선택</span>
      </label>
    </span>
  )
}
