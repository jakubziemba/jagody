import { Link } from 'gatsby'
import React, { useCallback } from 'react'
import styled from 'styled-components'

import { menuLinks } from 'utils'

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

const Menu = ({ isMenuVisible, setIsMenuVisible }) => {
  const handleClick = useCallback(() => {
    setIsMenuVisible(prevIsMenuVisible => !prevIsMenuVisible)
  }, [setIsMenuVisible])

  return (
    <StyledMenu isMenuVisible={isMenuVisible}>
      {menuLinks.map(link => {
        if (link === 'Artykuły')
          return (
            <Link to={`/artykuly`} key={link} onClick={handleClick}>
              {link}
            </Link>
          )
        return (
          <Link
            to={`/${link === 'Home' ? '' : link.toLowerCase()}`}
            key={link}
            onClick={handleClick}
          >
            {link}
          </Link>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
