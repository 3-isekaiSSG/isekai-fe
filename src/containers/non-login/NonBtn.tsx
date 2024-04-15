import Link from 'next/link'
import style from '@/containers/login/login.module.css'

export default function NonBtn() {
  const btnStyle = 'mt-5'

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
          </button>
        </li>
      </ul>
    </div>
  )
}
