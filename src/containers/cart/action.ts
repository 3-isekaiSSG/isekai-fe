'use server'

import { revalidateTag } from 'next/cache'

export async function oneAddCart(cartId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/one-add/${cartId}`,
      {
        method: 'PATCH',
        credentials: 'include',
      },
    )
    revalidateTag('cartData')

    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('oneAddCart', err)
  }
}
export async function oneDropCart(cartId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/one-drop/${cartId}`,
      {
        method: 'PATCH',
        credentials: 'include',
      },
    )
    revalidateTag('cartData')

    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('oneDropCart', err)
  }
}

export async function updateUncheckApi(cartId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/unchecked/${cartId}`,
      {
        method: 'PATCH',
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
      `${process.env.NEXT_PUBLIC_API}/carts/checked/${cartId}`,
      {
        method: 'PATCH',
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

export async function deleteMoreCart(cartIds: number[]) {
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts?cartIds=${cartIds.join(',')}`,
      {
        method: 'delete',
        credentials: 'include',
      },
    )
    revalidateTag('cartData')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('delete', err)
  }
}
