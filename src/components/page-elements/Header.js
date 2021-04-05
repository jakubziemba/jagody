import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { names, links } from 'utils'

import Burger from './Burger'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2 } },
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  background-color: transparent;
  backdrop-filter: blur(3px);
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  z-index: 10;

  @media (min-width: 992px) {
    justify-content: space-between;
    min-height: 4rem;
  }
`

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: bold;
  font-size: 1.3rem;
  text-transform: uppercase;

  a {
    color: ${({ theme, isMenuVisible, innerHeight, scrollPosition }) =>
      isMenuVisible || scrollPosition > innerHeight
        ? theme.colors.primary
        : theme.colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  @media (min-width: 992px) {
    padding-left: 5rem;
    font-size: 2rem;
  }
`
const Menu = styled.div`
  position: absolute;
  right: 0;
  margin: 0;
  cursor: pointer;
`

const Links = styled.div`
  a {
    font-family: ${({ theme }) => theme.fonts.serif};
    color: ${({ theme, innerHeight, scrollPosition }) =>
      scrollPosition > innerHeight
        ? theme.colors.primary
        : theme.colors.secondary};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.05rem;
    font-weight: bold;
    margin: 0 1rem;
    padding: 1rem 1rem;
    transition: color 0.2s ease;
  }

  @media (min-width: 992px) {
    visibility: visible;
    display: flex;
    padding-right: 3rem;
  }
`

const Header = ({ isMenuVisible, setIsMenuVisible }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })

  const [scrollPosition, setScrollPosition] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    const setValues = () => {
      setInnerHeight(window.innerHeight - 25)
      setScrollPosition(window.scrollY)
    }
    setValues()
    window.addEventListener('scroll', setValues)

    return () => {
      window.removeEventListener('scroll', setValues)
    }
  })

  return (
    <Nav variants={variants} initial='initial' animate='animate'>
      <Logo
        isMenuVisible={isMenuVisible}
        innerHeight={innerHeight}
        scrollPosition={scrollPosition}
      >
        <Link to='/'>{names.JAGODAJNIA}</Link>
      </Logo>
      <Menu>
        {!isDesktop && (
          <Burger
            isMenuVisible={isMenuVisible}
            setIsMenuVisible={setIsMenuVisible}
            innerHeight={innerHeight}
            scrollPosition={scrollPosition}
          />
        )}

        {isDesktop && (
          <Links scrollPosition={scrollPosition} innerHeight={innerHeight}>
            {links.map(link => {
              if (link === 'Artykuły')
                return (
                  <Link key={link} to={`/artykuly`}>
                    {link}
                  </Link>
                )
              return (
                <Link key={link} to={`/${link.toLowerCase()}`}>
                  {link}
                </Link>
              )
            })}
          </Links>
        )}
      </Menu>
    </Nav>
  )
}

export default Header
