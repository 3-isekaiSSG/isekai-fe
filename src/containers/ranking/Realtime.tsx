import MiniTitle from '../../components/MiniTitle'
import styles from './ranking.module.css'

export default function Realtime() {
  const date = new Date()
  const referenceDate = `${date.getMonth() + 1}월 ${date.getDate()}일 00:01 기준`

  return (
    <div>
      <MiniTitle
        title="지금 이 순간, <br />많이 주문하는 상품이에요!"
        description={referenceDate}
      />
      {/* 실시간 상품 랭킹 스와이퍼 */}
      <div className={styles.div}>실시간 상품</div>
    </div>
  )
}
