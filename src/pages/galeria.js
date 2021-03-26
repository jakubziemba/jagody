import { graphql, useStaticQuery } from 'gatsby'

import Jumbotron from 'components/page-elements/Jumbotron'
import React from 'react'

export default function Galeria() {
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
      }
    `
  )

  const imageData = data.placeholderImage.childImageSharp.fluid

  return <Jumbotron image={imageData} title='Galeria' />
}
