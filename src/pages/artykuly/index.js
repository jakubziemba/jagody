import React from 'react'

import useQueryArticles from './useQueryArticles'
import Jumbotron from 'components/page-elements/Jumbotron'

export default function Artykuly() {
  const data = useQueryArticles()

  const imageData = data.placeholderImage.childImageSharp.fluid

  return <Jumbotron image={imageData} title='Artykuły' />
}
