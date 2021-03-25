import '../../styles/fonts.css'

import Footer from '../page-elements/Footer'
import Header from '../page-elements/Header'
import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
