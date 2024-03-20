import Image from 'next/image'

export default function ImageBanner({
  alt,
  src,
  priority = false,
}: {
  alt: string
  src: string
  priority: boolean
}) {
  return (
    <Image
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      priority={priority}
    />
  )
}
