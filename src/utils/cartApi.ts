import { CartItemsType } from '@/types/cartType'

export async function getCartDataMember(headers: {
  [key: string]: string
}): Promise<CartItemsType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/member`,
      {
        next: { tags: ['cartData'] },
        credentials: 'include',
        cache: 'no-store',
        headers,
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
