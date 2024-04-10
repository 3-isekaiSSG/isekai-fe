'use server'

import { revalidateTag } from 'next/cache'

/** 장바구니 담기 */

export async function updateUncheckApi(cartId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/unchecked/${cartId}`,
      {
        method: 'patch',
        credentials: 'include',
      },
    )
    revalidateTag('cartData')

    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('unchecked', err)
  }
}
export async function updateCheckApi(cartId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/unchecked/${cartId}`,
      {
        method: 'patch',
        credentials: 'include',
      },
    )
    revalidateTag('cartData')

    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('checked', err)
  }
}

/** 장바구니 삭제 */
export async function deleteCart(cartId: number) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API}/carts/one/${cartId}`, {
      method: 'delete',
      credentials: 'include',
    })
    revalidateTag('cartData')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('delete', err)
  }
}
