// import { revalidateTag } from 'next/cache'

interface BodyType {
  optionsId: number
  count: number
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
