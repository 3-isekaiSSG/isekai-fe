'use client'

import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { CarouselType } from '@/types/HomeType'

export default function EventCarouselAll({
  setAll,
  data,
  scrollToId,
}: {
  setAll: Dispatch<SetStateAction<boolean>>
  data: CarouselType[]
  scrollToId: string
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [scrollToId])

  return (
    <div className="overflow-y-scroll fixed z-[1500] w-full h-full bg-[color:var(--m-colors-white)] left-0 top-0">
      <section className="relative ">
        <header className="sticky bg-[color:var(--m-colors-white)] top-0 z-[1400] flex items-center justify-center h-12 px-6">
          <p className="flex-1 py-3 text-base font-bold text-center">
            전체 보기
          </p>
          <button type="button" onClick={() => setAll(false)} aria-label="닫기">
            <svg
              className="text-[color:var(--m-colors-black)] w-7 h-7 leading-[1em] align-middle"
              viewBox="0 0 24 24"
              focusable="false"
              name="CloseIcon"
              aria-hidden="true"
            >
              <path
                d="M4.36304 18.788L18.7879 4.36319L19.6364 5.21171L5.21156 19.6365L4.36304 18.788Z"
                fill="currentColor"
              />
              <path
                d="M4.36304 5.21136L5.21156 4.36284L19.6364 18.7877L18.7879 19.6362L4.36304 5.21136Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </header>

        <div className="items-center p-4">
          {data.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center w-full min-h-[82px] pr-4 pl-4 pt-4 pb-4"
                id={String(item.id)}
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title[0]}
                    width={120}
                    height={120}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="flex flex-col ml-5 overflow-hidden">
                  {item.title.map((title) => (
                    <span
                      key={title}
                      className="text-lg font-bold leading-tight -tracking-wide"
                    >
                      {title}
                    </span>
                  ))}
                  <span className="text-[color:var(--m-colors-gray700)] text-[13px] -tracking-wide leading-tight overflow-hidden mt-1.5">
                    {item.description}
                  </span>
                </div>
              </div>
              <div className="mt-4 mb-4 ml-0 mr-0 self-stretch w-auto h-auto border-[color:var(--m-colors-gray200)] border-0 border-b" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
