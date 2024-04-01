import Image from 'next/image'

export default function Loading() {
  return (
    <div className="w-8 h-8 ">
      <Image
        fill
        alt="로딩 중"
        src="https://sstatic.ssgcdn.com/ui/m_ssg/img/design/ssg/loading_ssg.webp"
        loading="lazy"
        className="styled-image loaded css-ihz3he"
      />
    </div>
  )
}
