import ToJoinAuthBtn from '@/containers/join-intro/ToJoinAuthBtn'
import SimpleJoin from '@/containers/join-intro/SimpleJoin'

export default function Page() {
  return (
    <main>
      <div>
        <div className="text-[#222] text-left pt-10 pb-[30px] px-5">
          <p className="font-bold text-xl leading-[1.3]">
            믿고 사는 즐거움
            <br />
            SSG.COM에 오신 것을 환영합니다.
          </p>
        </div>
        <div className="px-5 py-[15px] bg-[#f8f8f8]">
          <h3 className="font-normal text-sm text-[#666]">
            신세계포인트 통합회원
          </h3>
        </div>
        <p className="box-border mt-5 mb-0 mx-0 px-5 py-0 text-sm text-[#444] leading-[1.2142857143]">
          신세계 유니버스 클럽 3개월 무료체험이 제공됩니다.
          <br />
          매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
        </p>
        <p className="box-border mt-2 px-5 py-0 text-sm text-[#444] leading-[1.2142857143]">
          * 멤버십은 3개월 후 자동 해지 됩니다.
        </p>
        <ToJoinAuthBtn />
      </div>
      <SimpleJoin />
    </main>
  )
}
