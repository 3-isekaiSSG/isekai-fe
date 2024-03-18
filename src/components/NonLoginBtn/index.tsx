import style from '@/components/login.module.css'

export default function NonLoginBtn() {
  return (
    <div className={style.cmem_btn_area}>
      <ul>
        <li>
          <button
            type="button"
            className={`${style.cmem_btn} ${style.cmem_btn_blkline3}`}
            // onClick="goCancel();"
          >
            취소
          </button>
        </li>
        <li>
          <button
            type="submit"
            className={`${style.cmem_btn} ${style.cmem_btn_black2}`}
          >
            조회하기
          </button>
        </li>
      </ul>
    </div>
  )
}
