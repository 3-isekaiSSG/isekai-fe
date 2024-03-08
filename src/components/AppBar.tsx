import Image from 'next/image'
import Link from 'next/link'
import MallBtn from './MallBtn'

export default function AppBar() {
  return (
    <div className="h-[56px] py-[8px] pr-[10px] pl-[16px] flex">
      <div className="flex flex-1">
        <h1 className="text-[0px]">SSG.COM</h1>
        <Link href="/">
          <Image
            src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=293752feb1b096a611226a9088a793147b3714b1"
            alt="SSG.COM"
            width={86}
            height={40}
          />
        </Link>
        <MallBtn />
      </div>
    </div>
  )
}
