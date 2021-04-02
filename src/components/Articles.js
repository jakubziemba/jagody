import React from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'

import useQueryArticles from '../graphQL/useQueryArticles'
import { Wrapper } from '../styled'

export const CardWrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 400px;
  font-family: ${({ theme }) => theme.fonts.sans};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  @media (max-width: 892px) {
    grid-template-columns: repeat(1, 1fr);
  }
  &:hover {
    border: 3px solid rgba(104, 148, 188, 255);
  }
`

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
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
    <Wrapper>
      <CardGrid>
        {edges.map(({ node: { data } }) => {
          return (
            <CardWrapper
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
  )
}

export default Articles
