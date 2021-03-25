import React from 'react'
import { Wrapper } from '../../styles'
import styled from 'styled-components'

export default function About() {
  return (
    <Wrapper>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam et
        aperiam, blanditiis quis voluptatum odit officiis quaerat earum ullam
        assumenda perferendis magnam provident laboriosam est libero expedita
        voluptas rem modi. Fugit, rerum molestias ad labore modi, quos eveniet
        doloribus repellendus aliquid sit, non mollitia. Tempore consequatur
        dicta ducimus laudantium accusamus, reprehenderit beatae necessitatibus
        incidunt quasi, maxime quis nihil delectus dolores. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolorem, corrupti omnis
        voluptatum blanditiis vero facere quisquam similique ut! Blanditiis
        rerum dicta saepe id, reprehenderit numquam nam sunt minima labore modi.
        Dolores qui natus explicabo, ipsum ratione sed quidem. Modi, sequi
        architecto asperiores sunt reiciendis quod doloribus culpa perferendis.
        Illum vero dolores adipisci asperiores sequi, laborum error tenetur
        eligendi perspiciatis nesciunt? Quia dolor, facilis sunt pariatur illum
        quibusdam recusandae error omnis vero quos ipsa, exercitationem
        incidunt! Magni ipsa, placeat sit sequi eaque aliquam temporibus
        quibusdam dignissimos libero suscipit maxime accusamus impedit.
      </Text>
    </Wrapper>
  )
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  line-height: 1.3;
`
