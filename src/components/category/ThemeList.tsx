import Link from 'next/link'
import Image from 'next/image'
import { THEME_ITEMS } from './states'

export default function ThemeList() {
  return (
    <div className="relative pb-[15px] ml-[15px]">
      <ul className="flex flex-wrap">
        {THEME_ITEMS.map((item) => (
          <li key={item.id} className="inline-block w-6/12 mt-2.5">
            <Link href={item.redirect_url} className="mr-[15px] block">
              <div className="relative pb-[60%] rounded-lg">
                <Image alt={item.title} src={item.image} fill />
              </div>
              <div className="block pt-[8px] pb-[3px] text-[13px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
