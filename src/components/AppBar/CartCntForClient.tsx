'use client'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cartClientState } from '@/states/cartAtom'
import { getCartCountNonMember } from '@/utils/addCartNonMemberApi'

export default function CartCntForClient() {
  const [cartCount, setCartCount] = useRecoilState(cartClientState)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartCountNonMember()
      if (data) {
        setCartCount(data.cnt)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    cartCount > 0 && (
      <div className="absolute left-2/4 -top-1">
        <p className="bg-[color:var(--m-colors-primary)] text-[10px] font-medium min-w-[1rem] h-4 text-center text-[color:var(--m-colors-white)] leading-4 translate-x-[calc(-50%_+_10px] rounded-[100%]">
          <span className="text-[0px]">담은 상품 수</span>
          {cartCount}
        </p>
      </div>
    )
  )
}
