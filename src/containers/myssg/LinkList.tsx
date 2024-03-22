import Link from 'next/link'
import style from './myssg.module.css'
// import { LinkType, LinkListContents } from './states'
// import { useEffect, useState } from 'react'

// function LinkContent({ items }: { items: LinkType[] }) {
//   return (
//     <ul className={style.myssg_manage_list}>
//       {items.map((item) => (
//         <li key={item.id}>
//           <Link href={item.id ? item.url : '/'} className={style.clickable}>
//             {item.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

// function LinkContents({ items }: { items: LinkListContents[] }) {
//   // const linkData = useState<LinkType[]>([])

//   return (
//     <div className={style.myssg_manage_sec}>
//       {items.map((item) => (
//         <div key={item.id} className={style.myssg_manage_conts}>
//           <h3 className={style.myssg_manage_title}>{item.title}</h3>
//           <LinkContents key={item.id} />
//         </div>
//       ))}
//     </div>
//   )
// }

export default function LinkList() {
  // const linkData = useState<LinkListContents[]>([])

  // return <LinkContents items={linkData} />

  return (
    <div className={style.myssg_manage_sec}>
      <div className={style.myssg_manage_conts}>
        <h3 className={style.myssg_manage_title}>나의 주문관리</h3>
        <ul className={style.myssg_manage_list}>
          <li>
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_주문배송조회"
            >
              주문/배송조회
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/productMng/purchaseList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_온라인매장구매내역"
            >
              구매 내역
            </Link>
          </li>
          <li>
            <Link
              href="https://m-triip.ssg.com/flight/myssg/rsvtList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_항공권예약조회"
            >
              항공권 예약조회
            </Link>
          </li>
          <li>
            <Link
              href="https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_호텔예약조회"
            >
              호텔 예약조회
            </Link>
          </li>
          <li>
            <Link
              href="https://pay.ssg.com/m/giftOrder/receiver/orderInfo.ssg"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_선물함"
            >
              선물함
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/productMng/frequentlyOrderItem.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_자주구매상품"
            >
              자주구매 상품
            </Link>
          </li>
          <li>
            <Link
              href="https://pay.ssg.com/m/myssg/perdc-shpp-mng.ssg"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_정기배송설정관리"
            >
              정기배송 설정 관리
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.myssg_manage_conts}>
        <h3 className={style.myssg_manage_title}>나의 혜택 관리</h3>
        <ul className={style.myssg_manage_list}>
          <li>
            <Link
              href="https://m.ssg.com/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_쿠폰"
            >
              쿠폰
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_SSGMONEY"
            >
              SSG MONEY
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/moneyMng/spointMain.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_신세계포인트"
            >
              신세계포인트
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/moneyMng/pinmoneySavedMain.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_미식MONEY"
            >
              미식 MONEY
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/manageBenefit.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_맘키즈클럽관리"
            >
              맘키즈 클럽 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/moneyMng/ssgVoucherSavedMain.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_SSG VOUCHER"
            >
              SSG VOUCHER
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.myssg_manage_conts}>
        <h3 className={style.myssg_manage_title}>나의 활동관리</h3>
        <ul className={style.myssg_manage_list}>
          <li>
            <Link
              href="https://m.ssg.com/myssg/myClip/main.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_MY클립"
            >
              좋아요
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/pdtEvalList.ssg?_mpop=new&amp;quick=pdtEvalList&amp;tabDiv=item"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_내상품평"
            >
              상품 리뷰
            </Link>
          </li>
          <li>
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfoCoolerBagInfo.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_새벽배송알비백관리"
            >
              새벽배송 알비백 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/eventEntryStatusList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_이벤트참여현황"
            >
              이벤트 참여현황
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/counselList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_EMAIL답변확인"
            >
              e-mail 답변확인
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/postngQna.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_상품Q&amp;A"
            >
              상품 Q&amp;A
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/itemNotiList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_입고알림내역"
            >
              입고알림내역
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/urrEncoreList?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_우르르앵콜내역"
            >
              우르르 앵콜내역
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/eventNotiList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_행사알림내역"
            >
              행사알림내역
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.myssg_manage_conts}>
        <h3 className={style.myssg_manage_title}>나의 정보관리</h3>
        <ul className={style.myssg_manage_list}>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/password.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_회원정보변경"
            >
              회원정보 변경
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/changePwd.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_비밀번호변경"
            >
              비밀번호 변경
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_배송지관리"
            >
              배송지 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_맞춤정보관리"
            >
              맞춤정보 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/member/infoRcvAgree.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_마케팅정보수신동의"
            >
              마케팅 정보 수신 동의
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/infoUtlAgree.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_개인정보제3자제공동의"
            >
              개인정보 제3자 제공 동의
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/alln/membership.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_제휴멤버십관리"
            >
              제휴 멤버십 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/manageLoginInfo.ssg?_mpop=new"
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_자동로그인 관리"
              className={style.clickable}
            >
              로그인 정보 관리
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/main.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_SNS연결설정"
            >
              SNS 연결 설정
            </Link>
          </li>
          <li>
            <Link
              href="https://member.ssg.com/m/myssg/myinfoMng/withdrawMember.ssg?_mpop=new"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_회원탈퇴"
            >
              회원 탈퇴
            </Link>
          </li>
          <li>
            <Link
              href="https://m.ssg.com/myssg/personalDeleteInfo.ssg"
              className={style.clickable}
              data-react-tarea="MYSSG|M_MY_SSG_카테고리_개인정보관리"
            >
              개인정보 관리
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
