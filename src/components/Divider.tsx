export default function Divider({
  height,
  unit,
}: {
  height: number
  unit: string
}) {
  return <div className={`h-[${height}${unit}]`} />
}
