import React, { useState } from 'react'

import Footer from '../page-elements/Footer'
import Header from '../page-elements/Header'
import Menu from '../page-elements/Menu'

import '../../styles/fonts.css'

const Layout = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <div className='wrapper'>
      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      <Header
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
