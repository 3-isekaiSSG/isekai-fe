'use client'

import Image from 'next/image'
import EventCarousel from '.'

export default function HomeEventCarousel() {
  // EventCarousel에서 받아오기 가능??
  const imageUrl =
    'https://sui.ssgcdn.com/ssgadp/19/58/1010415819_030801220.jpg'

  return (
    <div className="overflow-hidden pb-[calc((100%_-_16px_*_2)_*_(1_/_0.8575)_+_16px)] relative">
      <div className="absolute overflow-hidden transition-[background-image] duration-[0.3s] ease-[cubic-bezier(0.47,-0.4,0.52,1.31)] delay-[0s] inset-[0px_0px_50px] after:content-[''] after:backdrop-blur-[25px] after:absolute after:inset-0">
        <Image
          alt=""
          src={imageUrl}
          sizes="100vw"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute bottom-0 block overflow-hidden top-4 inset-x-4">
        <EventCarousel />
      </div>
    </div>
  )
}
