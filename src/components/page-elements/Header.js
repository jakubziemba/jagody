import { Link } from 'gatsby'
import MenuIconSvg from '../../assets/menu-icon.inline.svg'
import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Nav>
      <Logo>
        <Link to='/'>Jagodajnia</Link>
      </Logo>
      <Menu>
        <Icon />
      </Menu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  z-index: 10;
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
`
const Menu = styled.div`
  position: absolute;
  right: 0;
  margin: 0;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  vertical-align: middle;
`
const Icon = styled(MenuIconSvg)`
  width: 24px;
  height: 24px;
`
