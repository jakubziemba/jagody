import React from 'react'
import styled from 'styled-components'

import { Wrapper } from '../styled'
import Jumbotron from 'components/page-elements/Jumbotron'

const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  line-height: 1.8;
  padding: 1rem 0rem 3rem;

  @media (min-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const Article = ({ text, title, imageData }) => {
  return (
    <>
      <Jumbotron image={imageData} title={title} />
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    </>
  )
}

export default Article
