import { styled } from 'styled-components'

type Props = {
  $clicked: boolean
}

export const MainWrapper = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $clicked }) => $clicked === true ? 'flex-start;' : 'center;'}
  padding-bottom: 50px;
`

export const Result = styled.img`
  width: 150px;
  padding: 20px;
`

export const CardWrapper = styled.div<Props>`
  display: ${({ $clicked }) => $clicked === true ? 'flex;' : 'grid;'}
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: ${({ $clicked }) => $clicked === true ? null : '10px;'}
`

export const Button = styled.button`
 width: 30px:
 height: 15px;
 background: #d6d6d6;
 cursor: pointer;
 border: none;
 padding: 10px;
 border-radius: 10px;
`
