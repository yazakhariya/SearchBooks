import * as S from './NotFound.style'
import loader from 'src/assets/loader.svg'

export default function NotFound() {
  return (
    <S.PageWrapper>
      <h2>Cтраница не найдена...</h2>
      <img width="100px" src={loader} />
      <p><a href="/">Visit Homepage</a></p>
    </S.PageWrapper>
  )
}
