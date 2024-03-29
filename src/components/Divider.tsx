export default function Divider({
  height,
  color = 'var(--m-colors-current)',
}: {
  height: number
  color: string
}) {
  return <div className={`h-${height} bg-[color:${color}]`} />
}
