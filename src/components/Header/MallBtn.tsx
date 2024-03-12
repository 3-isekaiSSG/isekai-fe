'use client'

export default function MallBtn() {
  // TODO: 클릭 시 몰 더보기 띄움
  return (
    <button
      className="leading-[inherit] h-10 "
      type="button"
      aria-label="몰 목록 보기"
    >
      <svg
        className="m-1"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.375 5.68701L7 8.31201L9.625 5.68701"
          stroke="black"
          strokeWidth="1.5"
        />
        <circle cx="7" cy="7" r="6.5" stroke="#FAFAFA" />
      </svg>
    </button>
  )
}
