'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { SlArrowDown } from 'react-icons/sl'
import { useRecoilState } from 'recoil'
import {
  depthBottomSheetState,
  selectedOptionsState,
} from '@/states/optionAtom'
import { ChildOptionsType, OptionCategoryType } from '@/types/OptionType'
import { getOptionsToParent } from '@/utils/optionApi'

export function OptionModalChild({
  handleClose,
  productCode,
  optionData,
}: {
  handleClose: () => void
  productCode: number
  optionData?: OptionCategoryType
}) {
  const [childOptions, setChildOptions] = useState<ChildOptionsType[]>([])

  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsState)

  const handleClick = (item: ChildOptionsType) => {
    const selectedDepth = optionData!.depth - 1

    setSelectedOptions((prev) => {
      const existedIndex = prev.length > selectedDepth
      if (existedIndex) {
        return [...prev.slice(0, selectedDepth), item]
      }
      return [...prev, item]
    })

    handleClose()
  }

  useEffect(() => {
    const parentId =
      selectedOptions[optionData!.depth - 2]?.optionsId || undefined

    const fetchData = async () => {
      const res = await getOptionsToParent('products', productCode, parentId)
      setChildOptions(res)
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-[400px] max-h-[80vh] mx-[15px] my-3">
      <button
        type="button"
        onClick={handleClose}
        className="flex w-full relative h-[42px] box-border border border-neutral-200 bg-[color:var(--m-colors-white)] text-[color:var(--m-colors-gray900)] mt-3 mb-2 pl-[15px] pr-4 py-0 rounded-[5px] border-solid items-center"
      >
        <span className="overflow-hidden inline-block w-full text-[13px] leading-10 tracking-[-0.3px] align-top whitespace-nowrap text-ellipsis text-left">
          선택하세요. ({optionData!.category})
        </span>
        <SlArrowDown className="rotate-180" />
      </button>
      <ul className="overflow-auto pb-6">
        {childOptions.map((item) => {
          const isSelected = selectedOptions.some(
            (selectedItem) => selectedItem.optionsId === item.optionsId,
          )
          return (
            <li
              key={item.id}
              className={`h-[50px] px-2.5 mt-2 rounded-[5px] border border-solid ${isSelected ? 'border-[color:var(--m-colors-black)]' : 'border-[color:var(--m-colors-gray200)]'}`}
            >
              <button
                onClick={() => handleClick(item)}
                type="button"
                className="w-full h-full text-left"
              >
                <span className="text-[color:var(--m-colors-gray900)] break-all text-[13px] leading-[17px] text-ellipsis">
                  {item.value}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function OptionDepthModal({
  setIsOpen,
  productCode,
  optionData,
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  productCode: number | string
  optionData?: OptionCategoryType
}) {
  const [animate, setAnimate] = useRecoilState<string>(depthBottomSheetState)

  const handleClose = () => {
    setAnimate('slide-down')
    setTimeout(() => {
      setIsOpen!(false)
    }, 200)
  }

  useEffect(() => {
    setAnimate('slide-up')
  }, [setAnimate])

  return createPortal(
    <div className="z-[9900] w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
      <div
        className="fixed bottom-0 max-h-[84vh] shadow-[rgba(0,0,0,0.2)_0px_-4px_16px] rounded-t-2xl inset-x-0 bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden"
        style={{ animation: `${animate} 0.2s forwards` }}
      >
        {setIsOpen && (
          <div className="bg-inherit h-[29px] flex items-center justify-center rounded-t-lg">
            <button
              type="button"
              onClick={handleClose}
              aria-label="구매 옵션 닫기"
            >
              <SlArrowDown color="gray" />
            </button>
          </div>
        )}
        <OptionModalChild
          handleClose={handleClose}
          productCode={Number(productCode)}
          optionData={optionData}
        />
      </div>
    </div>,
    document.getElementById('modal-root')!,
  )
}
