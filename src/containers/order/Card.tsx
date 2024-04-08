export default function Card({
  children,
  title,
  subTitle,
  changeBtn = false,
  // onChange,
}: {
  children: React.ReactNode
  title: string
  subTitle?: string
  changeBtn?: boolean
  // onChange?: () => void
}) {
  return (
    <div className="tracking-[-0.3px] bg-[color:var(--m-colors-white)] mx-3.5 my-5 rounded-xl">
      <article className="rounded-xl pt-5 pb-4 px-4">
        <div className="flex items-center justify-between leading-none mb-[15px]">
          <div className="pr-[10px] flex-1">
            <h2 className="text-[color:var(--m-colors-gray900)] text-lg font-bold tracking-[-0.3px] break-all inline-block align-middle">
              {title}
            </h2>
          </div>
          {changeBtn && (
            <div>
              <button
                type="button"
                className="border bg-[color:var(--m-colors-white)] text-[color:var(--m-colors-gray900)] h-[25px] text-xs flex leading-none items-center justify-center px-2 py-0 border-solid border-[#d8d8d8]"
              >
                변경
              </button>
            </div>
          )}
          {subTitle && (
            <div>
              <strong className="text-[color:var(--m-colors-gray900,#222222)] text-xl tracking-[-0.3px] font-bold">
                {subTitle}원
              </strong>
            </div>
          )}
        </div>

        {children}
      </article>
    </div>
  )
}
