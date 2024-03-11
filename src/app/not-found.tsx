import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full h-full ">
      <div className="absolute -translate-x-2/4 -translate-y-2/4 text-center w-full px-[30px] py-0 left-2/4 top-2/4">
        <div className="max-w-[140px] mx-auto my-0">
          <Image
            alt="not-found"
            src="/images/404.png"
            width={200}
            height={100}
          />
        </div>
        <h1 className="text-2xl leading-6 font-bold mt-[30px]">
          원하셨던
          <br />
          페이지가 아닌가요?
        </h1>
        <p className="text-[15px] leading-[18px] font-normal text-[#969696] mt-[15px]">
          방문하신 페이지가
          <br />
          변경 혹은 삭제되었을 수 있어요.
          <br />
          이전 페이지에서 다시 한번 시도해 주세요.
        </p>
        {/* FIXME: 이전 페이지로 돌아가기 router.back 하면 버튼으로 해야하지 않나? */}
        <Link
          href="/"
          className="block bg-[#222] text-white text-[15px] leading-[52px] no-underline max-w-[315px] mt-[30px] mb-0 mx-auto rounded-lg"
        >
          이전페이지로 돌아가기
        </Link>
      </div>
    </div>
  )
}
