'use client'

import Image from 'next/image'
import { useState } from 'react'
import EventCarousel from '@/components/Carousel/EventCarousel'
import { carouselLists } from './carouselState'

export default function HomeEventCarousel() {
  const imageList = carouselLists
  const [imageUrl, setImageUrl] = useState(imageList[0].image)
  const handleImageChange = (newImage: number) => {
    setImageUrl(imageList[newImage].image)
  }

  return (
    <section className="overflow-hidden pb-[calc((100%_-_16px_*_2)_*_(1_/_0.8575)_+_16px)] relative">
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
        <EventCarousel
          onImageChange={handleImageChange}
          imageList={imageList}
        />
      </div>
    </section>
  )
}
