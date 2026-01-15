import React from 'react'
import Hero from '../ui/Hero/Hero'
import Container from '../ui/Container'
import Features from '../ui/Features/Features'
import Work from '../ui/Work/Work'
import Pricing from '../ui/Pricing/Pricing'

const LandingPage = () => {
  return (
    <Container>
        <Hero />
        <Features />
        <Work />
        <Pricing />
    </Container>
  )
}

export default LandingPage