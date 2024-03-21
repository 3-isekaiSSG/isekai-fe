import style from './myssg.module.css'

export default function ManagingReview() {
  return (
    <div className={style.myssg_sec}>
      <div className={style.myssg_sec_conts}>
        <a
          href="/myssg/activityMng/pdtEvalList.ssg?_mpop=new&amp;quick=pdtEvalList&amp;tabDiv=item"
          className={style.myssg_sec_title}
        >
          상품 리뷰 작성
        </a>
        <p className={style.myssg_desc_text}>
          {' '}
          믿고 사는 즐거움을 리뷰로 남겨주세요!
          <br /> 다른 고객들에게 많은 도움이 됩니다.
          <br /> 리뷰 작성 시, 스페셜 리뷰 <strong>1,000</strong>원, 한달 사용
          사용 리뷰는 <strong>300</strong>원, 쓱찬스/일반 리뷰는{' '}
          <strong>50</strong>원의 <strong>SSG MONEY</strong>가 지급됩니다.{' '}
        </p>
        <div className={style.myssg_writable_review}>
          <div className={style.myssg_writable_review_content}>
            <strong className={style.myssg_writable_review_title}>
              지금 작성 가능한 리뷰
            </strong>
            <div className={style.myssg_writable_review_list}>
              <a
                href="/myssg/activityMng/pdtEvalList.ssg?page=1&amp;tabDiv=item&amp;siteNo=&amp;postngClsCd=10&amp;sortCd="
                className={`${style.myssg_review_item} ${style.ty_zero}`}
              >
                <span className={style.myssg_review_item_name}>일반</span>
                <span className={style.myssg_review_item_count}>0</span>
              </a>
              <a
                href="/myssg/activityMng/pdtEvalList.ssg?page=1&amp;tabDiv=item&amp;siteNo=&amp;postngClsCd=80&amp;sortCd= "
                className={`${style.myssg_review_item} ${style.ty_zero}`}
              >
                <span className={style.myssg_review_item_name}>스페셜</span>
                <span className={style.myssg_review_item_count}>0</span>
              </a>
            </div>
          </div>
        </div>
        <p className={style.myssg_review_desc}>
          {' '}
          당신의 소중한 리뷰를 기다립니다.{' '}
        </p>
      </div>
    </div>
  )
}
