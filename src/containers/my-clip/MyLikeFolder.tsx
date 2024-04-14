import style from './mylike.module.css'

export default function MyLikeFolder() {
  return (
    <div className={style.mylike_folder}>
      <div className={style.mylike_folder_slider}>
        <ul className={style.mylike_folder_list}>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_all} ${style.clickable} ${style.on}`}
              type="button"
            >
              <span
                className={`${style.mylike_folder_thmb} before:bg-[var(--m-colors-primary)]`}
              />
              <em className={`${style.mylike_folder_name} not-italic`}>
                전체보기
              </em>
            </button>
          </li>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_create} ${style.clickable}`}
              type="button"
            >
              <span className={style.mylike_folder_thmb} />
              <em className={`${style.mylike_folder_name} not-italic`}>
                새폴더
              </em>
            </button>
          </li>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_manage} ${style.clickable}`}
              type="button"
            >
              <span className={style.mylike_folder_thmb} />
              <em className={`${style.mylike_folder_name} not-italic`}>
                폴더관리
              </em>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
