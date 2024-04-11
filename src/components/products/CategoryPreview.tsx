import { ProductCategoryType } from '@/types/productDataType'

export default function CategoryPreview({
  productCategoryData,
}: {
  productCategoryData?: ProductCategoryType
}) {
  return (
    <div className="px-4 py-5">
      <dl>
        <dt className="relative float-left w-20 text-[color:var(--m-colors-gray600,#777777)] leading-[1.35] mt-0.5">
          카테고리
        </dt>
        <dd className="ml-20">
          <span className="font-bold tracking-[-0.3px] text-[#222] mr-1">
            {productCategoryData?.largeName.name}
            <i className="relative inline-block w-1.5 h-2.5 ml-[3px] before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:-ml-0.5 before:border-r-[#222] before:border-t-[#222] before:border-t before:border-solid before:border-r before:scale-x-[1.2] before:scale-y-100 before:left-2/4 before:top-2/4" />
          </span>
          <span className="font-bold tracking-[-0.3px] text-[#222] mr-1">
            {productCategoryData?.mediumName.name}
            <i className="relative inline-block w-1.5 h-2.5 ml-[3px] before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:-ml-0.5 before:border-r-[#222] before:border-t-[#222] before:border-t before:border-solid before:border-r before:scale-x-[1.2] before:scale-y-100 before:left-2/4 before:top-2/4" />
          </span>
          <span className="font-bold tracking-[-0.3px] text-[#222] mr-1">
            {productCategoryData?.smallName.name}
          </span>
        </dd>
      </dl>
    </div>
  )
}
