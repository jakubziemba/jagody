import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import useQueryPlantation from '../graphQL/useQueryPlantation'
import Jumbotron from 'components/page-elements/Jumbotron'

const Plantacja = () => {
  const data = useQueryPlantation()
  const imageData = data.placeholderImage.childImageSharp.fluid

  return <Jumbotron image={imageData} title='Plantacja' />
}

export default Plantacja
