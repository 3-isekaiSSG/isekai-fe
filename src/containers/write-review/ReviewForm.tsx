'use client'

// import { useState } from 'react'

export default function ReviewForm() {
  // const [reviewFormData, setReviewFormData] = useState({
  //   rating: 0,
  //   comment: '',
  //   file: '',
  // })
  return (
    <form>
      <h3>별점을 선택해 주세요.</h3>
      <div>별점</div>

      <h3>고객님의 리뷰가 다른 고객들에게 도움이 될 수 있어요!</h3>
      <textarea
        className=""
        placeholder="리뷰"
        // value={reviewFormData.comment}
        // onChange={(e) =>
        //   setReviewFormData(...reviewFormData, { comment: e.target.value })
        // }
        required
      />
      <div>앨범보기 사진촬영 동영상</div>
    </form>
  )
}
