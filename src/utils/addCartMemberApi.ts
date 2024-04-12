'use server'

import { revalidateTag } from 'next/cache'
import { Session } from 'next-auth'

interface BodyType {
  optionsId: number
  count: number
}

export async function addCartMember(data: BodyType[], session: Session) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/carts/member`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session.user.accessToken,
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })

    revalidateTag('cartCount')
    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('addCartMember', err)
  }
}
