'use server'

import { revalidateTag } from 'next/cache'

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
