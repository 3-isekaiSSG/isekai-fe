import Image from 'next/image'
import Link from 'next/link'
import { tabNav } from './state'

// FIXME: 컴포넌트 분리
export default function TabBar() {
  return (
    <div className="z-[99] fixed w-full h-[50px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <ul className="flex justify-around h-full">
        {tabNav.map((tab) => {
          return (
            <li key={tab.id} className="w-full h-full">
              <Link
                href={tab.url}
                className="h-[inherit] flex items-center flex-col justify-center"
              >
                <div className="relative w-7 h-7 box-border flex items-center justify-center">
                  <Image
                    src={`/svgs/${tab.svgName}.svg`}
                    alt={tab.title}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-[color:var(--m-colors-gray600)] text-[11px] tracking-[-0.3px]">
                  {tab.title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
