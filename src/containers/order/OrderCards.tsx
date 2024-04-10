'use client'

import { useState } from 'react'
import Card from './Card'
import OrderProduct from './OrderProduct'
import styles from './order.module.css'

export default function OrderCards() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <Card title="배송지: 배송지이름" changeBtn>
        <div className="mt-[-15px] pt-2.5">
          <p className="text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
            주소 ㄱㄱ
          </p>
          <div className="flex justify-between items-center mx-0 my-2.5">
            <span className="text-xs text-[color:var(--m-colors-gray500)] tracking-[-0.3px]">
              이름 / 전화번호
            </span>
          </div>
        </div>
      </Card>

      <Card title="배송 요청사항" changeBtn>
        <div className="mt-[-15px] pt-2.5">
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              수령위치
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              고른거
            </dd>
          </dl>
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              배송 요청사항
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              고른거
            </dd>
          </dl>
        </div>
      </Card>

      <Card title="할인혜택">
        <div className="mt-[-15px] pt-2.5">
          <dl className="flex justify-between items-center tracking-[-0.3px] leading-[1.3] mt-0">
            <dt className="grow shrink basis-0">
              <span className="mb-[-5px] text-[color:var(--m-colors-gray900)] text-sm">
                상품할인
              </span>
            </dt>
            <dd className="w-[110px] text-right break-keep self-start">
              <span className="text-[color:var(--m-colors-secondary,#222222)] text-sm font-normal">
                -ㅇㅅㅇ원
              </span>
            </dd>
          </dl>
          <dl className="flex justify-between items-center tracking-[-0.3px] leading-[1.3] mt-[10px]">
            <dt className="grow shrink basis-0">
              <span className="mb-[-5px] text-[color:var(--m-colors-gray900)] text-sm">
                쿠폰할인(0장보유)
              </span>
            </dt>
            <dd className="w-[110px] text-right break-keep self-start">
              <button
                type="button"
                className="h-8 text-[13px] border border-[color:var(--m-colors-gray350)] text-[--m-colors-gray800] box-border tracking-[-0.03em] px-4 py-0 border-solid"
              >
                쿠폰선택
              </button>
            </dd>
          </dl>
        </div>
      </Card>

      <Card title="SSG MONEY: 0원">
        <div className="mt-[-15px] pt-2.5">
          <div className="flex whitespace-nowrap">
            <span className="align-top inline-block w-[72%] border border-neutral-200 box-border border-solid border-r-[0]">
              <input
                type="text"
                placeholder="0원"
                className="h-[38px] block w-full text-[#222] text-sm tracking-[-0.3px] appearance-none shadow-none box-border text-right p-[15px] rounded-none border-solid"
              />
            </span>
            <button
              type="button"
              className="flex flex-none h-10 leading-none justify-center items-center text-sm text-center bg-[color:var(--m-colors-white)] border border-[color:var(--m-colors-gray300)] w-[28%] border-l-[none] border-solid"
            >
              <span className="text-[color:var(--m-colors-gray900)] tracking-[-0.3px] inline-block break-all leading-[21px]">
                전액사용
              </span>
            </button>
          </div>
        </div>
      </Card>

      <Card title="신세계포인트: 0원">
        <div className="mt-[-15px] pt-2.5">
          <div className="flex whitespace-nowrap">
            <span className="align-top inline-block w-[72%] border border-neutral-200 box-border border-solid border-r-[0]">
              <input
                type="text"
                placeholder="0원"
                className="h-[38px] block w-full text-[#222] text-sm tracking-[-0.3px] appearance-none shadow-none box-border text-right p-[15px] rounded-none border-solid"
              />
            </span>
            <button
              type="button"
              className="flex flex-none h-10 leading-none justify-center items-center text-sm text-center bg-[color:var(--m-colors-white)] border border-[color:var(--m-colors-gray300)] w-[28%] border-l-[none] border-solid"
            >
              <span className="text-[color:var(--m-colors-gray900)] tracking-[-0.3px] inline-block break-all leading-[21px]">
                전액사용
              </span>
            </button>
          </div>
        </div>
      </Card>

      <Card title="결제방법">
        <div className="mt-[-15px] pt-2.5">
          <div
            aria-hidden="true"
            className="flex items-center flex-row w-full h-11"
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="category-radio-order"
              className="inline-flex items-center align-top relative"
            >
              <input
                readOnly
                type="radio"
                name="category-radio"
                id="category-radio-order"
                value="category-radio-order"
                className="h-px w-px overflow-hidden absolute -m-px p-0 border-0"
                style={{ clip: 'rect(0px, 0px, 0px, 0px)' }}
              />
              <span
                className={`box-border transition-shadow duration-[250ms] ease-[ease] delay-[0s] inline-flex items-center justify-center w-5 h-5 border rounded-full border-solid bg-[color:var(--m-colors-white)] 
                  
                  ${styles.checked}`}
              />
            </label>
            <h3 className="text-[color:var(--m-colors-gray900)] ml-3 mr-0 my-0 font-bold text-base">
              일반결제
            </h3>
          </div>
        </div>
      </Card>

      <Card title="결제예정금액" subTitle="총결제금액">
        <div className="before:content-[''] before:block before:mt-[-0.01rem] before:border-t-neutral-100 before:pt-[0.01rem] before:border-t before:border-solid before:inset-x-4">
          <div className="pt-4">
            <dl className="table w-full table-fixed">
              <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
                주문금액
              </dt>
              <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all text-right">
                할인을 포함한 ~~원
              </dd>
            </dl>
            <dl className="table w-full table-fixed mt-[5px]">
              <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
                배송비
              </dt>
              <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all text-right">
                0원
              </dd>
            </dl>
            <dl className="table w-full table-fixed mt-[5px]">
              <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
                할인금액
              </dt>
              <dd className="table-cell text-[color:var(--m-colors-primary)] text-sm tracking-[-0.3px] leading-[17px] break-all text-right">
                할인금액~~원
              </dd>
            </dl>
            <ul className="relative text-[13px] clear-both pt-[5px]">
              <li className="flex justify-between items-center relative tracking-[-0.3px] leading-normal text-[#888888] pl-[11px] before:absolute before:content-[''] before:inline-block before:h-[5px] before:w-[5px] before:border-l-[#888888] before:border-b-[#888888] before:border-l before:border-solid before:border-b before:left-px before:top-1">
                <span className="grow shrink basis-0 overflow-hidden text-sm whitespace-nowrap text-ellipsis">
                  상품할인
                </span>
                <span className="flex-none w-[105px] font-medium text-right">
                  할인금액~~원 동일
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="tracking-[-0.3px] bg-[color:var(--m-colors-white)] mx-3.5 my-5 rounded-xl">
        <article className="rounded-xl pt-5 pb-4 px-4">
          <div className="relative">
            <span className="min-w-[20px] min-h-[20px] block text-[#222] text-sm tracking-[-0.3px] leading-[1.33]">
              주문정보 및 서비스 약관에 동의합니다.
            </span>
            <div
              className={`absolute w-5 h-5 right-0 top-0 ${toggle && 'rotate-180'}`}
            >
              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                className={`absolute w-5 h-5 right-0 top-0 before:content-[''] before:absolute before:border-t-[#969696] before:border-b-transparent before:border-x-[5px] before:border-x-transparent before:border-y-[6px] before:border-solid before:right-[5px] before:top-[7px]`}
              >
                <span className="hidden">더보기</span>
              </button>
            </div>
          </div>
          {toggle && (
            <div className="block mt-[15px]">
              <div className="flex w-full pl-[15px] relative before:absolute  before:content-[''] before:inline-block before:h-1.5 before:w-[5px] before:border-l-[#b8b8b8] before:border-b-[#b8b8b8] before:border-l before:border-solid before:border-b before:left-[5px] before:top-[6px]">
                <span className="text-[#222] text-xs tracking-[-0.3px] flex-1">
                  전자금융거래 이용약관
                </span>
                <button
                  type="button"
                  className="text-[#888888] text-xs tracking-[-0.3px] underline text-right"
                >
                  약관보기
                </button>
              </div>
            </div>
          )}
        </article>

        <div className="overflow-hidden bg-neutral-200 rounded-br-xl rounded-bl-xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-[color:var(--m-colors-primary,#ff5452)] text-white h-[50px] text-lg leading-none flex items-center justify-center w-full font-bold"
            >
              결제하기
            </button>
          </div>
        </div>
      </div>

      <Card title="주문자 정보" changeBtn>
        <div className="mt-[-15px] pt-2.5">
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              주문자명
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              이름
            </dd>
          </dl>
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              연락처
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              ㅇㅅㅇ
            </dd>
          </dl>
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              이메일
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              ㅇㅅㅇ
            </dd>
          </dl>
          <dl className="table w-full table-fixed mt-[5px]">
            <dt className="table-cell w-[120px] text-[color:var(--m-colors-gray500)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              품절시 환불
            </dt>
            <dd className="table-cell text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
              ㅇㅅㅇ
            </dd>
          </dl>
        </div>
      </Card>

      {/* TODO: 반복 ㄱㄱ */}
      <Card title="쓱배송">
        <ul className="relative pb-1">
          <li className="px-0 py-3 border-t-[#f0f0f0] border-t border-solid">
            <OrderProduct />
          </li>
          <li className="px-0 py-3 border-t-[#f0f0f0] border-t border-solid">
            <OrderProduct />
          </li>
        </ul>
      </Card>
      <Card title="택배배송">
        <ul className="relative pb-1">
          <li className="px-0 py-5 border-t-[#f0f0f0] border-t border-solid">
            <OrderProduct />
          </li>
          <li>
            <OrderProduct />
          </li>
        </ul>
      </Card>
    </>
  )
}
