import Image from 'next/image'

export default function OrderProduct() {
  return (
    <div className="flex items-start justify-between">
      <div className="relative w-[85px] h-[85px] aspect-[1]">
        <Image
          src="https://sitem.ssgcdn.com/40/77/21/item/2097001217740_i1_140.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="grow shrink basis-0 relative ml-2.5">
        <p className="line-clamp-2 text-ellipsis text-sm leading-[1.38]">
          <strong className="text-[color:var(--m-colors-gray900)] pr-1">
            벤더
          </strong>
          <span className="text-[color:var(--m-colors-gray900)] relative break-all">
            상품명상품명상상품명상상품명상품명상상품명상상품명상품명상상품명상상품명상품명상상품명상상품명상품명상상품명상
          </span>
        </p>

        <div className="line-clamp-1 text-ellipsis text-[color:var(--m-colors-gray700)] text-xs mt-[5px]">
          <span>[옵션]</span>
          <span>
            종류종류종류종류종류종류종류종류종류종류종류종류종류종류종류
          </span>
        </div>

        <div className="min-h-[auto] flex items-center justify-between mt-[5px]">
          <div className="max-w-[160px] block">
            {/* 할인이면 */}
            <div className="inline-flex items-center -mb-0.5">
              <del className="text-[#888888] leading-[normal] text-sm">
                <span className="hidden">정상가격</span>
                <em className="not-italic text-[13px]">
                  {Number(1234).toLocaleString('ko-KR')}원
                </em>
              </del>
            </div>

            <div className="inline-flex items-center leading-[normal] break-all text-[#222222] ml-1">
              <span className="hidden">판매가격</span>
              <em className="not-italic text-sm font-semibold">
                {Number(1234).toLocaleString('ko-KR')}
              </em>
              <span className="text-xs font-bold">원</span>
            </div>
          </div>

          <div>
            <span className="text-xs text-[#666666] leading-[1.38]">
              수량 N개
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
