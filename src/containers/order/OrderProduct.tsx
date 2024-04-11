import Image from 'next/image'
import { ItemPriceType } from '@/states/cartAtom'
import styles from '../cart/cart.module.css'

export default function OrderProduct({ item }: { item: ItemPriceType }) {
  return (
    <div className="flex items-center justify-between">
      <div className="relative w-[85px] h-[85px] aspect-[1]">
        <Image
          src={item.thumbnail}
          alt={item.id + item.productName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="grow shrink basis-0 relative ml-2.5">
        <p className="line-clamp-2 text-ellipsis text-sm leading-[1.38]">
          {item.seller && (
            <strong className="text-[color:var(--m-colors-gray900)] pr-1">
              {item.seller}
            </strong>
          )}
          <span className="text-[color:var(--m-colors-gray900)] relative break-all">
            {item.productName}
          </span>
        </p>

        {item.optionData[0].category !== '옵션없음' && (
          <div className="line-clamp-1 text-ellipsis text-[color:var(--m-colors-gray700)] text-xs mt-[5px]">
            <span>[옵션] </span>
            <span>
              {item.optionData.map((option) => (
                <span key={option.id} className={styles['child-span']}>
                  {option.value}
                </span>
              ))}
            </span>
          </div>
        )}
        <div className="min-h-[auto] flex items-center justify-between mt-[5px]">
          <div className="max-w-[160px] block">
            {item.originPrice !== item.buyPrice && (
              <div className="inline-flex items-center -mb-0.5">
                <del className="text-[#888888] leading-[normal] text-sm">
                  <span className="hidden">정상가격</span>
                  <em className="not-italic text-[13px]">
                    {(item.originPrice * item.count).toLocaleString('ko-KR')}원
                  </em>
                </del>
              </div>
            )}
            <div className="inline-flex items-center leading-[normal] break-all text-[#222222] ml-1">
              <span className="hidden">판매가격</span>
              <em className="not-italic text-sm font-semibold">
                {(item.buyPrice * item.count).toLocaleString('ko-KR')}
              </em>
              <span className="text-xs font-bold">원</span>
            </div>
          </div>

          <div>
            <span className="text-xs text-[#666666] leading-[1.38]">
              수량 {item.count}개
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
