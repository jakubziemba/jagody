import React from 'react'

import useQueryContact from '../graphQL/useQueryContact'
import Jumbotron from 'components/page-elements/Jumbotron'
import ContactForm from 'components/ContactForm'

const Kontakt = () => {
  const data = useQueryContact()
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <>
      <Jumbotron image={imageData} title='Kontakt' />
      <ContactForm action={`${process.env.GATSBY_FORM_URL}`} />
    </>
  )
}

export default Kontakt
