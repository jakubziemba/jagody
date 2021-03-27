import Burger from './Burger'
import { Link } from 'gatsby'
// import MenuIconSvg from '../../assets/menu-icon.inline.svg'
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2 } },
}
export default function Header({ isMenuVisible, setIsMenuVisible }) {
  return (
    <Nav variants={variants} initial='initial' animate='animate'>
      <Logo>
        <Link to='/'>Jagodajnia</Link>
      </Logo>
      <Menu>
        {/* <Icon /> */}
        <Burger
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        <Links>
          <Link to='/plantacja'>Plantacja</Link>
          <Link to='/galeria'>Galeria</Link>
          <Link to='/artykuly'>Artykuły</Link>
          <Link to='/kontakt'>Kontakt</Link>
        </Links>
      </Menu>
    </Nav>
  )
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
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }

  @media (min-width: 992px) {
    padding-left: 5rem;
    font-size: 2rem;
  }
`
const Menu = styled.div`
  position: absolute;
  /* top: 15px; */
  right: 0;
  margin: 0;
  cursor: pointer;

  @media (min-width: 992px) {
    /* position: none; */
    /* display: flex; */
  }
`
// const Icon = styled(MenuIconSvg)`
//   width: 24px;
//   height: 24px;

//   @media (min-width: 992px) {
//     display: none;
//     visibility: hidden;
//   }
// `

const Links = styled.div`
  display: none;
  visibility: hidden;

  a {
    font-family: ${({ theme }) => theme.fonts.serif};
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.05rem;
    font-weight: bold;
    margin: 0 1rem;
    padding: 1rem 1rem;
  }

  @media (min-width: 992px) {
    visibility: visible;
    display: flex;
    /* justify-content: space-between; */
    padding-right: 5rem;
  }
`
