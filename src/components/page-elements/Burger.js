import React from 'react'
import styled from 'styled-components'

export default function Burger({ isMenuVisible, setIsMenuVisible }) {
  return (
    <StyledBurger
      isMenuVisible={isMenuVisible}
      onClick={() => setIsMenuVisible(!isMenuVisible)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
const StyledBurger = styled.button`
  position: absolute;
  top: -0.55rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 19px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 992px) {
    display: none;
    visibility: hidden;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 19px;
    height: 2px;
    background: ${({ isMenuVisible, theme }) =>
      isMenuVisible ? theme.colors.primary : theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isMenuVisible }) =>
        isMenuVisible ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')};
      transform: ${({ isMenuVisible }) =>
        isMenuVisible ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isMenuVisible }) =>
        isMenuVisible ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
