'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CartHeader() {
  const router = useRouter()

  return (
    <header className="fixed z-[500] h-[45px] w-full bg-white flex items-center px-20 py-0 shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
      <div className="absolute left-0 inset-y-0">
        <button
          className="w-14 h-[50px] flex items-center justify-center"
          type="button"
          onClick={() => router.back()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="var(--m-colors-gray900)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1797 20.3249C10.068 20.3257 9.95729 20.304 9.8542 20.261C9.7511 20.2181 9.65773 20.1547 9.57969 20.0749L2.15969 12.5849C2.00693 12.4264 1.92157 12.2149 1.92157 11.9949C1.92157 11.7748 2.00693 11.5633 2.15969 11.4049L9.57969 3.91485C9.73858 3.75911 9.9522 3.67188 10.1747 3.67188C10.3972 3.67188 10.6108 3.75911 10.7697 3.91485C10.9254 4.07374 11.0127 4.28736 11.0127 4.50985C11.0127 4.73234 10.9254 4.94596 10.7697 5.10485L3.91969 11.9949L10.7597 18.8949C10.8762 19.0129 10.9551 19.1628 10.9865 19.3256C11.018 19.4884 11.0005 19.6569 10.9364 19.8099C10.8722 19.9628 10.7642 20.0933 10.626 20.1849C10.4878 20.2766 10.3255 20.3253 10.1597 20.3249H10.1797Z"
              fill="%23262B2E"
            />
            <path
              d="M21.5997 12.8349H2.75968C2.5369 12.8349 2.32324 12.7464 2.16571 12.5888C2.00818 12.4313 1.91968 12.2176 1.91968 11.9949C1.91968 11.7721 2.00818 11.5584 2.16571 11.4009C2.32324 11.2434 2.5369 11.1549 2.75968 11.1549H21.5997C21.8225 11.1549 22.0361 11.2434 22.1936 11.4009C22.3512 11.5584 22.4397 11.7721 22.4397 11.9949C22.4397 12.2176 22.3512 12.4313 22.1936 12.5888C22.0361 12.7464 21.8225 12.8349 21.5997 12.8349Z"
              fill="%23262B2E"
            />
          </svg>
          <span className="text-[0px]">이전 페이지로 돌아가기</span>
        </button>
      </div>
      <h2 className="overflow-hidden text-center text-[15px] font-normal text-black text-ellipsis whitespace-nowrap leading-[1.2] w-full">
        장바구니
      </h2>
      <div className="absolute right-0 inset-y-0 w-14 flex items-center justify-center">
        <Link href="/" className="flex items-center justify-center">
          <div className="relative w-7 h-7 box-border flex items-center justify-center">
            <Image src="/svgs/home.svg" alt="검색" width={32} height={32} />
          </div>
        </Link>
      </div>
    </header>
  )
}
