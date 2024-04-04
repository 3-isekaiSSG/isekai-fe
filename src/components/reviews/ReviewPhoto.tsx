/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'
import Link from 'next/link'

export default function ReviewPhoto({ images }: { images: any }) {
  return (
    <ul className="overflow-x-auto flex whitespace-nowrap -mx-5 my-0 px-5 py-0">
      {images.map((image: any) => (
        <li
          key={image.id}
          className="min-w-[25%] h-auto align-top inline-block w-[111px] ml-0 mr-4 mt-0 rounded-lg"
        >
          {/* TODO: 해당 리뷰 상세로 이동 */}
          <Link
            href=""
            className="w-full h-full bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-auto aspect-[1] bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={image.id.toString()}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                style={{
                  objectFit: 'cover',
                  borderRadius: '0.5rem !important',
                }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
