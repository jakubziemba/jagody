import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Wrapper } from '../../styles'
import styled from 'styled-components'

export default function About() {
  return (
    <>
      <StyledWrapper>
        <ImageWrapper>
          <StaticImage
            src='../../images/me.jpg'
            quality='100'
            alt='Marcin Wydra'
            placeholder='blurred'
            layout='fullWidth'
          />
        </ImageWrapper>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam et
          aperiam, blanditiis quis voluptatum odit officiis quaerat earum ullam
          assumenda perferendis magnam provident laboriosam est libero expedita
          voluptas rem modi. Fugit, rerum molestias ad labore modi, quos eveniet
          doloribus repellendus aliquid sit, non mollitia. Tempore consequatur
          dicta ducimus laudantium accusamus, reprehenderit beatae
          necessitatibus incidunt quasi, maxime quis nihil delectus dolores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          corrupti omnis voluptatum blanditiis vero facere quisquam similique
          ut! Blanditiis rerum dicta saepe id, reprehenderit numquam nam sunt
          minima labore modi. Dolores qui natus explicabo, ipsum ratione sed
          quidem.
        </Text>
      </StyledWrapper>
    </>
  )
}
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
