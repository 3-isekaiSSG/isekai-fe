'use server'

import { revalidateTag } from 'next/cache'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

interface BodyType {
  optionsId: number
  count: number
}

export async function addCart(data: BodyType[]) {
  const session = await getServerSession(options)
  let res
  try {
    if (session) {
      res = await fetch(`${process.env.NEXT_PUBLIC_API}/carts/member`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session.user.accessToken,
        },
        body: JSON.stringify(data),
        credentials: 'include',
      })
    } else {
      res = await fetch(`${process.env.NEXT_PUBLIC_API}/carts/non-member`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      })
    }
    revalidateTag('cartCount')
    if (!res.ok) {
      throw Error(res.statusText)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('addCart', err)
  }
}
