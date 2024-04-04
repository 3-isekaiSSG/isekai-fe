import styles from './product.module.css'

export default function NoItem() {
  return (
    <div className="h-[80vh]">
      <div
        className={`h-[350px] text-sm tracking-[-0.021em] text-[color:var(--m-colors-gray600)] text-center ${styles.noImage}`}
      >
        <p className="text-2xl font-bold tracking-[-0.02em] text-[color:var(--m-colors-gray900)]">
          상품 준비중
        </p>
        좋은 상품으로 찾아 뵙겠습니다.
      </div>
    </div>
  )
}
