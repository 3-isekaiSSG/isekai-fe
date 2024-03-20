'use client'

import { useState } from 'react'

export default function LikeCartBtn({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemId,
  isLiked,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  likeDivision,
}: {
  itemId: number
  isLiked: boolean
  likeDivision: number
}) {
  const [like, setLike] = useState(isLiked)
  /**
    division 찜 분류
    0 : 단일상품
    1 : 묶음상품
    2 : 카테고리M
    3 : 카테고리S
    4 : 판매자
 */

  // TODO: 좋아요 / 장바구니 로직
  // FIXME: 회원만 찜하기 가능
  const handleLike = async () => {
    setLike(!like)
    // console.log(productId, '좋아요')
  }
  const handleCart = async () => {
    // console.log(productId, '장바구니')
  }

  return (
    <div className="flex">
      <button
        onClick={handleLike}
        type="button"
        className="flex items-center justify-center align-middle w-7 h-7"
        aria-label={like ? '좋아요 상품 취소하기' : '좋아요 상품 등록하기'}
      >
        {like ? (
          <svg
            className="w-5 h-5 inline-block leading-[1em] align-middle text-[color:var(--m-colors-primary)] animate-[0.35s_linear_0.01s_1_normal_none_running_animation-unLike]"
            viewBox="0 0 24 24"
            focusable="false"
            name="LikeFillIcon"
          >
            <path
              d="M12 21.288L4.06802 12.72C2.94002 11.496 2.40002 10.224 2.40002 8.84398C2.40002 5.95198 4.69202 3.59998 7.50002 3.59998C9.44402 3.59998 11.136 4.72798 12 6.38398C12.864 4.72798 14.556 3.59998 16.5 3.59998C19.308 3.59998 21.6 5.95198 21.6 8.84398C21.6 10.224 21.06 11.484 19.944 12.708L12 21.288Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 inline-block leading-[1em] align-middle animate-[0.25s_linear_0.01s_1_normal_none_running_animation-like]"
            viewBox="0 0 24 24"
            focusable="false"
            name="LikeIcon"
          >
            <path
              d="M12 21.288L4.06802 12.72C2.94002 11.496 2.40002 10.224 2.40002 8.84398C2.40002 5.95198 4.69202 3.59998 7.50002 3.59998C9.44402 3.59998 11.136 4.72798 12 6.38398C12.864 4.72798 14.556 3.59998 16.5 3.59998C19.308 3.59998 21.6 5.95198 21.6 8.84398C21.6 10.224 21.06 11.484 19.944 12.708L12 21.288ZM7.50002 4.79998C5.35202 4.79998 3.60002 6.61198 3.60002 8.84398C3.60002 9.92398 4.03202 10.896 4.94402 11.904L12 19.512L19.056 11.904C19.968 10.896 20.4 9.92398 20.4 8.84398C20.4 6.61198 18.648 4.79998 16.5 4.79998C14.352 4.79998 12.6 6.61198 12.6 8.84398H11.4C11.4 6.61198 9.64802 4.79998 7.50002 4.79998Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <button
        aria-label="장바구니 담기"
        onClick={handleCart}
        type="button"
        className="flex items-center justify-center align-middle w-7 h-7"
      >
        <svg
          className="w-5 h-5 inline-block leading-[1em] align-middle"
          viewBox="0 0 24 24"
          focusable="false"
          name="CartIcon"
        >
          <rect
            x="6"
            y="8.40002"
            width="14.4"
            height="1.2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
            fill="currentColor"
          />
          <path
            d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}
