'use client'

import { useEffect, useState } from 'react'
import style from '@/components/Join/join.module.css'

interface State {
  name: string
  gender_male: boolean
  gender_female: boolean
  birth: string
  nation: string
  phoneNum: string
}

interface SetPayload {
  (value: (prevState: State) => State): void
}

interface PayloadProps {
  setPayload: SetPayload
  male: boolean
  female: boolean
}

export default function NameInput({ setPayload, male, female }: PayloadProps) {
  const [maleState, setMaleState] = useState(false)
  const [femaleState, setFemaleState] = useState(false)

  useEffect(() => {
    setMaleState(male)
    setFemaleState(female)
  }, [male, female])

  return (
    <div className={style.row}>
      <div className={style.column}>
        <span className={style.inp_txt}>
          <input
            type="text"
            id="userName"
            name="name"
            maxLength={50}
            placeholder="이름"
            onChange={(e) => {
              setPayload((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }}
          />
        </span>
      </div>
      <div className={`${style.column} ${style.gender}`}>
        <span className={style.tag_group}>
          <span className={style.tag}>
            <input
              type="radio"
              id="userMale"
              checked={male}
              onChange={() => {
                setPayload((prevState) => ({
                  ...prevState,
                  gender_male: true,
                  gender_female: false,
                }))
              }}
            />
            <label
              htmlFor="userMale"
              className={`block relative min-w-[14px] h-[22px] text-sm leading-[22px] text-center z-10 pt-px pb-0 px-2.5 rounded-[13px] border ${maleState ? 'text-white border-black bg-black' : 'text-black border-[#c6cdd0] bg-white'}`}
            >
              남
            </label>
          </span>
          <span className={style.tag}>
            <input
              type="radio"
              id="userFemale"
              checked={female}
              onChange={() => {
                setPayload((prevState) => ({
                  ...prevState,
                  gender_male: false,
                  gender_female: true,
                }))
              }}
            />
            <label
              htmlFor="userFemale"
              className={`block relative min-w-[14px] h-[22px] text-sm leading-[22px] text-center z-10 pt-px pb-0 px-2.5 rounded-[13px] border ${femaleState ? 'text-white border-black bg-black' : 'text-black border-[#c6cdd0] bg-white'}`}
            >
              여
            </label>
          </span>
        </span>
      </div>
    </div>
  )
}
