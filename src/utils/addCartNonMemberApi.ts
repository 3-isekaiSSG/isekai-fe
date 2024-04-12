// import { revalidateTag } from 'next/cache'

import { CartItemsType } from '@/types/cartType'

interface BodyType {
  optionsId: number
  count: number
}

interface CartCountType {
  cnt: number
}

export async function getCartCountNonMember(): Promise<
  CartCountType | undefined
> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/non-member/count`,
      { next: { tags: ['cartCount'] }, credentials: 'include' },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCartCountNonMember', err)
    return undefined
  }
}

export async function getCartDataNonMember(): Promise<
  CartItemsType | undefined
> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/non-member`,
      {
        next: { tags: ['cartData'] },
        credentials: 'include',
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    return undefined
  }
}

export async function addCartNonMember(data: BodyType[]) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/carts/non-member`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })
    // revalidateTag('cartCount')
    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('addCartNonMember', err)
  }
}
