export default function Subject({ title }: { title: string }) {
  return (
    <div className="shadow-[inset_0_-1px_0_0_var(--m-colors-gray300)] ml-4 mb-[15px] pt-10">
      <h3 className="relative inline-block text-[19px] text-[color:var(--m-colors-gray900)] leading-[23px] font-bold pb-1 before:content-[''] before:absolute before:h-px before:bg-[color:var(--m-colors-gray900)] before:bottom-0 before:inset-x-0">
        {title}
      </h3>
    </div>
  )
}
