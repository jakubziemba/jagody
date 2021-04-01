import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import useQueryContact from '../graphQL/useQueryContact'
import Jumbotron from 'components/page-elements/Jumbotron'

const Kontakt = () => {
  const data = useQueryContact()
  const imageData = data.placeholderImage.childImageSharp.fluid

  return <Jumbotron image={imageData} title='Kontakt' />
}

export default Kontakt
