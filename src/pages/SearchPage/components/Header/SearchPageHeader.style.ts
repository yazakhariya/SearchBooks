import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
`

export const Heading = styled.h1`
  color: #ffffff;
  margin: 40px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  border: 1px solid #ffffff;
  background: #ffffff;
`

export const Input = styled.input`
  display: block;
  width: 600px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #ffffff;
  background-clip: padding-box;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  outline: none;
  border: none;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const Icon = styled.img`
  width: 30px;
  padding: 3px;
`
export const FilterWrapper = styled.div`
  background: transparent;
  margin-bottom: 20px;
`
