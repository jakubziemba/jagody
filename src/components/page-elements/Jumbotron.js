import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
// framer-motion settings
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

export default function Jumbotron({ image, title, subtitle }) {
  return (
    <BackgroundImage Tag='section' fluid={image}>
      <JumbotronWrapper>
        <PageHeading>
          <motion.div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={mainTitle} initial='initial' animate='animate'>
              {title.split('').map((char, index) => {
                return (
                  <Span key={char + '-' + index} variants={letter}>
                    {char}
                  </Span>
                )
              })}
            </motion.h1>
          </motion.div>
          {subtitle && (
            <motion.div style={{ overflow: 'hidden', paddingBottom: '0.2rem' }}>
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
          )}
        </PageHeading>
      </JumbotronWrapper>
    </BackgroundImage>
  )
}

const JumbotronWrapper = styled.div`
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
    font-family: ${({ theme }) => theme.fonts.serif};
    text-transform: uppercase;
    font-size: 0.8rem;
    /* padding-bottom: 0.5rem; */
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
