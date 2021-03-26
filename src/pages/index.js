import { graphql, useStaticQuery } from 'gatsby'

import About from 'components/page-elements/About'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const transition = { duration: 1.1, ease: [0.6, 0.01, -0.05, 1.05] }

const mainTitle = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const subTitle = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delay: 0.6,
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition },
  },
}

const costam = 'eloelo3210'

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jumbo.jpeg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
          frontmatter {
            templateKey
            title
            subtitle
          }
        }
      }
    `
  )
  const { title, subtitle } = data.markdownRemark.frontmatter
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <BackgroundImage Tag='section' fluid={imageData}>
        <Wrapper>
          <PageHeading>
            <motion.div style={{ overflow: 'hidden' }}>
              <motion.h1
                variants={mainTitle}
                initial='initial'
                animate='animate'
              >
                {title.split('').map((char, index) => {
                  return (
                    <Span key={char + '-' + index} variants={letter}>
                      {char}
                    </Span>
                  )
                })}
              </motion.h1>
            </motion.div>
            <motion.div style={{ overflow: 'hidden' }}>
              <motion.h3
                variants={subTitle}
                initial='initial'
                animate='animate'
              >
                {subtitle.split('').map((char, index) => {
                  // return space in sentence
                  if (char === ' ') return ' '
                  return (
                    <Span key={char + '-' + index} variants={letter}>
                      {char}
                    </Span>
                  )
                })}
              </motion.h3>
            </motion.div>
          </PageHeading>
        </Wrapper>
      </BackgroundImage>
      <About />
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
`

const PageHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  height: 100%;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);

  h1 {
    margin-bottom: 0.5rem;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.8rem;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 8rem;
      margin-bottom: 1.4rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`

const Span = styled(motion.span)`
  display: inline-block;
  position: relative;
`
