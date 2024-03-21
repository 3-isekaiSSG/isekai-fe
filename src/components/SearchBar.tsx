'use client'

export default function SearchInputBar({
  onDismiss,
}: {
  onDismiss: () => void
}) {
  return (
    <header className="h-[56px] py-[8px] pr-[10px] pl-[16px]">
      <div className="flex items-center">
        <button type="button" onClick={onDismiss}>
          닫기
        </button>
      </div>
    </header>
  )
}
