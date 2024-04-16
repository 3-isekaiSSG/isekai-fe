import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { CategoryClipType, ClipCntType, ClipType } from '@/types/myClipType'

export async function getIsLiked(
  code: number | string,
  likeDivision: string,
): Promise<boolean> {
  const session = await getServerSession(options)

  if (session) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/favorite/check/${String(code).replaceAll('/', '-')}/${likeDivision}`,
        {
          method: 'GET',
          headers: {
            Authorization: session?.user.accessToken,
          },
        },
      )
      if (res.ok) {
        return await res.json()
      }
    } catch (err) {
      return false
    }
  }
  return false
}

// 좋아요 개수
export async function getLikeCnt(): Promise<ClipCntType> {
  const session = await getServerSession(options)

  if (!session) {
    return { product: 0, seller: 0, category: 0 }
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/members/favorite/number`,
      {
        method: 'GET',
        headers: {
          Authorization: session.user.accessToken,
        },
      },
    )

    if (!res.ok) {
      throw Error(res.statusText)
    }

    const data = await res.json()
    return {
      product: data.favoriteCountList[0].data,
      seller: data.favoriteCountList[1].data,
      category: data.favoriteCountList[2].data,
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return { product: 0, seller: 0, category: 0 }
  }
}

// 좋아요 데이터
export async function getProductLikeData(): Promise<ClipType[]> {
  const session = await getServerSession(options)

  if (!session) {
    return []
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/members/favorite/product-list?page=0&pageSize=15`,
      {
        method: 'GET',
        headers: {
          Authorization: session.user.accessToken,
        },
      },
    )

    if (!res.ok) {
      throw Error(res.statusText)
    }

    const data = await res.json()
    return data.content
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return []
  }
}

export async function getSellerLikeData(): Promise<ClipType[]> {
  const session = await getServerSession(options)

  if (!session) {
    return []
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/members/favorite/seller-list?page=0&pageSize=15`,
      {
        method: 'GET',
        headers: {
          Authorization: session.user.accessToken,
        },
      },
    )

    if (!res.ok) {
      throw Error(res.statusText)
    }

    const data = await res.json()
    return data.content
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return []
  }
}

export async function getCategoryLikeData(): Promise<CategoryClipType[]> {
  const session = await getServerSession(options)

  if (!session) {
    return []
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/members/favorite/category-list?page=0&pageSize=15`,
      {
        method: 'GET',
        headers: {
          Authorization: session.user.accessToken,
        },
      },
    )

    if (!res.ok) {
      throw Error(res.statusText)
    }

    const data = await res.json()
    return data.content
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return []
  }
}
