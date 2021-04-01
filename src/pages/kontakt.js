import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Jumbotron from 'components/page-elements/Jumbotron'

const Kontakt = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "haskap-kontakt.jpeg" }) {
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

  return <Jumbotron image={imageData} title='Kontakt' />
}

export default Kontakt
