import Jumbotron from 'components/page-elements/Jumbotron'
import React from 'react'

import useQueryArticles from './useQueryArticles'

export default function Artykuly() {
  const data = useQueryArticles()

  const imageData = data.placeholderImage.childImageSharp.fluid

  return <Jumbotron image={imageData} title='Artykuły' />
}
