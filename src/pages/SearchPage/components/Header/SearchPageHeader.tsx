import * as React from 'react'
import Filter from 'src/components/Filter/Filter'
import * as S from './SearchPageHeader.style'
import icon from 'src/assets/search.png'

type Props = {
  ordered: React.Dispatch<React.SetStateAction<string>>
  sorted: React.Dispatch<React.SetStateAction<string>>
  searched: React.Dispatch<React.SetStateAction<string>>
  closeInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchPageHeader({
  ordered,
  sorted,
  searched,
  closeInfo,
}: Props) {
  const [searchFieldValue, setSearchFieldValue] = React.useState<string>('')

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    searched(searchFieldValue)
    closeInfo(false)
  }

  return (
    <S.HeaderWrapper>
      <S.Heading>Search for books</S.Heading>
      <S.InputWrapper>
        <S.Input
          value={searchFieldValue}
          onChange={(e) => setSearchFieldValue(e.target.value)}
          type="search"
          placeholder="Search..."
          name="search"
        />
        <S.Button onClick={(e) => handleButtonClick(e)}>
          <S.Icon src={icon} />
        </S.Button>
      </S.InputWrapper>
      <S.FilterWrapper>
        <Filter
          label="Sorting by"
          optionOne={'relevance'}
          optionTwo={'newest'}
          ordered={ordered}
        />
        <Filter
          ordered={sorted}
          label="Categories"
          optionOne={'All'}
          optionTwo={'Art'}
          optionThree={'Science'}
          optionFour={'Computers'}
          optionFive={'History'}
          optionSix={'Fiction'}
          optionSeven={'Poetry'}
          optionEight={'Medical'}
          optionNine={'Education'}
          optionTen={'Social Science'}
        />
      </S.FilterWrapper>
    </S.HeaderWrapper>
  )
}
