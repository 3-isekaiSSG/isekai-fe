import MiniTitle from '../ui/MiniTitle'
import styles from './ranking.module.css'

export default function Realtime() {
  // TODO: 실시간 집계 요청 시 시간 받아오기 일단 오늘 날짜 00시 01분
  const date = new Date()
  const referenceDate = `${date.getMonth() + 1}월 ${date.getDate()}일 00:01 기준`

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const bestList = [
    {
      id: 0,
      ranking: 1,
      changeRank: +6,
      title: '이글루아이스박스',
    },
    {
      id: 1,
      ranking: 2,
      changeRank: 0,
      title: '토마토퓨레',
    },
    {
      id: 2,
      ranking: 3,
      changeRank: +6,
      title: '폴로 뭐시기',
    },
    {
      id: 3,
      ranking: 4,
      changeRank: +6,
      title: 'ㅇㅅㅇ',
    },
    {
      id: 4,
      ranking: 5,
      changeRank: +4,
      title: '땅콩버터',
    },
  ]
  return (
    <div>
      <MiniTitle
        title="지금 이 순간, <br />많이 주문하는 상품이에요!"
        description={referenceDate}
      />
      {/* TODO: 스와이퍼 구현하기 */}
      <div className={styles.div}>실시간 상품 스와이퍼 ㄱㄱ</div>
    </div>
  )
}
