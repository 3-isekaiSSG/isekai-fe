import style from '@/components/Join/join.module.css'

interface State {
  name: string
  gender_male: boolean
  gender_female: boolean
  birth: string
  nation: string
  phone: string
}

interface SetPayload {
  (value: (prevState: State) => State): void
}

interface PayloadProps {
  setPayload: SetPayload
}

export default function BirthInput({ setPayload }: PayloadProps) {
  return (
    <div className={style.row}>
      <div className={style.column}>
        <span className={style.inp_txt}>
          <label
            htmlFor="userBirth"
            className="overflow-hidden absolute w-px h-px text-[0px]"
          >
            생년월일
          </label>
          <input
            id="userBirth"
            name="birthday"
            autoComplete="off"
            maxLength={8}
            placeholder="생년월일 8자리(예. 20100101)"
            onChange={(e) => {
              setPayload((prevState) => ({
                ...prevState,
                birth: e.target.value,
              }))
            }}
          />
        </span>
      </div>
      <div className={`${style.column} ${style.nation}`}>
        <div className={style.custom_sel}>
          <select
            id="userNation"
            name="nation"
            title="내/외국인 선택"
            onChange={(e) => {
              setPayload((prevState) => ({
                ...prevState,
                nation: e.target.value,
              }))
            }}
          >
            <option
              className="font-normal block min-h-[1.2em] whitespace-nowrap pt-0 pb-px px-0.5"
              value="1"
              aria-checked="true"
            >
              내국인
            </option>
            <option
              className="font-normal block min-h-[1.2em] whitespace-nowrap pt-0 pb-px px-0.5"
              value="2"
            >
              외국인
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}
