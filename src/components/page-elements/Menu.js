import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export default function Menu({ isMenuVisible, setIsMenuVisible }) {
  return (
    <StyledMenu isMenuVisible={isMenuVisible}>
      <Link to='/' onClick={() => setIsMenuVisible(false)}>
        Home
      </Link>
      <Link to='/plantacja' onClick={() => setIsMenuVisible(false)}>
        Plantacja
      </Link>
      <Link to='/galeria' onClick={() => setIsMenuVisible(false)}>
        Galeria
      </Link>
      <Link to='/artykuly' onClick={() => setIsMenuVisible(false)}>
        Artykuły
      </Link>
      <Link to='/kontakt' onClick={() => setIsMenuVisible(false)}>
        Kontakt
      </Link>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  text-align: right;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  transform: ${({ isMenuVisible }) =>
    isMenuVisible ? `translateX(0)` : `translateX(100%)`};

  @media (max-width: 991px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    /* font-weight: bold; */
    /* letter-spacing: 0.5rem; */
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 991px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: black;
    }
  }
`
