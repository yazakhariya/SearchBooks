import * as React from 'react'
import * as S from './Main.style'
import SearchPageHeader from './components/Header/SearchPageHeader'
import result from 'src/assets/searchR.png'
import { useGetGoogleBooksQuery } from 'src/api/api'
import UiBookCard from 'src/components/UiBookCard/UiBookCard'
import BookPage from '../BookPage/BookPage'

export default function Main() {
  const [searchTerms, setSearchTerms] = React.useState<string>('')
  const [order, setOrder] = React.useState<string>('relevance')
  const [sort, setSort] = React.useState<string>(' ')
  const [title, setTitle] = React.useState<string>('')
  const [onBookClick, setOnBookClick] = React.useState<boolean>(false)
  const [visible, setVisible] = React.useState(10)
  const { data } = useGetGoogleBooksQuery({ order, searchTerms, visible })
  const [arr, setArr] = React.useState(Array(0))

  React.useEffect(() => {
    setArr(data?.items)
  }, [arr, data])

  function HandleButtonClick() {
    setVisible((prevNumber) => prevNumber + 30)
    if (visible === 40) {
      setVisible(40)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SeeBookInfo(e: any) {
    setOnBookClick(true)
    setSort('')
    setTitle(e.target.textContent)
    setOrder('')
  }

  const FilterBooks = (
    <S.CardWrapper $clicked={onBookClick}>
      {!data ? (
        <S.Result src={result} />
      ) : sort === 'Computers' ||
        sort === 'Fiction' ||
        sort === 'Poetry' ||
        sort === 'Science' ||
        sort === 'Medical' ||
        sort === 'Art' ||
        sort === 'Education' ||
        sort === 'Social Science' ||
        sort === 'History' ? (
        arr
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.filter((el: any) =>
            el.volumeInfo.categories ? el.volumeInfo.categories[0] === sort : ''
          )
          .slice(0, visible)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((el: any) => {
            return (
              <UiBookCard
                openInfoFn={SeeBookInfo}
                key={el.id}
                img={el.volumeInfo.imageLinks?.thumbnail}
                category={el.volumeInfo.categories}
                name={el.volumeInfo.title}
                author={el.volumeInfo.authors}
              />
            )
          })
      ) : onBookClick ? (
        arr
          ?.filter(
            (el: { volumeInfo: { title: string } } ) =>
              el.volumeInfo.title === title
          )
          .slice(0, 1)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((el: any) => {
            return (
              <BookPage
                closeInfo={setOnBookClick}
                key={el.id}
                img={el.volumeInfo.imageLinks?.thumbnail}
                category={el.volumeInfo.categories}
                name={el.volumeInfo.title}
                author={el.volumeInfo.authors}
                info={el.searchInfo.textSnippet}
              />
            )
          })
      ) : arr ? (
        arr
          ?.slice(0, visible)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((el: any) => {
            return (
              <UiBookCard
                openInfoFn={(e) => SeeBookInfo(e)}
                key={el.id}
                img={el.volumeInfo.imageLinks?.thumbnail}
                category={el.volumeInfo.categories}
                name={el.volumeInfo.title}
                author={el.volumeInfo.authors}
              />
            )
          })
      ) : (
        'Loading...'
      )}
    </S.CardWrapper>
  )

  return (
    <S.MainWrapper $clicked={onBookClick}>
      <SearchPageHeader
        searched={setSearchTerms}
        sorted={setSort}
        ordered={setOrder}
        closeInfo={setOnBookClick}
      />
      {data && !onBookClick ? <p>Total: {data.totalItems}</p> : null}
      {FilterBooks ? FilterBooks : null}
      {data && !onBookClick ? (
        <S.Button onClick={HandleButtonClick} children={'Load more'} />
      ) : null}
    </S.MainWrapper>
  )
}
