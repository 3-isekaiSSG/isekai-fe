import Image from 'next/image'
import { ReviewContentType } from '@/types/ReviewType'

export default function ReviewPhoto({
  reviews,
}: {
  reviews: ReviewContentType[]
}) {
  return (
    <ul className="overflow-x-auto flex whitespace-nowrap -mx-5 my-0 px-5 py-0">
      {reviews.map((review: ReviewContentType) => (
        <li
          key={review.reviewId}
          className="min-w-[25%] h-auto align-top inline-block w-[111px] ml-0 mr-4 mt-0 rounded-lg"
        >
          <div className="w-full h-full bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden">
            <div className="relative w-full h-auto aspect-[1] bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden">
              <Image
                src={review.reviewImage}
                alt={review.reviewId.toString()}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                style={{
                  objectFit: 'cover',
                  borderRadius: '0.5rem !important',
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
