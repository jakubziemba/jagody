import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 1rem;
`

export const Title = styled.div`
  display: flex;
  padding: 1rem 0rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2rem;
`
