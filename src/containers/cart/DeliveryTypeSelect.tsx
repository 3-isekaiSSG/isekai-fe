'use client'

import styles from './cart.module.css'

export default function DeliveryTypeSelect({
  type,
  title,
}: {
  type: string
  title: string
}) {
  // TODO: 클릭 시 해당 type 제품 전체 선택
  return (
    <div
      className={`${type === 'emart' ? 'bg-[color:#ffd040]' : 'bg-[color:#d6d2c4]'} sticky z-20 transition-[top] duration-[0.1s] ease-[cubic-bezier(0.5,1,0.89,1)] flex justify-start items-center px-4 py-[15px] top-[45px]`}
    >
      <div className="flex items-center">
        <span className={styles['input-span']}>
          <input
            className={styles.blind}
            type="checkbox"
            id={`check-${type}`}
            name={`check-${type}`}
            data-tracking-value="전체선택"
          />
          <label htmlFor={`check-${type}`}>
            <span className={styles.blind}>전체선택</span>
          </label>
        </span>
        <label htmlFor={`check-${type}`} className="inline-block leading-[1.4]">
          <h3 className="text-[15px] text-[color:var(--m-colors-gray900)] font-bold">
            {title}
          </h3>
        </label>
      </div>
    </div>
  )
}
