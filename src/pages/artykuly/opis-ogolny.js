import React from 'react'

import useQueryArticles from './useQueryArticles'
import Article from '../../components/Article'

export default function Opis({ location }) {
  const data = useQueryArticles()
  const imageData = data.placeholderImage.childImageSharp.fluid
  return (
    <Article
      text={location.state.text}
      title={location.state.title}
      imageData={imageData}
    />
  )
}
