export default function Divider({
  height,
  unit,
  color = 'var(--m-colors-current)',
}: {
  height: number
  unit: string
  color: string
}) {
  return <div className={`h-[${height}${unit}] bg-[color:${color}]`} />
}
