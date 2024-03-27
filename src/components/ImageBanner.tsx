import Image from 'next/image'

export default function ImageBanner({
  alt,
  src,
  priority = false,
  className = '',
}: {
  alt: string
  src: string
  priority: boolean
  className: string
}) {
  return (
    <div className={className}>
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority={priority}
      />
    </div>
  )
}
