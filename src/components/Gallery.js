import React from 'react'

import FadeInWhenVisible from '../hooks/FadeInWhenVisible'
import useQueryGallery from '../graphQL/useQueryGallery'
import Gallery from '@browniebroke/gatsby-image-gallery'
import { Wrapper } from '../styled'

const MyGallery = () => {
  const data = useQueryGallery()
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  return (
    <FadeInWhenVisible>
      <Wrapper>
        <Gallery images={images} />
      </Wrapper>
    </FadeInWhenVisible>
  )
}

export default MyGallery
