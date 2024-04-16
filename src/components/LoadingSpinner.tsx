import Image from 'next/image'

export default function LoadingSpinner() {
  return (
    <div className="absolute w-full h-full inline-flex items-center justify-center z-[9999] inset-0">
      <div className="w-8 h-8 relative">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="로딩 중"
          src="https://sstatic.ssgcdn.com/ui/m_ssg/img/design/ssg/loading_ssg.webp"
          loading="lazy"
          className="w-8 h-8"
        />
      </div>
    </div>
  )
}
