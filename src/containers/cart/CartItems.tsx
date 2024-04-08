import Divider from '@/components/Divider'
import { CartItemsType } from '@/types/cartType'
import AllSelectHeader from './AllSelectHeader'
import CartCardWrapper from './CartCardWrapper'
import UserDeliveryAddress from './UserDeliveryAddress'

export default async function CartItems() {
  // TODO: 장바구니 상품 가져오기
  const data: CartItemsType = {
    id: 0,
    normal: [
      {
        id: 0, // 카트id
        code: '1000515129169',
        count: 2,
        checked: 0, // 0 : 해제, 1 : 선택
      },
      {
        id: 2, // 카트id
        code: '1000515130105',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 3, // 카트id
        code: '1000515129171',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 12, // 카트id
        code: '1000515130105',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 13, // 카트id
        code: '1000515129171',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
    ],
    ssg: [
      {
        id: 2, // 카트id
        code: '1000515130105',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 3, // 카트id
        code: '1000515129171',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 12, // 카트id
        code: '1000515130105',
        count: 5,
        checked: 1, // 0 : 해제, 1 : 선택
      },
      {
        id: 13, // 카트id
        code: '1000515129171',
        count: 1,
        checked: 1, // 0 : 해제, 1 : 선택
      },
    ],
  }

  return (
    <main>
      <UserDeliveryAddress />

      <div className="mt-[25px]">
        <AllSelectHeader />

        {/* 쓱배송이 있으면, */}
        {data.ssg.length && (
          <CartCardWrapper type="emart" title="쓱배송" data={data.ssg} />
        )}
        <Divider height={4} color="var(--m-colors-gray150)" />
        {data.normal.length && (
          <CartCardWrapper type="post" title="택배배송" data={data.normal} />
        )}
      </div>
    </main>
  )
}
