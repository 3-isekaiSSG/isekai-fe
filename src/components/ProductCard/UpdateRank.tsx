export default function UpdateRank({
  rankChange = 0,
}: {
  rankChange?: number
}) {
  if (rankChange > 0)
    return (
      <div className="text-[color:var(--m-colors-primary)] h-5 text-[10px] bg-[color:var(--m-colors-white)] leading-[13px] align-top font-medium flex items-center ps-0.5 pe-1">
        <svg
          className="text-inherit w-3 h-3 leading-[1em]"
          viewBox="0 0 24 24"
          focusable="false"
          name="CaretUpSmallIcon"
        >
          <path d="M12 7.2L6 15.7714H18L12 7.2Z" fill="currentColor" />
        </svg>
        {rankChange}
        <span className="text-[0px]">순위상숭</span>
      </div>
    )

  if (rankChange < 0)
    return (
      <div className="text-[color:var(--m-colors-gray900)] h-5 text-[10px] bg-[color:var(--m-colors-white)] leading-[13px] align-top font-medium flex items-center ps-0.5 pe-1">
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          className="text-inherit w-3 h-3 leading-[1em]"
          name="CaretDownSmallIcon"
        >
          <path d="M12 16.7714L6 8.20001H18L12 16.7714Z" fill="currentColor" />
        </svg>
        {-rankChange}
        <span className="text-[0px]">순위하락</span>
      </div>
    )
}
