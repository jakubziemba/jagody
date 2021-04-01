import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Gallery from 'components/Gallery'
import Jumbotron from 'components/page-elements/Jumbotron'

const Galeria = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "haskap-galeria.jpeg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <Jumbotron image={imageData} title='Galeria' />
      <Gallery />
    </>
  )
}

export default Galeria
