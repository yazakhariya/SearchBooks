import * as S from './BookPage.style'

type Props = {
  img: string
  category: string
  name: string
  author: string
  info: string
  closeInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BookPage({
  img,
  category,
  name,
  author,
  closeInfo,
  info,
}: Props) {
  const handleInfoClose = () => {
    closeInfo(false)
  }

  return (
    <S.BookWrapper>
      <S.BookImgDiv>
        <S.BookImg src={img} />
      </S.BookImgDiv>
      <S.BookInfoWrapper>
        <S.ExitButton onClick={handleInfoClose}>
          Go back to the list
        </S.ExitButton>
        <S.BookCategory>{category}</S.BookCategory>
        <h1>{name}</h1>
        <S.BookAuthor>{author}</S.BookAuthor>
        <S.BookInfo>{info}</S.BookInfo>
      </S.BookInfoWrapper>
    </S.BookWrapper>
  )
}
