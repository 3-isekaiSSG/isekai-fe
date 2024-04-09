import { Metadata } from 'next'
import { getSession } from 'next-auth/react'
import Divider from '@/components/Divider'
import AllSelectHeader from '@/containers/cart/AllSelectHeader'
import CartCardWrapper from '@/containers/cart/CartCardWrapper'
import NoCart from '@/containers/cart/NoCart'
import ToolBar from '@/containers/cart/ToolBar'
import UserDeliveryAddress from '@/containers/cart/UserDeliveryAddress'
import { CartItemsType } from '@/types/cartType'

export const metadata: Metadata = {
  title: '장바구니',
}

async function getCartData(
  type: 'member' | 'non-member',
  // headers?: { headers: { Authorizations: string } } | undefined,
): Promise<CartItemsType | undefined> {
  // const headers = headers
  try {
    console.log(11)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/${type}`,
      {
        next: { tags: ['cartData'] },
        credentials: 'include',
        cache: 'no-store',
        // headers
      },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // return await response.json()
    const tempData = {
      id: 0,
      cnt: 4,
      post: [
        {
          id: 0,
          cartId: 100,
          code: '1000515129797',
          count: 1,
          checked: 1,
          optionId: 2160,
        },
        {
          id: 1,
          cartId: 98,
          code: '1000515129711',
          count: 2,
          checked: 0,
          optionId: 2074,
        },
        {
          id: 2,
          cartId: 96,
          code: '1000515129710',
          count: 2,
          checked: 0,
          optionId: 2073,
        },
      ],
      ssg: [
        {
          id: 0,
          cartId: 107,
          code: '1000515130103',
          count: 1,
          checked: 1,
          optionId: 2466,
        },
      ],
    }
    return tempData
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getOptions', err)
    return undefined
  }
}

export default async function page() {
  // TODO: 장바구니 데이터 불러오기
  const session = await getSession()
  let cartDataPromise

  if (session) {
    // const headers = {
    //   headers: { Authorization: 'ㅇㅅㅇ' },
    // }
    cartDataPromise = getCartData('member')
  } else {
    cartDataPromise = getCartData('non-member')
  }

  const [cartData] = await Promise.all([cartDataPromise])

  // console.log(cartData)

  if (cartData?.cnt === 0) return <NoCart />

  return (
    <>
      <main>
        <UserDeliveryAddress />

        <div className="mt-[25px]">
          <AllSelectHeader cartData={cartData} />

          {cartData && cartData?.ssg.length > 0 && (
            <CartCardWrapper type="ssg" title="쓱배송" data={cartData?.ssg} />
          )}
          <Divider height={4} color="var(--m-colors-gray150)" />
          {cartData && cartData?.post.length > 0 && (
            <CartCardWrapper
              type="post"
              title="택배배송"
              data={cartData?.post}
            />
          )}
        </div>
      </main>

      {/* TODO: 여기에 선택 상품 갯수, 배송비, 총 가격 전달 */}
      <ToolBar />
    </>
  )
}
