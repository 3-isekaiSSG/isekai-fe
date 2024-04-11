'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import { deleteCart } from './action'

export default function DeleteButton({ cartId }: { cartId: number }) {
  const [toast, setToast] = useState<boolean>(false)

  const handleDelete = async () => {
    setToast(true)
    await deleteCart(cartId)
  }

  return (
    <>
      {toast && (
        <Toast
          setToast={setToast}
          message="장바구니에서 상품을 삭제했습니다."
          position="bottom"
        />
      )}
      <button
        type="button"
        onClick={handleDelete}
        className="inline-flex items-center justify-center w-7 h-7 -ml-1"
      >
        <i className="inline-flex w-5 h-5">
          <span className="hidden">상품 삭제</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.59998 6H20.4V7.2H19.2L18 20.4H5.99998L4.79998 7.2H3.59998V6ZM7.19996 19.2H16.8L18 7.2H5.99996L7.19996 19.2Z"
              fill="rgb(136,136,136)"
            />
            <rect
              x="9.59998"
              y="9.59998"
              width="1.2"
              height="7.2"
              fill="rgb(136,136,136)"
            />
            <rect
              x="13.2001"
              y="9.59998"
              width="1.2"
              height="7.2"
              fill="rgb(136,136,136)"
            />
            <rect
              x="9.35999"
              y="3.59998"
              width="5.4"
              height="1.2"
              fill="rgb(136,136,136)"
            />
          </svg>
        </i>
      </button>
    </>
  )
}
