import { useEffect, useState } from 'react'
import CategoryTab from '@/components/CategoryTab'
import DeliveryTab from '@/components/DeliveryTab'
import ImageBanner from '@/components/ImageBanner'
import ItemList from '@/components/ui/OneItemBundleList'
import { CategoryType } from '@/types/categoryType'
import { IdListType } from '@/types/productType'
import { getCategoryL } from '@/utils/categoryApi'
import NoItem from './NoItem'

export default function SpecialSSG() {
  // const bundleItems = await getBundleData()
  const bundleItems: IdListType[] | [] = []

  const deliveryList = [
    {
      id: 1,
      title: '백화점 상품',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/department_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_department.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
  ]

  const [categoryList, setCategoryList] = useState<CategoryType[]>([])

  // FIXME: 일단 대분류 카테고리
  useEffect(() => {
    async function fetchData() {
      const data = await getCategoryL()
      if (data) {
        setCategoryList(data)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <ImageBanner
        className=""
        alt="쓱특가 강력추천"
        src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
        priority
      />
      <div className="sticky z-[100] top-[46px] ">
        <CategoryTab data={categoryList} type="large" />
      </div>
      <DeliveryTab data={deliveryList} />
      <div>
        {bundleItems.length ? (
          bundleItems.map((itemId) => (
            <ItemList key={itemId.id} itemId={itemId.bundleId} />
          ))
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
