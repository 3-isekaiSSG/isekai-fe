'use client'

import { useEffect, useState } from 'react'

export default function HelpFilter() {
  const [isShow, setIsShow] = useState<boolean>(false)
  useEffect(() => {
    setIsShow(Boolean(localStorage.getItem('helpFilter')))
  }, [])

  if (isShow) return null

  return (
    !isShow && (
      <div className="text-[color:var(--m-colors-white)] relative mt-2">
        <div className="bg-[color:var(--m-colors-warning\_loss)] text-xs flex items-center px-4 py-2">
          <p className="flex-1 text-center">
            브랜드, 혜택 등 원하시는 조건을 설정해보세요!
          </p>

          <button
            type="button"
            onClick={() => {
              localStorage.setItem('helpFilter', '1')
              setIsShow(false)
            }}
            aria-label="다시 보지 않기"
          >
            <svg
              className="w-5 h-5 leading-[1em] align-middle"
              viewBox="0 0 24 24"
              focusable="false"
              name="CloseSmallEmartIcon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5684 7.61402C17.8965 7.28601 17.8965 6.75415 17.5685 6.42608C17.2405 6.09801 16.7087 6.09796 16.3806 6.42597L12.1199 10.6859L7.85921 6.42597C7.53114 6.09796 6.99928 6.09801 6.67127 6.42608C6.34326 6.75415 6.34331 7.28601 6.67138 7.61402L10.9318 11.8737L6.67138 16.1334C6.34331 16.4614 6.34326 16.9932 6.67127 17.3213C6.99928 17.6494 7.53114 17.6494 7.85921 17.3214L12.1199 13.0615L16.3806 17.3214C16.7087 17.6494 17.2405 17.6494 17.5685 17.3213C17.8965 16.9932 17.8965 16.4614 17.5684 16.1334L13.3079 11.8737L17.5684 7.61402Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="bg-[color:var(--m-colors-warning\_loss)] absolute w-3 h-3 rotate-45 bottom-[-0.25rem] mx-4 my-0 right-1" />
      </div>
    )
  )
}
