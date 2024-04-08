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
}

export default function PhontInput({ setPayload }: PayloadProps) {
  return (
    <>
      <div className={style.row}>
        <div className={`${style.column} ${style.telecom}`}>
          <div className={style.custom_sel}>
            <select name="telComCd" id="telComCd" title="통신사 선택">
              <option value="01">SKT</option>
              <option value="02">KT</option>
              <option value="03">LG U+</option>
              <option value="04">SKT 알뜰폰</option>
              <option value="05">KT 알뜰폰</option>
              <option value="06">LG U+ 알뜰폰</option>
            </select>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.column}>
          <span className={style.inp_txt}>
            <input
              type="tel"
              id="userMobile"
              name="telNo"
              maxLength={11}
              placeholder="-없이 휴대폰번호 입력"
              onChange={(e) => {
                setPayload((prevState) => ({
                  ...prevState,
                  phoneNum: e.target.value,
                }))
              }}
            />
          </span>
        </div>
      </div>
    </>
  )
}
