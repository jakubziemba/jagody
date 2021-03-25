import '../../styles/fonts.css'

import Header from '../page-elements/Header'
import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
