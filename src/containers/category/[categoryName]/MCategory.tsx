import Image from 'next/image'
import Link from 'next/link'
import MiniTitle from '@/components/MiniTitle'
import { CategoryType } from '@/types/categoryType'

export default function MCategory({
  largeName,
  mediumData,
}: {
  largeName: string
  mediumData: CategoryType[] | []
}) {
  return (
    <section className="px-4 py-0 mt-10">
      <MiniTitle title="카테고리" description="" />

      <div className="grid gap-2.5 grid-cols-4 py-[15px]">
        {mediumData &&
          mediumData.map(
            (item) =>
              item.id !== 0 && (
                <Link
                  key={item.id}
                  href={`/category/${encodeURIComponent(largeName)}/${encodeURIComponent(item.name)}`}
                  className="relative block"
                >
                  <div className="relative aspect-[1] w-full h-auto">
                    <Image
                      alt={item.name}
                      src={`${item.img}`}
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover' }}
                      className="rounded-[30%]"
                    />
                  </div>
                  <p className="text-xs text-[color:var(--m-colors-gray700)] text-center mt-[5px]">
                    {item.name}
                  </p>
                </Link>
              ),
          )}
      </div>
    </section>
  )
}
