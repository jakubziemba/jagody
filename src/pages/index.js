import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return <Hello>Dzieńdoberek</Hello>
}

const Hello = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  text-transform: uppercase;
`
