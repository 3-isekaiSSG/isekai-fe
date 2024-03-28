'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { IoIosPause, IoIosPlay } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import EventCarouselAll from '@/components/Carousel/EventCarouselAll'
import { CarouselType } from '@/types/HomeType'

export default function EventCarousel({
  onImageChange,
  imageList,
}: {
  onImageChange: (newImage: number) => void
  imageList: CarouselType[]
}) {
  const [isAll, setIsAll] = useState(false)

  // FIXME: 무한 캐러셀
  // const updatedImageList = [
  //   imageList[imageList.length - 1],
  //   ...imageList,
  //   imageList[0],
  // ]

  // 현재 인덱스
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    onImageChange(currentIndex)
  }, [currentIndex, onImageChange])

  // 드래그 시작위치, 드래그 중 위치
  const [startX, setStartX] = useState(0)
  const [moveX, setMoveX] = useState(0)

  const [fullWidth, setFullWidth] = useState(0)
  useEffect(() => {
    setFullWidth(window.innerWidth)
  }, [])

  /** 3초 자동 슬라이드 */
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length)
      }, 3000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, imageList.length, currentIndex, moveX])

  /** 자동 슬라이드 토글 */
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  /** 다음 사진으로 인덱스 변경 */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length)
  }
  /** 이전 사진으로 인덱스 변경 */
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length,
    )
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.nativeEvent.touches[0].clientX)
  }

  /** 드래그 방향에 따라 이미지 넘기기 */
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

  return (
    <>
      <section className="relative w-full h-full overflow-hidden">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`h-full flex ${moveX === 0 && 'transition-transform duration-[0.3s] ease-[ease-in-out]'}`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100 - (moveX / fullWidth) * 100}%))`,
          }}
        >
          {imageList.map((image: CarouselType) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={image.id} className="relative h-auto min-w-full">
              <Image
                alt={image!.title.join(' ')}
                src={image!.image}
                sizes="100vw"
                fill
                priority
              />
              <div className="absolute text-[color:var(--m-colors-white)] flex items-center flex-col min-w-full bottom-[52px]">
                <h3 className="leading-[31px] text-[26px] font-bold flex flex-col items-center">
                  <span className="text-center">{image!.title[0]}</span>
                  <span className="text-center">{image!.title[1]}</span>
                </h3>
                <p className="text-sm leading-[17px] font-medium mt-2.5">
                  {image!.description}
                </p>
              </div>

              {/* 상단 태그 */}
              {image!.tag && (
                <div
                  className={`absolute flex items-center justify-center font-bold text-xs leading-4 align-top text-[color:var(--m-colors-white)] px-1.5 rounded-none top-0 ${image.tag[0] === '이벤트' ? 'left-0 h-[24px] bg-[color:var(--m-colors-gray900)]' : 'right-0 h-[16px] bg-[color:var(--m-colors-black_alpha20)]'}`}
                >
                  {image.tag[1]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 우측 하단 버튼 */}
        <div className="absolute bg-[color:var(--m-colors-black\_alpha45)] flex items-center justify-center h-8 z-10 right-0 bottom-0">
          <button
            aria-label={isPlaying ? '배너 정지' : '배너 재생'}
            type="button"
            onClick={togglePlay}
            className="w-8 h-8 inline-flex justify-center items-center m-0 p-0 rounded-[unset]"
          >
            {isPlaying ? (
              <IoIosPause className="opacity-50" fill="white" size={24} />
            ) : (
              <IoIosPlay fill="white" size={24} />
            )}
          </button>
          <div className="flex items-center justify-center h-full font-medium text-[13px] leading-[normal] text-[color:var(--m-colors-white)] pr-2">
            <span aria-label="현재 배너" className="w-[17px]">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="opacity-50">/</span>
            <span aria-label="전체 배너" className="opacity-50 w-[17px]">
              {imageList.length}
            </span>
          </div>

          <button
            onClick={() => {
              setIsAll(true)
              setIsPlaying(false)
            }}
            type="button"
            className="inline-flex justify-center items-center h-8 text-[13px] font-medium text-[color:var(--m-colors-white)] ml-px pl-2.5 pr-1.5 rounded-[unset]"
          >
            전체보기 <SlArrowRight />
          </button>
        </div>
      </section>
      {isAll && (
        <EventCarouselAll
          setAll={setIsAll}
          data={imageList}
          scrollToId={String(currentIndex)}
        />
      )}
    </>
  )
}
