'use client'

// import { useRouter } from 'next/navigation'

export default function OrderToolBar() {
  // const router = useRouter()
  const handleClick = () => {
    // router.push('/')
  }
  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        <button
          type="button"
          onClick={handleClick}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          <strong className="font-bold">~~원</strong> 결제하기
        </button>
      </div>
    </div>
  )
}
