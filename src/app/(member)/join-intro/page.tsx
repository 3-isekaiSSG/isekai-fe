import style from '@/components/join.module.css'
import ToJoinAuthBtn from '@/components/ToJoinAuthBtn'
import SimpleJoin from '@/components/SimpleJoin'

export default function Page() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
      <div className={`${style.cmem_card} ${style.cmem_card_intergrate}`}>
        <div className={style.cmem_join_desc3}>
          <p className={style.cmem_join_desc_tit}>
            믿고 사는 즐거움
            <br />
            SSG.COM에 오신 것을 환영합니다.
          </p>
        </div>
        <div className={style.cmem_card_tit}>
          <h3>신세계포인트 통합회원</h3>
        </div>
        <p className={style.cmem_card_subtit}>
          신세계 유니버스 클럽 3개월 무료체험이 제공됩니다.
          <br />
          매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
        </p>
        <p className={style.cmem_card_subtit}>
          * 멤버십은 3개월 후 자동 해지 됩니다.
        </p>
        <ToJoinAuthBtn />
      </div>
      <SimpleJoin />
    </div>
  )
}
