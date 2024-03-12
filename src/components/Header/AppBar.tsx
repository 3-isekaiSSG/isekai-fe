import Image from 'next/image'
import Link from 'next/link'
import MallBtn from './MallBtn'

import NoticeBtn from './NoticeBtn'
import CartBtn from './CartBtn'
import SearchSvg from './SearchSvg'

export default function AppBar() {
  return (
    <div className="h-[56px] py-[8px] pr-[10px] pl-[16px]">
      <div className=" flex items-center">
        <h1 className="text-[0px]">SSG.COM</h1>
        <Link href="/">
          <Image
            src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=293752feb1b096a611226a9088a793147b3714b1"
            alt="SSG.COM"
            width={86}
            height={40}
          />
        </Link>

        {/* 몰 더보기 */}
        <MallBtn />

        {/* 검색창 열기 */}
        <div className="flex-1 bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative ml-5 mr-2.5 rounded-[22px]  ">
          <span className="relative -left-2.5">
            <SearchSvg />
          </span>
        </div>
        <div className="w-8 h-8 items-center flex justify-center mr-1">
          <NoticeBtn />
        </div>
        <div className="w-8 h-8 items-center flex justify-center mr-1">
          <CartBtn />
        </div>
      </div>
    </div>
  )
}
