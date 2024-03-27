import Divider from '@/components/Divider'
import MCategory from './MCategory'
import LCategoryBest from './LCategoryBest'

export default function CategoryLAll({ largeName }: { largeName: string }) {
  return (
    <>
      <MCategory largeName={largeName} />
      <Divider height={20} unit="px" color="var(--m-colors-gray150)" />
      <LCategoryBest largeName={largeName} />
    </>
  )
}
