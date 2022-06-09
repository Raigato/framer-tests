import React from 'react'
import AnimatedText from '../Elements/AnimatedText'
import AnimatedWrapper from '../Elements/AnimatedWrapper'
import { Container } from './SecondBlock.styled'

const SecondBlock = () => {
  return (
    <AnimatedWrapper>
      <Container>
        <AnimatedText text="This is our new S/S collection. Be Yourself, release the Beast." />
      </Container>
    </AnimatedWrapper>
  )
}

export default SecondBlock
