import Link from 'next/link'
import style from '@/containers/login/login.module.css'

export default function NonBtn() {
  // 현재 페이지가 non-login이면 mt-[20px], non-order이면 mt-[30px]
  const btnStyle = 'mt-5'
  // const btnOrder = 'mt-[30px]'

  return (
    <div className={btnStyle}>
      <ul className="table table-fixed w-full">
        <li className="table-cell align-center text-center text-black text-sm font-medium leading-[50px] h-[50px] border border-black block text-sm">
          <Link href="/login">취소</Link>
        </li>
        <li className="table-cell text-white bg-black border border-black text-sm leading-[50px] h-[50px]">
          <button
            type="submit"
            className={`${style.cmem_btn} ${style.cmem_btn_black2}`}
          >
            <span>조회하기</span>
            {/* Todo: 현재 페이지에 따라 조회하기 / 주문하기 */}
          </button>
        </li>
      </ul>
    </div>
  )
}
