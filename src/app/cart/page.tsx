import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import Divider from '@/components/Divider'
import AllSelectHeader from '@/containers/cart/AllSelectHeader'
import CartCardWrapper from '@/containers/cart/CartCardWrapper'
import NoCart from '@/containers/cart/NoCart'
import NonMemberCart from '@/containers/cart/NonMemberCart'
import ToolBar from '@/containers/cart/ToolBar'
import UserDeliveryAddress from '@/containers/cart/UserDeliveryAddress'
import { DeliveryDataType } from '@/types/orderType'
import { getCartDataNonMember } from '@/utils/addCartNonMemberApi'
import { getCartDataMember } from '@/utils/cartApi'

export const metadata: Metadata = {
  title: '장바구니',
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

  let cartData
  let deliveryData
  let deliveryDefault
  if (session) {
    cartData = await getCartDataMember(headers)
    deliveryData = await getDeliveryAddressIdMember(headers)
    deliveryDefault = await getDeliveryDefaultMember(
      deliveryData[0]?.deliveryAddressId,
      headers,
    )
  } else {
    cartData = await getCartDataNonMember()
    deliveryData = []
    deliveryDefault = undefined
  }

  if (session && cartData && cartData?.cnt === 0)
    return (
      <NoCart
        session={!!session}
        selectedDeliveryData={deliveryDefault}
        selectedDeliveryId={deliveryData[0]?.deliveryAddressId || -1}
      />
    )

  return (
    <>
      {session ? (
        <main>
          <UserDeliveryAddress
            session={!!session}
            selectedDeliveryData={deliveryDefault}
            selectedDeliveryId={deliveryData[0]?.deliveryAddressId || -1}
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
      ) : (
        <NonMemberCart />
      )}

      <ToolBar session={!!session} />
    </>
  )
}
