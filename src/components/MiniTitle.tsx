export default function MiniTitle({
  title,
  description = '',
}: {
  title: string
  description: string
}) {
  return (
    <div className="text-left mt-2.5">
      <h3
        className="text-xl leading-[normal] font-bold text-ellipsis"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-[13px] text-[color:var(--m-colors-gray700)] leading-[normal] overflow-hidden text-sis mt-1">
        {description}
      </p>
    </div>
  )
}
