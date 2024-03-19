interface Props {
  title: string
  description: string
}

export default function MiniTitle({ title, description = '' }: Props) {
  return (
    <div className="text-left mt-2.5">
      <h3 className="text-xl leading-[normal] font-bold text-ellipsis">
        {title}
      </h3>
      <p className="text-[13px] text-[color:var(--m-colors-gray700)] leading-[normal] overflow-hidden text-ellipsis mt-1">
        {description}
      </p>
    </div>
  )
}
