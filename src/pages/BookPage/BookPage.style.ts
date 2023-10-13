import styled from 'styled-components'

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const BookImgDiv = styled.div`
  padding: 30px 150px;
  background: grey;
`

export const BookImg = styled.img`
  width: 160px;
`

export const BookInfoWrapper = styled.article`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`

export const BookCategory = styled.span`
  text-decoration: underline;
`

export const BookAuthor = styled.span`
  text-decoration: underline;
`

export const BookInfo = styled.p`
  padding: 10px;
`

export const ExitButton = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`
