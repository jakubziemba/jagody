import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import useQueryHome from '../graphQL/useQueryHome'
import { Wrapper } from '../styled'
import FadeInWhenVisible from '../hooks/FadeInWhenVisible'

const StyledWrapper = styled(Wrapper)`
  @media (min-width: 992px) {
    padding: 5rem 5rem;
    flex-direction: row;
  }
`

const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  line-height: 1.8;

  @media (min-width: 992px) {
    margin-left: 2rem;
    padding: 0.23rem;
    font-size: 1.6rem;
    width: 50%;
  }
`
const ImageWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    width: 50%;
    /* padding: 2rem; */
  }
`

const About = () => {
  const data = useQueryHome()
  const { text } = data.prismicHome.data
  return (
    <FadeInWhenVisible>
      <StyledWrapper>
        <ImageWrapper>
          <StaticImage
            src='../images/tato.jpg'
            quality='100'
            alt='Marcin Wydra'
            placeholder='blurred'
            layout='fullWidth'
          />
        </ImageWrapper>
        <Text>{text}</Text>
      </StyledWrapper>
    </FadeInWhenVisible>
  )
}

export default About
