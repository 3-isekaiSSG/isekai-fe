'use client'

import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// export interface AlertProps {
//   isId: boolean
//   isPw: boolean
//   isValid: boolean
// }

export default function Alert() {
  const [propIsId, setPropIsId] = useState(false)
  const [propIsPw, setPropIsPw] = useState(true)
  const [propIsValid, setPropIsValid] = useState(true)

  useEffect(() => {
    setPropIsId(propIsId)
    setPropIsPw(propIsPw)
    setPropIsValid(propIsValid)
  }, [propIsId, propIsPw, propIsValid])

  const [open, setOpen] = useState(true)

  // if (!propIsId || !propIsPw || !propIsValid) {
  //   setOpen(true)
  // }

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen">
          <div className="flex h-full items-end justify-center p-4 text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden w-full rounded-lg bg-white text-left shadow-xl transition-all">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  {!propIsId && (
                    <p className="text-xs text-gray-500 ml-3">
                      아이디 또는 이메일 주소를 입력하세요.
                    </p>
                  )}
                  {!propIsPw && (
                    <p className="text-xs text-gray-500 ml-3">
                      비밀번호를 입력하세요.
                    </p>
                  )}
                  {!propIsValid && (
                    <p className="text-xs text-gray-500 ml-3">
                      아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인하신 후
                      입력해주세요.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center bg-[#ff5452] px-3 py-2 text-[13px] text-white shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  확인
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
