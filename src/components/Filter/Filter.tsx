import * as S from './Filter.style'

type Props = {
  label: string
  optionOne: string
  optionTwo: string
  optionThree?: string
  optionFour?: string
  optionFive?: string
  optionSix?: string
  optionSeven?: string
  optionEight?: string
  optionNine?: string
  optionTen?: string
  ordered: React.Dispatch<React.SetStateAction<string>>
}

export default function Filter({
  label,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
  optionSix,
  optionSeven,
  ordered,
  optionEight,
  optionNine,
  optionTen,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation()
    ordered(e.target.value)
  }

  return (
    <S.Label>
      {label}
      <S.Select onChange={(e) => handleChange(e)} name="selectedOption">
        <option>{optionOne}</option>
        <option>{optionTwo}</option>
        {optionThree && <option>{optionThree}</option>}
        {optionFour && <option>{optionFour}</option>}
        {optionFive && <option>{optionFive}</option>}
        {optionSix && <option>{optionSix}</option>}
        {optionSeven && <option>{optionSeven}</option>}
        {optionEight && <option>{optionEight}</option>}
        {optionNine && <option>{optionNine}</option>}
        {optionTen && <option>{optionTen}</option>}
      </S.Select>
    </S.Label>
  )
}
