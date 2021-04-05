import React, { useCallback } from 'react'
import styled from 'styled-components'

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

  &:focus {
    outline: none;
  }

  div {
    width: 19px;
    height: 2px;
    background: ${({ theme, isMenuVisible, innerHeight, scrollPosition }) =>
      isMenuVisible || scrollPosition > innerHeight
        ? theme.colors.primary
        : theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.2s linear;
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

const Burger = ({
  isMenuVisible,
  setIsMenuVisible,
  innerHeight,
  scrollPosition,
}) => {
  const handleClick = useCallback(() => {
    setIsMenuVisible(prevIsMenuVisible => !prevIsMenuVisible)
  }, [setIsMenuVisible])

  return (
    <StyledBurger
      isMenuVisible={isMenuVisible}
      onClick={handleClick}
      innerHeight={innerHeight}
      scrollPosition={scrollPosition}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
