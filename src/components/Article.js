import React from 'react'
import styled from 'styled-components'

import Jumbotron from 'components/page-elements/Jumbotron'

const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  line-height: 1.8;
  padding: 2rem;
`
export default function Article({ text, title, imageData }) {
  return (
    <>
      <Jumbotron image={imageData} title={title} />
      <Text>{text}</Text>
    </>
  )
}
