import * as S from './UiBookCard.style'

type Props = {
  img: string
  category: string
  name: string
  author: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openInfoFn?: (e: any) => void
}

export default function UiBookCard({
  img,
  category,
  name,
  author,
  openInfoFn,
}: Props) {
  return (
    <S.BookCardWrapper>
      <S.BookImg src={img} />
      <br />
      <S.BookCategory>{category}</S.BookCategory>
      <S.BookName onClick={openInfoFn}>{name}</S.BookName>
      <S.BookAuthor>{author}</S.BookAuthor>
    </S.BookCardWrapper>
  )
}
