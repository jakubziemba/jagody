import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.9rem;
`

const Footer = () => (
  <FooterWrapper>Copyright &copy;2021. All rights reserved.</FooterWrapper>
)

export default Footer
