import styled from 'styled-components'

export const BookCardWrapper = styled.div`
  background: #d6d6d6;
  border-radius: 10px;
  padding: 5px;
  width: 200px;
`

export const BookImg = styled.img`
  border-radius: 10px;
  width: 120px;
`

export const BookCategory = styled.span`
  text-decoration: underline;
  font-size: 15px;
`

export const BookName = styled.h3`
  &&:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const BookAuthor = styled.span`
  font-size: 15px;
`
