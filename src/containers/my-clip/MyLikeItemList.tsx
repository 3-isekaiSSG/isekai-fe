import style from './mylike.module.css'

export default function MyLikeItemList() {
  return (
    <div className={style.mylike_list_wrap}>
      <div className={style.cmitem_grid}>
        <ul className={style.ssgitem_grid} id="myClip">
          <li className={style.ssgitem_grid_item}>상품정보</li>
        </ul>
      </div>
    </div>
  )
}
