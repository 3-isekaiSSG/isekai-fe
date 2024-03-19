import NoItem from './NoItem'
import DeliveryList from './DeliveryList'
import SpecialCategoryList from './SpecialCategoryList'
import ItemList from '../ui/OneItemList'

/** TODO: 쿼리로 특가 데이터 받아오기 */
// const getBundleData = async () => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

// TODO: 무한스크롤 어떻게?
export default function SpecialAll() {
  // const bundleItems = await getBundleData()
  const bundleItems = [
    {
      id: 0,
      bundleId: 0,
    },
    {
      id: 1,
      bundleId: 1,
    },
    {
      id: 2,
      bundleId: 2,
    },
  ]

  const CategoryList = [
    {
      id: 0,
      title: '전체',
    },
    {
      id: 1,
      title: '패션의류',
    },
    {
      id: 2,
      title: '패션잡화',
    },
    {
      id: 3,
      title: '명품',
    },
    {
      id: 4,
      title: '뷰티',
    },
    {
      id: 5,
      title: '스포츠/레저',
    },
    {
      id: 6,
      title: '생활/주방',
    },
    {
      id: 7,
      title: '가구/인테리어',
    },
    {
      id: 8,
      title: '유아동',
    },
    {
      id: 9,
      title: '디지털/렌탈',
    },
    {
      id: 10,
      title: '여행/e쿠폰/문구/도서',
    },
    {
      id: 11,
      title: '신선식품',
    },
    {
      id: 12,
      title: '가공/건강식품',
    },
    {
      id: 13,
      title: '반려동물',
    },
  ]
  const DeleveryList = [
    {
      id: 1,
      title: '쓱배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/emart_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_emart.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
    {
      id: 2,
      title: '새벽배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/earlymorning_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_earlymorning.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
    {
      id: 3,
      title: '트레이더스 쓱배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/traders_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_traders.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
    {
      id: 4,
      title: '백화점 상품',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/department_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_department.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
  ]

  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <SpecialCategoryList data={CategoryList} isMore />
      </div>
      <div className="flex items-center justify-between my-2.5 pr-4">
        <DeliveryList data={DeleveryList} />
      </div>
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
