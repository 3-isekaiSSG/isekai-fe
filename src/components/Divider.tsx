export default function Divider({
  id,
  height,
  color = 'var(--m-colors-current)',
}: {
  id?: string | undefined
  height: number
  color?: string
}) {
  return <div id={id && id} className={`h-${height} bg-[color:${color}]`} />
}
