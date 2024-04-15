import Image from 'next/image'
import Link from 'next/link'
import styles from './search.module.css'
import { EventList } from './state'

export default function EventCards() {
  return (
    <section>
      <h3 className="text-sm text-[color:var(--m-colors-gray900)] font-bold">
        이벤트
      </h3>
      <div className="flex-row flex items-start my-2.5 pe-4 overflow-x-auto flex-nowrap">
        {EventList.map((item) => (
          <div
            key={item.id}
            className={`w-[135px] min-w-[135px] ${styles.eventItem}`}
          >
            <Link href={item.href}>
              <Image
                className="transition-opacity duration-[0.2s] ease-[ease-in] delay-[0s] opacity-100 rounded-lg"
                alt={item.title}
                src={item.image}
                width={135}
                height={81}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
              <p className="text-xs text-[color:var(--m-colors-gray600)] leading-[14.32px] mt-1.5">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
