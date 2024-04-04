'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ThumbnailType } from '@/types/productDataType'

export default function ProductCarousel({
  imageList,
  productName = '',
}: {
  imageList: ThumbnailType[]
  productName?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [moveX, setMoveX] = useState(0)
  const [fullWidth, setFullWidth] = useState(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.nativeEvent.touches[0].clientX)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < imageList.length - 1) {
        return prevIndex + 1
      }
      return prevIndex
    })
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1
      }
      return prevIndex
    })
  }

  const handleTouchEnd = () => {
    if (moveX > 50) {
      handlePrev()
    } else if (moveX < -50) {
      handleNext()
    }
    setMoveX(0)
  }
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentTouchX = e.nativeEvent.touches[0].clientX
    setMoveX(currentTouchX - startX)
  }

  useEffect(() => {
    setFullWidth(window.innerWidth)
  }, [])

  return (
    <section className="relative w-full h-full overflow-hidden aspect-square">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`h-full flex ${moveX === 0 && 'transition-transform duration-[0.3s] ease-[ease-in-out]'}`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100 - (moveX / fullWidth) * 100}%))`,
        }}
      >
        {imageList.map((image: ThumbnailType) => (
          <div key={image.id} className="relative h-auto min-w-full">
            <Image
              alt={productName + image.id}
              src={image.imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>

      <div className="absolute text-center leading-none bottom-2.5 inset-x-0">
        <div className="inline-block min-w-[50px] h-[22px] bg-[rgba(34,34,34,0.15)] text-[color:var(--m-colors-white)] align-top rounded-[11px]">
          <span
            aria-label="현재 슬라이드"
            className=" text-xs tracking-[-0.5px] text-[color:var(--m-colors-white)] leading-[22px]"
          >
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className=" text-xs tracking-[-0.5px] text-[color:var(--m-colors-white)] leading-[22px]">
            /
          </span>
          <span
            aria-label="전체 슬라이드"
            className=" text-xs tracking-[-0.5px] text-[color:var(--m-colors-white)] leading-[22px]"
          >
            {String(imageList.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
