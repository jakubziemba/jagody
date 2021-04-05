import React from 'react'

import useQueryHome from '../graphQL/useQueryHome'
import About from 'components/About'
import Jumbotron from 'components/page-elements/Jumbotron'

const Home = () => {
  const data = useQueryHome()
  const { title, subtitle } = data.prismicHome.data
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <Jumbotron image={imageData} title={title} subtitle={subtitle} />
      <About />
    </>
  )
}

export default Home
