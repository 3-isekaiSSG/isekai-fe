import { CategoryMType } from '@/types/categoryType'
import Image from 'next/image'
import Link from 'next/link'

export default function MCategory({
  largeName,
  mediumData,
}: {
  largeName: string
  mediumData: CategoryMType[] | []
}) {
  return (
    <section className="px-4 py-0 mt-10">
      <div className="relative z-10 flex items-end text-left">
        <div className="min-w-full mr-2.5">
          <h3 className="text-xl leading-[normal] font-bold">카테고리</h3>
        </div>
      </div>
      <div className="grid gap-2.5 grid-cols-4 py-[15px]">
        {mediumData &&
          mediumData.map(
            (item) =>
              item.id !== 0 && (
                <Link
                  key={item.id}
                  href={`/category/${largeName}/${encodeURIComponent(item.mediumName)}`}
                  className="relative block"
                >
                  <div className="relative aspect-[1] w-full h-auto">
                    <Image
                      alt={item.mediumName}
                      src={`${item.mediumImg}`}
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover' }}
                      className="rounded-[30%]"
                    />
                  </div>
                  <p className="text-xs text-[color:var(--m-colors-gray700)] text-center mt-[5px]">
                    {item.mediumName}
                  </p>
                </Link>
              ),
          )}
      </div>
    </section>
  )
}
