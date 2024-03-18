import DeliveryList from './DeliveryList'
import NoItem from './NoItem'
import ProductItem from './ProductItem'
import SpecialCategoryList from './SpecialCategoryList'

export default function SpecialToday() {
  const data = [
    {
      id: 0,
      bundleId: 111,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `인기 과일/채소 행사
  ~32% 할인`,
      minPrice: 18900,
      isLiked: false,
      buyNow: 10000,
    },
    {
      id: 1,
      bundleId: 222,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `클렌징 오일 / 폼+토너+앰플
  쓱1DAY, ~58% OFF`,
      minPrice: 18900,
      isLiked: false,
      isSale: {
        rate: 54,
        rawPrice: 47700,
        salePrice: 21900,
      },
    },
    {
      id: 2,
      bundleId: 333,
      imageUrl:
        'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
      vender: '자연맛남',
      title: `온 가족 신발로 추천
  추가 쿠폰 혜택`,
      minPrice: 18900,
      isLiked: false,
    },
  ]
  // const data: SpacialItemType[] | [] = []

  const CategoryList = [
    {
      id: 0,
      title: '오반장',
    },
    {
      id: 1,
      title: '전단행사',
    },
    {
      id: 2,
      title: '1+1',
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
  ]
  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <SpecialCategoryList data={CategoryList} isMore={false} />
      </div>
      <div className="flex items-center justify-between my-2.5 pr-4">
        <DeliveryList data={DeleveryList} />
      </div>
      <div>{data.length ? <ProductItem data={data} /> : <NoItem />}</div>
    </>
  )
}
