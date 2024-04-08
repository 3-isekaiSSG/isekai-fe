import Divider from '@/components/Divider'
import { CartDeliveryType } from '@/types/cartType'
import AllSelectHeader from './AllSelectHeader'
import CartCardWrapper from './CartCardWrapper'
import UserDeliveryAddress from './UserDeliveryAddress'

export default async function CartItems({
  ssg,
  post,
}: {
  ssg: CartDeliveryType[]
  post: CartDeliveryType[]
}) {
  return (
    <main>
      <UserDeliveryAddress />

      <div className="mt-[25px]">
        <AllSelectHeader />

        {ssg.length > 0 && (
          <CartCardWrapper type="emart" title="쓱배송" data={ssg} />
        )}
        <Divider height={4} color="var(--m-colors-gray150)" />
        {post.length > 0 && (
          <CartCardWrapper type="post" title="택배배송" data={post} />
        )}
      </div>
    </main>
  )
}
