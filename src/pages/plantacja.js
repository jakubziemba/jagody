import { graphql, useStaticQuery } from 'gatsby'

import Jumbotron from 'components/page-elements/Jumbotron'
import React from 'react'
import styled from 'styled-components'

export default function Plantacja() {
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

  return <Jumbotron image={imageData} title='Plantacja' />
}
