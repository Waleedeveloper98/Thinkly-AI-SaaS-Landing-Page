import React from 'react'
import Hero from '../ui/Hero/Hero'
import Container from '../ui/Container'
import Features from '../ui/Features/Features'
import Work from '../ui/Work/Work'

const LandingPage = () => {
  return (
    <Container>
        <Hero />
        <Features />
        <Work />
    </Container>
  )
}

export default LandingPage