import React, { useState } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../styled'
import FadeInWhenVisible from '../hooks/FadeInWhenVisible'

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 1rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 0.5rem;
  padding: 0rem 1rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  appearance: none;
  background: none;

  &:focus {
    appearance: none;
    outline: none;
    background: #f7f7f7;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  height: auto;
  margin: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  resize: none;
  border: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: none;
  appearance: none;

  &:focus {
    appearance: none;
    outline: none;
    background: #f7f7f7;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
`

const ContactForm = ({ action }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleInput = e => {
    switch (e.target.name) {
      case 'fullname':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
      default:
        return
    }
  }

  return (
    <FadeInWhenVisible>
      <StyledWrapper>
        <Form
          style={{ width: `100%` }}
          className='form'
          action={action}
          method='post'
        >
          <InputWrapper>
            <Input
              type='text'
              value={name}
              onChange={handleInput}
              name='fullname'
              placeholder='Imię i nazwisko'
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              value={email}
              onChange={handleInput}
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Textarea
              value={message}
              onChange={handleInput}
              name='message'
              rows='10'
              placeholder='Treść wiadomości'
              required
            ></Textarea>
          </InputWrapper>
          <ButtonWrapper>
            <Button type='submit'>Wyślij</Button>
          </ButtonWrapper>
        </Form>
      </StyledWrapper>
    </FadeInWhenVisible>
  )
}

export default ContactForm
