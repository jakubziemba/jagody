import React from 'react'

import useQueryHome from '../graphQL/useQueryHome'
import About from 'components/About'
import Jumbotron from 'components/page-elements/Jumbotron'
import FadeInWhenVisible from '../hooks/FadeInWhenVisible'

const Home = () => {
  const data = useQueryHome()
  const { title, subtitle } = data.markdownRemark.frontmatter
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <Jumbotron image={imageData} title={title} subtitle={subtitle} />
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
    </>
  )
}

export default Home
