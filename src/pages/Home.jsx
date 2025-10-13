import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServiceSection from '../components/Home/ServiceSection'
import AboutSection from '../components/Home/About'
import UKMapInteractive from '../components/Map'
import TestimonialsSection from '../components/Test'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <UKMapInteractive />
      <TestimonialsSection />
    </div>
  )
}

export default Home
