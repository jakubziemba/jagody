import { graphql, useStaticQuery } from 'gatsby'

import Jumbotron from 'components/page-elements/Jumbotron'
import React from 'react'

export default function Artykuly() {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "haskap-artykuly.jpeg" }) {
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

  return <Jumbotron image={imageData} title='Artykuły' />
}
