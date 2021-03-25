import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterWrapper>Copyright &copy;2021. All rights reserved.</FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.9rem;
`
