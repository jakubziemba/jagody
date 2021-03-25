import { graphql, useStaticQuery } from 'gatsby'

import About from 'components/page-elements/About'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jumbo.jpeg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
          frontmatter {
            templateKey
            title
            subtitle
          }
        }
      }
    `
  )
  const { title, subtitle } = data.markdownRemark.frontmatter
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <BackgroundImage Tag='section' fluid={imageData}>
        <Wrapper>
          <PageHeading>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </PageHeading>
        </Wrapper>
      </BackgroundImage>
      <About />
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

const PageHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  height: 100%;

  h1 {
    margin-bottom: 0.5rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.8rem;
  }
`
