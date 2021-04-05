import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import useQueryArticles from '../graphQL/useQueryArticles'
import { Wrapper } from '../styled'
import FadeInWhenVisible from '../hooks/FadeInWhenVisible'

export const CardWrapper = styled(motion.div)`
  overflow: hidden;
  cursor: pointer;
  padding: 0 0 32px;
  margin: 48px auto 0;
  max-width: 300px;
  width: 100%;
  height: 400px;
  font-family: ${({ theme }) => theme.fonts.sans};
  box-shadow: 0 2px 20px rgba(43, 32, 56, 0.109);
  border-radius: 5px;

  @media (max-width: 892px) {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    object-fit: cover;
    object-position: 50% 100%;
  }
`

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const CardHeading = styled.h1`
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
  flex-direction: row;
  @media (max-width: 892px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

const Articles = () => {
  const {
    allPrismicArtykul: { edges },
  } = useQueryArticles()

  return (
    <FadeInWhenVisible>
      <Wrapper>
        <CardGrid>
          {edges.map(({ node: { data } }) => {
            return (
              <CardWrapper
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                key={data.title}
                onClick={() =>
                  navigate(data.link, {
                    state: { text: data.text, title: data.title },
                  })
                }
              >
                <CardHeader>
                  <CardHeading>{data.title}</CardHeading>
                </CardHeader>

                <CardBody>
                  <img
                    src={data.img?.url}
                    quality='100'
                    height='250'
                    width='250'
                    alt={data?.img.alt}
                    placeholder='blurred'
                    layout='fullWidth'
                  />
                </CardBody>
              </CardWrapper>
            )
          })}
        </CardGrid>
      </Wrapper>
    </FadeInWhenVisible>
  )
}

export default Articles
