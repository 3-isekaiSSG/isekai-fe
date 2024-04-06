export default function LoginAdBtn() {
  return (
    <div className="relative mb-[34px]">
      <span className="absolute w-[27px] h-4 text-white text-center leading-4 text-[11px] box-border px-1.5 py-0 right-0 bg-black">
        AD
      </span>
      <button
        type="submit"
        className="text-sm text-white text-center font-bold h-[52px] border leading-[52px] border-black bg-black block w-full"
      >
        휴대폰 간편 로그인
        <span className="inline-block text-[#888] text-[11px] pl-1">광고</span>
      </button>
    </div>
  )
}
