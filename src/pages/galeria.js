import React from 'react'

import useQueryGallery from '../graphQL/useQueryGallery'
import MyGallery from 'components/Gallery'
import Jumbotron from 'components/page-elements/Jumbotron'

const Galeria = () => {
  const data = useQueryGallery()
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <Jumbotron image={imageData} title='Galeria' />
      <MyGallery />
    </>
  )
}

export default Galeria
