import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import Divider from '@/components/Divider'
import AllSelectHeader from '@/containers/cart/AllSelectHeader'
import CartCardWrapper from '@/containers/cart/CartCardWrapper'
import NoCart from '@/containers/cart/NoCart'
import ToolBar from '@/containers/cart/ToolBar'
import UserDeliveryAddress from '@/containers/cart/UserDeliveryAddress'
import { CartItemsType } from '@/types/cartType'
import { DeliveryDataType } from '@/types/orderType'

export const metadata: Metadata = {
  title: '장바구니',
}

async function getCartData(headers: {
  Authorization: string
}): Promise<CartItemsType | undefined> {
  const session = await getServerSession(options)
  try {
    let response
    if (session) {
      response = await fetch(`${process.env.NEXT_PUBLIC_API}/carts/member`, {
        next: { tags: ['cartData'] },
        credentials: 'include',
        cache: 'no-store',
        headers,
      })
    } else {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/carts/non-member`,
        {
          next: { tags: ['cartData'] },
          credentials: 'include',
          cache: 'no-store',
        },
      )
    }

    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    return undefined
  }
}

async function getDeliveryAddressIdMember(headers: { Authorization: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/delivery-addresses/members`,
      { headers },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDeliveryAddressIdMember', err)
    return []
  }
}

async function getDeliveryDefaultMember(
  deliveryAddressId: number,
  headers: { Authorization: string },
): Promise<DeliveryDataType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/delivery-addresses/${deliveryAddressId}`,
      { headers },
    )

    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDeliveryDefault', err)
    return undefined
  }
}

// export async function getDeliveryAddressNonMember() {}

export default async function page() {
  const session = await getServerSession(options)
  const headers = {
    Authorization: session?.user.accessToken,
  }

  const cartData = await getCartData(headers)

  let deliveryData
  let deliveryDefault
  if (session) {
    deliveryData = await getDeliveryAddressIdMember(headers)
    deliveryDefault = await getDeliveryDefaultMember(
      deliveryData[0]?.deliveryAddressId,
      headers,
    )
  }

  if (cartData?.cnt === 0)
    return (
      <NoCart
        session={!!session}
        selectedDeliveryData={deliveryDefault}
        selectedDeliveryId={deliveryData[0]?.deliveryAddressId}
      />
    )

  return (
    <>
      <main>
        <UserDeliveryAddress
          session={!!session}
          selectedDeliveryData={deliveryDefault}
          selectedDeliveryId={deliveryData[0]?.deliveryAddressId}
        />

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

      <ToolBar session={!!session} />
    </>
  )
}
