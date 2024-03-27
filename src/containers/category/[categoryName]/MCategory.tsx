import Image from 'next/image'
import Link from 'next/link'

export default function MCategory({ largeName }: { largeName: string }) {
  // TODO: largeName으로 중분류 카테고리 불러오기
  const data = [
    {
      id: 1,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
    {
      id: 2,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
    {
      id: 3,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
    {
      id: 11,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
    {
      id: 21,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
    {
      id: 31,
      medium: 'ㅇㅅㅇ',
      imageUrl: '/images/categoryL/1.png',
    },
  ]

  return (
    <section className="mt-10 px-4 py-0">
      <div className="flex relative text-left z-10 items-end">
        <div className="min-w-full mr-2.5">
          <h3 className="text-xl leading-[normal] font-bold">카테고리</h3>
        </div>
      </div>
      <div className="grid gap-2.5 grid-cols-4 py-[15px]">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/category/${largeName}/${item.medium}`}
            className="block relative"
          >
            <div className="relative aspect-[1] w-full h-auto">
              <Image
                alt={item.medium}
                src={`${item.imageUrl}`}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-xs text-[color:var(--m-colors-gray700)] text-center mt-[5px]">
              {item.medium}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
