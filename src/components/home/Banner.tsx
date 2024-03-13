import Image from 'next/image'

export default function Banner() {
  return (
    <div className="mx-0 my-2.5 px-4 py-0">
      <Image
        alt="상품권 3% 할인"
        src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202403/2024030817154429409723604972_653.jpg&w=750&h=0"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  )
}
