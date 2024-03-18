import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  const isUser = false
  // TODO:

  return (
    <footer className="mb-[70px]">
      <div className="flex items-center justify-between min-h-[52px] text-[color:var(--m-colors-white)] px-[11px] bg-[color:var(--m-colors-gray600)]">
        <div className="flex items-center justify-start h-full">
          <div className="w-[30px] h-[30px] relative">
            <Image
              src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/footer_cs.svg?q=293752feb1b096a611226a9088a793147b3714b1"
              alt="고객센터 이미지"
              priority
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="leading-[1.2] text-[10px] font-bold ml-1">
            <p>SSG.COM 고객센터 / 전자금융거래 분쟁 처리</p>
            <p className="tracking-[-0.3px] mt-px ">
              <span className="tracking-[-0.5px] text-[12px] font-medium">
                1577-3419 /
              </span>
              <span>ssg@ssg.com</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end text-[10px]">
          <Link
            className="border bg-[#66666d] h-[25px] flex items-center mx-0 my-1 px-3 rounded-sm border-solid border-[#626269]"
            href="/"
          >
            전화걸기
          </Link>
          <Link
            className="border bg-[#66666d] h-[25px] flex items-center mx-0 my-1 px-3 rounded-sm border-solid border-[#626269] ml-[3px]"
            href="/"
          >
            1:1 고객센터
          </Link>
        </div>
      </div>

      <ul className="bg-[color:var(--m-colors-gray300)] h-[32.5px] flex items-center justify-between">
        <li
          className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
        >
          <Link
            className="block text-center text-[11px] tracking-[-0.05px] py-2"
            href="/"
          >
            홈
          </Link>
        </li>
        {/* TODO: 버튼 컴포넌트 수정 / 로그인 시 버튼 변화: 로그인+회원가입 / 로그아웃 */}
        {isUser ? (
          <>
            <li
              className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
            >
              <Link
                className="block text-center text-[11px] tracking-[-0.05px] py-2"
                href="/"
              >
                로그인
              </Link>
            </li>
            <li
              className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
            >
              <Link
                className="block text-center text-[11px] tracking-[-0.05px] py-2"
                href="/"
              >
                회원가입
              </Link>
            </li>
          </>
        ) : (
          <li
            className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
          >
            <Link
              className="block text-center text-[11px] tracking-[-0.05px] py-2"
              href="/"
            >
              로그아웃
            </Link>
          </li>
        )}

        <li
          className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
        >
          <span className="block text-center text-[11px] tracking-[-0.05px] py-2">
            앱다운로드
          </span>
        </li>
        <li
          className={`${styles['not-first-child']} relative w-full h-full text-[color:var(--m-colors-gray700)]`}
        >
          <span className="block text-center text-[11px] tracking-[-0.05px] py-2">
            PC버전
          </span>
        </li>
      </ul>

      <div className="mt-2 px-5 break-keep text-[11px] text-[#414141] tracking-[-0.5px]">
        <p>(주)에스에스지닷컴</p>
        <address className="leading-normal text-[#888] text-[10px] not-italic mt-0">
          <p>
            대표자: 이인영 <span className="mx-[5px] my-0">|</span>{' '}
            사업자등록번호: 870-88-01143
          </p>
          <p>통신판매업 신고번호: 제2022-서울강남-03751호</p>
          <p>
            개인정보보호책임자: 김우진 <span className="mx-[5px] my-0">|</span>{' '}
            주소: 서울특별시 강남구 테헤란로 231
          </p>
          <p>호스팅서비스 사업자: (주)에스에스지닷컴</p>
        </address>

        <div className="mt-[10px]">
          <p>우리은행 채무지급보증 안내</p>
          <p className="leading-normal text-[#888] text-[10px] mt-0">
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증
            계약을 체결하여 안전거래를 보장하고 있습니다.
          </p>
        </div>

        {/* 정책 및 약관 페이지 */}
        <div className="mt-[15px]">
          <h3 className="text-[0px]">SSG.COM 정책 및 약관</h3>
          <ul className="flex flex-wrap items-center justify-start">
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              회사소개
            </li>
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              이용약관
            </li>
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              <strong className="text-[#ff5b59]">개인정보처리방침</strong>
            </li>
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              청소년보호방침
            </li>
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              소비자분쟁해결기준
            </li>
            <li className={`relative mr-[7px] pr-[7px] ${styles['border-li']}`}>
              입점상담
            </li>
          </ul>
        </div>

        <div className="mt-[10px] pr-[40px] text-[#888]">
          <p className="pt-[5px]">
            ㈜에스에스지닷컴은 SSG.COM 실시간 항공권 서비스의 통신판매중개자로서
            거래 당사자가 아니며, 입점 판매사가 등록한 상품 정보 및 거래에 대해
            책임을 지지 않습니다.
          </p>
          <p className="pt-[5px]">
            ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한
            무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업
            진흥법 등에 의하여 엄격히 금지됩니다.
          </p>
        </div>
        <p className="mt-[4px] text-[10px] text-[#888]">
          Copyright ⓒ SSG.COM Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
