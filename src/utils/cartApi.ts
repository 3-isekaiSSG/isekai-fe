interface CartCountType {
  cnt: number
}

export async function getCartCount(
  type: 'member' | 'non-member',
): Promise<CartCountType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/${type}/count`,
      { next: { tags: ['cartCount'] }, credentials: 'include' },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getOptions', err)
    return undefined
  }
}

// interface cartDataType {
//   {
//   "id": 0,
//   "cnt": 0,
//   "post": [
//     {
//       "id": 0,
//       "cartId": 0,
//       "code": "string",
//       "count": 0,
//       "checked": "string",
//       "optionId": 0
//     }
//   ],
//   "ssg": [
//     {
//       "id": 0,
//       "cartId": 0,
//       "code": "string",
//       "count": 0,
//       "checked": "string",
//       "optionId": 0
//     }
//   ]
// }
// }
// export async function getCartData(
//   type: 'member' | 'non-member',
// ): Promise<CartCountType | undefined> {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API}/carts/${type}`,
//       { next: { tags: ['cartData'] } },
//     )
//     console.log(response)
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     return await response.json()
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error('getOptions', err)
//     return undefined
//   }
// }
