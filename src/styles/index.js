import styled from 'styled-components'

// framer-motion settings
export const transition = { duration: 1.1, ease: [0.6, 0.01, -0.05, 1.05] }

export const mainTitle = {
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

export const subTitle = {
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
export const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition },
  },
}

// components
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`

export const Title = styled.div`
  display: flex;
  padding: 1rem 0rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 2rem;
`
