'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function NoCart() {
  const { data: session } = useSession()

  return (
    <div className="text-center mx-0 my-10 px-[50px] py-0">
      <div className="inline-block w-[111px] h-[95px] mt-10 mb-5 mx-0 -ml-6 relative">
        <i>
          <Image src="/svgs/noCart.svg" alt="장바구니" fill />
        </i>
      </div>
      <p className="text-[color:var(--m-colors-gray900)] text-lg tracking-[-0.3px] break-all">
        장바구니에 담긴 상품이 없습니다.
      </p>
      {/* TODO: 회원이 아니면 */}
      {!session && (
        <>
          <p className="text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] break-all mt-[10px]">
            로그인을 하시면 담긴 상품이 있는 지 바로 확인하실 수 있습니다!
          </p>
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              className="bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] h-[60px] text-lg font-medium text-center w-full"
            >
              로그인하기
            </button>
          </div>
        </>
      )}
    </div>
  )
}
