import Image from 'next/image'
import Link from 'next/link'
import { IconType } from './state'

export default function ItemScroll({
  data,
  ImageH,
}: {
  data: IconType[]
  ImageH: number
}) {
  return (
    <ul className="inline-flex flex-nowrap items-start justify-start overflow-x-scroll pt-2.5 pb-2 px-1">
      {data.map((item) => (
        <li key={item.id} className="w-16 mr-3">
          {/* TODO: href 경로 확인 */}
          <Link href={item.url}>
            <div
              className="w-[64px] relative"
              style={{ height: `${ImageH}px` }}
            >
              <Image
                className="rounded-[100px]"
                alt={item.title}
                src={item.imageUrl}
                fill
                sizes="5vw"
                priority
              />
            </div>
            <span className="block min-w-full min-h-[32px] text-[13px] text-[color:var(--m-colors-black)] tracking-[-0.3px] text-center text-ellipsis break-keep leading-snug mt-1.5">
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
