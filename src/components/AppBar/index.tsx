import Image from 'next/image'
import Link from 'next/link'
import GoToCart from './GoToCart'
import MallBtn from './MallBtn'
import NoticeBtn from './NoticeBtn'
import Search from './Search'

export default async function AppBar({
  after = false,
  value = '',
}: {
  after: boolean
  value: string
}) {
  return (
    <header
      className={`w-full h-full ${after && "after:content-[''] after:block after:h-0.5 after:bg-header-gradient"}`}
    >
      <div className="h-14 py-[8px] pr-[10px] pl-[16px]">
        <div className="flex items-center">
          <div className="flex items-center pr-2">
            <h1 className="text-[0px]">SSG.COM</h1>
            <Link href="/" scroll={false}>
              <Image
                src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=293752feb1b096a611226a9088a793147b3714b1"
                alt="SSG.COM"
                width={86}
                height={40}
                priority
              />
            </Link>
            <MallBtn />
          </div>

          <Search readOnly placeholder="" autoFocus={false} value={value} />

          <NoticeBtn />
          <GoToCart />
        </div>
      </div>
    </header>
  )
}
