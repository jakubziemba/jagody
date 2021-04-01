import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

import About from 'components/About'
import Jumbotron from 'components/page-elements/Jumbotron'
import FadeInWhenVisible from '../hooks/FadeInWhenVisible'

const Home = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "index.jpeg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
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
      <Jumbotron image={imageData} title={title} subtitle={subtitle} />
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
    </>
  )
}

export default Home
